"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[0],{5e3:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(9835),n=a(8047);const o=(0,l._)("div",null,null,-1),i=(0,l.Uk)(" Menu ");function u(e,t,a,u,r,c){const s=(0,l.up)("q-btn"),p=(0,l.up)("q-toolbar-title"),d=(0,l.up)("q-toolbar"),m=(0,l.up)("q-header"),w=(0,l.up)("q-item-label"),v=(0,l.up)("EssentialLink"),f=(0,l.up)("q-list"),g=(0,l.up)("q-drawer"),k=(0,l.up)("router-view"),h=(0,l.up)("q-page-container"),b=(0,l.up)("q-layout");return(0,l.wg)(),(0,l.j4)(b,{view:"lHh Lpr lFf"},{default:(0,l.w5)((()=>[(0,l.Wm)(m,{elevated:"",class:"print-hide"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.titulo),1)])),_:1}),o])),_:1})])),_:1}),(0,l.Wm)(g,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":t[0]||(t[0]=t=>e.leftDrawerOpen=t),"show-if-above":"",bordered:""},{default:(0,l.w5)((()=>[(0,l.Wm)(f,null,{default:(0,l.w5)((()=>[(0,l.Wm)(w,{header:""},{default:(0,l.w5)((()=>[i])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.essentialLinks,(e=>((0,l.wg)(),(0,l.j4)(v,(0,l.dG)({key:e.title},e),null,16)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(h,null,{default:(0,l.w5)((()=>[(0,l.Wm)(k)])),_:1})])),_:1})}var r=a(7813);function c(e,t,a,o,i,u){const r=(0,l.up)("q-icon"),c=(0,l.up)("q-item-section"),s=(0,l.up)("q-item-label"),p=(0,l.up)("q-item");return(0,l.wg)(),(0,l.j4)(p,{clickable:"",to:e.route,exact:""},{default:(0,l.w5)((()=>[e.icon?((0,l.wg)(),(0,l.j4)(c,{key:0,avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:e.icon},null,8,["name"])])),_:1})):(0,l.kq)("",!0),(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(s,null,{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.title),1)])),_:1}),(0,l.Wm)(s,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.caption),1)])),_:1})])),_:1})])),_:1},8,["to"])}const s=(0,l.aZ)({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},route:{type:String,default:""},icon:{type:String,default:""}}});var p=a(1639),d=a(490),m=a(1233),w=a(2857),v=a(3115),f=a(9984),g=a.n(f);const k=(0,p.Z)(s,[["render",c]]),h=k;g()(s,"components",{QItem:d.Z,QItemSection:m.Z,QIcon:w.Z,QItemLabel:v.Z});var b=a(8339);const _=(0,l.aZ)({name:"MainLayout",components:{EssentialLink:h},setup(){const e=(0,r.iH)(!1),t=(0,b.tv)(),a=(0,l.Fl)((()=>t.currentRoute.value.name)),n=(0,l.Fl)((()=>a.value.includes("en"))),o=(0,l.Fl)((()=>[{title:"Home",caption:"",icon:"home",route:{name:n.value?"en-home":"home"}},{title:(n.value,"Tutorial"),caption:"",icon:"explore",route:{name:n.value?"en-tutorial":"tutorial"}},{title:n.value?"Teaching Theory":"Ensino da Teoria",caption:"",icon:"school",route:{name:n.value?"en-teachingTheory":"teachingTheory"}},{title:n.value?"Activities":"Atividades",caption:"",icon:"tips_and_updates",route:{name:n.value?"en-activities":"activities"}},{title:(n.value,"Feedbacks"),caption:"",icon:"chat",route:{name:n.value?"en-feedbacks":"feedbacks"}},{title:n.value?"Repository":"Repositório",caption:"",icon:"folder",route:{name:n.value?"en-repository":"repository"}}])),i=(0,l.Fl)((()=>n.value?"Example-Based Learning":"Aprendizagem Baseada em Exemplos"));return{currentRoute:a,essentialLinks:o,leftDrawerOpen:e,titulo:i,toggleLeftDrawer(){e.value=!e.value}}}});var q=a(7605),Z=a(6602),y=a(1663),L=a(9379),Q=a(1973),W=a(906),T=a(3246),D=a(2133);const j=(0,p.Z)(_,[["render",u]]),E=j;g()(_,"components",{QLayout:q.Z,QHeader:Z.Z,QToolbar:y.Z,QBtn:L.Z,QToolbarTitle:Q.Z,QDrawer:W.Z,QList:T.Z,QItemLabel:v.Z,QPageContainer:D.Z})}}]);