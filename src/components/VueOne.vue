<template>
  <div>
    <h2>依赖注入provide、inject</h2>
    <p>通常情况下，当我们需要从父组件向子组件传递数据时，会使用 props。想象一下这样的结构：有一些多层级嵌套的组件，
        形成了一颗巨大的组件树，而某个深层的子组件需要一个较远的祖先组件中的部分数据。在这种情况下，如果仅使用 props 
        则必须将其沿着组件链逐级传递下去.provide 和 inject 可以帮助我们解决这一问题。 [1] 一个父组件相对于其所有的
        后代组件，会作为依赖提供者。任何后代的组件树，无论层级有多深，都可以注入由父组件提供给整条链路的依赖。</p>
        <p>provide接收两个参数：provide('name',readonly(value)),name提供的属性名称,value提供的属性值。</p>
        <p>inject接收两个参数：inject('name','')第一个参数name为provide传过来的name，第二个参数可以给一个默认值6</p>
  </div>
</template> 
