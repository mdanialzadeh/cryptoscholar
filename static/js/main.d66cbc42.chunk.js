(this.webpackJsonpcryptoscholar=this.webpackJsonpcryptoscholar||[]).push([[0],{44:function(A,e,t){},45:function(A,e,t){},46:function(A,e,t){},47:function(A,e,t){"use strict";t.r(e);var n,i,a,r,s,o,c,d,l=t(1),m=t.n(l),g=t(11),u=t.n(g),p=t(2),h=t(6),j=t(3),b=t(4),x=t.p+"static/media/Logo.800f082f.png",f=t(0);var w={Wrapper:j.b.main(n||(n=Object(p.a)(["\n      display: flex;\n      z-index: 10;\n    "])))},C={Wrapper:j.b.nav(i||(i=Object(p.a)(["\n      flex: 1;\n      align-self: flex-start;\n      padding: 0 3rem;\n      height: 6rem;\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      background-color: #FDFDFB;\n      position:fixed;\n      width: 100%;\n      z-index: 2;\n      box-shadow: 0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);\n    "]))),Logo:j.b.div(a||(a=Object(p.a)(["\n      padding: 0.5rem 1rem;\n      height: 50px;\n      width: 120px;\n      background-size: contain;\n      background-image: url(",");\n    "])),x),Items:j.b.ul(r||(r=Object(p.a)(["\n      margin:0;\n      display: flex;\n      list-style: none;\n    "]))),Item:j.b.li(s||(s=Object(p.a)(["\n      padding: 0 1.2rem;\n      cursor: pointer;\n      font-size: 1.5rem\n    "])))},O={Wrapper:Object(j.b)(C.Wrapper)(o||(o=Object(p.a)(["\n      position: fixed;\n      width: 100vw;\n      bottom: 0;\n      height: 5rem;\n      padding: 0 1rem;\n      justify-content: center;\n      box-shadow: 0 -4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);\n    "]))),Items:Object(j.b)(C.Items)(c||(c=Object(p.a)(["\n      height: 100%;\n      width: 100%;\n      align-items: center;\n      display:flex;\n      justify-content: space-around;\n    "]))),Item:Object(j.b)(C.Item)(d||(d=Object(p.a)(["\n      align-items: center;\n      font-size: 1.3rem;\n      white-space: nowrap;\n      justify-content: center;\n      display: flex;\n      padding: 0 .4rem;\n    "])))},I=function(){var A=Object(l.useState)(null),e=Object(h.a)(A,2),t=e[0],n=e[1];Object(l.useEffect)((function(){n(window.innerWidth)}),[]),Object(l.useEffect)((function(){function A(){n(window.innerWidth)}return window.addEventListener("resize",A),function(){return window.removeEventListener("resize",A)}}),[]);var i=t<=640;return Object(f.jsx)(w.Wrapper,{children:i?Object(f.jsx)(O.Wrapper,{children:Object(f.jsxs)(O.Items,{children:[Object(f.jsx)(O.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"homenav",to:"home",spy:!0,smooth:!0,duration:1e3,children:"Home"})}),Object(f.jsx)(O.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"roadmapnav",to:"roadmap",spy:!0,smooth:!0,duration:1e3,children:"Road Map"})}),Object(f.jsx)(O.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"nftnav",to:"nft",spy:!0,smooth:!0,duration:1e3,children:"NFT's"})}),Object(f.jsx)(O.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"moreinfonav",to:"moreinfo",spy:!0,smooth:!0,duration:1e3,children:"Info"})})]})}):Object(f.jsxs)(C.Wrapper,{children:[Object(f.jsx)(C.Logo,{}),Object(f.jsxs)(C.Items,{children:[Object(f.jsx)(C.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"homenav",to:"home",spy:!0,smooth:!0,duration:1e3,children:"Home"})}),Object(f.jsx)(C.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"roadmapnav",to:"roadmap",spy:!0,smooth:!0,duration:1e3,children:"Road Map"})}),Object(f.jsx)(C.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"nftnav",to:"nft",spy:!0,smooth:!0,duration:1e3,children:"NFT Fundriaser & Utility"})}),Object(f.jsx)(C.Item,{children:Object(f.jsx)(b.Link,{activeClass:"active",className:"moreinfonav",to:"moreinfo",spy:!0,smooth:!0,duration:1e3,children:"More Info"})})]})]})})},B=t(5),y=t.n(B),E=t(7),Q=(t(44),t.p+"static/media/b_pawn.bbf20ce5.png"),v=t.p+"static/media/b_rook.62d9b25c.png",_=t.p+"static/media/b_bishop.46e2ceb2.png",N=t.p+"static/media/b_knight.506afede.png",k=t.p+"static/media/b_king.0f1c81df.png",L=t.p+"static/media/b_queen.05d71e00.png",R=t.p+"static/media/w_pawn.6e018d7b.png",T=t.p+"static/media/w_rook.0c42101d.png",z=t.p+"static/media/w_bishop.3e56f0d1.png",S=t.p+"static/media/w_knight.d46581f3.png",D=t.p+"static/media/w_king.e2f5d12e.png",F=t.p+"static/media/w_queen.505a44b6.png";var W=function(){return Object(f.jsxs)("div",{className:"chessboard",style:{backgroundImage:"url(".concat("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAQACAAAAABadnRfAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQflBBwABgAzSMnwAAALNklEQVR42u3Yv0vUcRzH8e/FYVBhklCERr+WuyAIInDtjqJG12ht0rmhwVr6B/wBZf0N52YtZ4NLo2R0LUaRFImGSQW6XMN3anF93enjsXxpen/en689ubuiAAAAAAAADqZK+Xg4ljzEuyfRO5geTU5ffBldvhWdPv86OX1kJrr81PseCEC1fIyNJw9xMnsHt2rJ6d+yy0dffNGOTh/MLj/bC58AjvgQBIeXAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgACAArgAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAgD5SLR+rQ8lDfG5G72D1e3L6n+zyb6LTj0eXH84ufyG6/MZq71So0Y2qR5efyC6fffOz0d072eXb0eVbvgKA3wBcAQgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAPSBavmYvpU8xLsr0TuYHk1OX8wu34lOn48uP5JdfmoyOX3nvwCM1pJn+ZZ9Ednl29nlo7sXe4d5+a3s8r4CgN8AXAEIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAA/aNSPh5cSx7i99foHVw6mpz+80d0+Xp0+vft5PSBy9Hlv/xNTl971TsVanSjsv8HJrLLZ9/8bHT3Tnb5dnT5lq8A4DcAVwACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAB9oFo+WuPJQyxVonfQqSWnz2WX70anT0aXr2eXbzZ9AgAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEANhfpXzcvZw8xLHz0TtY20tOHzobXb4TnX7mVHL67qfo8udOJKevvOidCjW6UfXo8hPZ5bNvfja6ezZ+RTu6fMtXAPAbgCsAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAoH9Uy8fIYPIQwx+jdzASnT6QXb4enb4bXX49u/xmdvn/AjAznjzLUvZFdGrJ6XPZ5bvR6ZPR5esfoss3l3wFAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQAEAAAAEABAAQABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAQAAAAQAEABAAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQAEABAAAABAAQA2F+lfFw9nTzE+fvRO3i2lZx+/U50+afR6bdvJKdvPo8uf+9icvry46IoiqJa/ms1ehONm9HxE53k9Fp2+UZ0+nh0+Y/t6PKPostv+woAfgNwBSAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgAIAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgAIACAAAACAAgACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAgAIAAAAIACAAIACAAgAAAAgAIACAAgAAAAgAIACAAgAAAAgD0j2ovHGJjITp+Jzp9beEQ//mtRJdfzy6//Cs5/a34AQAAAADAwfYP+rxRKCiUWCsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDQtMjhUMDA6MDY6MDArMDA6MDBY7XAfAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA0LTI4VDAwOjA2OjAwKzAwOjAwKbDIowAAAABJRU5ErkJggg==",")")},children:[Object(f.jsx)("img",{src:Q,alt:"",style:{gridColumn:"1",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,alt:"",style:{gridColumn:"2",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,alt:"",style:{gridColumn:"3",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,alt:"",style:{gridColumn:"4",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,alt:"",style:{gridColumn:"5",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,className:"pawn1b",alt:"",style:{gridColumn:"6",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,className:"pawn2b",alt:"",style:{gridColumn:"7",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:Q,className:"pawn3b",alt:"",style:{gridColumn:"8",gridRow:"2",width:"70%"}}),Object(f.jsx)("img",{src:v,alt:"",style:{gridColumn:"1",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:v,alt:"",style:{gridColumn:"8",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:N,alt:"",style:{gridColumn:"2",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:N,alt:"",style:{gridColumn:"7",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:_,alt:"",style:{gridColumn:"3",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:_,alt:"",style:{gridColumn:"6",gridRow:"1",width:"70%"}}),"            ",Object(f.jsx)("img",{src:L,alt:"",style:{gridColumn:"4",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:k,alt:"",style:{gridColumn:"5",gridRow:"1",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"1",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"2",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"3",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,className:"pawn1w",alt:"",style:{gridColumn:"4",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,className:"pawn2w",alt:"",style:{gridColumn:"5",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"6",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"7",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:R,alt:"",style:{gridColumn:"8",gridRow:"7",width:"70%"}}),Object(f.jsx)("img",{src:T,alt:"",style:{gridColumn:"1",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:T,alt:"",style:{gridColumn:"8",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:S,alt:"",style:{gridColumn:"2",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:S,alt:"",style:{gridColumn:"7",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:z,className:"wbishop",alt:"",style:{gridColumn:"3",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:z,alt:"",style:{gridColumn:"6",gridRow:"8",width:"70%"}}),"            ",Object(f.jsx)("img",{src:F,className:"wqueen",alt:"",style:{gridColumn:"4",gridRow:"8",width:"70%"}}),Object(f.jsx)("img",{src:D,alt:"",style:{gridColumn:"5",gridRow:"8",width:"70%"}})]})};t(45);var X,P,V,J,H=function(){window.onscroll=function(){0===A&&window.pageYOffset>300&&(!function(){var A=document.getElementsByClassName("pawn1w"),e=document.getElementsByClassName("pawn1b"),t=document.getElementsByClassName("wbishop"),n=document.getElementsByClassName("pawn2b"),i=document.getElementsByClassName("pawn3b"),a=document.getElementsByClassName("pawn2w"),r=document.getElementsByClassName("wqueen");function s(A){return new Promise((function(e){return setTimeout(e,A)}))}function o(){return(o=Object(E.a)(y.a.mark((function t(){var n,i,a;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s(500);case 2:return A[0].classList.add("jump_up"),t.next=5,s(240);case 5:return A[0].attributes[3].nodeValue="grid-area: 6 / 4 / auto / auto; max-width: 70%;",A[0].classList.remove("jump_up"),t.next=9,s(300);case 9:return A[0].classList.add("jump_up"),t.next=12,s(240);case 12:return A[0].attributes[3].nodeValue="grid-area: 5 / 4 / auto / auto; max-width: 70%;",A[0].classList.remove("jump_up"),t.next=16,s(500);case 16:return e[0].classList.add("jump_down"),t.next=19,s(240);case 19:return e[0].attributes[3].nodeValue="grid-area: 3 / 6 / auto / auto; max-width: 70%;",e[0].classList.remove("jump_down"),t.next=23,s(300);case 23:return e[0].classList.add("jump_down"),t.next=26,s(240);case 26:return e[0].attributes[3].nodeValue="grid-area: 4 / 6 / auto / auto; max-width: 70%;",e[0].classList.remove("jump_down"),t.next=30,s(300);case 30:return n=document.querySelector(".roadmap_info"),(i=document.createElement("span")).classList="roadmapinfo",(a=document.createElement("p")).innerText="Q1 2022 Pre-Registration Window open. ",i.append(a),n.append(i),t.next=39,s(2e3);case 39:c();case 40:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function c(){return d.apply(this,arguments)}function d(){return(d=Object(E.a)(y.a.mark((function A(){var e,n,a;return y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t[0].classList.add("jump_side"),A.next=3,s(240);case 3:return t[0].classList.remove("jump_side"),t[0].attributes[3].nodeValue="grid-area: 7/4/auto/auto; max-width: 70%",A.next=7,s(300);case 7:return t[0].classList.add("jump_side"),A.next=10,s(240);case 10:return t[0].attributes[3].nodeValue="grid-area: 6/5/auto/auto; max-width: 70%",t[0].classList.remove("jump_side"),A.next=14,s(300);case 14:return t[0].classList.add("jump_side"),A.next=17,s(240);case 17:return t[0].attributes[3].nodeValue="grid-area: 5/6/auto/auto; max-width: 70%",t[0].classList.remove("jump_side"),A.next=21,s(300);case 21:return t[0].classList.add("jump_side"),A.next=24,s(240);case 24:return t[0].attributes[3].nodeValue="grid-area: 4/7/auto/auto; max-width: 70%",t[0].classList.remove("jump_side"),A.next=28,s(500);case 28:return i[0].classList.add("jump_down"),A.next=31,s(240);case 31:return i[0].attributes[3].nodeValue="grid-area: 3/8/auto/auto; max-width: 70%",i[0].classList.remove("jump_down"),A.next=35,s(300);case 35:return e=document.querySelector(".roadmap_info"),(n=document.createElement("span")).classList="roadmapinfo",(a=document.createElement("p")).innerText="Q2- 2022: NFT Sales",n.append(a),e.append(n),A.next=44,s(2e3);case 44:l();case 45:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function l(){return m.apply(this,arguments)}function m(){return(m=Object(E.a)(y.a.mark((function A(){var e,i,a;return y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t[0].classList.add("jump_side_down"),A.next=3,s(240);case 3:return t[0].attributes[3].nodeValue="grid-area: 5/8/auto/auto; max-width: 70%",t[0].classList.remove("jump_side_down"),A.next=7,s(500);case 7:return n[0].classList.add("jump_down"),A.next=10,s(240);case 10:return n[0].attributes[3].nodeValue="grid-area: 3 / 7 / auto / auto; max-width: 70%;",n[0].classList.remove("jump_down"),A.next=14,s(300);case 14:return n[0].classList.add("jump_down"),A.next=17,s(240);case 17:return n[0].attributes[3].nodeValue="grid-area: 4 / 7 / auto / auto; max-width: 70%;",n[0].classList.remove("jump_down"),A.next=21,s(500);case 21:return e=document.querySelector(".roadmap_info"),(i=document.createElement("span")).classList="roadmapinfo",(a=document.createElement("p")).innerText="Q3 2022: Game Development begins",i.append(a),e.append(i),A.next=30,s(2e3);case 30:g();case 31:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function g(){return u.apply(this,arguments)}function u(){return(u=Object(E.a)(y.a.mark((function A(){var t,n,i;return y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return a[0].classList.add("jump_up"),A.next=3,s(240);case 3:return a[0].attributes[3].nodeValue="grid-area: 6 / 5 / auto / auto; max-width: 70%;",a[0].classList.remove("jump_up"),A.next=7,s(300);case 7:return a[0].classList.add("jump_up"),A.next=10,s(240);case 10:return a[0].attributes[3].nodeValue="grid-area: 5 / 5 / auto / auto; max-width: 70%;",a[0].classList.remove("jump_up"),A.next=14,s(500);case 14:return e[0].classList.add("jump_left_down"),A.next=17,s(240);case 17:return a[0].classList.add("exit"),e[0].attributes[3].nodeValue="grid-area: 5 / 5 / auto / auto; max-width: 70%;",e[0].classList.remove("jump_left_down"),A.next=22,s(500);case 22:return t=document.querySelector(".roadmap_info"),(n=document.createElement("span")).classList="roadmapinfo",(i=document.createElement("p")).innerText="Q4 2022: Smart Contract Integration",n.append(i),t.append(n),A.next=31,s(2e3);case 31:p();case 32:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function p(){return h.apply(this,arguments)}function h(){return(h=Object(E.a)(y.a.mark((function A(){var e,t,n;return y.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return r[0].classList.add("jump_side"),A.next=3,s(240);case 3:return r[0].classList.remove("jump_side"),r[0].attributes[3].nodeValue="grid-area: 7/5/auto/auto; max-width: 70%",A.next=7,s(300);case 7:return r[0].classList.add("jump_side"),A.next=10,s(240);case 10:return r[0].attributes[3].nodeValue="grid-area: 6/6/auto/auto; max-width: 70%",r[0].classList.remove("jump_side"),A.next=14,s(300);case 14:return r[0].classList.add("jump_side"),A.next=17,s(240);case 17:return r[0].attributes[3].nodeValue="grid-area: 5/7/auto/auto; max-width: 70%",r[0].classList.remove("jump_side"),A.next=21,s(300);case 21:return r[0].classList.add("jump_side"),A.next=24,s(240);case 24:return r[0].attributes[3].nodeValue="grid-area: 4/8/auto/auto; max-width: 70%",r[0].classList.remove("jump_side"),A.next=28,s(500);case 28:return e=document.querySelector(".roadmap_info"),(t=document.createElement("span")).classList="roadmapinfo",(n=document.createElement("p")).innerText="Q1 2023: First Competition and Scholarship for 2023",t.append(n),e.append(t),A.next=37,s(2e3);case 37:case"end":return A.stop()}}),A)})))).apply(this,arguments)}!function(){o.apply(this,arguments)}()}(),A++)};var A=0;return Object(f.jsx)("div",{children:Object(f.jsx)(W,{})})};var M,G,U,q,Y,Z,K={Wrapper:j.b.main(X||(X=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height:100vh;\n    margin: 0 5vw;   \n    padding-top: 6rem;\n    @media (max-width: 640px) {\n      padding-top: 0;\n  "]))),Container:j.b.div(P||(P=Object(p.a)(["\n      text-align:center;\n      height: 90%;\n      width:100%;\n      align-items:center;\n      display:flex;\n      flex-direction: column;\n    \n  "]))),Title:j.b.h1(V||(V=Object(p.a)(["\n    margin-bottom: 2rem;\n    font-size: 2rem;\n    "]))),Info:j.b.div(J||(J=Object(p.a)(["\n    display: grid;\n    grid-template: 1fr 1fr 1fr 1fr 1fr / 1fr;\n    grid-auto-flow: column;\n    flex: .8;\n    font-size: .9rem;\n    justify-items: stretch;\n    align-items: end;\n    @media (min-width: 640px) {\n        font-size: 1.6rem;\n        \n      }\n    "])))},$=function(){return Object(f.jsx)(K.Wrapper,{children:Object(f.jsxs)(K.Container,{id:"roadmap",className:"roadmap_container",children:[Object(f.jsx)(K.Title,{children:"Road Map"}),Object(f.jsx)(H,{}),Object(f.jsx)(K.Info,{className:"roadmap_info"})]})})},AA=t.p+"static/media/Green.eca19064.png";var eA,tA,nA,iA,aA,rA,sA={Wrapper:j.b.main(M||(M=Object(p.a)(["\n      display: flex;\n      flex-direction: column;\n      height:100vh;\n      margin: 5vw 10vw 0vw 10vw;\n      align-items:center;\n      justify-content: center;\n    \n    "]))),Container:j.b.div(G||(G=Object(p.a)(["\n        text-align:center;\n        height: 85%;\n        width: 80%;\n        display:flex;\n        flex-direction: column;\n        justify-content: space-evenly;\n        align-items: center;\n        margin-bottom: 10vh;\n        @media (min-width: 640px) {\n            font-size: 1.8rem;\n            width: 80%;\n        }\n        \n    "]))),Image:j.b.img(U||(U=Object(p.a)(["\n    margin-top: 5vh;\n    width: 60%;\n    max-width: 800px;\n    "]))),Input:j.b.input(q||(q=Object(p.a)(["\n    width: 15em;\n    padding: .2rem .1rem;\n    "]))),Button:j.b.button(Y||(Y=Object(p.a)(["\n    background: none;\n    border: 1px solid black;\n    margin-left: 1rem;\n    padding: .2rem .4rem;\n    "]))),Welcome:j.b.h1(Z||(Z=Object(p.a)(["\n    text-transform: uppercase;\n    "])))},oA=function(){var A=document.getElementById("preRegister"),e=Object(l.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1],a=Object(l.useState)(""),r=Object(h.a)(a,2),s=r[0],o=r[1],c=Object(l.useState)(""),d=Object(h.a)(c,2),m=d[0],g=d[1];return Object(f.jsx)(sA.Wrapper,{children:Object(f.jsxs)(sA.Container,{children:[Object(f.jsx)(sA.Welcome,{children:"Welcome to Crypto Scholars!"}),Object(f.jsx)("h2",{children:"Pre-Registration NOW OPEN!"}),Object(f.jsxs)("form",{name:"preRegister",id:"preRegister",onSubmit:function(e){e.preventDefault(),i(!0),fetch("https://script.google.com/macros/s/AKfycbxrbw8A_7ep-TUgjgZECnFQThPjhNaXrYvL0AHCwtHXUPdcmxHE/exec",{method:"POST",body:new FormData(A)}).then((function(A){console.log("Success!",A),g({type:"success"}),i(!1),o("")})).catch((function(A){i(!1),g({type:"error",error:A})}))},children:[Object(f.jsx)(sA.Input,{className:"email_input",type:"email",name:"email",required:!0,placeholder:"Enter Email Here",value:s,onChange:function(A){return o(A.target.value)}}),Object(f.jsx)(sA.Button,{type:"submit",id:"submit_button",disabled:n,children:"Submit"})]}),Object(f.jsxs)("div",{className:"email_result",children:["success"===(null===m||void 0===m?void 0:m.type)&&Object(f.jsx)("p",{children:"Succes! thank you for Preregistering"}),"error"===(null===m||void 0===m?void 0:m.type)&&Object(f.jsx)("p",{children:"Oh no! something went wrong. Please try again later or contact us on our Discord"})]}),Object(f.jsx)("h3",{children:"As a bonus for pre-registering before the cut off date on 3/31/2022 will have early access to the portal in order to set up their profiles"}),Object(f.jsx)(sA.Image,{src:AA,alt:""})]})})},cA=(t(46),t.p+"static/media/King.8fe920d0.jpg"),dA=t.p+"static/media/Queen.f7e26a01.jpg",lA=t.p+"static/media/Knight.76da708c.jpg",mA=t.p+"static/media/Saphire.d388be66.jpg",gA=t.p+"static/media/Ruby.0afa503a.jpg",uA=t.p+"static/media/Jade.4feb6899.jpg";var pA,hA,jA,bA,xA,fA,wA={Wrapper:j.b.main(eA||(eA=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height:120vh;\n    margin: 0 5vw;   \n    padding-top: 6rem;\n    @media (max-width: 640px) {\n      padding-top: 0;\n      justify-content: space-between;\n  "]))),Container:j.b.div(tA||(tA=Object(p.a)(["\n      text-align:center;\n      height: 60vh;\n      width:86%;\n      align-items:center;\n      display:flex;\n      flex-direction: column;\n      justify-content: space-evenly;\n   \n  "]))),Title:j.b.h1(nA||(nA=Object(p.a)(["\n  font-size: 3rem;\n  @media (max-width: 640px) {\n    font-size: 1.4rem;\n}\n  "]))),Section:j.b.p(iA||(iA=Object(p.a)(["\n  font-size: 2rem;\n  font-weight: bold;\n  @media (max-width: 640px) {\n      font-size: 1.2rem;\n  }\n  "]))),Disclaimer:j.b.p(aA||(aA=Object(p.a)(["\n  font-size: 1rem;\n  "]))),Link:j.b.a(rA||(rA=Object(p.a)(["\n  color: blue;\n  text-decoration: underline;\n  "])))},CA=function(){return Object(f.jsxs)(wA.Wrapper,{children:[Object(f.jsxs)(wA.Container,{children:[Object(f.jsx)(wA.Title,{children:"NFT Fundraiser & Utility"}),Object(f.jsxs)(wA.Section,{children:["To further help our project have maximum impact during the first tournament, we will have an NFT sale of two types of NFTs. The first NFT style is designed by established artist in the NFT space: ",Object(f.jsx)(wA.Link,{href:"https://kriscfox3d.io/",target:"_blank",rel:"noreferrer",children:" Kris C Fox"}),"."]}),Object(f.jsxs)("div",{className:"nft_examples",children:[Object(f.jsx)("a",{href:"https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.SapphireRook",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("figure",{className:"hover-img",children:[Object(f.jsx)("img",{src:mA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"Saphire Rook"})})]})}),Object(f.jsx)("a",{href:"https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.JadeKnight",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("figure",{className:"hover-img",children:[Object(f.jsx)("img",{src:uA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"Jade Knight"})})]})}),Object(f.jsx)("a",{href:"https://pool.pm/a102935a22a5dd3f0e8a1f15ded834fe3bf9a4920a197478ce9743eb.RubyBishop",target:"_blank",rel:"noreferrer",children:Object(f.jsxs)("figure",{className:"hover-img",children:[Object(f.jsx)("img",{src:gA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"Ruby Bishop"})})]})})]}),Object(f.jsx)(wA.Section,{children:" NFT's will potentially hold a player's win loss history within the meta data of the NFT"})]}),Object(f.jsxs)(wA.Container,{children:[Object(f.jsx)(wA.Section,{children:"Our other NFT offering is based on AI generated art, using AI_Xerxe's crazy neural networks"}),Object(f.jsxs)("div",{className:"nft_examples",children:[Object(f.jsx)("figure",{className:"hover-img",children:Object(f.jsxs)("a",{href:"https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:lA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"Knight"})})]})}),Object(f.jsx)("figure",{className:"hover-img",children:Object(f.jsxs)("a",{href:"https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:cA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"King"})})]})}),Object(f.jsx)("figure",{className:"hover-img",children:Object(f.jsxs)("a",{href:"https://twitter.com/ai_Xerxes?t=G_NQNroGj0tJ9fps_pCHDQ&s=09",target:"_blank",rel:"noreferrer",children:[Object(f.jsx)("img",{src:dA,alt:""}),Object(f.jsx)("figcaption",{children:Object(f.jsx)("h3",{children:"Queen"})})]})})]}),Object(f.jsx)(wA.Section,{children:". He trains his neural nets to study countless images of chess pieces, and then let's the AI come up with it's own interpretation."})]})]})};var OA,IA,BA={Wrapper:j.b.main(pA||(pA=Object(p.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n \n    height:100vh;\n    margin: 6vw 5vw;   \n    padding-top: 6rem;\n    @media (max-width: 640px) {\n      padding-top: 0;\n    }\n\n    \n  "]))),Container:j.b.div(hA||(hA=Object(p.a)(["\n      text-align:center;\n      height: 60vh;\n      margin: 0vw 5vw;\n      width:100%;\n      display:flex;\n      flex-direction: column;\n      \n    \n  "]))),Title:j.b.h1(jA||(jA=Object(p.a)(["\n  margin-bottom: 4rem;\n  margin-top: 0rem;\n  font-size: 2.0rem;\n  "]))),Buttons:j.b.div(bA||(bA=Object(p.a)(["\n  margin-bottom: 2rem;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  "]))),Button:j.b.button(xA||(xA=Object(p.a)(["\n  background: #7A95D9;\n  padding: .7rem;\n  border: 1px solid black;\n  margin: .2rem;\n  font-weight: 400;\n  @media (max-width: 640px) {\n    padding: .5em;\n    font-size: 1.0rem;\n}\n  "]))),Overlay:j.b.div(fA||(fA=Object(p.a)(["\n    margin-top: 6vh;\n    width: 94%;\n    margin: 5% 2%;\n    display: flex;\n    font-size: .9rem;\n    flex-direction: column;\n    align-content: center;\n    justify-content: center;\n    @media (min-width: 640px) {\n        font-size: 1.8em;\n    }\n    \n  "])))},yA=function(){var A=Object(l.useState)(""),e=Object(h.a)(A,2),t=e[0],n=e[1];return Object(f.jsx)(BA.Wrapper,{children:Object(f.jsxs)(BA.Container,{children:[Object(f.jsx)(BA.Title,{className:"moreinfo",children:"More Info"}),Object(f.jsxs)(BA.Buttons,{children:[Object(f.jsx)(BA.Button,{onClick:function(){n("1")},children:"Tournament Rules & Progress"}),Object(f.jsx)(BA.Button,{onClick:function(){n("2")},children:"Open Competition"}),Object(f.jsx)(BA.Button,{onClick:function(){n("3")},children:"Prize Pool & initial Funding"}),Object(f.jsx)(BA.Button,{onClick:function(){n("4")},children:"Community Engagement"})]}),Object(f.jsxs)("div",{children:["1"===t&&Object(f.jsx)(BA.Overlay,{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"After registration is complete, students will be onboarded into the gaming platform to create an account and begin playing. This will be purely based on skill. The best competitor will win."}),Object(f.jsx)("br",{}),Object(f.jsx)("li",{children:"The chess game will have preliminary rounds to determine ranks. This will be the calibration phase to make sure each player is in the correct tier. Once a player is ranked based on win / loss ratios, they\u2019ll enter into brackets. Brackets will be based on ranks. Eventually going down to a final game between two opponents, and the winner being awarded a yet to be determined amount towards college tuition."}),Object(f.jsx)("br",{}),Object(f.jsx)("li",{children:"Please note \u2013 the final game will either have to be in person, and or streamed in an isolated area to make sure the finalists are not cheating. This should discourage would be cheaters from cheating during the previous stages. Cheaters simply won\u2019t be able to run bots or algorithms during the live and / or streamed event. Details are being withheld about the exact measures to prevent creative circumventions to anti-cheating measure."})]})}),"2"===t&&Object(f.jsxs)(BA.Overlay,{children:[Object(f.jsx)("p",{children:"After the first high school only tournament, we will open a second chess tournament to the general public. This is how we will ensure the prize account for the students will always have funds. A percentage from the entry fees of the general public competition, will go towards the scholarship fund. An overly simplistic example would be the following. General public competition #1 entry fee is 10 ADA. 1 Ada will be diverted to scholarship fund, 9 ADA will go into general competition fund."}),Object(f.jsx)("br",{}),Object(f.jsx)("h5",{children:"Disclaimer: We are not a 501C entity or a non-for profit. We have operating costs. From hosting servers, NFT artists costs for generating NFTs, web domains, game developers, blockchain developers, web developers. Some funds from the open competition will go towards operating expenses."})]}),"3"===t&&Object(f.jsx)(BA.Overlay,{children:Object(f.jsxs)("ul",{children:[Object(f.jsx)("li",{children:"prize pool will be factored based on criteria such as number of competitors, sponsors, and fundraiser contributions. payments will be handled transparently on the blockchain."}),Object(f.jsx)("br",{}),Object(f.jsx)("li",{children:"competitors will pay a very small entry fee (roughly $20 in crypto) for a chance at the grand prize.The prize fund, and entry fee portions that will contribute to the grand prize will automatically go into a smart contract, programmed to pay to the winning student\u2019s university of choice."}),Object(f.jsx)("br",{}),Object(f.jsx)("li",{children:"The amount of funds from the entry fees contributing to the final prize will vary based on amount of competitors enrolled. We want the prize pool to make a substantial difference in terms of tuition, not just a portion of it. And not only for the first year of the competition but every year thereafter. Thus, we must calculate how much will go towards this year, vs next year\u2019s competition."})]})}),"4"===t&&Object(f.jsx)(BA.Overlay,{children:Object(f.jsx)("p",{children:"Tweeting and posting about this project can help increase the prize fund by raising awareness, and in turn potential participants. The ultimate goal of this project is to have as many tournaments throughout the year as possible, thus giving as many students as possible, a better chance at funding their higher education."})})]})]})})},EA=t.p+"static/media/discord.741e707e.png",QA=t.p+"static/media/twitter.35c0bca4.png";var vA,_A,NA={Container:j.b.div(OA||(OA=Object(p.a)(["\n    position: fixed;\n    top: 10rem;\n    right: 0;\n    background: #7A95D1;\n    z-index: 20;\n    width 6rem;\n    height: 12em;\n    display:flex;\n    flex-direction: column;\n    justify-content: space-around;\n    padding: .8em .2em .8em .6em;\n    border-radius: 20px 0px 0px 20px;\n    @media (max-width: 640px) {\n      top: 2rem;\n      right: 0;\n      width 4.5rem;\n      height: 10em;\n      border-radius: 20px 0px 0px 20px;\n      \n    }\n    "]))),Image:j.b.img(IA||(IA=Object(p.a)(["\n    width: 100%;\n  "])))},kA=function(){return Object(f.jsxs)(NA.Container,{children:[Object(f.jsx)("a",{href:"https://discord.gg/4D5f4RanSN",target:"_blank",rel:"noreferrer",children:Object(f.jsx)(NA.Image,{src:EA,alt:"discord logo"})}),Object(f.jsx)("a",{href:"https://twitter.com/Crypt0Scholars",target:"_blank",rel:"noreferrer",children:Object(f.jsx)(NA.Image,{src:QA,alt:"Twitter Logo"})})]})};var LA={Wrapper:j.b.main(vA||(vA=Object(p.a)(["\n    display: flex;\n    display: flex;\n    flex-direction: column; \n    padding-top: 6rem;\n    @media (max-width: 640px) {\n      padding-top: 0;\n    }\n    @media(min-width: 641px) {\n      width:90%;\n      margin: 0px 5%;\n    }\n  "])))},RA=Object(j.a)(_A||(_A=Object(p.a)(["\n  *,\n  *::before, \n  *::after {\n    margin: 0; \n    padding: 0;\n    box-sizing: inherit;\n  }\n\n  html {\n    font-size: 62.5%; /*1rem = 10px*/\n    box-sizing: border-box; \n  } \n  \n  ::-webkit-scrollbar {\n    width: 10px;\n  }\n  \n\n  ::-webkit-scrollbar-track {\n    background: #3f3f9054\n  }\n  \n  \n  ::-webkit-scrollbar-thumb {\n      background:  #7A95D1\n    }\n    \n    \n    ::-webkit-scrollbar-thumb:hover {\n      background: #0033AD;\n  }\n\n  body { \n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #eeeeee;\n    }\n  \n\n  .container {\n    height: 100vh;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background-color: #eeeeee;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  font-family: inherit;\n}\n\n"]))),TA=function(){return History.scrollRestoration?History.scrollRestoration="manual":window.onbeforeunload=function(){window.scrollTo(0,0)},Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(RA,{}),Object(f.jsx)(I,{}),Object(f.jsx)(kA,{}),Object(f.jsxs)(LA.Wrapper,{children:[Object(f.jsx)(b.Element,{name:"home",className:"element",children:Object(f.jsx)(oA,{})}),Object(f.jsx)(b.Element,{name:"roadmap",className:"element",children:Object(f.jsx)($,{})}),Object(f.jsx)(b.Element,{name:"nft",className:"element",children:Object(f.jsx)(CA,{})}),Object(f.jsx)(b.Element,{name:"moreinfo",className:"element",children:Object(f.jsx)(yA,{})})]})]})};u.a.render(Object(f.jsx)(m.a.StrictMode,{children:Object(f.jsx)(TA,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.d66cbc42.chunk.js.map