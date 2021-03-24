<template>
    <div>
        <!-- 主标题 -->
        <h1 class="c-default">ConnectionPoints</h1>
        <p>链路连接点是链路路由的端点。这个点(通常)与连杆锚点不同，因为它考虑到末端元素的存在。
            连接点是通过链接结束定义中提供的connectionPoints属性来设置的(即提供给link.source()和link.target()函数的对象)。

            内置函数的工作原理是找到链接路径之间的交集(从链接的源锚点通过顶点到目标锚点的路径)。然而，函数总是只能访问单个路径段;
            源connectionPoint通过调查发现第一部分(即源锚——第一个顶点,或源目标锚锚——如果没有顶点),而目标connectionPoint通过
            调查发现最后一段(即最后一个顶点——目标锚,或源锚-目标锚)。如果所研究的路径段完全包含在end元素中，则会产生这样的结果。
        </p>
        <el-divider></el-divider>
        <div class="content-div">
            <!-- 统概 -->
            <div>
                <h4 class="m-r-b-10">JointJS中有四个内置连接点函数:,这些属性和
                    <a href="javascript:;" @click="routhChange('/anchors')">anchors</a> 
                    设置的不同的值下,有不同的表现</h4>
                <ul>
                    <li v-for="item in conPointLists" :key="item.key">
                        <el-tag>{{item.key}}</el-tag> - {{item.desc}}
                    </li>
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
                <el-collapse-item  name="anchor">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.anchor</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚点放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
                <el-collapse-item  name="bbox">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.bbox</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚点放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
                <el-collapse-item  name="boundary">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.boundary</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚点放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
                <el-collapse-item  name="rectangle">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.rectangle</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚点放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
                <el-collapse-item  name="custom" >
                    <template slot="title">
                        <el-tag><h3>connectionPoints.custom</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div> <b>"bottom"</b>  - 将链接的锚点放置在视图bbox底部的中间。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
           conPointLists:[
               {key:"anchor",desc:"锚连接点"},
               {key:"bbox",desc:"默认的连接点在bbox边界"},
               {key:"boundary",desc:"连接点在实际形状边界处"},
               {key:"rectangle",desc:"连接点在未旋转的bbox边界处"},
               {key:"custom",desc:"自定义连接点"},
           ],
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
           childrenList:[]
        }
    },
    computed: {
        onRoutes() {
            console.log(444,this.$route.path)
            
        }
    },
    methods: {
        // 路由跳转  
        routhChange(path){
           this.$router.push({
               path:path
           });
        },
        move(){
            if(this.activeNames == "connectionPoints"){
                document.getElementById("content").scrollTop =0;
            }else{
                this.conPointLists.forEach((item,index)=>{
                    if(item.key == this.activeNames){
                            let top =this.childrenList[index].offsetTop;
                        document.getElementById("content").scrollTop =top;
                    };
                }) ; 
            };
              
        }
    },
    created(){
        bus.$off("childRouthChange").$on("childRouthChange",msg=>{
            this.activeNames = msg.name;
            this.move();
        });
    },
    mounted(){
       this.childrenList = Array.from(document.getElementsByClassName("el-collapse-item"));
    }
}
</script>


<style scoped>
.content-div{
    font-size: 15px;
}
</style>
