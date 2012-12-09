﻿;var VirtualKeyboard=new function(){var i=this;i.$VERSION$="3.6.1.585";var I={'layout':null};var l='kb_b';var o=true;var O={14:'backspace',15:'tab',28:'enter',29:'caps',41:'shift_left',52:'shift_right',53:'del',54:'ctrl_left',55:'alt_left',56:'space',57:'alt_right',58:'ctrl_right'};var Q={'SHIFT':'shift','ALT':'alt','CTRL':'ctrl','CAPS':'caps'};var _;var c={'QWERTY Standard':"À1234567890m=ÜQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾¿",'QWERTY Canadian':"Þ1234567890m=ÜQWERTYUIOPÛÝASDFGHJKL;ÀZXCVBNM¼¾¿",'QWERTY Dutch':"Þ1234567890Û¿ÜQWERTYUIOPÝ;ASDFGHJKL=ÀZXCVBNM¼¾m",'QWERTY Estonian':"¿1234567890m=ÜQWERTYUIOPÞÛASDFGHJKL;ÀZXCVBNM¼¾Ý",'QWERTY Greek (220)':"À1234567890¿ÛÜQWERTYUIOP=ÝASDFGHJKL;ÞZXCVBNM¼¾m",'QWERTY Greek (319)':"À1234567890¿=ÜQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾m",'QWERTY Gujarati':"À1234567890m=XQWERTYUIOPÛÝASDFGHJKL;ÜZXCVBNM¼¾¿",'QWERTY Italian':"Ü1234567890ÛÝ¿QWERTYUIOP;=ASDFGHJKLÀÞZXCVBNM¼¾m",'QWERTY Kannada':"À1234567890m=ZQWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¼¾¿",'QWERTY Portuguese':"À1234567890ÛÝ¿QWERTYUIOP=;ASDFGHJKLÞÜZXCVBNM¼¾m",'QWERTY Scandinavian':"Ü1234567890=Û¿QWERTYUIOPÝ;ASDFGHJKLÀÞZXCVBNM¼¾m",'QWERTY Spanish':"Ü1234567890mÛ¿QWERTYUIOPÝ;ASDFGHJKLÀÞZXCVBNM¼¾ß",'QWERTY Tamil':"À1234567890m =ZQWERTYUIOPÛÝASDFGHJKL;ÞCVBNM¼¾ ¿",'QWERTY Turkish':"À1234567890ßm¼QWERTYUIOPÛÝASDFGHJKL;ÞZXCVBNM¿Ü¾",'QWERTY UK':"ß1234567890m=ÞQWERTYUIOPÛÝASDFGHJKL;ÀZXCVBNM¼¾¿",'QWERTZ Albanian':"À1234567890m=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾¿",'QWERTZ Bosnian':"À1234567890¿=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",'QWERTZ Czech':"À1234567890=¿ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",'QWERTZ German':"Ü1234567890ÛÝ¿QWERTZUIOP;=ASDFGHJKLÀÞYXCVBNM¼¾m",'QWERTZ Hungarian':"0123456789À¿=ÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",'QWERTZ Slovak':"À1234567890¿ßÜQWERTZUIOPÛÝASDFGHJKL;ÞYXCVBNM¼¾m",'QWERTZ Swiss':"Ü1234567890ÛÝßQWERTZUIOP;ÞASDFGHJKLÀ¿YXCVBNM¼¾m",'AZERTY Belgian':"Þ1234567890ÛmÜAZERTYUIOPÝ;QSDFGHJKLMÀWXCVBN¼¾¿=",'AZERTY French':"Þ1234567890Û=ÜAZERTYUIOPÝ;QSDFGHJKLMÀWXCVBN¼¾¿ß",',WERTY Bulgarian':"À1234567890m¾Ü¼WERTYUIOPÛÝASDFGHJKL;ÞZXCVBNMßQ¿",'QGJRMV Latvian':"À1234567890mFÜQGJRMVNZWXYH;USILDATECÞÛBÝKPOß¼¾¿",'/,.PYF UK-Dvorak':"m1234567890ÛÝÜÀ¼¾PYFGCRL¿=AOEUIDHTNSÞ;QJKXBMWVZ",'FG;IOD Turkish F':"À1234567890=mXFG;IODRNHPQWUÛEAÝTKMLYÞJÜVC¿ZSB¾¼",';QBYUR US-Dvorak':"7ÛÝ¿PFMLJ4321Ü;QBYURSO¾65=mKCDTHEAZ8ÞÀXGVWNI¼09",'56Q.OR US-Dvorak':"m1234JLMFP¿ÛÝÜ56Q¾ORSUYB;=78ZAEHTDCKÞ90X¼INWVGÀ"};var C=0,v=0,V=1,x=2,X=4,z=8,Z=X|z,w=X|V,W=x|z,s=x|X,S=x|X|z,k=x|V,K=V|x|X,q=V|z,E=V|x|X|z;var r={'buttonUp':'kbButton','buttonDown':'kbButtonDown','buttonHover':'kbButtonHover','hoverShift':'hoverShift','hoverAlt':'hoverAlt','modeAlt':'modeAlt','modeAltCaps':'modeAltCaps','modeCaps':'modeCaps','modeNormal':'modeNormal','modeShift':'modeShift','modeShiftAlt':'modeShiftAlt','modeShiftAltCaps':'modeShiftAltCaps','modeShiftCaps':'modeShiftCaps','charNormal':'charNormal','charShift':'charShift','charAlt':'charAlt','charShiftAlt':'charShiftAlt','charCaps':'charCaps','charShiftCaps':'charShiftCaps','hiddenAlt':'hiddenAlt','hiddenCaps':'hiddenCaps','hiddenShift':'hiddenShift','hiddenShiftCaps':'hiddenShiftCaps','deadkey':'deadKey','noanim':'VK_no_animate'};var R=null;var t=[];t.hash={};t.codes={};t.codeFilter=null;t.options=null;var T={keyboard:null,desk:null,langbox:null,attachedInput:null};var y=null;i.addLayoutList=function(){for(var e=0,L=arguments.length;e<L;e++){i.addLayout(arguments[e]);}};i.addLayout=function(e){var L=e.code.entityDecode().split("-"),b=e.name.entityDecode(),B=D(e.normal);if(!isArray(B)||47!=B.length)throw new Error('VirtualKeyboard requires \'keys\' property to be an array with 47 items, '+B.length+' detected. Layout code: '+L+', layout name: '+b);e.code=(L[1]||L[0]);e.name=b;e.normal=B;e.domain=L[0];if(t.hash.hasOwnProperty(e.code+" "+e.name))return;if(!t.codes.hasOwnProperty(e.code))t.codes[e.code]=e.code;e.toString=function(){return this.code+" "+this.name};t.push(e);t.options=null};i.switchLayout=function(e){d();if(!t.options.hasOwnProperty(e))return false;i.IME.hide();T.langbox.options[t.options[e]].selected=true;R=t[t.hash[e]];if(!isArray(R))R=t[t.hash[e]]=f(R);if(!isArray(R)){R=t[t.hash[e]]=f(R);}if(!R.html){R.html=j(R);}T.desk.innerHTML=R.html;T.keyboard.className=R.domain;i.IME.css=R.domain;C=v;F();if(isFunction(R.activate)){R.activate();}A();DocumentCookie.set('vk_layout',e);return true};i.getLayouts=function(){var e=[];for(var L=0,b=t.length;L<b;L++){e[e.length]=[t[L].code,t[L].name]}return e.sort();};i.setVisibleLayoutCodes=function(){var e=isArray(arguments[0])?arguments[0]:arguments,L=null,b;for(var B=0,n=e.length;B<n;B++){b=e[B].toUpperCase();if(!t.codes.hasOwnProperty(b))continue;if(!L)L={};L[b]=b}t.codeFilter=L;t.options=null;if(!i.switchLayout(T.langbox.value)){i.switchLayout(T.langbox.value);}};i.getLayoutCodes=function(){var e=[];for(var L in t.codes){if(!t.codes.hasOwnProperty(L))continue;e.push(L);}return e.heapSort();};var Y=function(L,b){var B="",n=false;L=L.replace(l,"");switch(L){case Q.CAPS:case Q.SHIFT:case"shift_left":case"shift_right":case Q.ALT:case"alt_left":case"alt_right":return true;case'backspace':if(isFunction(R.charProcessor)&&DocumentSelection.getSelection(T.attachedInput).length){B="\x08"}else if(b){i.IME.hide(true);return true}else{DocumentSelection.deleteAtCursor(T.attachedInput,false);i.IME.hide(true);}break;case'del':i.IME.hide(true);if(b)return true;DocumentSelection.deleteAtCursor(T.attachedInput,true);break;case'space':B=" ";break;case'tab':B="\t";break;case'enter':B="\n";break;default:var N=document.getElementById(l+L);B=R[L][C];break}if(B){if(!(B=H(B,DocumentSelection.getSelection(T.attachedInput))))return n;try{if(B[1]||B[0].length>1||B.charCodeAt(0)>0x7fff||T.attachedInput.contentDocument||'\t'==B[0]){throw new Error}var m=B[0].charCodeAt(0);if(isFunction(document.createEvent)){var b=null;try{b=document.createEvent("KeyEvents");b.initKeyEvent('keypress',false,true,T.attachedInput.contentWindow,false,false,false,false,0,m);}catch(ex){b=document.createEvent("KeyboardEvents");b.initKeyEvent('keypress',false,true,T.attachedInput.contentWindow,false,false,false,false,m,0);}b.VK_bypass=true;T.attachedInput.dispatchEvent(b);}else{b.keyCode=10==m?13:m;n=true}}catch(e){DocumentSelection.insertAtCursor(T.attachedInput,B[0]);if(B[1]){DocumentSelection.setRange(T.attachedInput,-B[1],0,true);}}}return n};var u=function(e){if(!i.isOpen())return;var L=C;var b=e.getKeyCode();switch(e.type){case'keydown':switch(b){case 37:if(i.IME.isOpen()){i.IME.prevPage(e);return}break;case 39:if(i.IME.isOpen()){i.IME.nextPage(e);return}break;case 8:case 9:case 46:var B=T.desk.childNodes[_[b]];if(o&&!e.getRepeat())DOM.CSS(B).addClass(r.buttonDown);if(!Y(B.id,e))e.preventDefault();break;case 20:if(!e.getRepeat()){L=L^z}break;case 27:if(i.IME.isOpen()){i.IME.hide();}else{var n=DocumentSelection.getStart(T.attachedInput);DocumentSelection.setRange(T.attachedInput,n,n);}return false;default:if(!e.getRepeat()){L=L|e.shiftKey|e.ctrlKey<<2|e.altKey<<1}if(_.hasOwnProperty(b)){if(!(e.altKey^e.ctrlKey)){var B=T.desk.childNodes[_[b]];if(o)DOM.CSS(B).addClass(r.buttonDown);y=B.id}if(e.altKey&&e.ctrlKey){e.preventDefault();if(e.srcElement){Y(T.desk.childNodes[_[b]].id,e);y=""}}}else{i.IME.hide();}break}break;case'keyup':switch(b){case 20:break;default:if(!e.getRepeat()){L=C&(E^(!e.shiftKey|(!e.ctrlKey<<2)|(!e.altKey<<1)));}if(o&&_.hasOwnProperty(b)){DOM.CSS(T.desk.childNodes[_[b]]).removeClass(r.buttonDown);}}break;case'keypress':if(y&&!e.VK_bypass){if(!Y(y,e)){e.stopPropagation();e.preventDefault();}y=null}if(!C^s&&(e.altKey||e.ctrlKey)){i.IME.hide();}if(0==b&&!y&&!e.VK_bypass&&(!e.ctrlKey&&!e.altKey&&!e.shiftKey)){e.preventDefault();}}if(L!=C){g(L);F();}};var U=function(e){var L=DOM.getParent(e.srcElement||e.target,'a');if(!L||L.parentNode.id.indexOf(l)<0)return;L=L.parentNode;switch(L.id.substring(l.length)){case"caps":case"shift_left":case"shift_right":case"alt_left":case"alt_right":case"ctrl_left":case"ctrl_right":return}if(DOM.CSS(L).hasClass(r.buttonDown)||!o){Y(L.id);}if(o){DOM.CSS(L).removeClass(r.buttonDown)}var b=C&(z|e.shiftKey|e.altKey<<1|e.ctrlKey<<2);if(C!=b){g(b);F();}};var p=function(e){var L=DOM.getParent(e.srcElement||e.target,'a');if(!L||L.parentNode.id.indexOf(l)<0)return;L=L.parentNode;var b=C;var B=L.id.substring(l.length);switch(B){case"caps":b=b^z;break;case"shift_left":case"shift_right":if(e.shiftKey)break;b=b^V;break;case"alt_left":case"alt_right":case"ctrl_left":case"ctrl_right":b=b^(e.altKey<<1^x)^(e.ctrlKey<<2^X);break;default:if(o)DOM.CSS(L).addClass(r.buttonDown);break}if(C!=b){g(b);F();}e.preventDefault();e.stopPropagation();};var P=function(e){var L=DOM.getParent(e.srcElement||e.target,'a'),b={'mouseover':2,'mouseout':3};if(!L||L.parentNode.id.indexOf(l)<0)return;L=L.parentNode;if(L.id.indexOf('shift')>-1){G(b[e.type],Q.SHIFT);}else if(L.id.indexOf('alt')>-1||L.id.indexOf('ctrl')>-1){G(b[e.type],Q.CTRL);G(b[e.type],Q.ALT);}else if(L.id.indexOf('caps')>-1){h(b[e.type],null,L.id);}else if(o){h(b[e.type],null,L.id);if('mouseout'==e.type.toLowerCase()){h(0,null,L.id);}}e.preventDefault();e.stopPropagation();};var a=function(e){DocumentCookie.set('vk_mapping',e.target.value);_=c[e.target.value]};i.attachInput=function(e){if(!e)return T.attachedInput;if(isString(e))e=document.getElementById(e);if(e==T.attachedInput)return T.attachedInput;if(!i.switchLayout(I.layout)&&!i.switchLayout(T.langbox.value)){throw new Error('No layouts available');}i.detachInput();if(!e||!e.tagName){T.attachedInput=null}else{o=!DOM.CSS(e).hasClass(r.noanim);T.attachedInput=e;A();if(e.contentWindow){e=e.contentWindow.document.body.parentNode}EM.addEventListener(e,'keydown',u);EM.addEventListener(e,'keyup',u);EM.addEventListener(e,'keypress',u);EM.addEventListener(e,'mousedown',i.IME.blurHandler);}return T.attachedInput};i.detachInput=function(){if(!T.attachedInput)return false;A(true);i.IME.hide();if(T.attachedInput){var e=T.attachedInput;if(e.contentWindow){e=e.contentWindow.document.body.parentNode}EM.removeEventListener(e,'keydown',u);EM.removeEventListener(e,'keypress',u);EM.removeEventListener(e,'keyup',u);EM.removeEventListener(e,'mousedown',i.IME.blurHandler);}T.attachedInput=null;return true};i.getAttachedInput=function(e){return T.attachedInput};i.open=i.show=function(e,L,b){if(!(e=i.attachInput(T.attachedInput||e))||!T.keyboard||!document.body)return false;if(!T.keyboard.parentNode||T.keyboard.parentNode.nodeType==11){if(isString(L))L=document.getElementById(L);if(!L.appendChild)return false;L.appendChild(T.keyboard);if(!isUndefined(b)&&e!=b&&b.appendChild){EM.addEventListener(b,'keydown',u);EM.addEventListener(b,'keyup',u);EM.addEventListener(b,'keypress',u);}}return true};i.close=i.hide=function(){if(!T.keyboard||!i.isOpen())return false;i.detachInput();T.keyboard.parentNode.removeChild(T.keyboard);return true};i.toggle=function(e,L,b){i.isOpen()?i.close():i.show(e,L,b);};i.isOpen=function(){return(!!T.keyboard.parentNode)&&T.keyboard.parentNode.nodeType==1};var A=function(e){if(T.attachedInput){var C=e?"":(R.rtl?'rtl':'ltr');if(T.attachedInput.contentWindow)T.attachedInput.contentWindow.document.body.dir=C;else T.attachedInput.dir=C}};var d=function(){if(null!=t.options)return;var e=t.heapSort(),L,b,B,n={};t.options={};T.langbox.innerHTML="";for(var N=0,m=e.length,M=0;N<m;N++){L=t[N];B=L.code+" "+L.name;t.hash[B]=N;if(t.codeFilter&&!t.codeFilter.hasOwnProperty(L.code))continue;if(n.label!=L.code){n=document.createElement('optgroup');n.label=L.code;T.langbox.appendChild(n);}b=document.createElement('option');b.value=B;b.appendChild(document.createTextNode(L.name));b.label=L.name;n.appendChild(b);t.options[B]=M++}};var D=function(e){if(isString(e))return e.match(/\x01.+?\x01|[\ud800-\udbff][\udc00-\udfff]|./g).map(function(L){return L.replace(/[\x01\x02]/g,"")});else return e.map(function(L){return isArray(L)?L.map(function(e){String.fromCharCodeExt(e)}).join(""):String.fromCharCodeExt(L).replace(/[\x01\x02]/g,"")});};var f=function(e){var L=e.normal,b=e.shift||{},B=e.alt||{},n=e.shift_alt||{},N=e.caps||{},m=e.shift_caps||{},M=e.dk,ii=e.cbk,iI,il,io,iO,iQ=null,i_,ic,iC,ie,iv=-1,iV=[];iV.name=e.name;iV.code=e.code;iV.toString=e.toString;for(var ix=0,iX=L.length;ix<iX;ix++){var iz=L[ix],iZ=null,iw=null,iW=null,char=[iz];if(b.hasOwnProperty(ix)){iI=D(b[ix]);i_=ix}if(i_>-1&&iI[ix-i_]){iW=iI[ix-i_];char[V]=iW}else if(iz&&iz!=(iz=iz.toUpperCase())){char[V]=iz;iW=iz}if(B.hasOwnProperty(ix)){il=D(B[ix]);ic=ix}if(ic>-1&&il[ix-ic]){iZ=il[ix-ic];char[s]=iZ}if(n.hasOwnProperty(ix)){io=D(n[ix]);iC=ix}if(iC>-1&&io[ix-iC]){char[K]=io[ix-iC]}else if(iZ&&iZ!=(iZ=iZ.toUpperCase())){char[K]=iZ}if(N.hasOwnProperty(ix)){iO=D(N[ix]);ie=ix}if(ie>-1&&iO[ix-ie]){iw=iO[ix-ie]}if(iw){char[z]=iw}else if(iW&&iW.toUpperCase()!=iW.toLowerCase()){char[z]=iW}else if(iz){char[z]=iz.toUpperCase();}if(m.hasOwnProperty(ix)){iQ=D(m[ix]);iv=ix}if(iv>-1&&iQ[ix-iv]){char[q]=iQ[ix-iv]}else if(iW){char[q]=iW.toLowerCase();}else if(iz){char[q]=iz}iV[ix]=char}if(M){iV.dk={};for(var ix in M){if(M.hasOwnProperty(ix)){var iS=ix;if(parseInt(ix)&&ix>9){iS=String.fromCharCode(ix);}iV.dk[iS]=D(M[ix]).join("").replace(iS,iS+iS);}}}iV.rtl=!!iV.join("").match(/[\u05b0-\u06ff]/);iV.domain=e.domain;if(isFunction(ii)){iV.charProcessor=ii}else if(ii){iV.activate=ii.activate;iV.charProcessor=ii.charProcessor}return iV};var F=function(){var e=[];e[v]=r.modeNormal;e[V]=r.modeShift;e[s]=r.modeAlt;e[K]=r.modeShiftAlt;e[z]=r.modeCaps;e[q]=r.modeShiftCaps;e[x]=r.modeNormal;e[X]=r.modeNormal;e[k]=r.modeShift;e[w]=r.modeShift;e[W]=r.modeCaps;e[Z]=r.modeCaps;e[S]=r.modeShiftAltCaps;e[E]=r.modeShiftAltCaps;DOM.CSS(T.desk).removeClass(e).addClass(e[C]);};var g=function(e){var L=C^e;if(L&V){G(!!(e&V),Q.SHIFT);}if(L&x){G(!!(e&x),Q.ALT);}if(L&X){G(!!(e&X),Q.CTRL);}if(L&z){h(!!(e&z),Q.CAPS);}C=e};var G=function(e,L){var b=document.getElementById(l+L+'_left'),B=document.getElementById(l+L+'_right');switch(0+e){case 0:b.className=DOM.CSS(B).removeClass(r.buttonDown).getClass();break;case 1:DOM.CSS(T.desk).removeClass([r.hoverShift,r.hoverAlt]);b.className=DOM.CSS(B).addClass(r.buttonDown).getClass();break;case 2:if(Q.SHIFT==L&&C&V^V){DOM.CSS(T.desk).addClass(r.hoverShift);}else if(Q.ALT==L&&C^s){DOM.CSS(T.desk).addClass(r.hoverAlt);}b.className=DOM.CSS(B).addClass(r.buttonHover).getClass();break;case 3:if(Q.SHIFT==L){DOM.CSS(T.desk).removeClass(r.hoverShift);}else if(Q.ALT==L){DOM.CSS(T.desk).removeClass(r.hoverAlt);}b.className=DOM.CSS(B).removeClass(r.buttonHover).getClass();break}};var h=function(e,L,b){var B=document.getElementById(L?l+L:b);if(B){switch(0+e){case 0:DOM.CSS(B).removeClass(r.buttonDown);break;case 1:DOM.CSS(B).addClass(r.buttonDown);break;case 2:DOM.CSS(B).addClass(r.buttonHover);break;case 3:DOM.CSS(B).removeClass(r.buttonHover);break}}};var H=function(e,L){var b=[e,0];if(isFunction(R.charProcessor)){b=R.charProcessor(e,L);}else if(e=="\x08"){b=['',0]}else if(R.dk&&L.length<=1){if(R.dk.hasOwnProperty(L)){b[1]=0;var B=R.dk[L];idx=B.indexOf(e)+1;b[0]=idx?B.charAt(idx):e}else if(R.dk.hasOwnProperty(e)){b[1]=1;b[0]=e}}return b};var j=function(R){var e=document.createElement('span');document.body.appendChild(e);e.style.position='absolute';e.style.left='-1000px';for(var L=0,b=R.length,B=[],n,N;L<b;L++){n=R[L];B.push(["<div id='",l,L,"' class='",r.buttonUp,"'><a>",J(R,n,v,r.charNormal,e),J(R,n,V,r.charShift,e),J(R,n,s,r.charAlt,e),J(R,n,K,r.charShiftAlt,e),J(R,n,z,r.charCaps,e),J(R,n,q,r.charShiftCaps,e),"</a></div>"].join(""));}for(var L in O){if(O.hasOwnProperty(L)){n=O[L];N=n.replace(/_.+/,'');B.splice(L,0,["<div id='",l,n,"' class='",r.buttonUp,"'><a title='",N,"'","><span class='title'>",N,"</span>","</a></div>"].join(""));}}document.body.removeChild(e);return B.join("").replace(/(<\w+)/g,"$1 unselectable='on' ");};var J=function(e,L,C,b,B){var n=[],N=e.dk&&e.dk.hasOwnProperty(L[C]),char=L[C]||"";if(N)b+=" "+r.deadkey;if((C==q&&L[z]&&char.toLowerCase()==L[z].toLowerCase())||(C==z&&L[q]&&char.toLowerCase()==L[q].toLowerCase())){b+=" "+r.hiddenCaps}if((C==V&&L[v]&&char.toLowerCase()==L[v].toLowerCase())||(C==v&&L[V]&&char.toLowerCase()==L[V].toLowerCase())){b+=" "+r.hiddenShift}if((C==V&&L[q]&&char.toLowerCase()==L[q].toLowerCase())||(C==q&&L[V]&&char.toLowerCase()==L[V].toLowerCase())){b+=" "+r.hiddenShiftCaps}if((C==z&&L[v]&&char.toLowerCase()==L[v].toLowerCase())||(C==v&&L[z]&&char.toLowerCase()==L[z].toLowerCase())){b+=" "+r.hiddenCaps}if((C==K&&L[s]&&char.toLowerCase()==L[s].toLowerCase())||(C==s&&L[V]&&char.toLowerCase()==L[V].toLowerCase())){b+=" "+r.hiddenAlt}n.push("<span");if(b){n.push(" class=\""+b+"\"");}n.push(" >\xa0"+char+"\xa0</span>");return n.join("");};(function(){T.keyboard=document.createElement('div');T.keyboard.unselectable="on";T.keyboard.id='virtualKeyboard';T.keyboard.innerHTML=("<div id=\"kbDesk\"><!-- --></div>"+"<select id=\"kb_langselector\"></select>"+"<select id=\"kb_mappingselector\"></select>"+'<div id="copyrights" nofocus="true"><a href="http://debugger.ru/projects/virtualkeyboard" target="_blank" title="&copy;2006-2009 Debugger.ru">VirtualKeyboard '+i.$VERSION$+'</a></div>').replace(/(<\w+)/g,"$1 unselectable='on' ");T.desk=T.keyboard.firstChild;var e=T.keyboard.childNodes.item(1);EM.addEventListener(e,'change',function(ii){i.switchLayout(this.value)});T.langbox=e;var e=e.nextSibling,L="";_=DocumentCookie.get('vk_mapping');if(!c.hasOwnProperty(_))_='QWERTY Standard';for(var b in c){var B=c[b].split("").map(function(ii){return ii.charCodeAt(0)});B.splice(14,0,8,9);B.splice(28,0,13,20);B.splice(41,0,16);B.splice(52,0,16,46,17,18,32,18,17);var n=B;B=[];for(var N=0,m=n.length;N<m;N++){B[n[N]]=N}c[b]=B;n=b.split(" ",2);if(L.indexOf(L=n[0])!=0){e.appendChild(document.createElement('optgroup'));e.lastChild.label=L}B=document.createElement('option');e.lastChild.appendChild(B);B.value=b;B.innerHTML=n[1];B.selected=(b==_);}_=c[_];EM.addEventListener(e,'change',a);EM.addEventListener(T.desk,'mousedown',p);EM.addEventListener(T.desk,'mouseup',U);EM.addEventListener(T.desk,'mouseover',P);EM.addEventListener(T.desk,'mouseout',P);EM.addEventListener(T.desk,'click',EM.preventDefaultAction);T.keyboard.onmousedown=function(ii){if(!ii||!ii.target.tagName||'select'!=ii.target.tagName.toLowerCase())return false};var M=getScriptQuery('virtualkeyboard.js');I.layout=DocumentCookie.get('vk_layout')||M.vk_layout||null})();};VirtualKeyboard.Langs={};VirtualKeyboard.IME=new function(){var i=this;var I="<div id=\"VirtualKeyboardIME\"><table><tr><td class=\"IMEControl\"><div class=\"left\"><!-- --></div></td>"+"<td class=\"IMEControl IMEContent\"></td>"+"<td class=\"IMEControl\"><div class=\"right\"><!-- --></div></td></tr>"+"<tr><td class=\"IMEControl IMEInfo\" colspan=\"3\"><div class=\"showAll\"><div class=\"IMEPageCounter\"></div><div class=\"arrow\"></div></div></td></tr></div>";var l=null;var o="";var O=0;var Q=false;var _=[];var c=null;var C=null;i.show=function(x){c=VirtualKeyboard.getAttachedInput();var X=DOM.getWindow(c);if(C!=X){if(l&&l.parentNode){l.parentNode.removeChild(l);}C=X;V();C.document.body.appendChild(l);}l.className=i.css;if(x)i.setSuggestions(x);if(c&&l&&_.length>0){EM.addEventListener(c,'blur',i.blurHandler);l.style.display="block";i.updatePosition(c);}else if('none'!=l.style.display){i.hide();}};i.hide=function(x){if(l&&'none'!=l.style.display){l.style.display="none";EM.removeEventListener(c,'blur',i.blurHandler);if(c&&DocumentSelection.getSelection(c)&&!x)DocumentSelection.deleteSelection(c);c=null;_=[]}};i.updatePosition=function(){var x=DOM.getOffset(c);l.style.left=x.x+'px';var X=DocumentSelection.getSelectionOffset(c);l.style.top=x.y+X.y+X.h+'px'};i.setSuggestions=function(x){if(!isArray(x))return false;_=x;O=0;e();i.updatePosition(c);};i.getSuggestions=function(x){return isNumber(x)?_[x]:_};i.nextPage=function(x){O=Math.max(Math.min(O+1,(Math.ceil(_.length/10))-1),0);e();};i.prevPage=function(x){O=Math.max(O-1,0);e();};i.getPage=function(){return O};i.getChar=function(x){x=--x<0?9:x;return _[i.getPage()*10+x]};i.isOpen=function(){return l&&'block'==l.style.display};i.blurHandler=function(x){i.hide();};i.toggleShowAll=function(x){var X=l.firstChild.rows[1].cells[0].lastChild;if(Q=!Q){O=0;X.className='showPage'}else{X.className='showAll'}e();};var e=function(){var x=['<table>'];for(var X=0,z=Math.ceil(_.length/10);X<z;X++){if(Q||X==O){x.push('<tr>');for(var Z=0,w=X*10;Z<10&&!isUndefined(_[w+Z]);Z++){x.push("<td><a href=''>");if(X==O){x.push("<b>&nbsp;"+((Z+1)%10)+": </b>");}else{x.push("<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b>");}x.push(_[w+Z]+"</a></td>");}x.push('</tr>');}}x.push('</table>');l.firstChild.rows[0].cells[1].innerHTML=x.join("");l.firstChild.rows[1].cells[0].firstChild.firstChild.innerHTML=(O+1)+"/"+(0+Q||Math.ceil(_.length/10));var W=l.getElementsByTagName("*");for(var Z=0,s=W.length;Z<s;Z++){W[Z].unselectable="on"}};var v=function(x){var X=DOM.getParent(x.target,'a');if(X){DocumentSelection.insertAtCursor(c,X.lastChild.nodeValue);i.hide();}x.preventDefault();};var V=function(){var x=C.document.createElement('div');x.innerHTML=I;l=x.firstChild;l.style.display='none';var X=l.firstChild.rows[0].cells[0],z=l.firstChild.rows[0].cells[2],Z=l.firstChild.rows[1].cells[0].lastChild;EM.addEventListener(X,'mousedown',i.prevPage);EM.addEventListener(X,'mousedown',EM.preventDefaultAction);EM.addEventListener(X,'mousedown',EM.stopPropagationAction);EM.addEventListener(z,'mousedown',i.nextPage);EM.addEventListener(z,'mousedown',EM.preventDefaultAction);EM.addEventListener(z,'mousedown',EM.stopPropagationAction);EM.addEventListener(Z,'mousedown',i.toggleShowAll);EM.addEventListener(Z,'mousedown',EM.preventDefaultAction);EM.addEventListener(Z,'mousedown',EM.stopPropagationAction);l.unselectable="on";var w=l.getElementsByTagName("*");for(var W=0,s=w.length;W<s;W++){w[W].unselectable="on"}EM.addEventListener(l,'mousedown',v);}};
