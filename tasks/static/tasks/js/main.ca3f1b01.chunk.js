(this["webpackJsonpreact-front"]=this["webpackJsonpreact-front"]||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},28:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},36:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(18),o=s.n(r),i=(s(24),s(7)),c=s(8),h=s(6),l=s(10),d=s(9),u=(s(25),s(42)),m=s(1),g=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).goToSignInPage=a.goToSignInPage.bind(Object(h.a)(a)),a.logOut=a.logOut.bind(Object(h.a)(a)),a.goToLessons=a.goToLessons.bind(Object(h.a)(a)),a}return Object(c.a)(s,[{key:"goToSignInPage",value:function(){this.props.contentChange("SignIn")}},{key:"logOut",value:function(){this.props.logOut()}},{key:"goToLessons",value:function(){this.props.getLessons(),this.props.contentChange("lessons")}},{key:"render",value:function(){var e;return e=this.props.is_anon?Object(m.jsx)(u.a,{onClick:this.goToSignInPage,variant:"outline-dark",className:"shadow-none col-md-2 col-6",children:"\u0412\u043e\u0439\u0442\u0438"}):Object(m.jsx)(u.a,{onClick:this.logOut,variant:"outline-dark",className:"col-md-2 col-6 shadow-none",children:"\u0412\u044b\u0439\u0442\u0438"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"conta",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-2 appname",onClick:this.goToLessons,children:"RegExTrainer"}),Object(m.jsx)("div",{className:"col-md-5"}),Object(m.jsx)("div",{className:"header-username col-md-3 col-6",children:this.props.username}),e]})})}),Object(m.jsx)("div",{className:"cherta"})]})}}]),s}(n.a.Component),j=s(40),p=(s(27),s(28),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(h.a)(a)),a.handleUsernameChange=a.handleUsernameChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.state={password:"",username:"",password_error_message:"",username_error_message:"",error_message:""},a}return Object(c.a)(s,[{key:"handleClick",value:function(){this.props.contentChange("SignUp")}},{key:"handlePasswordChange",value:function(e){this.setState({error_message:""}),this.setState({password_error_message:""}),this.setState({password:e.target.value}),""===e.target.value&&this.setState({password_error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043f\u0430\u0440\u043e\u043b\u044f!"})}},{key:"handleUsernameChange",value:function(e){this.setState({error_message:""}),this.setState({username_error_message:""}),this.setState({username:e.target.value}),""===e.target.value&&this.setState({username_error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430!"})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),""!==this.state.username&&""!==this.state.password){var s={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:this.state.username,password:this.state.password}),mode:"cors"};fetch(this.props.host+"auth/api/login/",s).then((function(e){return e.json()})).then((function(e){void 0!==e.token?(localStorage.setItem("token",e.token),localStorage.setItem("username",t.state.username),t.props.setUsername(t.state.username),t.props.setIsAnon(!1),t.props.contentChange("lessons"),t.props.getLessons()):t.setState({error_message:"\u041d\u0435\u0442 \u0442\u0430\u043a\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f!"})}),(function(e){console.log(e),t.setState({error_message:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})}))}else""===this.state.username?""===this.state.password?this.setState({error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u044f \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430 \u0438 \u043f\u0430\u0440\u043e\u043b\u044f!"}):this.setState({error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430!"}):this.setState({error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043f\u0430\u0440\u043e\u043b\u044f!"})}},{key:"render",value:function(){return Object(m.jsxs)(j.a,{className:"col-md-4 offset-md-4 margin-top",onSubmit:this.handleSubmit,children:[Object(m.jsx)("h1",{children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442!"}),Object(m.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(j.a.Label,{children:"\u041b\u043e\u0433\u0438\u043d"}),Object(m.jsx)(j.a.Control,{type:"username",onChange:this.handleUsernameChange}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.username_error_message})]}),Object(m.jsxs)(j.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(j.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)(j.a.Control,{type:"password",onChange:this.handlePasswordChange}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.password_error_message})]}),Object(m.jsxs)(j.a.Text,{className:"text-muted",children:["\u0415\u0449\u0451 \u043d\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(m.jsx)("span",{onClick:this.handleClick,className:"link-like",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0443\u0439\u0442\u0435\u0441\u044c!"})]}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.error_message}),Object(m.jsx)(u.a,{variant:"primary",type:"submit",className:"margin-top",children:"\u0412\u043e\u0439\u0442\u0438"})]})}}]),s}(n.a.Component)),b=(s(32),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a.handlePasswordChange=a.handlePasswordChange.bind(Object(h.a)(a)),a.handlePassword2Change=a.handlePassword2Change.bind(Object(h.a)(a)),a.handleUsernameChange=a.handleUsernameChange.bind(Object(h.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(a)),a.state={error_message:"",username_error_message:"",password_error_message:"",password2_error_message:"",password:"",password2:"",username:""},a}return Object(c.a)(s,[{key:"handleClick",value:function(){this.props.contentChange("SignIn")}},{key:"handlePasswordChange",value:function(e){this.setState({error_message:""}),this.setState({password_error_message:""}),this.setState({password2_error_message:""}),this.setState({password:e.target.value}),e.target.value.length<6&&(this.setState({password_error_message:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."}),this.setState({password2_error_message:""})),e.target.value.length>100&&(this.setState({password_error_message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432."}),this.setState({password2_error_message:""})),""===e.target.value&&(this.setState({password_error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043f\u0430\u0440\u043e\u043b\u044f!"}),this.setState({password2_error_message:""})),e.target.value.length>=6&&e.target.value.length<=100&&this.state.password2!==e.target.value&&""!==this.state.password2&&this.setState({password2_error_message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!"})}},{key:"handlePassword2Change",value:function(e){this.setState({error_message:""}),this.setState({password2_error_message:""}),""===this.state.password_error_message&&(this.setState({password2:e.target.value}),""===e.target.value&&""!==this.state.password&&this.setState({password2_error_message:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0432\u0432\u0435\u0434\u0435\u043d\u043d\u044b\u0439 \u043f\u0430\u0440\u043e\u043b\u044c!"}),e.target.value!==this.state.password&&""!==this.state.password&&this.setState({password2_error_message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!"}))}},{key:"handleUsernameChange",value:function(e){this.setState({error_message:""}),this.setState({username:e.target.value}),""===e.target.value?this.setState({username_error_message:"\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u043f\u043e\u043b\u0435 \u0434\u043b\u044f \u043b\u043e\u0433\u0438\u043d\u0430!"}):e.target.value.length>32?this.setState({username_error_message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043b\u043e\u0433\u0438\u043d\u0430 32 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!"}):this.setState({username_error_message:""})}},{key:"handleSubmit",value:function(e){var t=this;if(e.preventDefault(),!this.state.username.includes("AnonUser")&&this.state.username.length<=32&&""!==this.state.username&&""!==this.state.password&&this.state.password===this.state.password2&&this.state.password.length>=6&&this.state.password.length<=100){var s={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},body:JSON.stringify({username:this.state.username,password:this.state.password}),mode:"cors"};fetch(this.props.host+"auth/api/signup/",s).then((function(e){return e.json()})).then((function(e){"User with same username already exists."===e.error?t.setState({error_message:"\u0422\u0430\u043a\u043e\u0439 \u043b\u043e\u0433\u0438\u043d \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"}):"ok"===e.detail?(localStorage.setItem("username",t.state.username),t.props.setIsAnon(!1),t.props.setUsername(t.state.username),t.props.getLessons(),t.props.contentChange("lessons")):(console.log(e),t.setState({error_message:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}))}),(function(e){return t.setState({error_message:"\u0427\u0442\u043e \u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."})}))}else this.state.password!==this.state.password2&&this.setState({error_message:"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442!"}),this.state.password.length<6&&this.setState({error_message:"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 6 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"}),this.state.password.length>100&&this.setState({error_message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043f\u0430\u0440\u043e\u043b\u044f 100 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432!"}),this.state.username.length>32&&this.setState({error_message:"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u043d\u0430 \u043b\u043e\u0433\u0438\u043d\u0430 32 \u0441\u0438\u043c\u0432\u043e\u043b\u0430!"}),""===this.state.password&&this.setState({error_message:"\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!"}),""===this.state.username&&this.setState({error_message:"\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c!"}),this.state.username.includes("AnonUser")&&this.setState({error_message:"\u041b\u043e\u0433\u0438\u043d \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0444\u0440\u0430\u0437\u0443 AnonUser!"})}},{key:"render",value:function(){return Object(m.jsxs)(j.a,{className:"col-md-4 offset-md-4 margin-top",onSubmit:this.handleSubmit,children:[Object(m.jsx)("h1",{children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(m.jsxs)(j.a.Group,{controlId:"formBasicEmail",children:[Object(m.jsx)(j.a.Label,{children:"\u041f\u0440\u0438\u0434\u0443\u043c\u0430\u0439\u0442\u0435 \u043b\u043e\u0433\u0438\u043d"}),Object(m.jsx)(j.a.Control,{type:"text",autoComplete:"off",onChange:this.handleUsernameChange}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.username_error_message})]}),Object(m.jsxs)(j.a.Group,{controlId:"formBasicPassword",children:[Object(m.jsx)(j.a.Label,{children:"\u041f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)(j.a.Control,{type:"password",onChange:this.handlePasswordChange}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.password_error_message})]}),Object(m.jsx)(j.a.Group,{controlId:"formBasicCheckbox"}),Object(m.jsxs)(j.a.Group,{controlId:"formBasicPassword2",children:[Object(m.jsx)(j.a.Label,{children:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"}),Object(m.jsx)(j.a.Control,{type:"password",onChange:this.handlePassword2Change}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.password2_error_message})]}),Object(m.jsx)(j.a.Group,{controlId:"formBasicCheckbox"}),Object(m.jsxs)(j.a.Text,{className:"text-muted",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b? ",Object(m.jsx)("span",{className:"link-like",onClick:this.handleClick,children:"\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0432 \u0430\u043a\u043a\u0430\u0443\u043d\u0442!"})]}),Object(m.jsx)(j.a.Text,{className:"red-text",children:this.state.error_message}),Object(m.jsx)(u.a,{variant:"primary",type:"submit",className:"margin-top",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]})}}]),s}(n.a.Component)),O=s(39),S=s(41),f=s(37),x=(s(33),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a}return Object(c.a)(s,[{key:"handleClick",value:function(e){this.props.goToLesson(e)}},{key:"render",value:function(){var e=this;return Object(m.jsx)(O.a,{children:this.props.lessons.map((function(t){return!0===t.is_solved?Object(m.jsx)(O.a.Item,{children:Object(m.jsxs)(S.a,{body:!0,onClick:function(){return e.handleClick(t.id)},className:"clickable",children:[Object(m.jsx)(f.a,{pill:!0,variant:"success",children:"\u2713"})," ",t.name]})},t.id):Object(m.jsx)(O.a.Item,{children:Object(m.jsx)(S.a,{body:!0,onClick:function(){return e.handleClick(t.id)},className:"clickable",children:t.name})},t.id)}))})}}]),s}(n.a.Component)),_=s(38),v=(s(34),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).handleClick=a.handleClick.bind(Object(h.a)(a)),a.state={solutionSendingState:""},a}return Object(c.a)(s,[{key:"handleClick",value:function(){var e,t=this,s=document.getElementById("solutionInput").value,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},mode:"cors",body:JSON.stringify({id:this.props.lesson.id,solution:s})};this.setState({solutionSendingState:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430"}),fetch(this.props.host+"tasks/api/solution/",a).then((function(t){return e=t.status,t.json()})).then((function(s){200===e?s.is_correct?t.setState({solutionSendingState:"\u041f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e!"}):t.setState({solutionSendingState:"\u0422\u044b \u043d\u0435 \u043f\u0440\u0430\u0432!"}):t.setState({solutionSendingState:"\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0440\u0435\u0448\u0435\u043d\u0438\u0435!"})}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.props.lesson.tests_example.length;t++){var s="False";this.props.lesson.tests_example[t].key&&(s="True"),e.push(Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{width:"80%",align:"center",children:this.props.lesson.tests_example[t].test}),Object(m.jsx)("td",{width:"20%",align:"center",children:s})]},t))}return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h2",{align:"center",children:[this.props.lesson.name," "]}),Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-8 offset-md-2",align:"center",children:this.props.lesson.description})})}),Object(m.jsx)("h4",{align:"center",className:"examples-h4",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"}),Object(m.jsx)("div",{className:"container",align:"center",children:Object(m.jsx)(_.a,{striped:!0,bordered:!0,hover:!0,children:Object(m.jsx)("tbody",{children:e})})}),Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)(j.a,{children:[Object(m.jsxs)(j.a.Group,{children:[Object(m.jsx)(j.a.Label,{children:"\u0412\u0430\u0448 \u043e\u0442\u0432\u0435\u0442:"}),Object(m.jsx)(j.a.Control,{id:"solutionInput",as:"textarea",rows:3})]}),Object(m.jsx)("span",{children:this.state.solutionSendingState}),Object(m.jsx)("br",{}),Object(m.jsx)(u.a,{variant:"primary",onClick:this.handleClick,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})}}]),s}(n.a.Component)),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(i.a)(this,s),(a=t.call(this,e)).host="http://127.0.0.1:8000/",a.state={is_anon:!0,content:"lessons",username:"",lessons:[]},a.contentChange=a.contentChange.bind(Object(h.a)(a)),a.setUsername=a.setUsername.bind(Object(h.a)(a)),a.setIsAnon=a.setIsAnon.bind(Object(h.a)(a)),a.logOut=a.logOut.bind(Object(h.a)(a)),a.getLessons=a.getLessons.bind(Object(h.a)(a)),a.goToLesson=a.goToLesson.bind(Object(h.a)(a)),a}return Object(c.a)(s,[{key:"getLessons",value:function(){var e,t=this,s={method:"GET",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},mode:"cors"};fetch(this.host+"tasks/api/tasks/",s).then((function(t){return e=t.status,t.json()})).then((function(s){200===e&&t.setState({lessons:s})}))}},{key:"goToLesson",value:function(e){var t,s=this,a={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},mode:"cors",body:JSON.stringify({id:e})};fetch(this.host+"tasks/api/task/",a).then((function(e){return t=e.status,e.json()})).then((function(e){200===t&&s.setState({lesson:e,content:"lesson"})}))}},{key:"setIsAnon",value:function(e){this.setState({is_anon:e})}},{key:"setUsername",value:function(e){this.setState({username:e})}},{key:"contentChange",value:function(e){this.setState({content:e})}},{key:"logOut",value:function(){var e=this;fetch(this.host+"auth/api/create_anon_user/",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){return e.json()})).then((function(t){e.setState({username:t.username,is_anon:!0}),localStorage.setItem("token",t.token),localStorage.setItem("username",t.username),e.getLessons()}))}},{key:"render",value:function(){var e;return"SignIn"===this.state.content&&(e=Object(m.jsx)(p,{getLessons:this.getLessons,setIsAnon:this.setIsAnon,host:this.host,setUsername:this.setUsername,contentChange:this.contentChange})),"SignUp"===this.state.content&&(e=Object(m.jsx)(b,{getLessons:this.getLessons,setIsAnon:this.setIsAnon,host:this.host,setUsername:this.setUsername,contentChange:this.contentChange})),"lessons"===this.state.content&&(e=Object(m.jsx)(x,{goToLesson:this.goToLesson,lessons:this.state.lessons})),"lesson"===this.state.content&&(e=Object(m.jsx)(v,{host:this.host,lesson:this.state.lesson})),Object(m.jsxs)("div",{children:[Object(m.jsx)(g,{getLessons:this.getLessons,logOut:this.logOut,contentChange:this.contentChange,username:this.state.username,is_anon:this.state.is_anon}),e]})}},{key:"componentDidMount",value:function(){var e=this,t={method:"POST",headers:{"Content-Type":"application/json",Authorization:"Token "+localStorage.getItem("token")},mode:"cors"};fetch(this.host+"auth/api/checktoken/",t).then((function(t){if(t.ok)return e.getLessons(),t.json();throw new Error("lol")})).then((function(t){e.setState({username:localStorage.getItem("username")}),t.is_anon||e.setState({is_anon:!1})})).catch((function(t){fetch(e.host+"auth/api/create_anon_user/",{method:"POST",headers:{"Content-Type":"application/json"},mode:"cors"}).then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.token),localStorage.setItem("username",t.username),e.setState({username:t.username}),e.getLessons()}))}))}}]),s}(n.a.Component),C=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,43)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;s(e),a(e),n(e),r(e),o(e)}))};s(35);o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root")),C()}},[[36,1,2]]]);
//# sourceMappingURL=main.ca3f1b01.chunk.js.map