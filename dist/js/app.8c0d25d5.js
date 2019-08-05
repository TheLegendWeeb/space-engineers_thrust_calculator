(function(e){function t(t){for(var s,l,u=t[0],i=t[1],o=t[2],h=0,d=[];h<u.length;h++)l=u[h],n[l]&&d.push(n[l][0]),n[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);_&&_(t);while(d.length)d.shift()();return a.push.apply(a,o||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],s=!0,u=1;u<r.length;u++){var i=r[u];0!==n[i]&&(s=!1)}s&&(a.splice(t--,1),e=l(l.s=r[0]))}return e}var s={},n={app:0},a=[];function l(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=s,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(r,s,function(t){return e[t]}.bind(null,s));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/space-engineers_thrust_calculator/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var o=0;o<u.length;o++)t(u[o]);var _=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var s=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Calculator")],1)},a=[],l=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("p",[e._v("Desired acceleration:   "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.des_accel,expression:"des_accel"}],domProps:{value:e.des_accel},on:{input:function(t){t.target.composing||(e.des_accel=t.target.value)}}}),e._v(" m/s^2   "),isNaN(e.des_accel)?r("span",{staticStyle:{color:"red"}},[e._v("  Only numbers are allowed.")]):e._e()]),r("p",[e._v("Ship mass (no thrusters):  "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.ship_mass_no_thrusters,expression:"ship_mass_no_thrusters"}],domProps:{value:e.ship_mass_no_thrusters},on:{input:function(t){t.target.composing||(e.ship_mass_no_thrusters=t.target.value)}}}),e._v(" kg "),isNaN(e.ship_mass_no_thrusters)?r("span",{staticStyle:{color:"red"}},[e._v("  Only numbers are allowed.")]):e._e()]),r("p",[e._v("Select Grid:  \n            "),r("label",{attrs:{for:"small_grid_button"}},[e._v("Small grid: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Ttype,expression:"Ttype"}],attrs:{type:"radio",id:"small_grid_button",name:"grid_type",value:"small_grid"},domProps:{checked:e._q(e.Ttype,"small_grid")},on:{change:function(t){e.Ttype="small_grid"}}}),r("br"),r("label",{staticStyle:{"padding-left":"105px"},attrs:{for:"large_grid_button"}},[e._v("Large grid:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.Ttype,expression:"Ttype"}],attrs:{type:"radio",id:"large_grid_button",name:"grid_type",value:"large_grid"},domProps:{checked:e._q(e.Ttype,"large_grid")},on:{change:function(t){e.Ttype="large_grid"}}})]),e.Ttype?r("div",[r("p",[e._v("Select Thruster: ")]),e._l(e.thrusters_list,function(t){return r("div",{key:t},[r("label",{attrs:{for:"thruster_select"}},[e._v(e._s(t.name))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.thruster,expression:"thruster"}],attrs:{type:"radio",id:"thruster_select",name:"thruster_type"},domProps:{value:t,checked:e._q(e.thruster,t)},on:{change:function(r){e.thruster=t}}})])}),r("br"),e.thruster?r("div",[r("p",[e._v("\n                    "+e._s(e.thruster.name)+":"),r("br"),e._v("\n                    Thrust provided by thruster: "+e._s(e.thruster.thrust)+"N "),r("br"),e._v("\n                    Mass of the thruster: "+e._s(e.thruster.mass)+"kg\n                ")]),r("br")]):e._e()],2):e._e(),r("input",{attrs:{type:"submit",value:"Calculate"}}),r("p",[e._v("\n            Nr. of thrusters needed: "+e._s(e.ceil_nr_thrust_needed)+" "),r("br"),e._v("\n            Exact nr. of thrusters needed: "+e._s(e.exact_nr_thrust_needed)+"\n        ")]),e.sim_limit_exceeded?r("p",{staticStyle:{color:"red"}},[e._v("SIMULATION COMPLEXITY EXCEEDED, ABORTING OPERATION")]):e._e()])])},u=[],i=r("f963"),o={name:"Calculator",data:function(){return{des_accel:null,ship_mass_no_thrusters:null,Ttype:null,thruster_values:i,thrusters_list:[],thruster:null,exact_nr_thrust_needed:null,ceil_nr_thrust_needed:null,sim_limit_exceeded:!1}},methods:{update_thruster_list:function(){var e=[];for(var t in this.thruster_values[this.Ttype])e.push(this.thruster_values[this.Ttype][t]);this.thrusters_list=e,this.thruster=null},onSubmit:function(){this.sim_limit_exceeded=!1;var e=this.ship_mass_no_thrusters*this.des_accel,t=e/this.thruster.thrust,r=Math.ceil(t),s=parseFloat(this.ship_mass_no_thrusters)+parseFloat(this.thruster.mass*r),n=s*this.des_accel,a=n/this.thruster.thrust,l=0;while(a>r)if(r++,s=parseFloat(this.ship_mass_no_thrusters)+parseFloat(this.thruster.mass*r),n=s*this.des_accel,a=n/this.thruster.thrust,l++,l>10){console.log("Simulation exceded 100 operations, aborting"),this.sim_limit_exceeded=!0;break}this.exact_nr_thrust_needed=a,this.ceil_nr_thrust_needed=r,this.sim_limit_exceeded&&(this.exact_nr_thrust_needed="ERR",this.ceil_nr_thrust_needed="ERR")}},watch:{Ttype:function(){this.update_thruster_list()}}},_=o,h=r("2877"),d=Object(h["a"])(_,l,u,!1,null,null,null),c=d.exports,m={name:"app",components:{Calculator:c}},p=m,v=Object(h["a"])(p,n,a,!1,null,null,null),f=v.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(e){return e(f)}}).$mount("#app")},f963:function(e){e.exports={small_grid:{small_ion:{name:"Small Ion Thruster",mass:113,thrust:14400},large_ion:{name:"Large Ion Thruster",mass:721,thrust:172800},small_hydro:{name:"Small Hydrogen Thruster",mass:6969,thrust:98400},large_hydro:{name:"Large Hydrogen Thruster",mass:6969,thrust:48e4},small_atmo:{name:"Small Atmospheric Thruster",mass:6969,thrust:96e3},large_atmo:{name:"Large Atmospheric Thruster",mass:6969,thrust:576e3}},large_grid:{small_ion:{name:"Small Ion Thruster",mass:4380,thrust:345600},large_ion:{name:"Large Ion Thruster",mass:43200,thrust:432e4},small_hydro:{name:"Small Hydrogen Thruster",mass:6969,thrust:108e4},large_hydro:{name:"Large Hydrogen Thruster",mass:6969,thrust:72e5},small_atmo:{name:"Small Atmospheric Thruster",mass:6969,thrust:648e3},large_atmo:{name:"Large Atmospheric Thruster",mass:6969,thrust:648e4}}}}});
//# sourceMappingURL=app.8c0d25d5.js.map