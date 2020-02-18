<template>
    <div class="manage">
        <el-dialog :title="operateType==='add'?'add':'updata'" :visible.sync="isShow">
            <common-form :formLabel="operateFormLabel" :form="operateForm" ref="form"></common-form>    
            <div slot="footer" class="dialog-footer">
                <el-button @click="isShow = false">cancel</el-button>
                <el-button type="primary" @click="confirm">definite</el-button>
            </div>
        </el-dialog>
        <div class="manage-header">
            <el-button type="primary" @click="addUser">+New</el-button>
            <common-form inline :formLabel="formLable" :form="searchFrom" >
                <el-button type="primary" @click="getList(searchFrom.keyword)">Search</el-button>                
            </common-form>          
        </div>
        <common-table :tableData="tableData" :tableLabel="tableLabel" :config="config" @changePage="getList()" @edit="editUser" @del="delUser"></common-table>   
    </div>
</template>

<script>
import CommonForm from "../../components/CommonForm"
import CommonTable from "../../components/CommonTable"
export default {
    components:{
        CommonForm,
        CommonTable
    },
    data(){
        return{
            operateType:'add',
            isShow:false,
            tableData:[],
            tableLabel:[
                {
                    prop:'name',
                    label:'name',
                    width: 200
                    
                },
                {
                    prop:'carbo',
                    label:'Carbohydrate',
                    width: 200
                },
                {
                    prop:'pro',
                    label:'Proteins',
                    width: 200
                },
                {
                    prop:'fat',
                    label:'Fat',
                    width: 200
                },
                
                {
                    prop:'calo',
                    label:'Calorific',
                    width: 200
                },
            ],
            config:{
                page:1,
                total:30,
                loading:false
            },
            operateForm:{
                name:'',
                carbo:'',
                pro:'',
                fat:'',
                calo:'',  
            },
            operateFormLabel:[
                {
                    model:'name',
                    label:'Name'
                  
                },
                {
                    model:'carbo',
                    label:'Carbo'
                   
                },
                {
                    model:'pro',
                    label:'Proteins'
                
                },
                {
                    model:'fat',
                    label:'Fat'
                    
                    
                },
                {
                    model:'calo',
                    label:'Calorific'
                    
                },
            ],
            searchFrom:{
                keyword:''
            },
            formLable:[
                {
                    model:'keyword',
                    label:'',
                    type:''
                }
            ]
        }
    },
    methods:{
        getList(name=''){
            this.config.loading = true
            name ? (this.config.page = 1):''
            this.$http
                .get('/api/user/getUser', {
                    params: {
                        page: this.config.page,
                        name
                    }
                })
                .then(res => {
                    this.tableData = res.data.list.map(item => {
                        
                        return item
                    })
                    this.config.total = res.data.count
                    this.config.loading = false
            })
        },
        addUser() {
            this.operateForm = {}
            this.operateType = 'add'
            this.isShow = true
        },
        editUser(row){
            this.operateType = 'edit'
            this.isShow = true
            this.operateForm = row
        },
        delUser(row){
            this.$confirm('This operation will delete the file, do you want to continue?', 'Attention', {
                cancelButtonText: 'No',
                confirmButtonText: 'Yes',
                
                type: 'warning'
            })
            .then(() => {
                let id = row.id
                this.$http.get('/api/user/del', {
                    params: {
                        id
                    }
                })
                .then(res => {
                    console.log(res.data)
                    this.$message({
                        type: 'success',
                        message: 'Successfully'
                    })
                    this.getList()
                })
            })
            .catch(() => {
                this.$message({
                    type: 'info',
                    message: 'Canceled'
                })
            })
        },
        changePage(val){
            console.log(val)
        },
        confirm(){
            if(this.operateType==='edit'){
                this.$http.post('/api/user/edit',this.operateForm)
                .then(res=>{
                    console.log(res.data)
                    this.isShow = false
                    this.getList()
                })
            }else{
                this.$http.post('/api/user/add', this.operateForm)
                .then(res => {
                    console.log(res.data)
                    this.isShow = false
                    this.getList()
                })
            }
        },
    },
    created(){
        this.getList()
    }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/common";
</style>