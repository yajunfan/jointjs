<template>
  <div class="start-container">
        <tutorialTem :lists="lists"/>
  </div>
</template>

<script>
import tutorialTem from './index.vue';
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
                            "2":`< script asrc='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.js'>< /script>
                                < script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.1/lodash.js">< /script>
                                < script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.3.3/backbone.js">< /script>
                                < script src="https://cdnjs.cloudflare.com/ajax/libs/jointjs/2.1.0/joint.js">< /script>
                            `
                        }
                    }
                ]
            }  
        }
    },
    methods: {
        
    }
}
</script>


<style scoped>
    
</style>
