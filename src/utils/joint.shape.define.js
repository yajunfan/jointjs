// 定义joint的形状
import * as joint from 'jointjs';
var port = {
    id: 'a', // generated if `id` value is not present
    group: 'a',
    args: {}, // extra arguments for the port layout function, see `layout.Port` section
    label: {
        position: {
            name: 'right',
            args: { y: 6 } // extra arguments for the label layout function, see `layout.PortLabel` section
        },
        markup: '<text class="label-text" fill="blue"/>'
    },
    attrs: { text: { text: '' } },
    markup: '<rect width="16" height="16" x="-8" strokegit ="red" fill="gray"/>'
};
var port2 = {
    id: 'b', // generated if `id` value is not present
    group: 'b',
    args: {}, // extra arguments for the port layout function, see `layout.Port` section
    label: {
        position: {
            name: 'right',
            args: { x: 130 } // extra arguments for the label layout function, see `layout.PortLabel` section
        },
        markup: '<text class="label-text" fill="blue"/>'
    },
    z:-1,
    attrs: { text: { text: '' } },
    markup: '<rect width="16" height="16"  strokegit ="red" fill="red" />'
};
export const cIntro= joint.dia.Element.define('start', 
    {
        // optionHeight: 30,
        // questionHeight: 45,
        // paddingBottom: 30,
        // minWidth: 100,
        ports: {
            groups: {
                'a': {
                    attrs:{
                        rect:{
                            magnet: true,
                            x:-5,
                            y:15
                        }
                    }
                 },
                'b':{ 
                    attrs:{
                        rect:{
                            magnet: true,
                            x:130,
                            y:15
                        }
                    }
                }
            },
            items: [port,port2]
        },
        attrs: {
            ".background": { fill:"#527356",width: 120, height:50, x: 10, y: 0 },
            
            ".title":{
                text:"hi",
                fill:"white",
                x:60,
                y:25
            }
          }
    }, 
    {

        markup: '<g class="rotatable">\n  <g class="inPorts"/><g class="outPorts"/>\n  <g class="scalable"></g>\n  <rect class="background"/>\n  <rect class="color-band"/>\n  <g class="icon"><image/></g>\n  <text class="title"/>\n  <rect class="status"/>\n  <text class="message"/>\n  <text class="number"/>\n  <text class="api name"/>\n  <g class="btn btn-code"><image/></g>\n  <g class="btn btn-notes"><image/></g>\n  <g class="error"><image/></g>\n</g>\n',
        // markup: '<rect class="body"/><text class="question-text"/>',
        

        initialize: function() {
            joint.dia.Element.prototype.initialize.apply(this, arguments);
        }
    }
);
joint.shapes.exm = {};
joint.shapes.exm.Intro =cIntro;
export const createStart=(text)=>{
    return new joint.shapes.exm.Intro({
        position: { x:100, y: 20 }
    });
};
export default joint;