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
            <el-collapse-item  :name="item.id" v-for="item in lists.children" :key="item.id">
                <template slot="title">
                    <h3 class="c-default f-t-20" >{{item.title}}</h3>
                </template>
                <div v-for="ism in item.content" :key="ism.key">
                    <p  v-html="ism.text"></p>
                    <pre v-if="item.code[ism.key]" style="border:1px solid lightblue;" class="language-js  line-numbers">
                          <!-- //此处class：
                            //language-xml指的是基于xml语言进行高亮设置
                            //line-numbers指的是使用显示行号 -->
                        <code class="language-js  line-numbers" >{{item.code[ism.key]}}</code>
                    </pre>
                </div>
            </el-collapse-item>
        </el-collapse>
    </div>
</template>

<script>
import tutorialTem from './index.vue';
import * as joint from 'jointjs';
import  {createStart} from '@/utils/joint.shape.define';
export default {
    name:"fiveMinuteStart",
    components:{tutorialTem},
    data(){
        return{
            activeNames:[],
            lists:{
                title:"5分钟上手jointjs",
                content:"快速上手",
                children:[
                    {
                        id:1,
                        title:"获取 Jointjs",
                        content:[
                            {key:"1",text:'<b class="c-link">你可以通过以下几种方式获取</b>'},
                            {key:"2",text:'1.使用CDN,引入jquery，loadsh，backbone以及这三个js，之后是jointjs，且顺序不能乱'},
                            {key:"3",text:'2.通过 npm 获取 echarts，npm install --save jointjs'}
                            
                        ],
                        code:{
                            "2":`<!DOCTYPE html>
    <html>
        <head>
            <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.1.0/joint.css" />
        </head>
        <body>
            <!-- content -->
            <div id="myholder"></div>

            <!-- dependencies -->
            < script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js">< /script>
            < script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js">< /script>
            < script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone.js">< /script>
            < script src="https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.1.0/joint.js">< /script>

            <!-- code -->
            < script type="text/javascript">
                var graph = new joint.dia.Graph;
                var paper = new joint.dia.Paper({
                    el: document.getElementById('myholder'),
                    model: graph,
                    width: 600,
                    height: 100,
                    gridSize: 1
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
                rect.addTo(graph);

                var rect2 = rect.clone();
                rect2.translate(300, 0);
                rect2.attr('label/text', 'World!');
                rect2.addTo(graph);

                var link = new joint.shapes.standard.Link();
                link.source(rect);
                link.target(rect2);
                link.addTo(graph);
            < /script>
        </body>
    </html>`,
                    "3":`<template>
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
                ]
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
                width:1200,
                height:100,
                model:this_.graph,
                // defaultAnchor:{
                //         name: 'topRight', 
                //     args: {
                //         rotate: true,
                //         padding: 20
                //     }
                // },
                defaultConnector: { name: "rounded", args: { radius: 5 }  },
            });
            var rect4 = createStart();
            rect4.addTo(this_.graph);
            var rect = new joint.shapes.standard.Rectangle();
            rect.position(500, 30);
            rect.resize(100, 40);
            rect.attr({
                body: {
                    fill: '#527356'
                },
                label: {
                    text: 'Hello',
                    fill: 'white'
                }
            });
            rect.addTo(this_.graph);
            rect.addPort({ markup: '<rect width="15" height="15" fill="blue" x="-12" y="0"/>' })
            rect.addPort({ markup: '<rect width="15" height="15" fill="red" x="100" y="-20"/>', label: { markup: '<text fill="#000000"/>' }})

            var rect2 = rect.clone();
            rect2.translate(300, 0);
            rect2.attr('label/text', 'World!');
            rect2.addTo(this_.graph);

            // var rect3 = rect.clone();
            // rect3.translate(600, 0);
            // rect3.attr('label/text', '测试');
            // rect3.addTo(this_.graph);
            // var rect4 = createStart();
            // rect4.addTo(this_.graph);
            // var link = new joint.shapes.standard.Link();
            // link.source(rect);
            // link.target(rect2);
            // link.addTo(this_.graph);
        },
        initShape(){
            
          
           
        }
    },
    created(){
        this.lists.children.forEach(item=>{
            this.activeNames.push(item.id);
        })
    },
    mounted(){
        this.initJoint();
    }
}
</script>


<style scoped>
    
</style>
