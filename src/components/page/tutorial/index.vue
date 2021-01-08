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
                    <!-- <quill-editor ref="myTextEditor" v-model="item.code[ism.key]" :options="editorOption" v-if="item.code[ism.key]"></quill-editor> -->
                </div>
            </el-collapse-item>
        </el-collapse>
  </div>
</template>

<script>

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
             editorOption: {
                placeholder: 'Hello World'
            }
        }
    },
    methods: {
        
    },
    created(){
        this.lists.children.forEach(item=>{
            this.activeNames.push(item.id);
        })
        
    }
}
</script>


<style scoped lang="scss">
.collapse-box{
    margin-top: 40px;
} 
</style>
