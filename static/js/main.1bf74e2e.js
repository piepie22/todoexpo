(()=>{"use strict";var e={3844:(e,t,o)=>{var n=o(2299),r=o(6665),i=o(3668),a=o(4701),l=o(932),d=o(6283),s=o(3929),c=o(8180),f=o(6773),p=o(8493),u=o(397);const g=i.default.create({container:{flex:1,backgroundColor:"#fff",paddingTop:0,padding:20},title:{fontSize:24,fontWeight:"bold",textAlign:"center",marginTop:20,marginBottom:20},taskContainer:{flexDirection:"row",backgroundColor:"#fff",alignItems:"center",marginBottom:10,marginTop:10},taskText:{marginLeft:10,fontSize:18,padding:20},inputContainer:{backgroundColor:"#fff",marginTop:20,flexDirection:"row",alignItems:"center",padding:20},input:{flex:1,marginRight:0},addSection:{flex:1,marginTop:0,marginBottom:200}}),h=[{key:"1",description:"Go grocery shopping",completed:!1},{key:"2",description:"Feed the dog",completed:!1},{key:"3",description:"Water the plants",completed:!1},{key:"4",description:"RSVP to dinner",completed:!1}],m=()=>{const[e,t]=(0,r.useState)(""),[o,n]=(0,r.useState)(h);return(0,u.jsxs)(a.default,{style:g.container,children:[(0,u.jsx)(d.default,{style:g.title,children:"To-Do List"}),(0,u.jsx)(l.default,{data:o,renderItem:({item:e})=>(0,u.jsxs)(s.default,{style:g.taskContainer,children:[(0,u.jsx)(p.CheckBox,{checked:e.completed,onPress:()=>(e=>{const t=o.map((t=>t.key===e?Object.assign({},t,{completed:!t.completed}):t));n(t)})(e.key)}),(0,u.jsx)(d.default,{style:[g.taskText,e.completed&&{textDecorationLine:"line-through",textDecorationStyle:"solid"}],children:e.description})]}),keyExtractor:e=>e.key}),(0,u.jsx)(s.default,{style:g.addSection,children:(0,u.jsxs)(s.default,{style:g.inputContainer,children:[(0,u.jsx)(f.default,{placeholder:"Add New To-Do Task",value:e,onChangeText:e=>t(e),style:g.input}),(0,u.jsx)(c.default,{title:"Add",onPress:()=>{if(e.trim()){const r={key:(o.length+1).toString(),description:e,completed:!1};n([...o,r]),t("")}}})]})})]})};no,(0,n.default)(m)}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={id:n,loaded:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.loaded=!0,i.exports}o.m=e,(()=>{var e=[];o.O=(t,n,r,i)=>{if(!n){var a=1/0;for(c=0;c<e.length;c++){for(var[n,r,i]=e[c],l=!0,d=0;d<n.length;d++)(!1&i||a>=i)&&Object.keys(o.O).every((e=>o.O[e](n[d])))?n.splice(d--,1):(l=!1,i<a&&(a=i));if(l){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,r,i]}})(),o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/todoexpo/",(()=>{var e={792:0};o.O.j=t=>0===e[t];var t=(t,n)=>{var r,i,[a,l,d]=n,s=0;if(a.some((t=>0!==e[t]))){for(r in l)o.o(l,r)&&(o.m[r]=l[r]);if(d)var c=d(o)}for(t&&t(n);s<a.length;s++)i=a[s],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(c)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=o.O(void 0,[120],(()=>o(3844)));n=o.O(n)})();
//# sourceMappingURL=main.1bf74e2e.js.map