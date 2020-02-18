<template>
  
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      >
      <h2 v-show="!isCollapse">MyFitness</h2>
      <h2 v-show="isCollapse">MF</h2>
      <el-menu-item :index="item.path" v-for="item in asideMenu" :key="item.path" @click="clickMenu(item)">
        <i :class="'el-icon-'+item.icon"></i>
        <span slot="title">{{item.label}}</span>
      </el-menu-item>
      
    </el-menu>
  
  
</template>

<script>

export default {
    computed:{
      isCollapse(){
        return this.$store.state.tab.isCollapse
      }
    },
    data(){
        return{
            asideMenu:[
                {
                    path:'/',
                    name:'home',
                    label:'Home',
                    icon:'s-home'
                },
                {
                    path:'/input',
                    name:'input',
                    label:'Input',
                    icon:'edit'
                },
                {
                    path:'/date',
                    name:'date',
                    label:'Date',
                    icon:'date'
                },
                { 
                    path:'/set',
                    name:'set',
                    label:'Set',
                    icon:'setting'
                }
            ]
        }
    },
    methods: {
      clickMenu(item){
        this.$router.push({name:item.name})
        this.$store.commit('selectMenu',item)
      }
    }
}
</script>

<style lang="scss" scoped>
.el-menu{
    height: 100%;
    border: none;
    h2{
      color: #fff;
      text-align: center;
      line-height: 48px;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>