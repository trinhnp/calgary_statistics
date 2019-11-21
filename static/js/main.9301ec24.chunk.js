(this.webpackJsonpcalgary_statistics=this.webpackJsonpcalgary_statistics||[]).push([[0],{14:function(e,t,a){e.exports=a(21)},19:function(e,t,a){},20:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),i=a.n(o),c=(a(19),a(3)),l=a(4),m=a(6),u=a(5),p=a(7),y=(a(20),a(1)),d=[{year:2009,population:1107192},{year:2010,population:1123699},{year:2011,population:1141585},{year:2012,population:1120225},{year:2013,population:1149552},{year:2014,population:1242290},{year:2015,population:1261596},{year:2016,population:1278982},{year:2017,population:1292133},{year:2018,population:1311833}],s=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,a=70,n=60,r=800-n-t,o=320-e-a,i=y.d(","),c=y.j("#population_data").append("svg").attr("width",r+n+t).attr("height",o+e+a).append("g").attr("transform","translate("+n+","+e+")"),l=y.g().range([0,r]).domain(d.map((function(e){return e.year}))).padding(.2);c.append("g").attr("transform","translate(0,"+o+")").call(y.a(l)).selectAll("text").attr("transform","translate(-10,0)").style("text-anchor","middle");var m=y.h().domain([0,15e5]).range([o,0]);c.append("g").call(y.b(m)),c.selectAll("mybar").data(d).enter().append("rect").attr("x",(function(e){return l(e.year)})).attr("y",(function(e){return m(e.population)})).attr("width",l.bandwidth()/4*3).attr("height",(function(e){return o-m(e.population)})).attr("fill","green").append("title").text((function(e){return"Population : "+i(e.population)})),c.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Total Population")}},{key:"render",value:function(){return r.a.createElement("div",{id:"population_data"})}}]),t}(r.a.Component),h=[{year:2e3,income:60400},{year:2001,income:64700},{year:2002,income:66200},{year:2003,income:67200},{year:2004,income:70500},{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}],f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,a=70,n=60,r=800-n-t,o=320-e-a,i=y.d(","),c=y.j("#income_data").append("svg").attr("width",r+n+t).attr("height",o+e+a).append("g").attr("transform","translate("+n+","+e+")"),l=y.i().domain(["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]).range([0,r]);c.append("g").attr("transform","translate(0,"+o+")").call(y.a(l));var m=y.h().domain([0,11e4]).range([o,0]);c.append("g").call(y.b(m)),c.append("path").datum(h).attr("fill","none").attr("stroke","green").attr("stroke-width",1.5).attr("d",y.e().x((function(e){return l(e.year)})).y((function(e){return m(e.income)}))),c.append("g").selectAll("dot").data(h).attr("id","dotIncome").enter().append("circle").attr("cx",(function(e){return l(e.year)})).attr("cy",(function(e){return m(e.income)})).attr("r",5).attr("fill","green").append("title").attr("data-html","true").html((function(e){return"Median Income ("+e.year+"): $"+i(e.income)})),c.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Median Household Income")}},{key:"render",value:function(){return r.a.createElement("div",{id:"income_data"})}}]),t}(r.a.Component),g=[{name:"Calgary",show:!0,color:"red",currentIncome:102060,height:102060,history:[{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}]},{name:"Edmonton",show:!0,color:"blue",currentIncome:93600,height:93e3,history:[{year:2005,income:66400},{year:2006,income:72800},{year:2007,income:76720},{year:2008,income:81230},{year:2009,income:79190},{year:2010,income:80590},{year:2011,income:84140},{year:2012,income:88010},{year:2013,income:90300},{year:2014,income:92930},{year:2015,income:93640},{year:2016,income:91160},{year:2017,income:93600}]},{name:"Canada",show:!0,color:"green",currentIncome:84950,height:85e3,history:[{year:2005,income:60600},{year:2006,income:63600},{year:2007,income:66550},{year:2008,income:68860},{year:2009,income:68410},{year:2010,income:69860},{year:2011,income:72240},{year:2012,income:74540},{year:2013,income:76550},{year:2014,income:78870},{year:2015,income:80940},{year:2016,income:82110},{year:2017,income:84950}]}],v=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,a=70,n=60,r=800-n-t,o=320-e-a,i=y.j("#income_data").append("svg").attr("width",r+n+t).attr("height",o+e+a).append("g").attr("transform","translate("+n+","+e+")"),c=(y.e().x((function(e){return u(e.year)})).y((function(e){return p(e.income)})),y.d(",")),l=y.j("#tooltip"),m=i.append("line");i.append("text").attr("x",200).attr("y",15).attr("text-anchor","begin").style("font-size","20px").text("Historical Median Household Income in Different Cities");var u=y.h().domain([2005,2017]).range([0,r-50]);i.append("g").attr("transform","translate(0,"+o+")").call(y.a(u));var p=y.h().domain([5e4,12e4]).range([o,20]);i.append("g").call(y.b(p)),i.selectAll().data(g).enter().append("path").attr("fill","none").attr("stroke",(function(e){return e.color})).attr("stroke-width",2).datum((function(e){return e.history})).attr("d",y.e().x((function(e){return u(e.year)})).y((function(e){return p(e.income)}))),i.selectAll().data(g).enter().append("text").html((function(e){return e.name})).attr("fill",(function(e){return e.color})).attr("alignment-baseline","middle").attr("x",r).attr("dx","-3em").attr("y",(function(e){return p(e.height)}));i.append("rect").attr("width",r).attr("height",o).attr("opacity",0).on("mousemove",(function(){var e=Math.floor(u.invert(y.f(this)[0]));m.attr("stroke","grey").attr("x1",u(e)).attr("x2",u(e)).attr("y1",0).attr("y2",o),l.html(e).style("display","block").style("left",y.c.pageX+20+"px").style("top",y.c.pageY-20+"px").selectAll().data(g).enter().append("div").style("color",(function(e){return e.color})).html((function(t){return t.name+": $"+c(t.history.find((function(t){return t.year===e})).income)}))})).on("mouseout",(function(){l&&l.style("display","none");m&&m.attr("stroke","none")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tooltip",style:{position:"absolute",backgroundColor:"lightgray",padding:"5px"}}),r.a.createElement("div",{id:"income_data"}))}}]),t}(r.a.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={width:700,height:500,id:"root"},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("h1",null," Statistics Calgary ")),r.a.createElement("div",{className:"Text"},r.a.createElement("p",null," Mouse over the graph for more detail"),r.a.createElement("p",{style:{fontStyle:"italic"}}," Data source: Alberta Open Government"),r.a.createElement("p",null," ",r.a.createElement("br",null))),r.a.createElement("div",null,r.a.createElement(s,null)),r.a.createElement("div",null,r.a.createElement(f,null)),r.a.createElement("div",null,r.a.createElement(v,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.9301ec24.chunk.js.map