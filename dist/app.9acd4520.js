(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e){},24:function(n,e,t){t(25),n.exports=t(53)},41:function(n,e){},47:function(n,e){},53:function(n,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),i=t(15),r=t(1),l=t(18),s=t.n(l),c=t(19),p=t.n(c),d=t(5),u=t.n(d),m=t(2),f=function(n,e){return n.raw=e,n}(["\n  margin-top: 14px;\n  background-color: rgba(189, 189, 189, 0.3);\n  border-radius: 50px !important;\n  height: 45px;\n  padding-bottom: 2px;\n  padding-right: 2px;\n  \n  & label {\n    font-size: 18px;\n    font-weight: 400;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 0;\n    border-radius: 50px !important;\n    height: 45px;\n  }\n  \n  & label.active {\n    top: 1px;\n    left: 1px;\n    border: none;\n    border-radius: 50px;\n    background-color: white;\n    opacity: 1;\n    padding: 0 34px;\n    line-height: 45px;\n  }\n  \n  .btn {\n    box-shadow: none !important;\n  }\n"],["\n  margin-top: 14px;\n  background-color: rgba(189, 189, 189, 0.3);\n  border-radius: 50px !important;\n  height: 45px;\n  padding-bottom: 2px;\n  padding-right: 2px;\n  \n  & label {\n    font-size: 18px;\n    font-weight: 400;\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 0;\n    border-radius: 50px !important;\n    height: 45px;\n  }\n  \n  & label.active {\n    top: 1px;\n    left: 1px;\n    border: none;\n    border-radius: 50px;\n    background-color: white;\n    opacity: 1;\n    padding: 0 34px;\n    line-height: 45px;\n  }\n  \n  .btn {\n    box-shadow: none !important;\n  }\n"]);var g=m.a.div(f);function h(n){var e=function(e){n.onLocationChange(e.currentTarget.dataset.location)};return o.a.createElement(g,{className:"btn-group btn-group-justified"},n.locations.map(function(t,a){return o.a.createElement("label",{className:"btn "+(t.name===n.currentLocation?"active":""),key:a,"data-location":t.name,onClick:e},t.label)}))}var b=function(n){var e="";return n?(n.packages.map(function(n){e+=n.name+" "+n.version+" + "}),e.replace(new RegExp("[\\s+]*$"),"")):null},x=o.a.createElement("b",null,o.a.createElement(r.a,{id:"software",defaultMessage:"Software"}),":");function v(n){var e=n.osImage;if(null===e)return null;if(null===e.softpack)return null;var t=b(e.softpack);return o.a.createElement("li",null,x," ",o.a.createElement("span",null,t))}var k=function(n){return n.charAt(0).toUpperCase()+n.slice(1)};function _(n){var e=n.input,t=n.options,a=n.label;if(e&&t&&a){var i=t.find(function(n){return n.name===e});return i?o.a.createElement("li",null,o.a.createElement("b",null,o.a.createElement(r.a,{id:a,defaultMessage:k(a)}),": ")," ",o.a.createElement("span",null,i.title)):null}return null}var w=C(["\n    height: 63px;\n    font-size: 22px;\n    line-height: 43px;\n    color: white;\n    background-color: #4db6ac;\n    border-color: #4db6ac;\n    \n    &:hover, &:focus, &:active {\n      outline: none;\n      color: white;\n      background-color: #61cbc1;\n      border-color: #61cbc1;\n    }\n"],["\n    height: 63px;\n    font-size: 22px;\n    line-height: 43px;\n    color: white;\n    background-color: #4db6ac;\n    border-color: #4db6ac;\n    \n    &:hover, &:focus, &:active {\n      outline: none;\n      color: white;\n      background-color: #61cbc1;\n      border-color: #61cbc1;\n    }\n"]),E=C(["\n  margin-top: -2px;\n  color: #bdbdbd;\n  font-weight: 300;\n  padding: 7px 0 11px 0;\n  font-size: 18px;\n  line-height: 27px;\n"],["\n  margin-top: -2px;\n  color: #bdbdbd;\n  font-weight: 300;\n  padding: 7px 0 11px 0;\n  font-size: 18px;\n  line-height: 27px;\n"]),y=C(["\n  color: #38474e;\n  font-size: 22px;\n"],["\n  color: #38474e;\n  font-size: 22px;\n"]),S=C(["\n  text-decoration: line-through;\n  color: #bdbdbd;\n"],["\n  text-decoration: line-through;\n  color: #bdbdbd;\n"]),O=C(["\n  line-height: 28px;\n  height: 63px;\n  background-color: #ff5252;\n  border-color: #ff5252;\n  \n  &:hover, &:focus, &:active {\n    outline: none;\n    color: white;\n    background-color: #ff6e67;\n    border-color: #ff6e67;\n  }\n"],["\n  line-height: 28px;\n  height: 63px;\n  background-color: #ff5252;\n  border-color: #ff5252;\n  \n  &:hover, &:focus, &:active {\n    outline: none;\n    color: white;\n    background-color: #ff6e67;\n    border-color: #ff6e67;\n  }\n"]),I=C(["\n    padding: 14px 18px 18px;\n    background: white;\n    box-shadow: 0 1px 1.92px 1.08px rgba(0, 0, 0, 0.04), 0 4px 6px 0 rgba(0, 0, 0, 0.01), 0 2px 8px 0 rgba(0, 0, 0, 0.06);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 2px;\n    box-sizing: border-box;\n    vertical-align: top;\n    margin-bottom: 18px;\n    \n    & > .panel-heading {\n      font-size: 22px;\n      line-height: 27px;\n      font-weight: 400;\n      border: none;\n      background-color: white;\n    }\n    \n    & > .panel-footer {\n      border: none;\n      background-color: white;\n    }\n"],["\n    padding: 14px 18px 18px;\n    background: white;\n    box-shadow: 0 1px 1.92px 1.08px rgba(0, 0, 0, 0.04), 0 4px 6px 0 rgba(0, 0, 0, 0.01), 0 2px 8px 0 rgba(0, 0, 0, 0.06);\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    border-radius: 2px;\n    box-sizing: border-box;\n    vertical-align: top;\n    margin-bottom: 18px;\n    \n    & > .panel-heading {\n      font-size: 22px;\n      line-height: 27px;\n      font-weight: 400;\n      border: none;\n      background-color: white;\n    }\n    \n    & > .panel-footer {\n      border: none;\n      background-color: white;\n    }\n"]);function C(n,e){return n.raw=e,n}var P=m.a.button(w),D=m.a.div(E),L=m.a.span(y),N=Object(m.a)(L)(S),z=Object(m.a)(P)(O),M=m.a.div(I),U=o.a.createElement("b",null,"CPU:"),T=o.a.createElement("b",null,"RAM:"),j=o.a.createElement("b",null,"HDD:"),F=function(n){var e=n.cpu?o.a.createElement("li",null,U," ",o.a.createElement("span",null,n.cpu)):"",t=n.ram?o.a.createElement("li",null,T," ",o.a.createElement("span",null,n.ram)):"",i=n.hdd?o.a.createElement("li",null,j," ",o.a.createElement("span",null,n.hdd)):"";return o.a.createElement(a.Fragment,null,e,t,i)},A=o.a.createElement("b",null,o.a.createElement(r.a,{id:"label",defaultMessage:"Label"}),": "),B=o.a.createElement("hr",null),H=o.a.createElement(r.a,{id:"order"}),R=o.a.createElement(r.a,{id:"select"});function W(n){var e=!1,t=null,a=null,i=null;n.isSideBar?(e=!0,t=n.total.toLocaleString(n.language,{style:"currency",currency:n.config.currency}),i=n.label):(t=n.config.price.toLocaleString(n.language,{style:"currency",currency:n.config.currency}),n.config[n.location+"_old_price"]&&(a=parseFloat(n.config[n.location+"_old_price"])));var l=n.os&&n.administration&&n.softpack&&n.osImage;return o.a.createElement(M,{className:"panel panel-default"},o.a.createElement("div",{className:"panel-heading"},n.config.name,o.a.createElement(D,null,n.config.descr)),o.a.createElement("div",{className:"panel-body"},o.a.createElement("ul",{className:"list-unstyled"},i?o.a.createElement("li",null,A," ",o.a.createElement("span",null,i)):"",F(n.config),o.a.createElement(_,{options:n.osOptions,input:n.os,label:"os"}),o.a.createElement(_,{options:n.administrationOptions,input:n.administration,label:"administration"}),o.a.createElement(_,{options:n.softpackOptions,input:n.softpack,label:"softpack"}),o.a.createElement(v,{osImage:n.osImage})),B,o.a.createElement("div",{className:"text-center"},e?o.a.createElement(L,null,o.a.createElement(r.a,{id:"per_month",defaultMessage:"{price}/month",values:{price:t}})):o.a.createElement(L,null,o.a.createElement(r.a,{id:"from_month",defaultMessage:"From {oldPrice} {price}/month",values:{oldPrice:o.a.createElement(N,null,a),price:t}})))),o.a.createElement("div",{className:"panel-footer"},e?o.a.createElement(z,{type:"submit",className:"btn btn-block",disabled:!l},H):o.a.createElement(P,{type:"button",className:"btn btn-block","data-config-id":n.config.id,onClick:function(e){n.onSelectConfig(e.currentTarget.dataset.configId)}},R)))}var Q=V(["\n  padding-bottom: 43px;\n"],["\n  padding-bottom: 43px;\n"]),G=V(["\n  color: ",";\n"],["\n  color: ",";\n"]),J=V(["\n  display: block;\n  border-bottom: 1px solid rgba(189, 189, 189, 0.3);\n  margin-bottom: 11px;\n  color: #bdbdbd;\n  padding: 5px 0 12px 0;\n  font-size: 22px;\n  line-height: 27px;\n  font-weight: 400;\n"],["\n  display: block;\n  border-bottom: 1px solid rgba(189, 189, 189, 0.3);\n  margin-bottom: 11px;\n  color: #bdbdbd;\n  padding: 5px 0 12px 0;\n  font-size: 22px;\n  line-height: 27px;\n  font-weight: 400;\n"]),q=V(['\n  width: 100%;\n  display: inline-block;\n  height: 36px;\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 600 !important;\n  padding: 8px 0 5px !important;\n  \n  input[type="checkbox"], input[type="radio"] { display: none; }\n  \n  .check { top: 4px; margin-right: 19px; }\n  \n  input[type="radio"]:checked + .check {\n    border-color: #ff5252; \n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.27); \n  }\n  \n  input[type="radio"] + .check {\n    border: 2px solid #bdbdbd;\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    border-radius: 50px;\n    box-sizing: border-box;\n    position: relative;\n  }\n  \n  input[type="radio"]:checked + .check:before {\n    content: "";\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: #ff5252;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n  }\n'],['\n  width: 100%;\n  display: inline-block;\n  height: 36px;\n  font-size: 18px;\n  line-height: 27px;\n  font-weight: 600 !important;\n  padding: 8px 0 5px !important;\n  \n  input[type="checkbox"], input[type="radio"] { display: none; }\n  \n  .check { top: 4px; margin-right: 19px; }\n  \n  input[type="radio"]:checked + .check {\n    border-color: #ff5252; \n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.27); \n  }\n  \n  input[type="radio"] + .check {\n    border: 2px solid #bdbdbd;\n    width: 20px;\n    height: 20px;\n    display: inline-block;\n    border-radius: 50px;\n    box-sizing: border-box;\n    position: relative;\n  }\n  \n  input[type="radio"]:checked + .check:before {\n    content: "";\n    display: block;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background-color: #ff5252;\n    position: absolute;\n    top: 3px;\n    left: 3px;\n  }\n']);function V(n,e){return n.raw=e,n}var $=m.a.div(Q),K=m.a.span(G,function(n){return n.disabled?"#bdbdbd":"#38474e"}),X=m.a.label(J),Y=m.a.label(q),Z=o.a.createElement("span",{className:"check"}," ");function nn(n){var e=n.current,t=function(n,e){var t={};for(var a in n)e.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t}(n,["current"]),i=function(n){t.onInputChange(n.target.value)};-1===t.options.map(function(n){return n.disabled?null:n.name}).indexOf(e)&&(e=null),null===e&&(e=t.options.reduce(function(n,e){return null!==n||e.disabled?n:e.name},null),Object(a.useEffect)(function(){t.onInputChange(e)}));var l=t.options.map(function(n,a){return o.a.createElement("div",{className:"radio radio-"+t.label+(!0===n.disabled?" disabled":""),key:a},o.a.createElement(Y,null,o.a.createElement("input",{type:"radio",name:t.label.toLowerCase(),value:n.name,onChange:i,checked:e===n.name,disabled:!0===n.disabled?"disabled":""}),Z,o.a.createElement(K,{disabled:n.disabled},n.title)))});return o.a.createElement($,{className:"form-group"},o.a.createElement(X,null,o.a.createElement(r.a,{id:t.label})),l)}var en=function(n,e){return n.raw=e,n}(["\n  padding-top: 108px;\n  background-color: ",";\n  height: 100%;\n"],["\n  padding-top: 108px;\n  background-color: ",";\n  height: 100%;\n"]);var tn=m.a.div(en,function(n){return null!==n.configId?"#fcf9f7":"white"}),an=function(n,e){return n.raw=e,n}(['\n  background: #37474f;\n  height: 45px;\n  width: 100%;\n  line-height: 45px;\n  \n  a:hover, a:active, a:focus {\n    text-decoration: none;\n  }\n  \n  & > .container {\n    position: relative;\n    overflow: hidden;\n  }\n  \n  span a, span.active {\n    font-weight: 400 !important;\n  }\n  \n  & span:first-child {\n    z-index: 10 !important;\n  }\n  \n  & span:first-child.active a {\n    padding-left: 0;\n  }\n  \n  & span:first-child a:hover {\n    cursor: pointer;\n  }\n  \n  span {\n    z-index: 12;\n    padding: 0;\n    height: 45px;\n    display: inline-block;\n    position: relative;\n  }\n  \n  span a, span.active {\n    color: white;\n    z-index: 1;\n    line-height: 44px;\n    display: inline-block;\n    position: relative;\n    padding: 0 18px;\n    font-size: 16px;\n  }\n  \n  & span.active:before {\n    content: "";\n    position: absolute;\n    height: 45px;\n    width: 1170px;\n    right: 0;\n    top: 0;\n    background: #ff5252;\n    z-index: -1;\n  }\n  \n  & span.active.active:after {\n    content: "";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    right: -10px;\n    border-width: 23px 0 23px 10px;\n    border-color: transparent transparent transparent #ff5252;\n    top: 0;\n  }\n'],['\n  background: #37474f;\n  height: 45px;\n  width: 100%;\n  line-height: 45px;\n  \n  a:hover, a:active, a:focus {\n    text-decoration: none;\n  }\n  \n  & > .container {\n    position: relative;\n    overflow: hidden;\n  }\n  \n  span a, span.active {\n    font-weight: 400 !important;\n  }\n  \n  & span:first-child {\n    z-index: 10 !important;\n  }\n  \n  & span:first-child.active a {\n    padding-left: 0;\n  }\n  \n  & span:first-child a:hover {\n    cursor: pointer;\n  }\n  \n  span {\n    z-index: 12;\n    padding: 0;\n    height: 45px;\n    display: inline-block;\n    position: relative;\n  }\n  \n  span a, span.active {\n    color: white;\n    z-index: 1;\n    line-height: 44px;\n    display: inline-block;\n    position: relative;\n    padding: 0 18px;\n    font-size: 16px;\n  }\n  \n  & span.active:before {\n    content: "";\n    position: absolute;\n    height: 45px;\n    width: 1170px;\n    right: 0;\n    top: 0;\n    background: #ff5252;\n    z-index: -1;\n  }\n  \n  & span.active.active:after {\n    content: "";\n    display: inline-block;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    position: absolute;\n    right: -10px;\n    border-width: 23px 0 23px 10px;\n    border-color: transparent transparent transparent #ff5252;\n    top: 0;\n  }\n']);var on=m.a.div(an),rn=o.a.createElement(r.a,{id:"dedicated_server"}),ln=o.a.createElement("a",null,"2. ",o.a.createElement(r.a,{id:"server_configuration"})),sn=o.a.createElement("span",null,o.a.createElement("a",null,"3. ",o.a.createElement(r.a,{id:"checkout"}))),cn=function(n){return o.a.createElement(on,{className:"breadcrumbs"},o.a.createElement("div",{className:"container"},o.a.createElement("span",{className:u()({active:null===n.configId})},o.a.createElement("a",{onClick:function(e){e.preventDefault(),n.onBack(n.currentLocation)}},"1. ",rn)),o.a.createElement("span",{className:u()({active:null!==n.configId})},ln),sn))},pn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n},dn=gn(["\n  font-family: 'Open Sans', sans-serif;\n"],["\n  font-family: 'Open Sans', sans-serif;\n"]),un=gn(["\n  display: inline-block;\n  line-height: 45px;\n  padding: 0 0 13px 0;\n  font-size: 36px;\n  font-weight: 300;\n  margin: 0;\n"],["\n  display: inline-block;\n  line-height: 45px;\n  padding: 0 0 13px 0;\n  font-size: 36px;\n  font-weight: 300;\n  margin: 0;\n"]),mn=gn(["\n  font-size: 22px;\n  color: #4db6ac;\n  padding-top: 77px;\n  padding-bottom: 40px;\n  line-height: 27px;\n   font-weight: 600;\n"],["\n  font-size: 22px;\n  color: #4db6ac;\n  padding-top: 77px;\n  padding-bottom: 40px;\n  line-height: 27px;\n   font-weight: 600;\n"]),fn=gn(["\n  margin-bottom: 30px;\n  padding-top: 72px;\n  padding-bottom: 43px;\n  \n  input:focus::-webkit-input-placeholder { color:transparent; }\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\n  .form-control:focus {\n    border-color: transparent;\n    outline: 0;\n    box-shadow: none;\n    border-bottom: 1px solid #bdbdbd;\n  }\n  input {\n    display: block;\n    height: 47px;\n    margin: auto;\n    background-color: transparent;\n    color: #38474e;\n    border: none;\n    border-right: none;\n    border-left: none;\n    border-bottom: 1px solid #bdbdbd;\n    border-top: none;\n    border-radius: 0;\n    text-align: left;\n    padding: 0 0;\n    font: 300 18px/36px 'Open Sans',Arial,sans-serif;\n    box-shadow: none;\n  }\n"],["\n  margin-bottom: 30px;\n  padding-top: 72px;\n  padding-bottom: 43px;\n  \n  input:focus::-webkit-input-placeholder { color:transparent; }\n  input:focus:-moz-placeholder { color:transparent; } /* FF 4-18 */\n  input:focus::-moz-placeholder { color:transparent; } /* FF 19+ */\n  input:focus:-ms-input-placeholder { color:transparent; } /* IE 10+ */\n  .form-control:focus {\n    border-color: transparent;\n    outline: 0;\n    box-shadow: none;\n    border-bottom: 1px solid #bdbdbd;\n  }\n  input {\n    display: block;\n    height: 47px;\n    margin: auto;\n    background-color: transparent;\n    color: #38474e;\n    border: none;\n    border-right: none;\n    border-left: none;\n    border-bottom: 1px solid #bdbdbd;\n    border-top: none;\n    border-radius: 0;\n    text-align: left;\n    padding: 0 0;\n    font: 300 18px/36px 'Open Sans',Arial,sans-serif;\n    box-shadow: none;\n  }\n"]);function gn(n,e){return n.raw=e,n}var hn=m.a.div(dn),bn=m.a.h2(un),xn=m.a.h4(mn),vn=m.a.div(fn),kn=function(n){return n.os+" "+n.version},_n=function(n){var e=n.msgId;return o.a.createElement("div",{className:"alert alert-warning text-center"},o.a.createElement(r.a,{id:e}))},wn=o.a.createElement(r.a,{id:"nl",defaultMessage:"Netherlands"}),En=o.a.createElement(r.a,{id:"us",defaultMessage:"USA"}),yn=o.a.createElement(r.a,{id:"managed",defaultMessage:"Managed"}),Sn=o.a.createElement(r.a,{id:"unmanaged",defaultMessage:"Unmanaged"}),On=o.a.createElement(r.a,{id:"no_softpack",defaultMessage:"No softpack"}),In=o.a.createElement(_n,{msgId:"select_location"}),Cn=o.a.createElement(r.a,{id:"server_label"}),Pn=o.a.createElement(xn,{className:"col-xs-12"},"“Quick Start” Server"),Dn=o.a.createElement(_n,{msgId:"no_configurations"}),Ln=o.a.createElement("div",{className:"clearfix"}),Nn=function(n){function e(t){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}(this,n.call(this,t));return a.cmpRef=o.a.createRef(),a.state=Object.assign({},{actions:null,location:"usa",configId:null,configObj:{},configOptions:[],label:"",os:null,osOptions:[],osImage:null,osImageOptions:[],administration:null,administrationOptions:[],softpack:null,softpackOptions:[],isOrderActive:!1,total:0,possibleOsImages:[],locationOptions:[{name:"nl",label:wn},{name:"us",label:En}]},t.initialStates),a}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}(e,n),e.prototype.componentDidUpdate=function(n,e,t){e.configId!==this.state.configId&&this.cmpRef.current.scrollIntoView({behavior:"smooth"})},e.prototype.componentDidMount=function(n,e,t){this.setState({configOptions:this.props.configs,osImages:this.props.osImages,administration:"managed",possibleOsImages:this.props.osImages},this.setPossibleOsImages)},e.prototype.setOsImage=function(){this.setState(function(n){if(n.possibleOsImages.length&&n.softpack){for(var e=null,t=n.possibleOsImages.filter(function(e){return kn(e)===n.os}),a=0;a<t.length;a++){var o=t[a];if(null===o.softpack&&"clear"===n.softpack){e=o;break}if(null!==o.softpack&&o.softpack.name===n.softpack){e=o;break}}return{osImage:e}}})},e.prototype.setPossibleOsImages=function(){var n=this,e=this.props.osImages;this.state.administration&&(e=e.filter(function(e){return"managed"===n.state.administration?e.softpack&&"string"==typeof e.softpack.panel:null===e.softpack||null===e.softpack.panel})),this.setState({possibleOsImages:e},this.setOsImage)},e.prototype.getOsOptions=function(){var n=this,e=Object.keys(this.props.osImages).map(function(e){var t=n.props.osImages[e];return{name:kn(t),title:kn(t),disabled:!1}});return(e=e.filter(function(n,e,t){return e===t.findIndex(function(e){return e.title===n.title})})).map(function(e){e.disabled=!n.state.possibleOsImages.some(function(n){return kn(n)===e.name})}),e},e.prototype.getAdministrationOptions=function(){return[{name:"managed",title:yn,disabled:!this.props.osImages.some(function(n){return null!==n.softpack&&"string"==typeof n.softpack.panel})},{name:"unmanaged",title:Sn,disabled:!this.props.osImages.some(function(n){return null===n.softpack||null===n.softpack.panel})}]},e.prototype.getSoftpackOptions=function(){var n=this,e=[];for(var t in this.props.osImages){var a=this.props.osImages.hasOwnProperty(t)?this.props.osImages[t]:null;a&&a.softpack&&e.push({name:a.softpack.name,title:a.softpack.name.toUpperCase(),disabled:!1})}e.unshift({name:"clear",title:On,disabled:!1});var o=e.filter(function(n,e,t){return e===t.findIndex(function(e){return e.place===n.place&&e.name===n.name})});return(o=Object.assign(o)).map(function(e){for(var t=!1,a=n.state.possibleOsImages.filter(function(e){return kn(e)===n.state.os}),o=0;o<a.length;o++){var i=a[o];if(i.softpack&&i.softpack.name===e.name){t=!0;break}if("clear"===e.name&&null===i.softpack){t=!0;break}}e.disabled=!t}),o},e.prototype.handleLocationChange=function(n){this.setState({location:n,configId:null,label:"",osImage:null,administration:null,softpack:null,isOrderActive:!1})},e.prototype.handleSelectConfig=function(n){var e=this.state.configOptions[this.state.location].find(function(e){return parseInt(e.id)===parseInt(n)});this.setState({configId:n,configObj:e,label:"",administration:null,softpack:null,isOrderActive:!1,total:e.price})},e.prototype.handleOSChange=function(n){this.setState({os:n},this.setPossibleOsImages)},e.prototype.handleAdministrationChange=function(n){var e=this.state.total,t=this.state.administration;"managed"!==n||"unmanaged"!==t&&null!=t?"unmanaged"===n&&"managed"===t&&(e-=parseFloat(this.state.configObj.support_price)):e+=parseFloat(this.state.configObj.support_price),this.setState({administration:n,total:e},this.setPossibleOsImages)},e.prototype.handleSoftpackChange=function(n){this.setState({softpack:n},this.setPossibleOsImages)},e.prototype.handleLabelChange=function(n){this.setState({label:n.target.value})},e.prototype.render=function(){var n=this,e=In,t="",a="featured_dedicated_servers",i=this.state,l=i.location,s=i.configId,c=i.os,p=i.administration,d=i.softpack,m=i.action,f=i.configOptions,g=i.label,b=i.osImage,x=i.locationOptions,v=this.props.token,k=Cn;if(l&&s){var _=this.getAdministrationOptions(),w=this.getOsOptions(),E=this.getSoftpackOptions(),y=f[l].find(function(n){return parseInt(n.id)===parseInt(s)});a="configuration_setting",t=l&&s?o.a.createElement(W,pn({config:y,isSideBar:!0},this.state,{osOptions:w,administrationOptions:_,softpackOptions:E})):"",e=o.a.createElement("fieldset",null,o.a.createElement(vn,{className:"form-group"},o.a.createElement("label",{htmlFor:"label",className:"sr-only"},k),o.a.createElement("input",{type:"text",className:"form-control",name:"label",id:"label",placeholder:"Server Label",autoComplete:"off",value:g,onChange:function(e){return n.handleLabelChange(e)}})),o.a.createElement("input",{type:"hidden",id:"tariff_id",name:"tariff_id",value:y[l+"_tariff_id"]}),o.a.createElement("input",{type:"hidden",id:v.name,name:v.name,value:v.value}),o.a.createElement("input",{type:"hidden",id:"object_id",name:"object_id",value:s}),o.a.createElement("input",{type:"hidden",id:"location",name:"location",value:l}),o.a.createElement("input",{type:"hidden",id:"osimage",name:"osimage",value:b?b.name:""}),o.a.createElement(nn,{label:"administration",options:_,current:p,onInputChange:function(e){return n.handleAdministrationChange(e)}}),o.a.createElement(nn,{label:"os",options:w,current:c,onInputChange:function(e){return n.handleOSChange(e)}}),o.a.createElement(nn,{label:"softpack",options:E,current:d,onInputChange:function(e){return n.handleSoftpackChange(e)}}))}else l&&(Object.keys(this.state.configOptions).length&&this.state.configOptions.hasOwnProperty(l)?(e=this.state.configOptions[l].map(function(e,t){return o.a.createElement("div",{className:"col-md-4",key:t},o.a.createElement(W,pn({config:e},n.state,{location:l,onSelectConfig:function(e){return n.handleSelectConfig(e)}})))}),e=o.a.createElement("div",{className:"row"},Pn,e)):e=Dn);return o.a.createElement(hn,{ref:this.cmpRef},o.a.createElement(cn,{currentLocation:l,configId:s,onBack:function(e){return n.handleLocationChange(e)}}),o.a.createElement(tn,{configId:s},o.a.createElement("div",{className:"container"},o.a.createElement("form",{id:"hipanel-server-order",action:m,method:"POST"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:u()({"col-md-8":null===s,"col-md-12":null!==s})},o.a.createElement(bn,null,o.a.createElement(r.a,{id:a}))),o.a.createElement("div",{className:u()({"col-md-4":null===s,hidden:null!==s})},o.a.createElement(h,{locations:x,currentLocation:l,onLocationChange:function(e){return n.handleLocationChange(e)}}))))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:""===t?"col-md-12":"col-md-8"},e),o.a.createElement("div",{className:"col-md-4"},t)))),Ln))},e}(o.a.Component);Object(r.c)([].concat(p.a,s.a)),window.hipanel_order_server||(window.hipanel_order_server={initialStates:{action:"/server/order/add-to-cart-dedicated",location:"us",language:"en"},token:{name:"_csrf",value:"123"},configs:{nl:[{id:1,name:"Single Start",descr:"The Test Config Description",price:127,currency:"EUR",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 x W-2123",hdd:"2 x 2 TB",ram:"16 GB",support_price:"0.07",nl_old_price:"17.55",us_old_price:"12.33"}],us:[{id:2,name:"Single Business",descr:"The Test Config Description",price:175,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2125 CPU",hdd:"2 х 2 TB HDD",ram:"2 x 2 TB",support_price:1.7,nl_old_price:"11.14",us_old_price:"0.83"},{id:3,name:"Single Advanced",descr:"The Test Config Description",price:202,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2133 CPU",hdd:"2 х 2 TB HDD",ram:"64 GB DDR4",support_price:.7},{id:4,name:"Single Start 2",descr:"SUPERMICRO 1U CHASSIS",price:155,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2123",hdd:"2 х 240 ГБ SSD",ram:"16 ГБ DDR4",support_price:100},{id:5,name:"Single Business",descr:"The Test Config Description",price:175,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2125 CPU",hdd:"2 х 2 TB HDD",ram:"2 x 2 TB",support_price:1.7,nl_old_price:"11.14",us_old_price:"0.83"},{id:6,name:"Single Advanced",descr:"The Test Config Description",price:202,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2133 CPU",hdd:"2 х 2 TB HDD",ram:"64 GB DDR4",support_price:.7},{id:7,name:"Single Start 2",descr:"SUPERMICRO 1U CHASSIS",price:155,currency:"USD",nl_tariff_id:"123",us_tariff_id:"321",cpu:"1 х W-2123",hdd:"2 х 240 ГБ SSD",ram:"16 ГБ DDR4",support_price:100}]},osImages:[{name:"freebsd_11_clear",title:"Clear FreeBSD 11 LEMP (demo)",os:"FreeBSD",version:11,panel:null,deprecated:!1,softpack:null,osimage:"freebsd_11_clear"},{name:"ubuntu_1810_clean",title:"Ubuntu 18.10 Clean installation (demo)",os:"Ubuntu",version:18.1,panel:null,deprecated:!1,softpack:null,osimage:"ubuntu_1810_clean"},{name:"ubuntu_1804_lemp",title:"Ubuntu 18.04 LTS x64 with LEMP stack (demo)",os:"Ubuntu",version:"18.04 LTS",panel:null,deprecated:!1,softpack:{name:"lemp",panel:null,packages:[{name:"Nginx",version:"1.15.0"},{name:"MySQL",version:8},{name:"PHP-FPM",version:"7.3.0"}]},osimage:"ubuntu_1804_lemp"},{name:"centos_7_clean",title:"CentOS 7 (demo)",os:"CentOS",version:7,panel:null,deprecated:!1,softpack:null,osimage:"centos_7_clean"},{name:"ubuntu_1804_lemp_hipanel",title:"Ubuntu 18.04 LTS x64 with LEMP stack and HiPanel (demo)",os:"Ubuntu",version:"18.04 LTS",panel:null,deprecated:!1,softpack:{name:"lemp",panel:"HiPanel",packages:[{name:"Nginx",version:"1.15.1"},{name:"MySQL",version:"8.0.2"},{name:"PHP-FPM",version:"7.3.2"}]},osimage:"ubuntu_1804_lemp_hipanel"},{name:"freebsd_11_lamp",title:"FreeBSD 11 LEMP stack (demo)",os:"FreeBSD",version:11,panel:null,deprecated:!1,softpack:{name:"lamp",panel:"HiPanel",packages:[{name:"Apache",version:2.2},{name:"MySQL",version:8},{name:"PHP-FPM",version:"7.3.0"}]},osimage:"freebsd_11_lamp"},{name:"ubuntu_1804_clean",title:"Ubuntu 18.04 LTS x64",os:"Ubuntu",version:"18.04 LTS",panel:null,deprecated:!1,softpack:null,osimage:"ubuntu_1804_clean"},{name:"windows_10_clean",title:"Windows 10 (demo)",os:"Windows",version:10.1,panel:null,deprecated:!1,softpack:null,osimage:"windows_10_clean"},{name:"centos_6_lamp",title:"CentOS 6 x64 with LAMP stack (demo)",os:"CentOS",version:6,panel:null,deprecated:!0,softpack:{name:"lamp",panel:null,packages:[{name:"Apache",version:"2.0.1"},{name:"MySQL",version:5.5},{name:"PHP-FPM",version:"5.6.0"}]},osimage:"centos_6_lamp"},{name:"ubuntu_1804_lamp_hipanel",title:"Ubuntu 18.04 LTS x64 with LAMP stack and HiPanel (demo)",os:"Ubuntu",version:"18.04 LTS",panel:null,deprecated:!1,softpack:{name:"lamp",panel:"HiPanel",packages:[{name:"Apache",version:"2.2.2"},{name:"MySQL",version:"8.0.1"},{name:"PHP-FPM",version:"7.3.2"}]},osimage:"ubuntu_1804_lamp_hipanel"},{name:"ubuntu_1804_lamp",title:"Ubuntu 18.04 LTS x64 with LAMP stack (demo)",os:"Ubuntu",version:"18.04 LTS",panel:null,deprecated:!1,softpack:{name:"lamp",panel:null,packages:[{name:"Apache",version:2.2},{name:"MySQL",version:8},{name:"PHP-FPM",version:"7.3.1"}]},osimage:"ubuntu_1804_lamp"}]});Object(i.render)(o.a.createElement(r.b,{locale:window.hipanel_order_server.initialStates.language,messages:{en:{"text.header":"Make your server even more powerful","text.paragraph":"Select the technical details and the type of maintenance of your dedicated server. Immediately after placing the order, we will contact you to confirm it and connect your project to the service.",os:"OS",administration:"Administration",softpack:"Soft",select_location:"Select location",no_configurations:"No configurations found",select:" Select",order:"Order",featured_dedicated_servers:"Featured dedicated servers",configuration_setting:"Make your server even more powerful",server_label:"Server label",dedicated_server:"Dedicated servers",server_configuration:"Server configuration",checkout:"Checkout"},ru:{dedicated_server:"Выделенные серверы",server_configuration:"Настройка сервера",checkout:"Оформление заказа",featured_dedicated_servers:"Примеры конфигураций выделенных серверов",configuration_setting:"Сделайте ваш сервер еще мощнее","text.header":"Сделайте ваш сервер еще мощнее","text.paragraph":"Выберите технические детали и тип обслуживания выделенного сервера. Сразу после размещения заказа мы свяжемся с вами для подтверждения и подключения вашего проекта к услуге.",nl:"Нидерланды",us:"США",server_label:"Заметка",administration:"Администрирование",softpack:"Софт",os:"ОС",order:"Заказать",select:"Выбрать",select_location:"Выбирите локацию",no_configurations:"Нет конфигураций",software:"Программное обеспечение",no_softpack:"отсутствует",managed:"Управляемое",unmanaged:"Неуправляемое",form_month:"От {oldPrice} {price}/месяц",per_month:"{price}/месяц"}}[window.hipanel_order_server.initialStates.language]},o.a.createElement(Nn,window.hipanel_order_server)),document.querySelector("#server-order-app"))}},[[24,2,1]]]);
//# sourceMappingURL=app.9acd4520.js.map