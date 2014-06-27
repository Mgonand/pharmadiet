!function(a){function b(a,b,c,d){var e=c.lang();return e[a].call?e[a](c,d):e[a][b]}function c(a,b){return function(c){return h(a.call(this,c),b)}}function d(a){return function(b){var c=a.call(this,b);return c+this.lang().ordinal(c)}}function e(a,b,c){this._d=a,this._isUTC=!!b,this._a=a._a||null,this._lang=c||!1}function f(a){var b=this._data={},c=a.years||a.y||0,d=a.months||a.M||0,e=a.weeks||a.w||0,f=a.days||a.d||0,h=a.hours||a.h||0,i=a.minutes||a.m||0,j=a.seconds||a.s||0,k=a.milliseconds||a.ms||0;this._milliseconds=k+1e3*j+6e4*i+36e5*h,this._days=f+7*e,this._months=d+12*c,b.milliseconds=k%1e3,j+=g(k/1e3),b.seconds=j%60,i+=g(j/60),b.minutes=i%60,h+=g(i/60),b.hours=h%24,f+=g(h/24),f+=7*e,b.days=f%30,d+=g(f/30),b.months=d%12,c+=g(d/12),b.years=c,this._lang=!1}function g(a){return 0>a?Math.ceil(a):Math.floor(a)}function h(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function i(a,b,c){var d,e=b._milliseconds,f=b._days,g=b._months;e&&a._d.setTime(+a+e*c),f&&a.date(a.date()+f*c),g&&(d=a.date(),a.date(1).month(a.month()+g*c).date(Math.min(d,a.daysInMonth())))}function j(a){return"[object Array]"===Object.prototype.toString.call(a)}function k(a,b){var c,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(c=0;d>c;c++)~~a[c]!==~~b[c]&&f++;return f+e}function l(a,b,c,d){var e,f,g=[];for(e=0;7>e;e++)g[e]=a[e]=null==a[e]?2===e?1:0:a[e];return a[7]=g[7]=b,null!=a[8]&&(g[8]=a[8]),a[3]+=c||0,a[4]+=d||0,f=new Date(0),b?(f.setUTCFullYear(a[0],a[1],a[2]),f.setUTCHours(a[3],a[4],a[5],a[6])):(f.setFullYear(a[0],a[1],a[2]),f.setHours(a[3],a[4],a[5],a[6])),f._a=g,f}function m(a,b){var c,d,e=[];for(!b&&H&&(b=require("./lang/"+a)),c=0;c<I.length;c++)b[I[c]]=b[I[c]]||F.en[I[c]];for(c=0;12>c;c++)d=B([2e3,c]),e[c]=new RegExp("^"+(b.months[c]||b.months(d,""))+"|^"+(b.monthsShort[c]||b.monthsShort(d,"")).replace(".",""),"i");return b.monthsParse=b.monthsParse||e,F[a]=b,b}function n(a){var b="string"==typeof a&&a||a&&a._lang||null;return b?F[b]||m(b):B}function o(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function p(a){var b,c,d=a.match(K);for(b=0,c=d.length;c>b;b++)d[b]=bb[d[b]]?bb[d[b]]:o(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+="function"==typeof d[b].call?d[b].call(e,a):d[b];return f}}function q(a,b){function c(b){return a.lang().longDateFormat[b]||b}for(var d=5;d--&&L.test(b);)b=b.replace(L,c);return $[b]||($[b]=p(b)),$[b](a)}function r(a){switch(a){case"DDDD":return P;case"YYYY":return Q;case"S":case"SS":case"SSS":case"DDD":return O;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":case"a":case"A":return R;case"Z":case"ZZ":return S;case"T":return T;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return N;default:return new RegExp(a.replace("\\",""))}}function s(a,b,c,d){var e,f;switch(a){case"M":case"MM":c[1]=null==b?0:~~b-1;break;case"MMM":case"MMMM":for(e=0;12>e;e++)if(n().monthsParse[e].test(b)){c[1]=e,f=!0;break}f||(c[8]=!1);break;case"D":case"DD":case"DDD":case"DDDD":null!=b&&(c[2]=~~b);break;case"YY":c[0]=~~b+(~~b>70?1900:2e3);break;case"YYYY":c[0]=~~Math.abs(b);break;case"a":case"A":d.isPm="pm"===(b+"").toLowerCase();break;case"H":case"HH":case"h":case"hh":c[3]=~~b;break;case"m":case"mm":c[4]=~~b;break;case"s":case"ss":c[5]=~~b;break;case"S":case"SS":case"SSS":c[6]=~~(1e3*("0."+b));break;case"Z":case"ZZ":d.isUTC=!0,e=(b+"").match(X),e&&e[1]&&(d.tzh=~~e[1]),e&&e[2]&&(d.tzm=~~e[2]),e&&"+"===e[0]&&(d.tzh=-d.tzh,d.tzm=-d.tzm)}null==b&&(c[8]=!1)}function t(a,b){var c,d,e=[0,0,1,0,0,0,0],f={tzh:0,tzm:0},g=b.match(K);for(c=0;c<g.length;c++)d=(r(g[c]).exec(a)||[])[0],d&&(a=a.slice(a.indexOf(d)+d.length)),bb[g[c]]&&s(g[c],d,e,f);return f.isPm&&e[3]<12&&(e[3]+=12),f.isPm===!1&&12===e[3]&&(e[3]=0),l(e,f.isUTC,f.tzh,f.tzm)}function u(a,b){var c,d,f,g,h,i=a.match(M)||[],j=99;for(f=0;f<b.length;f++)g=t(a,b[f]),d=q(new e(g),b[f]).match(M)||[],h=k(i,d),j>h&&(j=h,c=g);return c}function v(a){var b,c="YYYY-MM-DDT";if(U.exec(a)){for(b=0;4>b;b++)if(W[b][1].exec(a)){c+=W[b][0];break}return S.exec(a)?t(a,c+" Z"):t(a,c)}return new Date(a)}function w(a,b,c,d,e){var f=e.relativeTime[a];return"function"==typeof f?f(b||1,!!c,a,d):f.replace(/%d/i,b||1)}function x(a,b,c){var d=E(Math.abs(a)/1e3),e=E(d/60),f=E(e/60),g=E(f/24),h=E(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",E(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,w.apply({},i)}function y(a,b){B.fn[a]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),this):this._d["get"+c+b]()}}function z(a){B.duration.fn[a]=function(){return this._data[a]}}function A(a,b){B.duration.fn["as"+a]=function(){return+this/b}}for(var B,C,D="1.7.2",E=Math.round,F={},G="en",H="undefined"!=typeof module&&module.exports,I="months|monthsShort|weekdays|weekdaysShort|weekdaysMin|longDateFormat|calendar|relativeTime|ordinal|meridiem".split("|"),J=/^\/?Date\((\-?\d+)/i,K=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|YYYY|YY|a|A|hh?|HH?|mm?|ss?|SS?S?|zz?|ZZ?|.)/g,L=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?)/g,M=/([0-9a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)/gi,N=/\d\d?/,O=/\d{1,3}/,P=/\d{3}/,Q=/\d{1,4}/,R=/[0-9a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+/i,S=/Z|[\+\-]\d\d:?\d\d/i,T=/T/i,U=/^\s*\d{4}-\d\d-\d\d(T(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,V="YYYY-MM-DDTHH:mm:ssZ",W=[["HH:mm:ss.S",/T\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/T\d\d:\d\d:\d\d/],["HH:mm",/T\d\d:\d\d/],["HH",/T\d\d/]],X=/([\+\-]|\d\d)/gi,Y="Month|Date|Hours|Minutes|Seconds|Milliseconds".split("|"),Z={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},$={},_="DDD w M D d".split(" "),ab="M D H h m s w".split(" "),bb={M:function(){return this.month()+1},MMM:function(a){return b("monthsShort",this.month(),this,a)},MMMM:function(a){return b("months",this.month(),this,a)},D:function(){return this.date()},DDD:function(){var a=new Date(this.year(),this.month(),this.date()),b=new Date(this.year(),0,1);return~~((a-b)/864e5+1.5)},d:function(){return this.day()},dd:function(a){return b("weekdaysMin",this.day(),this,a)},ddd:function(a){return b("weekdaysShort",this.day(),this,a)},dddd:function(a){return b("weekdays",this.day(),this,a)},w:function(){var a=new Date(this.year(),this.month(),this.date()-this.day()+5),b=new Date(a.getFullYear(),0,4);return~~((a-b)/864e5/7+1.5)},YY:function(){return h(this.year()%100,2)},YYYY:function(){return h(this.year(),4)},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return h(~~(this.milliseconds()/10),2)},SSS:function(){return h(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+h(~~(a/60),2)+":"+h(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+h(~~(10*a/6),4)}};_.length;)C=_.pop(),bb[C+"o"]=d(bb[C]);for(;ab.length;)C=ab.pop(),bb[C+C]=c(bb[C],2);for(bb.DDDD=c(bb.DDD,3),B=function(b,c){if(null===b||""===b)return null;var d,f;return B.isMoment(b)?new e(new Date(+b._d),b._isUTC,b._lang):(c?d=j(c)?u(b,c):t(b,c):(f=J.exec(b),d=b===a?new Date:f?new Date(+f[1]):b instanceof Date?b:j(b)?l(b):"string"==typeof b?v(b):new Date(b)),new e(d))},B.utc=function(a,b){return j(a)?new e(l(a,!0),!0):("string"==typeof a&&!S.exec(a)&&(a+=" +0000",b&&(b+=" Z")),B(a,b).utc())},B.unix=function(a){return B(1e3*a)},B.duration=function(a,b){var c,d=B.isDuration(a),e="number"==typeof a,g=d?a._data:e?{}:a;return e&&(b?g[b]=a:g.milliseconds=a),c=new f(g),d&&(c._lang=a._lang),c},B.humanizeDuration=function(a,b,c){return B.duration(a,b===!0?null:b).humanize(b===!0?!0:c)},B.version=D,B.defaultFormat=V,B.lang=function(a,b){var c;if(!a)return G;if((b||!F[a])&&m(a,b),F[a]){for(c=0;c<I.length;c++)B[I[c]]=F[a][I[c]];B.monthsParse=F[a].monthsParse,G=a}},B.langData=n,B.isMoment=function(a){return a instanceof e},B.isDuration=function(a){return a instanceof f},B.lang("en",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinal:function(a){var b=a%10;return 1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th"}}),B.fn=e.prototype={clone:function(){return B(this)},valueOf:function(){return+this._d},unix:function(){return Math.floor(+this._d/1e3)},toString:function(){return this._d.toString()},toDate:function(){return this._d},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds(),!!this._isUTC]},isValid:function(){return this._a?null!=this._a[8]?!!this._a[8]:!k(this._a,(this._a[7]?B.utc(this._a):B(this._a)).toArray()):!isNaN(this._d.getTime())},utc:function(){return this._isUTC=!0,this},local:function(){return this._isUTC=!1,this},format:function(a){return q(this,a?a:B.defaultFormat)},add:function(a,b){var c=b?B.duration(+b,a):B.duration(a);return i(this,c,1),this},subtract:function(a,b){var c=b?B.duration(+b,a):B.duration(a);return i(this,c,-1),this},diff:function(a,b,c){var d,e=this._isUTC?B(a).utc():B(a).local(),f=6e4*(this.zone()-e.zone()),g=this._d-e._d-f,h=this.year()-e.year(),i=this.month()-e.month(),j=this.date()-e.date();return d="months"===b?12*h+i+j/30:"years"===b?h+(i+j/30)/12:"seconds"===b?g/1e3:"minutes"===b?g/6e4:"hours"===b?g/36e5:"days"===b?g/864e5:"weeks"===b?g/6048e5:g,c?d:E(d)},from:function(a,b){return B.duration(this.diff(a)).lang(this._lang).humanize(!b)},fromNow:function(a){return this.from(B(),a)},calendar:function(){var a=this.diff(B().sod(),"days",!0),b=this.lang().calendar,c=b.sameElse,d=-6>a?c:-1>a?b.lastWeek:0>a?b.lastDay:1>a?b.sameDay:2>a?b.nextDay:7>a?b.nextWeek:c;return this.format("function"==typeof d?d.apply(this):d)},isLeapYear:function(){var a=this.year();return 0===a%4&&0!==a%100||0===a%400},isDST:function(){return this.zone()<B([this.year()]).zone()||this.zone()<B([this.year(),5]).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null==a?b:this.add({d:a-b})},startOf:function(a){switch(a.replace(/s$/,"")){case"year":this.month(0);case"month":this.date(1);case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return this},endOf:function(a){return this.startOf(a).add(a.replace(/s?$/,"s"),1).subtract("ms",1)},sod:function(){return this.clone().startOf("day")},eod:function(){return this.clone().endOf("day")},zone:function(){return this._isUTC?0:this._d.getTimezoneOffset()},daysInMonth:function(){return B.utc([this.year(),this.month()+1,0]).date()},lang:function(b){return b===a?n(this):(this._lang=b,this)}},C=0;C<Y.length;C++)y(Y[C].toLowerCase(),Y[C]);y("year","FullYear"),B.duration.fn=f.prototype={weeks:function(){return g(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*this._months},humanize:function(a){var b=+this,c=this.lang().relativeTime,d=x(b,!a,this.lang()),e=0>=b?c.past:c.future;return a&&(d="function"==typeof e?e(d):e.replace(/%s/i,d)),d},lang:B.fn.lang};for(C in Z)Z.hasOwnProperty(C)&&(A(C,Z[C]),z(C.toLowerCase()));A("Weeks",6048e5),H&&(module.exports=B),"undefined"==typeof ender&&(this.moment=B),"function"==typeof define&&define.amd&&define("moment",[],function(){return B})}.call(this);var lang={actions:{logi:"Entrar",logo:"Desconectar",icht:"Iniciar chat",purc:"Dominio no disponible",chat:"Chatear con...",conn:"No cerrar sesión",show:"Mostrar solo conectados",hiau:"Ocultar automáticamente",sett:"Herramientas",clos:"Cerrar",attc:"Ver archivo adjunto",cont:"Reportar un error",invi:"Invitar a Tawea",ioth:"En otro momento",send:"Enviar",rtry:"Reintentar",itib:"Instala Tawea en tu web",puon:"Publicar en",shon:"Compartir en",shar:"Compartir",back:"Atrás",join:"Unirse"},messages:{writ:"está escribiendo...",notf:"No se ha encontrado a este amigo",load:"Cargando...",erro:"Error",main:"Mantenimiento",dese:"Descripción del error",thks:"Gracias!",nsnd:"No se ha podido enviar el mensaje:",dhas:"Arrastra aquí y comparte con",sstw:"Comienza a compartir la web",helo:"Hola",das1:"¿Has probado la nueva funcionalidad de Tawea para",das2:"compartir fotos y videos",shaw:"Compartido con",sour:"Fuente",ncom:"No hay mensajes",chof:"Chat de",lmes:"Cargando mensajes..."},connection:{CONFAIL:"Conexión fallida",CONNECTING:"Conectando...",AUTHENTICATING:"Autentificando...",AUTHFAIL:"Fallo en la autentificación",CONNECTED:"Conectado",DISCONNECTED:"Desconectado",DISCONNECTING:"Desconectando..."}};!function(){var a={months:"Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre".split("_"),monthsShort:"Ene._Feb._Mar._Abr._May._Jun._Jul._Ago._Sep._Oct._Nov._Dic.".split("_"),weekdays:"Domingo_Lunes_Martes_Miércoles_Jueves_Viernes_Sábado".split("_"),weekdaysShort:"Dom._Lun._Mar._Mié._Jue._Vie._Sáb.".split("_"),weekdaysMin:"Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),longDateFormat:{LT:"H:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY LT",LLLL:"dddd D MMMM YYYY LT"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinal:function(){return"º"}};"undefined"!=typeof module&&module.exports&&(module.exports=a),"undefined"!=typeof window&&this.moment&&this.moment.lang&&this.moment.lang("es",a),moment.lang("es")}();