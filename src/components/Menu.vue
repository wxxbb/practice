<template>
  <div style="padding-top: 30px;height: 500px;">
 <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo ca"
          default-active="2"
          text-color="#fff"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><Ship /></el-icon>
              <span>HTML</span>
            </template>
            <el-menu-item-group title="函数">
              <el-menu-item index="1-1"><router-link to="/about">箭头函数</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/">vue3路由</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3"><router-link to="/home">正则表达式</router-link></el-menu-item>
              <el-menu-item index="1-4-1"><router-link to="/vueone">Vueone</router-link></el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="2">
            <template #title>
              <el-icon><MoonNight /></el-icon>
              <span>CSS</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="3">
            <template #title>
              <el-icon><document /></el-icon>
              <span>Java Script</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1">item one</el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-sub-menu index="4">
            <template #title>
              <el-icon><setting /></el-icon>
              <span>VUE</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1"><router-link to="/about">VUE</router-link></el-menu-item>
              <el-menu-item index="1-2">item two</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
    </div>
  </template>
  
  <script lang="ts" setup>
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
  } from '@element-plus/icons-vue'
  const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  <style scoped>
  a{
    text-decoration: none;
    color: aliceblue;
  }
</style>
  