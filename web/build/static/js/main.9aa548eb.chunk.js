(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(2),a=n.n(r),l=n(13),c=n.n(l),o=(n(23),n(24),n(14)),u=n(4),i=n(17),h=n(16),j=n(15),b=n.n(j),p=function(t){Object(i.a)(n,t);var e=Object(h.a)(n);function n(t){var s;return Object(o.a)(this,n),(s=e.call(this,t)).state={actual_url:null,shorten_url_response:null},s.handleClick=function(){s.setState({shorten_url_response:null}),s.setData()},s.setUrl=function(t){s.setState({actual_url:t.target.value}),console.log(s.state)},s.state={actual_url:null,shorten_url_response:null},s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){document.title="URL Shortner"}}]),Object(u.a)(n,[{key:"setData",value:function(){var t=this;console.log(this.actual_url),b.a.post("https://pathitha-4mpb1smu66t-apigcp.nimbella.io/api/s/url",{actual_url:this.state.actual_url},{headers:{"content-type":"application/json"}}).then((function(e){return t.setState({shorten_url_response:e.data.short_url})}))}},{key:"render",value:function(){var t;return this.state.shorten_url_response&&(t=Object(s.jsx)("label",{className:"labelclass",children:"Your shortened URL is"})),Object(s.jsxs)("div",{children:[Object(s.jsx)("textarea",{type:"text",className:"textboxHeight",onChange:this.setUrl,placeholder:"paste the link to shorten.."}),Object(s.jsx)("br",{}),Object(s.jsx)("input",{type:"button",value:"submit",onClick:this.handleClick}),Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),t,Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),Object(s.jsx)("a",{className:"resultTextArea",href:this.state.shorten_url_response,target:"_blank",rel:"noopener noreferrer",children:this.state.shorten_url_response})]})}}]),n}(r.Component);var d=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)("favicon",{url:"./public/fav-icon.ico"}),Object(s.jsx)("h1",{children:"URL Shortner"}),Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(p,{})})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,a=e.getLCP,l=e.getTTFB;n(t),s(t),r(t),a(t),l(t)}))};c.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(d,{})}),document.getElementById("root")),x()}},[[42,1,2]]]);
//# sourceMappingURL=main.9aa548eb.chunk.js.map