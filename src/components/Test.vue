<template>
  <div>
    <h2>HTML</h2>
    <canvas id="can" ref="can"></canvas>
    <p>&ltimg&gt的title与alt有什么区别</p>
    <p>title是提示文本，鼠标放在图片上提示的文字</p>
    <p>alt是图片显示不出来时，显示该内容替代</p>
    <h2>label的作用是什么，如何使用</h2>
    <p>label与表单input配合使用，当点击label中的文字时，浏览器会自动对焦到表单控件上，
    扩大范围，&ltlabel for="sex"&gt男&lt/label&gt &ltinput type="" id="sex"&gt</p>
    <h2>input标签的type常用属性</h2>
    <p>1.checkbox：复选框用于多项选择，可以应用checked属性，指定默认选中项。</p>
    <p>2.radio：单选按钮用于单项选择，如性别、是否操作等。定义单选按钮时，必须为同一组的
        选项指定相同的name值，这样才会生效。可以对单选按钮应用checked属性，指定默认选中项。</p>
    <p>3.password：密码框用来输入密码，其内容以圆点的形式显示</p>
    <p>4.text：单行文本输入框常用来输入简短的信息，如用户名、账号等，常用属性有name,value,maxlength</p>
    <p>5.submit：from表单数据提交，设置value属性，更改按钮的默认文本</p>
    <p>6.reset：重置按钮，可以取消表单已输入的信息，设置value属性，更改按钮的默认文本</p>
    <p>7.button：按钮，与&ltbutton&gt不同不同，button可以使用文本或图片等，
    但button在表单from中主流浏览器时提交的是value值，在IE中提交的标签之间的文本内容</p>
    <h2>title和h，b和strong，i和em标签区别</h2>
    <p>title没有明确意义，只是标题,h标签是层次明确的标题，加大加粗</p>
    <p>b和strong都是加粗，strong更加语气化</p>
    <p>i为斜体，em斜体并加强语气</p>
    <h2>语义化使页面的内容结构更加简单易懂，便于搜索引擎解析，便于阅读维护和理解</h2>
    <h2>sessionStorage与localStorage、cookie</h2>
    <p>sessionStorage与localStorage的数据是本地存储，不会把数据发送给服务器，
      sessionStorage关闭浏览器后数据自动删除，localStorage不会删除，永久存放。
      cookie在设置的过期时间之前一直有效，在浏览器和服务器之间传递。</p>
    <p>sessionStorage与localStorage(5M)存储，cookie(4K)，session存储任何类型，
      cookie只能存储ASCII</p>
    <p>作用域：localStorage、cookie在所有同源窗口都是共享的，sessionStorage不在
      不同浏览器窗口共享，即使是同一个页面。</p>
    <h2>盒模型：</h2>
     <p>IE模型：width和height包含content、padding、border <br/>
      W3C模型:widath和height只包含content</p> 
      <p>box-sizing：content-box标准盒模型</p>
      <p>box-sizing：border-box IE模型</p>
      <h2>CSS选择器权重</h2>
      <p>1.就近原则，后加样式优先于前面的样式</p>
      <p>2.内嵌>内联>外联</p>
      <p>3.!important>行内 1000>id选择器 100>类选择器、伪类选择器10>标签选择器1（与伪元素选择器）>继承或者*（通配符）</p>
      <!-- <div style="width: 0px;height: 0px;border-left: 100px solid rgb(17, 255, 0) ;border-top: 100px solid transparent; border-top-left-radius: 100px;border-bottom-left-radius: 100px; "></div> -->
      <h2>display和visibility的区别</h2>
      <p>display：block/none，隐藏(无)后不占用位置</p>
      <p>visibility：visible/hidden,隐藏后占用位置</p>
      <p>ouerflow：visible/hidden，溢出部分隐藏</p>
      <p>隐藏：z-index设置为负值被覆盖；opacity:0透明；position:absolute定位到看不见的区域；tranform:scale(0,0)缩放隐藏</p>
      <div style="position: relative;background-color: rgb(22, 246, 34);width: 600px;height: 10px;overflow: hidden;">
        <div class="test"></div>
      </div>
      <p>BFC：块级格式化上下文，它是一个独立的渲染区域，主要用于控制块元素的布局和清除浮动元素的影响。每个BFC都有自己的渲染规则，
        不会收到外部影响，并且其内部元素也不会影响外部元素。一个BFC区域只包含其子元素，不包括子元素的子元素。不同BFC区域之间是相互独立的。
        实现BFC（块级格式化上下文）的方法：1.浮动元素，float，除none以外的值。2.定位元素，position的值不是static
        或者relative。3.display为inline-block,table属性table-cell,table-caption,table,table-row,tab-row-group
        ,table-header-group,table-footer-group,inline-table,flow-root),flex,inline-flex,grid,inline-grid.
        4.overflow除了visible以外的值（hidden,auto,scroll）.5.根元素&lthtml&gt就是一个BFC</p>
        <p>BFC的作用：1.避免外边距重叠（防止magin塌陷），相邻两个之间设置margin，会发生重叠，取大值的一个，将其中一个
          包裹一层父元素设置overflow:hidden为BFC避免。2.清除浮动（父元素高度塌陷）：父元素未设置高度，其由内部元素撑起，此时内部元素浮动
          ，则父元素会失去支撑，没有高度，将父元素设置overflow:hidden为BFC清除浮动。3.阻止浮动元素覆盖兄弟元素：其中一个兄弟元素
          设置浮动时，浮动元素会覆盖非浮动元素的兄弟元素，给被影响的兄弟元素设置BFC消除覆盖。</p>
        <p>清除浮动的方式：1.额外标签法，也叫隔墙法，W3C推荐的做法。2.父级添加overflow属性。3.父级添加伪元素::after{
          content:'';display:block;heigth:0;clear:both;visibility:hidden;}。3.</p>
  </div>
</template>
<script setup>
import {ref,reactive,watch,onMounted} from 'vue'
 const msg = ref({count:0})
// const msg1 = ref(9)
// watchEffect(()=>{
//   console.log(msg.value)
//   console.log(msg1.value)
// })
watch(()=>msg,(newvalue,oldvalue)=>{
  console.log(newvalue,oldvalue)
})
const can = ref(null)
onMounted(()=>{
  const canvas = can.value
  const context = can.value.getContext('2d')
  context.strokeStyle = "red"
  context.lineWidth = 1;
  context.fillRect(0, 0, 20, 20)
  context.strokeRect(0, 70, 20, 20)
  context.clearRect(0,0,10,10)
  context.beginPath()
  context.moveTo(100,30)
  context.lineTo(200,50)
  context.lineTo(150,80)
  context.fill()
  context.closePath()
  context.stroke()
  context.beginPath()
  context.arc(100,100,30,0,Math.PI/2,false)
  context.closePath()
  context.fill()
  context.beginPath()
  context.strokeStyle = "green"
  context.moveTo(200,100)
  context.quadraticCurveTo(250,50,100,100)
  context.stroke()
  
})
// //can0.value.tagname = "color:red"
// canq.value.classList.add("test1")
//console.log(canvas)
// const context = canvas.getContext('2d')
// context.strokeStyle = "red"
// context.lineWidth = 3;
// context.strokeRect(0, 0, 20, 20)
</script>
<style scoped>
p{
  text-indent: 2em;
  margin: 8px 0;
}
.test{
  position: absolute;
  /* top:50%;
  left:50%;
  transform: translate(-50%,-50%); */
  background-color: blueviolet;
   width: 100px;
   height: 10px;
   animation: myfirst 3s linear 1s infinite ;
}
@keyframes myfirst{
  0% {background-color: blueviolet;left:-100px;}
  /* 10% {background-color: rgb(29, 231, 106);left:0;}
  20% {background-color: rgb(243, 24, 50);}
  30% {background-color: rgb(215, 204, 226);}
  40% {background-color: rgb(220, 226, 43);height: 200px;}
  70% {background-color: rgb(22, 115, 36);width:250px} */
  100% {background-color: rgb(229, 173, 20);left:600px;}
}
#can{
  width:600px;
  height: 300px;
    background-color: blueviolet;
} 
</style>