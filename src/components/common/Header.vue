<template>
    <div class="header flex-start">
        <div class="logo">JOINTJS中文文档</div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="f-t-16" trigger="click" @command="handleCommand" style="font-size:16px;line-height:70px;">
            <span class="el-dropdown-link">
                {{dropObj[defaultKey]}}
                <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item  v-for="(value,key) in dropObj" divided :command="value" :key="key">{{value}}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            defaultKey:"tutorial",
            dropObj:{
                "tutorial":"教程",
                "api":"API",
                "option":"配置项手册"
            },
            
        };
    },
   
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                this.$router.push('/login');
            }
        },
    },
    mounted() {
    }
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #F8EFE0;
    padding-left: 20px;
}
.collapse-btn {
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    width: 210px;
    line-height: 70px;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
