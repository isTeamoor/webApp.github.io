"use strict";(self.webpackChunkauc_app=self.webpackChunkauc_app||[]).push([[427],{427:(e,n,a)=>{a.r(n),a.d(n,{default:()=>s});var t=a(641),u=a(33);const r={data:function(){return{userData:{}}},methods:{sendToBot:function(){window.Telegram.WebApp.sendData("1")}},created:function(){window.Telegram.WebApp.hasOwnProperty("user")?this.userData=window.Telegram.WebApp.user:this.userData={id:0,first_name:"undefined",last_name:"undefined",username:"undefined"}}},s=(0,a(262).A)(r,[["render",function(e,n,a,r,s,d){return(0,t.uX)(),(0,t.CE)("div",null,[(0,t.Lk)("p",null,"User ID "+(0,u.v_)(s.userData.id),1),(0,t.Lk)("p",null,"First_name "+(0,u.v_)(s.userData.first_name),1),(0,t.Lk)("p",null,"Last_name "+(0,u.v_)(s.userData.last_name),1),(0,t.Lk)("p",null,"username "+(0,u.v_)(s.userData.username),1),(0,t.Lk)("button",{onClick:n[0]||(n[0]=function(){return d.sendToBot&&d.sendToBot.apply(d,arguments)})}," Send Data")])}]])}}]);