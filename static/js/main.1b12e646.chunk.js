(this.webpackJsonpreactgol=this.webpackJsonpreactgol||[]).push([[0],{38:function(e,t,a){e.exports=a(52)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){e.exports=a.p+"static/media/block.d1356152.svg"},46:function(e,t,a){e.exports=a.p+"static/media/beehive.d420bb3e.svg"},47:function(e,t,a){e.exports=a.p+"static/media/flower.c4bfc774.svg"},52:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),o=a(5),r=a.n(o),l=(a(43),a(30)),c=a(15),m=a(8),d=(a(44),a(67)),s=a(54),f=a(72),g=a(69),p=a(71),u=a(70);a(45),a(46),a(47);function h(){return{top:"".concat(50,"%"),left:"".concat(50,"%"),transform:"translate(-".concat(50,"%, -").concat(50,"%)")}}var y=Object(d.a)({root:{flexGrow:1,display:"flex",flexFlow:"column",alignItems:"center",justifyContent:"space-evenly",height:"fit-content"}}),w=[[0,1],[0,-1],[1,-1],[-1,1],[1,1],[-1,-1],[1,0],[-1,0]],v=function(){for(var e=[],t=0;t<25;t++)e.push(Array.from(Array(25),(function(){return 0})));return e};var b=function(){var e=Object(i.useState)((function(){return v()})),t=Object(c.a)(e,2),a=t[0],o=t[1],r=Object(i.useState)(!1),d=Object(c.a)(r,2),b=d[0],x=d[1],_=n.a.useState(0),k=Object(c.a)(_,2),E=(k[0],k[1],n.a.useState(h)),G=(Object(c.a)(E,1)[0],n.a.useState(!1)),C=Object(c.a)(G,2),j=C[0],O=C[1],B=y(),S=Object(i.useRef)(b);S.current=b;var A=n.a.createElement(s.a,{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},n.a.createElement("div",{style:{width:"80%",margin:"20px"}},n.a.createElement("h2",{id:"simple-modal-title"},"This is a no player game (NPC). The rules are as follows:")),n.a.createElement("div",{style:{width:"80%",margin:"20px"}},n.a.createElement("p",{id:"simple-modal-description"},n.a.createElement("ol",null,"1. Any live cell with two or three live neighbours survives."),n.a.createElement("ol",null,"2. Any dead cell with three live neighbours becomes a live cell."),n.a.createElement("ol",null,"3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.")))),R=function(e){"block"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[11][10]=1,e[10][9]=1,e[11][9]=1}))})),"beehive"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[10][11]=1,e[8][10]=1,e[8][11]=1,e[9][9]=1,e[9][12]=1}))})),"flower"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[10][8]=1,e[9][9]=1,e[11][9]=1}))})),"toad"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[10][11]=1,e[10][12]=1,e[9][11]=1,e[9][12]=1,e[9][13]=1}))})),"blinker"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[10][11]=1,e[10][12]=1}))})),"glider"==e&&o((function(e){return Object(m.a)(e,(function(e){e[5][5]=1,e[6][6]=1,e[7][6]=1,e[7][5]=1,e[7][4]=1}))})),"voyager"==e&&o((function(e){return Object(m.a)(e,(function(e){e[5][5]=1,e[6][4]=1,e[8][4]=1,e[5][6]=1,e[5][7]=1,e[5][8]=1,e[6][8]=1,e[7][8]=1,e[8][7]=1}))})),"vimana"==e&&o((function(e){return Object(m.a)(e,(function(e){e[10][10]=1,e[10][9]=1,e[10][11]=1,e[11][9]=1,e[11][11]=1,e[12][10]=1,e[12][9]=1,e[12][11]=1,e[13][10]=1,e[13][9]=1,e[13][11]=1,e[14][10]=1,e[14][9]=1,e[14][11]=1,e[15][10]=1,e[15][9]=1,e[15][11]=1,e[16][9]=1,e[16][11]=1,e[17][10]=1,e[17][9]=1,e[17][11]=1}))}))},T=Object(i.useCallback)((function(){S.current&&(o((function(e){return Object(m.a)(e,(function(t){for(var a=function(a){for(var i=function(i){var n=0;w.forEach((function(t){var o=Object(c.a)(t,2),r=o[0],l=o[1],m=a+r,d=i+l;m>=0&&m<25&&d>=0&&d<25&&(n+=e[m][d])})),n<2||n>3?t[a][i]=0:0===e[a][i]&&3===n&&(t[a][i]=1)},n=0;n<25;n++)i(n)},i=0;i<25;i++)a(i)}))})),setTimeout(T,100))}),[]);return n.a.createElement("div",{style:{width:"100%",display:"flex"}},n.a.createElement("div",null,n.a.createElement("div",{style:{textAlign:"center",border:"2px solid grey",margin:"20px",marginTop:"10px"}},n.a.createElement("h3",null,"Conway's Game of Life")),n.a.createElement("div",{style:{margin:"15px",display:"flex",width:"300px",justifyContent:"space-evenly",alignItems:"center"}},n.a.createElement(f.a,{onClick:function(){x(!b),b||(S.current=!0,T())},variant:"contained",color:b?"secondary":"primary"},b?"stop":"start"),n.a.createElement(f.a,{onClick:function(){for(var e=[],t=0;t<25;t++)e.push(Array.from(Array(25),(function(){return Math.random()>.7?1:0})));o(e)},variant:"contained",color:"primary"},"random"),n.a.createElement(f.a,{onClick:function(){o(v())},variant:"contained",color:"primary"},"clear")),n.a.createElement(g.a,{style:{width:"300px",display:"flex",justifyContent:"center",marginLeft:"20px"}},n.a.createElement("div",{style:{display:"grid",gridTemplateColumns:"repeat(".concat(25,", 12px)")}},a.map((function(e,t){return e.map((function(e,i){return n.a.createElement("div",{key:"".concat(t,"-").concat(i),onClick:function(){var e=Object(m.a)(a,(function(e){e[t][i]=a[t][i]?0:1}));o(e)},style:{width:10,height:10,backgroundColor:a[t][i]?"pink":void 0,border:"solid 1px black"}})}))})))),n.a.createElement("div",{style:{margin:"15px",display:"flex",justifyContent:"space-evenly",alignItems:"center"}},n.a.createElement(f.a,{color:"default",variant:"contained",onClick:function(){O(!0)}},"Rules of the Game"),n.a.createElement(p.a,{open:j,onClose:function(){O(!1)},"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description"},A))),n.a.createElement("div",{style:{display:"flex",width:"60%",justifyContent:"center"}},n.a.createElement("div",{style:{width:"250px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px",marginTop:"20px"}},n.a.createElement(s.a,{className:B.root},n.a.createElement(u.a,{style:{textAlign:"center"}},n.a.createElement("h3",{style:{color:"rgba(10,10,10,1)"}},"Still Lifes")),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("block")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Block"),n.a.createElement("img",{alt:"Game of life block with border.svg",src:"//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/66px-Game_of_life_block_with_border.svg.png",decoding:"async",width:"66",height:"66",srcset:"//upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/99px-Game_of_life_block_with_border.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/9/96/Game_of_life_block_with_border.svg/132px-Game_of_life_block_with_border.svg.png 2x","data-file-width":"66","data-file-height":"66"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("beehive")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Beehive"),n.a.createElement("img",{alt:"Game of life beehive.svg",src:"//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/98px-Game_of_life_beehive.svg.png",decoding:"async",width:"98",height:"82",srcset:"//upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/147px-Game_of_life_beehive.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/6/67/Game_of_life_beehive.svg/196px-Game_of_life_beehive.svg.png 2x","data-file-width":"98","data-file-height":"82"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("flower")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Flower"),n.a.createElement("img",{alt:"Game of life flower.svg",src:"//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/82px-Game_of_life_flower.svg.png",decoding:"async",width:"82",height:"82",srcset:"//upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/123px-Game_of_life_flower.svg.png 1.5x, //upload.wikimedia.org/wikipedia/commons/thumb/3/31/Game_of_life_flower.svg/164px-Game_of_life_flower.svg.png 2x","data-file-width":"82","data-file-height":"82"})))),n.a.createElement("div",{style:{position:"fixed",width:"100%",textAlign:"center",display:"flex",justifyContent:"center"}},n.a.createElement("h2",{style:{border:"2px solid grey",backgroundColor:"#4444",width:"30%"}},"Select a player...")),n.a.createElement("div",{style:{width:"250px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px",marginTop:"60px"}},n.a.createElement(s.a,{className:B.root},n.a.createElement(u.a,{style:{textAlign:"center"}},n.a.createElement("h3",{style:{color:"rgba(10,10,10,1)"}},"Oscillators")),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("toad")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Toad"),n.a.createElement("img",{alt:"Game of life toad.gif",src:"//upload.wikimedia.org/wikipedia/commons/1/12/Game_of_life_toad.gif",decoding:"async",width:"98",height:"98","data-file-width":"98","data-file-height":"98"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("beehive")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Beehive"),n.a.createElement("img",{alt:"Game of life beacon.gif",src:"//upload.wikimedia.org/wikipedia/commons/1/1c/Game_of_life_beacon.gif",decoding:"async",width:"98",height:"98","data-file-width":"98","data-file-height":"98"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("blinker")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Blinker"),n.a.createElement("img",{alt:"Game of life blinker.gif",src:"//upload.wikimedia.org/wikipedia/commons/9/95/Game_of_life_blinker.gif",decoding:"async",width:"82",height:"82","data-file-width":"82","data-file-height":"82"})))),n.a.createElement("div",{style:Object(l.a)({width:"250px",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:"50px",marginTop:"20px"},"marginTop","70px")},n.a.createElement(s.a,{className:B.root},n.a.createElement(u.a,{style:{textAlign:"center"}},n.a.createElement("h3",{style:{color:"rgba(10,10,10,1)"}},"Spaceships")),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("glider")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Glider"),n.a.createElement("img",{alt:"Game of life animated glider.gif",src:"//upload.wikimedia.org/wikipedia/commons/f/f2/Game_of_life_animated_glider.gif",decoding:"async",width:"84",height:"84","data-file-width":"84","data-file-height":"84"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("voyager")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Voyager"),n.a.createElement("img",{alt:"Game of life animated LWSS.gif",src:"//upload.wikimedia.org/wikipedia/commons/3/37/Game_of_life_animated_LWSS.gif",decoding:"async",width:"115",height:"84","data-file-width":"115","data-file-height":"84"})),n.a.createElement(f.a,{style:{width:"200px",marginBottom:"10px"},onClick:function(){return R("vimana")},variant:"outlined",color:"primary"},n.a.createElement("h4",{style:{marginRight:"20px"}},"Vimana"),n.a.createElement("img",{alt:"I-Column.gif",src:"//upload.wikimedia.org/wikipedia/commons/f/fb/I-Column.gif",decoding:"async",width:"89",height:"145","data-file-width":"89","data-file-height":"145"}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.1b12e646.chunk.js.map