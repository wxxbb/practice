<script lang="ts" setup>
import {ref} from 'vue'
import Menu from './components/Menu.vue'
// const buttontest = ref(null)
// function change(){
//   console.log('a')
//   buttontest.value.classList.add("test")
//   setTimeout(function(){
//     buttontest.value.classList.remove("test")
//   },1500)
// }
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  
}
var vm = new Vue({
  data:{
    msg:'msg'
  },
  computed:{
    mm:function () {
    return 
  }
},
  methods:{
    gg:function (){
      
    }
  }
})
</script>
<template>
  <el-affix position="top" :offset="0">
  <header>
  <div> 
  <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <div style="width:60px;height: 60px;margin-right: 160px;">
      <router-link to="/"><img src="../public/logo.jpg" style="width:60px;height: 60px;" /></router-link>
    </div>
    <el-menu-item index="1"><router-link to="/">面试题汇总</router-link></el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1"><router-link to="/A">item one</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="/Home">item two</router-link></el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3">Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
</div>
  </header>
</el-affix>
  <div style="width: 15%;height: 500px; float: left;">
    <Menu />
  </div>
  <div style="min-height:450px;margin: 30px 0 0 30px; padding: 15px;width:70% ;float: left;background-color: antiquewhite;opacity: 0.5;">
    <router-view></router-view>
  </div>
 <!-- <h1>router test</h1>
 <div > -->
  <!-- <button @click="change" ref="buttontest">变色</button> -->
  <!-- <router-link to="/">go to A</router-link>&nbsp
  <router-link to="/Home">go to home</router-link>&nbsp
  <router-link to="/about">go to about</router-link>
  <router-view></router-view>
 </div> -->
</template>
<style scoped>
.test{
    background-color: blueviolet;
}
 a{
  text-decoration: none;
  color: aliceblue;
 }
</style>

var app = new Vue({
  el:'#app',
  data:{
    msg:'kk'
  },
  computed:{
    msgcom:function(){

    }
  },
  methods:{
    fn:function () {

    }
  },
})