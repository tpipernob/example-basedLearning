"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[418],{4218:(e,a,s)=>{s.d(a,{Ay:()=>n,CI:()=>c,G6:()=>i});var l=s(737),t=s(5956),o=s(6153),r=s(1627);const d=e=>new Promise(((a,s)=>{o.A.show(),console.log(e.email,e.password),(0,t.x9)(l.j,e.email,e.password).then((e=>{o.A.hide(),a(e.user)})).catch((e=>{o.A.hide(),r.A.create({type:"negative",message:e.message}),s(e.message)}))})),i=()=>new Promise(((e,a)=>{o.A.show();const s=new t.HF;(0,t.df)(l.j,s).then((a=>{o.A.hide(),e(a.user)})).catch((e=>{o.A.hide(),a(e.message)}))})),c=()=>new Promise(((e,a)=>{o.A.show(),l.j.signOut().then((()=>{o.A.hide(),e()})).catch((e=>{o.A.hide(),a(e.message)}))})),n=d},737:(e,a,s)=>{s.d(a,{j:()=>c});var l=s(322),t=s(546),o=s(5956),r=s(1271);const d={apiKey:"AIzaSyDA7T1Fg6CSR1WJHpOeNdaRYuWKtyBA7GU",authDomain:"app-ebl.firebaseapp.com",projectId:"app-ebl",storageBucket:"app-ebl.appspot.com",messagingSenderId:"664304698050",appId:"1:664304698050:web:fd9d886cf317cca6d5f15b"},i=(0,l.Wp)(d),c=((0,t.aU)(i),(0,o.xI)(i));(0,o.hg)(c,(e=>{e?r.A.set("user",e):r.A.remove("user")}))},3418:(e,a,s)=>{s.r(a),s.d(a,{default:()=>C});s(4748);var l=s(1758),t=s(555),o=s(4218),r=s(455);const d={class:"row"},i=(0,l.Lk)("div",{class:"col-0 col-sm-5 bg-primary rounded-left-borders xs-hide"},[(0,l.Lk)("div",{class:"row full-width q-px-xl q-pb-xl full-height flex flex-center"},[(0,l.Lk)("div",{class:""},[(0,l.Lk)("div",{class:"text-h4 text-uppercase text-white fredoka",style:{"min-width":"220px"}},"Bem Vindo!"),(0,l.Lk)("div",{class:"text-white q-my-sm text-subtitle1"},"Faça login na sua conta para iniciar! ")])])],-1),c={class:"col-12 col-sm-7"},n={class:"row q-ml-sm q-mt-sm sm-and-up-hide"},m={class:"col-12 fredoka text-subtitle1"},p=(0,l.eW)(" APP-EBL "),u={class:"row q-pa-sm-sm q-pa-md"},h={class:"col-12"},g=(0,l.Lk)("div",{class:"q-mb-xl"},[(0,l.Lk)("div",{class:"flex justify-center"},[(0,l.Lk)("div",{class:"text-h4 text-uppercase q-my-none text-weight-bold text-primary fredoka"}," Login")])],-1),k={class:"q-mt-lg"},b={class:"q-mt-sm"},w=(0,l.eW)(" Ainda não tem uma conta? "),f=(0,l.eW)("Registrar-se"),v={__name:"LoginPage",setup(e){const a=(0,r.rd)(),s=(0,t.Kh)({email:null,password:null}),v=(0,t.KR)(null),x=async()=>{try{await(0,o.G6)(),a.push("/app")}catch(e){console.error(e)}},y=async()=>{if(v.value.validate())try{await(0,o.Ay)(s),a.push("/app")}catch(e){console.error(e)}};return(e,a)=>{const t=(0,l.g2)("router-link"),o=(0,l.g2)("q-input"),r=(0,l.g2)("q-btn"),A=(0,l.g2)("q-form"),L=(0,l.g2)("q-card-section"),q=(0,l.g2)("q-card");return(0,l.uX)(),(0,l.Wv)(q,{class:"q-ma-xl"},{default:(0,l.k6)((()=>[(0,l.Lk)("div",d,[i,(0,l.Lk)("div",c,[(0,l.Lk)("div",n,[(0,l.Lk)("div",m,[(0,l.bF)(t,{class:"text-primary",style:{"text-decoration":"none"},to:"/"},{default:(0,l.k6)((()=>[p])),_:1})])]),(0,l.Lk)("div",u,[(0,l.Lk)("div",h,[(0,l.bF)(L,null,{default:(0,l.k6)((()=>[g,(0,l.bF)(A,{ref_key:"form",ref:v,class:"q-gutter-md",onSubmit:y},{default:(0,l.k6)((()=>[(0,l.bF)(o,{modelValue:s.email,"onUpdate:modelValue":a[0]||(a[0]=e=>s.email=e),label:"Email",name:"Email"},null,8,["modelValue"]),(0,l.bF)(o,{modelValue:s.password,"onUpdate:modelValue":a[1]||(a[1]=e=>s.password=e),label:"Senha",name:"password",type:"password"},null,8,["modelValue"]),(0,l.Lk)("div",null,[(0,l.bF)(r,{class:"full-width fredoka",color:"primary",label:"Login",rounded:"",type:"submit"}),(0,l.bF)(r,{class:"full-width q-mt-md",color:"primary",label:"Login com o Google",rounded:"",onClick:x}),(0,l.Lk)("div",k,[(0,l.Lk)("div",b,[w,(0,l.bF)(t,{class:"text-primary",to:"/register"},{default:(0,l.k6)((()=>[f])),_:1})])])])])),_:1},512)])),_:1})])])])])])),_:1})}}};var x=s(3316),y=s(4189),A=s(9200),L=s(9270),q=s(2374),F=s(8582),_=s.n(F);const j=v,C=j;_()(v,"components",{QCard:x.A,QCardSection:y.A,QForm:A.A,QInput:L.A,QBtn:q.A})}}]);