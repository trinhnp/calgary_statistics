(this.webpackJsonpcalgary_statistics=this.webpackJsonpcalgary_statistics||[]).push([[0],{55:function(e,t,n){e.exports=n(62)},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(40),o=n.n(i),l=(n(60),n(2)),c=n(3),m=n(5),y=n(4),u=n(6),d=(n(61),n(0)),p=[{year:2009,population:1107192},{year:2010,population:1123699},{year:2011,population:1141585},{year:2012,population:1120225},{year:2013,population:1149552},{year:2014,population:1242290},{year:2015,population:1261596},{year:2016,population:1278982},{year:2017,population:1292133},{year:2018,population:1311833}],s=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=d.g(","),l=d.r("#population_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")"),c=d.m().range([0,r]).domain(p.map((function(e){return e.year}))).padding(.2);l.append("g").attr("transform","translate(0,"+i+")").call(d.c(c)).selectAll("text").attr("transform","translate(-10,0)").style("text-anchor","middle");var m=d.n().domain([0,15e5]).range([i,0]);l.append("g").call(d.d(m)),l.selectAll("mybar").data(p).enter().append("rect").attr("x",(function(e){return c(e.year)})).attr("y",(function(e){return m(e.population)})).attr("width",c.bandwidth()/4*3).attr("height",(function(e){return i-m(e.population)})).attr("fill","green").append("title").text((function(e){return"Population : "+o(e.population)})),l.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Total Population")}},{key:"render",value:function(){return r.a.createElement("div",{id:"population_data"})}}]),t}(r.a.Component),h=[{year:2e3,income:60400},{year:2001,income:64700},{year:2002,income:66200},{year:2003,income:67200},{year:2004,income:70500},{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}],f=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=d.g(","),l=d.r("#income_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")"),c=d.p().domain(["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017"]).range([0,r]);l.append("g").attr("transform","translate(0,"+i+")").call(d.c(c));var m=d.n().domain([0,11e4]).range([i,0]);l.append("g").call(d.d(m)),l.append("path").datum(h).attr("fill","none").attr("stroke","green").attr("stroke-width",1.5).attr("d",d.h().x((function(e){return c(e.year)})).y((function(e){return m(e.income)}))),l.append("g").selectAll("dot").data(h).attr("id","dotIncome").enter().append("circle").attr("cx",(function(e){return c(e.year)})).attr("cy",(function(e){return m(e.income)})).attr("r",5).attr("fill","green").append("title").attr("data-html","true").html((function(e){return"Median Income ("+e.year+"): $"+o(e.income)})),l.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Historical Median Household Income")}},{key:"render",value:function(){return r.a.createElement("div",{id:"income_data"})}}]),t}(r.a.Component),x=[{name:"Calgary",show:!0,color:"green",currentIncome:102060,height:102060,history:[{year:2005,income:74700},{year:2006,income:82600},{year:2007,income:87120},{year:2008,income:90630},{year:2009,income:87470},{year:2010,income:88400},{year:2011,income:92160},{year:2012,income:96990},{year:2013,income:99850},{year:2014,income:102890},{year:2015,income:102700},{year:2016,income:98620},{year:2017,income:100320}]},{name:"Edmonton",show:!0,color:"blue",currentIncome:93600,height:93e3,history:[{year:2005,income:66400},{year:2006,income:72800},{year:2007,income:76720},{year:2008,income:81230},{year:2009,income:79190},{year:2010,income:80590},{year:2011,income:84140},{year:2012,income:88010},{year:2013,income:90300},{year:2014,income:92930},{year:2015,income:93640},{year:2016,income:91160},{year:2017,income:93600}]},{name:"Canada",show:!0,color:"red",currentIncome:84950,height:85e3,history:[{year:2005,income:60600},{year:2006,income:63600},{year:2007,income:66550},{year:2008,income:68860},{year:2009,income:68410},{year:2010,income:69860},{year:2011,income:72240},{year:2012,income:74540},{year:2013,income:76550},{year:2014,income:78870},{year:2015,income:80940},{year:2016,income:82110},{year:2017,income:84950}]}],g=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=d.r("#income_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")"),l=(d.h().x((function(e){return y(e.year)})).y((function(e){return u(e.income)})),d.g(",")),c=d.r("#tooltip"),m=o.append("line");o.append("text").attr("x",200).attr("y",15).attr("text-anchor","begin").style("font-size","20px").text("Historical Median Household Income in Different Cities");var y=d.n().domain([2005,2017]).range([0,r-50]);o.append("g").attr("transform","translate(0,"+i+")").call(d.c(y));var u=d.n().domain([5e4,12e4]).range([i,20]);o.append("g").call(d.d(u)),o.selectAll().data(x).enter().append("path").attr("fill","none").attr("stroke",(function(e){return e.color})).attr("stroke-width",2).datum((function(e){return e.history})).attr("d",d.h().x((function(e){return y(e.year)})).y((function(e){return u(e.income)}))),o.selectAll().data(x).enter().append("text").html((function(e){return e.name})).attr("fill",(function(e){return e.color})).attr("alignment-baseline","middle").attr("x",r).attr("dx","-3em").attr("y",(function(e){return u(e.height)}));o.append("rect").attr("width",r).attr("height",i).attr("opacity",0).on("mousemove",(function(){var e=Math.floor(y.invert(d.i(this)[0]));m.attr("stroke","grey").attr("x1",y(e)).attr("x2",y(e)).attr("y1",0).attr("y2",i),c.html(e).style("display","block").style("left",d.f.pageX+20+"px").style("top",d.f.pageY-20+"px").selectAll().data(x).enter().append("div").style("color",(function(e){return e.color})).html((function(t){return t.name+": $"+l(t.history.find((function(t){return t.year===e})).income)}))})).on("mouseout",(function(){c&&c.style("display","none");m&&m.attr("stroke","none")}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tooltip",style:{position:"absolute",backgroundColor:"lightgray",padding:"5px"}}),r.a.createElement("div",{id:"income_data"}))}}]),t}(r.a.Component),v=[{year:2001,unemployment:4.7,crime:69037},{year:2002,unemployment:5.73,crime:69850},{year:2003,unemployment:5.35,crime:71287},{year:2004,unemployment:5.02,crime:69667},{year:2005,unemployment:3.92,crime:69972},{year:2006,unemployment:3.42,crime:70961},{year:2007,unemployment:3.36,crime:67232},{year:2008,unemployment:3.34,crime:63787},{year:2009,unemployment:6.46,crime:61815},{year:2010,unemployment:6.91,crime:59636},{year:2011,unemployment:5.9,crime:55168},{year:2012,unemployment:4.92,crime:53461},{year:2013,unemployment:4.85,crime:53591},{year:2014,unemployment:5.03,crime:54572},{year:2015,unemployment:6.16,crime:68521},{year:2016,unemployment:9.11,crime:72505},{year:2017,unemployment:8.71,crime:75238}],b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=(d.g(","),d.r("#unemployment_crime_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")")),l=d.n().domain([5e4,8e4]).range([0,r]);o.append("g").attr("transform","translate(0,"+i+")").call(d.c(l));var c=d.n().domain([0,10]).range([i,0]);o.append("g").call(d.d(c)),o.append("g").selectAll("dot").data(v).enter().append("circle").attr("cx",(function(e){return l(e.crime)})).attr("cy",(function(e){return c(e.unemployment)})).attr("r",7).style("fill","blue").style("opacity",.7).style("stroke","white").append("title").attr("data-html","true").html((function(e){return"Unemployment rate : "+e.unemployment+", Total recorded crime: "+e.crime+" ("+e.year+")"})),o.append("text").attr("transform","translate("+r/2+" ,"+(i+e+20)+")").style("text-anchor","middle").style("font-size","12px").text("Total reported crimes"),o.append("text").attr("transform","rotate(-90)").attr("y",0-a).attr("x",0-i/2).attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text("Unemployment rate"),o.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Relationship between Unemployment rate and Crime"),o.append("text").attr("x",200).attr("y",40).attr("text-anchor","middle").style("font-size","15px").style("font-style","italic").text("Correlation coefficient: 0.20")}},{key:"render",value:function(){return r.a.createElement("div",{id:"unemployment_crime_data"})}}]),t}(r.a.Component),k=[{year:2001,unemployment:4.7,income:64700},{year:2002,unemployment:5.73,income:66200},{year:2003,unemployment:5.35,income:67200},{year:2004,unemployment:5.02,income:70500},{year:2005,unemployment:3.92,income:74700},{year:2006,unemployment:3.42,income:82600},{year:2007,unemployment:3.36,income:87120},{year:2008,unemployment:3.34,income:90630},{year:2009,unemployment:6.46,income:87470},{year:2010,unemployment:6.91,income:88400},{year:2011,unemployment:5.9,income:92160},{year:2012,unemployment:4.92,income:96990},{year:2013,unemployment:4.85,income:99850},{year:2014,unemployment:5.03,income:102890},{year:2015,unemployment:6.16,income:102700},{year:2016,unemployment:9.11,income:98620},{year:2017,unemployment:8.71,income:100320}],w=[{x:65e3,y:4.3839},{x:105e3,y:5.9839}],O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=d.g(","),l=d.r("#unemployment_income_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")"),c=d.n().domain([6e4,11e4]).range([0,r]);l.append("g").attr("transform","translate(0,"+i+")").call(d.c(c));var m=d.n().domain([0,10]).range([i,0]);l.append("g").call(d.d(m)),l.append("g").selectAll("dot").data(k).enter().append("circle").attr("cx",(function(e){return c(e.income)})).attr("cy",(function(e){return m(e.unemployment)})).attr("r",7).style("fill","blue").style("opacity",.7).style("stroke","white").append("title").attr("data-html","true").html((function(e){return"Unemployment rate : "+e.unemployment+", Median Income: $"+o(e.income)+" ("+e.year+")"})),l.append("path").datum(w).attr("fill","none").attr("stroke","blue").style("stroke-dasharray","3, 3").attr("stroke-width",1.5).attr("d",d.h().x((function(e){return c(e.x)})).y((function(e){return m(e.y)}))),l.append("text").attr("x",670).attr("y",85).attr("text-anchor","middle").style("font-size","10px").text("eq: y = 4E-05x+1.7839"),l.append("text").attr("transform","translate("+r/2+" ,"+(i+e+20)+")").style("text-anchor","middle").style("font-size","12px").text("Median Income"),l.append("text").attr("transform","rotate(-90)").attr("y",0-a).attr("x",0-i/2).attr("dy","1em").style("text-anchor","middle").style("font-size","12px").text("Unemployment rate"),l.append("text").attr("x",200).attr("y",15).attr("text-anchor","middle").style("font-size","20px").text("Relationship between Unemployment rate and Median Income"),l.append("text").attr("x",200).attr("y",40).attr("text-anchor","middle").style("font-size","15px").style("font-style","italic").text("Correlation coefficient: 0.48")}},{key:"render",value:function(){return r.a.createElement("div",{id:"unemployment_income_data"})}}]),t}(r.a.Component),j=[{Children:18.32,Youth:11.97,Adult:58.54,Senior:11.17},{year:2011,children:17.91,youth:13.14,adult:59,senior:9.95},{year:2006,children:18.45,youth:14.39,adult:57.79,senior:9.38}],E=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=Math.min(450,450)/2-40,t=d.r("#age_group_data").append("svg").attr("width",450).attr("height",450).append("g").attr("transform","translate(225,225)"),n=d.o().domain(j).range(d.q),a=d.k().value((function(e){return e.value}))(d.e(j[0])),r=d.a().innerRadius(0).outerRadius(e);t.selectAll("mySlices").data(a).enter().append("path").attr("d",r).attr("fill",(function(e){return n(e.data.key)})).attr("stroke","black").style("stroke-width","2px").style("opacity",.7),t.append("text").attr("x",-100).attr("y",-200).attr("text-anchor","begin").style("font-size","20px").text("Age structure in Calgary in 2016"),t.selectAll("mySlices").data(a).enter().append("text").text((function(e){return e.data.key})).attr("transform",(function(e){return"translate("+r.centroid(e)+")"})).style("text-anchor","middle").style("font-size",17)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tooltip",style:{position:"absolute",backgroundColor:"lightgray",padding:"5px"}}),r.a.createElement("div",{id:"age_group_data"}))}}]),t}(r.a.Component),C=[{sex:"Female",density:433},{sex:"Female",density:440},{sex:"Female",density:447},{sex:"Female",density:585},{sex:"Female",density:661},{sex:"Female",density:680},{sex:"Female",density:754},{sex:"Female",density:826},{sex:"Female",density:959},{sex:"Female",density:996},{sex:"Female",density:1095},{sex:"Female",density:1264},{sex:"Female",density:1328},{sex:"Female",density:2002},{sex:"Male",density:438},{sex:"Male",density:440},{sex:"Male",density:462},{sex:"Male",density:584},{sex:"Male",density:682},{sex:"Male",density:724},{sex:"Male",density:738},{sex:"Male",density:815},{sex:"Male",density:947},{sex:"Male",density:970},{sex:"Male",density:1042},{sex:"Male",density:1315},{sex:"Male",density:1398},{sex:"Male",density:2122}],M=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.drawChart()}},{key:"drawChart",value:function(){var e=30,t=30,n=70,a=60,r=800-a-t,i=320-e-n,o=d.r("#income_data").append("svg").attr("width",r+a+t).attr("height",i+e+n).append("g").attr("transform","translate("+a+","+e+")"),l=d.j().key((function(e){return e.sex})).rollup((function(e){var t=d.l(e.map((function(e){return e.density})).sort(d.b),.25),n=d.l(e.map((function(e){return e.density})).sort(d.b),.5),a=d.l(e.map((function(e){return e.density})).sort(d.b),.75),r=a-t;return{q1:t,median:n,q3:a,interQuantileRange:r,min:t-1.5*r,max:a+1.5*r}})).entries(C),c=d.m().range([0,r]).domain(["Male","Female"]).paddingInner(1).paddingOuter(.5);o.append("g").attr("transform","translate(0,"+i+")").call(d.c(c));var m=d.n().domain([0,2300]).range([i,0]);o.append("g").call(d.d(m)),o.selectAll("vertLines").data(l).enter().append("line").attr("x1",(function(e){return c(e.key)})).attr("x2",(function(e){return c(e.key)})).attr("y1",(function(e){return m(e.value.min)})).attr("y2",(function(e){return m(e.value.max)})).attr("stroke","black").style("width",40);o.selectAll("boxes").data(l).enter().append("rect").attr("x",(function(e){return c(e.key)-50})).attr("y",(function(e){return m(e.value.q3)})).attr("height",(function(e){return m(e.value.q1)-m(e.value.q3)})).attr("width",100).attr("stroke","black").style("fill","#69b3a2"),o.selectAll("medianLines").data(l).enter().append("line").attr("x1",(function(e){return c(e.key)-50})).attr("x2",(function(e){return c(e.key)+50})).attr("y1",(function(e){return m(e.value.median)})).attr("y2",(function(e){return m(e.value.median)})).attr("stroke","black").style("width",80);o.selectAll("indPoints").data(C).enter().append("circle").attr("cx",(function(e){return c(e.sex)-25+50*Math.random()})).attr("cy",(function(e){return m(e.density)})).attr("r",4).style("fill","white").attr("stroke","black"),o.append("text").attr("x",150).attr("y",0).attr("text-anchor","begin").style("font-size","20px").text("Male and Female Density in Calgary in 2016")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"tooltip",style:{position:"absolute",backgroundColor:"lightgray",padding:"5px"}}),r.a.createElement("div",{id:"income_data"}))}}]),t}(r.a.Component),_=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).state={width:700,height:500,id:"root"},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",null,r.a.createElement("h1",null," Statistics Calgary ")),r.a.createElement("div",{className:"Text"},r.a.createElement("p",null," Mouse over the graph for more detail"),r.a.createElement("p",{style:{fontStyle:"italic"}}," Data source: Alberta Open Government, Statistics Canada"),r.a.createElement("p",null," ",r.a.createElement("br",null))),r.a.createElement("div",null,r.a.createElement(s,null)),r.a.createElement("div",null,r.a.createElement(E,null)),r.a.createElement("div",null,r.a.createElement(M,null)),r.a.createElement("div",null,r.a.createElement(f,null)),r.a.createElement("div",null,r.a.createElement(g,null)),r.a.createElement("div",null,r.a.createElement(b,null)),r.a.createElement("div",null,r.a.createElement(O,null)))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[55,1,2]]]);
//# sourceMappingURL=main.f5fdd60d.chunk.js.map