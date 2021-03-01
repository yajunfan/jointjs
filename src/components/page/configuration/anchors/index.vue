<template>
    <div>
        <!-- 主标题 -->
        <h1 class="c-default">anchors</h1>
        <p>链接的锚点是引用元素中的一个点(默认是不显示的)，该链接希望以此作为其端点到达引用元素中的点。(事实上，参考元素可能是，连接点函数的任务是确定路由端点的实际位置，并考虑到阻塞的参考元素。）
            通过链接端点定义中提供的锚属性（即提供给的对象）设置锚link.source()和 link.target()功能)。( 如果引用对象是链接，则JointJS将改为查看linkAnchor属性。)</p>
        <el-divider></el-divider>
        <div class="content-div">
            <!-- 统概 -->
            {{scrollIndex}}
            <div v-show="scrollIndex<=1||activeNames=='anchors'">
                <h4 class="m-r-b-10">JointJS中有许多内置的锚函数：</h4>
                <ul>
                    <li><el-tag>'center'</el-tag> - 视图bbox中心的默认定位</li>
                    <li><el-tag>'modelCenter'</el-tag> - 锚定在bbox模型的中心</li>
                    <li><el-tag>'perpendicular'</el-tag> - 确保到另一个端点的正交路由的锚点 </li>
                    <li><el-tag>'midSide'</el-tag> - 锚定在视图bbox最靠近另一个端点的一侧的中间</li>
                    <li><el-tag>'bottom'</el-tag> - 锚定在视图bbox底部的中间</li>
                    <li><el-tag>'left'</el-tag> - 锚定在视图bbox左侧的中间</li>
                    <li><el-tag>'right'</el-tag> - 锚定在视图bbox右侧的中间</li>
                    <li><el-tag>'top'</el-tag> - 锚定在视图bbox顶部的中间</li>
                    <li><el-tag>'bottomLeft'</el-tag> - 锚定在视图bbox的左下角</li>
                    <li><el-tag>'bottomRight'</el-tag> - 锚定在视图bbox的右下角</li>
                    <li><el-tag>'topLeft'</el-tag> - 锚定在视图bbox的左上角</li>
                    <li><el-tag>'topRight'</el-tag> - 锚定在视图bbox的右上角</li>
                </ul>
                <h4>简单示例:</h4>
                <pre  style="border:1px solid lightblue;" class="language-js">   
                    <code class="language-js" >
                        var link = new joint.shapes.standard.Link();
                        link.source(model, {
                            anchor: {
                                name: 'midSide',
                                args: {
                                    rotate: true,
                                    padding: 20
                                }
                            }
                        });
                    </code>
                </pre>
                <h4>默认的锚点函数值是'center'；这可以通过defaultAnchor paper的option更改。例子</h4>
                <pre  style="border:1px solid lightblue;" class="language-js">   
                    <code class="language-js" >
                        var paper = new joint.dia.Paper({
                            el:document.getElementById("page"),
                            width:600,
                            height:100,
                            model:this_.graph,
                            defaultAnchor:{
                                name: 'midSide', 
                                args: {
                                    rotate: true,
                                    padding: 20
                                }
                            }
                        });
                        或者是在下面这种方法
                        paper.options.defaultAnchor = {
                            name: 'midSide', 
                            args: {
                                rotate: true,
                                padding: 20
                            }
                        };
                    </code>
                </pre>
                <h4>JointJS还包含定义紫的的自定义锚函数的机制。接下来是各锚点函数详情。(为了方便查看效果，我在节点上增加了port，便于观察不同的位置)</h4>
            </div>
            <!-- 具体项目 -->
            
            <el-collapse v-model="activeNames" class="m-r-t-10">
                <el-collapse-item  name="bottom" v-show="scrollIndex<=2||activeNames=='bottom'">
                    <template slot="title">
                        <el-tag><h3>anchors.bottom</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div> <b>"bottom"</b>  - 将链接的锚定放置在视图bbox底部的中间。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <div>
                        <h4>arg 属性列表</h4>
                        <el-table :data="bData" border>
                            <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name"
                                :width="item.key !='desc'?'120':''">
                                <template slot-scope="scope">
                                    {{scope.row[item.key]}}
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        link.source(model, {
                            anchor: {
                                name: 'bottom',
                                args: {
                                    rotate: true,
                                    dx: 10,
                                    dy: '40%'
                                }
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/bottom.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="bottomLeft" v-show="scrollIndex<=3||activeNames=='bottomLeft'">
                    <template slot="title">
                        <el-tag><h3>anchors.bottomLeft</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"bottomLeft"</b> - 将链接的锚定放置在视图bbox底部的左下角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同bottom;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同bottom，name为bottomLeft
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/bottomleft.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="bottomRight" v-show="scrollIndex<=4||activeNames=='bottomRight'">
                    <template slot="title">
                        <el-tag><h3>anchors.bottomRight</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"bottomRight"</b> - 将链接的锚定放置在视图bbox底部的右下角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同bottom;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同bottom，name为bottomRight
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/bottomRight.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="center" v-show="scrollIndex<=5||activeNames=='center'">
                    <template slot="title">
                        <el-tag><h3>anchors.center</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚定放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同bottom;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同bottom，name为center
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/center.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script>
import bus from '../../../common/bus.js';
export default {
    data(){
        return{
           activeNames:"bottom",
           column:[
               {key:"name",name:"属性名"},
               {key:"type",name:"类型"},
               {key:"desc",name:"描述"},
           ],
           bData:[
               {
                   name:"rotate",
                   type:"boolean",
                   desc:"锚点框是否应随端视图旋转？默认值为false，表示使用未旋转的bbox。",
               
               },
               {
                   name:"dx",
                   type:"number | string",
                   desc:"按dx偏移锚点. 类型为number时，默认为0.类型为string时，可接受百分数(eg.'40%')",
               },
               {
                   name:"dy",
                   type:"boolean",
                   desc:"按dx偏移锚点. 类型为number时，默认为0.类型为string时，可接受百分数(eg.'40%')",
               }
           ],
           scrollIndex:0
        }
    },
    computed: {
        onRoutes() {
            console.log(444,this.$route.path)
            
        }
    },
    methods: {
        // 路由跳转  
        routhChange(){
            let children =[].slice.call(document.getElementsByClassName("el-collapse-item"));
            children.forEach(item=>{
               if(item)     {

               }
            });

        }
    },
    created(){
        bus.$off("childRouthChange").$on("childRouthChange",msg=>{
            if(this.activeNames == msg.name){
                this.scrollIndex = 1;
            }else{
                this.scrollIndex = msg.index;
            }
            this.activeNames = msg.name;
            
            console.log(888,document.getElementsByClassName("el-collapse-item") )
        });
       
    },
    mounted(){
        window.addEventListener('scroll',function(){
            console.log(76677)
        });
    }
}
</script>


<style scoped>
.content-div{
    font-size: 15px;
}
</style>
