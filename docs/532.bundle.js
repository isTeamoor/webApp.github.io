"use strict";(self.webpackChunkauc_app=self.webpackChunkauc_app||[]).push([[532],{185:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(601),r=n.n(a),d=n(314),i=n.n(d)()(r());i.push([e.id,"\n.imgPreview[data-v-6d11bc26] {\n    width: 160px;\n    height: 160px;\n}\n",""]);const l=i},532:(e,t,n)=>{n.r(t),n.d(t,{default:()=>P});var a=n(641),r=function(e){return(0,a.Qi)("data-v-6d11bc26"),e=e(),(0,a.jt)(),e},d=r((function(){return(0,a.Lk)("h1",null,"Создание нового лота",-1)})),i=r((function(){return(0,a.Lk)("img",{class:"imgPreview"},null,-1)})),l={enctype:"multipart/form-data",action:"https://isteamoor1.pythonanywhere.com/db/newLot",method:"post"},u=(0,a.Fv)('<label for="new label" data-v-6d11bc26>Назовите ваш товар</label><input type="text" id="new label" name="label" data-v-6d11bc26><label for="new textContent" data-v-6d11bc26>Добавьте краткое описание лота</label><textarea name="description" id="new textContent" rows="10" cols="30" data-v-6d11bc26></textarea><br data-v-6d11bc26><label for="new textContent" data-v-6d11bc26>Стартовая цена</label><input type="number" min="1000" step="1000" data-v-6d11bc26><label for="new textContent" data-v-6d11bc26>Размер шага для повышения ставки</label><input type="number" min="1000" step="1000" data-v-6d11bc26><p data-v-6d11bc26>сум</p><label for="new img" data-v-6d11bc26>Добавьте фото товара</label>',11),o=["value"],c=r((function(){return(0,a.Lk)("button",{type:"submit"},"Выставить лот на торги",-1)}));const s={data:function(){return{tg:{}}},methods:{showPreview:function(e){var t=document.querySelector(".imgPreview"),n=e.target.files[0];t.src=window.URL.createObjectURL(n)}},created:function(){window.Telegram.WebApp.hasOwnProperty("user")?this.tg=window.Telegram.WebApp:this.tg={user:{id:0,first_name:"undefined",last_name:"undefined",username:"undefined"}}}};var b=n(72),p=n.n(b),m=n(825),w=n.n(m),v=n(659),f=n.n(v),h=n(56),g=n.n(h),y=n(540),k=n.n(y),A=n(113),x=n.n(A),L=n(185),C={};C.styleTagTransform=x(),C.setAttributes=g(),C.insert=f().bind(null,"head"),C.domAPI=w(),C.insertStyleElement=k(),p()(L.A,C),L.A&&L.A.locals&&L.A.locals;const P=(0,n(262).A)(s,[["render",function(e,t,n,r,s,b){return(0,a.uX)(),(0,a.CE)("div",null,[d,i,(0,a.Lk)("form",l,[u,(0,a.Lk)("input",{type:"file",name:"img",id:"new img",accept:"image/*",onChange:t[0]||(t[0]=function(){return b.showPreview&&b.showPreview.apply(b,arguments)})},null,32),(0,a.Lk)("input",{type:"hidden",name:"user_id",value:s.tg.user.id},null,8,o),c])])}],["__scopeId","data-v-6d11bc26"]])}}]);