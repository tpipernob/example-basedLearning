"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[804],{9142:(e,a,s)=>{s.d(a,{ZP:()=>c,w7:()=>i});var t=s(9342),l=s(8533),o=s(6950),r=s(4328);const d=e=>new Promise(((a,s)=>{o.Z.show(),console.log(e.email,e.password),(0,l.e5)(t.I,e.email,e.password).then((e=>{o.Z.hide(),a(e.user)})).catch((e=>{o.Z.hide(),r.Z.create({type:"negative",message:e.message}),s(e.message)}))})),i=()=>new Promise(((e,a)=>{o.Z.show(),t.I.signOut().then((()=>{o.Z.hide(),e()})).catch((e=>{o.Z.hide(),a(e.message)}))})),c=d},9342:(e,a,s)=>{s.d(a,{I:()=>i});var t=s(7141),l=s(8533),o=s(3703);const r={apiKey:"AIzaSyDA7T1Fg6CSR1WJHpOeNdaRYuWKtyBA7GU",authDomain:"app-ebl.firebaseapp.com",projectId:"app-ebl",storageBucket:"app-ebl.appspot.com",messagingSenderId:"664304698050",appId:"1:664304698050:web:fd9d886cf317cca6d5f15b"},d=(0,t.ZF)(r),i=(0,l.v0)(d);(0,l.Aj)(i,(e=>{e?o.Z.set("user",e):o.Z.remove("user")}))},3804:(e,a,s)=>{s.r(a),s.d(a,{default:()=>P});s(9665);var t=s(9835),l=s(7813),o=s(9142),r=s(8339);const d={class:"row"},i=(0,t._)("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[(0,t._)("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[(0,t._)("div",{class:""},[(0,t._)("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Bem Vindo!"),(0,t._)("div",{class:"text-white q-my-sm text-subtitle1"},"Faça login na sua conta para iniciar! ")])])],-1),c={class:"col-12 col-sm-7"},m={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},n={class:"col-12 fredoka text-subtitle1"},p=(0,t.Uk)(" APP-EBL "),u={class:"row q-pa-sm-sm q-pa-md"},w={class:"col-12"},h=(0,t._)("div",{class:"q-mb-xl"},[(0,t._)("div",{class:"flex justify-center"},[(0,t._)("div",{class:"text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"}," Login")])],-1),f={class:"q-mt-lg"},v={class:"q-mt-sm"},_=(0,t.Uk)(" Ainda não tem uma conta? "),g=(0,t.Uk)("Registrar-se"),b={__name:"LoginPage",setup(e){const a=(0,r.tv)(),s=(0,l.qj)({email:null,password:null}),b=(0,l.iH)(null),x=async()=>{if(b.value.validate())try{await(0,o.ZP)(s),a.push("/app")}catch(e){console.error(e)}};return(e,a)=>{const l=(0,t.up)("router-link"),o=(0,t.up)("q-input"),r=(0,t.up)("q-btn"),q=(0,t.up)("q-form"),y=(0,t.up)("q-card-section"),Z=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(Z,{class:"q-ma-xl"},{default:(0,t.w5)((()=>[(0,t._)("div",d,[i,(0,t._)("div",c,[(0,t._)("div",m,[(0,t._)("div",n,[(0,t.Wm)(l,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:(0,t.w5)((()=>[p])),_:1})])]),(0,t._)("div",u,[(0,t._)("div",w,[(0,t.Wm)(y,null,{default:(0,t.w5)((()=>[h,(0,t.Wm)(q,{ref_key:"form",ref:b,class:"q-gutter-md",onSubmit:x},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{modelValue:s.email,"onUpdate:modelValue":a[0]||(a[0]=e=>s.email=e),label:"Email",name:"Email"},null,8,["modelValue"]),(0,t.Wm)(o,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=e=>s.password=e),label:"Senha",name:"password",type:"password"},null,8,["modelValue"]),(0,t._)("div",null,[(0,t.Wm)(r,{class:"full-width fredoka",color:"primary",label:"Login",rounded:"",type:"submit"}),(0,t._)("div",f,[(0,t._)("div",v,[_,(0,t.Wm)(l,{class:"text-primary",to:"/register"},{default:(0,t.w5)((()=>[g])),_:1})])])])])),_:1},512)])),_:1})])])])])])),_:1})}}};var x=s(4458),q=s(3190),y=s(8326),Z=s(1852),k=s(9379),W=s(9984),I=s.n(W);const j=b,P=j;I()(b,"components",{QCard:x.Z,QCardSection:q.Z,QForm:y.Z,QInput:Z.Z,QBtn:k.Z})}}]);