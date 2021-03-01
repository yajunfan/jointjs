<template>
    <div class="start-container">
        <!-- 主标题 -->
        <h1 class="c-default">{{lists.title}}</h1>
        
        <p v-html="lists.content"></p>
        <el-divider></el-divider>
        <!-- example -->
        <div id="page" class="ph h-100-pre canvas-container"></div>
        <!-- 副标题 -->
        <el-collapse v-model="activeNames" class="collapse-box">
            <el-collapse-item  name="1">
                <template slot="title">
                    <h3 class="c-default f-t-20 bor-b w-100-precent" >Paper && Graph</h3>
                </template>
                <h4  class="f-t-16">在本节中，我们将学习如何通过在JointJS代码中创建一个graph和一个 paper并将它们链接到HTML来完成设置。</h4>
                <pre class="language-js  line-numbers">
                    <code class="language-js  code-box">{{lists.code1}}</code>
                </pre>
                <div class="detail-box">
                     所有有用的JointJS应用程序都需要一张graph和一个 paper。该graph包含对图的所有组件的引用，paper是负责渲染该graph。<br>    
                    <a class="c-link" href="javascript:;" @click="routhChange('diaGraph')"> 图形模型 </a>通常在JointJS JavaScript代码的第一行定义。
                    为了呈现 <b>cells(element元素和links链接）</b> ，我们需要将它们添加到图表(graph)中；只有添加了单元格(cell)，才能存在于图表中(graph)。
                    在示例中，我们使用 <b class="c-method">cell.addTo(graph)</b> 函数来实现这一点，但也可以使用<a class="c-link" href="javascript:;" @click="routhChange('addCells')"> graph.addCells(cell)</a>功能。<br>  
                    通常，<a class="c-link" href="javascript:;" @click="routhChange('diaPaper')">paper </a>直接在 graph 定义之后指定。我们用一个options对象创建它，并将它保存为var paper。在五个选项中，有两个定义了关键的paper属性：
                    <ol>
                        <li>
                            <a class="c-link" href="javascript:;" @click="routhChange('diaEl')">el</a>
                            <span> - 在页面上已经渲染好的dom元素</span>
                        </li>
                        <li>
                            <a class="c-link" href="javascript:;" @click="routhChange('diaGraph')">graph</a>
                            <span> - 要渲染进paper中的图表模型</span>
                        </li>
                    </ol>
                </div>
            </el-collapse-item>
            <!-- <el-collapse-item  name="2">
                <template slot="title">
                    <h3 class="c-default f-t-20 bor-b w-100-precent" >{{item.title}}</h3>
                </template>
                <h4 v-html="item.subTitle" class="f-t-16"></h4>
                <pre v-if="item.code">
                    <code class="language-js  language-xml line-numbers code-box" v-text="item.code"></code>
                </pre>
                <div class="detail-box" >
                    所有有用的JointJS应用程序都需要一张graph和一个 paper。该graph包含对图的所有组件的引用，paper是负责渲染该graph。
                            
                            
                    <a href="javascript:;" @click="routhChange('diaGraph')"> 图形模型 </a>通常在JointJS JavaScript代码的第一行定义。
                </div>
            </el-collapse-item> -->
        </el-collapse>
    </div>
</template>

<script>
import tutorialTem from './index.vue';
import * as joint from 'jointjs';
export default {
    name:"fiveMinuteStart",
    components:{tutorialTem},
    data(){
        return{
            activeNames:["1"],
            lists:{
                title:"GRAPH & PAPER",
                content:`在本教程的第一部分，我们看到了一个简单的JointJS应用程序的工作示例:
                        我们将看看最初的Hello, World应用程序`,
                code1:
`<template>
    <div id="page" class="ph h-100-pre canvas-container"></div>
</template>
< script>
import * as joint from 'jointjs';
export default {
    data() {
        return {
            graph:null,
            paper:null,
        }
    },
    methods:{
        initJoint(){
            let this_ = this;

            //创建graph对象；
            this_.graph = new joint.dia.Graph;

            //创建paper供图像渲染
            this_.paper = new joint.dia.Paper({
                el:document.getElementById("page"),
                width:600,
                height:100,
                model:this_.graph,
            });
            var rect = new joint.shapes.standard.Rectangle();
            rect.position(100, 30);
            rect.resize(100, 40);
            rect.attr({
                body: {
                    fill: 'blue'
                },
                label: {
                    text: 'Hello',
                    fill: 'white'
                }
            });
            rect.addTo(this_.graph);

            var rect2 = rect.clone();
            rect2.translate(300, 0);
            rect2.attr('label/text', 'World!');
            rect2.addTo(this_.graph);

            var link = new joint.shapes.standard.Link();
            link.source(rect);
            link.target(rect2);
            link.addTo(this_.graph);
        }
    },
    mounted(){
        this.initJoint();
    }
< /script>`
            }  
        }
    },
    methods: {
        initJoint(){
            let this_ = this;
            //创建graph对象；
            this_.graph = new joint.dia.Graph;
            this_.paper = new joint.dia.Paper({
                el:document.getElementById("page"),
                width:600,
                height:100,
                model:this_.graph,
            });
            var rect = new joint.shapes.standard.Rectangle();
            rect.position(100, 30);
            rect.resize(100, 40);
            rect.attr({
                body: {
                    fill: 'blue'
                },
                label: {
                    text: 'Hello',
                    fill: 'white'
                }
            });
            rect.addTo(this_.graph);

            var rect2 = rect.clone();
            rect2.translate(300, 0);
            rect2.attr('label/text', 'World!');
            rect2.addTo(this_.graph);

            var link = new joint.shapes.standard.Link();
            link.source(rect);
            link.target(rect2);
            link.addTo(this_.graph);
        },
        routhChange(sign){
            console.log(444,sign)
        }
    },
    created(){
    },
    mounted(){
        this.initJoint();
    }
}
</script>


<style scoped>
    
</style>
