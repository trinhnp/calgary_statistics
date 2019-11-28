(this.webpackJsonpcalgary_statistics=this.webpackJsonpcalgary_statistics||[]).push([[0],{14:function(e,t,n){e.exports=n(21)},19:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(11),i=n.n(o),c=(n(19),n(2)),l=n(3),m=n(5),y=n(4),p=n(6),u=(n(20),n(0)),d=[{year:2009,population:1107192},{year:2010,population:1123699},{year:2011,population:1141585},{year:2012,population:1120225},{year:2013,population:1149552},{year:2014,population:1242290},{year:2015,population:1261596},{year:2016,population:1278982},{year:2017,population:1292133},{year:2018,population:1311833}],s=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,o=320-e-n,i=u.d(","),c=u.j("#population_data").append("svg").attr("width",r+a+t).attr("height",o+e+n).append("g").attr("transform","translate("+a+","+e+")"),l=u.g().range([0,r]).domain(d.map((function(e){return e.year}))).padding(.2);c.append("g").attr("transform","translate(0,"+o+")").call(u.a(l)).selectAll("text").attr("transform","translate(-10,0)").style("text-anchor","middle");var m=u.h().domain([0,15e5]).range([o,0]);c.append("g").call(u.b(m)),c.selectAll("mybar").data(d).enter().append("rect").attr("x",(function(e){return l(e.year)})).attr("y",(function(e){return m(e.population)})).attr("width",l.bandwidth()/4*3).attr("height",(function(e){return o-m(e.population)})).attr("fill","green").append("title").text((function(e){return"Population : "+i(e.population)})),c.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Total Population")}},{key:"render",value:function(){return r.a.createElement("div",{id:"population_data"})}}]),t}(r.a.Component),h=[{year:2e3,income:60400},{year:2001,income:64700},{year:2002,income:66200},{year:2003,income:67200},{year:2004,income:70500},{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}],f=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,o=320-e-n,i=u.d(","),c=u.j("#income_data").append("svg").attr("width",r+a+t).attr("height",o+e+n).append("g").attr("transform","translate("+a+","+e+")"),l=u.i().domain(["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]).range([0,r]);c.append("g").attr("transform","translate(0,"+o+")").call(u.a(l));var m=u.h().domain([0,11e4]).range([o,0]);c.append("g").call(u.b(m)),c.append("path").datum(h).attr("fill","none").attr("stroke","green").attr("stroke-width",1.5).attr("d",u.e().x((function(e){return l(e.year)})).y((function(e){return m(e.income)}))),c.append("g").selectAll("dot").data(h).attr("id","dotIncome").enter().append("circle").attr("cx",(function(e){return l(e.year)})).attr("cy",(function(e){return m(e.income)})).attr("r",5).attr("fill","green").append("title").attr("data-html","true").html((function(e){return"Median Income ("+e.year+"): $"+i(e.income)})),c.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Median Household Income")}},{key:"render",value:function(){return r.a.createElement("div",{id:"income_data"})}}]),t}(r.a.Component),x=[{name:"Calgary",show:!0,color:"green",currentIncome:102060,height:102060,history:[{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}]},{name:"Edmonton",show:!0,color:"blue",currentIncome:93600,height:93e3,history:[{year:2005,income:66400},{year:2006,income:72800},{year:2007,income:76720},{year:2008,income:81230},{year:2009,income:79190},{year:2010,income:80590},{year:2011,income:84140},{year:2012,income:88010},{year:2013,income:90300},{year:2014,income:92930},{year:2015,income:93640},{year:2016,income:91160},{year:2017,income:93600}]},{name:"Canada",show:!0,color:"red",currentIncome:84950,height:85e3,history:[{year:2005,income:60600},{year:2006,income:63600},{year:2007,income:66550},{year:2008,income:68860},{year:2009,income:68410},{year:2010,income:69860},{year:2011,income:72240},{year:2012,income:74540},{year:2013,income:76550},{year:2014,income:78870},{year:2015,income:80940},{year:2016,income:82110},{year:2017,income:84950}]}],g=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,o=320-e-n,i=u.j("#income_data").append("svg").attr("width",r+a+t).attr("height",o+e+n).append("g").attr("transform","translate("+a+","+e+")"),c=(u.e().x((function(e){return y(e.year)})).y((function(e){return p(e.income)})),u.d(",")),l=u.j("#tooltip"),m=i.append("line");i.append("text").attr("x",200).attr("y",15).attr("text-anchor","begin").style("font-size","20px").text("Historical Median Household Income in Different Cities");var y=u.h().domain([2005,2017]).range([0,r-50]);i.append("g").attr("transform","translate(0,"+o+")").call(u.a(y));var p=u.h().domain([5e4,12e4]).range([o,20]);i.append("g").call(u.b(p)),i.selectAll().data(x).enter().append("path").attr("fill","none").attr("stroke",(function(e){return e.color})).attr("stroke-width",2).datum((function(e){return e.history})).attr("d",u.e().x((function(e){return y(e.year)})).y((function(e){return p(e.income)}))),i.selectAll().data(x).enter().append("text").html((function(e){return e.name})).attr("fill",(function(e){return e.color})).attr("alignment-baseline","middle").attr("x",r).attr("dx","-3em").attr("y",(function(e){return p(e.height)}));i.append("rect").attr("width",r).attr("height",o).attr("opacity",0).on("mousemove",(function(){var e=Math.floor(y.invert(u.f(this)[0]));m.attr("stroke","grey").attr("x1",y(e)).attr("x2",y(e)).attr("y1",0).attr("y2",o),l.html(e).style("display","block").style("left",u.c.pageX+20+"px").style("top",u.c.pageY-20+"px").selectAll().data(x).enter().append("div").style("color",(function(e){return e.color})).html((function(t){return t.name+": $"+c(t.history.find((function(t){return t.year===e})).income)}))})).on("mouseout",(function(){l&&l.style("display","none");m&&m.attr("stroke","none")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tooltip",style:{position:"absolute",backgroundColor:"lightgray",padding:"5px"}}),r.a.createElement("div",{id:"income_data"}))}}]),t}(r.a.Component),v=[{year:2001,unemployment:4.7,crime:69037},{year:2002,unemployment:5.73,crime:69850},{year:2003,unemployment:5.35,crime:71287},{year:2004,unemployment:5.02,crime:69667},{year:2005,unemployment:3.92,crime:69972},{year:2006,unemployment:3.42,crime:70961},{year:2007,unemployment:3.36,crime:67232},{year:2008,unemployment:3.34,crime:63787},{year:2009,unemployment:6.46,crime:61815},{year:2010,unemployment:6.91,crime:59636},{year:2011,unemployment:5.9,crime:55168},{year:2012,unemployment:4.92,crime:53461},{year:2013,unemployment:4.85,crime:53591},{year:2014,unemployment:5.03,crime:54572},{year:2015,unemployment:6.16,crime:68521},{year:2016,unemployment:9.11,crime:72505},{year:2017,unemployment:8.71,crime:75238}],b=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,o=320-e-n,i=(u.d(","),u.j("#unemployment_crime_data").append("svg").attr("width",r+a+t).attr("height",o+e+n).append("g").attr("transform","translate("+a+","+e+")")),c=u.h().domain([5e4,8e4]).range([0,r]);i.append("g").attr("transform","translate(0,"+o+")").call(u.a(c));var l=u.h().domain([0,10]).range([o,0]);i.append("g").call(u.b(l)),i.append("g").selectAll("dot").data(v).enter().append("circle").attr("cx",(function(e){return c(e.crime)})).attr("cy",(function(e){return l(e.unemployment)})).attr("r",7).style("fill","blue").style("opacity",.7).style("stroke","white").append("title").attr("data-html","true").html((function(e){return"Unemployment rate : "+e.unemployment+", Total recorded crime: "+e.crime+" ("+e.year+")"})),i.append("text").attr("transform","translate("+r/2+" ,"+(o+e+20)+")").style("text-anchor","middle").style("font-size","12px").text("Total reported crimes"),i.append("text").attr("transform","rotate(-90)").attr("y",0-a).attr("x",0-o/2).attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text("Unemployment rate"),i.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Unemployment rate Vs Crime"),i.append("text").attr("x",200).attr("y",40).attr("text-anchor","middle").style("font-size","15px").style("font-style","italic").text("Correlation coefficient: 0.20")}},{key:"render",value:function(){return r.a.createElement("div",{id:"unemployment_crime_data"})}}]),t}(r.a.Component),j=[{year:2001,unemployment:4.7,income:64700},{year:2002,unemployment:5.73,income:66200},{year:2003,unemployment:5.35,income:67200},{year:2004,unemployment:5.02,income:70500},{year:2005,unemployment:3.92,income:74700},{year:2006,unemployment:3.42,income:82600},{year:2007,unemployment:3.36,income:87120},{year:2008,unemployment:3.34,income:90630},{year:2009,unemployment:6.46,income:87470},{year:2010,unemployment:6.91,income:88400},{year:2011,unemployment:5.9,income:92160},{year:2012,unemployment:4.92,income:96990},{year:2013,unemployment:4.85,income:99850},{year:2014,unemployment:5.03,income:102890},{year:2015,unemployment:6.16,income:102700},{year:2016,unemployment:9.11,income:98620},{year:2017,unemployment:8.71,income:100320}],w=[{x:65e3,y:4.3839},{x:105e3,y:5.9839}],k=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,o=320-e-n,i=u.d(","),c=u.j("#unemployment_income_data").append("svg").attr("width",r+a+t).attr("height",o+e+n).append("g").attr("transform","translate("+a+","+e+")"),l=u.h().domain([6e4,11e4]).range([0,r]);c.append("g").attr("transform","translate(0,"+o+")").call(u.a(l));var m=u.h().domain([0,10]).range([o,0]);c.append("g").call(u.b(m)),c.append("g").selectAll("dot").data(j).enter().append("circle").attr("cx",(function(e){return l(e.income)})).attr("cy",(function(e){return m(e.unemployment)})).attr("r",7).style("fill","blue").style("opacity",.7).style("stroke","white").append("title").attr("data-html","true").html((function(e){return"Unemployment rate : "+e.unemployment+", Median Income: $"+i(e.income)+" ("+e.year+")"})),c.append("path").datum(w).attr("fill","none").attr("stroke","blue").style("stroke-dasharray","3, 3").attr("stroke-width",1.5).attr("d",u.e().x((function(e){return l(e.x)})).y((function(e){return m(e.y)}))),c.append("text").attr("x",670).attr("y",85).attr("text-anchor","middle").style("font-size","10px").text("eq: y = 4E-05x+1.7839"),c.append("text").attr("transform","translate("+r/2+" ,"+(o+e+20)+")").style("text-anchor","middle").style("font-size","12px").text("Median Income"),c.append("text").attr("transform","rotate(-90)").attr("y",0-a).attr("x",0-o/2).attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text("Unemployment rate"),c.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Unemployment rate Vs Median Income"),c.append("text").attr("x",200).attr("y",40).attr("text-anchor","middle").style("font-size","15px").style("font-style","italic").text("Correlation coefficient: 0.48")}},{key:"render",value:function(){return r.a.createElement("div",{id:"unemployment_income_data"})}}]),t}(r.a.Component),O=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={width:700,height:500,id:"root"},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("h1",null," Statistics Calgary ")),r.a.createElement("div",{className:"Text"},r.a.createElement("p",null," Mouse over the graph for more detail"),r.a.createElement("p",{style:{fontStyle:"italic"}}," Data source: Alberta Open Government"),r.a.createElement("p",null," ",r.a.createElement("br",null))),r.a.createElement("div",null,r.a.createElement(s,null)),r.a.createElement("div",null,r.a.createElement(f,null)),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(b,null)),r.a.createElement("div",null,r.a.createElement(k,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.7e55419e.chunk.js.map