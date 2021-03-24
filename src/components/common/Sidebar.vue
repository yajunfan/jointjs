<template>
    <div class="sidebar b-s-bb">
        <el-tabs v-model="activeName"  class="b-s-bb" @tab-click="handleTabChange">
            <el-tab-pane label="教程" name="tutorial">
                <el-menu class="sidebar-el-menu" :default-active="onRoutes" background-color="white" text-color="black" 
                    unique-opened router >
                    <template v-for="item in tutorialLists">
                        <template>
                            <el-menu-item :index="item.index" :key="item.index">
                                <span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-tab-pane>
            <el-tab-pane label="API" name="api">API</el-tab-pane>
            <el-tab-pane label="配置项手册" name="option">
                <el-menu class="sidebar-el-menu" :default-active="onRoutes" background-color="white"
                    text-color="black"  unique-opened router>
                    <template v-for="item in items">
                        <template v-if="item.subs" >
                            <el-submenu :index="item.index" :key="item.index" >
                                <template slot="title">
                                    <i :class="item.icon"></i>
                                    <span  @click="routhChange(item.index)">{{ item.title }}</span>
                                </template>
                                <template v-for="subItem in item.subs">
                                    <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index" >
                                        <template slot="title" >{{ subItem.title }}</template>
                                        <el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i"
                                            :index="threeItem.index" >{{ threeItem.title }}
                                        </el-menu-item>
                                    </el-submenu>
                                    <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
                                </template>
                            </el-submenu>
                        </template>
                        <template v-else>
                            <el-menu-item :index="item.index" :key="item.index">
                                <i :class="item.icon"></i>
                                <span slot="title">{{ item.title }}</span>
                            </el-menu-item>
                        </template>
                    </template>
                </el-menu>
            </el-tab-pane>
        </el-tabs>
        
    </div>
</template>

<script>
import bus from '../common/bus';
import { mapState, mapMutations } from "vuex";
export default {
    data() {
        return {
            activeName:"tutorial",
            dropObj:{
                "tutorial":"教程",
                "api":"API",
                "option":"配置项手册"
            },
            tutorialLists:[
                {title:"5分钟上手jointjs",index:"startTutorial"},
                {title:"Paper&Graph",index:"PaperGraph"},
            ]
        };
    },
    computed: {
        onRoutes() {
             let obj={
                index:this.$route.query.id,
                name:this.$route.meta.title
            };
            bus.$emit("childRouthChange",obj)
            if(this.$route.path!='/startTutorial'&&this.$route.path!='/configStart'){
                return this.$route.path.replace('/', '');
            };
           
        },
        ...mapState({
            items(state) {
                return state.main.items;
            }
        })

    },
    methods:{
        handleTabChange(){
            let path = this.$route.path;
            switch(this.activeName){
                case "tutorial":
                    // this.$router.push({path:'/startTutorial'}); 
                    break; 
                case "option":
                    // this.$router.push({path:'/configStart'}); 
                    break; 
            };
            sessionStorage.setItem("tabName",this.activeName);
        },
        routhChange(path){
            this.$router.push({path:"/"+path}); 
        }
    },
    created(){
        this.activeName = sessionStorage.getItem("tabName")?sessionStorage.getItem("tabName"):"tutorial";
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
    border-right: 1px solid #eae9e9;
    padding: 0 10px;
    width:230px;
    
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar > ul {
    height: 100%;
}
.el-submenu .el-menu-item{
    min-width: 100px;
    padding-left: 30px!important;
}
</style>
