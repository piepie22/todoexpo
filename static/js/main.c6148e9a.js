(()=>{"use strict";var e={3844:(e,t,r)=>{var o=r(2299),n=r(6665),i=r(3668),a=r(4701),l=r(932),d=r(6283),s=r(3929),c=r(8180),f=r(6773),u=r(8493),p=r(397);const g=i.default.create({container:{flex:1,backgroundColor:"#fff",paddingTop:0,padding:20},taskContainer:{flexDirection:"row",backgroundColor:"#fff",alignItems:"center",marginBottom:10,marginTop:10},taskText:{marginLeft:10,fontSize:18,padding:20},inputContainer:{backgroundColor:"#fff",marginTop:20,flexDirection:"row",alignItems:"center",padding:20},input:{flex:1,marginRight:0},addSection:{flex:1,marginTop:0}});(0,o.default)((function(){const[e,t]=(0,n.useState)([{key:"1",title:"Go grocery shopping",completed:!1},{key:"2",title:"Feed the dog",completed:!1},{key:"3",title:"Water the plants",completed:!1}]),[r,o]=(0,n.useState)("");return(0,p.jsxs)(a.default,{style:g.container,children:[(0,p.jsx)(l.default,{data:e,renderItem:({item:e})=>(0,p.jsxs)(s.default,{style:g.taskContainer,children:[(0,p.jsx)(u.CheckBox,{checked:e.completed,onPress:()=>{return r=e.key,void t((e=>e.map((e=>e.key===r?Object.assign({},e,{completed:!e.completed}):e))));var r},containerStyle:{marginRight:10}}),(0,p.jsx)(d.default,{style:[g.taskText,e.completed&&{textDecorationLine:"line-through",textDecorationStyle:"solid"}],children:e.title})]}),keyExtractor:e=>e.key}),(0,p.jsx)(s.default,{style:g.addSection,children:(0,p.jsxs)(s.default,{style:g.inputContainer,children:[(0,p.jsx)(f.default,{placeholder:"Add New To-Do Task",value:r,onChangeText:e=>o(e),style:g.input}),(0,p.jsx)(c.default,{title:"Add",onPress:()=>{if(r.trim()){const n={key:(e.length+1).toString(),title:r,completed:!1};t((e=>[...e,n])),o("")}}})]})})]})}))}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,r),i.loaded=!0,i.exports}r.m=e,(()=>{var e=[];r.O=(t,o,n,i)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,n,i]=e[c],l=!0,d=0;d<o.length;d++)(!1&i||a>=i)&&Object.keys(r.O).every((e=>r.O[e](o[d])))?o.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=n();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,n,i]}})(),r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),r.p="/todoexpo/",(()=>{var e={792:0};r.O.j=t=>0===e[t];var t=(t,o)=>{var n,i,[a,l,d]=o,s=0;if(a.some((t=>0!==e[t]))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(d)var c=d(r)}for(t&&t(o);s<a.length;s++)i=a[s],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var o=r.O(void 0,[120],(()=>r(3844)));o=r.O(o)})();
//# sourceMappingURL=main.c6148e9a.js.map