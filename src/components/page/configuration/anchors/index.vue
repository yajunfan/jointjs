<template>
    <div>
        <!-- 主标题 -->
        <h1 class="c-default">anchors</h1>
        <p>链接的锚点是引用元素中的一个点(默认是不显示的)，该链接希望以此作为其端点到达引用元素中的点。(事实上，参考元素可能是，连接点函数的任务是确定路由端点的实际位置，并考虑到阻塞的参考元素。）
            通过链接端点定义中提供的锚属性（即提供给的对象）设置锚link.source()和 link.target()功能)。( 如果引用对象是链接，则JointJS将改为查看linkAnchor属性。)</p>
        <el-divider></el-divider>
        <div class="content-div">
            <!-- 统概 -->
            <div>
                <h4 class="m-r-b-10">JointJS中有许多内置的锚函数（默认的锚点函数值是'center'）；这些属性是在
                    <a href="javascript:;" @click="routhChange('/connectionPoints')">connectionPoint</a> 
                    设置的不同的值下,有不同的表现,以下是按connectionPoint为bbox示例</h4>
                <ul>
                    <li v-for="item in anchorsLists" :key="item.key">
                        <el-tag>{{item.key}}</el-tag> - {{item.desc}}
                    </li>
                </ul>
                <h4>简单示例（针对单个的配置）:</h4>
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
                <h4>还可以通过defaultAnchor paper的option更改。(针对全局配置)</h4>
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
                <el-collapse-item  name="center">
                    <template slot="title">
                        <el-tag><h3>anchors.center</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"center"</b>  - 将链接的锚点放置在视图bbox的中心。它接受三个参数，可以在 anchor.args属性中设置：</div>
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
                                name: 'ccenter',
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
                                <img src="../../../../assets/img/example/anchors/center.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="modelCenter">
                    <template slot="title">
                        <el-tag><h3>anchors.modelCenter</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"modelCenter"</b>  - 锚点函数将链接的锚点放置在模型bbox的中心位置。</div>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        link.source(model, {
                            anchor: {
                                name: 'modelCenter'
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/modelCenter.jpg" alt="modelCenter">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="perpendicular">
                    <template slot="title">
                        <el-tag><h3>anchors.perpendicular</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div>
                        <b>"perpendicular"</b> 
                         - 锚定函数试图在视图bbox中放置链接的锚定，使链接成为正交的。锚点沿着视图bbox内部的两条线段(在顶部和底部的中心之间，
                         在左侧和右侧的中心之间)放置。如果不可能放置锚点以使链接垂直，则将锚点放置在视图bbox的中心。它接受一个参数，可以在
                          anchor.args属性中设置：
                          <img src="../../../../assets/img/example/anchors/perpendicular.png" alt=""></div>
                    <!-- arg 属性列表 -->
                    <div>
                        <h4 >arg 属性列表 </h4>    
                        <el-table :data="perData" border>
                            <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name" :width="item.key !='desc'?'120':''">
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
                                name: 'perpendicular',
                                args: {
                                    padding: 10
                                }
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/perpendicular.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="midSide">
                    <template slot="title">
                        <el-tag><h3>anchors.midSide</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"midSide"</b>  - 锚点函数将链接的锚点放置在视图bbox最靠近另一个端点的一侧的中间位置。。它接受两个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <div>
                        <h4 >arg 属性列表 ：仅有一项padding;</h4>    
                        <el-table :data="midData" border>
                            <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name" :width="item.key !='desc'?'120':''">
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
                                name: 'midSide',
                                args: {
                                    rotate: true,
                                    padding: 20
                                }
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/midSide.jpg" alt="midSide">
                                <img src="../../../../assets/img/example/anchors/mid-rorate.jpg" alt="midSide选择时的锚点位置" title="midSide选择时的锚点位置">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="bottom" >
                    <template slot="title">
                        <el-tag><h3>anchors.bottom</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div> <b>"bottom"</b>  - 将链接的锚点放置在视图bbox底部的中间。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4>arg 属性列表:同center</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同同center，name为 bottom
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
                <el-collapse-item  name="left">
                    <template slot="title">
                        <el-tag><h3>anchors.left</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"left"</b>  - 将链接的锚点放置在视图bbox左侧的中间位置。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                     <h4>arg 属性列表:同center</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为left
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/left.jpg" alt="left">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="right">
                    <template slot="title">
                        <el-tag><h3>anchors.right</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"right"</b>  - 将链接的锚点放置在视图bbox右侧的中间位置。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为right
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/right.jpg" alt="right">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="top">
                    <template slot="title">
                        <el-tag><h3>anchors.top</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"top"</b>  - 将链接的锚点放置在视图bbox顶部的中间位置。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为top
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/top.jpg" alt="top">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="bottomLeft">
                    <template slot="title">
                        <el-tag><h3>anchors.bottomLeft</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"bottomLeft"</b> - 将链接的锚点放置在视图bbox底部的左下角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为bottomLeft
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
                <el-collapse-item  name="bottomRight">
                    <template slot="title">
                        <el-tag><h3>anchors.bottomRight</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"bottomRight"</b> - 将链接的锚点放置在视图bbox底部的右下角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为bottomRight
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
                <el-collapse-item  name="topLeft">
                    <template slot="title">
                        <el-tag><h3>anchors.topLeft</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"topLeft"</b>  - 将链接的锚点放置在视图bbox的左上角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为topLeft
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/topleft.jpg" alt="topLeft">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="topRight">
                    <template slot="title">
                        <el-tag><h3>anchors.topRight</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"topRight"</b>  - 将链接的锚点放置在视图bbox的右上角。它接受三个参数，可以在 anchor.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同center;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同center，name为topRight
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/topRight.jpg" alt="topRight">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="custom">
                    <template slot="title">
                        <el-tag><h3>anchors.custom</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"custom"</b>  - 新的锚函数可以在joint.anchors定义。锚命名空间(例如joint.anchors.myAnchor)或直接作为一个函数传递给link source/target 的锚属性(或在paper中的defaultAnchor选项)。
                        在这两种情况下，锚点函数必须返回锚点作为一个点。这个函数应该有一个form函数(endView, endMagnet, anchorReference, args):</div>
                    <!-- arg 属性列表 -->
                    <div>
                        <h4 >arg 属性列表 ：仅有一项padding;</h4>    
                        <el-table :data="customData" border :span-method="objectSpanMethod">
                            <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name" :width="item.key !='desc'?'120':''">
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
                            <el-col :span="14">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
    defaultAnchor:function(endView, endMagnet, anchorReference, args){
        var angle = endView.model.angle(); // 角度
        var origin = endView.model.getBBox().center(); 
         //origin = E {x: 550, y: 160}
    
        endView.model.rotate(origin, angle);

        // 确定最接近指针绳的一侧
        var bbox = endView.getNodeUnrotatedBBox(endMagnet);
        //bbox = H {x: 488, y: 140, width: 127,height: 40width: 127x}
        
        var anchor;
        var side = bbox.sideNearestToPoint( endView.model);
        //side = left
        switch (side) {
            case 'left': anchor = bbox.leftMiddle(); break;
            case 'right': anchor = bbox.rightMiddle(); break;
            case 'top': anchor = bbox.topMiddle(); break;
            case 'bottom': anchor = bbox.bottomMiddle(); break;
        }
        // 按原限制区域旋转锚杆
        let newobj = {
            x:origin.x-200,
            y:origin.y-100
        };
        return anchor.rotate(newobj, angle+10);
    },      

    或者是link.source(model,{
        anchor:function(endView, endMagnet, anchorReference, args){
            //write something
        }
    })  
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="10" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/anchors/center.jpg" alt="default">
                                <el-divider></el-divider>
                                 <h4>自定义后</h4>
                                <img src="../../../../assets/img/example/anchors/custom.png" alt="自定义的锚点位置">
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
            anchorsLists:[
                {key:"center",desc:"视图bbox中心的默认定位"},
                {key:"modelCenter",desc:"锚点在bbox模型的中心"},
                {key:"perpendicular",desc:"确保到另一个端点的正交路由的锚点"},
                {key:"midSide",desc:"锚点在视图bbox最靠近另一个端点的一侧的中间"},
                {key:"bottom",desc:"锚点在视图bbox底部的中间"},
                {key:"left",desc:"锚点在视图bbox左侧的中间"},
                {key:"right",desc:"锚点在视图bbox右侧的中间"},
                {key:"top",desc:"锚点在视图bbox顶部的中间"},
                {key:"bottomLeft",desc:"锚点在视图bbox的左下角"},
                {key:"bottomRight",desc:"锚点在视图bbox的右下角"},
                {key:"topLeft",desc:"锚点在视图bbox的左上角"},
                {key:"topRight",desc:"锚点在视图bbox的右上角"},
                {key:"custom",desc:"自定义锚点位置"},
            ],
            column:[
                {key:"name",name:"属性名"},
                {key:"type",name:"类型"},
                {key:"desc",name:"描述"},
            ],
            //  用于  center、bottom、left、right、top、bottomLeft、bottomRight、
            //    topLeft、topRight 的arg参数列表
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
            // perpendicular 的arg参数列表
            perData:[
                {
                    name:"padding",
                    type:"number",
                    desc:`通过padding来限制视图bbox内可用于放置锚点的区域。默认值为0`,
                },
            ],
            // midSide 的arg参数列表
            midData:[
                {
                    name:"rotate",
                    type:"boolean",
                    desc:`锚定bbox是否应该与结束视图一起旋转?默认为false，表示使用未旋转的bbox。
                    （测试发现，无论是true还是false，效果一样，不知道如何使用）`,
                },
                {
                    name:"padding",
                    type:"number",
                    desc:`通过padding来限制视图bbox内可用于放置锚点的区域。默认值为0`,
                },
            ],
            // custom 的arg参数列表
            customData:[
                {
                    name:"endView",
                    type:"dia.ElementView",
                    span:0,
                    num:1,
                    desc:`我们连接到的ElementView。元素模型可以通过endView.model访问;这对于编写基于元素属性的条件逻辑可能很有用。`,
                }, 
                {
                    name:"endMagnet",
                    type:"SVGElement",
                    span:1,
                    num:1,
                    desc:`页面中的SVGElement，它包含我们要连接到的磁铁(元素/子元素/端口[element/subelement/port])。`,
                }, 
                {
                    name:"anchorReference",
                    type:"g.Point",
                    span:2,
                    num:2,
                    desc:`对链接路径的另一个组件的引用，可能是找到这个锚点所必需的。如果我们为一个源锚调用这个方法，它是第一个顶点，
                            或者如果没有顶点则是目标锚。如果我们为一个目标锚调用这个方法，它是最后一个顶点，或者如果没有顶点源锚…`,
                }, 
                {
                    name:"anchorReference",
                    type:"SVGElement",
                    span:2,
                    num:1,
                    desc:`…如果所讨论的锚不存在(还不存在)，它就是连接端的磁铁。(内置方法通常使用该元素的中心点作为参考。)`,
                }, 
                {
                    name:"args",
                    type:"object",
                    span:4,
                    num:1,
                    desc:`一个对象，它带有附加的可选参数，用户在调用它时将其传递给锚定方法(args属性)。`,
                }, 
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
            console.log(33,name)
           this.$router.push({
               path:path
           });
        },
        move(){
            if(this.activeNames != "anchors"){
                this.anchorsLists.forEach((item,index)=>{
                    if(item.key == this.activeNames){
                            let top =this.childrenList[index].offsetTop;
                        document.getElementById("content").scrollTop =top;
                    };
                });  
            }else{
                document.getElementById("content").scrollTop =0;
            }   
        },
        objectSpanMethod({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (row.span  == rowIndex) {
                    return {
                        rowspan: row.num,
                        colspan: 1
                    };
                }else  {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        }
    },
    created(){
        bus.$off("childRouthChange").$on("childRouthChange",msg=>{
            this.activeNames = msg.name;
            console.log(1111)
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
