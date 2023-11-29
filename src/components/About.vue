<template>
      <h1>箭头函数</h1>
      <p>{{ ptext }}</p>
      <button @click="copytext">复制</button>
      <h2>
        1、箭头函数的格式
      </h2>
        <p>定义函数：</p>
        <p>var 函数名 = (形参列表)=>{</p>
            <p>&nbsp&nbsp&nbsp函数体</p>
        <p>}</p>
        <p>调用函数</p>
        <p>函数名（实参列表）</p>
        <h2>2、箭头函数中省略形参列表的圆括号</h2>
        <p>当箭头函数里，有形参并且形参只有一个时，
            可以省略括号，没有形参（或者多个形参时，不能省略圆括号。
        </p>
        <p>var 函数名 = 形参 =>{</p>
            <p>函数体</p>
         <p>}</p>
         <h2>3、箭头函数中省略return和函数体的花括号</h2>
         <p>当函数体中只有一句代码时，可以省略掉花括号和return关键字</p>
         <p>格式：</p>
         <p>var 函数名 = (形参列表)=>函数体</p>
         <h2>4、箭头函数返回对象时，加上圆括号</h2>
         <p>当函数体中只有一句代码，并且返回值json对象时，如果想省略掉花括号和return关键字，
            那么就需要增加圆括号
         </p>
         <p>var person = (name,age) =>({name:name,age:age})</p>
         <h2>箭头函数的特点</h2>
         <p>1、箭头函数里没有arguments</p>
         <p>2、箭头函数里没有自己的this，箭头函数的this一般指的是上下文中函数的this </p>
         <p>js获取标签内容的方法：1.doucument.getElementById('').innerHTML;
          2.doucument.getElementById('').innerText;
          3.doucument.getElementById('').textContent</p>

</template>
<script setup>
import {onMounted, ref} from 'vue'
import useClipboard from 'vue-clipboard3'
const { toClipboard } = useClipboard()
const ptext = '箭头函数不使用关键字function来声明，箭头函数是匿名函数的简写形式，参数的圆括号可以省略，return也可以省略，函数体的花括号也可以省略。但是要符合相应的条件。'
//const copya = ref(null)
  const copytext = async (msg)=>{
    try{
      await toClipboard(ptext)
    }catch(e){
    }
  }
onMounted(()=>{

})
</script>
<style scoped>
p{
      text-indent: 2em;
}
</style>