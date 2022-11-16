var B=Object.defineProperty,D=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var w=(t,e,i)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,E=(t,e)=>{for(var i in e||(e={}))P.call(e,i)&&w(t,i,e[i]);if(S)for(var i of S(e))K.call(e,i)&&w(t,i,e[i]);return t},F=(t,e)=>D(t,H(e));import{R,ag as M,L as V,a5 as l,w as G,U as O,ah as W,$ as b,g as u,k as h,l as d,y as c,D as k,j as p,A as x,J as N,m as j,v as U,V as z,W as $,a9 as L,a2 as J}from"./index.fe47ded2.js";import{S as X,E as Y}from"./split.a0e5a638.js";import{P as q,g as Q,v as Z,s as ee,a as te,b as se,d as ne}from"./paging.b47fe018.js";import{g as ae}from"./organization.d26f2e7f.js";const ie={name:"AuthAssignmentIndex",components:{Split:X,Paging:q},setup(){const t=M(),e=V({leftTreeContainerFixHeight:{overflowY:"auto",overflowX:"hidden",height:l.GetBrowserHeight()-115+"px",marginTop:"6px"},leftTree:{props:{label:"title",children:"children",isLeaf:"is_leaf"},curItemId:0,curItemTitle:"",data:[]},assignedAuthRef:{},assignedAuth:{data:[],needExpandedKeys:[]},allAuthRef:{},allAuth:{data:[],needExpandedKeys:[]},assignAuthEle:{buttonWarp:!1,buttonList:{insert:"insert",delete:"delete"},style:{textAlign:"center",marginTop:parseInt((l.GetBrowserHeight()-110)/2-35)+"px"}}}),i=(s,n)=>{let o=s.level===0?0:s.data.id;ae(o).then(_=>(e.leftTree.data=_.data.data,s.level===0&&e.leftTree.data.length>0&&(e.leftTree.curItemId=e.leftTree.data[0].id,e.leftTree.curItemTitle=e.leftTree.data[0].title),n(e.leftTree.data))).catch(_=>n([]))},f=(s,n,o)=>{s.id>0&&e.leftTree.curItemId!==s.id&&(e.leftTree.curItemId=s.id,e.leftTree.curItemTitle=s.title)};G(()=>e.leftTree.curItemId,(s,n)=>{s>0&&n!==void 0&&A(s)},{deep:!0,immediate:!0});const I=()=>{Z(t.currentRoute.value.meta.id).then(s=>{ee(s.data.data,e.assignAuthEle.buttonList),e.assignAuthEle.buttonWarp=!0}).catch(s=>{})},A=s=>{s>0?Q(s).then(n=>{e.assignedAuth.data=n.data.data.data,l.getNeedExpandTreeNodeForAssignedAuth(n.data.data.data,e.assignedAuth.needExpandedKeys)}).catch(n=>{e.assignedAuth.data=[]}):e.assignedAuth.data=[]},g=()=>{te().then(s=>{e.allAuth.data=s.data.data.data,l.getNeedExpandTreeNodeForAssignedAuth(s.data.data.data,e.allAuth.needExpandedKeys)}).catch(s=>{e.allAuth.data=[]})},m=()=>{const s=e.allAuthRef.getCheckedNodes();if(s.length<1){l.Curd.FailTips("\u8BF7\u52FE\u9009\u9700\u8981\u5206\u914D\u7684\u6743\u9650\u8282\u70B9");return}let n=[],o=[];s.every((a,r)=>(a.node_type==="menu"?n.some((y,v)=>y.system_menu_button_id===a.system_menu_button_id)||n.push({node_type:"menu",org_post_id:e.leftTree.curItemId,system_menu_button_id:a.system_menu_button_id,system_menu_fid:-1}):a.node_type==="button"&&(o.push({node_type:"button",org_post_id:e.leftTree.curItemId,system_menu_button_id:a.system_menu_button_id,system_menu_fid:a.system_menu_fid}),n.some((y,v)=>y.system_menu_button_id===a.system_menu_fid)||n.push({node_type:"menu",org_post_id:e.leftTree.curItemId,system_menu_button_id:a.system_menu_fid,system_menu_fid:-1})),!0)),se({menu_list:n,button_list:o}).then(a=>{l.Curd.SuccessTips("\u6743\u9650\u5206\u914D\u6210\u529F"),A(e.leftTree.curItemId)}).catch(a=>{l.Curd.FailTips("\u6743\u9650\u5206\u914D\u5931\u8D25"+a.response.data.msg)})},T=()=>{const s=e.assignedAuthRef.getCheckedNodes();if(s.length<1){l.Curd.FailTips("\u8BF7\u52FE\u9009\u9700\u8981\u79FB\u51FA\u7684\u6743\u9650\u8282\u70B9");return}let n=[];s.every((o,_)=>(n[_]=new Promise((a,r)=>{const y={post_mount_has_menu_id:o.auth_post_mount_has_menu_id,post_mount_has_menu_button_id:o.system_menu_button_id,node_type:o.node_type};ne(y).then(v=>{a(!0)}).catch(v=>{r(!1)})}),!0)),Promise.all(n).then(o=>{l.Curd.SuccessTips("\u6743\u9650\u79FB\u51FA\u6210\u529F"),A(e.leftTree.curItemId)}).catch(o=>{l.Curd.FailTips("\u4E2A\u522B\u8BF7\u6C42\u5931\u8D25")})};return g(),I(),F(E({},O(e)),{fASyncData:i,fLeftTreeCurrentChange:f,fAssignAuth:m,fDestroyAuth:T})}},C=t=>(z("data-v-4e9b5708"),t=t(),$(),t),oe=C(()=>p("div",{class:"auth-list-title"},"\u5DF2\u5206\u914D\u6743\u9650\u5217\u8868",-1)),de={class:"tree-node"},re={class:"tree-node-title"},le=L("\u5206\u914D"),ue=C(()=>p("div",{style:{height:"10px"}},null,-1)),he=L("\u5220\u9664"),_e=C(()=>p("div",{class:"auth-list-title"},"\u5F85\u5206\u914D\u6743\u9650\u5217\u8868",-1)),ce={class:"tree-node"},pe={class:"tree-node-title"};function fe(t,e,i,f,I,A){const g=Y,m=W,T=b("OfficeBuilding"),s=b("Menu"),n=b("SetUp"),o=J,_=b("Split");return u(),h(_,null,{left:d(()=>[c(m,{style:k(t.leftTreeContainerFixHeight),height:t.leftTreeContainerFixHeight.height},{default:d(()=>[c(g,{"expand-on-click-node":!1,"node-key":"id","default-expanded-keys":[1],"current-node-key":1,props:t.leftTree.props,load:f.fASyncData,lazy:"","highlight-current":!0,onNodeClick:f.fLeftTreeCurrentChange},null,8,["props","load","onNodeClick"])]),_:1},8,["style","height"])]),right:d(()=>[c(_,{splitRatio:40},{left:d(()=>[c(m,{style:k(t.leftTreeContainerFixHeight),height:t.leftTreeContainerFixHeight.height},{default:d(()=>[oe,c(g,{"expand-on-click-node":!1,"highlight-current":!0,"node-key":"system_menu_button_id","current-node-key":1,"show-checkbox":"","empty-text":"\u6682\u65E0\u6570\u636E",ref:"assignedAuthRef",props:t.leftTree.props,data:t.assignedAuth.data,"default-expanded-keys":t.assignedAuth.needExpandedKeys},{default:d(({node:a,data:r})=>[p("span",de,[r.node_type==="dept"?(u(),h(T,{key:0,style:{width:"15px",height:"15px",color:"#1178e2"}})):r.node_type==="menu"?(u(),h(s,{key:1,style:{width:"15px",height:"15px",color:"#54a1f6"}})):r.node_type==="button"?(u(),h(n,{key:2,style:{width:"15px",height:"15px",color:"#045bb4"}})):x("v-if",!0),p("span",re,N(a.label),1)])]),_:1},8,["props","data","default-expanded-keys"])]),_:1},8,["style","height"])]),right:d(()=>[c(_,{splitRatio:15},{left:d(()=>[j(p("div",{style:k(t.assignAuthEle.style)},[t.assignAuthEle.buttonList.insert?(u(),h(o,{key:0,type:"primary",onClick:f.fAssignAuth,icon:"ArrowLeft"},{default:d(()=>[le]),_:1},8,["onClick"])):x("v-if",!0),ue,t.assignAuthEle.buttonList.delete?(u(),h(o,{key:1,type:"danger",onClick:f.fDestroyAuth,icon:"ArrowRight"},{default:d(()=>[he]),_:1},8,["onClick"])):x("v-if",!0)],4),[[U,t.assignAuthEle.buttonWarp]])]),right:d(()=>[c(m,{style:k(t.leftTreeContainerFixHeight),height:t.leftTreeContainerFixHeight.height},{default:d(()=>[_e,c(g,{"expand-on-click-node":!1,"highlight-current":!0,"node-key":"system_menu_button_id","current-node-key":1,"show-checkbox":"","empty-text":"\u6682\u65E0\u6570\u636E",ref:"allAuthRef",props:t.leftTree.props,data:t.allAuth.data,"default-expanded-keys":t.allAuth.needExpandedKeys},{default:d(({node:a,data:r})=>[p("span",ce,[r.node_type==="dept"?(u(),h(T,{key:0,style:{width:"15px",height:"15px",color:"#1178e2"}})):r.node_type==="menu"?(u(),h(s,{key:1,style:{width:"15px",height:"15px",color:"#54a1f6"}})):r.node_type==="button"?(u(),h(n,{key:2,style:{width:"15px",height:"15px",color:"#045bb4"}})):x("v-if",!0),p("span",pe,N(a.label),1)])]),_:1},8,["props","data","default-expanded-keys"])]),_:1},8,["style","height"])]),_:1})]),_:1})]),_:1})}var ge=R(ie,[["render",fe],["__scopeId","data-v-4e9b5708"],["__file","E:/Project/2022/ginskeleton_series/GinSkeleton-Admin2/gin-skeleton-admin2-frontend/src/components/system-setting/auth-assignment/index.vue"]]);const me={__name:"auth_assignment",setup(t){return(e,i)=>(u(),h(ge))}};var xe=R(me,[["__file","E:/Project/2022/ginskeleton_series/GinSkeleton-Admin2/gin-skeleton-admin2-frontend/src/views/system-setting/auth_assignment.vue"]]);export{xe as default};