"use strict";(globalThis["webpackChunkquasar_project"]=globalThis["webpackChunkquasar_project"]||[]).push([[809],{737:(e,a,t)=>{t.d(a,{db:()=>d,j2:()=>m});var o=t(322),i=t(546),s=t(5956),l=t(1271);const n={apiKey:"AIzaSyDA7T1Fg6CSR1WJHpOeNdaRYuWKtyBA7GU",authDomain:"app-ebl.firebaseapp.com",projectId:"app-ebl",storageBucket:"app-ebl.appspot.com",messagingSenderId:"664304698050",appId:"1:664304698050:web:fd9d886cf317cca6d5f15b"},r=(0,o.Wp)(n),d=(0,i.aU)(r),m=(0,s.xI)(r);(0,s.hg)(m,(e=>{e?l.A.set("user",e):l.A.remove("user")}))},7914:(e,a,t)=>{t.d(a,{A:()=>g});var o=t(1758),i=t(2901);const s=["onMouseover","onClick"];function l(e,a,t,l,n,r){return(0,o.uX)(),(0,o.CE)("div",null,[((0,o.uX)(),(0,o.CE)(o.FK,null,(0,o.pI)(5,(e=>(0,o.Lk)("i",{key:e,class:(0,i.C4)(["fa fa-star",n.rating>=e?"fas":"far"]),onMouseover:a=>r.starOver(e),onClick:a=>r.setRating(e)},null,42,s))),64))])}var n=t(546),r=t(737);const d={props:{docIdprop:{type:String,required:!0},reviewIdprop:{type:String,required:!0}},data(){return{rating:0,temp_rating:null,docId:this.docIdprop,reviewId:this.reviewIdprop}},methods:{starOver(e){this.temp_rating=this.rating,this.rating=e},async setRating(e){this.temp_rating=e,await this.addOrUpdateReview(this.docId,this.reviewId,this.reviewId,this.temp_rating)},async getRatingFromApi(){this.rating=await this.getAverageRating(this.docId)},async getAverageRating(e){const a=(0,n.rJ)(r.db,"ratings",e,"reviews"),t=await(0,n.GG)(a);let o=0,i=0;return t.forEach((e=>{o+=e.data().value,i++})),0===i?0:o/i},async addOrUpdateReview(e,a,t,o){const i=(0,n.H9)(r.db,"ratings",e,"reviews",a);await(0,n.BN)(i,{userId:t,value:o},{merge:!0})}},mounted(){this.getRatingFromApi()}};var m=t(2807);const p=(0,m.A)(d,[["render",l]]),g=p},2809:(e,a,t)=>{t.r(a),t.d(a,{default:()=>w});var o=t(1758),i=t(2901);const s=(0,o.Lk)("span",{class:"ellipsis"},"Repositório de Exemplos",-1);function l(e,a,t,l,n,r){const d=(0,o.g2)("q-toolbar-title"),m=(0,o.g2)("q-ribbon"),p=(0,o.g2)("q-toolbar"),g=(0,o.g2)("code-tabs"),c=(0,o.g2)("q-card-section"),u=(0,o.g2)("q-td"),f=(0,o.g2)("StarRating"),b=(0,o.g2)("q-btn"),h=(0,o.g2)("q-tr"),v=(0,o.g2)("q-grid"),x=(0,o.g2)("q-card");return(0,o.uX)(),(0,o.Wv)(x,{class:(0,i.C4)(e.$q.dark.isActive?"my-lg q-pa-md q-ma-sm bg-grey-8":"my-lg q-pa-md q-ma-sm bg-grey-2")},{default:(0,o.k6)((()=>[(0,o.bF)(p,null,{default:(0,o.k6)((()=>[(0,o.bF)(m,{position:"left",color:"rgba(0,0,0,.58)","background-color":"#c0c0c0","leaf-color":"#a0a0a0","leaf-position":"bottom",decoration:"rounded-out"},{default:(0,o.k6)((()=>[(0,o.bF)(d,{class:"example-title",style:{padding:"5px 20px"}},{default:(0,o.k6)((()=>[s])),_:1})])),_:1})])),_:1}),(0,o.bF)(c,{class:"q-pb-sm"},{default:(0,o.k6)((()=>[(0,o.bF)(g,{tagParts:t.tagParts},null,8,["tagParts"])])),_:1}),(0,o.bF)(c,null,{default:(0,o.k6)((()=>[(0,o.bF)(v,{data:n.data,columns:n.columns,columns_filter:!1,draggable:!0,fullscreen:!0,csv_download:!1,global_search:!0,groupby_filter:!1,header_filter:!0},{body:(0,o.k6)((e=>[(0,o.bF)(h,{props:e},{default:(0,o.k6)((()=>[(0,o.bF)(u,{key:"exampleType"},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.row.exampleType),1)])),_:2},1024),(0,o.bF)(u,{key:"model"},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.row.model),1)])),_:2},1024),(0,o.bF)(u,{key:"name",style:{"white-space":"pre-wrap"}},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.row.name),1)])),_:2},1024),(0,o.bF)(u,{key:"additionalInformation",style:{"white-space":"pre-wrap"}},{default:(0,o.k6)((()=>[(0,o.eW)((0,i.v_)(e.row.additionalInformation),1)])),_:2},1024),(0,o.bF)(u,{key:"review"},{default:(0,o.k6)((()=>[((0,o.uX)(),(0,o.Wv)(f,{key:e.row.info,docIdprop:e.row.info,reviewIdprop:n.reviewId},null,8,["docIdprop","reviewIdprop"]))])),_:2},1024),(0,o.bF)(u,{key:"link"},{default:(0,o.k6)((()=>[(0,o.bF)(b,{flat:"",label:"",href:e.row.link,target:"_blank",icon:"link"},null,8,["href"])])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["data","columns"])])),_:1})])),_:1},8,["class"])}var n=t(7914);const r={data(){return{reviewId:"",columns:[{name:"exampleType",align:"left",label:"Tipo",field:"exampleType",sortable:!0,filter_type:"text"},{name:"model",align:"left",label:"Modelo",field:"model",sortable:!0},{name:"name",required:!0,label:"Local",align:"left",field:"name",sortable:!0,style:"width: 10%",headerStyle:"width: 0px"},{name:"additionalInformation",align:"left",label:"Informação adicinoal",field:"additionalInformation"},{name:"review",label:"Rating",align:"left",field:"review"},{name:"link",align:"left",label:"Link",field:"link"}],data:[{name:"Faculty",exampleType:"Exemplo Errôneo",model:"Diagrama de Caso de Uso",additionalInformation:"21 exemplos de antipadrões",info:"21 Examples of Anti-patterns",review:()=>this.getRating("21 Examples of Anti-patterns"),link:"https://faculty.kfupm.edu.sa/ICS/melattar/UCAntipatterns.htm"},{name:"Metamodeling Anti-Patterns",exampleType:"Exemplo Errôneo",model:"Diagrama de Classes",additionalInformation:"31 exemplos de antipadrões com imagens dos diagramas",info:"31 Examples of Anti-patterns with Diagrams",review:()=>this.getRating("31 Examples of Anti-patterns with Diagrams"),link:"https://sites.google.com/site/metamodelingantipatterns/catalog/uml"},{name:"OpenSMALS",exampleType:"Exemplo Errôneo",model:"Diagrama de Classes",additionalInformation:"6 exemplos textuais",info:"6 Textual Examples (Erroneous Examples)",review:()=>this.getRating("6 Textual Examples (Erroneous Examples)"),link:"https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxhY3RpdmVsZWFybmluZ21ldGhvZHN8Z3g6MTFhOGY2ZDBhMGY4MGZhMg"},{name:"OpenSMALS",exampleType:"Exemplo Correto",model:"Diagrama de Classes",additionalInformation:"6 exemplos textuais",info:"6 Textual Examples (Correct Examples)",review:()=>this.getRating("6 Textual Examples (Correct Examples)"),link:"https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxhY3RpdmVsZWFybmluZ21ldGhvZHN8Z3g6MzgxZjY3MzczOGE5NWNmNg"},{name:"OpenSMALS",exampleType:"Exemplo de domínio",model:"Não especificado",additionalInformation:"9 exemplos de domínio que podem ser usados para modelagem",info:"9 Examples of Domains That Can Be Used for Modeling",review:()=>this.getRating("9 Examples of Domains That Can Be Used for Modeling"),link:"https://sites.google.com/site/activelearningmethods/escolha-aqui-seu-cenario"},{name:"Artigo",exampleType:"Exemplo Correto e Errôneo",model:"Diagrama de Classes",additionalInformation:"Conteúdo no apêndice 1: Alguns problemas comuns de qualidade e exemplos positivos e negativos correspondentes",info:"Contents in Appendix 1: Some common quality problems and corresponding positive and negative examples",review:()=>this.getRating("Contents in Appendix 1: Some common quality problems and corresponding positive and negative examples"),link:"https://link.springer.com/chapter/10.1007/978-1-4419-7355-9_8"},{name:"Steam",exampleType:"Exemplo Errôneo",model:"Diagrama de Caso de Uso",additionalInformation:"Análise completa dos modelos de caso de uso de quatro sistemas do mundo real",info:"Complete analysis of use case models of four real-world systems",review:()=>this.getRating("Complete analysis of use case models of four real-world systems"),link:"http://www.steam.ualberta.ca/main/research_areas/AntiPatterns.htm"},{name:"Evaluating the layout quality of UML class diagrams using machine learning",exampleType:"Exemplo Correto",model:"Diagrama de Classes",additionalInformation:"Um conjunto de 609 diagramas de classe UML rotulados.",info:"A set of 609 labeled UML class diagrams.",review:()=>this.getRating("A set of 609 labeled UML class diagrams."),link:"https://zenodo.org/record/5037744#.Y3Y-eOzMLjh"}]}},created(){const e=localStorage.getItem("user");if(e){const t=e.replace("__q_objt|","");try{const e=JSON.parse(t),a=e.uid;this.reviewId=a}catch(a){console.error("Parsing error:",a)}}},components:{StarRating:n.A},props:{tagParts:{type:Object,default:()=>{}}}};var d=t(2807),m=t(3316),p=t(6914),g=t(9150),c=t(4189),u=t(4488),f=t(5262),b=t(2374),h=t(8582),v=t.n(h);const x=(0,d.A)(r,[["render",l]]),w=x;v()(r,"components",{QCard:m.A,QToolbar:p.A,QToolbarTitle:g.A,QCardSection:c.A,QTr:u.A,QTd:f.A,QBtn:b.A})}}]);