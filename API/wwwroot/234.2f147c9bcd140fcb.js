"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[234],{9234:(g,m,s)=>{s.r(m),s.d(m,{BasketModule:()=>y});var c=s(6814),t=s(4769),u=s(2704),r=s(2999),d=s(7533),p=s(9384);function l(e,B){1&e&&(t.TgZ(0,"div")(1,"p"),t._uU(2,"There are no items in your basket "),t.qZA()())}function v(e,B){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",0)(2,"div",2)(3,"app-basket-summary",3),t.NdJ("addItem",function(a){t.CHM(n);const i=t.oxw();return t.KtG(i.incrementQuantity(a))})("removeItem",function(a){t.CHM(n);const i=t.oxw();return t.KtG(i.removeItem(a))}),t.qZA()(),t.TgZ(4,"div",2)(5,"div",4),t._UZ(6,"app-order-totals"),t.TgZ(7,"div",5)(8,"a",6),t._uU(9," Proceed to checkout "),t.qZA()()()()(),t.BQk()}}const k=[{path:"",component:(()=>{class e{constructor(n){this.basketService=n}incrementQuantity(n){this.basketService.addItemToBasket(n)}removeItem(n){this.basketService.removeItemFromBasket(n.id,n.quantity)}static#t=this.\u0275fac=function(o){return new(o||e)(t.Y36(u.v))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-basket"]],decls:5,vars:6,consts:[[1,"container"],[4,"ngIf"],[1,"row"],[3,"addItem","removeItem"],[1,"col-6","offset-6"],[1,"d-grid"],["routerLink","/checkout",1,"btn","btn-outline-primary","py-2"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0),t.YNc(1,l,3,0,"div",1),t.ALo(2,"async"),t.YNc(3,v,10,0,"ng-container",1),t.ALo(4,"async"),t.qZA()),2&o&&(t.xp6(1),t.Q6J("ngIf",null===t.lcZ(2,2,a.basketService.basketSource$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,4,a.basketService.basketSource$)))},dependencies:[c.O5,r.rH,d.S,p.b,c.Ov]})}return e})()}];let f=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(k),r.Bz]})}return e})();var h=s(6208);let y=(()=>{class e{static#t=this.\u0275fac=function(o){return new(o||e)};static#e=this.\u0275mod=t.oAB({type:e});static#n=this.\u0275inj=t.cJS({imports:[c.ez,f,h.m]})}return e})()}}]);