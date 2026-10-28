(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[383],{4606:function(e,t,s){Promise.resolve().then(s.bind(s,2674)),Promise.resolve().then(s.bind(s,8865)),Promise.resolve().then(s.bind(s,1053)),Promise.resolve().then(s.t.bind(s,231,23))},1053:function(e,t,s){"use strict";s.d(t,{PosCheckout:function(){return p}});var i=s(7437),n=s(2265),r=s(9003),a=s(4817),c=s(8030);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let d=(0,c.Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]),l=(0,c.Z)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);var o=s(8002),h=s(6935);let u=[{id:1,en:"Hair treatment",ar:"عناية بالشعر",price:180,kind:"services"},{id:2,en:"Classic manicure",ar:"مانيكير كلاسيكي",price:95,kind:"services"},{id:3,en:"Repair mask",ar:"قناع ترميم",price:145,kind:"products"},{id:4,en:"Styling serum",ar:"سيروم التصفيف",price:95,kind:"products"}];function p(e){let{locale:t="en"}=e,s="ar"===t,[c,p]=(0,n.useState)("services"),[m,x]=(0,n.useState)(""),[y,j]=(0,n.useState)([{item:u[0],qty:1}]),[k,v]=(0,n.useState)(!1),f=(0,n.useMemo)(()=>y.reduce((e,t)=>{let{item:s,qty:i}=t;return e+s.price*i},0),[y]),b=Math.round(15*f)/100,Z=f+b,N=u.filter(e=>e.kind===c&&(s?e.ar:e.en).toLocaleLowerCase().includes(m.trim().toLocaleLowerCase())),M=e=>s?"".concat(e.toFixed(2)," ر.س"):"SAR ".concat(e.toFixed(2)),g=e=>{v(!1),j(t=>t.find(t=>t.item.id===e.id)?t.map(t=>t.item.id===e.id?{...t,qty:t.qty+1}:t):[...t,{item:e,qty:1}])},C=(e,t)=>{v(!1),j(s=>s.map(s=>s.item.id===e?{...s,qty:s.qty+t}:s).filter(e=>e.qty>0))},q=e=>{v(!1),j(t=>t.filter(t=>t.item.id!==e))};return(0,i.jsxs)("div",{className:"pos-demo",dir:s?"rtl":"ltr",children:[(0,i.jsxs)("div",{className:"pos-demo-main",children:[(0,i.jsxs)("div",{className:"pos-demo-head",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("small",{children:s?"جرّبي نقطة البيع":"TRY THE POINT OF SALE"}),(0,i.jsx)("h3",{children:s?"عملية بيع جديدة":"New sale"})]}),(0,i.jsx)(r.Z,{size:23,"aria-hidden":"true"})]}),(0,i.jsxs)("label",{className:"pos-demo-search",children:[(0,i.jsx)(a.Z,{size:17,"aria-hidden":"true"}),(0,i.jsx)("input",{value:m,onChange:e=>x(e.target.value),placeholder:s?"ابحثي عن خدمة أو منتج":"Search services or products","aria-label":s?"ابحثي عن خدمة أو منتج":"Search services or products"})]}),(0,i.jsx)("div",{className:"pos-demo-tabs",role:"tablist","aria-label":s?"نوع المبيعات":"Sale item type",children:["services","products"].map(e=>(0,i.jsx)("button",{type:"button",role:"tab","aria-selected":c===e,className:c===e?"is-active":"",onClick:()=>{p(e),x("")},children:"services"===e?s?"الخدمات":"Services":s?"المنتجات":"Products"},e))}),(0,i.jsx)("div",{className:"pos-demo-catalog",children:N.length?N.map(e=>(0,i.jsxs)("button",{type:"button",className:"pos-demo-item",onClick:()=>g(e),children:[(0,i.jsx)("span",{className:"pos-demo-item-art",children:(0,i.jsx)(d,{size:22,"aria-hidden":"true"})}),(0,i.jsx)("strong",{children:s?e.ar:e.en}),(0,i.jsx)("small",{children:M(e.price)}),(0,i.jsxs)("span",{className:"pos-demo-add",children:[(0,i.jsx)(d,{size:14,"aria-hidden":"true"}),s?"أضيفي إلى السلة":"Add to cart"]})]},e.id)):(0,i.jsx)("p",{className:"pos-demo-empty",children:s?"لا توجد نتائج لهذا البحث.":"No matching items."})})]}),(0,i.jsxs)("div",{className:"pos-demo-cart",children:[(0,i.jsxs)("h4",{children:[s?"السلة":"Cart"," ",(0,i.jsxs)("span",{children:["(",y.reduce((e,t)=>e+t.qty,0),")"]})]}),(0,i.jsx)("div",{className:"pos-demo-cart-items",children:y.length?y.map(e=>{let{item:t,qty:n}=e;return(0,i.jsxs)("div",{className:"pos-demo-cart-item",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:s?t.ar:t.en}),(0,i.jsx)("button",{type:"button",onClick:()=>q(t.id),"aria-label":s?"إزالة ".concat(t.ar):"Remove ".concat(t.en),children:(0,i.jsx)(l,{size:15})})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:M(t.price*n)}),(0,i.jsxs)("span",{className:"pos-demo-quantity",children:[(0,i.jsx)("button",{type:"button","aria-label":s?"تقليل كمية ".concat(t.ar):"Decrease ".concat(t.en," quantity"),onClick:()=>C(t.id,-1),children:(0,i.jsx)(o.Z,{size:14})}),n,(0,i.jsx)("button",{type:"button","aria-label":s?"زيادة كمية ".concat(t.ar):"Increase ".concat(t.en," quantity"),onClick:()=>C(t.id,1),children:(0,i.jsx)(d,{size:14})})]})]})]},t.id)}):(0,i.jsx)("p",{className:"pos-demo-empty",children:s?"أضيفي خدمة أو منتجًا للبدء.":"Add a service or product to begin."})}),(0,i.jsxs)("div",{className:"pos-demo-totals",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:s?"قبل الضريبة":"Subtotal"}),(0,i.jsx)("b",{children:M(f)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{children:s?"ضريبة القيمة المضافة 15%":"VAT 15%"}),(0,i.jsx)("b",{children:M(b)})]}),(0,i.jsxs)("div",{className:"pos-demo-grand",children:[(0,i.jsx)("span",{children:s?"الإجمالي":"Total"}),(0,i.jsx)("strong",{children:M(Z)})]})]}),(0,i.jsxs)("button",{type:"button",className:"pos-demo-preview-button",disabled:!y.length,onClick:()=>v(e=>!e),"aria-expanded":k,children:[(0,i.jsx)(h.Z,{size:17,"aria-hidden":"true"}),k?s?"إخفاء الملخص":"Hide summary":s?"معاينة ملخص البيع":"Preview sale summary"]}),k&&(0,i.jsxs)("div",{className:"pos-demo-receipt",role:"status",children:[(0,i.jsx)("strong",{children:s?"ملخص البيع":"Sale summary"}),(0,i.jsx)("span",{children:y.map(e=>{let{item:t,qty:i}=e;return"".concat(i,"\xd7 ").concat(s?t.ar:t.en)}).join(" \xb7 ")}),(0,i.jsx)("b",{children:M(Z)})]}),(0,i.jsx)("p",{className:"pos-demo-disclaimer",children:s?"هذه تجربة للواجهة؛ لا تتم معالجة دفعة فعلية.":"This is an interface demo; no real payment is processed."})]})]})}},5137:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]])},338:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]])},8954:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]])},6935:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]])},2873:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]])},7583:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("MessageCircle",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]])},8002:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},9003:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Receipt",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]])},4817:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]])},994:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]])},4697:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,s(8030).Z)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])}},function(e){e.O(0,[231,113,762,971,23,744],function(){return e(e.s=4606)}),_N_E=e.O()}]);