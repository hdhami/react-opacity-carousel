!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=2)}([function(e,t){e.exports=require("react")},function(e,t,n){e.exports=n(4)()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=function(e){return e&&e.__esModule?e:{default:e}}(r);t.default={OpacityCarousel:o.default}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),f=r(l),s=n(1),p=r(s),d=n(8),y=r(d),h=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={defaultOpacity:0,activeNodeIndex:0,numOfChilderen:n.props.children.length},n.animationCompleteCb=n.animationCompleteCb.bind(n),n}return a(t,e),c(t,[{key:"animationCompleteCb",value:function(){var e=this.state.activeNodeIndex+1;e==this.state.numOfChilderen&&(e=0),this.setState({activeNodeIndex:e})}},{key:"applyFilter",value:function(e){var t=this;return e.map(function(e,n){var r={opacity:t.state.defaultOpacity};return n==t.state.activeNodeIndex?f.default.createElement(y.default,u({key:n},t.props,{callback:t.animationCompleteCb}),f.default.cloneElement(e)):f.default.cloneElement(e,{style:r})})}},{key:"render",value:function(){return this.applyFilter(this.props.children)}}]),t}(l.PureComponent);t.default=h,h.propTypes={children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node])}},function(e,t,n){"use strict";var r=n(5),o=n(6),i=n(7);e.exports=function(){function e(e,t,n,r,a,u){u!==i&&o(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t};return n.checkPropTypes=r,n.PropTypes=n,n}},function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,n){"use strict";function r(e,t,n,r,i,a,u,c){if(o(t),!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var f=[n,r,i,a,u,c],s=0;l=new Error(t.replace(/%s/g,function(){return f[s++]})),l.name="Invariant Violation"}throw l.framesToPop=1,l}}var o=function(e){};e.exports=r},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(0),l=r(c),f=n(1),s=r(f),p=function(e){function t(e){o(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={opacity:0},n}return a(t,e),u(t,[{key:"componentDidMount",value:function(){switch(this.props.fade){case"in":this.fadeIn(this.props.duration);break;case"out":this.fadeOut(this.props.duration);break;case"in-out":this.fadeInOut(this.props.duration)}}},{key:"animationCompleteCb",value:function(){"function"==typeof this.props.callback&&this.props.callback()}},{key:"fadeIn",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=0,o=1/(e/this.props.interval),i=setInterval(function(){r+=o,r>=1&&(r=1,clearInterval(i),n&&t.animationCompleteCb()),t.setState({opacity:r})},this.props.interval)}},{key:"fadeOut",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=1,o=1/(e/this.props.interval),i=setInterval(function(){r-=o,r<=0&&(r=0,clearInterval(i),n&&t.animationCompleteCb()),t.setState({opacity:r})},this.props.interval)}},{key:"fadeInOut",value:function(e){var t=this;new window.Promise(function(n){setTimeout(function(){n()},e/2),t.fadeIn(e/2,!1)}).then(function(){t.fadeOut(e/2)})}},{key:"applyFilter",value:function(e){var t={opacity:this.state.opacity};return l.default.cloneElement(e,{style:t})}},{key:"render",value:function(){return this.applyFilter(this.props.children)}}]),t}(c.PureComponent);t.default=p,p.defaultProps={fade:"in-out",duration:4e3,interval:20},p.propTypes={children:s.default.oneOfType([s.default.arrayOf(s.default.node),s.default.node]),fade:s.default.string.isRequired,duration:s.default.number.isRequired,interval:s.default.number.isRequired,callback:s.default.func}}]));