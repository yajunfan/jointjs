<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <div class="content" id="content">
                <transition name="move" mode="out-in">
                    <router-view></router-view>
                </transition>
                <el-backtop target=".content"></el-backtop>
            </div>
        </div>

    </div>
</template>

<script>

    import { mapState, mapMutations } from "vuex";

    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';
    import bus from './bus';
    import router from '@/router';
    export default {
        data() {
            return {
                collapse: false,
                ...mapState,
            };
        },
        components: {
            vHead,
            vSidebar
        },
        created() {
            this.init();
        },
        methods: {
            async init() {
                    let data = {
                        name: "fan",
                        items: [
                            {
                                index: 'configStart',
                                title: 'Joint Api',
                            },
                            {
                                index: 'anchors',
                                title: 'anchors',
                                subs: [
                                    {
                                        index: 'anchors_center',
                                        title: 'center'
                                    },
                                    {
                                        index: 'anchors_modelCenter',
                                        title: 'modelCenter'
                                    },
                                    {
                                        index: 'anchors_perpendicular',
                                        title: 'perpendicular'
                                    },
                                    {
                                        index: 'anchors_midSide',
                                        title: 'midSide'
                                    },
                                    {
                                        index: 'anchors_bottom',
                                        title: 'bottom'
                                    },
                                    {
                                        index: 'anchors_left',
                                        title: 'left'
                                    },
                                    {
                                        index: 'anchors_right',
                                        title: 'right'
                                    },
                                    {
                                        index: 'anchors_top',
                                        title: 'top'
                                    },
                                    {
                                        index: 'anchors_bottomLeft',
                                        title: 'bottomLeft'
                                    },
                                    {
                                        index: 'anchors_bottomRight',
                                        title: 'bottomRight'
                                    },
                                    {
                                        index: 'anchors_topLeft',
                                        title: 'topLeft'
                                    },
                                    {
                                        index: 'anchors_topRight',
                                        title: 'topRight'
                                    },
                                    {
                                        index: 'anchors_custom',
                                        title: 'custom'
                                    },
                                ]
                            },
                            {
                                index: 'connectionPoints',
                                title: 'connectionPoints',
                                subs: [
                                    {
                                        index: 'connectionPoints_anchor',
                                        title: 'anchor'
                                    },
                                    {
                                        index: 'connectionPoints_bbox',
                                        title: 'bbox'
                                    },
                                    {
                                        index: 'connectionPoints_boundary',
                                        title: 'boundary'
                                    },
                                    {
                                        index: 'connectionPoints_rectangle',
                                        title: 'rectangle'
                                    },
                                    {
                                        index: 'connectionPoints_custom',
                                        title: 'custom'
                                    }
                                ]
                            },
                            {
                                index: 'connectionStrategies',
                                title: 'connectionStrategies',
                                subs: [
                                    {
                                        index: 'connectionStrategies_custom',
                                        title: 'custom'
                                    },
                                    {
                                        index: 'connectionStrategies_pinAbsolute',
                                        title: 'pinAbsolute'
                                    },
                                    {
                                        index: 'connectionStrategies_pinRelative',
                                        title: 'pinRelative'
                                    },
                                    {
                                        index: 'connectionStrategies_useDefaults',
                                        title: 'useDefaults'
                                    },
                                ]
                            },
                            {
                                index: 'connectors',
                                title: 'connectors',
                                subs: [
                                    {
                                        index: 'connectors_custom',
                                        title: 'custom'
                                    },
                                    {
                                        index: 'connectors_jumpover',
                                        title: 'jumpover'
                                    },
                                    {
                                        index: 'connectors_normal',
                                        title: 'normal'
                                    },
                                    {
                                        index: 'connectors_rounded',
                                        title: 'rounded'
                                    },
                                    {
                                        index: 'connectors_smooth',
                                        title: 'smooth'
                                    }
                                ]
                            },
                            {
                                icon: 'el-icon-pie-chart',
                                index: 'charts',
                                title: 'schart图表'
                            },
                            {
                                icon: 'el-icon-rank',
                                index: '6',
                                title: '拖拽组件',
                                subs: [{
                                    index: 'drag',
                                    title: '拖拽列表'
                                },
                                {
                                    index: 'dialog',
                                    title: '拖拽弹框'
                                }
                                ]
                            },
                            {
                                icon: 'el-icon-lx-global',
                                index: 'i18n',
                                title: '国际化功能'
                            },
                            {
                                icon: 'el-icon-lx-warn',
                                index: '7',
                                title: '错误处理',
                                subs: [{
                                    index: 'permission',
                                    title: '权限测试'
                                },
                                {
                                    index: '404',
                                    title: '404页面'
                                }
                                ]
                            },
                        ]
                    }
                    let menuArr = [];

                    ; (function getMenuArr(Arr) {
                        if (Arr.length) {
                            Arr.forEach(item => {
                                if (item.subs && item.subs.length > 0) {
                                    getMenuArr(item.subs)
                                }

                                else { menuArr.push(item.index) }

                            })

                        }
                    })(data.items)
                    this.updateMainInfo(data);
            },
            ...mapMutations(["updateMainInfo"])
        },
        mounted(){
            // document.getElementById("content").addEventListener("scroll",function(e){
            //     bus.$emit("scroll");
            // });
        }
    };

</script>