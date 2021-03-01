<template>
  <div>
      <!-- 主标题 -->
        <h1 class="c-default">Joint API</h1>
        <el-divider></el-divider>
        <div class="content-div">
            <p class="m-r-b-10">这是开源的JointJS核心库的API参考. 正在寻找api配置的话，从这里开始(*^▽^*).</p>
            <p class="m-r-b-10">JointJS库导出了三个全局变量: <i class="bg-border">joint</i>, <i class="bg-border">V</i>和<i class="bg-border">g</i>。</p>
            <p class="m-r-b-10">joint名称空间包含您将用于构建图表的所有对象。此外,<i class="bg-border">joint.version</i>属性告诉你使用的是哪个版本的JointJS。</p>
            <p class="m-r-b-10"><a href="javascript:;" class="bg-border" @click="routhChange">V</a>  global是一个轻量级的SVG库，我们称之为Vectorizer。
                这个小库使得使用SVG文档的操作更加容易。JointJS在内部使用这个库。
                通常情况下，您根本不需要接触这个库，但对于高级用途，它可以很方便。</p>
            <p class="m-r-b-10">g global是JointJS内部使用的另一个轻量级库，它提供了许多有用的几何操作。同样，您可能没有接触到这个库，
                但当您确实需要在应用程序中执行几何操作时，您肯定会发现它很有帮助。</p>
        </div>
  </div>
</template>

<script>
export default {
    methods: {
        // 路由跳转  
        routhChange(){

        }
    }
}
</script>


<style scoped>
.content-div{
    font-size: 15px;
}
</style>
