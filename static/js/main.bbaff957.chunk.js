(this.webpackJsonpyoutube=this.webpackJsonpyoutube||[]).push([[0],{21:function(e,t,a){e.exports={videos:"video_list_videos__FZpQ7"}},29:function(e,t,a){},3:function(e,t,a){e.exports={container:"video_item_container__8yJDa",grid:"video_item_grid__SZXJ-",list:"video_item_list__1CQsO",video:"video_item_video__1BoHA",thumbnail:"video_item_thumbnail__XTRiC",metadata:"video_item_metadata___-ck9",title:"video_item_title__RiJas",channel:"video_item_channel__11CjF"}},4:function(e,t,a){e.exports={header:"search_header_header__15hU_",logo:"search_header_logo__3oax2",input:"search_header_input__1WJwQ",button:"search_header_button__GnIig"}},5:function(e,t,a){e.exports={app:"app_app__bFFn9",content:"app_content__1p_4C",detail:"app_detail__2Y41E",list:"app_list__3_7Ys"}},50:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(20),s=a.n(c),r=(a(29),a(10)),o=a(5),l=a.n(o),u=a(3),d=a.n(u),p=a(0),h=Object(n.memo)((function(e){var t=e.video,a=e.video.snippet,n=e.onVideoClick,i="list"===e.display?d.a.list:d.a.grid;return Object(p.jsx)("li",{className:"".concat(d.a.container," ").concat(i),onClick:function(){return n(t)},children:Object(p.jsxs)("div",{className:d.a.video,children:[Object(p.jsx)("img",{className:d.a.thumbnail,src:a.thumbnails.medium.url,alt:"video Thumbnail"}),Object(p.jsxs)("div",{className:d.a.metadata,children:[Object(p.jsx)("p",{className:d.a.title,children:a.title}),Object(p.jsx)("p",{className:d.a.channelTitle,children:a.channelTitle})]})]})})})),b=a(21),_=a.n(b),j=function(e){var t=e.videos,a=e.onVideoClick,n=e.display;return Object(p.jsx)("ul",{className:_.a.videos,children:t.map((function(e){return Object(p.jsx)(h,{video:e,onVideoClick:a,display:n},e.id)}))})},m=a(4),v=a.n(m),O=Object(n.memo)((function(e){var t=e.onSearch,a=Object(n.useRef)(),i=function(){var e=a.current.value;t(e)};return Object(p.jsxs)("header",{className:v.a.header,children:[Object(p.jsxs)("div",{className:v.a.logo,children:[Object(p.jsx)("img",{className:v.a.img,src:"/images/logo.png",alt:"logo"}),Object(p.jsx)("h1",{className:v.a.title,children:"Youtube"})]}),Object(p.jsx)("input",{ref:a,className:v.a.input,type:"search",placeholder:"Search...",onKeyPress:function(e){"Enter"===e.key&&i()}}),Object(p.jsx)("button",{className:v.a.button,type:"sumbit",onClick:function(){i()},children:Object(p.jsx)("img",{src:"/images/search.png",alt:"search"})})]})})),f=a(7),x=a.n(f),y=function(e){var t=e.video;return Object(p.jsxs)("section",{className:x.a.detail,children:[Object(p.jsx)("iframe",{className:x.a.video,title:"youtube video player",type:"text/html",width:"100%",height:"500px",src:"https://www.youtube.com/embed/".concat(t.id),frameBorder:"0",allowFullScreen:!0}),Object(p.jsx)("h2",{children:t.snippet.title}),Object(p.jsx)("h3",{children:t.snippet.channelTitle}),Object(p.jsx)("pre",{className:x.a.description,children:t.snippet.description})]})};var g=function(e){var t=e.youtube,a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],s=i[1],o=Object(n.useState)(null),u=Object(r.a)(o,2),d=u[0],h=u[1],b=Object(n.useCallback)((function(e){t.search(e).then((function(e){s(e),h(null)}))}),[t]);return Object(n.useEffect)((function(){t.mostPopular().then((function(e){return s(e)}))}),[t]),Object(p.jsxs)("div",{className:l.a.app,children:[Object(p.jsx)(O,{onSearch:b}),Object(p.jsxs)("section",{className:l.a.content,children:[d&&Object(p.jsx)("div",{className:l.a.detail,children:Object(p.jsx)(y,{video:d})}),Object(p.jsx)("div",{className:l.a.list,children:Object(p.jsx)(j,{videos:c,onVideoClick:function(e){h(e)},display:d?"list":"grid"})})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,51)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))},k=a(11),C=a(6),w=a.n(C),S=a(9),F=a(22),P=a(23),J=function(){function e(t){Object(F.a)(this,e),this.youtube=t}return Object(P.a)(e,[{key:"mostPopular",value:function(){var e=Object(S.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("videos",{params:{part:"snippet",chart:"mostPopular",maxResults:25}});case 2:return t=e.sent,e.abrupt("return",t.data.items);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"search",value:function(){var e=Object(S.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.youtube.get("search",{params:{part:"snippet",maxResults:25,type:"video",q:t}});case 2:return a=e.sent,e.abrupt("return",a.data.items.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{id:e.id.videoid})})));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),T=a(24),R=new J(a.n(T).a.create({baseURL:"https://youtube.googleapis.com/youtube/v3",params:{key:"AIzaSyAz0PbouMlze1PrCcK-ySj5nEJFb5WLngQ"}}));s.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(g,{youtube:R})}),document.getElementById("root")),N()},7:function(e,t,a){e.exports={detail:"video_detail_detail__6wavo",description:"video_detail_description__3KmAz"}}},[[50,1,2]]]);
//# sourceMappingURL=main.bbaff957.chunk.js.map