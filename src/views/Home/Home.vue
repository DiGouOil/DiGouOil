<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8">
            <el-card shadow="always" style="height: 215px">
                <div class="user">
                    <img :src="userImag" alt="">
                    <div class="login-info">
                        <p class="username">Rin</p>
                        <p class="text">Hello, World!</p>
                    </div>
                </div>    
            </el-card>

            <el-card shadow="hover" style="height: 290px;margin-top:20px;">
                <el-table :data="tableData" stripe>
                    <el-table-column  show-overflow-tooltip  v-for="(val, key) in tableLabel" :key="key" :prop="key" :label="val"></el-table-column>

                </el-table>
            </el-card>
        </el-col>
            
        <el-col :span="16">
            <div class="num">
                <el-card shadow="hover">
                    <div slot="header" class="clearfix">
                        <span>カロリー摂取可能</span>
                    </div>
                    <div class="text">
                        2000-1406=697
                    </div>
                </el-card>
            </div>
            <div>
                <el-card shadow="hover">
                    <echarts :chartData="echartData.pie" style="width:600px;height:340px;" :isAxisChart="false"></echarts>
                </el-card>
            </div>

        </el-col>
    </el-row>
</template>

<script>
import echarts from '../../components/EChart'
    export default {
        components:{
            echarts
        },
        data () {
            return {
                // charts:'',
                // opinion:['炭水化物','脂肪','タンパク質'],
                // opinionData:[
                //     {value:76,name:'炭水化物'},
                //     {value:42,name:'脂肪'},
                //     {value:181,name:'タンパク質'}
                // ],
                userImag:require('../../assets/images/user.png'),
                tableData:[],
                tableLabel:{
                    name:'Name',
                    total:'Total',
                    calorific:'Calorific',
                    
                },
                echartData:{
                    pie:{
                        series:[]
                    }
                }

            }
        },
        // mounted(){
        //     this.$nextTick(function(){
        //         this.drawPie('main')
        //     })   
        // },
        methods:{
            getTableData(){
                this.$http.get('/home/getData').then(res=>{
                    res = res.data
                    this.tableData = res.data.tableData
                    this.echartData.pie.series.push({
                        data: res.data.videoData,
                        type: 'pie'
                    })    
                })
            },
            // drawPie(id){
            //     this.charts = echarts.init(document.getElementById(id))
            //     this.charts.setOption({
            //         tooltip:{
            //             trigger:'item',
            //         },
            //         legend:{
            //             orient:'vertical',
            //             left:10,
            //             data:this.opinion
            //         },
            //         series:[
            //         {
            //             name:'エネルギー',
            //             type:'pie',
            //             radius:['50%','70%'],
            //             avoidLabelOverlap: false,
            //             label: {
            //                 normal: {
            //                     show: false,
            //                     position: 'center'
            //                 },
            //                 emphasis: {
            //                     show: true,
            //                     textStyle: {
            //                         fontSize: '30',
            //                         fontWeight: 'bold'
            //                     }
            //                 }
            //             },
            //             labelLine: {
            //                 normal: {
            //                     show: false
            //                 }
            //             },
            //             data:this.opinionData
            //         }]
            //     })
            // }
        },
        created(){
            this.getTableData()
        }   
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/scss/home";
</style>