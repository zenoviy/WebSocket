(this["webpackJsonpsocial-media"]=this["webpackJsonpsocial-media"]||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){},46:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n(0),o=n.n(r),a=n(19),c=n.n(a),s=(n(39),n(40),n(33),n(21)),u=n(3),l=n(12),h=1e3;function j(t){return function(t){new Promise((function(t,e){setTimeout((function(){t({text:"success",isLogined:!0})}),h)})).then((function(e){t({type:"LOGINED",payload:e})}))}}function b(t){return function(t){new Promise((function(t,e){setTimeout((function(){t({text:"User was unlogined",isLogined:!1})}),h)})).then((function(e){t({type:"UNLOGINED",payload:e})}))}}var d=n(5),O=n(6),g=n(4),m=n(8),f=n(7),p=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, \n        adipisicing elit. Ducimus earum eligendi rem quasi vero recusandae accusantium \n        vitae neque nam. Labore quo odio aspernatur beatae hic alias nemo minus \n        temporibus porro!"})})}}]),n}(o.a.Component),v=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(o.a.Fragment,{children:[Object(i.jsx)("h3",{children:"Side Panel"}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{children:"#1"}),Object(i.jsx)("li",{children:"#2"}),Object(i.jsx)("li",{children:"#3"})]})]})}}]),n}(o.a.Component),x=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).searchField=null,i.onSearch=i.onSearch.bind(Object(g.a)(i)),i}return Object(O.a)(n,[{key:"onSearch",value:function(t){console.log(t.value)}},{key:"render",value:function(){var t=this;return Object(i.jsx)(o.a.Fragment,{children:Object(i.jsx)("input",{ref:function(e){return t.searchField=e},type:"text",onChange:function(e){return t.onSearch(e.target)}})})}}]),n}(o.a.Component),y=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).unLoginAction=i.unLoginAction.bind(Object(g.a)(i)),i}return Object(O.a)(n,[{key:"unLoginAction",value:function(){this.props.unLogin()}},{key:"render",value:function(){return Object(i.jsxs)("main",{className:"social-body",children:[Object(i.jsx)("h1",{children:"HomePage"}),Object(i.jsx)("p",{children:"Chat"}),Object(i.jsx)("button",{onClick:this.unLoginAction,children:"Unregister"}),Object(i.jsx)(p,{}),Object(i.jsx)(v,{}),Object(i.jsx)(x,{})]})}}]),n}(o.a.Component),L=Object(l.b)((function(t){return{loginCheck:t.loginCheck}}),(function(t){return{unLogin:function(){t(b())}}}))(y),k=n(15);function w(t){var e;if(t&&t.type){var n=t.name,i=t.type,r=t.value,o="",a=!1;switch(i){case"email":var c=new RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);a=!!r.match(c),o=r?a?"":"Invalid Email field":"No email";break;case"password":a=!(r.length<5||r.length>30||!r.length),o=r?r.length<5?"Too short password":r.length>30?"Too long password":"":"No password";break;default:a=!(r.length<3||r.length||!r.length>30),o=r.length?r.length<3?"Too short name":r.length>30?"Too long name":"":"No name"}return e={},Object(k.a)(e,n,o),Object(k.a)(e,"validField",a),e}}var S=n(30);function F(t,e){var n,i={},r=!1,o=Object(S.a)(t);try{for(o.s();!(n=o.n()).done;){var a=n.value;if(a.name){if(i[a.name]=a.value,e&&e.call(this,a),!a.validity.valid)return{status:a.validity.valid,formObject:i};r=a.validity.valid}}}catch(c){o.e(c)}finally{o.f()}return{formValid:r,formObject:i}}var I=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).initLoginAction=i.initLoginAction.bind(Object(g.a)(i)),i.getLoginInputData=i.getLoginInputData.bind(Object(g.a)(i)),i.onSubmitForm=i.onSubmitForm.bind(Object(g.a)(i)),i.loginForm=null,i.state={userEmail:"",userPassword:"",formErrors:{userEmail:"",userPassword:""},validatioMessage:null},i}return Object(O.a)(n,[{key:"initLoginAction",value:function(){this.formOperations(this.loginForm)}},{key:"getLoginInputData",value:function(t){var e=w(t);if(this.seveValidationInfo(e),e.validField){var n=t.name,i=t.value;this.setState(Object(k.a)({},n,i))}}},{key:"seveValidationInfo",value:function(t){var e=Object.keys(t)[0],n=t[e],i=Object.assign(this.state.formErrors);i[e]=n,this.setState({formErrors:i})}},{key:"displayValidatorMessage",value:function(){var t=this.state.formErrors,e=this.state.validatioMessage;e=Object.entries(t).map((function(e,n){return Object(i.jsx)("p",{children:t[e[0]]},n)})),this.setState({validatioMessage:e})}},{key:"onSubmitForm",value:function(t){t.preventDefault();var e=this.formOperations(t.target);e.formValid&&this.props.setLogin(e.formObject)}},{key:"formOperations",value:function(t){var e=F.call(this,t,this.getLoginInputData);return this.displayValidatorMessage(),e}},{key:"render",value:function(){var t=this,e=this.state.validatioMessage;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsx)("div",{children:e||""}),Object(i.jsxs)("form",{onSubmit:function(e){return t.onSubmitForm(e)},ref:function(e){return t.loginForm=e},children:[Object(i.jsx)("input",{type:"email",name:"userEmail",placeholder:"enter you email",required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}),Object(i.jsx)("input",{type:"password",name:"userPassword",placeholder:"enter you password",minLength:"5",maxLength:"30",required:!0}),Object(i.jsx)("button",{onClick:this.initLoginAction,children:"Login"})]})]})}}]),n}(o.a.Component),C=Object(l.b)((function(t){return{loginCheck:t.loginCheck}}),(function(t){return{setLogin:function(e){t(j())}}}))(I),T="SWITCH_FORM",E="LOGINED",R="REGISTRATION",N="UNLOGINED";function A(t){return function(e){var n;(n=t,new Promise((function(t,e){setTimeout((function(){console.log(n),fetch("http://localhost:3100/api/regiter-new-user",{method:"POST",body:n||null}).then((function(t){return t.json()})).then((function(t){console.log("Server response",t)})),t({text:"User was registered",isLogined:!0})}),h)}))).then((function(t){e({type:E,payload:t})}))}}var M=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).initRegistrationAction=i.initRegistrationAction.bind(Object(g.a)(i)),i.onSubmitForm=i.onSubmitForm.bind(Object(g.a)(i)),i.registrationForm=null,i.state={userName:"",userEmail:"",userPassword:"",formErrors:{userName:"",userEmail:"",userPassword:""},validatioMessage:null},i}return Object(O.a)(n,[{key:"initRegistrationAction",value:function(){this.formOperations(this.registrationForm)}},{key:"getLoginInputData",value:function(t){var e=w(t);if(this.seveValidationInfo(e),e.validField){var n=t.name,i=t.value;this.setState(Object(k.a)({},n,i))}}},{key:"seveValidationInfo",value:function(t){var e=Object.keys(t)[0],n=t[e],i=Object.assign(this.state.formErrors);i[e]=n,this.setState({formErrors:i})}},{key:"displayValidatorMessage",value:function(){var t=this.state.formErrors,e=this.state.validatioMessage;e=Object.entries(t).map((function(e,n){return Object(i.jsx)("p",{children:t[e[0]]},n)})),this.setState({validatioMessage:e})}},{key:"onSubmitForm",value:function(t){t.preventDefault();var e=this.formOperations(t.target);e.formValid&&this.props.setRegistration(e.formObject)}},{key:"formOperations",value:function(t){var e=F.call(this,t,this.getLoginInputData);return this.displayValidatorMessage(),e}},{key:"render",value:function(){var t=this,e=this.state.validatioMessage;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Registration"}),Object(i.jsx)("div",{children:e||""}),Object(i.jsxs)("form",{onSubmit:function(e){return t.onSubmitForm(e)},ref:function(e){return t.registrationForm=e},children:[Object(i.jsx)("input",{type:"text",name:"userName",placeholder:"create you name",required:!0,minLength:"3",maxLength:"30"}),Object(i.jsx)("input",{type:"email",name:"userEmail",placeholder:"enter you email",required:!0,pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}),Object(i.jsx)("input",{type:"password",name:"userPassword",placeholder:"create you password",required:!0,minLength:"5",maxLength:"30"}),Object(i.jsx)("button",{onClick:this.initRegistrationAction,children:"Registration"})]})]})}}]),n}(o.a.Component),D=Object(l.b)((function(t){return{loginCheck:t.loginCheck}}),(function(t){return{setRegistration:function(e){t(A(e))}}}))(M);var P=function(t){Object(m.a)(n,t);var e=Object(f.a)(n);function n(t){var i;return Object(d.a)(this,n),(i=e.call(this,t)).switchToLogin=i.switchToLogin.bind(Object(g.a)(i)),i.switchToRegistration=i.switchToRegistration.bind(Object(g.a)(i)),i.state={selectAuthOption:"LOGIN"},i}return Object(O.a)(n,[{key:"switchToLogin",value:function(){this.setState({selectAuthOption:"LOGIN"}),this.props.switchForm("LOGIN")}},{key:"switchToRegistration",value:function(){this.setState({selectAuthOption:"REGISTRATION"}),this.props.switchForm("REGISTRATION")}},{key:"componentDidMount",value:function(){this.setState({selectAuthOption:this.props.globalState.currentInitForm})}},{key:"render",value:function(){var t=this.state.selectAuthOption;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Welcome"}),Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:Object(i.jsx)(s.b,{to:"/",children:"Home"})})}),Object(i.jsx)("button",{onClick:this.switchToLogin,children:"To Login"}),Object(i.jsx)("button",{onClick:this.switchToRegistration,children:"To Registration"}),"LOGIN"===t?Object(i.jsx)(C,{}):Object(i.jsx)(D,{}),this.props.loginCheck.isLogined?Object(i.jsx)(u.a,{to:"/"}):""]})}}]),n}(o.a.Component),G=Object(l.b)((function(t){return{loginCheck:t.loginCheck,globalState:t.globalState}}),(function(t){return{setLogin:function(){t(j())},switchForm:function(e){!function(t,e){t({type:T,payload:e})}(t,e)}}}))(P);var V=Object(l.b)((function(t){return{loginCheck:t.loginCheck}}),(function(t){return{setLogin:function(){t(j())}}}))((function(t){var e=t.loginCheck;return Object(i.jsx)("div",{children:Object(i.jsx)(s.a,{children:Object(i.jsxs)(u.d,{children:[Object(i.jsx)(u.b,{exact:!0,path:"/",children:e.isLogined?Object(i.jsx)(L,{}):Object(i.jsx)(u.a,{to:"/welcome"})}),Object(i.jsx)(u.b,{exact:!0,path:"/welcome",children:Object(i.jsx)(G,{})}),Object(i.jsx)(u.b,{exact:!0,path:"/welcome/login",children:Object(i.jsx)(C,{})}),Object(i.jsx)(u.b,{exact:!0,path:"/welcome/registration",children:Object(i.jsx)(D,{})})]})})})}));var q=function(){return Object(i.jsx)("div",{children:Object(i.jsx)(V,{})})},z=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),r(t),o(t),a(t)}))},U=n(16),H=n(31),W=n(14),$={isLogined:!1,loginMessage:""};var _={currentInitForm:"LOGIN"};var B=Object(U.combineReducers)({loginCheck:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,e=arguments.length>1?arguments[1]:void 0;return e.type===N||e.type===E||e.type===R?Object(W.a)(Object(W.a)({},t),{},{isLogined:e.payload.isLogined}):t},globalState:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;return e.type===T?Object(W.a)(Object(W.a)({},t),{},{currentInitForm:e}):t}}),J=n(32),K=Object(U.createStore)(B,Object(J.composeWithDevTools)(Object(U.applyMiddleware)(H.a)));c.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(l.a,{store:K,children:Object(i.jsx)(q,{})})}),document.getElementById("root")),z()}},[[46,1,2]]]);
//# sourceMappingURL=main.f129d34c.chunk.js.map