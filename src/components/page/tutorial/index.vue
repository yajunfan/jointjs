<template>
  <div class="start-container">
        <h1 class="c-default">{{lists.title}}</h1>
        <el-divider></el-divider>
        <p v-html="lists.content"></p>
        <el-collapse v-model="activeNames" class="collapse-box">
            <el-collapse-item  :name="item.id" v-for="item in lists.children" :key="item.id">
                <template slot="title">
                    <h3 class="c-default f-t-20" >{{item.title}}</h3>
                </template>
                <div v-for="ism in item.content" :key="ism.key">
                    <p  v-html="ism.text"></p>
                     <pre v-if="item.code[ism.key]">
                         <!-- //此处class：
                            //language-xml指的是基于xml语言进行高亮设置
                            //line-numbers指的是使用显示行号 -->
                        <code class=" language-js  language-xml line-numbers line-highlight" v-text="item.code[ism.key]"></code>
                    </pre>
                </div>
            </el-collapse-item>
        </el-collapse>
  </div>
</template>

<script>
import Prism from "prismjs";//引入插件

export default {
    name:"tutorialTem",
    components: {
    },
    props:{
        lists:{
            type:Object,
            default(){
                return {};
            }
        }
    },
    data(){
        return{
            activeNames:[],
            html:`<target><!-- 模拟数据 -->
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target><target>var data = 1</target>
      <target>var data = 1</target>
      </target>`
        }
    },
    methods: {
        
    },
    created(){
        this.lists.children.forEach(item=>{
            this.activeNames.push(item.id);
        })
        
    },
    mounted(){
        Prism.highlightAll()
    }
}
</script>


<style scoped lang="scss">
.collapse-box{
    margin-top: 40px;
} 
</style>
