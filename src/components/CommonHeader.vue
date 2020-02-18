<template>
    <header>
        
        
        <div class="l-content">
            <el-button plain icon="el-icon-menu" size="mini" @click="collapseMenu"></el-button>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
                <el-breadcrumb-item :to="current.path" v-if ="current">
                    {{current.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                 <el-avatar size="large" :src="userImg"></el-avatar>
                </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item icon="el-icon-plus">user center</el-dropdown-item>
                <el-dropdown-item icon="el-icon-circle-plus">exit</el-dropdown-item>
         
            </el-dropdown-menu>
            </el-dropdown>
        </div>


    </header>
</template>

<script>
import{mapState} from 'vuex'
export default {
    data() {
        return {
            userImg:require('../assets/images/user.png')
        }
    },
    computed:{
        ...mapState({
        current:state => state.tab.currentMenu
        })
    },
    methods:{
        collapseMenu(){
        this.$store.commit('collapseMenu')
    }
    }
    
}
</script>

<style lang="scss" scoped>
header{
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: space-between;
}
.l-content{
    display: flex;
    align-items: center;
    .el-button{
        margin-right: 20px;
    }
}
</style>

<style lang="scss">
.el-breadcrumb__item{
    .el-breadcrumb__inner{
        color:#f4f4f4;
    }
    &:last-child{
        .el-breadcrumb__inner{
            color:#fff;
        }
    }
}
</style>