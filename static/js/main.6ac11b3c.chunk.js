(this["webpackJsonptypescript-app"]=this["webpackJsonptypescript-app"]||[]).push([[0],{174:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t);var a=n(59),o=n.n(a);n(174),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(175);var r=n(65),c=n(0),i=n(27),s=n(28),u=n(149),l="https://".concat("4l45qm3hm5",".execute-api.us-east-1.amazonaws.com/dev"),d="dev-8b0fovvy.us.auth0.com",h="4Owg6QtJsHke87medLYUUzKdq99tayB3",p="https://classic-k.github.io/callback",j=function(){function e(t){Object(i.a)(this,e),this.auth0=new u.a.WebAuth({domain:d,clientID:h,redirectUri:p,responseType:"token id_token",scope:"openid"}),this.history=t,this.login=this.login.bind(this),this.logout=this.logout.bind(this),this.handleAuthentication=this.handleAuthentication.bind(this),this.isAuthenticated=this.isAuthenticated.bind(this),this.getAccessToken=this.getAccessToken.bind(this),this.getIdToken=this.getIdToken.bind(this),this.renewSession=this.renewSession.bind(this)}return Object(s.a)(e,[{key:"login",value:function(){this.auth0.authorize()}},{key:"handleAuthentication",value:function(){var e=this;this.auth0.parseHash((function(t,n){n&&n.accessToken&&n.idToken?(console.log("Access token: ",n.accessToken),console.log("id token: ",n.idToken),e.setSession(n)):t&&(e.history.replace("/"),console.log(t),alert("Error: ".concat(t.error,". Check the console for further details.")))}))}},{key:"getAccessToken",value:function(){return this.accessToken}},{key:"getIdToken",value:function(){return this.idToken}},{key:"setSession",value:function(e){localStorage.setItem("isLoggedIn","true");var t=1e3*e.expiresIn+(new Date).getTime();this.accessToken=e.accessToken,this.idToken=e.idToken,this.expiresAt=t,this.history.replace("/")}},{key:"renewSession",value:function(){var e=this;this.auth0.checkSession({},(function(t,n){n&&n.accessToken&&n.idToken?e.setSession(n):t&&(e.logout(),console.log(t),alert("Could not get a new token (".concat(t.error,": ").concat(t.error_description,").")))}))}},{key:"logout",value:function(){this.accessToken=null,this.idToken=null,this.expiresAt=0,localStorage.removeItem("isLoggedIn"),this.auth0.logout({return_to:window.location.origin}),this.history.replace("/")}},{key:"isAuthenticated",value:function(){var e=this.expiresAt;return(new Date).getTime()<e}}]),e}(),b=n(12),f=n(226),O=n(221),g=n(5);var v,x=function(){return Object(g.jsx)(f.a,{active:!0,children:Object(g.jsx)(O.a,{content:"Loading"})})},k=n(155),m=n.n(k),y=n(61),w=n(33),T=n(34),C=n(131),I=n(230),S=n(229),A=n(225),U=n(11),L=n(24),D=n(224),F=n(209),N=n(67),B=n.n(N);function P(e){return z.apply(this,arguments)}function z(){return(z=Object(L.a)(Object(U.a)().mark((function e(t){var n;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Fetching todos"),e.next=3,B.a.get("".concat(l,"/todos"),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 3:return n=e.sent,console.log("Todos:",n.data),e.abrupt("return",n.data.items);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e,t){return _.apply(this,arguments)}function _(){return(_=Object(L.a)(Object(U.a)().mark((function e(t,n){var a;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(l,"/todos"),JSON.stringify(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.item);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(L.a)(Object(U.a)().mark((function e(t,n,a){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.patch("".concat(l,"/todos/").concat(n),JSON.stringify(a),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return H.apply(this,arguments)}function H(){return(H=Object(L.a)(Object(U.a)().mark((function e(t,n){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.delete("".concat(l,"/todos/").concat(n),{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e,t){return q.apply(this,arguments)}function q(){return(q=Object(L.a)(Object(U.a)().mark((function e(t,n){var a;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.post("".concat(l,"/todos/").concat(n,"/attachment"),"",{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(t)}});case 2:return a=e.sent,e.abrupt("return",a.data.uploadUrl);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(e,t){return K.apply(this,arguments)}function K(){return(K=Object(L.a)(Object(U.a)().mark((function e(t,n){return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.put(t,n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(e){e[e.NoUpload=0]="NoUpload",e[e.FetchingPresignedUrl=1]="FetchingPresignedUrl",e[e.UploadingFile=2]="UploadingFile"}(v||(v={}));var Q=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={file:void 0,uploadState:v.NoUpload},e.handleFileChange=function(t){var n=t.target.files;n&&e.setState({file:n[0]})},e.handleSubmit=function(){var t=Object(L.a)(Object(U.a)().mark((function t(n){var a;return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),t.prev=1,e.state.file){t.next=5;break}return alert("File should be selected"),t.abrupt("return");case 5:return e.setUploadState(v.FetchingPresignedUrl),t.next=8,W(e.props.auth.getIdToken(),e.props.match.params.todoId);case 8:return a=t.sent,e.setUploadState(v.UploadingFile),t.next=12,$(a,e.state.file);case 12:alert("File was uploaded!"),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),alert("Could not upload a file: "+t.t0.message);case 18:return t.prev=18,e.setUploadState(v.NoUpload),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[1,15,18,21]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"setUploadState",value:function(e){this.setState({uploadState:e})}},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Upload new image"}),Object(g.jsxs)(D.a,{onSubmit:this.handleSubmit,children:[Object(g.jsxs)(D.a.Field,{children:[Object(g.jsx)("label",{children:"File"}),Object(g.jsx)("input",{type:"file",accept:"image/*",placeholder:"Image to upload",onChange:this.handleFileChange})]}),this.renderButton()]})]})}},{key:"renderButton",value:function(){return Object(g.jsxs)("div",{children:[this.state.uploadState===v.FetchingPresignedUrl&&Object(g.jsx)("p",{children:"Uploading image metadata"}),this.state.uploadState===v.UploadingFile&&Object(g.jsx)("p",{children:"Uploading file"}),Object(g.jsx)(F.a,{loading:this.state.uploadState!==v.NoUpload,type:"submit",children:"Upload"})]})}}]),n}(c.PureComponent),Y=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).onLogin=function(){e.props.auth.login()},e}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{children:"Please log in"}),Object(g.jsx)(F.a,{onClick:this.onLogin,size:"huge",color:"olive",children:"Log in"})]})}}]),n}(c.PureComponent),G=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return Object(g.jsx)("h1",{children:"Not Found"})}}]),n}(c.PureComponent),V=n(95),X=n(156),Z=n(152),ee=n.n(Z),te=n(153),ne=n.n(te),ae=n(228),oe=n(222),re=n(223),ce=n(231),ie=n(66),se=n(157),ue=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={todos:[],newTodoName:"",loadingTodos:!0},e.handleNameChange=function(t){e.setState({newTodoName:t.target.value})},e.onEditButtonClick=function(t){e.props.history.push("/todos/".concat(t,"/edit"))},e.onTodoCreate=function(){var t=Object(L.a)(Object(U.a)().mark((function t(n){var a,o;return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.calculateDueDate(),t.next=4,J(e.props.auth.getIdToken(),{name:e.state.newTodoName,dueDate:a});case 4:o=t.sent,e.setState({todos:[].concat(Object(X.a)(e.state.todos),[o]),newTodoName:""}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Todo creation failed");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}(),e.onTodoDelete=function(){var t=Object(L.a)(Object(U.a)().mark((function t(n){return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,R(e.props.auth.getIdToken(),n);case 3:e.setState({todos:e.state.todos.filter((function(e){return e.todoId!==n}))}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),alert("Todo deletion failed");case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}(),e.onTodoCheck=function(){var t=Object(L.a)(Object(U.a)().mark((function t(n){var a;return Object(U.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a=e.state.todos[n],t.next=4,E(e.props.auth.getIdToken(),a.todoId,{name:a.name,dueDate:a.dueDate,done:!a.done});case 4:e.setState({todos:ne()(e.state.todos,Object(V.a)({},n,{done:{$set:!a.done}}))}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert("Todo deletion failed");case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=Object(L.a)(Object(U.a)().mark((function e(){var t;return Object(U.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P(this.props.auth.getIdToken());case 3:t=e.sent,this.setState({todos:t,loadingTodos:!1}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert("Failed to fetch todos: ".concat(e.t0.message));case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(ae.a,{as:"h1",children:"TODOs"}),this.renderCreateTodoInput(),this.renderTodos()]})}},{key:"renderCreateTodoInput",value:function(){return Object(g.jsxs)(S.a.Row,{children:[Object(g.jsx)(S.a.Column,{width:16,children:Object(g.jsx)(oe.a,{action:{color:"teal",labelPosition:"left",icon:"add",content:"New task",onClick:this.onTodoCreate},fluid:!0,actionPosition:"left",placeholder:"To change the world...",onChange:this.handleNameChange})}),Object(g.jsx)(S.a.Column,{width:16,children:Object(g.jsx)(re.a,{})})]})}},{key:"renderTodos",value:function(){return this.state.loadingTodos?this.renderLoading():this.renderTodosList()}},{key:"renderLoading",value:function(){return Object(g.jsx)(S.a.Row,{children:Object(g.jsx)(O.a,{indeterminate:!0,active:!0,inline:"centered",children:"Loading TODOs"})})}},{key:"renderTodosList",value:function(){var e=this;return Object(g.jsx)(S.a,{padded:!0,children:this.state.todos.map((function(t,n){return Object(g.jsxs)(S.a.Row,{children:[Object(g.jsx)(S.a.Column,{width:1,verticalAlign:"middle",children:Object(g.jsx)(ce.a,{onChange:function(){return e.onTodoCheck(n)},checked:t.done})}),Object(g.jsx)(S.a.Column,{width:10,verticalAlign:"middle",children:t.name}),Object(g.jsx)(S.a.Column,{width:3,floated:"right",children:t.dueDate}),Object(g.jsx)(S.a.Column,{width:1,floated:"right",children:Object(g.jsx)(F.a,{icon:!0,color:"blue",onClick:function(){return e.onEditButtonClick(t.todoId)},children:Object(g.jsx)(ie.a,{name:"pencil"})})}),Object(g.jsx)(S.a.Column,{width:1,floated:"right",children:Object(g.jsx)(F.a,{icon:!0,color:"red",onClick:function(){return e.onTodoDelete(t.todoId)},children:Object(g.jsx)(ie.a,{name:"delete"})})}),t.attachmentUrl&&Object(g.jsx)(se.a,{src:t.attachmentUrl,size:"small",wrapped:!0}),Object(g.jsx)(S.a.Column,{width:16,children:Object(g.jsx)(re.a,{})})]},t.todoId)}))})}},{key:"calculateDueDate",value:function(){var e=new Date;return e.setDate(e.getDate()+7),ee()(e,"yyyy-mm-dd")}}]),n}(c.PureComponent),le=function(e){Object(w.a)(n,e);var t=Object(T.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).handleLogin=a.handleLogin.bind(Object(y.a)(a)),a.handleLogout=a.handleLogout.bind(Object(y.a)(a)),a}return Object(s.a)(n,[{key:"handleLogin",value:function(){this.props.auth.login()}},{key:"handleLogout",value:function(){this.props.auth.logout()}},{key:"render",value:function(){return Object(g.jsx)("div",{children:Object(g.jsx)(I.a,{style:{padding:"8em 0em"},vertical:!0,children:Object(g.jsx)(S.a,{container:!0,stackable:!0,verticalAlign:"middle",children:Object(g.jsx)(S.a.Row,{children:Object(g.jsx)(S.a.Column,{width:16,children:Object(g.jsxs)(b.b,{history:this.props.history,children:[this.generateMenu(),this.generateCurrentPage()]})})})})})})}},{key:"generateMenu",value:function(){return Object(g.jsxs)(A.a,{children:[Object(g.jsx)(A.a.Item,{name:"home",children:Object(g.jsx)(C.a,{to:"/",children:"Home"})}),Object(g.jsx)(A.a.Menu,{position:"right",children:this.logInLogOutButton()})]})}},{key:"logInLogOutButton",value:function(){return this.props.auth.isAuthenticated()?Object(g.jsx)(A.a.Item,{name:"logout",onClick:this.handleLogout,children:"Log Out"}):Object(g.jsx)(A.a.Item,{name:"login",onClick:this.handleLogin,children:"Log In"})}},{key:"generateCurrentPage",value:function(){var e=this;return this.props.auth.isAuthenticated()?Object(g.jsxs)(b.c,{children:[Object(g.jsx)(b.a,{path:"/",exact:!0,render:function(t){return Object(g.jsx)(ue,Object(r.a)(Object(r.a)({},t),{},{auth:e.props.auth}))}}),Object(g.jsx)(b.a,{path:"/todos/:todoId/edit",exact:!0,render:function(t){return Object(g.jsx)(Q,Object(r.a)(Object(r.a)({},t),{},{auth:e.props.auth}))}}),Object(g.jsx)(b.a,{component:G})]}):Object(g.jsx)(Y,{auth:this.props.auth})}}]),n}(c.Component),de=m()(),he=new j(de);o.a.render(Object(g.jsx)(b.b,{history:de,children:Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{path:"/callback",render:function(e){return function(e){var t=e.location;/access_token|id_token|error/.test(t.hash)&&he.handleAuthentication()}(e),Object(g.jsx)(x,{})}}),Object(g.jsx)(b.a,{render:function(e){return Object(g.jsx)(le,Object(r.a)({auth:he},e))}})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[208,1,2]]]);
//# sourceMappingURL=main.6ac11b3c.chunk.js.map