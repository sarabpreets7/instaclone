(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){},124:function(e,t,n){},127:function(e,t,n){},131:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),s=n(18),i=n.n(s),a=(n(110),n(69)),o=(n.p,n(111),n(13)),l=n.n(o),d=n(22),u=n(11),j={apiKey:"AIzaSyABUYeOs8FeZD-6RPcF3l7jxpzSLY5O_Yg",authDomain:"instareels-1c271.firebaseapp.com",projectId:"instareels-1c271",storageBucket:"instareels-1c271.appspot.com",messagingSenderId:"1019354041696",appId:"1:1019354041696:web:8673a7db52c1f758f92205"},h=n(44);n(117),n(118),n(119);h.a.initializeApp(j);var b=h.a.firestore(),x=h.a.storage(),g={users:b.collection("users"),reels:b.collection("reels"),createdAt:b.FieldValue},f=h.a,O=n(3),m=c.a.createContext(),p=h.a.auth();function v(e){var t=e.children,n=Object(r.useState)(null),c=Object(u.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(!0),o=Object(u.a)(a,2),j=o[0],h=o[1];function b(){return(b=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.signInWithEmailAndPassword(t,n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(){return(x=Object(d.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",p.createUserWithEmailAndPassword(t,n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(r.useEffect)((function(){console.log("useeffect ran"),p.onAuthStateChanged((function(e){console.log("line 18",e),i(e),h(!1)}))}),[]);var g={genericLogin:function(e,t){return b.apply(this,arguments)},genericSignUp:function(e,t){return x.apply(this,arguments)},currentUser:s};return Object(O.jsx)(m.Provider,{value:g,children:!j&&t})}var y=n.p+"static/media/instaLoad.54769301.png",w="data:image/png;base64,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",A=n(8),N=n(176),C=n(93),k=n(174),S=n(175),U=n(68),B=Object(A.a)({root:{boxShadow:"none",textTransform:"none",fontSize:16,padding:"6px 12px",border:"1px solid",lineHeight:1.5,backgroundColor:"#0063cc",borderColor:"#0063cc",fontFamily:["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(","),"&:hover":{backgroundColor:"#0069d9",borderColor:"#0062cc",boxShadow:"none"},"&:active":{boxShadow:"none",backgroundColor:"#0062cc",borderColor:"#005cbf"},"&:focus":{boxShadow:"0 0 0 0.2rem rgba(0,123,255,.5)"}}})(k.a),F=(Object(A.a)((function(e){return{root:{color:e.palette.getContrastText(S.a[500]),backgroundColor:S.a[500],"&:hover":{backgroundColor:S.a[700]}}}}))(k.a),Object(N.a)((function(e){return{margin:{margin:e.spacing(1)}}})));Object(C.a)({palette:{primary:U.a}});function E(e){var t=e.text,n=F();return Object(O.jsx)("div",{children:Object(O.jsx)(B,{style:{color:"white",height:"1.9rem",width:"14rem"},variant:"contained",color:"primary",disableRipple:!0,className:n.margin,children:t})})}var I=n(26);n(124),n.p,n.p,n.p,n.p,n.p,n.p,n.p,n(125),f.auth();var Q=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),a=Object(u.a)(i,2),o=a[0],j=a[1],h=Object(r.useState)(!1),b=Object(u.a)(h,2),x=b[0],g=b[1],f=Object(r.useState)(!1),p=Object(u.a)(f,2),v=p[0],A=p[1],N=Object(r.useContext)(m),C=N.genericLogin,k=N.currentUser,S=function(){var e=Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("ran"),e.prev=1,A(!0),e.next=5,C(c,o);case 5:e.next=12;break;case 7:e.prev=7,e.t0=e.catch(1),A(!1),g(e.t0.message),setTimeout((function(){g(!1)}),2e3);case 12:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){k&&e.history.push("/feed")})),v?Object(O.jsx)("div",{style:{height:"100vh",width:"100%",background:"gray"},children:Object(O.jsx)("img",{style:{height:"9rem",width:"9rem",color:"black",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},src:y})}):k?Object(O.jsxs)("h1",{children:[k.uid,Object(O.jsx)("button",{children:"Logout"})]}):Object(O.jsx)("div",{style:{height:"100vh",backgroundColor:"#FAFAFA"},children:Object(O.jsxs)("div",{className:"login-box",children:[Object(O.jsx)("div",{style:{marginBottom:"1.7rem"},children:Object(O.jsx)("img",{src:w})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{style:{height:"1.6rem",width:"14rem",backgroundColor:"#FAFAFA",border:"0.5px solid lightgray",marginBottom:"0.5rem"},type:"email",placeholder:"Enter Email",value:c,onChange:function(e){s(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{style:{height:"1.6rem",marginBottom:"1em",width:"14rem",backgroundColor:"#FAFAFA",border:"0.5px solid lightgray"},type:"password",placeholder:"Enter Password",value:o,onChange:function(e){j(e.target.value)}})}),Object(O.jsx)("div",{onClick:S,children:Object(O.jsx)(E,{text:"login"})}),Object(O.jsx)("div",{style:{fontSize:"12px",marginTop:"2rem"},children:"Forgot password?"}),Object(O.jsxs)("div",{style:{marginTop:"2rem"},children:["Dont have an account?",Object(O.jsx)(I.b,{to:"/signin",style:{textDecoration:"none"},children:Object(O.jsx)("span",{style:{color:"#0095F6"},children:"Sign Up"})})]}),x?Object(O.jsx)("h1",{children:x}):Object(O.jsx)(O.Fragment,{})]})})},T=n(32);n(127);var D=function(e){var t=e.user;return Object(O.jsxs)("div",{className:"mainheader",style:{height:"7vh",border:"1px solid lightgray",display:"flex",flexDirection:"row",alignItems:"center",position:"relative",fontFamily:"cursive",zIndex:12,backgroundColor:"white"},children:[Object(O.jsx)(I.b,{className:"instalogo",to:"/feed",children:Object(O.jsx)("img",{style:{height:"100%",background:"transparent",objectFit:"contain"},src:w})}),Object(O.jsxs)("div",{className:"secondaryHeader",children:[Object(O.jsxs)(I.b,{to:"/profile",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"black"},children:[Object(O.jsx)("div",{style:{marginRight:"10px"},children:null===t||void 0===t?void 0:t.fullName}),Object(O.jsx)("img",{style:{height:"40px",borderRadius:"55%",marginRight:"15px"},src:null===t||void 0===t?void 0:t.profileUrl})]}),Object(O.jsx)("div",{onClick:function(e){f.auth().signOut()},className:"logout",children:"Log out"})]})]})},R=n(89),P=n.n(R);n(177),n(178),n(182),n(180),n(179),n(181),Object(N.a)({root:{maxWidth:345},media:{height:140}});n(128);var q=n(187),z=n(183);n(131);var L=function(){var e=Object(r.useContext)(m).currentUser,t=Object(r.useState)(null),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!0),a=Object(u.a)(i,2),o=a[0],j=a[1],h=Object(r.useState)(),b=Object(u.a)(h,2),x=b[0],f=b[1],p=Object(r.useState)(null),v=Object(u.a)(p,2),w=v[0],A=v[1],N=Object(r.useState)(0),C=Object(u.a)(N,2),k=C[0],S=C[1],U=Object(r.useState)(0),B=Object(u.a)(U,2),F=B[0],E=B[1],I=Object(r.useState)(!1),Q=Object(u.a)(I,2),T=(Q[0],Q[1],Object(r.useState)(null)),R=Object(u.a)(T,2),L=R[0],J=R[1];Object(r.useEffect)(Object(d.a)(l.a.mark((function t(){var n,r,c,i,a,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.users.doc(e.uid).get();case 2:return n=t.sent,console.log(e.uid),t.next=6,s(n.data());case 6:return S(n.data().followers),E(n.data().following),t.next=10,A(n.data().profileUrl);case 10:r=n.data().reels,c=[],console.log(r),i=0;case 14:if(!(i<r.length)){t.next=23;break}return t.next=17,g.reels.doc(r[i]).get();case 17:a=t.sent,o={id:r[i],link:a.data().videoUrl},c.push(o);case 20:i++,t.next=14;break;case 23:return t.next=25,f(c);case 25:j(!1);case 26:case"end":return t.stop()}}),t)}))),[]);var V=function(){J(null)};return o?Object(O.jsx)("div",{style:{height:"100vh",width:"100%",background:"gray"},children:Object(O.jsx)("img",{style:{height:"9rem",width:"9rem",color:"black",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},src:y})}):Object(O.jsxs)("div",{children:[Object(O.jsx)(D,{user:c}),Object(O.jsxs)("div",{className:"abovehead",children:[Object(O.jsxs)("div",{className:"headerrr",children:[Object(O.jsx)("div",{className:"profile-picc",style:{display:"flex",alignItems:"center"},children:Object(O.jsx)("img",{className:"displayedpic",src:w})}),Object(O.jsxs)("div",{style:{height:"60%",width:"18rem",marginTop:"2rem",marginLeft:"19%",display:"flex",flexDirection:"column",justifyContent:"space-around"},children:[Object(O.jsxs)("div",{className:"hrde",children:[Object(O.jsx)("div",{style:{fontFamily:"Arial",fontWeight:"200"},children:c.fullName}),Object(O.jsx)("div",{})]}),Object(O.jsxs)("div",{className:"hrde2",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontWeight:"600"},children:x.length})," posts"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontWeight:"600"},children:k.length})," followers"]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{style:{fontWeight:"600"},children:F.length})," following"]})]}),Object(O.jsx)("div",{style:{fontWeight:"600",fontSize:"16px"},children:c.email})]})]}),Object(O.jsx)("hr",{className:"lineBreak"}),Object(O.jsx)("div",{style:{width:"72%",dislpay:"flex",justifyContent:"center",alignItems:"center",margin:"9px"},children:Object(O.jsxs)("div",{style:{display:"flex",width:"20%",justifyContent:"center",alignItems:"center",marginLeft:"42%"},children:[Object(O.jsx)(P.a,{}),Object(O.jsx)("span",{style:{marginLeft:"7px",fontSize:"12px",letterSpacing:"1px",fontWeight:"500"},children:Object(O.jsx)("u",{children:"REELS"})})]})}),Object(O.jsx)("div",{className:"mainContainer",children:x.map((function(e){return Object(O.jsxs)("div",{onClick:function(){return t=e.id,console.log(t),void J(t);var t},className:"reel-container",children:[Object(O.jsx)("video",{className:"reel",src:e.link}),Object(O.jsx)(q.a,{maxWidth:"md",onClose:V,"aria-labelledby":"customized-dialog-title",open:L===e.id,children:Object(O.jsx)(z.a,{children:Object(O.jsx)("div",{className:"modall",style:{display:"flex",justifyContent:"center",width:"100%",height:"100%"},children:Object(O.jsx)("div",{className:!0,style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(O.jsx)("video",{controls:!0,src:e.link,style:{width:"110%",height:"80vh"}})})})})})]})}))})]})]})};var J=function(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(""),a=Object(u.a)(i,2),o=a[0],j=a[1],h=Object(r.useState)(!1),b=Object(u.a)(h,2),f=(b[0],b[1]),p=Object(r.useState)(!0),v=Object(u.a)(p,2),A=v[0],N=v[1],C=Object(r.useState)(""),k=Object(u.a)(C,2),S=k[0],U=k[1],B=Object(r.useState)(null),F=Object(u.a)(B,2),Q=F[0],T=F[1],D=Object(r.useContext)(m),R=D.genericSignUp,P=D.currentUser,q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,s,i,a,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=function(e){var t=e.bytesTransferred/e.totalBytes*100;console.log(t)},r=function(e){console.log(e)},s=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.snapshot.ref.getDownloadURL();case 2:t=e.sent,g.users.doc(a).set({email:c,fullName:S,profileUrl:t,followers:[],following:[],reels:[],likes:[],comments:[]});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f(""),N(!0),e.next=8,R(c,o);case 8:i=e.sent,a=i.user.uid,console.log("--------",a),(u=x.ref("/users/"+a).put(Q)).on("state_changed",n,r,s),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){P&&e.history.push("/feed")})),Object(r.useEffect)((function(){N(!1)}),[]),A?Object(O.jsx)("div",{style:{height:"100vh",width:"100%",background:"gray"},children:Object(O.jsx)("img",{style:{height:"9rem",width:"9rem",color:"black",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},src:y})}):Object(O.jsx)("div",{style:{height:"100vh",backgroundColor:"#FAFAFA"},children:Object(O.jsxs)("div",{className:"signUp-box",style:{height:"68vh",width:"22rem",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",border:"0.5px solid lightgray",position:"fixed",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:[Object(O.jsx)("div",{style:{marginBottom:"1.7rem"},children:Object(O.jsx)("img",{src:w})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"email",style:{borderRadius:"3px",fontSize:"12px",height:"1.8rem",width:"14rem",backgroundColor:"#FAFAFA",border:"0.5px solid lightgray",marginBottom:"0.5rem"},value:c,placeholder:"Email",onChange:function(e){s(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{style:{borderRadius:"3px",fontSize:"12px",height:"1.8rem",width:"14rem",backgroundColor:"#FAFAFA",border:"0.5px solid lightgray",marginBottom:"0.5rem"},type:"password",value:o,placeholder:"Password",onChange:function(e){j(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{style:{borderRadius:"3px",fontSize:"12px",height:"1.8rem",width:"14rem",backgroundColor:"#FAFAFA",border:"0.5px solid lightgray",marginBottom:"0.8rem"},type:"text",value:S,placeholder:"Full Name",onChange:function(e){U(e.target.value)}})}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{style:{marginBottom:"0.9rem"},type:"file",accept:"image/*",onChange:function(e){var t,n=null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.files[0];null!=n&&T(n)}})}),Object(O.jsx)("div",{onClick:q,children:Object(O.jsx)(E,{text:"Sign up"})}),Object(O.jsxs)("div",{style:{marginTop:"2rem"},children:["Have an account?",Object(O.jsx)(I.b,{to:"/login",style:{textDecoration:"none"},children:Object(O.jsx)("span",{style:{color:"#0095F6"},children:"Log in"})})]})]})})},V=n(90),G=n.n(V),X=n(185),Z=(n(133),n(91)),M=n.n(Z),W=n(92),H=n.n(W);Object(N.a)({root:{maxWidth:345},media:{height:140}});var K=n(184),Y=Object(N.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function _(){var e=Y();return Object(O.jsx)("div",{className:e.root,children:Object(O.jsx)(K.a,{})})}var $=Object(N.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)}},input:{display:"none"}}}));function ee(e){var t=$(),n=Object(r.useState)(!1),c=Object(u.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(0),o=Object(u.a)(a,2),j=o[0],h=o[1];return s?Object(O.jsx)(_,{value:j}):Object(O.jsxs)("div",{className:t.root,children:[Object(O.jsx)("input",{accept:"video/*",className:t.input,id:"contained-button-file",multiple:!0,type:"file",onChange:function(t){var n,r=null===t||void 0===t||null===(n=t.target)||void 0===n?void 0:n.files[0];if(null!=r)try{var c=function(){var t=Object(d.a)(l.a.mark((function t(){var n,r,c,o;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i(!1),t.next=3,a.snapshot.ref.getDownloadURL();case 3:n=t.sent,console.log("video with url",n),r=e.user,c=e.uid,console.log(c),g.reels.doc(s).set({videoUrl:n,authorName:r.fullName,authorid:c,authorDPUrl:r.profileUrl,likes:[],comments:[],createdAt:f.firestore.FieldValue.serverTimestamp()}),o=[].concat(Object(T.a)(r.reels),[s]),g.users.doc(c).update({reels:o});case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),s=G()();console.log("ruid-",s);var a=x.ref("/reels/"+s).put(r);a.on("state_changed",(function(e){i(!0);var t=e.bytesTransferred/e.totalBytes*100;h(t),console.log(j),console.log(t)}),(function(e){i(!1),console.log(e)}),c)}catch(o){}}}),Object(O.jsx)("label",{htmlFor:"contained-button-file",children:Object(O.jsx)(k.a,{variant:"contained",color:"primary",component:"span",children:"Upload"})})]})}function te(e){var t=Object(r.useState)([]),n=Object(u.a)(t,2),c=n[0],s=n[1],a=Object(r.useState)(!1),o=Object(u.a)(a,2),j=(o[0],o[1],Object(r.useState)(!1)),h=Object(u.a)(j,2),b=h[0],x=h[1],f=Object(r.useState)(0),p=Object(u.a)(f,2),v=(p[0],p[1],Object(r.useContext)(m).currentUser),y=Object(r.useState)(""),w=Object(u.a)(y,2),A=w[0],N=w[1],C=Object(r.useState)(null),S=Object(u.a)(C,2),U=S[0],B=S[1],F=v.uid,E=e,I=function(){var e=Object(d.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hhhhh"+t),t.target.muted=!t.target.muted;case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Q=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,s,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=document.getElementById(t+"like"),r=parseInt(n.innerText.split(" ")[0]),console.log(r),e.next=5,document.getElementById(t+"heart");case 5:return c=e.sent,console.log(c),e.next=9,g.reels.doc(t).get();case 9:s=e.sent,i=s.data().likes,console.log(i),i.includes(F)&&0!=i.length?(a=i.filter((function(e){return e!=F})),g.reels.doc(t).update({likes:Object(T.a)(a)})):g.reels.doc(t).update({likes:[].concat(Object(T.a)(i),[F])}),x(!0);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t.target),n=i.a.findDOMNode(t.target).parentNode.parentNode.parentNode.nextSibling,console.log(n),n&&(console.log("next exist"),n.scrollIntoView({behavior:"smooth"}),t.target.muted=!0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(){B(null)};function P(e){e.forEach((function(e){var t=e.target.children[0];t.play().then((function(){0==e.isIntersecting&&t.pause()}))}))}var L=function(e){N(e.target.value)},J=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,s,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(""),console.log(t.target),e.next=4,t.target.parentNode.id;case 4:if(n=e.sent,console.log(n),!n){e.next=16;break}return e.next=9,g.reels.doc(n).get();case 9:r=e.sent,c=r.data().comments,s=E.user.profileUrl,i=E.user.fullName,a={name:i,comment:A,dpurl:s},console.log(c),g.reels.doc(n).update({comments:[].concat(Object(T.a)(c),[a])});case 16:x(!0);case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(d.a)(l.a.mark((function e(t){var n,r,c,s,i,a,o,d,u,j,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.target.parentNode.id;case 2:return n=e.sent,e.next=5,g.users.doc(n).get();case 5:return r=e.sent,c=r.data().followers,console.log(c),e.next=10,g.users.doc(v.uid).get();case 10:if(s=e.sent,i=s.data().following,{userid:v.uid},console.log(c),c.includes(v.uid))for(a=c.filter((function(e){return e!=v.uid})),g.users.doc(n).update({followers:Object(T.a)(a)}),o=i.filter((function(e){return e!=n})),g.users.doc(v.uid).update({following:Object(T.a)(o)}),d=document.getElementsByClassName(n+"follow"),u=0;u<d.length;u++)d[u].innerText="follow";else for(g.users.doc(n).update({followers:[].concat(Object(T.a)(c),[v.uid])}),g.users.doc(v.uid).update({following:[].concat(Object(T.a)(i),[n])}),j=document.getElementsByClassName(n+"follow"),h=0;h<j.length;h++)j[h].innerText="unfollow";x(!0);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)(function(){var e=Object(d.a)(l.a.mark((function e(){var t,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.reels.orderBy("createdAt","desc").get();case 2:t=e.sent,n=[],t.forEach((function(e){console.log(e.id);var t=e.data(),r={id:e.id,object:t};n.push(r)})),console.log(n),s(n),r=new IntersectionObserver(P,{root:null,threshold:"0.9"}),c=document.querySelectorAll(".video"),console.log(c),c.forEach((function(e){r.observe(e)})),x(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),[b]),Object(O.jsx)("div",{style:{backgroundColor:"#FAFAFA"},children:Object(O.jsx)("div",{className:"reels",style:{height:"90vh",boxShadow:"10px 5px 5px gray",overflow:"auto"},children:c.map((function(e){return Object(O.jsxs)("div",{className:"video-container",children:[Object(O.jsxs)("div",{className:"header",style:{alignItems:"center",display:"flex",margin:"0.6rem",fontFamily:"cursive"},children:[Object(O.jsx)("img",{style:{height:"30px",background:"transparent",objectFit:"contain",borderRadius:"50%",marginRight:"0.5rem"},src:e.object.authorDPUrl}),Object(O.jsx)("div",{style:{width:"50%"},children:e.object.authorName}),Object(O.jsx)("div",{style:{display:"flex",width:"50%",flexDirection:"row-reverse"},children:E.user.profileUrl&&E.user.profileUrl!=e.object.authorDPUrl?Object(O.jsx)(k.a,{id:e.object.authorid,className:e.object.authorid+"follow",variant:"contained",onClick:V,color:"primary",children:E.user.following.includes(e.object.authorid)?"unfollow":"follow"}):Object(O.jsx)(O.Fragment,{})})]}),Object(O.jsxs)("div",{style:{height:"90%",display:"flex",justifyContent:"center",borderTop:"0.25px solid lightgray"},children:[Object(O.jsx)("div",{className:"video",style:{height:"80%"},children:Object(O.jsx)("video",{style:{height:"90%",width:"100%"},src:e.object.videoUrl,id:e.id,onEnded:D,muted:"muted",onClick:I})}),Object(O.jsxs)("div",{style:{position:"absolute",bottom:"4rem",left:"2%"},children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(M.a,{id:e.id+"heart",className:"heart",onClick:function(){Q(e.id)},style:e.object.likes.includes(v.uid)?{color:"red"}:{color:"lightgray"}}),Object(O.jsx)(H.a,{className:"comment",color:"primary",onClick:function(){return t=e.id,void B(t);var t},style:{color:"lightgray",position:"absolute"}}),Object(O.jsx)(q.a,{maxWidth:"md",onClose:R,"aria-labelledby":"customized-dialog-title",open:U===e.id,children:Object(O.jsx)(z.a,{children:Object(O.jsxs)("div",{className:"modal",style:{display:"flex",height:"80vh",width:"60vw"},children:[Object(O.jsx)("div",{className:"video-containerr",style:{width:"50%",display:"flex",alignItems:"center",justifyContent:"center"},children:Object(O.jsx)("video",{controls:!0,src:e.object.videoUrl,style:{width:"90%",height:"100%"}})}),Object(O.jsxs)("div",{style:{width:"50%"},className:"comment-section",children:[Object(O.jsxs)("div",{className:"authordiv",style:{display:"flex",alignItems:"center",width:"100%",borderBottom:"1px solid lightgray"},children:[Object(O.jsx)("img",{style:{height:"4rem",background:"transparent",objectFit:"contain",borderRadius:"50%",marginRight:"3.4rem",margin:"1.2rem"},src:e.object.authorDPUrl}),Object(O.jsx)("div",{style:{width:"50%"},children:e.object.authorName})]}),Object(O.jsx)("div",{className:"commentss",style:{height:"65%",overflowY:"auto"},children:0==e.object.comments.length?Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"No comments yet..."})}):e.object.comments.map((function(e){return Object(O.jsxs)("div",{className:"comment-div",style:{display:"flex",alignItems:"center"},children:[Object(O.jsx)("img",{style:{height:"2.3rem",background:"transparent",objectFit:"contain",borderRadius:"50%",marginRight:"3.4rem",margin:"1.2rem"},src:e.dpurl}),Object(O.jsxs)("p",{children:[Object(O.jsx)("span",{style:{fontWeight:"bold",display:"inline-block"},children:e.name}),"\xa0\xa0",e.comment]})]})}))}),Object(O.jsxs)("div",{className:"comment-section",style:{width:"100%",display:"flex",alignItems:"center"},children:[Object(O.jsx)(X.a,{onChange:L,value:A,style:{width:"75%"},label:"Add a Comment"}),Object(O.jsx)(k.a,{id:e.id,onClick:J,variant:"contained",children:"POST"})]})]})]})})})]}),Object(O.jsxs)("span",{id:e.id+"like",className:"likess",style:{marginRight:"1rem",fontFamily:"cursive"},children:[e.object.likes.length," likes"]}),Object(O.jsxs)("span",{style:{fontFamily:"cursive"},children:[e.object.comments.length," comments"]})]})]})]})}))})})}function ne(e){var t=e.user;return Object(O.jsxs)("div",{className:"mainheader",style:{height:"7vh",border:"1px solid lightgray",boxShadow:"10px 5px 5px lightgray",display:"flex",flexDirection:"row",alignItems:"center",position:"relative",top:"0",left:"0",fontFamily:"cursive"},children:[Object(O.jsx)(I.b,{className:"instalogo",to:"/feed",children:Object(O.jsx)("img",{style:{height:"100%",background:"transparent",objectFit:"contain"},src:w})}),Object(O.jsxs)("div",{className:"secondaryHeader",children:[Object(O.jsxs)(I.b,{to:"/profile",style:{display:"flex",alignItems:"center",textDecoration:"none",color:"black"},children:[Object(O.jsx)("div",{style:{marginRight:"10px"},children:null===t||void 0===t?void 0:t.fullName}),Object(O.jsx)("img",{style:{height:"40px",borderRadius:"55%",marginRight:"15px"},src:null===t||void 0===t?void 0:t.profileUrl})]}),Object(O.jsx)("div",{onClick:function(e){f.auth().signOut()},className:"logout",children:"Log out"})]})]})}var re=function(){var e=Object(r.useContext)(m).currentUser,t=Object(r.useState)(null),n=Object(u.a)(t,2),c=n[0],s=n[1],i=Object(r.useState)(!0),a=Object(u.a)(i,2),o=a[0],j=a[1];return Object(r.useEffect)(Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.users.doc(e.uid).get();case 2:n=t.sent,console.log("in feed: ",n.data()),s(n.data()),j(!1);case 6:case"end":return t.stop()}}),t)}))),[]),o?Object(O.jsx)("img",{src:y}):Object(O.jsxs)("div",{style:{overflow:"hidden",boxSizing:"border-box",margin:"0",height:"100vh"},children:[Object(O.jsx)(ne,{user:c}),Object(O.jsx)("div",{style:{display:"flex"},children:Object(O.jsx)(ee,{user:c,uid:e.uid})}),Object(O.jsx)(te,{user:c})]})},ce=n(20);function se(e){var t=Object(r.useContext)(m).currentUser,n=e.abc;return Object(O.jsx)(ce.b,Object(a.a)(Object(a.a)({},e),{},{render:function(e){return t?Object(O.jsx)(n,Object(a.a)({},e)):Object(O.jsx)(ce.a,{to:"/login"})}}))}var ie=function(){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(v,{children:Object(O.jsxs)(ce.d,{children:[Object(O.jsx)(ce.b,{path:"/login",component:Q}),Object(O.jsx)(ce.b,{path:"/signin",component:J}),Object(O.jsx)(se,{path:"/feed",abc:re}),Object(O.jsx)(se,{path:"/profile",abc:L}),Object(O.jsx)(ce.a,{path:"/",to:"/feed"})]})})})},ae=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,189)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(I.a,{children:Object(O.jsx)(ie,{})})}),document.getElementById("root")),ae()}},[[134,1,2]]]);
//# sourceMappingURL=main.a9775033.chunk.js.map