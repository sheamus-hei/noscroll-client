(this["webpackJsonpproject-3"]=this["webpackJsonpproject-3"]||[]).push([[0],{27:function(e,t,a){e.exports=a(61)},32:function(e,t,a){},50:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),s=(a(32),a(1)),o=a(4),i=a.n(o),u=a(2),m=(a(50),a(25)),p=a.n(m),d=a(3);function E(e){var t=c.a.createElement("span",null,c.a.createElement("li",{className:"App-nav-link"},c.a.createElement(u.b,{to:"/auth/login",className:"App-link"},"Login")),c.a.createElement("li",{className:"App-nav-link"},c.a.createElement(u.b,{to:"/auth/signup",className:"App-link"},"Sign up")));return e.user&&(t=c.a.createElement("span",null,c.a.createElement("li",{className:"fancy"},"Hello ",e.user.name,"!"),c.a.createElement("li",{className:"App-nav-link"},c.a.createElement(u.b,{to:"/profile",className:"App-link"},"Profile")),c.a.createElement("li",{className:"App-nav-link"},c.a.createElement(u.b,{to:"/",onClick:function(t){return t.preventDefault(),localStorage.removeItem("mernToken"),e.updateUser(),c.a.createElement(d.a,{to:"/auth/login"})},className:"App-link"},"Log out")))),c.a.createElement("nav",null,c.a.createElement("ul",{className:"App-nav"},t,c.a.createElement("li",{className:"App-nav-link"},c.a.createElement(u.b,{to:"/authors",className:"App-link"},"Authors")),c.a.createElement("li",{className:"App-nav-link"},c.a.createElement("a",{href:"https://github.com/erik-hei/recipe-app-project3",target:"_blank",rel:"noopener noreferrer",className:"App-link"},"About"))))}function b(e){var t=Object(n.useState)(null),a=Object(s.a)(t,2),r=(a[0],a[1]),l=Object(n.useState)(""),o=Object(s.a)(l,2),m=o[0],p=o[1],d=function(t){i.a.get("".concat("https://noscroll-server.herokuapp.com","/recipes?tags=").concat(m)).then((function(t){t.data.message?(console.log(t.data.err),r(t.data.message)):(console.log(m),e.setSearchedRecipes(t.data))})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"App-search"},c.a.createElement("form",null,c.a.createElement("label",{className:"search-label"},"Type in keywords to discover new recipes!"),c.a.createElement("button",{className:"search-button",onSubmit:d,type:"submit"},c.a.createElement(u.b,{onClick:d,to:"/recipes",alt:"Search"},"\ud83d\udd0d")),c.a.createElement("input",{type:"text",className:"search-field",placeholder:"Type in keywords to discover new recipes!",name:"search",onChange:function(e){return p(e.target.value)},required:!0})))}function g(e){return c.a.createElement("header",{className:"App-header white-bg"},c.a.createElement("div",null,c.a.createElement(u.b,{to:"/",className:"App-link"},c.a.createElement("h1",{className:"fancy"},"NoScroll ",c.a.createElement("span",{className:"italic"},"Recipes"))),c.a.createElement("div",{className:"red-line"}),c.a.createElement("div",{className:"orange-line"})),c.a.createElement("div",{className:"Nav-links"},c.a.createElement(E,{className:"white-bg",updateUser:e.updateUser,user:e.user}),c.a.createElement(b,{setSearchedRecipes:e.setSearchedRecipes,searchedRecipes:e.searchedRecipes})))}function h(e){var t=Object(n.useState)({}),a=Object(s.a)(t,2),r=(a[0],a[1],Object(n.useState)("")),l=Object(s.a)(r,2),o=l[0],i=l[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),p=m[0],E=m[1],b=Object(n.useState)(""),g=Object(s.a)(b,2),h=g[0],f=g[1],v=Object(n.useState)(""),j=Object(s.a)(v,2),O=j[0],N=j[1],S=Object(n.useState)(""),y=Object(s.a)(S,2),k=y[0],w=y[1],C=Object(n.useState)(0),R=Object(s.a)(C,2),I=R[0],T=R[1],x=Object(n.useState)(""),A=Object(s.a)(x,2),U=A[0],P=A[1],_=Object(n.useState)(""),D=Object(s.a)(_,2),L=D[0],J=D[1],B=Object(n.useState)(""),F=Object(s.a)(B,2),H=F[0],M=F[1],q=Object(n.useState)(""),z=Object(s.a)(q,2),W=z[0],Y=z[1],$=Object(n.useState)(280),G=Object(s.a)($,2),K=G[0],Q=G[1];Object(n.useEffect)((function(){i("")}),[h,O,k,I,L,H,W]);return e.user?c.a.createElement("div",{className:"form-background"},c.a.createElement("h2",{className:"form-title"},"New Recipe"),c.a.createElement("span",{className:"red"},o),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat("https://noscroll-server.herokuapp.com","/recipes/"),{method:"POST",body:JSON.stringify({title:h,alt:O,userId:e.user._id,image:k,servings:I,description:U,directions:L,ingredients:H,tags:W}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("mernToken"))}}).then((function(e){if(!e.ok)return console.log(e),void i("".concat(e.status,": ").concat(e.statusText));E(c.a.createElement(d.a,{to:"/"}))}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Title:"),c.a.createElement("input",{type:"text",name:"title",onChange:function(e){return f(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Alt tag:"),c.a.createElement("input",{type:"text",name:"alt",onChange:function(e){return N(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Image url:"),c.a.createElement("input",{type:"url",name:"image",onChange:function(e){return w(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Servings:"),c.a.createElement("input",{type:"number",name:"servings",onChange:function(e){return T(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Description: (",K," character",1===K?"":"s"," remaining)"),c.a.createElement("input",{type:"text",name:"description",placeholder:"Describe your recipe",onChange:function(e){P(e.target.value),Q(280-e.target.value.length)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Directions:"),c.a.createElement("input",{type:"text",name:"directions",placeholder:"Comma-separate your list of directions...",onChange:function(e){return J(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Ingredients:"),c.a.createElement("input",{type:"text",name:"ingredients",placeholder:"Comma-separate your list of ingredients...",onChange:function(e){return M(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Tags:"),c.a.createElement("input",{type:"text",name:"tags",placeholder:"Comma-separate your list of tags, the more the better!",onChange:function(e){return Y(e.target.value)}})),c.a.createElement("button",{className:"form-button",type:"submit"},"Create Recipe!")),p):c.a.createElement(d.a,{to:"/auth/login"})}function f(e){var t=Object(n.useState)(e.recipe.title),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(e.recipe.alt),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(e.recipe.image),E=Object(s.a)(p,2),b=E[0],g=E[1],h=Object(n.useState)(e.recipe.servings),f=Object(s.a)(h,2),v=f[0],j=f[1],O=Object(n.useState)(e.recipe.description),N=Object(s.a)(O,2),S=N[0],y=N[1],k=Object(n.useState)([e.recipe.directions]),w=Object(s.a)(k,2),C=w[0],R=(w[1],Object(n.useState)([e.recipe.ingredients])),I=Object(s.a)(R,2),T=I[0],x=I[1],A=Object(n.useState)([e.recipe.tags]),U=Object(s.a)(A,2),P=U[0],_=U[1],D=Object(n.useState)(""),L=Object(s.a)(D,2),J=L[0],B=L[1];if(Object(n.useEffect)((function(){B("")}),[r,u,b,v,S,C,T,P]),!e.user)return c.a.createElement(d.a,{to:"/"});return c.a.createElement("div",{className:"form-background"},c.a.createElement("h2",{className:"form-title"},"Edit Recipe"),c.a.createElement("span",{className:"red"},J),c.a.createElement("form",{onSubmit:function(t){console.log("Here are your changes:",r,u,b,S,C,T,P),console.log("Here is what you had before:",e.recipe.title,e.recipe.alt,e.recipe.image,e.recipe.descriptions,[e.recipe.directions],[e.recipe.ingredients],[e.recipe.tags]),t.preventDefault(),fetch("".concat("https://noscroll-server.herokuapp.com","/recipes/").concat(e.recipe_id,"/edit"),{method:"POST",body:JSON.stringify({title:r,alt:u,image:b,servings:v,description:S,directions:C,ingredients:T,tags:P}),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(localStorage.getItem("mernToken"))}}).then((function(e){if(!e.ok)return console.log(e),void B("".concat(e.status,": ").concat(e.statusText))}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Title:"),c.a.createElement("input",{type:"text",name:"title",placeholder:e.recipe.title,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Alt Tag:"),c.a.createElement("input",{type:"text",name:"alt",placeholder:e.recipe.alt,onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Image URL:"),c.a.createElement("input",{type:"url",name:"image",placeholder:e.recipe.image,onChange:function(e){return g(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Servings:"),c.a.createElement("input",{type:"number",name:"servings",placeholder:e.recipe.servings,onChange:function(e){return j(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Decription:"),c.a.createElement("input",{type:"text",name:"description",placeholder:e.recipe.description,onChange:function(e){return y(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Ingredients:"),c.a.createElement("input",{type:"text",name:"ingredients",placeholder:e.recipe.ingredients,onChange:function(e){return x(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Tags:"),c.a.createElement("input",{type:"text",name:"tags",placeholder:e.recipe.tags,onChange:function(e){return _(e.target.value)}})),c.a.createElement("button",{className:"form-button",type:"submit"},"Update")))}function v(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),u=Object(s.a)(o,2);u[0],u[1];Object(n.useEffect)((function(){var t=e.user.favRecipes.find((function(t){return t===e.recipeId}));console.log(t+"\ud83d\udc7e"),l(!!t)}));return r?c.a.createElement("p",null,"Recipe in Favorites!"):c.a.createElement("button",{onClick:function(){console.log("\ud83d\ude3f"),i.a.post("".concat("https://noscroll-server.herokuapp.com","/profile/addFav"),{recipeId:e.recipeId,userId:e.user._id}).then((function(t){l(e.recipeId)})).catch((function(e){console.log("\ud83c\udf83"),console.log(e)}))}},"Add to Favorites")}function j(e){var t="",a=Object(n.useState)(null),r=Object(s.a)(a,2),l=(r[0],r[1]);return e.user&&e.authorId==e.user._id&&(t=c.a.createElement("div",null,c.a.createElement(d.b,{path:"/recipes/".concat(e.recipe._id,"/edit"),render:function(){return c.a.createElement(f,{user:e.user,recipe:e.recipe})}}),c.a.createElement("button",{onClick:function(t){i.a.delete("".concat("https://noscroll-server.herokuapp.com","/recipes/").concat(e.recipe._id)).then((function(e){e.data.message&&console.log("\ud83d\udca5",e.data.err)})).catch((function(e){l(e),console.log(e)}))}},"Delete Recipe"))),c.a.createElement("div",null,t)}function O(e){var t=Object(d.g)().id,a=Object(n.useState)(""),r=Object(s.a)(a,2),l=r[0],o=r[1],m=Object(n.useState)(null),p=Object(s.a)(m,2),E=(p[0],p[1]),b=Object(n.useState)(""),g=Object(s.a)(b,2),h=g[0],f=g[1],O={backgroundImage:"url("+l.image+")"};Object(n.useEffect)((function(){i.a.get("".concat("https://noscroll-server.herokuapp.com","/recipes/").concat(t)).then((function(e){console.log("\ud83d\udc79"),o(e.data),e.data.message?(E(e.data.message),console.log(e.data.err)):(o(e.data),console.log("RECIPE:",e.data),i.a.get("".concat("https://noscroll-server.herokuapp.com","/authors/").concat(e.data.userId)).then((function(e){e.data.message?(E(e.data.message),console.log("\ud83d\udca5",e.data.err)):(console.log("res2.data:",e.data),f(e.data))})).catch((function(e){E(e),console.log(e)})))}))}),[]),Object(n.useEffect)((function(){console.log("Request to api for all recipes")}),[l]);var N=l?l.ingredients.map((function(e,t){return c.a.createElement("li",{className:"recipe-ing",key:e+t},e)})):"",S=l?l.directions.map((function(e,t){return c.a.createElement("li",{className:"recipe-step",key:e+t},t+1,". ",e)})):"",y=l?l.tags.map((function(e,t){return c.a.createElement("p",{className:"recipe-tag",key:e+t},e)})):"",k=l?c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"recipe"},c.a.createElement("div",{class:"recipe-img",style:O,alt:l.alt},c.a.createElement("div",{class:"recipe-img-text"},c.a.createElement("h3",null,l.description))),c.a.createElement("div",{className:"recipe-tab"},c.a.createElement("h3",{className:"recipe-tab-text"},c.a.createElement("span",{className:"fancy"},"Author - "),c.a.createElement(u.b,{className:"author",to:"/authors/".concat(h._id)},h.name))),c.a.createElement("div",{className:"recipe-text"},c.a.createElement("h2",{className:"fancy"},l.title),c.a.createElement("hr",null),c.a.createElement("h3",null,"Ingredients"),c.a.createElement("ul",{className:"recipe-ingredients"},N),e.user?c.a.createElement(v,{recipeId:l._id,user:e.user}):c.a.createElement(u.b,{to:"/auth/signup"},"Sign up to favorite"),c.a.createElement(j,{user:e.user,recipe:l,authorId:l.userId}))),c.a.createElement("div",null,c.a.createElement("div",{className:"recipe-steps"},c.a.createElement("h3",null,"Directions"),c.a.createElement("hr",null),c.a.createElement("ul",null,S)),c.a.createElement("div",{className:"recipe-tags"},c.a.createElement("h4",null,"Tags for this recipe"),y))):c.a.createElement("h3",{className:"white-bg"},"Loading...");return c.a.createElement("div",null,k)}function N(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),m=Object(s.a)(o,2),p=(m[0],m[1]),d={backgroundImage:"url("+e.recipe.image+")"};Object(n.useEffect)((function(){e.recipe.userId.name?l(e.recipe.userId):(console.log(e.recipe.userId),i.a.get("".concat("https://noscroll-server.herokuapp.com","/authors/").concat(e.recipe.userId)).then((function(e){e.data.message?(p(e.data.message),console.log("\ud83d\udca5",e.data.err)):l(e.data)})).catch((function(e){p(e),console.log(e)})))}),[]);var E=c.a.createElement(u.b,{to:"/authors/".concat(r._id)},r.name);return c.a.createElement("div",{className:"thumbnail"},c.a.createElement("h4",{className:"author thumbnail-tab"},E),c.a.createElement("div",{className:"thumbnail-content"},c.a.createElement("div",{className:"thumbnail-header"},c.a.createElement("div",{style:d,className:"thumbnail-img",alt:e.recipe.alt}),c.a.createElement("div",{className:"thumbnail-innertext"},c.a.createElement("h3",{className:"fancy"},c.a.createElement(u.b,{to:"/recipes/".concat(e.recipe._id)},e.recipe.title)))),c.a.createElement("p",null,e.recipe.description)))}function S(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),m=Object(s.a)(o,2),p=(m[0],m[1]);Object(n.useEffect)((function(){i.a.get("".concat("https://noscroll-server.herokuapp.com","/recipes")).then((function(e){e.data.message?(p(e.data.message),console.log(e.data.err)):l(e.data)})).catch((function(e){p(e.message),console.log(e)}))}),[]);var d=e.searchedRecipes?e.searchedRecipes.map((function(e,t){return c.a.createElement("div",{key:"recipeListItem-".concat(t)},c.a.createElement(N,{recipe:e}))})):c.a.createElement("h3",null,"No more recipes. Try another search?"),E=r.length<1?c.a.createElement("h3",null,"No more recipes. You can add your own recipe below!"):r.map((function(e,t){return c.a.createElement("div",{key:"recipeListItem-".concat(t)},c.a.createElement(N,{recipe:e}))})),b=e.searchedRecipes?d:E;return c.a.createElement("div",null,c.a.createElement(u.b,{to:"/recipes/new",className:"white-bg"},"Add a recipe"),c.a.createElement("div",{className:"content"},b))}function y(e){var t=Object(n.useState)(e.user.name),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(e.user.email),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(e.user.password),E=Object(s.a)(p,2),b=E[0],g=E[1],h=Object(n.useState)(e.user.image),f=Object(s.a)(h,2),v=f[0],j=f[1],O=Object(n.useState)(e.user.bio),N=Object(s.a)(O,2),S=N[0],y=N[1],k=Object(n.useState)(""),w=Object(s.a)(k,2),C=w[0],R=w[1];if(Object(n.useEffect)((function(){R("")}),[r,u,b,v,S]),!e.user)return c.a.createElement(d.a,{to:"/"});return c.a.createElement("div",{className:"form-background"},c.a.createElement("h2",{className:"form-title"},"Edit Profile"),c.a.createElement("span",{className:"red"},C),c.a.createElement("form",{onSubmit:function(t){console.log("\ud83e\udd95 here be your changes:",r,u,b,v,S),console.log("heres what you had before:",e.user.email,e.user.name,e.user.image,e.user.bio),t.preventDefault(),fetch("".concat("https://noscroll-server.herokuapp.com","/profile/edit/").concat(e.user_id),{method:"POST",body:JSON.stringify({name:r,email:u,password:b,image:v,bio:S}),headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)return console.log(t),void R("".concat(t.status,": ").concat(t.statusText));t.json().then((function(t){e.updateUser(t.token)}))}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Name:"),c.a.createElement("input",{type:"text",name:"name",placeholder:e.user.name,onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",placeholder:e.user.email,onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",placeholder:e.user.password,onChange:function(e){return g(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Profile Pic URL:"),c.a.createElement("input",{type:"url",name:"image",placeholder:e.user.image,onChange:function(e){return j(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Bio:"),c.a.createElement("input",{type:"text",name:"bio",placeholder:e.user.bio,onChange:function(e){return y(e.target.value)}})),c.a.createElement("button",{className:"form-button",type:"submit"},"Update")))}function k(e){var t={backgroundImage:"url("+(e.image?e.image:"./img/profile-placeholder.jpg")+")"};return c.a.createElement("div",{className:"bio"},c.a.createElement("div",{style:t,className:"bio-img"}),c.a.createElement("div",{className:"bio-text"},c.a.createElement("h2",{className:"fancy"},e.name?e.name:""),c.a.createElement("p",null,e.bio?e.bio:"This user has no bio.")))}function w(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),m=Object(s.a)(o,2),p=m[0],E=m[1],b=Object(n.useState)(null),g=Object(s.a)(b,2),h=(g[0],g[1]);if(Object(n.useEffect)((function(){e.user&&i.a.get("".concat("https://noscroll-server.herokuapp.com","/authors/").concat(e.user._id)).then((function(e){e.data.message?(h(e.data.message),console.log("\ud83d\udca5",e.data.err)):(console.log("response.data:",e.data),l(e.data.userRecipes),E(e.data.favRecipes))})).catch((function(e){h(e),console.log(e)}))}),[]),!e.user)return c.a.createElement(d.a,{to:"/"});console.log("the user is \ud83d\ude0e",e.user),console.log("This is the user recipes"),console.log(r);var f=r&&r.length>0?r.map((function(e){return c.a.createElement(N,{recipe:e,isAuthor:!0})})):c.a.createElement("p",{className:"dark-bg"},"You haven't posted any recipes yet"),v=c.a.createElement("p",{className:"dark-bg"},"No Favorites to show");return p&&p.length>0&&(v=p.map((function(e){return console.log(e),c.a.createElement(N,{recipe:e})}))),c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement(k,{name:e.user?e.user.name:"",bio:e.user?e.user.bio:"",image:e.user?e.user.image:""}),c.a.createElement(u.b,{to:"/profile/edit",className:"App-link white-bg"},"Edit Profile")),c.a.createElement("div",null,c.a.createElement("h3",{className:"white-bg"},"My Favorites"),v),c.a.createElement("div",null,c.a.createElement("h3",{className:"white-bg"},"My Recipes"),f))}function C(e){var t="/authors/".concat(e.id),a={backgroundImage:"url("+(e.image?e.image:"./img/profile-placeholder.jpg")+")"};return e.user&&e.id==e.user._id&&(t="/profile"),c.a.createElement("div",{className:"auth-thumb",key:e.key},c.a.createElement("div",{style:a,className:"auth-thumb-img",alt:e.name+"'s profile"}),c.a.createElement("div",{className:"auth-thumb-text"},c.a.createElement("h3",{className:"author"},c.a.createElement(u.b,{to:t},e.name)),c.a.createElement("p",null,e.numRecipes," Recipe",1===e.numRecipes?"":"s"," ")))}function R(e){var t=Object(n.useState)([]),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(null),u=Object(s.a)(o,2),m=(u[0],u[1]);Object(n.useEffect)((function(){i.a.get("".concat("https://noscroll-server.herokuapp.com","/authors")).then((function(e){e.data.message?(m(e.data.message),console.log(e.data.err)):l(e.data.filter((function(e){return e.userRecipes.length>0})))})).catch((function(e){m(e),console.log(e)}))}),[]);var p=0,d=r.map((function(t){return p++,c.a.createElement(C,{name:t.name,image:t.image,numRecipes:t.userRecipes.length,id:t._id,user:e.user,key:p})}));return c.a.createElement("div",null,c.a.createElement("h2",{className:"white-bg fancy"},"Authors"),c.a.createElement("div",{className:"content"},d))}function I(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)([]),u=Object(s.a)(o,2),m=u[0],p=u[1],E=Object(n.useState)(null),b=Object(s.a)(E,2),g=(b[0],b[1]),h=Object(d.g)().id;Object(n.useEffect)((function(){i.a.get("".concat("https://noscroll-server.herokuapp.com","/authors/").concat(h)).then((function(e){e.data.message?(g(e.data.message),console.log("\ud83d\udca5",e.data.err)):(l(e.data),p(e.data.userRecipes))})).catch((function(e){g(e),console.log(e)}))}),[]);var f=m.map((function(e){return c.a.createElement(N,{recipe:e})}));return c.a.createElement("div",{className:"content"},c.a.createElement("div",null,c.a.createElement(k,{name:r.name,bio:r.bio,image:r.image})),c.a.createElement("div",null,f))}function T(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),b=E[0],g=E[1];Object(n.useEffect)((function(){m("")}),[r,b]);return e.user?c.a.createElement(d.a,{to:"/profile"}):c.a.createElement("div",{className:"form-background"},c.a.createElement("h2",{className:"form-title"},"Login"),c.a.createElement("span",{className:"red"},u),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat("https://noscroll-server.herokuapp.com","/auth/login"),{method:"POST",body:JSON.stringify({email:r,password:b}),headers:{"Content-Type":"application/json"}}).then((function(t){t.ok?t.json().then((function(t){e.updateUser(t.token)})):m("".concat(t.status,": ").concat(t.statusText))})).catch((function(e){console.log(e),m("".concat(e.toString()))}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",onChange:function(e){return l(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",onChange:function(e){return g(e.target.value)}})),c.a.createElement("button",{className:"form-button",type:"submit"},"Sign in!")))}function x(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),r=a[0],l=a[1],o=Object(n.useState)(""),i=Object(s.a)(o,2),u=i[0],m=i[1],p=Object(n.useState)(""),E=Object(s.a)(p,2),b=E[0],g=E[1],h=Object(n.useState)(""),f=Object(s.a)(h,2),v=f[0],j=f[1],O=Object(n.useState)(""),N=Object(s.a)(O,2),S=N[0],y=N[1],k=Object(n.useState)(""),w=Object(s.a)(k,2),C=w[0],R=w[1];Object(n.useEffect)((function(){l("")}),[b,u,v,S,C]);return e.user?c.a.createElement(d.a,{to:"/profile"}):c.a.createElement("div",{className:"form-background"},c.a.createElement("h2",{className:"form-title"},"Signup"),c.a.createElement("span",{className:"red"},r),c.a.createElement("form",{onSubmit:function(t){t.preventDefault(),fetch("".concat("https://noscroll-server.herokuapp.com","/auth/signup"),{method:"POST",body:JSON.stringify({name:b,email:u,password:v,image:S,bio:C}),headers:{"Content-Type":"application/json"}}).then((function(t){if(!t.ok)return console.log(t),void l("".concat(t.status,": ").concat(t.statusText));t.json().then((function(t){e.updateUser(t.token)}))}))}},c.a.createElement("div",null,c.a.createElement("label",null,"Name:"),c.a.createElement("input",{type:"text",name:"name",onChange:function(e){return g(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Email:"),c.a.createElement("input",{type:"email",name:"email",onChange:function(e){return m(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Password:"),c.a.createElement("input",{type:"password",name:"password",onChange:function(e){return j(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Profile Pic URL:"),c.a.createElement("input",{type:"url",name:"image",onChange:function(e){return y(e.target.value)}})),c.a.createElement("div",null,c.a.createElement("label",null,"Bio:"),c.a.createElement("input",{type:"text",name:"bio",placeholder:"Say something about yourself",onChange:function(e){return R(e.target.value)}})),c.a.createElement("button",{className:"form-button",type:"submit"},"Sign Me Up!")))}function A(e){return c.a.createElement("div",null,c.a.createElement(d.d,null,c.a.createElement(d.b,{exact:!0,path:"/",component:S}),c.a.createElement(d.b,{path:"/recipes/new",render:function(){return c.a.createElement(h,{user:e.user})}}),c.a.createElement(d.b,{path:"/recipes/:id",render:function(){return c.a.createElement(O,{user:e.user})}}),c.a.createElement(d.b,{path:"/recipes",render:function(){return c.a.createElement(S,{searchedRecipes:e.searchedRecipes})}}),c.a.createElement(d.b,{path:"/profile/edit",render:function(){return c.a.createElement(y,{user:e.user})}}),c.a.createElement(d.b,{path:"/profile",render:function(){return c.a.createElement(w,{user:e.user})}}),c.a.createElement(d.b,{path:"/authors/:id",component:I}),c.a.createElement(d.b,{path:"/authors",render:function(){return c.a.createElement(R,{user:e.user})}}),c.a.createElement(d.b,{path:"/auth/login",render:function(){return c.a.createElement(T,{user:e.user,updateUser:e.updateUser})}}),c.a.createElement(d.b,{path:"/auth/signup",render:function(){return c.a.createElement(x,{user:e.user,updateUser:e.updateUser})}})))}var U=function(){var e=Object(n.useState)(null),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),o=Object(s.a)(l,2),i=o[0],m=o[1];Object(n.useEffect)((function(){E()}),[]);var d=function(e){e?(localStorage.setItem("mernToken",e),E(e)):r(null)},E=function(e){var t=e||localStorage.getItem("mernToken");if(t){var a=p()(t);!a||Date.now()>=1e3*a.exp?(console.log("Token expired!"),r(null)):r(a)}else r(null)};return c.a.createElement(u.a,null,c.a.createElement("div",{className:"App"},c.a.createElement(g,{searchedRecipes:i,setSearchedRecipes:m,updateUser:d,user:a}),c.a.createElement("main",null,c.a.createElement(A,{searchedRecipes:i,updateUser:d,user:a}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.81fe0751.chunk.js.map