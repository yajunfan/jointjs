<template>
    <div>
        <!-- 主标题 -->
        <h1 class="c-default">ConnectionPoints</h1>
        <p>链路连接点是链路路由的端点。这个点(通常)与连杆锚点(anchors)不同，因为它考虑到末端元素的存在。连接点是 通过链接结束 定义中提供的
            connectionPoint属性来设置的(即提供给link.source()和link.target()函数的对象)。
            内置函数的工作原理是找到链接路径之间的交集(从链接的源(source)锚点,经过顶点，到达目标(target)锚点的路径)。
            然而，函数总是只能访问单个路径段;
            源connectionPoint通过研究发现第一段(即 源anchor——第一个顶点,或源anchor-目标anchor[如果没有顶点]),
            而目标connectionPoint通过研究发现最后一段(即最后一个顶点——目标anchor,或源anchor-目标anchor)。
            如果所研究的路径段完全包含在end元素中，则会产生这样的结果。</p>
        <el-divider></el-divider>
        <div class="content-div">
            <!-- 统概 -->
            <div>
                <h4 class="m-r-b-10">JointJS中有四个内置connection函数,这些属性和
                    <a href="javascript:;" @click="routhChange('/anchors')">anchors</a> 
                    设置的不同的值下,有不同的表现,以下示例默认是anchors:center</h4>
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
                            connectionPoint: {
                                name: 'boundary',
                                args: {
                                    sticky: true
                                }
                            }
                        });
                    </code>
                </pre>
                <h4>默认的connection函数值是'bbox'；这可以通过defaultConnectionPoint ,paper中的option更改。例子</h4>
                <pre  style="border:1px solid lightblue;" class="language-js">   
                    <code class="language-js" >
                        var paper = new joint.dia.Paper({
                            el:document.getElementById("page"),
                            width:600,
                            height:100,
                            model:this_.graph,
                            defaultConnectionPoint:{
                                name: 'boundary', 
                                args: {
                                    sticky: true
                                }
                            }
                        });
                        或者是在下面这种方法
                        paper.options.defaultConnectionPoint = {
                            name: 'boundary', 
                            args: {
                                sticky: true
                            }
                        };
                    </code>
                </pre>
                <h4>所有四个内置连接点函数除了它们自己的参数外，还接受以下可选参数:</h4>
            </div>
            <!-- 具体项目 -->
            <el-collapse v-model="activeNames" class="m-r-t-10">
                <el-collapse-item  name="anchor">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.anchor</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>'anchor'</b>  - 放置连接点，使其与链接端锚定点重合(由<a href="javascript:;" @click="routhChange('/anchors')">anchors</a>函数
                        或defaultAnchor[在<a href="javascript:;" @click="routhChange('/paper')">paper.oprion</a>]确定)。连接点的位置可以被几个附加参数修改，
                        这些参数可以在连接点内传递。参数属性:</div>
                    <!-- arg 属性列表 -->
                    <h4>arg 属性列表</h4>
                    <el-table :data="anData" border>
                        <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name"
                            :width="item.key !='desc'?'240':''">
                            <template slot-scope="scope">
                                <div v-html="scope.row[item.key]"></div>
                            </template>
                        </el-table-column>
                    </el-table>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        link.source(model, {
                            connectionPoint: {
                                name: 'anchor',
                                args: {
                                    offset: 10,
                                    align: 'left',
                                    alignOffset: 10
                                }
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/connectionPoint/anchors.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="bbox">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.bbox</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"bbox"</b>  - 默认的连接点功能,它将连接点放置在链接路径末端和末端元素bbox之间的交点处。它接受两个参数，可以在connectionPoint.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4>arg 属性列表</h4>
                    <el-table :data="bboxData" border>
                        <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name"
                            :width="item.key !='desc'?'240':''">
                            <template slot-scope="scope">
                                <div v-html="scope.row[item.key]"></div>
                            </template>
                        </el-table-column>
                    </el-table>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        link.source(model, {
                            connectionPoint: {
                                name: 'bbox',
                                args: {
                                    offset: 10,
                                    stroke: true
                                }
                            }
                        });
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/connectionPoint/bbox.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="boundary">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.boundary</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"boundary"</b>  - 连接点功能将连接点放置在连接路径末端段与末端元素的实际形状的交点上。(如果JointJS无法确定实际的形状——例如对于文本——则使用元素bbox，就像在'bbox'连接点函数中一样)。它接受七个参数，可以在connectionPoint.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4>arg 属性列表</h4>
                    <el-table :data="bounData" border>
                        <el-table-column v-for="item in columnImg" :key="item.key" :prop="item.key" :label="item.name"
                            :width="item.key =='desc'?'500':''">
                            <template slot-scope="scope">
                                <div v-html="scope.row[item.key]" v-show="item.key !='img'"></div>
                                <img :src="scope.row.img" alt="" v-show="item.key =='img'&&scope.row.img">
                            </template>
                        </el-table-column>
                    </el-table>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同bbox，name为bounData
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/connectionPoint/boundary.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="rectangle">
                    <template slot="title">
                        <el-tag><h3>connectionPoints.rectangle</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div><b>"rectangle"</b>  - 连接点函数将连接点放置在连接路径末端段与元素未旋转的bbox的交点处。它接受两个个参数，可以在connectionPoint.args属性中设置：</div>
                    <!-- arg 属性列表 -->
                    <h4 >arg 属性列表 ：同bbox;</h4>
                     <!--示例代码 &&   展示效果-->
                    <div>
                        <h4>示例代码 && 展示效果</h4>
                        <el-row>
                            <el-col :span="12">
                                <pre  style="border:1px solid lightblue;" class="language-js">   
                                    <code class="language-js" >
                        同bbox，name为rectangle
                                    </code>
                                </pre>
                            </el-col>
                            <el-col :span="12" class="p-d-l-10">
                                <h4>效果展示</h4>
                                <img src="../../../../assets/img/example/connectionPoint/rectangle.jpg" alt="bottom">
                            </el-col>
                        </el-row>
                    </div>
                </el-collapse-item>
                <el-collapse-item  name="custom" >
                    <template slot="title">
                        <el-tag><h3>connectionPoints.custom</h3></el-tag>
                    </template>
                    <!-- 描述 -->
                    <div> <b>"custom"</b>  - 在接头中可以定义新的连接点函数。connectionPoints命名空间(例如joint.connectionPoints.myconnectionpoint)或
                        直接作为一个函数传递到链接源/目标的connectionPoint属性(或到paper.defaultConnectionPoint选项)：
                        在这两种情况下，连接点函数都必须将连接点作为一个点返回。这个函数应该有这样的形式函数(endPathSegmentLine, endView, endMagnet, args):</div>
                    <!-- arg 属性列表 -->
                    <div>
                         <h4 >arg 属性列表 ：仅有一项padding;</h4>    
                        <el-table :data="customData" border>
                            <el-table-column v-for="item in column" :key="item.key" :prop="item.key" :label="item.name" 
                                :width="item.key !='desc'?'180':''">
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
    defaultConnectionPoint:function(endPathSegmentLine, endView, endMagnet, args){
        var angle = endView.model.angle(); // 角度
        var origin = endView.model.getBBox().center(); 
         //origin = E {x: 550, y: 160}
    
        endView.model.rotate(origin, angle);

        // 确定最接近指针绳的一侧
        var bbox = endView.getNodeUnrotatedBBox(endMagnet);
        //bbox = H {x: 488, y: 140, width: 127,height: 40width: 127x}
        //确定最接近指针绳的一侧
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
                {key:"type",name:"类型/默认值"},
                {key:"desc",name:"描述"},
            ],
            columnImg:[
                {key:"name",name:"属性名"},
                {key:"type",name:"类型/默认值"},
                {key:"desc",name:"描述"},  
                {key:"img",name:"效果"},  
            ],
            anData:[
                {
                    name:"offset",
                    type:"number | object",
                    desc:`如果提供了一个具有x和y属性的对象。offset:{x:10,y:10}; 连接点将被移动:<br>
                                <span class="m-r-l-10"> x ---- 从锚点向相应链接端路径段的方向移动x个像素。</span><br>
                                <span class="m-r-l-10"> y ---- 按对应连杆端路径段的方向旋转y个像素，绕锚点逆时针旋转90度。</span><br>
                            如果提供了一个数字，offset:10;它将被用作 x 偏移量。`,
                
                },
                {
                    name:"align",
                    type:"top' | 'left' | 'bottom' | 'right'",
                    desc:"按dx偏移锚点. 类型为number时，默认为0.类型为string时，可接受百分数(eg.'40%')",
                },
                {
                    name:"alignOffset",
                    type:"number",
                    desc:"按dx偏移锚点. 类型为number时，默认为0.类型为string时，可接受百分数(eg.'40%')",
                }
            ],
            bboxData:[
                {
                   name:"offset",
                   type:"number | object",
                   desc:`如果提供了一个具有x和y属性的对象。offset:{x:10,y:10}; 连接点将被移动:<br>
                            <span class="m-r-l-10"> x ---- 从锚点向相应链接端路径段的方向移动x个像素。</span><br>
                            <span class="m-r-l-10"> y ---- 按对应连杆端路径段的方向旋转y个像素，绕锚点逆时针旋转90度。</span><br>
                        如果提供了一个数字，offset:10;它将被用作 x 偏移量。`,
               
               },
               {
                   name:"stroke",
                   type:"boolean",
                   desc:"计算连接点时，笔划宽度是否包括在内?默认是 false。",
               },
            ],
            bounData:[
                {
                   name:"offset",
                   type:"number | object",
                   desc:`如果提供了一个具有x和y属性的对象。offset:{x:10,y:10}; 连接点将被移动:<br>
                            <span class="m-r-l-10"> x ---- 从锚点向相应链接端路径段的方向移动x个像素。</span><br>
                            <span class="m-r-l-10"> y ---- 按对应连杆端路径段的方向旋转y个像素，绕锚点逆时针旋转90度。</span><br>
                        如果提供了一个数字，offset:10;它将被用作 x 偏移量。`,
               
               },
               {
                   name:"insideout",
                   type:"boolean",
                   desc:"如果链接路径从【未离开末端元素的内部区域】(例如，因为另一个末端锚点位于第一个末端元素内)会发生什么?是否应延长路径线，直至与边界相交?默认是 true",
               },
               {
                    name:"extrapolate",
                    type:"boolean",
                    desc:"如果链接路径从未进入末端元素的内部区域(例如，因为锚点位于末端元素的外部)会发生什么?是否应该延长路径线以找到边界?默认是false。注意，即使这个选项为真，也不能保证有交集。该选项优先于connectionPoint.args.sticky。",
                    img:require("@/assets/img/example/connectionPoint/strick_false.jpg")
               },
               {
                    name:"sticky",
                    type:"boolean",
                    desc:`如果链接路径从未进入末端元素的内部区域(例如，因为锚点位于末端元素的外部)会发生什么?
                        是否应该使用末端元素边界上最近的点?默认是false。注意，将此选项设置为true可以保证在形状边界上找到连接点
                        值为true，围绕边界`,
                    img:require("@/assets/img/example/connectionPoint/strick_true.jpg")
               },
               {
                   name:"precision",
                   type:"number",
                   desc:"路径交点算法的精度。使用对数尺度;该数值增加1，最大观测误差将减少到原来的10倍。默认值为2，对应1%的错误。",
               },
               {
                   name:"selector",
                   type:"string",
                   desc:"一种选择器，用于识别我们希望在其边界处找到连接点的末端元素/磁铁。Default是未定义的，这意味着将考虑结束元素节点的第一个非组后代。(另一个有用的设置示例是'root'，它强制使用根组bbox。)",
               },
               {
                   name:"stroke",
                   type:"boolean",
                   desc:"计算连接点时，笔划宽度是否包括在内?默认是 false。",
               },
            ],
            customData:[
                {
                    name:"endPathSegmentLine",
                    type:"g.Line",
                    desc:`我们正在寻找连接点的连接路径段。如果我们为一个源连接点调用这个方法，它就是第一个段(源锚点-第一个顶点，或者源锚点-目标锚点)。
                            如果我们为一个目标连接点调用这个方法，它就是最后一个段(最后一个顶点-目标锚点，或者源锚点-目标锚点)。`,
                }, 
                {
                    name:"endView",
                    type:"dia.ElementView",
                    desc:`我们连接到的ElementView。元素模型可以通过endView.model访问;这对于编写基于元素属性的条件逻辑可能很有用。`,
                }, 
                {
                    name:"endMagnet",
                    type:"SVGElement",
                    desc:`页面中的SVGElement，它包含我们要连接到的磁铁(元素/子元素/端口[element/subelement/port])。`,
                }, 
                {
                    name:"args",
                    type:"object",
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
