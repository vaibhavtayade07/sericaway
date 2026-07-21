"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[228],{5743:(t,e,i)=>{i.d(e,{StringTune:()=>tN});var s=class{constructor(t=.1,e){this.SETTLE_THRESHOLD_SQ=.01,this.lastMouseX=0,this.lastMouseY=0,this.lastMouseTime=0,this._lerpStepXArgs={from:0,to:0,progress:0},this._lerpStepYArgs={from:0,to:0,progress:0},this.smoothingFactor=t,this.context=e,this.onSettingsChange({isDesktop:e.data.viewport.windowWidth>1024,isForceRebuild:!1,widthChanged:!0,heightChanged:!0,scrollHeightChanged:!0})}onMouseMove(t){let e=this.context.data.cursor;e.targetX=t.clientX,e.targetY=t.clientY;let i=performance.now(),s=Math.max(1,i-this.lastMouseTime);e.velocityX=(t.clientX-this.lastMouseX)/s,e.velocityY=(t.clientY-this.lastMouseY)/s,this.lastMouseX=t.clientX,this.lastMouseY=t.clientY,this.lastMouseTime=i}onFrame(){let t=this.context.data.cursor,e=t.targetX,i=t.targetY,s=t.smoothedX,r=t.smoothedY;this._lerpStepXArgs.from=s,this._lerpStepXArgs.to=e,this._lerpStepXArgs.progress=this.smoothingFactor,this._lerpStepYArgs.from=r,this._lerpStepYArgs.to=i,this._lerpStepYArgs.progress=this.smoothingFactor;let n=this.context.tools.lerp.process(this._lerpStepXArgs),o=this.context.tools.lerp.process(this._lerpStepYArgs);n*n+o*o<this.SETTLE_THRESHOLD_SQ?(t.smoothedX=e,t.smoothedY=i,t.stepX=0,t.stepY=0):(t.smoothedX+=n,t.smoothedY+=o,t.stepX=n,t.stepY=o)}onSettingsChange(t){let e=Number(this.context.settings["cursor-lerp"]);this.setLerpFactor(e)}setLerpFactor(t){this.smoothingFactor=this.context.tools.adaptiveLerp.process({value:t,inMin:.1,inMax:1,outMin:.05,outMax:.65})}},r=class{constructor(){this.listeners={},this.stateEvents=new Set,this.lastPayloads={},this.stateEvents.add("screen:mobile"),this.stateEvents.add("screen:tablet"),this.stateEvents.add("screen:laptop"),this.stateEvents.add("screen:desktop"),this.stateEvents.add("start")}registerStateEvent(t,e){this.stateEvents.add(t),void 0!==e&&(this.lastPayloads[t]=e)}on(t,e,i){let s=i?`${t}:${i}`:t;this.listeners[s]||(this.listeners[s]=new Set),this.listeners[s].add(e),this.stateEvents.has(s)&&void 0!==this.lastPayloads[s]&&e(this.lastPayloads[s])}off(t,e,i){let s=i?`${t}:${i}`:t;this.listeners[s]&&this.listeners[s].delete(e)}emit(t,e){this.stateEvents.has(t)&&(this.lastPayloads[t]=e);let i=this.listeners[t];if(i)for(let t of i)t(e)}onProgress(t,e){this.on(`progress:${t}`,e)}emitProgress(t,e){this.emit(`progress:${t}`,e)}onInview(t,e){this.on(`object:inview:${t}`,e)}emitInview(t,e){this.emit(`object:inview:${t}`,e)}onScroll(t){this.on("scroll",t)}emitScroll(t){this.emit("scroll",t)}onUpdate(t){this.on("update",t)}emitUpdate(){this.emit("update")}clear(t){delete this.listeners[t]}clearAll(){this.listeners={}}},n=class{constructor(t){this.data=t,this.modules=[],this.uiModules=[],this.allModules=[]}register(t){if(1===t.type?this.modules.push(t):2===t.type&&this.uiModules.push(t),t.cssProperties&&t.cssProperties.length>0&&"u">typeof window.CSS&&"registerProperty"in window.CSS)for(let e=0;e<t.cssProperties.length;e++)try{window.CSS.registerProperty(t.cssProperties[e])}catch{}t.onSubscribe(),this.rebuildAllModules()}find(t){for(let e=0;e<this.allModules.length;e++){let i=this.allModules[e];if(i instanceof t)return i}}onInit(){this.callAll("onInit")}onFrame(){this.callAll("onFrame")}onMutate(){this.callAll("onMutate")}onScrollMeasure(){this.callAll("onScrollMeasure")}onMouseMoveMeasure(){this.callAll("onMouseMoveMeasure")}onScroll(){this.callAll("onScroll")}onResizeWidth(){this.callAll("onResizeWidth")}onResize(){this.callAll("onResize")}onMouseMove(t){this.callAll("onMouseMove",t)}onWheel(t){this.callAll("onWheel",t)}onDirectionChange(){this.callAll("onDirectionChange")}onScrollStart(){this.callAll("onScrollStart")}onScrollStop(){this.callAll("onScrollStop")}onAxisChange(){this.callAll("onAxisChange")}onDeviceChange(){this.callAll("onDeviceChange")}onScrollConfigChange(){this.callAll("onScrollConfigChange")}onSettingsChange(t){this.callAll("onSettingsChange")}onDOMMutate(t,e){this.callAll("onDOMMutate",t,e)}destroy(){this.callAll("onUnsubscribe"),this.callAll("destroy"),this.modules=[],this.uiModules=[],this.allModules=[]}get all(){return this.allModules}get core(){return this.modules}get ui(){return this.uiModules}callAll(t,e,i){this.modules.length>0&&this.callLifecycleStrict(this.modules,t,e,i),this.uiModules.length>0&&this.callLifecycleStrict(this.uiModules,t,e,i)}callLifecycleStrict(t,e,i,s){let r=t.length;switch(e){case"onFrame":case"onMutate":case"onScrollMeasure":case"onMouseMoveMeasure":case"onScroll":for(let i=0;i<r;i++){let s=t[i];s&&s[e](this.data)}break;case"onDOMMutate":for(let n=0;n<r;n++){let r=t[n];r&&r[e](i,s)}break;case"onMouseMove":case"onWheel":for(let s=0;s<r;s++){let r=t[s];r&&r[e](i)}break;default:for(let i=0;i<r;i++){let s=t[i];s&&s[e]()}}}rebuildAllModules(){this.allModules.length=0;for(let t=0;t<this.modules.length;t++)this.allModules.push(this.modules[t]);for(let t=0;t<this.uiModules.length;t++)this.allModules.push(this.uiModules[t])}},o=class{constructor(t,e,i){this.parent=i,this.properties=new Map,this.id=t,this.htmlElement=e}get parentObject(){return this.parent}setProperty(t,e){this.properties.set(t,e)}getProperty(t){return this.properties.get(t)??null}setEasing(t){this.easingFn=t??void 0}getEasing(){return this.easingFn}applyProgress(t,e){let i=this.easingFn??e;return i?i(t):t}},a=class{constructor(t,e){this.id="",this.keys=[],this.tokens=[],this.mirrors=new Map,this._cachedMirrorObjects=[],this._cachedConnects=[],this._mirrorsDirty=!1,this.properties=new Map,this.modules=[],this.events=new r,this.eventNameCache=new Map,this.eventNameSuffixCache=new Map,this.htmlElement=e,this.id=t}getScopedEventName(t,e){if(null==e){let e=this.eventNameCache.get(t);if(e)return e;let i=`${t}:${this.id}`;return this.eventNameCache.set(t,i),i}let i=this.eventNameSuffixCache.get(t);i||(i=new Map,this.eventNameSuffixCache.set(t,i));let s=i.get(e);if(s)return s;let r=`${t}:${this.id}:${e}`;return i.set(e,r),r}setProperty(t,e){this.properties.set(t,e)}getProperty(t){return this.properties.get(t)??null}enter(){this.events.emit("enter",this),this.setProperty("active",!0),this.modules.forEach(t=>{t.enterObject(this.id,this)})}leave(){this.events.emit("leave",this),this.setProperty("active",!1),this.modules.forEach(t=>{t.exitObject(this.id)})}remove(){this.modules.forEach(t=>{t.removeObject(this.id)})}setInviewAutoBlocked(t){this.setProperty("inview-auto-blocked",t)}isInviewAutoBlocked(){return!0===this.getProperty("inview-auto-blocked")}setInviewManualActive(t){this.setProperty("inview-manual-active",t)}isInviewManualActive(){return!0===this.getProperty("inview-manual-active")}syncInviewClass(){return this.isInviewAutoBlocked()?void this.htmlElement.classList.remove("-inview"):this.isInviewManualActive()||!0===this.getProperty("is-inview")?void this.htmlElement.classList.add("-inview"):void(this.getProperty("repeat")&&this.htmlElement.classList.remove("-inview"))}show(){this.isInviewAutoBlocked()||this.htmlElement.classList.add("-inview")}hide(){if(this.isInviewAutoBlocked())return void this.htmlElement.classList.remove("-inview");!this.isInviewManualActive()&&this.getProperty("repeat")&&this.htmlElement.classList.remove("-inview")}connect(t){return!this.modules.includes(t)&&(this.modules.push(t),!0)}disconnect(t){let e=this.modules.indexOf(t);return -1!==e&&(this.modules.splice(e,1),!0)}isConnectedTo(t){return this.modules.includes(t)}setTokens(t){this.tokens=t,this.keys=t.map(t=>t.key)}getToken(t){for(let e=0;e<this.tokens.length;e++)if(this.tokens[e].key===t)return this.tokens[e];return null}updateMirrorsCache(){if(this._mirrorsDirty){this._cachedMirrorObjects=Array.from(this.mirrors.values());let t=this._cachedMirrorObjects.length;this._cachedConnects=Array(t);for(let e=0;e<t;e++)this._cachedConnects[e]=this._cachedMirrorObjects[e].htmlElement;this._mirrorsDirty=!1}}addMirror(t){this.mirrors.has(t.id)||(this.mirrors.set(t.id,t),this._mirrorsDirty=!0)}removeMirror(t){this.mirrors.delete(t)&&(this._mirrorsDirty=!0)}get mirrorObjects(){return this.updateMirrorsCache(),this._cachedMirrorObjects}get connects(){return this.updateMirrorsCache(),this._cachedConnects}},l=class{constructor(){this.readQueue=[],this.writeQueue=[],this.computeQueue=[],this.isProcessing=!1,this.pendingFrame=null,this.rectCache=new WeakMap,this.dimensionCache=new WeakMap}scheduleRead(t,e=0){this.readQueue.push({priority:e,execute:t}),this.scheduleFlush()}scheduleCompute(t,e=0){this.computeQueue.push({priority:e,execute:t}),this.scheduleFlush()}scheduleWrite(t,e=0){this.writeQueue.push({priority:e,execute:t}),this.scheduleFlush()}batchModuleInitialization(t){t.forEach(({module:t,object:e,element:i,attributes:s,globalId:r})=>{this.scheduleRead(()=>{let n=i.getBoundingClientRect();this.rectCache.set(i,n),this.dimensionCache.set(i,{width:i.offsetWidth||i.clientWidth||n.width,height:i.offsetHeight||i.clientHeight||n.height}),t.initializeObject(r,e,i,s)},1)}),t.forEach(({module:t,object:e,windowSize:i})=>{this.scheduleCompute(()=>{t.calculatePositions(e,i)},2)}),t.forEach(({module:t,object:e})=>{this.scheduleWrite(()=>{t.connectObject(e),t.addObject(e.id,e)},3)})}getCachedRect(t){return this.rectCache.get(t)}getCachedDimensions(t){return this.dimensionCache.get(t)}scheduleFlush(){null!==this.pendingFrame||this.isProcessing||(this.pendingFrame=requestAnimationFrame(()=>{this.flush()}))}flush(){this.isProcessing=!0,this.pendingFrame=null;let t=(t,e)=>e.priority-t.priority;try{[...this.readQueue].sort(t).forEach(t=>{try{t.execute()}catch(t){console.error("[DOMBatcher] Read task error:",t)}}),this.readQueue=[],[...this.computeQueue].sort(t).forEach(t=>{try{t.execute()}catch(t){console.error("[DOMBatcher] Compute task error:",t)}}),this.computeQueue=[],[...this.writeQueue].sort(t).forEach(t=>{try{t.execute()}catch(t){console.error("[DOMBatcher] Write task error:",t)}}),this.writeQueue=[]}finally{this.rectCache=new WeakMap,this.dimensionCache=new WeakMap,this.isProcessing=!1}}flushSync(){null!==this.pendingFrame&&(cancelAnimationFrame(this.pendingFrame),this.pendingFrame=null),this.flush()}clear(){null!==this.pendingFrame&&(cancelAnimationFrame(this.pendingFrame),this.pendingFrame=null),this.readQueue=[],this.writeQueue=[],this.computeQueue=[],this.rectCache=new WeakMap,this.dimensionCache=new WeakMap}},d=class{constructor(){this.desktop={rebuild:{width:!0,height:!0,scrollHeight:!0}},this.mobile={rebuild:{width:!0,height:!0,scrollHeight:!0}}}},c=Object.freeze({}),h=class{constructor(t){this.cssProperties=[],this.objectMapOnPage=new Map,this.allObjectMapOnPage=new Map,this.objectsOnPage=[],this.allObjectsOnPage=[],this.objectMap=new Map,this.allObjectMap=new Map,this.objects=[],this.allObjects=[],this.htmlKey="",this.defaultModeScope="all",this._type=1,this.permissions=new d,this.tools=t.tools,this.data=t.data,this.settings=t.settings,this.events=t.events,this.centers=t.centers,this.hover=t.hover,this.objectManager=t.objectManager,this.attributesToMap=[{key:"active",type:"boolean",fallback:this.settings.active},{key:"fixed",type:"boolean",fallback:this.settings.fixed},{key:"outside-container",type:"boolean",fallback:this.settings["outside-container"]},{key:"repeat",type:"boolean",fallback:this.settings.repeat},{key:"self-disable",type:"boolean",fallback:this.settings["self-disable"]},{key:"abs",type:"boolean",fallback:this.settings.abs},{key:"key",type:"string",fallback:this.settings.key},{key:"offset-top",type:"dimension",fallback:this.settings["offset-top"]},{key:"offset-bottom",type:"dimension",fallback:this.settings["offset-bottom"]},{key:"offset-enter",type:"dimension",fallback:this.settings["offset-enter"]},{key:"offset-exit",type:"dimension",fallback:this.settings["offset-exit"]},{key:"inview-top",type:"dimension",fallback:this.settings["inview-top"]},{key:"inview-bottom",type:"dimension",fallback:this.settings["inview-bottom"]},{key:"start",type:"number",fallback:(t,e,i)=>Math.floor(i.top)+this.data.scroll.transformedCurrent},{key:"end",type:"number",fallback:(t,e,i)=>i.top+i.height-this.data.scroll.transformedCurrent},{key:"size",type:"number",fallback:(t,e,i)=>i.height},{key:"half-width",type:"number",fallback:(t,e,i)=>i.width/2},{key:"half-height",type:"number",fallback:(t,e,i)=>i.height/2},{key:"enter-el",type:"string",fallback:this.settings["enter-el"]},{key:"enter-vp",type:"string",fallback:this.settings["enter-vp"]},{key:"exit-el",type:"string",fallback:this.settings["exit-el"]},{key:"exit-vp",type:"string",fallback:this.settings["exit-vp"]}]}get type(){return this._type}get key(){return this.htmlKey}initializeObject(t,e,i,s){let r=this.tools.boundingClientRect.process({element:i});for(let{key:t,type:n,fallback:o,transform:a}of this.attributesToMap){let l="function"==typeof o?o(i,e,r):o,d=s[t]??s[`string-${t}`]??s[`data-string-${t}`],c=this.tools.domAttribute.process({element:i,key:t,fallback:d??this.settings[t]??l}),h=this.parseAttribute(c,n,{element:i,boundingRect:r,viewportHeight:this.data.viewport.windowHeight,baseRem:this.data.viewport.baseRem});a&&(h=a(h)),e.setProperty(t,h)}this.cacheLayoutSnapshot(e,i)}cacheLayoutSnapshot(t,e){let i=this.data.scroll.container??document.body??document.documentElement,s=this.data.scroll.elementContainer??document.documentElement,r=this.tools.transformNullify.process({element:e}),n=window.getComputedStyle(e),o=this.getOffsetSize(e,n),a=0,l=0,d=r.width,c=r.height;if((!Number.isFinite(d)||d<=0)&&(d=o.width),(!Number.isFinite(c)||c<=0)&&(c=o.height),Number.isFinite(r.left)&&Number.isFinite(r.top)&&r.width>0&&r.height>0)if(i===document.body||i===document.documentElement)a=r.left+s.scrollLeft,l=r.top+s.scrollTop;else{let t=i.getBoundingClientRect();a=r.left-t.left+i.scrollLeft,l=r.top-t.top+i.scrollTop}else{let t=this.getOffsetChainPosition(e);if(i===document.body||i===document.documentElement)a=t.left,l=t.top;else{let e=this.getOffsetChainPosition(i);a=t.left-e.left+i.scrollLeft,l=t.top-e.top+i.scrollTop}}t.setProperty("layout-doc-left",a),t.setProperty("layout-doc-top",l),t.setProperty("layout-width",d),t.setProperty("layout-height",c),t.setProperty("layout-border-radius",n.borderRadius||"0px")}getOffsetSize(t,e){let i=parseFloat(e.width),s=parseFloat(e.height);return{width:t.offsetWidth||t.clientWidth||(Number.isFinite(i)?i:0),height:t.offsetHeight||t.clientHeight||(Number.isFinite(s)?s:0)}}getOffsetChainPosition(t){let e=0,i=0,s=t;for(;s;)e+=s.offsetLeft||0,i+=s.offsetTop||0,s=s.offsetParent;return{left:e,top:i}}calculatePositions(t,e){let i=t.getProperty("start"),s=t.getProperty("size"),r=t.getProperty("offset-enter")??t.getProperty("offset-bottom"),n=t.getProperty("offset-exit")??t.getProperty("offset-top"),o=t.getProperty("enter-el"),a=t.getProperty("enter-vp"),l=t.getProperty("exit-el"),d=t.getProperty("exit-vp"),c=-0,h=-0,u=-0,p=-0;"top"===o&&"top"===a||"left"===o&&"left"===a?(u=-e+1,c=i-r):"top"===o&&"bottom"===a||"left"===o&&"right"===a?c=i-e-r:"bottom"===o&&"top"===a||"right"===o&&"left"===a?(u=-e-s+1,c=i+s-r):("bottom"===o&&"bottom"===a||"right"===o&&"right"===a)&&(u=-s+1,c=i-e+s-r),"top"===l&&"top"===d||"left"===l&&"left"===d?(p=-s+1,h=i+n):"top"===l&&"bottom"===d||"left"===l&&"right"===d?(p=-e-s+1,h=i-e+n):"bottom"===l&&"top"===d||"right"===l&&"left"===d?h=i+s+n:("bottom"===l&&"bottom"===d||"right"===l&&"right"===d)&&(p=-e+1,h=i-e+s+n),t.setProperty("start-bias",u),t.setProperty("end-bias",p),t.setProperty("start-position",c-this.data.scroll.topPosition),t.setProperty("end-position",h-this.data.scroll.topPosition),t.setProperty("difference-position",h-c);let g=t.getProperty("inview-top")??-0,m=t.getProperty("inview-bottom")??-0;t.setProperty("inview-start-position",t.getProperty("start-position")+g),t.setProperty("inview-end-position",t.getProperty("end-position")+m)}parseAttribute(t,e,i=c){if(null==t)return null;if("object"==typeof e&&"enum"===e.type)return e.values.includes(t)?t:e.values[0];switch(e){case"number":return"string"==typeof t?+t||parseFloat(t):t;case"boolean":return""===t||"true"===t;case"json":try{return JSON.parse(t)}catch{return null}case"tuple":return t.trim().split(/\s+/);case"easing":return this.tools.easingFunction.process({easing:t});case"color":return this.tools.colorParser.process({value:t});case"dimension":return"0"==t?0:null!=i.element&&null!=i.viewportHeight&&null!=i.baseRem&&null!=i.boundingRect?this.tools.unitParser.process({value:t,element:i.element,viewportHeight:i.viewportHeight,boundingRect:i.boundingRect,baseRem:i.baseRem}):0;case"breakpoint-dimension":if(null!=i.element&&null!=i.viewportHeight&&null!=i.baseRem&&null!=i.boundingRect){let e=t.trim().split("|"),s=[];for(let t of e)if(t.includes(":")){let[e,r]=t.split(":");s.push({breakpoint:parseInt(e),value:this.tools.unitParser.process({value:`${r}|`,element:i.element,viewportHeight:i.viewportHeight,boundingRect:i.boundingRect,baseRem:i.baseRem})})}else s.push({breakpoint:0,value:this.tools.unitParser.process({value:t,element:i.element,viewportHeight:i.viewportHeight,boundingRect:i.boundingRect,baseRem:i.baseRem})});return s}default:return t}}canConnect(t){return t.keys.includes(this.htmlKey)}isTokenEnabledInCurrentMode(t){let e=this.data.scroll.mode;return"all"===t.modeSpec.kind||("include"===t.modeSpec.kind?t.modeSpec.values.includes(e):"all"===this.defaultModeScope||this.defaultModeScope.includes(e))}isObjectEnabledInCurrentMode(t){let e=t.getToken(this.htmlKey);return!!e&&this.isTokenEnabledInCurrentMode(e)}disconnectObject(t){t.disconnect(this)}connectObject(t){t.connect(this)&&this.onObjectConnected(t)}enterObject(t,e){this.allObjectMap.has(t)||(this.allObjectMap.set(t,e),this.allObjects.push(e)),this.isObjectEnabledInCurrentMode(e)&&!this.objectMap.has(t)&&(this.objectMap.set(t,e),this.objects.push(e))}fastRemoveFromArray(t,e){if(-1===e)return;let i=t.length-1;e!==i&&(t[e]=t[i]),t.pop()}exitObject(t){let e=this.objectMap.get(t);if(e){this.objectMap.delete(t);let i=this.objects.indexOf(e);this.fastRemoveFromArray(this.objects,i)}let i=this.allObjectMap.get(t);if(!i)return;this.allObjectMap.delete(t);let s=this.allObjects.indexOf(i);this.fastRemoveFromArray(this.allObjects,s)}addObject(t,e){this.allObjectMapOnPage.has(t)||(this.allObjectMapOnPage.set(t,e),this.allObjectsOnPage.push(e)),this.isObjectEnabledInCurrentMode(e)&&!this.objectMapOnPage.has(t)&&(this.objectMapOnPage.set(t,e),this.objectsOnPage.push(e))}removeObject(t){let e=this.objectMapOnPage.get(t);if(e){this.objectMapOnPage.delete(t);let i=this.objectsOnPage.indexOf(e);this.fastRemoveFromArray(this.objectsOnPage,i)}let i=this.allObjectMapOnPage.get(t);if(!i)return;this.allObjectMapOnPage.delete(t);let s=this.allObjectsOnPage.indexOf(i);this.fastRemoveFromArray(this.allObjectsOnPage,s),this.exitObject(t),this.onObjectDisconnected(i)}onObjectConnected(t){}onObjectDisconnected(t){}get respectSelfDisable(){return!0}isPrimaryElementEnabled(t){return!this.respectSelfDisable||!0!==t.getProperty("self-disable")}applyToElementAndConnects(t,e,i=e){this.isPrimaryElementEnabled(t)&&e(t.htmlElement),t.mirrorObjects.forEach(t=>i(t.htmlElement,t))}applyVarToElement(t,e,i){this.isPrimaryElementEnabled(t)&&this.tools.styleTxn.setVar(t.htmlElement,e,i)}applyPropToElement(t,e,i){this.isPrimaryElementEnabled(t)&&this.tools.styleTxn.setProp(t.htmlElement,e,i)}applyVarToConnects(t,e,i){for(let s of t.mirrorObjects)this.tools.styleTxn.setVar(s.htmlElement,e,i)}applyPropToConnects(t,e,i){for(let s of t.mirrorObjects)this.tools.styleTxn.setProp(s.htmlElement,e,i)}getObjectEventName(t,e,i){return t.getScopedEventName(e,i)}clearManagedStyles(t){let e=e=>{for(let t=0;t<this.cssProperties.length;t++)e.style.removeProperty(this.cssProperties[t].name);let i=t.getProperty("key");"string"==typeof i&&i.length>0&&e.style.removeProperty(i)};e(t.htmlElement);let i=t.mirrorObjects;for(let t=0;t<i.length;t++)e(i[t].htmlElement)}onObjectModeActivated(t){}onObjectModeDeactivated(t){this.clearManagedStyles(t)}rebuildActiveObjectsForCurrentMode(){let t=new Map(this.objectMapOnPage);this.objectMapOnPage=new Map,this.objectsOnPage=[];for(let t=0;t<this.allObjectsOnPage.length;t++){let e=this.allObjectsOnPage[t];this.isObjectEnabledInCurrentMode(e)&&(this.objectMapOnPage.set(e.id,e),this.objectsOnPage.push(e))}this.objectMap=new Map,this.objects=[];for(let t=0;t<this.allObjects.length;t++){let e=this.allObjects[t];this.isObjectEnabledInCurrentMode(e)&&(this.objectMap.set(e.id,e),this.objects.push(e))}t.forEach((t,e)=>{this.objectMapOnPage.has(e)||this.onObjectModeDeactivated(t)}),this.objectMapOnPage.forEach((e,i)=>{t.has(i)||this.onObjectModeActivated(e)})}destroy(){this.objects=[],this.allObjects=[],this.objectMap=new Map,this.allObjectMap=new Map,this.objectsOnPage=[],this.allObjectsOnPage=[],this.objectMapOnPage=new Map,this.allObjectMapOnPage=new Map}onInit(){}onSubscribe(){}onUnsubscribe(){}onFrame(t){}onMutate(t){}onScrollMeasure(t){}onMouseMoveMeasure(t){}onResize(){}onResizeWidth(){}onScroll(t){}onDirectionChange(){}onScrollStart(){}onScrollStop(){}onScrollDirectionChange(){}onAxisChange(){}onDeviceChange(){}onScrollConfigChange(){this.rebuildActiveObjectsForCurrentMode()}onSettingsChange(){}onDOMRebuild(){}onMouseMove(t){}onWheel(t){}onDOMMutate(t,e){}},u=class{constructor(t,e,i,s){this.data=t,this.modules=e,this.events=i,this.tools=s,this.objects=new Map,this.connectQueue=[],this.connectableModulesBuffer=[],this.mirrors=new Map,this.mirrorId=1,this.globalId=1,this.domBatcher=new l,this.domBatcherEnabled=!1,this.inviewStarts=[],this.inviewEnds=[],this.inviewActive=new Set,this.inviewStartIdx=0,this.inviewEndIdx=0,this.inviewIndexDirty=!0,this.lastInviewScrollPos=0,this.intersectionObserverEnabled=!0,this.domObserver=null}get all(){return this.objects}add(t){let e=`string-${this.globalId++}`,i="string-id";t.getAttribute("string-id")&&(e=t.getAttribute("string-id"),i="string-id"),t.getAttribute("data-string-id")&&(e=t.getAttribute("data-string-id"),i="data-string-id");let s=e&&this.objects.has(e)?this.objects.get(e):new a(e,t);t.setAttribute(i,s.id);let r=t.getAttribute("string")??t.getAttribute("data-string");r&&s.setTokens(this.parseStringTokens(r)),t.setAttribute("string-inited",""),this.objects.set(s.id,s);let n=this.getAllAttributes(t),o=this.modules.core;for(let e=0;e<o.length;e++){let i=o[e];"setupCoreProperties"in i&&"function"==typeof i.setupCoreProperties&&i.setupCoreProperties(s,t,n)}let l=this.connectableModulesBuffer;l.length=0;let d=this.modules.all,c=null;for(let t=0;t<d.length;t++){let e=d[t];e instanceof h&&""===e.key&&(c=e),e instanceof h&&e.canConnect(s)&&l.push(e)}if(0===l.length&&c&&(s.setProperty("inview-fallback",!0),l.push(c)),this.domBatcherEnabled&&l.length>0){let e=Array(l.length);for(let i=0;i<l.length;i++)e[i]={module:l[i],object:s,element:t,attributes:n,globalId:this.globalId,windowSize:this.data.viewport.windowHeight};this.domBatcher.batchModuleInitialization(e),this.domBatcher.scheduleWrite(()=>{this.initObservers(s,t),this.checkInviewForObject(s)})}else{for(let e=0;e<l.length;e++){let i=l[e];i.initializeObject(this.globalId,s,t,n),i.calculatePositions(s,this.data.viewport.windowHeight),i.connectObject(s),i.addObject(s.id,s)}this.initObservers(s,t),this.checkInviewForObject(s)}if(this.connectQueue.length>0){let t=0;for(let e=0;e<this.connectQueue.length;e++){let i=this.connectQueue[e];if(i.id===s.id){this.attachMirrorToObject(s,i.element);continue}this.connectQueue[t++]=i}this.connectQueue.length=t}l.length=0,this.inviewIndexDirty=!0}setDOMBatcherEnabled(t){this.domBatcherEnabled=t,t||this.domBatcher.flushSync()}setIntersectionObserverEnabled(t){if(this.intersectionObserverEnabled!==t)for(let e of(this.intersectionObserverEnabled=t,this.objects.values()))e.getProperty("observer-progress")?.disconnect(),t&&this.initObservers(e,e.htmlElement)}attachModule(t){this.objects.forEach(e=>{if(!t.canConnect(e))return;let i=e.htmlElement,s=this.getAllAttributes(i);t.initializeObject(this.globalId,e,i,s),t.calculatePositions(e,this.data.viewport.windowHeight),t.connectObject(e),t.addObject(e.id,e),!0===e.getProperty("active")&&t.enterObject(e.id,e)})}refreshModuleConnectionsForCurrentMode(){let t=this.modules.all;for(let e of this.objects.values()){let i=e.htmlElement;if(!i||!i.isConnected)continue;let s=null;for(let r=0;r<t.length;r++){let n=t[r];if(!(n instanceof h)||!e.keys.includes(n.key))continue;let o=n.canConnect(e),a=e.isConnectedTo(n);if(o&&!a){null==s&&(s=this.getAllAttributes(i)),n.initializeObject(this.globalId,e,i,s),n.calculatePositions(e,this.data.viewport.windowHeight),n.connectObject(e),n.addObject(e.id,e),!0===e.getProperty("active")&&n.enterObject(e.id,e);continue}!o&&a&&(n.exitObject(e.id),n.removeObject(e.id),n.disconnectObject(e))}}}invalidateInviewIndex(){this.inviewIndexDirty=!0}refreshLayoutForRoot(t){if(!t)return;let e=new Set,i=t=>{let i=t.getAttribute("string-id")??t.getAttribute("data-string-id");if(!i)return;let s=this.objects.get(i);s&&e.add(s)};if(t instanceof HTMLElement){i(t);let e=t.querySelectorAll("[string-id],[data-string-id]");for(let t=0;t<e.length;t++)i(e[t])}if(0===e.size)return;let s=this.data.viewport.windowHeight;for(let t of e){let e=t.htmlElement;if(!e||!e.isConnected)continue;let i=this.getAllAttributes(e),r=this.modules.all;for(let n=0;n<r.length;n++){let o=r[n];o instanceof h&&o.canConnect(t)&&(o.initializeObject(this.globalId,t,e,i),o.calculatePositions(t,s))}}this.inviewIndexDirty=!0,this.checkInview()}remove(t){let e=this.objects.get(t);e&&(e.events.clearAll(),e.getProperty("observer-progress")?.disconnect(),e.getProperty("observer-inview")?.disconnect(),e.htmlElement.removeAttribute("string-inited"),e.leave(),e.remove(),e.mirrorObjects.forEach(t=>{let e=this.getMirrorIds(t.htmlElement);this.setMirrorIds(t.htmlElement,e.filter(e=>e!==t.id)),this.mirrors.delete(t.id);let i=t.htmlElement.getAttribute("string-copy-from")??t.htmlElement.getAttribute("data-string-copy-from");i&&this.enqueueConnection(i,t.htmlElement)}),this.objects.delete(t),this.inviewActive.delete(e),this.inviewIndexDirty=!0)}enqueueConnection(t,e){let i=this.splitPipeAndTrim(t);for(let t=0;t<i.length;t++){let s=i[t];this.connectQueue.some(t=>t.id===s&&t.element===e)||this.connectQueue.push({id:s,element:e})}}linkMirror(t,e){let i=this.splitPipeAndTrim(t);for(let t=0;t<i.length;t++){let s=i[t],r=this.objects.get(s);r?this.attachMirrorToObject(r,e):this.enqueueConnection(s,e)}}attachMirrorToObject(t,e){let i=this.getMirrorIds(e);for(let e of i){let i=this.mirrors.get(e);if(i&&i.parentObject===t)return i}let s=`string-mirror-${this.mirrorId++}`,r=new o(s,e,t);this.setMirrorIds(e,[...i,s]),t.addMirror(r),this.mirrors.set(s,r);let n=e.getAttribute("string-easing")??e.getAttribute("data-string-easing");n&&n.trim().length>0&&(r.setEasing(this.tools.easingFunction.process({easing:n})),r.setProperty("easing",n));let a=t.getProperty("key"),l=t.getProperty("progress-raw"),d=t.getProperty("progress-value");if("number"==typeof l){let e=t.getProperty("easing")??void 0,i=r.applyProgress(l,e);r.setProperty("progress",i),a&&this.tools.styleTxn.setVar(r.htmlElement,a,i)}else"number"==typeof d&&(r.setProperty("progress",d),a&&this.tools.styleTxn.setVar(r.htmlElement,a,d));return r}detachMirrorByElement(t){let e=this.getMirrorIds(t);0!==e.length&&(e.forEach(t=>this.detachMirrorById(t)),this.clearMirrorIds(t))}detachMirrorById(t){let e=this.mirrors.get(t);e&&(e.parentObject.removeMirror(t),this.mirrors.delete(t))}getMirrorIds(t){let e=t.getAttribute("string-mirror-id")??t.getAttribute("data-string-mirror-id");return e?this.splitPipeAndTrim(e):[]}setMirrorIds(t,e){if(0===e.length)return void this.clearMirrorIds(t);t.setAttribute("string-mirror-id",e.join("|"))}clearMirrorIds(t){t.removeAttribute("string-mirror-id"),t.removeAttribute("data-string-mirror-id")}getAllAttributes(t){let e={},i=t.attributes;for(let t=0;t<i.length;t++){let s=i[t];e[s.name]=s.value}return e}initObservers(t,e){if(!this.intersectionObserverEnabled)return;let i=t.getProperty("offset-exit")??t.getProperty("offset-top")??0,s=t.getProperty("offset-enter")??t.getProperty("offset-bottom")??0;t.getProperty("observer-progress")?.disconnect();let r=e=>{e.forEach(e=>{this.events.emit(t.getScopedEventName("object:activate"),e.isIntersecting),e.isIntersecting?t.enter():t.leave()})},n=t.getProperty("outside-container"),o=e.getAttribute("string-outside-container")??e.getAttribute("data-string-outside-container"),a=null!=o?o.trim().toLowerCase():null,l=new IntersectionObserver(r,{root:this.data.scroll.container===document.body||(null!=n?!0===n:""===a||"true"===a||"1"===a)?null:this.data.scroll.container,rootMargin:`${s+this.data.viewport.windowHeight}px 0px ${i+this.data.viewport.windowHeight}px 0px`,threshold:0});l.observe(e),t.setProperty("observer-progress",l)}observeDOM(){this.domObserver?.disconnect();let t=new MutationObserver(t=>{let e=!1;for(let i=0;i<t.length;i++){let s=t[i];if("childList"===s.type){let t=!1;for(let e=0;e<s.removedNodes.length;e++){let i=s.removedNodes[e];if(i.nodeType!==Node.ELEMENT_NODE)continue;if(t=!0,this.detachMirrorByElement(i),this.isFixed(i))continue;i.hasAttribute("string")&&this.handleRemoved(i);let r=i.querySelectorAll("[string],[data-string]");for(let t=0;t<r.length;t++){let e=r[t];this.isFixed(e)||this.handleRemoved(e)}let n=i.querySelectorAll("[string-copy-from],[data-string-copy-from]");for(let t=0;t<n.length;t++)this.detachMirrorByElement(n[t])}for(let e=0;e<s.addedNodes.length;e++){let i=s.addedNodes[e];if(i.nodeType!==Node.ELEMENT_NODE)continue;if(t=!0,this.isFixed(i))continue;i.hasAttribute("string")&&!i.hasAttribute("string-inited")&&this.add(i);let r=i.querySelectorAll("[string]:not([string-inited]),[data-string]:not([string-inited])");for(let t=0;t<r.length;t++)this.add(r[t]);let n=i.getAttribute("string-copy-from")??i.getAttribute("data-string-copy-from");n&&this.linkMirror(n,i);let o=i.querySelectorAll("[string-copy-from],[data-string-copy-from]");for(let t=0;t<o.length;t++){let e=o[t],i=e.getAttribute("string-copy-from")??e.getAttribute("data-string-copy-from");i&&this.linkMirror(i,e)}}t&&(this.modules.onDOMMutate(s.addedNodes,s.removedNodes),e=!0)}}if(e){let t=this.modules.all;for(let e=0;e<t.length;e++)t[e].onDOMRebuild();this.events.emit("dom:changed",null)}});t.observe(document.body,{childList:!0,subtree:!0}),this.domObserver=t}handleRemoved(t){let e=t.getAttribute("string-id")??t.getAttribute("data-string-id");if(!e)return;let i=t.getAttribute("string-copy-from")??t.getAttribute("data-string-copy-from");i&&(this.connectQueue=this.connectQueue.filter(t=>t.id!==i)),this.remove(e)}onSettingsChange(t){for(let e of this.objects.values()){if(!e.htmlElement||!e.htmlElement.isConnected)continue;let i=null,s=this.modules.all;for(let r=0;r<s.length;r++){let n=s[r],o=!1;t.isDesktop?(n.permissions.desktop.rebuild.scrollHeight&&t.scrollHeightChanged&&(o=!0),n.permissions.desktop.rebuild.width&&t.widthChanged&&(o=!0),n.permissions.desktop.rebuild.height&&t.heightChanged&&(o=!0)):(n.permissions.mobile.rebuild.scrollHeight&&t.scrollHeightChanged&&(o=!0),n.permissions.mobile.rebuild.width&&t.widthChanged&&(o=!0),n.permissions.mobile.rebuild.height&&t.heightChanged&&(o=!0)),(o||t.isForceRebuild)&&n.canConnect(e)&&(null==i&&(i=this.getAllAttributes(e.htmlElement)),n.initializeObject(this.globalId,e,e.htmlElement,i),n.calculatePositions(e,this.data.viewport.windowHeight),n.connectObject(e))}}this.inviewIndexDirty=!0}isFixed(t){return t.hasAttribute("string-fixed")}checkInview(){let t=this.data.scroll.transformedCurrent;for(let e of(this.updateInviewWindow(t),this.inviewActive))this.checkInviewForObject(e)}checkInviewForObject(t){let e=this.data.scroll.transformedCurrent;if(!this.intersectionObserverEnabled){let i=t.getProperty("start-position"),s=t.getProperty("end-position");if(null!=i&&null!=s){let r=Math.min(i,s),n=Math.max(i,s),o=t.getProperty("is-active")??!1,a=e>=r&&e<=n;a!==o&&(t.setProperty("is-active",a),this.events.emit(t.getScopedEventName("object:activate"),a),a?t.enter():t.leave())}}let i=t.getProperty("inview-start-position"),s=t.getProperty("inview-end-position"),r=t.getProperty("is-inview")??!1,n=Math.min(i,s),o=Math.max(i,s),a=e>=n&&e<=o,l=null;!r&&a?l=Math.abs(e-n)<=Math.abs(o-e)?"enter-top":"enter-bottom":r&&!a&&(l=e<n?"exit-top":"exit-bottom"),a!==r&&(t.setProperty("is-inview",a),t.setInviewAutoBlocked(!1),t.setInviewManualActive(!1),a?t.show():t.hide(),this.events.emit(t.getScopedEventName("object:inview"),{inView:a,direction:l}))}updateInviewWindow(t){let e=this.data.viewport.windowHeight,i=t-e,s=t+this.data.viewport.windowHeight+e;for((this.inviewIndexDirty||t<this.lastInviewScrollPos)&&this.rebuildInviewIndex(i,s);this.inviewStartIdx<this.inviewStarts.length&&this.inviewStarts[this.inviewStartIdx].pos<=s;)this.inviewActive.add(this.inviewStarts[this.inviewStartIdx].object),this.inviewStartIdx++;for(;this.inviewEndIdx<this.inviewEnds.length&&this.inviewEnds[this.inviewEndIdx].pos<i;)this.inviewActive.delete(this.inviewEnds[this.inviewEndIdx].object),this.inviewEndIdx++;this.lastInviewScrollPos=t}rebuildInviewIndex(t,e){for(let t of(this.inviewStarts=[],this.inviewEnds=[],this.objects.values())){let e=t.getProperty("inview-start-position"),i=t.getProperty("inview-end-position");null==e||null==i||(this.inviewStarts.push({pos:Math.min(e,i),object:t}),this.inviewEnds.push({pos:Math.max(e,i),object:t}))}this.inviewStarts.sort((t,e)=>t.pos-e.pos),this.inviewEnds.sort((t,e)=>t.pos-e.pos),this.inviewActive.clear(),this.inviewStartIdx=this.upperBound(this.inviewStarts,e),this.inviewEndIdx=this.upperBound(this.inviewEnds,t-1);for(let t=0;t<this.inviewStartIdx;t++)this.inviewActive.add(this.inviewStarts[t].object);for(let t=0;t<this.inviewEndIdx;t++)this.inviewActive.delete(this.inviewEnds[t].object);this.inviewIndexDirty=!1}upperBound(t,e){let i=0,s=t.length;for(;i<s;){let r=i+s>>>1;t[r].pos<=e?i=r+1:s=r}return i}splitPipeAndTrim(t){let e=t.split("|"),i=[];for(let t=0;t<e.length;t++){let s=e[t].trim();s.length>0&&i.push(s)}return i}parseStringTokens(t){let e=this.splitTopLevelPipe(t),i=[];for(let t=0;t<e.length;t++){let s=e[t].trim();if(0===s.length)continue;let r=s.match(/^([^\[\]]+?)(?:\[([^\]]*)\])?$/);if(!r){i.push({raw:s,key:s,modeSpec:{kind:"default",values:[]}});continue}let n=r[1].trim(),o=r[2];if(!n)continue;if(null==o){i.push({raw:s,key:n,modeSpec:{kind:"default",values:[]}});continue}let a=o.trim();if(0===a.length){i.push({raw:s,key:n,modeSpec:{kind:"all",values:[]}});continue}let l=this.splitTopLevelPipe(a).map(t=>t.trim()).filter(t=>t.length>0);i.push({raw:s,key:n,modeSpec:l.length>0?{kind:"include",values:l}:{kind:"all",values:[]}})}return i}splitTopLevelPipe(t){let e=[],i="",s=0;for(let r=0;r<t.length;r++){let n=t[r];if("["===n){s++,i+=n;continue}if("]"===n){s=Math.max(0,s-1),i+=n;continue}if("|"===n&&0===s){e.push(i),i="";continue}i+=n}return i.length>0&&e.push(i),e}destroy(){this.domObserver?.disconnect(),this.domObserver=null,this.domBatcher.clear()}},p={SCROLL_FORWARD:"-scroll-forward",SCROLL_BACKWARD:"-scroll-backward",SCROLLING_FORWARD:"-scrolling-forward",SCROLLING_BACKWARD:"-scrolling-backward"},g=class{constructor(t){this.name="",this.isProg=!1,this.isParallaxEnabled=!1,this._isVertical=!0,this._scrollDirState=-1,this._lastAppliedDirState=-1,this.isLastBottomScrollDirection=!0,this.scrollTriggerRules=[],this.isActive=!1,this.onChangeDirection=()=>{},this.onScrollStart=()=>{},this.onScrollStop=()=>{},this.document=document,this.context=t}set scrollDirection(t){this._isVertical="vertical"===t}onCalcUpdate(){if(!this.isActive)return;let t=this.context.data.scroll.scrollContainer,e=this.context.data.scroll.current;t&&(this._isVertical?t.scrollTo(0,e):t.scrollTo(e,0)),this._isVertical&&this.triggerScrollRules()}onFrame(){}onWheel(t){}onScroll(t){}onTouchStart(t){}onTouchMove(t){}onTouchEnd(t){}disableScrollEvents(){}enableScrollEvents(){}activate(){this.isActive||(this.isActive=!0,this.enableScrollEvents())}deactivate(){if(!this.isActive)return;this.isActive=!1,this.disableScrollEvents(),this.isProg=!1;let t=this.context.data.scroll;t.target=t.current,t.delta=0,t.lerped=0,t.displacement=0,this.clearScrollingClasses(),this._scrollDirState=-1,this._lastAppliedDirState=-1,this.onScrollStop()}destroy(){}updateScrollDirection(t){this.isLastBottomScrollDirection=t;let e=+!!t;if(-1===this._scrollDirState){this._scrollDirState=e;return}if(this._scrollDirState=e,this.context.data.scroll.isScrollingDown=t,this.onChangeDirection(),this.context.events.emit("scroll:direction:change",t),this.context.settings["global-class"]&&this._lastAppliedDirState!==e){let i=document.documentElement.classList;t?(i.remove(p.SCROLLING_BACKWARD,p.SCROLL_BACKWARD),i.add(p.SCROLLING_FORWARD,p.SCROLL_FORWARD)):(i.remove(p.SCROLLING_FORWARD,p.SCROLL_FORWARD),i.add(p.SCROLLING_BACKWARD,p.SCROLL_BACKWARD)),this._lastAppliedDirState=e}}clearScrollingClasses(){document.documentElement.classList.remove(p.SCROLLING_BACKWARD,p.SCROLLING_FORWARD,p.SCROLL_BACKWARD,p.SCROLL_FORWARD)}triggerScrollRules(){let t=this.scrollTriggerRules,e=t.length,i=this.context.data.scroll.current,s=this.isLastBottomScrollDirection;for(let r=0;r<e;r++){let e=t[r],n=("any"===e.direction||s&&"forward"===e.direction||!s&&"backward"===e.direction)&&i>=e.offset;n&&!e.isActive?(e.isActive=!0,e.onEnter?.(),e.toggleClass&&e.toggleClass.target.classList.add(e.toggleClass.className)):!n&&e.isActive&&(e.isActive=!1,e.onLeave?.(),e.toggleClass&&e.toggleClass.target.classList.remove(e.toggleClass.className))}}addScrollMark(t){this.scrollTriggerRules.push(t)}removeScrollMark(t){let e=this.scrollTriggerRules;for(let i=0;i<e.length;i++)if(e[i].id===t){e.splice(i,1);break}}scrollTo(t,e){}},m=class extends g{constructor(t){super(t),this.name="default",this.previousScrollTop=0,this.previousScrollTime=0,this.isScrolling=!1,this.lastScrollEventTime=0,this.nativeVelocity=0,this.nativeVelocityTarget=0,this.scrollStopDelay=120,this.nativeVelocityFollow=.2,this.nativeVelocityDecay=.84,this.nativeVelocityBoost=2,this.nativeVelocityDeadzone=.25}onFrame(){let t=0;if(0!==this.context.data.scroll.delta){let e=this.context.data.scroll.delta*this.context.data.scroll.speedAccelerate;this.context.data.scroll.delta-=e,.1>Math.abs(t=e)&&(this.context.data.scroll.delta=0,t=0)}let e=performance.now();this.nativeVelocityTarget*=this.nativeVelocityDecay,Math.abs(this.nativeVelocityTarget)<this.nativeVelocityDeadzone&&(this.nativeVelocityTarget=0),this.nativeVelocity+=(this.nativeVelocityTarget-this.nativeVelocity)*this.nativeVelocityFollow,Math.abs(this.nativeVelocity)<this.nativeVelocityDeadzone&&(this.nativeVelocity=0),Math.abs(this.nativeVelocity)>Math.abs(t)&&(t=this.nativeVelocity),this.context.data.scroll.lerped=t,this.isScrolling&&0===this.context.data.scroll.delta&&0===this.nativeVelocityTarget&&0===this.nativeVelocity&&e-this.lastScrollEventTime>this.scrollStopDelay&&(this.isScrolling=!1,this.onScrollStop(),this.clearScrollingClasses())}onScroll(t){let e=performance.now(),i=this.context.data.scroll.elementContainer.scrollTop,s=i-this.previousScrollTop;if(this.context.data.scroll.current=i,this.context.data.scroll.target=i,this.context.data.scroll.transformedCurrent=i*this.context.data.viewport.transformScale,0!==s){this.updateScrollDirection(s>0);let t=16.6667/Math.max(8,0===this.previousScrollTime?16.6667:e-this.previousScrollTime)*s*this.nativeVelocityBoost;this.nativeVelocityTarget=t,this.previousScrollTop=i,this.previousScrollTime=e}this.triggerScrollRules(),this.lastScrollEventTime=e,this.isScrolling||(this.isScrolling=!0,this.onScrollStart())}onWheel(t){0!==t.deltaY&&(0!==this.context.data.scroll.delta||this.isScrolling||(this.isScrolling=!0,this.onScrollStart()),this.context.data.scroll.delta+=t.deltaY,this.lastScrollEventTime=performance.now())}deactivate(){super.deactivate(),this.isScrolling=!1,this.lastScrollEventTime=0,this.previousScrollTop=this.context.data.scroll.current,this.previousScrollTime=0,this.nativeVelocity=0,this.nativeVelocityTarget=0}scrollTo(t,e){this.context.data.scroll.target=t,this.context.data.scroll.current=t,this.context.data.scroll.delta=0,this.context.data.scroll.lerped=0,this.nativeVelocity=0,this.nativeVelocityTarget=0,this.previousScrollTop=t,this.previousScrollTime=0,this.triggerScrollRules(),"vertical"===this._scrollDirection?this.context.data.scroll.scrollContainer?.scrollTo({top:t,left:0,behavior:e?"auto":"smooth"}):this.context.data.scroll.scrollContainer?.scrollTo({left:t,top:0,behavior:e?"auto":"smooth"})}},v=class extends g{constructor(t){super(t),this.name="disable",this.preventScroll=t=>{t.preventDefault()},this.preventKeyScroll=t=>{["ArrowUp","ArrowDown","PageUp","PageDown"," ","Home","End"].includes(t.key)&&t.preventDefault()},this.onPreventScroll=this.preventScroll.bind(this),this.onPreventKeyScroll=this.preventKeyScroll.bind(this)}enableScrollEvents(){window.addEventListener("touchmove",this.onPreventScroll,{passive:!1}),window.addEventListener("keydown",this.onPreventKeyScroll)}disableScrollEvents(){window.removeEventListener("touchmove",this.onPreventScroll),window.removeEventListener("keydown",this.onPreventKeyScroll)}onFrame(){}onWheel(t){t.preventDefault()}onScroll(t){t.preventDefault()}},b=class extends g{constructor(t){super(t),this.name="smooth",this.scrollForce=0,this.wheelImpulse=0,this.previousCurrent=0,this.velocityThreshold=.01,this.stepResult={current:.1,target:.1,delta:.1,lerped:.1,scrollForce:.1,absVelocity:.1},this.stepResult.current=0,this.stepResult.target=0,this.stepResult.delta=0,this.stepResult.lerped=0,this.stepResult.scrollForce=0,this.stepResult.absVelocity=0}stopScroll(){let t=this.context.data.scroll;t.lerped=0,t.delta=0,t.target=t.current,this.isProg=!1,this.onCalcUpdate(),this.clearScrollingClasses(),this._scrollDirState=-1,this._lastAppliedDirState=-1}onFrame(){let t=this.context.data.scroll;if(0!==t.delta){this.computeStep(t.current,t.target,t.delta,t.speed,t.speedAccelerate,t.bottomPosition,this.stepResult),this.scrollForce=this.stepResult.scrollForce,t.target=this.stepResult.target,t.delta=this.stepResult.delta,t.lerped=this.stepResult.lerped,t.current=this.stepResult.current;let e=this.context.data.viewport.transformScale;t.transformedCurrent=1!==e?t.current*e:t.current,this.updateScrollDirection(t.lerped>0),this.stepResult.absVelocity<this.velocityThreshold?(t.current=Math.round(t.target),this.previousCurrent=t.current,this.onCalcUpdate(),this.stopScroll(),this.onScrollStop()):(this.isProg=!0,this.previousCurrent!==t.current&&(this.previousCurrent=t.current,this.onCalcUpdate()))}}onWheel(t){if(0!==t.deltaY&&t.preventDefault(),this.wheelImpulse=t.deltaY,0===this.wheelImpulse)return;let e=this.context.data.scroll;0===e.delta&&this.onScrollStart();let i=this.wheelImpulse<0,s=0===e.target&&i,r=e.target===e.bottomPosition&&!i;s||r||(e.delta+=this.wheelImpulse)}onScroll(t){if(!this.isProg){let t=this.context.data.scroll,e=t.elementContainer.scrollTop,i=e-t.current;t.current=e,t.target=e,t.delta=0,t.lerped=i,t.displacement=0;let s=this.context.data.viewport.transformScale;t.transformedCurrent=1!==s?e*s:e,this.scrollForce=0,this.wheelImpulse=0,this.isProg=!1,this.previousCurrent=e,0!==i&&(this.updateScrollDirection(i>0),this.triggerScrollRules())}}deactivate(){super.deactivate(),this.scrollForce=0,this.wheelImpulse=0,this.previousCurrent=this.context.data.scroll.current}scrollTo(t,e){let i=this.context.data.scroll;if(e){i.current=t,i.target=t,i.delta=0,i.lerped=0;let e=this.context.data.viewport.transformScale;i.transformedCurrent=1!==e?t*e:t,this.onCalcUpdate();return}i.target=t,i.delta=1}computeStep(t,e,i,s,r,n,o){let a=i*r,l=Math.min(Math.max(0,e+a),n),d=(l-t)*s;o.current=t+d,o.target=l,o.delta=i-a,o.lerped=d,o.scrollForce=a,o.absVelocity=Math.abs(d)}},f=class{constructor(t){this.context=t,this.modes=new Map,this.boundEvents=null,this.scrollMarks=[],this.registerMode("smooth",new b(t)),this.registerMode("default",new m(t)),this.registerMode("disable",new v(t)),this.updateResponsiveMode()}registerMode(t,e){let i=this.context.data.scroll.mode===t,s=this.modes.get(t);s&&(i&&s.deactivate(),s.destroy()),e.name||(e.name=String(t)),this.modes.set(t,e),this.boundEvents&&(e.onScrollStart=this.boundEvents.onScrollStart,e.onScrollStop=this.boundEvents.onScrollStop,e.onChangeDirection=this.boundEvents.onDirectionChange),this.scrollMarks.length>0&&this.scrollMarks.forEach(t=>e.addScrollMark(t)),i&&e.activate()}setMobileMode(t){this.context.data.scroll.modeMobile=t,this.updateResponsiveMode()}setDesktopMode(t){this.context.data.scroll.modeDesktop=t,this.updateResponsiveMode()}updateResponsiveMode(){let t=window.innerWidth<1024?this.context.data.scroll.modeMobile:this.context.data.scroll.modeDesktop;this.setMode(t)}updatePosition(){this.get().onCalcUpdate()}setMode(t){return this.modes.has(t)?this.context.data.scroll.mode===t?void this.get().activate():void(this.get().deactivate(),this.context.data.scroll.mode=t,this.get().activate(),this.boundEvents?.onModeChange()):void console.warn(`[ScrollManager] Unknown scroll mode: ${t}`)}get(){return this.modes.get(this.context.data.scroll.mode)}getEngines(){return this.modes}onFrame(){this.get().onFrame()}onScroll(t){this.get().onScroll(t)}onWheel(t){this.get().onWheel(t)}onTouchStart(t){this.get().onTouchStart(t)}onTouchMove(t){this.get().onTouchMove(t)}onTouchEnd(t){this.get().onTouchEnd(t)}bindEvents(t){this.boundEvents=t,this.modes.forEach(e=>{e.onScrollStart=t.onScrollStart,e.onScrollStop=t.onScrollStop,e.onChangeDirection=t.onDirectionChange})}addScrollMark(t){this.scrollMarks.push(t),this.modes.forEach(e=>{e.addScrollMark(t)})}removeScrollMark(t){this.scrollMarks=this.scrollMarks.filter(e=>e.id!==t),this.modes.forEach(e=>{e.removeScrollMark(t)})}destroy(){this.modes.forEach(t=>{t.deactivate(),t.destroy()})}},y=class{constructor(){this.targetX=0,this.targetY=0,this.smoothedX=0,this.smoothedY=0,this.stepX=0,this.stepY=0,this.velocityX=0,this.velocityY=0}},w=class{constructor(){this.threeInstance=null}},L=class{constructor(){this.target=0,this.current=0,this.transformedCurrent=0,this.delta=0,this.lerped=0,this.displacement=0,this.isScrollingDown=!1,this.topPosition=0,this.bottomPosition=0,this.direction="vertical",this.elementContainer=document.documentElement,this.scrollContainer=window,this.container=document.body,this.mode="smooth",this.modeMobile="default",this.modeDesktop="smooth",this.speed=.1,this.speedAccelerate=.25}},C=class{constructor(){this.fpsTracker=!1,this.positionTracker=!1,this.suppressMasonryResize=!1}},x=class{constructor(){this.now=0,this.previous=0,this.delta=0,this.elapsed=0}},M=class{constructor(){this.windowWidth=0,this.windowHeight=0,this.contentWidth=0,this.contentHeight=0,this.scaleWidth=1,this.scaleHeight=1,this.transformScale=1,this.baseRem=16}},S=class{constructor(){this.scroll=new L,this.viewport=new M,this.cursor=new y,this.render=new w,this.time=new x,this.system=new C}},k=class{process({element:t}){return t.getBoundingClientRect()}},E=class{process({element:t,key:e,fallback:i=null}){return t.getAttribute(`string-${e}`)??t.getAttribute(`data-string-${e}`)??i}},A=class{process({record:t,name:e,fallback:i=null}){return t[e]??t[`data-${e}`]??i}},O=class{process({element:t}){let e=t.getBoundingClientRect(),i=getComputedStyle(t).transform.match(/-?[\d.]+/g)?.map(parseFloat)??[];if(6===i.length){let[t,s,r,n,o,a]=i,l=t*n-s*r;return{width:e.width/(t||1),height:e.height/(n||1),left:(e.left*n-e.top*r+r*a-o*n)/l,top:(-e.left*s+e.top*t+o*s-t*a)/l}}return e}},P=class{constructor(t=new O){this.transformTool=t}process({element:t,container:e=document.body}){let i;try{i=e.getBoundingClientRect()}catch{i=document.body.getBoundingClientRect()}let s=this.transformTool.process({element:t});return{top:s.top-i.top,left:s.left-i.left}}},I=class{process({from:t,to:e,progress:i}){return(e-t)*i}},T=class{process({value:t,element:e,viewportHeight:i,baseRem:s,boundingRect:r}){let n=t.split("|").map(t=>t.trim()).filter(Boolean),o=0;for(let t of n){let n=t,a=!1;n.startsWith("-")&&(a=!0,n=n.slice(1));let l=0;l="selfHeight"===n?e.offsetHeight:n.endsWith("px")?parseFloat(n):n.endsWith("%")?parseFloat(n)/100*i:n.endsWith("rem")?parseFloat(n)*s:n.endsWith("sh")?parseFloat(n)*r.height/100:parseFloat(n),o+=a?-l:l}return o}},D=class{process({value:t,inMin:e=.1,inMax:i=1,outMin:s=.05,outMax:r=.65}){return t<e?r:(t>1&&(t=1),t<=i)?r-(t-e)/(i-e)*(r-s):s}},R={left:0,center:.5,right:1},F={top:0,center:.5,bottom:1},j=class{process({value:t}){if(!t)return"center";let e=t.trim();if(e.startsWith("random(")&&e.endsWith(")")){let t=e.slice(7,-1).split(",").map(t=>t.trim()).filter(Boolean),i=Math.floor(Math.random()*t.length);return t[i]}return e}toNormalized({value:t}){let e=this.process({value:t}).toLowerCase().split(/\s+/).filter(Boolean);if(0===e.length)return{x:.5,y:.5};if(1===e.length){let t=e[0],i=this.parseValue(t);return t in R&&!(t in F)?{x:i,y:.5}:t in F&&!(t in R)?{x:.5,y:i}:{x:i,y:i}}let[i,s]=e,r=i in F&&!(i in R),n=s in R&&!(s in F);return r||n?{x:this.parseValue(s,"horizontal"),y:this.parseValue(i,"vertical")}:{x:this.parseValue(i,"horizontal"),y:this.parseValue(s,"vertical")}}parseValue(t,e){if("horizontal"===e&&t in R)return R[t];if("vertical"===e&&t in F)return F[t];if(t in R)return R[t];if(t in F)return F[t];if(t.endsWith("%")){let e=parseFloat(t);if(!isNaN(e))return e/100}let i=parseFloat(t);return isNaN(i)?.5:i>1?i/100:i}},z=class{process({value:t}){let e=t.trim().toLowerCase();if(e.startsWith("#")){let t=e.slice(1);return 3===t.length&&(t=t.split("").map(t=>t+t).join("")),{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:8===t.length?parseInt(t.slice(6,8),16)/255:1}}let i=e.match(/rgba?\(([^)]+)\)/);if(i){let[t,e,s,r=1]=i[1].split(",").map(t=>parseFloat(t.trim()));return{r:t,g:e,b:s,a:r}}let s=e.match(/hsla?\(([^)]+)\)/);if(s){let[t,e,i,r="1"]=s[1].split(",").map(t=>t.trim()),[n,o,a]=this.hslToRgb(parseFloat(t),parseFloat(e),parseFloat(i));return{r:n,g:o,b:a,a:parseFloat(r)}}return{r:0,g:0,b:0,a:0}}hslToRgb(t,e,i){t/=360,e=parseFloat(e.toString())/100;let s=(t,e,i)=>(i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<.5?e:i<2/3?t+(e-t)*(2/3-i)*6:t),r=(i=parseFloat(i.toString())/100)<.5?i*(1+e):i+e-i*e,n=2*i-r;return[Math.round(255*s(n,r,t+1/3)),Math.round(255*s(n,r,t)),Math.round(255*s(n,r,t-1/3))]}},B=class{constructor(){this.namedCurves={linear:[0,0,1,1],ease:[.25,.1,.25,1],"ease-in":[.42,0,1,1],"ease-out":[0,0,.58,1],"ease-in-out":[.42,0,.58,1]}}process({easing:t}){let e=t.trim();if(this.namedCurves[e])return this.cubicBezier(...this.namedCurves[e]);let i=e.match(/^cubic-bezier\s*\(\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*,\s*([-+]?\d*\.?\d+)\s*\)$/);if(i){let[t,e,s,r]=i.slice(1).map(Number);return this.cubicBezier(t,e,s,r)}return t=>t}cubicBezier(t,e,i,s){let r=3*t,n=3*(i-t)-r,o=1-r-n,a=3*e,l=3*(s-e)-a,d=1-a-l;return function(t){var e;return((d*(e=function(t,e=1e-5){var i,s,a;let l,d,c=t,h,u,p;for(p=0;p<8;p++){if(Math.abs(h=((o*(i=c)+n)*i+r)*i-t)<e)return c;if(1e-6>Math.abs(u=(3*o*(s=c)+2*n)*s+r))break;c-=h/u}for(l=0,d=1,c=t;l<d&&!(Math.abs(h=((o*(a=c)+n)*a+r)*a-t)<e);){;h>0?d=c:l=c,c=(d+l)/2}return c}(t))+l)*e+a)*e}}},N=class{process({distance:t,radius:e,strength:i}){return t>=e?0:(e-t)/e*i}},_=class{process({from:t,to:e,progress:i}){return{r:t.r+(e.r-t.r)*i,g:t.g+(e.g-t.g)*i,b:t.b+(e.b-t.b)*i,a:t.a+(e.a-t.a)*i}}},V=class{process({from:t,to:e,progress:i}){return{x:(e.x-t.x)*i,y:(e.y-t.y)*i}}},W=class{process({value:t}){let e=t?.trim();if(!e||"none"===e)return 1;try{if(e.startsWith("matrix(")){let t=e.match(/matrix\(([^)]+)\)/);if(t&&t[1]){let e=t[1].split(",").map(t=>parseFloat(t.trim()));if(e.length>=1&&!isNaN(e[0]))return e[0]}}if(e.startsWith("scale(")){let t=e.match(/scale\(([^)]+)\)/);if(t&&t[1]){let e=t[1].split(",").map(t=>parseFloat(t.trim()));if(e.length>=1&&!isNaN(e[0]))return e[0]}}if(e.startsWith("scaleX(")){let t=e.match(/scaleX\(([^)]+)\)/);if(t&&t[1]){let e=parseFloat(t[1].trim());if(!isNaN(e))return e}}if(e.startsWith("scale3d(")){let t=e.match(/scale3d\(([^)]+)\)/);if(t&&t[1]){let e=t[1].split(",").map(t=>parseFloat(t.trim()));if(e.length>=1&&!isNaN(e[0]))return e[0]}}if(e.startsWith("matrix3d(")){let t=e.match(/matrix3d\(([^)]+)\)/);if(t&&t[1]){let e=t[1].split(",").map(t=>parseFloat(t.trim()));if(e.length>=1&&!isNaN(e[0]))return e[0]}}}catch(t){return console.error(`Error parsing transform string "${e}":`,t),1}return 1}},Z=class{process({attributeValue:t}){let e={line:[],word:[],char:[],charLine:[],charWord:[],wordLine:[],fit:!1,trimInlineGaps:!1};return t&&t.split("|").forEach(t=>{let i=t.trim();if(!i)return;let s=i.match(/^([\w-]+)(\[(.*?)\])?$/);if(s){let t=this.toCamelCase(s[1]),r=(s[3]||"").split(";").map(t=>t.trim()).filter(t=>t.length>0),n=this.parseParamsArray(r);switch(t){case"line":e.line.push(n);break;case"word":e.word.push(n);break;case"char":e.char.push(n);break;case"charLine":e.charLine.push(n);break;case"charWord":e.charWord.push(n);break;case"wordLine":e.wordLine.push(n);break;case"fit":e.fit=!0;break;case"trimInlineGaps":e.trimInlineGaps=!0;break;default:console.warn(`SplitOptionsParserTool: Unrecognized option type "${t}" in part "${i}"`)}}else console.warn(`SplitOptionsParserTool: Could not parse part format "${i}"`)}),e}toCamelCase(t){return t.replace(/-([a-z])/g,(t,e)=>e.toUpperCase())}parseParamsArray(t){let e={align:"start"};return t.forEach(t=>{if("abs"===t)e.abs=!0;else if(t.startsWith("random")){e.align="random";let i=t.match(/random\(\s*(-?\d+)\s*,\s*(-?\d+)\s*\)/);if(i){let t=parseInt(i[1],10),s=parseInt(i[2],10);e.random={min:Math.min(t,s),max:Math.max(t,s)}}}else["start","center","end"].includes(t)&&(e.align=t)}),e}},H=class{process({value:t}){let e=[],i="",s=0;for(let r=0;r<t.length;r++){let n=t[r];"("===n&&s++,")"===n&&s--,"|"===n&&0===s?(i.trim()&&e.push(i.trim()),i=""):i+=n}return i.trim()&&e.push(i.trim()),e.map(t=>{let e=t.match(/^(\w+)(?:\((.*)\))?$/);if(e){let[,t,i]=e;return i?{key:t,params:i.split(",").map(t=>t.trim())}:{key:t}}let i=t.indexOf(":");if(-1!==i){let e=t.slice(0,i).trim(),s=t.slice(i+1).trim();return{key:e,params:s?s.split(",").map(t=>t.trim()):void 0}}return{key:t}})}},$=class{constructor(){this.inputValidators={required:t=>null!=t&&""!==String(t).trim(),min:(t,e)=>"string"==typeof t&&t.length>=Number(e?.[0]??0),max:(t,e)=>"string"==typeof t&&t.length<=Number(e?.[0]??Number.MAX_SAFE_INTEGER),checked:t=>{if(Array.isArray(t))return t.length>0;if(!0===t||"true"===t||1===t||"1"===t)return!0;if("string"==typeof t){let e=t.trim().toLowerCase();return"false"!==e&&"0"!==e&&e.length>0}return!!t},email:t=>"string"==typeof t&&/^[^\s@]+@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(t),phone:t=>{if("string"!=typeof t)return!1;let e=t.trim();if(""===e||!/^[0-9()\s+-.]+$/.test(e))return!1;let i=e.replace(/\D/g,"").length;return i>=7&&i<=15},number:t=>"string"==typeof t&&/^-?\d+(\.\d+)?$/.test(t),integer:t=>"string"==typeof t&&/^-?\d+$/.test(t),url:t=>"string"==typeof t&&/^(https?:\/\/)?([\w\-]+\.)+[\w\-]+(\/[\w\-._~:\/?#[\]@!$&'()*+,;=]*)?$/.test(t),regex:(t,e)=>this.testByRegex(t,e?.[0]),alpha:t=>this.testByRegex(t,"^[A-Za-z]+$",!0),alpha_num:t=>this.testByRegex(t,"^[A-Za-z0-9]+$",!0),alpha_dash:t=>this.testByRegex(t,"^[A-Za-z0-9_-]+$",!0),same:(t,e,i)=>{let s=e?.[0],r=this.getContextValue(i,s);return(!s||void 0!==r)&&this.areValuesEqual(t,r)},different:(t,e,i)=>{let s=e?.[0],r=this.getContextValue(i,s);return(!s||void 0!==r)&&!this.areValuesEqual(t,r)},range:(t,e)=>{if(null==t||""===t)return!0;let i=Number(t),s=Number(e?.[0]),r=Number(e?.[1]);return!(Number.isNaN(i)||Number.isNaN(s)||Number.isNaN(r))&&i>=s&&i<=r},digits:(t,e)=>{if("string"!=typeof t)return!1;let i=Number(e?.[0]??0);return!(i<=0)&&RegExp(`^\\d{${i}}$`).test(t)},ip:t=>"string"==typeof t&&(this.isIPv4(t)||this.isIPv6(t)),mimes:(t,e)=>this.validateMimes(t,e),max_size:(t,e)=>{let i=Number(e?.[0]);return!i||i<=0||this.validateMaxSize(t,i)},after:(t,e,i)=>this.compareDates(t,e,i,"after"),before:(t,e,i)=>this.compareDates(t,e,i,"before")},this.beforeInputValidators={number:t=>/^-?\d*\.?\d*$/.test(t),integer:t=>/^-?\d*$/.test(t),email:t=>/^[\w@.\-+]*$/.test(t),phone:t=>/^[0-9()\s+-.]*$/.test(t),letters:t=>/^[a-zA-Z]*$/.test(t),lettersSpaces:t=>/^[a-zA-Z\s]*$/.test(t),lettersNumbers:t=>/^[a-zA-Z0-9]*$/.test(t),alpha:t=>/^[A-Za-z]*$/.test(t),alpha_num:t=>/^[A-Za-z0-9]*$/.test(t),alpha_dash:t=>/^[A-Za-z0-9_-]*$/.test(t),digits:(t,e)=>{let i=Number(e?.[0]??0);return i<=0?/^\d*$/.test(t):RegExp(`^\\d{0,${i}}$`).test(t)},url:t=>/^[a-zA-Z0-9\-._~:\/?#\[\]@!$&'()*+,;=%]*$/.test(t),pattern:(t,e)=>{try{return new RegExp(e?.[0]||"").test(t)}catch{return!0}}}}process({rules:t,value:e,type:i="input",context:s}){let r=[];for(let d of t){var n=null,o=null,a=!0,l=!0;("input"!=i||(o=this.inputValidators[d.key]))&&("beforeinput"!=i||(n=this.beforeInputValidators[d.key]))&&(o&&(a=o(e,d.params,s)),n&&(l=n(e,d.params,s)),l||r.push(this.getErrorMessage(d.key,d.params)),a||r.push(this.getErrorMessage(d.key,d.params)))}return{valid:0===r.length,errors:r}}getErrorMessage(t,e){switch(t){case"required":return"This field is required";case"email":return"Invalid email address";case"min":return`Minimum ${e?.[0]} characters`;case"max":return`Maximum ${e?.[0]} characters`;case"phone":return"Invalid phone number";case"number":return"Only numbers are allowed";case"integer":return"Only whole numbers are allowed";case"url":return"Invalid URL address";case"checked":return"You must accept";case"regex":return"Value does not match the required pattern";case"alpha":return"Only letters are allowed";case"alpha_num":return"Only letters and numbers are allowed";case"alpha_dash":return"Only letters, numbers, dashes, and underscores are allowed";case"same":return"Values do not match";case"different":return"Values must be different";case"range":return`Value must be between ${e?.[0]} and ${e?.[1]}`;case"digits":return`Value must contain exactly ${e?.[0]} digits`;case"ip":return"Invalid IP address";case"mimes":return`Allowed file types: ${e?.join(", ")}`;case"max_size":return`File must be smaller than ${e?.[0]} KB`;case"after":return`Date must be after ${e?.[0]}`;case"before":return`Date must be before ${e?.[0]}`;default:return"Invalid value"}}validateMimes(t,e){if(!e||0===e.length)return!0;let i=this.extractFiles(t);if(0===i.length)return!0;let s=e.map(t=>t.trim().toLowerCase());return i.every(t=>this.isMimeAllowed(t,s))}validateMaxSize(t,e){let i=this.extractFiles(t);if(0===i.length)return!0;let s=1024*e;return i.every(t=>"number"!=typeof t.size||t.size<=s)}extractFiles(t){if(!t)return[];let e=[];return"u">typeof File&&t instanceof File?(e.push(t),e):"u">typeof FileList&&t instanceof FileList?Array.from(t):(Array.isArray(t)?t.forEach(t=>{e.push(...this.extractFiles(t))}):"object"==typeof t&&("name"in t||"size"in t||"type"in t)?e.push(t):"string"==typeof t&&""!==t&&e.push({name:t}),e)}isMimeAllowed(t,e){let i=(t.type||"").toLowerCase(),s=this.getFileExtension(t.name);return e.some(t=>{let e=t.replace(/^\./,"").toLowerCase();return!!e&&(e.includes("/")?i===e:s===e)})}getFileExtension(t){if(!t)return"";let e=t.split(".");return e.length<=1?"":(e.pop()||"").toLowerCase()}compareDates(t,e,i,s){if(null==t||""===t)return!0;let r=e?.[0];if(!r)return!0;let n=this.toDate(t),o=this.resolveDateReference(r,i);return!!n&&!!o&&("after"===s?n.getTime()>o.getTime():n.getTime()<o.getTime())}resolveDateReference(t,e){let i=this.getContextValue(e,t);if(void 0!==i)return this.toDate(i);if("now"===t.toLowerCase())return new Date;if("today"===t.toLowerCase()){let t=new Date;return t.setHours(0,0,0,0),t}return this.toDate(t)}toDate(t){if(null==t||""===t)return null;if(t instanceof Date)return Number.isNaN(t.getTime())?null:t;if("number"==typeof t){let e=new Date(t);return Number.isNaN(e.getTime())?null:e}if("string"==typeof t){let e=Date.parse(t);if(!Number.isNaN(e))return new Date(e)}return null}testByRegex(t,e,i=!1){if(null==e||""===e)return!0;let s="string"==typeof t?t:null==t?"":String(t);if(i&&""===s)return!0;try{let{source:t,flags:i}=this.normalizeRegex(e);return new RegExp(t,i).test(s)}catch{return!0}}normalizeRegex(t){let e=t.trim();if(e.startsWith("/")&&e.lastIndexOf("/")>0){let t=e.lastIndexOf("/");return{source:e.slice(1,t),flags:e.slice(t+1)}}return{source:e,flags:""}}getContextValue(t,e){if(!(!t||!e)){if(t.values&&Object.prototype.hasOwnProperty.call(t.values,e))return t.values[e];if(t.getValue)return t.getValue(e)}}areValuesEqual(t,e){return Array.isArray(t)||Array.isArray(e)?JSON.stringify(t)===JSON.stringify(e):t===e}isIPv4(t){let e=t.split(".");return 4===e.length&&e.every(t=>{if(!/^\d+$/.test(t))return!1;let e=Number(t);return e>=0&&e<=255})}isIPv6(t){if(!t)return!1;if("::"===t)return!0;let e=t.split("::");if(e.length>2)return!1;let i=/^[0-9a-fA-F]{1,4}$/,s=t.split(":");return 2===e.length?s.every(t=>""===t||i.test(t))&&s.length<=8:8===s.length&&s.every(t=>i.test(t))}},U=new class{constructor(){this.pendingVars=new Map,this.pendingProps=new Map,this.isOpen=!1}canUseTypedOM(t){return"attributeStyleMap"in t&&"u">typeof CSS&&"function"==typeof CSS.number&&"function"==typeof CSS.px}writeVar(t,e,i){let s=t.style;if(this.canUseTypedOM(t)&&"number"==typeof i&&Number.isFinite(i))try{t.attributeStyleMap.set(e,CSS.number(i));return}catch{}s.setProperty(e,String(i))}begin(){this.isOpen||(this.isOpen=!0)}setVars(t,e){if(!this.isOpen)return void console.warn("StyleTxn: call begin() first to set custom properties.");let i=this.pendingVars.get(t)??{};for(let[t,s]of Object.entries(e))i[t]!==s&&(i[t]=s);this.pendingVars.set(t,i)}setVar(t,e,i){if(!this.isOpen)return void console.warn("StyleTxn: call begin() first to set custom properties.");let s=this.pendingVars.get(t)??{};s[e]!==i&&(s[e]=i,this.pendingVars.set(t,s))}setVarDirect(t,e,i){this.writeVar(t,e,i)}setProps(t,e){if(!this.isOpen)return void console.warn("StyleTxn: call begin() first to set standard properties.");let i=this.pendingProps.get(t)??{};for(let[t,s]of Object.entries(e))i[t]!==s&&(i[t]=s);this.pendingProps.set(t,i)}setProp(t,e,i){if(!this.isOpen)return void console.warn("StyleTxn: call begin() first to set standard properties.");let s=this.pendingProps.get(t)??{};s[e]!==i&&(s[e]=i,this.pendingProps.set(t,s))}run(t){let e=this.isOpen;e||this.begin();try{t(),e||this.commit()}catch(t){throw e||this.cancel(),t}}commit(){if(this.isOpen){for(let[t,e]of(this.isOpen=!1,this.pendingVars))for(let[i,s]of Object.entries(e))this.writeVar(t,i,s);for(let[t,e]of(this.pendingVars.clear(),this.pendingProps)){let i=t.style;for(let[t,s]of Object.entries(e))i[t]=String(s)}this.pendingProps.clear()}}cancel(){this.pendingVars.clear(),this.pendingProps.clear(),this.isOpen=!1}},q=class{constructor(){this.domAttribute=new E,this.recordAttribute=new A,this.transformNullify=new O,this.boundingClientRect=new k,this.relativePosition=new P(this.transformNullify),this.unitParser=new T,this.lerp=new I,this.adaptiveLerp=new D,this.originParser=new j,this.colorParser=new z,this.validation=new $,this.easingFunction=new B,this.magneticPull=new N,this.lerpColor=new _,this.lerpVector=new V,this.transformScaleParser=new W,this.optionsParser=new Z,this.ruleParser=new H,this.styleTxn=U}};new WeakMap;var K=new class{constructor(){this.measureQueue=[],this.mutateQueue=[],this.scheduled=!1}measure(t){this.measureQueue.push(t),this.schedule()}mutate(t){this.mutateQueue.push(t),this.schedule()}schedule(){this.scheduled||(this.scheduled=!0)}flush(){if(!this.scheduled)return;let t=this.measureQueue;this.measureQueue=[];for(let e=0;e<t.length;e++)try{t[e]()}catch(t){console.error("Error in frameDOM measure task:",t)}let e=this.mutateQueue;this.mutateQueue=[];for(let t=0;t<e.length;t++)try{e[t]()}catch(t){console.error("Error in frameDOM mutate task:",t)}this.scheduled=!1}};Math.PI,new WeakMap;var X=class extends h{constructor(t){super(t),this.htmlKey=""}canConnect(t){return null==t.keys[0]||!0===t.getProperty("inview-fallback")}},Y=class{constructor(){this.id="flex"}supports(t,e){return"flex"===e.display||"inline-flex"===e.display}createSource(t,e){return function(t,e){let i=e.contentWidth,s=t.cloneNode(!0);s.removeAttribute("string"),s.removeAttribute("data-string"),s.removeAttribute("string-split"),s.removeAttribute("data-string-split"),s.removeAttribute("string-id"),s.removeAttribute("data-string-id"),s.removeAttribute("string-inited"),s.classList.remove("-splitted","-inview","-restored"),s.innerHTML=t.getAttribute("string-split-original-html")??t.innerHTML,s.style.setProperty("position","absolute","important"),s.style.setProperty("visibility","hidden","important"),s.style.setProperty("pointer-events","none","important"),s.style.setProperty("left","0","important"),s.style.setProperty("top","0","important"),s.style.setProperty("display","block","important"),s.style.setProperty("width",`${i}px`,"important"),s.style.setProperty("min-width",`${i}px`,"important"),s.style.setProperty("max-width",`${i}px`,"important"),s.style.setProperty("padding","0","important"),s.style.setProperty("border","0","important"),s.style.setProperty("margin","0","important"),s.style.setProperty("transform","none","important"),s.style.setProperty("scale","1","important"),(t.parentElement??document.body).appendChild(s);let r=new Map,n=document.createTreeWalker(t,NodeFilter.SHOW_ALL),o=document.createTreeWalker(s,NodeFilter.SHOW_ALL),a=n.currentNode,l=o.currentNode;for(r.set(a,l);(a=n.nextNode())&&(l=o.nextNode());)r.set(a,l);return{resolveNode:t=>r.get(t)??t,cleanup(){s.remove()}}}(t,e)}},Q=class{constructor(){this.id="inline-flow"}supports(t,e){return"flex"!==e.display&&"inline-flex"!==e.display}createSource(t,e){return{resolveNode:t=>t,cleanup(){}}}};new Y,new Q;var G=class{constructor(){this.fps=0,this.isAnimationStarted=!1,this.fpsInterval=0,this.then=0,this.requestAnimationId=0,this.onFrameCallback=t=>{},this.animate=()=>{},this.onVisibilityChangeBind=this.onVisibilityChange.bind(this)}onVisibilityChange(){document.hidden?(this.stop(),this.isAnimationStarted=!1):this.start(this.fps)}start(t){this.fps=t,this.isAnimationStarted||(this.fpsInterval=1e3/t,this.then=performance.now(),this.isAnimationStarted=!0,0===t?this.animate=()=>{let t=performance.now();this.requestAnimationId=requestAnimationFrame(this.animate),this.onFrameCallback(t)}:this.animate=()=>{let t=performance.now(),e=t-this.then;e>this.fpsInterval&&(this.then=t-e%this.fpsInterval,this.onFrameCallback(t)),this.requestAnimationId=requestAnimationFrame(this.animate)},this.animate())}stop(){this.isAnimationStarted&&(cancelAnimationFrame(this.requestAnimationId),this.requestAnimationId=0,this.isAnimationStarted=!1)}setOnFrame(t){this.onFrameCallback=t}destructor(){this.stop()}},J=(t=>(t.ACTIVE="-active",t.ENTERING="-entering",t.LEAVING="-leaving",t.DISABLED="-disabled",t))(J||{});Object.values(J);var tt=class t extends h{constructor(t){super(t),this.htmlKey="form"}initializeObject(t,e,i,s){super.initializeObject(t,e,i,s);let r=e.getProperty("form-events")??[];r.forEach(t=>{t.eventElement.removeEventListener(t.eventType,t.eventCallback)}),r.length=0,e.setProperty("form-events",r),super.onObjectConnected(e);let n=e.htmlElement,o=[],a={};this.getInteractiveFields(n).forEach((t,e)=>this.registerField(t,n,o,a,r,e));let l=t=>{t.preventDefault();let i=!0,s={},r=new Set;for(let t of o){let e=t.field;if(!e.isConnected||!this.shouldValidateField(e))continue;if(this.isRadioField(e)){if(r.has(t.key))continue;r.add(t.key)}let{key:o,rules:l,needsContext:d}=t,c=this.getFieldValue(e);s[o]=c,a[o]=c;let{valid:h,errors:u}=this.tools.validation.process({rules:l,value:c,context:this.buildContext(d,o,a)});this.applyValidationState(n,e,o,h,u,"submit"),h||(i=!1)}if(i)this.events.emit(`form:submit:${e.id}`,s);else{let t=new Set,i=o.find(e=>{let i=e.field;if(!i.isConnected||!this.shouldValidateField(i))return!1;if(this.isRadioField(i)){if(t.has(e.key))return!1;t.add(e.key)}let{key:s,rules:r,needsContext:n}=e,o=this.getFieldValue(i);a[s]=o;let{valid:l}=this.tools.validation.process({rules:r,value:o,context:this.buildContext(n,s,a)});return!l});i?.field&&"function"==typeof i.field.focus&&i.field.focus(),this.events.emit(`form:invalid:${e.id}`)}};n.addEventListener("submit",l),r.push({eventElement:n,eventType:"submit",eventCallback:l}),e.setProperty("form-field-entries",o),e.setProperty("form-field-values",a)}onObjectConnected(t){}onDOMMutate(t,e){0!==this.objects.length&&(t.length>0&&this.handleMutationAdditions(t),e.length>0&&this.handleMutationRemovals(e))}applyValidationState(t,e,i,s,r,n){let o=t.querySelector(`[string-input="error[${i}]"]`),a=t.querySelector(`[string-input="group[${i}]"]`);o&&(o.innerHTML="",r.forEach(t=>{let e=document.createElement("span");e.textContent=t,o.appendChild(e)})),"live"===n?(e.classList.toggle("-invalid",!s),e.classList.remove("-error")):(e.classList.remove("-invalid"),e.classList.toggle("-error",!s)),e.classList.toggle("-valid",s),a&&("live"===n?(a.classList.toggle("-invalid",!s),a.classList.remove("-error")):(a.classList.remove("-invalid"),a.classList.toggle("-error",!s)),a.classList.toggle("-valid",s));let l=s?"valid":"live"===n?"invalid":"error";this.events.emit(`form:field:${l}:${i}`,{key:i,field:e,errors:r,phase:n,valid:s})}getInteractiveFields(t){return Array.from(t.querySelectorAll("[string-input]")).filter(t=>!this.isServiceFieldAttribute(t.getAttribute("string-input")||"")).filter(t=>this.isFormFieldElement(t)).map(t=>t)}getFieldRules(t){let e=this.tools.domAttribute.process({element:t,key:"input"})??"";return this.tools.ruleParser.process({value:e})}registerField(t,e,i,s,r,n){if(!this.isFormFieldElement(t)||t.closest("form")!==e||i.some(e=>e.field===t))return;let o=this.registerFieldIndex(t,n??i.length),a=this.getInputKey(t,o),l=this.getFieldRules(t),d=this.supportsBeforeInputValidation(l),c=this.requiresContext(l),h=this.getInputEventType(t),u={field:t,key:a,rules:l,supportsRealtime:d,needsContext:c,inputEventType:h,inputHandler:()=>{}},p=t=>{let i=t.currentTarget||t.target;if(!i||!i.isConnected||!this.shouldValidateField(i))return;let r=this.getFieldValue(i);s[u.key]=r;let n=this.buildContext(u.needsContext,u.key,s),{valid:o,errors:a}=this.tools.validation.process({rules:u.rules,value:r,context:n});this.applyValidationState(e,i,u.key,o,a,"live")};if(u.inputHandler=p,t.addEventListener(h,p),r.push({eventElement:t,eventType:h,eventCallback:p}),d&&(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)){let e=t=>{if(t.isComposing||t.inputType?.startsWith("insertComposition"))return;let e=t.currentTarget||t.target;if(!e||!(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)||!e.isConnected)return;let i=e.selectionStart??0,r=e.selectionEnd??0,n=e.value;switch(t.inputType){case"deleteContentBackward":n=i===r&&i>0?e.value.slice(0,i-1)+e.value.slice(r):e.value.slice(0,i)+e.value.slice(r);break;case"deleteContentForward":n=i===r&&i<e.value.length?e.value.slice(0,i)+e.value.slice(i+1):e.value.slice(0,i)+e.value.slice(r);break;case"insertFromPaste":case"insertFromDrop":case"insertReplacementText":n=e.value.slice(0,i)+(t.data||"")+e.value.slice(r);break;default:"string"==typeof t.data&&(n=e.value.slice(0,i)+t.data+e.value.slice(r))}let{errors:o}=this.tools.validation.process({rules:u.rules,value:n,type:"beforeinput",context:this.buildContext(u.needsContext,u.key,s,{applied:!0,value:n})});o.length>0&&t.cancelable&&t.preventDefault()};u.beforeInputHandler=e,t.addEventListener("beforeinput",e),r.push({eventElement:t,eventType:"beforeinput",eventCallback:e})}t.classList.add("-inited"),i.push(u),s[a]=this.getFieldValue(t)}unregisterField(t,e,i,s){let r=e.findIndex(e=>e.field===t);if(-1===r)return;let n=e[r];n.inputHandler&&t.removeEventListener(n.inputEventType,n.inputHandler),n.beforeInputHandler&&t.removeEventListener("beforeinput",n.beforeInputHandler),delete i[n.key],e.splice(r,1);for(let e=s.length-1;e>=0;e--){let i=s[e];i.eventElement===t&&(i.eventCallback===n.inputHandler||n.beforeInputHandler&&i.eventCallback===n.beforeInputHandler)&&s.splice(e,1)}t.classList.remove("-inited")}collectInteractiveFieldsFromNode(t){let e=[];return t instanceof Element?(t.hasAttribute("string-input")&&e.push(t),e.push(...Array.from(t.querySelectorAll("[string-input]")))):t instanceof DocumentFragment&&e.push(...Array.from(t.querySelectorAll("[string-input]"))),e.filter(t=>!this.isServiceFieldAttribute(t.getAttribute("string-input")||"")).filter(t=>this.isFormFieldElement(t))}isRadioField(t){return t instanceof HTMLInputElement&&"radio"===t.type}handleMutationAdditions(t){t.forEach(t=>{this.collectInteractiveFieldsFromNode(t).forEach(t=>{let e=this.getFormStateByContainment(t);e&&this.registerField(t,e.form,e.entries,e.values,e.events)})})}handleMutationRemovals(t){t.forEach(t=>{this.collectInteractiveFieldsFromNode(t).forEach(t=>{let e=this.getFormStateByReference(t);e&&this.unregisterField(t,e.entries,e.values,e.events)})})}getFormStateByContainment(t){let e=this.objects.find(e=>e.htmlElement instanceof HTMLFormElement&&e.htmlElement.contains(t));return e?this.buildFormState(e):null}getFormStateByReference(t){for(let e of this.objects){let i=e.getProperty("form-field-entries");if(i&&i.some(e=>e.field===t))return this.buildFormState(e,i)}return null}buildFormState(t,e){let i=t.htmlElement;if(!(i instanceof HTMLFormElement))return null;let s=e??t.getProperty("form-field-entries"),r=t.getProperty("form-field-values"),n=t.getProperty("form-events");return s&&r&&n?{object:t,form:i,entries:s,values:r,events:n}:null}registerFieldIndex(t,e){let i=t.getAttribute("data-string-form-index");return null!==i?Number(i):(t.setAttribute("data-string-form-index",String(e)),e)}getFieldIndex(t,e){let i=t.getAttribute("data-string-form-index");if(null!==i){let t=Number(i);return Number.isNaN(t)?e:t}return this.registerFieldIndex(t,e)}shouldValidateField(t){return!(t.disabled||t instanceof HTMLInputElement&&"hidden"===t.type)}supportsBeforeInputValidation(e){return e.some(e=>t.beforeInputRuleKeys.has(e.key))}requiresContext(e){return e.some(e=>t.crossFieldRuleKeys.has(e.key))}buildContext(t,e,i,s){if(!t)return{fieldKey:e};let r=!!s?.applied,n=r?{...i,[e]:s.value}:i;return{fieldKey:e,values:n,getValue:t=>r&&t===e?s.value:n[t]}}getInputKey(t,e){return this.tools.domAttribute.process({element:t,key:"id"})||t.getAttribute("name")||t.getAttribute("id")||`input-${e}`}getFieldValue(t){if(t instanceof HTMLInputElement){if("checkbox"===t.type){if(t.name){let e=t.form||t.closest("form"),i=e?Array.from(e.querySelectorAll(`input[type="checkbox"][name="${t.name}"]:checked`)):[t];return i.length>1?i.map(t=>t.value):1===i.length?i[0].value:""}return t.checked}if("radio"===t.type){if(t.name){let e=(t.form||t.closest("form"))?.querySelector(`input[type="radio"][name="${t.name}"]:checked`);return e?e.value:""}return t.checked?t.value:""}return"file"===t.type&&t.files&&t.files.length>0?t.multiple?Array.from(t.files):t.files[0]:t.value}return t instanceof HTMLSelectElement?t.multiple?Array.from(t.selectedOptions).map(t=>t.value):t.value:t instanceof HTMLTextAreaElement?t.value:""}isServiceFieldAttribute(e){return t.serviceAttributePrefixes.some(t=>e.startsWith(`${t}[`))}isFormFieldElement(t){return t instanceof HTMLInputElement||t instanceof HTMLSelectElement||t instanceof HTMLTextAreaElement}getInputEventType(t){return t instanceof HTMLSelectElement||t instanceof HTMLInputElement&&("checkbox"===t.type||"radio"===t.type)?"change":"input"}};tt.beforeInputRuleKeys=new Set(["number","integer","email","phone","letters","lettersSpaces","lettersNumbers","alpha","alpha_num","alpha_dash","digits","url","pattern"]),tt.crossFieldRuleKeys=new Set(["same","different","after","before"]),tt.serviceAttributePrefixes=["error","group"];var te=class{constructor(){this.map=new WeakMap,this.all=new Set}attach(t){if(this.map.has(t))return;let e=t.htmlElement,i={cx:0,cy:0,valid:!1,el:e};i.ro=new ResizeObserver(()=>{i.valid=!1}),i.ro.observe(e),this.map.set(t,i),this.all.add(t)}detach(t){let e=this.map.get(t);e&&(e.ro?.disconnect(),this.map.delete(t),this.all.delete(t))}invalidate(t){this.all.forEach(e=>{if(e.id===t){let t=this.map.get(e);t&&(t.valid=!1)}})}invalidateAll(){this.all.forEach(t=>{let e=this.map.get(t);e&&(e.valid=!1)})}getCenter(t){let e=this.map.get(t);if(!e||!e.el)return{cx:0,cy:0};if(!e.valid){let t=e.el.getBoundingClientRect();e.cx=t.left+t.width/2,e.cy=t.top+t.height/2,e.valid=!0}return{cx:e.cx,cy:e.cy}}},ti=class{constructor(){this.active=new Set,this.subs=new WeakMap}track(t){if(this.subs.has(t))return;let e=t.htmlElement,i=()=>this.active.add(t),s=()=>this.active.delete(t);e.addEventListener("pointerenter",i),e.addEventListener("pointerleave",s),this.subs.set(t,{enter:i,leave:s})}untrack(t){let e=this.subs.get(t);if(!e)return;let i=t.htmlElement;e.enter&&i.removeEventListener("pointerenter",e.enter),e.leave&&i.removeEventListener("pointerleave",e.leave),this.active.delete(t),this.subs.delete(t)}isActive(t){return this.active.has(t)}activeObjects(){return Array.from(this.active)}},ts=[{id:"icon-20_logo",viewBox:"0 0 20 20",content:'<path fill="currentColor" id="Combined-Shape" d="M9.443,4.529L13.911,10.273L19.885,15.217L18.865,16.45L12.823,11.45L12.702,11.324L8.181,5.511C7.834,5.066 7.161,5.065 6.814,5.51L1.297,12.564L0.036,11.578L5.553,4.524C6.543,3.259 8.458,3.261 9.443,4.529ZM14.407,2.737L16.907,6.07L16.427,6.43L13.927,3.097L14.407,2.737ZM16.907,1.487L19.407,4.82L18.927,5.18L16.427,1.847L16.907,1.487Z"/>'},{id:"icon-20_layout",viewBox:"0 0 20 20",content:'<path fill="currentColor" d="M8.4,1.25L11.6,1.25C14.024,1.25 15.231,1.296 16.156,1.768C17.05,2.223 17.777,2.95 18.232,3.844C18.704,4.769 18.75,5.976 18.75,8.4L18.75,11.6C18.75,14.024 18.704,15.231 18.232,16.156C17.777,17.05 17.05,17.777 16.156,18.232C15.231,18.704 14.024,18.75 11.6,18.75L8.4,18.75C5.976,18.75 4.769,18.704 3.844,18.232C2.95,17.777 2.223,17.05 1.768,16.156C1.296,15.231 1.25,14.024 1.25,11.6L1.25,8.4C1.25,5.976 1.296,4.769 1.768,3.844C2.223,2.95 2.95,2.223 3.844,1.768C4.769,1.296 5.976,1.25 8.4,1.25ZM8.4,2.75C6.343,2.75 5.31,2.704 4.525,3.104C3.913,3.416 3.416,3.913 3.104,4.525C2.704,5.31 2.75,6.343 2.75,8.4L2.75,11.6C2.75,13.657 2.704,14.69 3.104,15.475C3.416,16.087 3.913,16.584 4.525,16.896C5.31,17.296 6.343,17.25 8.4,17.25L11.6,17.25C13.657,17.25 14.69,17.296 15.475,16.896C16.087,16.584 16.584,16.087 16.896,15.475C17.296,14.69 17.25,13.657 17.25,11.6L17.25,8.4C17.25,6.343 17.296,5.31 16.896,4.525C16.584,3.913 16.087,3.416 15.475,3.104C14.69,2.704 13.657,2.75 11.6,2.75L8.4,2.75ZM6.5,8.5L5.5,8.5L5.5,7.5L6.5,7.5L6.5,8.5ZM14.5,10.5L13.5,10.5L13.5,9.5L14.5,9.5L14.5,10.5ZM14.5,6.5L13.5,6.5L13.5,5.5L14.5,5.5L14.5,6.5ZM14.5,8.5L13.5,8.5L13.5,7.5L14.5,7.5L14.5,8.5ZM6.5,10.5L5.5,10.5L5.5,9.5L6.5,9.5L6.5,10.5ZM6.5,4.5L5.5,4.5L5.5,3.5L6.5,3.5L6.5,4.5ZM6.5,6.5L5.5,6.5L5.5,5.5L6.5,5.5L6.5,6.5ZM6.5,14.5L5.5,14.5L5.5,13.5L6.5,13.5L6.5,14.5ZM6.5,12.5L5.5,12.5L5.5,11.5L6.5,11.5L6.5,12.5ZM14.5,16.5L13.5,16.5L13.5,15.5L14.5,15.5L14.5,16.5ZM6.5,16.5L5.5,16.5L5.5,15.5L6.5,15.5L6.5,16.5ZM14.5,4.5L13.5,4.5L13.5,3.5L14.5,3.5L14.5,4.5ZM14.5,12.5L13.5,12.5L13.5,11.5L14.5,11.5L14.5,12.5ZM14.5,14.5L13.5,14.5L13.5,13.5L14.5,13.5L14.5,14.5ZM10.5,14.5L9.5,14.5L9.5,13.5L10.5,13.5L10.5,14.5ZM10.5,6.5L9.5,6.5L9.5,5.5L10.5,5.5L10.5,6.5ZM10.5,16.5L9.5,16.5L9.5,15.5L10.5,15.5L10.5,16.5ZM10.5,4.5L9.5,4.5L9.5,3.5L10.5,3.5L10.5,4.5ZM10.5,8.5L9.5,8.5L9.5,7.5L10.5,7.5L10.5,8.5ZM10.5,10.5L9.5,10.5L9.5,9.5L10.5,9.5L10.5,10.5ZM10.5,12.5L9.5,12.5L9.5,11.5L10.5,11.5L10.5,12.5ZM6.5,20L5.5,20L5.5,19.5L6.5,19.5L6.5,20ZM6.5,0.5L5.5,0.5L5.5,0L6.5,0L6.5,0.5ZM14.5,20L13.5,20L13.5,19.5L14.5,19.5L14.5,20ZM14.5,0.5L13.5,0.5L13.5,0L14.5,0L14.5,0.5ZM10.5,20L9.5,20L9.5,19.5L10.5,19.5L10.5,20ZM10.5,0.5L9.5,0.5L9.5,0L10.5,0L10.5,0.5Z"/>'},{id:"icon-20_intersection",viewBox:"0 0 20 20",content:'<path fill="currentColor" d="M12.702,1.659C13.408,2.018 13.982,2.592 14.341,3.298C14.577,3.76 14.589,4.044 14.75,4.341C14.958,4.726 15.274,5.042 15.659,5.25C15.956,5.41 16.24,5.423 16.702,5.659C17.408,6.018 17.982,6.592 18.341,7.298C18.704,8.009 18.75,8.936 18.75,10.8L18.75,13.2C18.75,15.064 18.704,15.991 18.341,16.702C17.982,17.408 17.408,17.982 16.702,18.341C15.991,18.704 15.064,18.75 13.2,18.75L10.8,18.75C8.936,18.75 8.009,18.704 7.298,18.341C6.592,17.982 6.018,17.408 5.659,16.702C5.423,16.24 5.411,15.956 5.25,15.659C5.042,15.274 4.726,14.958 4.341,14.75C4.044,14.589 3.76,14.577 3.298,14.341C2.592,13.982 2.018,13.408 1.659,12.702C1.296,11.991 1.25,11.064 1.25,9.2L1.25,6.8C1.25,4.936 1.296,4.009 1.659,3.298C2.018,2.592 2.592,2.018 3.298,1.659C4.009,1.296 4.936,1.25 6.8,1.25L9.2,1.25C11.064,1.25 11.991,1.296 12.702,1.659ZM13.715,5.502C13.61,5.36 13.515,5.211 13.431,5.055C13.265,4.748 13.248,4.456 13.005,3.979C12.789,3.555 12.445,3.211 12.021,2.995C11.45,2.704 10.697,2.75 9.2,2.75L6.8,2.75C5.303,2.75 4.55,2.704 3.979,2.995C3.555,3.211 3.211,3.555 2.995,3.979C2.704,4.55 2.75,5.303 2.75,6.8L2.75,9.2C2.75,10.697 2.704,11.45 2.995,12.021C3.211,12.445 3.555,12.789 3.979,13.005C4.456,13.248 4.748,13.265 5.055,13.431C5.275,13.55 5.481,13.69 5.672,13.848C5.562,13.658 5.5,13.438 5.5,13.203L5.5,10.8C5.5,8.997 5.531,8.1 5.881,7.411C6.217,6.752 6.752,6.217 7.411,5.881C8.1,5.531 8.997,5.5 10.8,5.5L13.2,5.5L13.626,5.5C13.658,5.5 13.687,5.501 13.715,5.502ZM6.152,14.328C6.31,14.519 6.45,14.725 6.569,14.945C6.735,15.252 6.752,15.544 6.995,16.021C7.211,16.445 7.555,16.789 7.979,17.005C8.55,17.296 9.303,17.25 10.8,17.25L13.2,17.25C14.697,17.25 15.45,17.296 16.021,17.005C16.445,16.789 16.789,16.445 17.005,16.021C17.296,15.45 17.25,14.697 17.25,13.2L17.25,10.8C17.25,9.303 17.296,8.55 17.005,7.979C16.789,7.555 16.445,7.211 16.021,6.995C15.544,6.752 15.252,6.735 14.945,6.569C14.789,6.485 14.641,6.39 14.5,6.286L14.5,6.8L14.5,9.2C14.5,11.003 14.469,11.9 14.119,12.589C13.783,13.248 13.248,13.783 12.589,14.119C11.9,14.469 11.003,14.5 9.2,14.5L6.797,14.5C6.562,14.5 6.342,14.438 6.152,14.328ZM13.5,6.5L13.2,6.5L10.8,6.5C9.242,6.5 8.46,6.469 7.865,6.772C7.395,7.012 7.012,7.395 6.772,7.865C6.469,8.46 6.5,9.242 6.5,10.8L6.5,13.203C6.5,13.367 6.633,13.5 6.797,13.5L9.2,13.5C10.758,13.5 11.54,13.531 12.135,13.228C12.605,12.988 12.988,12.605 13.228,12.135C13.531,11.54 13.5,10.758 13.5,9.2L13.5,6.8L13.5,6.5ZM10,8C11.104,8 12,8.896 12,10C12,11.104 11.104,12 10,12C8.896,12 8,11.104 8,10C8,8.896 8.896,8 10,8Z"/>'},{id:"icon-20_progress",viewBox:"0 0 20 20",content:'<path fill="currentColor" d="M11.6,2.5L11.6,1.5L12.402,1.501L12.398,2.501L11.6,2.5ZM11.6,2.5L11.4,2.5L11.4,1.5L11.598,1.5L11.6,2.5ZM2.5,11.378L2.501,12.376L1.501,12.379L1.5,11.378L2.5,11.378ZM6.105,18.243C4.791,18.574 3.416,18.75 2,18.75L2,17.25C2.393,17.25 2.783,17.235 3.169,17.206L3.683,16.624C3.879,16.796 4.094,16.948 4.326,17.074C10.886,16.07 16.07,10.886 17.074,4.326C16.951,4.1 16.804,3.89 16.636,3.698L17.203,3.203C17.234,2.806 17.25,2.405 17.25,2L18.75,2C18.75,3.424 18.572,4.807 18.238,6.128L18.469,6.116C18.484,6.421 18.492,6.758 18.496,7.136L17.946,7.141C16.296,12.264 12.245,16.31 7.119,17.953L7.113,18.496C6.735,18.492 6.398,18.484 6.093,18.468L6.105,18.243ZM9.4,1.5L9.4,2.5L8.363,2.5L8.363,1.5L9.4,1.5ZM2.5,9.378L1.5,9.378L1.5,8.378L2.5,8.378L2.5,9.378ZM14.348,2.568L14.448,1.573C14.864,1.615 15.216,1.681 15.53,1.781L15.227,2.734C14.972,2.653 14.685,2.602 14.348,2.568ZM17.5,9.141L18.5,9.141L18.5,10.141L17.5,10.141L17.5,9.141ZM17.5,12.14L18.5,12.141C18.499,12.509 18.497,12.843 18.492,13.149L17.492,13.132C17.498,12.831 17.499,12.502 17.5,12.14ZM17.326,15.012L18.298,15.246C18.227,15.539 18.133,15.8 18.01,16.043C17.964,16.133 17.915,16.221 17.864,16.307L17.005,15.794C17.045,15.727 17.083,15.659 17.119,15.589C17.208,15.413 17.275,15.224 17.326,15.012ZM15.777,17.015L16.285,17.877C16.206,17.923 16.125,17.968 16.043,18.01C15.794,18.137 15.525,18.233 15.221,18.304L14.993,17.33C15.213,17.279 15.408,17.211 15.589,17.119C15.653,17.086 15.716,17.051 15.777,17.015ZM13.11,17.493L13.127,18.493C12.821,18.498 12.486,18.499 12.119,18.5L12.118,17.5C12.48,17.499 12.809,17.498 13.11,17.493ZM10.119,17.5L10.119,18.5L9.119,18.5L9.119,17.5L10.119,17.5ZM2.728,15.209L1.773,15.506C1.676,15.192 1.611,14.84 1.57,14.425L2.565,14.327C2.599,14.665 2.649,14.953 2.728,15.209ZM2.52,6.396L1.521,6.36C1.535,5.966 1.56,5.622 1.6,5.316L2.591,5.447C2.555,5.725 2.533,6.038 2.52,6.396ZM3.232,3.858L2.441,3.246C2.671,2.949 2.937,2.682 3.233,2.451L3.848,3.24C3.618,3.419 3.411,3.627 3.232,3.858ZM5.433,2.593L5.3,1.602C5.606,1.561 5.95,1.536 6.345,1.521L6.382,2.52C6.024,2.534 5.711,2.556 5.433,2.593Z"/>'},{id:"icon-20_ruler",viewBox:"0 0 20 20",content:'<path fill="currentColor" d="M6,17.75C4.915,17.75 4.376,17.718 3.948,17.541C3.343,17.29 2.847,16.832 2.55,16.248C2.296,15.75 2.25,15.104 2.25,13.8L2.25,6.2C2.25,4.896 2.296,4.25 2.55,3.752C2.813,3.234 3.234,2.813 3.752,2.55C4.25,2.296 4.896,2.25 6.2,2.25L13.8,2.25C15.104,2.25 15.75,2.296 16.248,2.55C16.832,2.847 17.29,3.343 17.541,3.948C17.718,4.376 17.75,4.915 17.75,6L17.75,6.4C17.75,7.144 17.704,7.51 17.559,7.794C17.391,8.124 17.124,8.391 16.794,8.559C16.51,8.704 16.144,8.75 15.4,8.75L10,8.75L10,7.25L12.5,7.25L12.5,6L13.5,6L13.5,7.25L15.4,7.25C15.61,7.25 15.777,7.25 15.916,7.244C16.002,7.24 16.064,7.248 16.113,7.223C16.161,7.199 16.199,7.161 16.223,7.113C16.248,7.064 16.244,6.916 16.244,6.916C16.244,6.916 16.25,5.61 16.25,5.4C16.25,5.4 16.243,4.735 16.155,4.522C16.041,4.247 15.833,4.021 15.567,3.886C15.21,3.704 14.737,3.75 13.8,3.75L6.2,3.75C5.263,3.75 4.79,3.704 4.433,3.886C4.197,4.006 4.006,4.197 3.886,4.433C3.704,4.79 3.75,5.263 3.75,6.2L3.75,13.8C3.75,14.737 3.704,15.21 3.886,15.567C4.021,15.833 4.247,16.041 4.522,16.155C4.829,16.282 5.221,16.25 6,16.25L6,17.75ZM6,17.75L6.006,16.25L6.399,16.25C6.609,16.25 6.777,16.25 6.916,16.244C7.002,16.24 7.064,16.248 7.113,16.223C7.161,16.199 7.199,16.161 7.223,16.113C7.248,16.064 7.24,16.002 7.244,15.916C7.25,15.777 7.25,15.61 7.25,15.4L7.25,13.5L6,13.5L6,12.5L7.25,12.5L7.25,8.5L6,8.5L6,7.5L7.25,7.5L7.25,6L8.75,6L8.75,15.4C8.75,16.144 8.704,16.51 8.559,16.794C8.391,17.124 8.124,17.391 7.794,17.559C7.51,17.704 7.144,17.75 6.4,17.75L6,17.75Z"/>'},{id:"icon-16_noplus",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M2.38,0.675L7.499,6.647L7.5,1L8.5,1L8.5,7.5L15,7.5L15,8.5L9.085,8.498L14.38,14.675L13.62,15.325L1.62,1.325L2.38,0.675ZM7.5,10.119L8.5,11.286L8.5,15L7.5,15L7.5,10.119ZM5.254,7.499L6.111,8.499L1,8.5L1,7.5L5.254,7.499Z" />'},{id:"icon-16_nooffset",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M12.067,11.976L14.38,14.675L13.62,15.325L1.62,1.325L2.38,0.675L5.23,4L10.8,4C11.92,4 12.48,4 12.908,4.218C13.284,4.41 13.59,4.716 13.782,5.092C14,5.52 14,6.08 14,7.2L14,8.8C14,9.92 14,10.48 13.782,10.908C13.59,11.284 13.284,11.59 12.908,11.782C12.684,11.896 12.424,11.95 12.067,11.976ZM2.681,4.497L9.111,11.999L5.2,12C4.08,12 3.52,12 3.092,11.782C2.716,11.59 2.41,11.284 2.218,10.908C2,10.48 2,9.92 2,8.8L2,7.2C2,6.08 2,5.52 2.218,5.092C2.334,4.865 2.491,4.663 2.681,4.497ZM12.646,0.646L13.354,1.354L11,3.707L8.646,1.354L9.354,0.646L11,2.293L12.646,0.646ZM7.354,14.646L6.646,15.354L5,13.707L3.354,15.354L2.646,14.646L5,12.293L7.354,14.646Z"/>'},{id:"icon-16_settings",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8.208,1.177C8.363,1.209 8.524,1.303 8.846,1.489L13.216,4.011C13.538,4.197 13.699,4.291 13.805,4.408C13.899,4.512 13.97,4.635 14.013,4.768C14.062,4.919 14.062,5.105 14.062,5.477L14.062,10.523C14.062,10.895 14.062,11.081 14.013,11.232C13.97,11.365 13.899,11.488 13.805,11.592C13.699,11.709 13.538,11.803 13.216,11.989L8.846,14.511C8.524,14.697 8.363,14.791 8.208,14.823C8.071,14.853 7.929,14.853 7.792,14.823C7.637,14.791 7.476,14.697 7.154,14.511L2.784,11.989C2.462,11.803 2.301,11.709 2.195,11.592C2.101,11.488 2.03,11.365 1.987,11.232C1.938,11.081 1.938,10.895 1.938,10.523L1.938,5.477C1.938,5.105 1.938,4.919 1.987,4.768C2.03,4.635 2.101,4.512 2.195,4.408C2.301,4.291 2.462,4.197 2.784,4.011L7.154,1.489C7.476,1.303 7.637,1.209 7.792,1.177C7.929,1.147 8.071,1.147 8.208,1.177ZM8,5C6.343,5 5,6.343 5,8C5,9.657 6.343,11 8,11C9.657,11 11,9.657 11,8C11,6.343 9.657,5 8,5Z"/>'},{id:"icon-16_options",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M9,7L9,9L7,9L7,7L9,7ZM9,3L9,5L7,5L7,3L9,3ZM9,11L9,13L7,13L7,11L9,11Z"/>'},{id:"icon-16_grab",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M10,4L12,4L12,6L10,6L10,4ZM10,10L12,10L12,12L10,12L10,10ZM7,4L9,4L9,6L7,6L7,4ZM7,10L9,10L9,12L7,12L7,10ZM7,13L9,13L9,15L7,15L7,13ZM4,4L6,4L6,6L4,6L4,4ZM7,1L9,1L9,3L7,3L7,1ZM4,10L6,10L6,12L4,12L4,10Z"/>'},{id:"icon-16_eye",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8,3C10.692,3 13.2,4.46 15.526,7.381C15.815,7.744 15.815,8.256 15.526,8.619C13.2,11.54 10.692,13 8,13C5.308,13 2.8,11.54 0.474,8.619C0.185,8.256 0.185,7.744 0.474,7.381C2.8,4.46 5.308,3 8,3ZM8,5C6.343,5 5,6.343 5,8C5,9.657 6.343,11 8,11C9.657,11 11,9.657 11,8C11,6.343 9.657,5 8,5Z"/>'},{id:"icon-16_offset",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M5.2,4L10.8,4C11.92,4 12.48,4 12.908,4.218C13.284,4.41 13.59,4.716 13.782,5.092C14,5.52 14,6.08 14,7.2L14,8.8C14,9.92 14,10.48 13.782,10.908C13.59,11.284 13.284,11.59 12.908,11.782C12.48,12 11.92,12 10.8,12L5.2,12C4.08,12 3.52,12 3.092,11.782C2.716,11.59 2.41,11.284 2.218,10.908C2,10.48 2,9.92 2,8.8L2,7.2C2,6.08 2,5.52 2.218,5.092C2.41,4.716 2.716,4.41 3.092,4.218C3.52,4 4.08,4 5.2,4ZM12.646,0.646L13.354,1.354L11,3.707L8.646,1.354L9.354,0.646L11,2.293L12.646,0.646ZM7.354,14.646L6.646,15.354L5,13.707L3.354,15.354L2.646,14.646L5,12.293L7.354,14.646Z"/>'},{id:"icon-16_play-l",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M11.293,3.281C11.769,2.923 12.007,2.745 12.266,2.75C12.491,2.755 12.702,2.86 12.841,3.038C13,3.241 13,3.539 13,4.134L13,11.866C13,12.461 13,12.759 12.841,12.962C12.702,13.14 12.491,13.245 12.266,13.25C12.007,13.255 11.769,13.077 11.293,12.719L6.225,8.919C5.827,8.621 5.629,8.471 5.551,8.272C5.483,8.097 5.483,7.903 5.551,7.728C5.629,7.529 5.827,7.379 6.225,7.081L11.293,3.281ZM2.8,3L4.2,3C4.48,3 4.62,3 4.727,3.054C4.821,3.102 4.898,3.179 4.946,3.273C5,3.38 5,3.52 5,3.8L5,12.2C5,12.48 5,12.62 4.946,12.727C4.898,12.821 4.821,12.898 4.727,12.946C4.62,13 4.48,13 4.2,13L2.8,13C2.52,13 2.38,13 2.273,12.946C2.179,12.898 2.102,12.821 2.054,12.727C2,12.62 2,12.48 2,12.2L2,3.8C2,3.52 2,3.38 2.054,3.273C2.102,3.179 2.179,3.102 2.273,3.054C2.38,3 2.52,3 2.8,3Z"/>'},{id:"icon-16_play-r",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M4.707,3.281L9.775,7.081C10.173,7.379 10.371,7.529 10.449,7.728C10.517,7.903 10.517,8.097 10.449,8.272C10.371,8.471 10.173,8.621 9.775,8.919L4.707,12.719C4.231,13.077 3.993,13.255 3.734,13.25C3.509,13.245 3.298,13.14 3.159,12.962C3,12.759 3,12.461 3,11.866L3,4.134C3,3.539 3,3.241 3.159,3.038C3.298,2.86 3.509,2.755 3.734,2.75C3.993,2.745 4.231,2.923 4.707,3.281ZM11.8,3L13.2,3C13.48,3 13.62,3 13.727,3.054C13.821,3.102 13.898,3.179 13.946,3.273C14,3.38 14,3.52 14,3.8L14,12.2C14,12.48 14,12.62 13.946,12.727C13.898,12.821 13.821,12.898 13.727,12.946C13.62,13 13.48,13 13.2,13L11.8,13C11.52,13 11.38,13 11.273,12.946C11.179,12.898 11.102,12.821 11.054,12.727C11,12.62 11,12.48 11,12.2L11,3.8C11,3.52 11,3.38 11.054,3.273C11.102,3.179 11.179,3.102 11.273,3.054C11.38,3 11.52,3 11.8,3Z"/>'},{id:"icon-16_plus",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M7.5,8.5L1,8.5L1,7.5L7.5,7.5L7.5,1L8.5,1L8.5,7.5L15,7.5L15,8.5L8.5,8.5L8.5,15L7.5,15L7.5,8.5Z"/>'},{id:"icon-16_minus",viewBox:"0 0 16 16",content:'<rect x="3" y="7.5" width="10" height="1"/>'},{id:"icon-16_close",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M7.293,8L1.646,2.354L2.354,1.646L8,7.293L13.646,1.646L14.354,2.354L8.707,8L14.354,13.646L13.646,14.354L8,8.707L2.354,14.354L1.646,13.646L7.293,8Z"/>'},{id:"icon-16_layout-columns",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M7,3L9,3L9,13L7,13L7,3ZM3,3L5,3L5,13L3,13L3,3ZM11,3L13,3L13,13L11,13L11,3Z"/>'},{id:"icon-16_layout-rows",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M13,3L13,5L3,5L3,3L13,3ZM13,7L13,9L3,9L3,7L13,7ZM13,11L13,13L3,13L3,11L13,11Z"/>'},{id:"icon-16_layout-center",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M12.673,11.362C12.385,11.926 11.926,12.385 11.362,12.673C10.76,12.98 9.983,12.999 8.501,13L8.5,8.5L13,8.501C12.999,9.983 12.98,10.76 12.673,11.362ZM3,8.501L7.5,8.5L7.5,13C6.017,12.999 5.24,12.98 4.638,12.673C4.074,12.385 3.615,11.926 3.327,11.362C3.02,10.76 3.001,9.983 3,8.501ZM11.362,3.327C11.926,3.615 12.385,4.074 12.673,4.638C12.98,5.24 12.999,6.017 13,7.5L8.5,7.5L8.501,3C9.983,3.001 10.76,3.02 11.362,3.327ZM7.5,3L7.5,7.5L3,7.5C3.001,6.017 3.02,5.24 3.327,4.638C3.615,4.074 4.074,3.615 4.638,3.327C5.24,3.02 6.017,3.001 7.5,3Z"/>'},{id:"icon-16_layout-golden",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8.488,3L8.5,3L8.501,13C8.404,13 8.304,13 8.2,13L7.8,13C6.12,13 5.28,13 4.638,12.673C4.074,12.385 3.615,11.926 3.327,11.362C3,10.72 3,9.88 3,8.2L3,7.8C3,6.12 3,5.28 3.327,4.638C3.615,4.074 4.074,3.615 4.638,3.327C5.28,3 6.12,3 7.8,3L8.2,3L8.488,3ZM12.673,11.362C12.385,11.926 11.926,12.385 11.362,12.673C10.913,12.902 10.366,12.971 9.501,12.991L9.5,9.5L12.991,9.501C12.971,10.366 12.902,10.913 12.673,11.362ZM11.362,3.327C11.926,3.615 12.385,4.074 12.673,4.638C13,5.28 13,6.12 13,7.8L13,8.2C13,8.304 13,8.404 13,8.501L9.5,8.5L9.501,3.009C10.366,3.029 10.913,3.098 11.362,3.327Z"/>'},{id:"icon-16_layout-thirds",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M6.5,10.5L9.5,10.5L9.501,12.991C9.131,13 8.703,13 8.2,13L7.8,13C7.297,13 6.869,13 6.5,12.991L6.5,10.5ZM3.077,10.502L5.5,10.5L5.499,12.923C5.159,12.876 4.884,12.798 4.638,12.673C4.074,12.385 3.615,11.926 3.327,11.362C3.202,11.116 3.125,10.841 3.077,10.502ZM12.673,11.362C12.385,11.926 11.926,12.385 11.362,12.673C11.116,12.798 10.841,12.875 10.502,12.923L10.5,10.5L12.923,10.502C12.875,10.841 12.798,11.116 12.673,11.362ZM13,7.8L13,8.2C13,8.703 13,9.131 12.991,9.501L10.5,9.5L10.5,6.5L12.991,6.5C13,6.869 13,7.297 13,7.8ZM3.009,6.5L5.5,6.5L5.5,9.5L3.009,9.501C3,9.131 3,8.703 3,8.2L3,7.8C3,7.297 3,6.869 3.009,6.5ZM6.5,6.5L9.5,6.5L9.5,9.5L6.5,9.5L6.5,6.5ZM11.362,3.327C11.926,3.615 12.385,4.074 12.673,4.638C12.798,4.884 12.876,5.159 12.923,5.499L10.5,5.5L10.502,3.077C10.841,3.125 11.116,3.202 11.362,3.327ZM5.499,3.077L5.5,5.5L3.077,5.499C3.124,5.159 3.202,4.884 3.327,4.638C3.615,4.074 4.074,3.615 4.638,3.327C4.884,3.202 5.159,3.124 5.499,3.077ZM9.501,3.009L9.5,5.5L6.5,5.5L6.5,3.009C6.869,3 7.297,3 7.8,3L8.2,3C8.703,3 9.131,3 9.501,3.009Z"/>'},{id:"icon-16_layout-dots",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M11,3L13,3L13,5L11,5L11,3ZM11,7L13,7L13,9L11,9L11,7ZM11,11L13,11L13,13L11,13L11,11ZM7,3L9,3L9,5L7,5L7,3ZM7,7L9,7L9,9L7,9L7,7ZM7,11L9,11L9,13L7,13L7,11ZM3,3L5,3L5,5L3,5L3,3ZM3,7L5,7L5,9L3,9L3,7ZM3,11L5,11L5,13L3,13L3,11Z"/>'},{id:"icon-16_export",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8.5,5C9.983,5.001 10.76,5.02 11.362,5.327C12.12,5.713 12.678,6.402 12.898,7.224C13,7.605 13,8.07 13,9C13,9.93 13,10.395 12.898,10.776C12.678,11.598 12.12,12.287 11.362,12.673C10.72,13 9.88,13 8.2,13L7.8,13C6.12,13 5.28,13 4.638,12.673C3.88,12.287 3.322,11.598 3.102,10.776C3,10.395 3,9.93 3,9C3,8.07 3,7.605 3.102,7.224C3.322,6.402 3.88,5.713 4.638,5.327C5.24,5.02 6.017,5.001 7.5,5L7.5,10L8.5,10L8.5,5ZM7.5,5L7.5,3.207L6.354,4.354L5.646,3.646L8,1.293L10.354,3.646L9.646,4.354L8.5,3.207L8.5,5L7.5,5Z"/>'},{id:"icon-16_import",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8.5,5C9.983,5.001 10.76,5.02 11.362,5.327C12.12,5.713 12.678,6.402 12.898,7.224C13,7.605 13,8.07 13,9C13,9.93 13,10.395 12.898,10.776C12.678,11.598 12.12,12.287 11.362,12.673C10.72,13 9.88,13 8.2,13L7.8,13C6.12,13 5.28,13 4.638,12.673C3.88,12.287 3.322,11.598 3.102,10.776C3,10.395 3,9.93 3,9C3,8.07 3,7.605 3.102,7.224C3.322,6.402 3.88,5.713 4.638,5.327C5.24,5.02 6.017,5.001 7.5,5L7.5,8.793L6.354,7.646L5.646,8.354L8,10.707L10.354,8.354L9.646,7.646L8.5,8.793L8.5,5ZM7.5,5L7.5,2L8.5,2L8.5,5L7.5,5Z"/>'},{id:"icon-16_break",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M10.475,11.182L11.182,10.475L14.01,13.303L13.303,14.01L10.475,11.182ZM11.437,9.197L11.634,8.217L15.169,8.924L14.973,9.905L11.437,9.197ZM8.217,11.634L9.197,11.437L9.905,14.973L8.924,15.169L8.217,11.634ZM5.525,4.818L4.818,5.525L1.99,2.697L2.697,1.99L5.525,4.818ZM7.783,4.366L6.803,4.563L6.095,1.027L7.076,0.831L7.783,4.366ZM4.563,6.803L4.366,7.783L0.831,7.076L1.027,6.095L4.563,6.803Z"/>'},{id:"icon-16_offset-marker-down",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M8.5,3L7.5,3L7.5,10.793L5.354,8.646L4.646,9.354L8,12.707L11.354,9.354L10.646,8.646L8.5,10.793L8.5,3Z"/>'},{id:"icon-16_offset-marker-up",viewBox:"0 0 16 16",content:'<path fill="currentColor" d="M7.5,13L8.5,13L8.5,5.207L10.646,7.354L11.354,6.646L8,3.293L4.646,6.646L5.354,7.354L7.5,5.207L7.5,13Z"/>'},{id:"icon-12_chevrone-up",viewBox:"0 0 12 12",content:'<path fill="currentColor" d="M3.277,7.416L2.723,6.584L6,4.399L9.277,6.584L8.723,7.416L6,5.601L3.277,7.416Z"/>'},{id:"icon-12_chevrone-down",viewBox:"0 0 12 12",content:'<path fill="currentColor" d="M8.723,4.584L9.277,5.416L6,7.601L2.723,5.416L3.277,4.584L6,6.399L8.723,4.584Z"/>'},{id:"icon-12_arrow-up",viewBox:"0 0 12 12",content:'<path fill="currentColor" d="M5.5,3.934L3.277,5.416L2.723,4.584L6,2.399L9.277,4.584L8.723,5.416L6.5,3.934L6.5,10L5.5,10L5.5,3.934Z"/>'},{id:"icon-12_arrow-down",viewBox:"0 0 12 12",content:'<path fill="currentColor" d="M6.5,8.066L8.723,6.584L9.277,7.416L6,9.601L2.723,7.416L3.277,6.584L5.5,8.066L5.5,2L6.5,2L6.5,8.066Z"/>'}],tr=class t{constructor(){for(let t of(this.spriteRoot=null,ts))this.register(t)}static getInstance(){return this.instance||(this.instance=new t),this.instance}register(t){let e=this.ensureSprite();if(e.querySelector(`#${t.id}`))return;let i=document.createElementNS("http://www.w3.org/2000/svg","symbol");i.id=t.id,i.setAttribute("viewBox",t.viewBox),i.innerHTML=t.content,e.appendChild(i)}resolve(t,e,...i){let s=`icon-${t}_${e}`,r=i.map(t=>` data-stdg-icon-${t}`).join("");return`<svg data-stdg-icon-${t}${r}><use href="#${s}"></use></svg>`}ensureSprite(){if(this.spriteRoot)return this.spriteRoot;let t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t.setAttribute("data-string-devtools-icon-sprite",""),t.setAttribute("aria-hidden","true"),t.style.cssText="display:none;position:absolute;width:0;height:0;overflow:hidden",(document.body??document.documentElement).prepend(t),this.spriteRoot=t,t}};function tn(t,e,...i){return tr.getInstance().resolve(t,e,...i)}function to(t){let{icon:e,size:i=16,label:s,modifiers:r=[],attrs:n}=t,o=document.createElement("button");for(let t of(o.type="button",o.setAttribute("data-stdg-button",""),o.setAttribute(`data-stdg-button-icon-${i}`,""),r))o.setAttribute(`data-stdg-button-${t}`,"");if(o.setAttribute("aria-label",s),o.setAttribute("title",s),o.innerHTML=tn(i,e),n)for(let[t,e]of Object.entries(n))o.setAttribute(t,e);return o}tr.instance=null;var ta=`

[data-string-devtools-overlay-badge][data-module-enabled="false"] {
  display: none;
}

[data-string-devtools-overlay-badge][data-visible="false"] {
  display: none;
}

[data-stdg] {
  --string-dg-font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
    'Helvetica Neue', sans-serif;
  --string-dg-font-size: 12px;
  --string-dg-font-size-s: 10px;
  --string-dg-font-size-xs: 8px;
  --string-dg-font-normal: 400;
  --string-dg-font-medium: 500;
  --string-dg-font-bold: 600;

  --string-dg-color-blue: #3687ff;
  --string-dg-color-amber: #b45100;
  --string-dg-color-green: #00823c;
  --string-dg-color-teal: #00788c;
  --string-dg-color-red: #f45524;
  --string-dg-color-black: #111111;
  --string-dg-color-white: #ffffff;
  --string-dg-color-cloud-white: rgba(249, 249, 249, 0.8);
  --string-dg-color-middle-white: rgba(249, 249, 249, 0.4);
  --string-dg-color-hairline: rgba(220, 220, 220, 0.5);
  --string-dg-color-offset: rgba(127, 127, 127, 0.8);
  --string-dg-color-grey-1: #eeeeee;
  --string-dg-color-grey-2: #dddddd;
  --string-dg-color-grey-3: #cccccc;
  --string-dg-color-grey-4: #bbbbbb;
  --string-dg-color-grey-5: #aaaaaa;
  --string-dg-color-grey-6: #888888;

  /* dock */
  --string-dg-dock-radius: 16px;
  --string-dg-dock-padding: 3px 4px;
  --string-dg-dock-shadow: 0 16px 32px rgba(0, 0, 0, 0.08);

  /* badge */
  --string-dg-badge-radius: 12px;
  --string-dg-badge-padding: 1px;
  --string-dg-badge-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);

  /* panel */
  --string-dg-panel-radius: 18px;
  --string-dg-panel-padding: 0px;
  --string-dg-panel-shadow: 0 0 1px rgba(0, 0, 0, 0.4), 0 16px 32px rgba(0, 0, 0, 0.08);
  --string-dg-panel-header-padding: 5px;
  --string-dg-panel-responsive-margin: 0 5px 8px 5px;
  --string-dg-panel-conent-margin: 0 5px 8px 5px;
  --string-dg-panel-hr-margin: 16px 0;

  /* buttons | inputs | etc */
  --string-dg-min-height: 34px;

  /* input */
  --string-dg-input: 4px 0;
  --string-dg-input-container-negative-margin: -8px;
  --string-dg-input-range-padding: 6px 8px;
  --string-dg-panel-range-width: 2px;
  --string-dg-input-range-webkit-margin: 4px;

  /* toggle */
  --string-dg-toggle-gap: 8px;
  --string-dg-toggle-knob: 12px;
  --string-dg-toggle-padding: 1px;
  --string-dg-toggle-radius: 12px;
  --string-dg-toggle-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);

  /* button */
  /* button | icon-20 */
  --string-dg-button-icon-20-background: rgba(255, 255, 255, 0.25);
  --string-dg-button-icon-20-radius: 12px;
  --string-dg-button-icon-20-padding: 6px;
  /* button | icon-16 */
  --string-dg-button-icon-16-background: rgba(255, 255, 255, 0.25);
  --string-dg-button-icon-16-radius: 10px;
  --string-dg-button-icon-16-padding: 5px;
  /* button | icon-12 */
  --string-dg-button-icon-12-background: rgba(255, 255, 255, 0.25);
  --string-dg-button-icon-12-radius: 5px;
  --string-dg-button-icon-12-margin: 1px;

  /* panel button */
  --string-dg-panel-button-radius: 8px;
  --string-dg-panel-button-padding-1: 8px;
  --string-dg-panel-button-padding-2: 8px 12px 8px 5px;
  --string-dg-panel-button-gap: 8px;

  /* panel field */
  --string-dg-panel-field-slider-gap: 4px;

  --string-dg-panel-field-padding: 0 0 0 8px;
  --string-dg-panel-field-input-padding: 8px 0;
  --string-dg-panel-field-icon-left: 5px;
  --string-dg-panel-field-label-left: 8px;

  /* panel breakpoints */
  --string-dg-panel-breakpoints-margin: 16px 0 24px;
  --string-dg-panel-breakpoint-marker-width: 2px;
  --string-dg-panel-breakpoint-marker-padding: 4px 8px 0px;
  --string-dg-panel-breakpoint-marker-margin: -4px -16px 0px;
  --string-dg-panel-breakpoints-span-pos-cor: 4px;

  /* panel-item */
  --string-dg-panel-list-item-radius: 8px;
  --string-dg-panel-list-item-padding: 8px 5px 8px 5px;
  --string-dg-panel-list-item-grabbing: -8px -5px -8px -5px;
  --string-dg-panel-list-item-delete-margin: -4px 0;

  /* offsets */
  --string-dg-offsets-dasharray: 2px 8px;

  font-family: var(--string-dg-font-family);
  font-size: var(--string-dg-font-size);
  line-height: 1;
  color: var(--string-dg-color-black);
  box-sizing: content-box;
  box-shadow: none;
  background: none;
  border: none;
  border-radius: 0;
}

/* input */


[data-stdg-input], [data-stdg-input]:focus, [data-stdg-input]:hover {
  box-shadow: none !important;
  background-color: none;
  background-image: none;
  outline: none;
  border: none;
  color: none;
  -webkit-box-shadow: none !important;
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
  

[data-stdg-input][type='color'] {
  display: flex;
  justify-content: center;
  
}

input[type="color" i]::-webkit-color-swatch-wrapper {
  padding: 0;
  height: 50%;
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--string-dg-color-white);
}

input[type="color" i]::-webkit-color-swatch{
border: none;
}

[data-stdg-input][type='color']::-moz-color-swatch {
  padding: 0;
  height: 50%;
  width: 50%;
  aspect-ratio: 1/1;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid var(--string-dg-color-white);
}
[data-stdg-input][type='number'] {
  font-variant-numeric: tabular-nums;
}
[data-stdg-select],
[data-stdg-select]::-webkit-outer-spin-button,
[data-stdg-select]::-webkit-inner-spin-button,
[data-stdg-input][type='number']::-webkit-outer-spin-button,
[data-stdg-input][type='number']::-webkit-inner-spin-button {
  -moz-appearance: textfield;
  -webkit-appearance: none;
  margin: 0;
}
[data-stdg-input][type="range"] {
  -webkit-appearance: none;
  appearance: none;
  align-items: stretch;
  width: 100%;
  display: inline-block;
  background: transparent;
  background-image: linear-gradient(
    to right,
    var(--string-dg-color-grey-2) var(--string-progress-slider-fill),
    transparent var(--string-progress-slider-fill)
  );
  border-radius: var(--string-dg-panel-button-radius);
}
[data-stdg-input][type="range"]::-moz-range-track {
  display: none;
}
[data-stdg-input][type="range"]::-moz-range-thumb {
  appearance: none;
  width: 0;
  height: 100%;
  border: none;
  padding: var(--string-dg-input-range-padding);
  background: none;
  background-image:
    linear-gradient(0deg, var(--string-dg-color-black))
  ;
  background-repeat: no-repeat;
  background-size: var(--string-dg-panel-breakpoint-marker-width) 100%;
  background-position: center center;
  cursor: col-resize;
}
[data-stdg-input][type="range"]::-webkit-slider-container {
  margin-top: calc(-1.5 * var(--string-dg-input-range-webkit-margin));
  height: calc(100% + var(--string-dg-input-range-webkit-margin) * 3);

  margin-left: var(--string-dg-input-container-negative-margin);
  margin-right: var(--string-dg-input-container-negative-margin);
}
[data-stdg-input][type="range"]::-webkit-slider-runnable-track {
  height: 100%;
}
[data-stdg-input][type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0;
  height: 100%;
  padding: var(--string-dg-input-range-padding);
  background-image:
    linear-gradient(0deg, var(--string-dg-color-black))
  ;
  background-repeat: no-repeat;
  background-size: var(--string-dg-panel-range-width) 100%;
  background-position: center center;
  cursor: col-resize;

  opacity: 0;
  transition: opacity 0.15s ease-out;
}
[data-stdg-input][type="range"]:hover::-webkit-slider-thumb,
[data-stdg-input][type="range"]:active::-webkit-slider-thumb {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

[data-stdg-select],
[data-stdg-input],
[data-stdg-textarea] {
  display: block;
  width: 100%;
  box-sizing: content-box;
  background-color: transparent;
  padding: var(--string-dg-input);
  margin: 0;
  border-radius: 0;
  border: none;
  box-shadow: none;
  text-align: center;
  text-align-last: center;
  cursor: default;

  font-family: var(--string-dg-font-family);
  font-size: var(--string-dg-font-size-s);
  font-weight: var(--string-dg-font-bold);
}
[data-stdg-select]:focus,
[data-stdg-input]:focus,
[data-stdg-textarea]:focus {
  outline: none;
  box-shadow: none;
}

/* toggle */
[data-stdg-toggle] {
  border-radius: var(--string-dg-toggle-radius);
  background: var(--string-dg-color-grey-3);
  padding: var(--string-dg-toggle-padding) calc(var(--string-dg-toggle-gap) + var(--string-dg-toggle-padding))
    var(--string-dg-toggle-padding) var(--string-dg-toggle-padding);
  display: inline-flex;
  position: relative;
}
[data-stdg-toggle-input] {
  display: none;
}
[data-stdg-toggle-knob] {
  width: var(--string-dg-toggle-knob);
  height: var(--string-dg-toggle-knob);
  border-radius: var(--string-dg-toggle-radius);
  background: var(--string-dg-color-white);
  box-shadow: var(--string-dg-toggle-shadow);
  margin-left: auto;
}
[data-stdg-toggle][data-checked='true'] {
  background-color: var(--string-dg-color-blue);
}
[data-checked='false'] [data-stdg-toggle-knob] {
  translate: var(--string-dg-toggle-gap) 0;
}

/* button */

[data-stdg-panel-content] > [data-stdg-panel-breakpoints],
[data-stdg-panel-field-slider] > [data-stdg-panel-field],
[data-stdg-panel-content] > [data-stdg-panel-field],
[data-stdg-panel-content] > [data-stdg-button] {
  min-height: var(--string-dg-min-height);
}

[data-stdg-panel-breakpoints],
[data-stdg-panel-field],
[data-stdg-button] {
  display: flex;
  box-shadow: none;
  background: none;
  border-radius: 0;
  margin: 0;
  padding: 0;
  cursor: default;
  box-sizing: border-box;
  border: 1px solid transparent;
  font-family: var(--string-dg-font-family);
  font-size: var(--string-dg-font-size);
  font-weight: var(--string-dg-font-medium);
  color: var(--string-dg-color-black);
}
[data-stdg-panel-field][data-disabled="true"]{
  display: none;
}
[data-stdg-dock-list] > [data-stdg-button] {
  display: block;
}
[data-stdg-panel-breakpoints] > *,
[data-stdg-panel-field] > *,
[data-stdg-button] > * {
  grid-area: 1/1;
  flex-shrink: 0;
}
[data-stdg-panel-breakpoints] span,
[data-stdg-panel-field] span,
[data-stdg-button] span {
  pointer-events: none;
  -webkit-user-select: none;
  user-select: none;
}
/* button | icon-20 */
[data-stdg-holder-icon-20] {
  padding: var(--string-dg-button-icon-20-padding);
}
[data-stdg-button-icon-20] {
  background-color: var(--string-dg-button-icon-20-background);
  padding: var(--string-dg-button-icon-20-padding);
  border-radius: var(--string-dg-button-icon-20-radius);
}
[data-stdg-icon-20] {
  width: 20px;
  aspect-ratio: 1/1;
  color: var(--string-dg-color-black);
}
/* button | icon-16 */
[data-stdg-holder-icon-16] {
  padding: var(--string-dg-button-icon-16-padding);
}
[data-stdg-button-icon-16] {
  background-color: var(--string-dg-button-icon-16-background);
  padding: var(--string-dg-button-icon-16-padding);
  border-radius: var(--string-dg-button-icon-16-radius);
}
[data-stdg-icon-16] {
  width: 16px;
  aspect-ratio: 1/1;
  color: var(--string-dg-color-black);
}
/* button | icon-12 */
[data-stdg-holder-icon-12] {
}
[data-stdg-button-icon-12] {
  background-color: var(--string-dg-button-icon-12-background);
  border-radius: var(--string-dg-button-icon-12-radius);
  margin: var(--string-dg-button-icon-12-margin);
}
[data-stdg-icon-12] {
  width: 12px;
  aspect-ratio: 1/1;
  color: var(--string-dg-color-black);
}
/* button | icon-second */
[data-stdg-icon-second] {
  color: var(--string-dg-color-grey-4);
}
/* button | hover */
[data-stdg-button-hover] {
  display: grid;
  place-items: center;
}
[data-stdg-button-hover] svg:last-child {
  visibility: hidden;
}
[data-stdg-button-hover]:hover svg:first-child {
  visibility: hidden;
}
[data-stdg-button-hover]:hover svg:last-child {
  visibility: visible;
}
[data-stdg-dock] [data-stdg-button-hover] svg:last-child {
  transform: rotate(-90deg);
}
[data-stdg-dock] [data-stdg-button-hover][data-collapsed='true'] svg:last-child {
  transform: rotate(90deg);
}

/* button | data-active */
[data-active='false'] [data-stdg-icon-12],
[data-active='false'] [data-stdg-icon-16],
[data-active='false'] [data-stdg-icon-20] {
  color: var(--string-dg-color-grey-5);
}
/* button | toggle */
[data-stdg-button-toggle][data-active='false'] [data-stdg-icon-12]:not([data-stdg-icon-second]),
[data-stdg-button-toggle][data-active='false'] [data-stdg-icon-16]:not([data-stdg-icon-second]),
[data-stdg-button-toggle][data-active='false'] [data-stdg-icon-20]:not([data-stdg-icon-second]) {
  color: var(--string-dg-color-black);
}
[data-stdg-button-toggle][data-active='true'] {
  background-color: var(--string-dg-color-grey-2);
}
  
[data-stdg-button-toggle][data-active='true'] [data-stdg-icon-12]:not([data-stdg-icon-second]),
[data-stdg-button-toggle][data-active='true'] [data-stdg-icon-16]:not([data-stdg-icon-second]),
[data-stdg-button-toggle][data-active='true'] [data-stdg-icon-20]:not([data-stdg-icon-second]) {
  
}

[data-stdg-panel-breakpoints]:hover:not([data-stdg-panel-breakpoint-marker]):not([data-string-grid-list-delete]),
[data-stdg-panel-field]:hover:not([data-stdg-panel-breakpoint-marker]):not([data-string-grid-list-delete]),
[data-stdg-button]:hover:not([data-stdg-panel-breakpoint-marker]):not([data-string-grid-list-delete]) {
  border: 1px solid var(--string-dg-color-cloud-white);
  background-color: var(--string-dg-color-grey-1);
}
[data-stdg-button]:active:not(:has([data-stdg-toggle]:active)):not([data-stdg-panel-breakpoint-marker]) {
  border: 1px solid var(--string-dg-color-cloud-white);
  background-color: var(--string-dg-color-grey-3);
}

/* panel button */
[data-stdg-panel-button] {
  box-sizing: border-box;
  border: 1px solid var(--string-dg-color-white);
  background-color: var(--string-dg-color-grey-1);

  border-radius: var(--string-dg-panel-button-radius);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--string-dg-panel-button-gap);
}
[data-stdg-panel-button]:has(svg):has(span) {
  width: 100%;
  padding: var(--string-dg-panel-button-padding-2);
}
[data-stdg-panel-button]:not(:has(svg):has(span)) {
  background-color: var(--string-dg-color-white);
  padding: var(--string-dg-panel-button-padding-1);
}

[data-stdg-panel-button]:not(:has(svg):has(span)) span {
  font-size: var(--string-dg-font-size-s);
  font-weight: var(--string-dg-font-bold);
  width: 16px;
  aspect-ratio: 1/1;
  display: grid;
  place-items: center;
}
[data-stdg-panel-button][data-active='true']:not(:has(svg):has(span)) span {
}

[data-string-grid-list-delete] {
  background-color: var(--string-dg-color-white);
  border-radius: 50%;
}


/* panel list-item */
[data-stdg-panel-list-item] {
  border: 1px solid var(--string-dg-color-white);
  background-color: var(--string-dg-color-grey-1);

  border-radius: var(--string-dg-panel-list-item-radius);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: var(--string-dg-panel-button-gap);

  padding: var(--string-dg-panel-list-item-padding);
}
[data-stdg-panel-list-item] [data-stdg-icon-second] {
  padding: var(--string-dg-panel-list-item-padding);
  margin: var(--string-dg-panel-list-item-grabbing);
}
[data-stdg-panel-list-item] [data-stdg-icon-second]:active {
  cursor: grabbing;
}
[data-stdg-panel-list-item] > span {
  margin-right: auto;
}
[data-stdg-panel-list-item] [data-stdg-toggle] {
}
[data-stdg-panel-list-item] [data-string-grid-list-delete] {
  margin: var(--string-dg-panel-list-item-delete-margin);
}
[data-stdg-panel-list-item][data-dragging="true"] {
  opacity: 0.4;
  cursor: grabbing;
}
[data-stdg-panel-list-item][data-drag-over="before"] {
  box-shadow: 0 -2px 0 var(--string-dg-color-black);
}
[data-stdg-panel-list-item][data-drag-over="after"] {
  box-shadow: 0 2px 0 var(--string-dg-color-black);
}

[data-stdg-panel-list-item]:has([data-checked='false']) > [data-stdg-icon-16] {
  color: var(--string-dg-color-grey-4) !important;
}
[data-stdg-panel-list-item]:has([data-checked='false']) > span {
  color: var(--string-dg-color-grey-6);
}

/* panel field */
[data-stdg-panel-field] {
  box-sizing: border-box;
  border: 1px solid var(--string-dg-color-white);
  background-color: var(--string-dg-color-grey-1);

  border-radius: var(--string-dg-panel-button-radius);
  padding: var(--string-dg-panel-field-padding);
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--string-dg-panel-button-gap);
}
[data-stdg-panel-field]:has(> [data-stdg-field-input-disable]) {
  padding: 0;
  gap: 0;
}

[data-stdg-panel-field]:has(> [data-stdg-toggle]:last-child) {
  padding-right: 8px;
}

[data-stdg-panel-field] span {
}

[data-stdg-field-input] {
  width: 50%;
  display: flex;
  align-items: center;
}
[data-stdg-field-input] > * {
  flex: 1;
}
[data-stdg-field-value] {
  display: flex;
  align-items: center;
  min-width: 0;
}
[data-stdg-field-value] [data-stdg-input] {
  flex: 1;
  min-width: 0;
}
[data-stdg-field-suffix] {
  flex: 0 0 auto;
  padding: var(--string-dg-panel-field-input-padding);
  color: var(--string-dg-color-grey-6);
  font-size: var(--string-dg-font-size-s);
  font-weight: var(--string-dg-font-bold);
  background-image: linear-gradient(0deg, var(--string-dg-color-grey-3));
  background-repeat: no-repeat;
  background-size: 1px 80%;
  background-position: left center;
}
[data-stdg-field-input] [data-stdg-select],
[data-stdg-field-input] [data-stdg-input] {
  padding: var(--string-dg-panel-field-input-padding);
  background-image: linear-gradient(0deg, var(--string-dg-color-grey-3));
  background-repeat: no-repeat;
  background-size: 1px 80%;
  background-position: left center;
}
[data-stdg-field-input] [data-stdg-input][type='color'] {
  flex: 0 0 33.3333%;
  height: 100%;
}
[data-stdg-field-input] [data-stdg-stepper] {
  flex: 0 0 33.3333%;
  display: flex;
  flex-wrap: wrap;
  justify-content: stretch;
  align-items: stretch;
  background-image: linear-gradient(0deg, var(--string-dg-color-grey-3)), linear-gradient(0deg, var(--string-dg-color-grey-3));
  background-repeat: no-repeat, no-repeat;
  background-size:
    1px 80%,
    90% 1px;
  background-position:
    left center,
    left center;
}
[data-stdg-field-input] [data-stdg-stepper] button {
  width: 100%;
  display: grid;
  place-items: center;
}

/* svg + input + px */
[data-stdg-panel-field] > span > [data-stdg-icon-16] {
  position: absolute;
  top: 8px;
  left: var(--string-dg-panel-field-icon-left);
  pointer-events: none;
}
[data-stdg-panel-field] > [data-stdg-icon-16] {
  position: absolute;
  left: var(--string-dg-panel-field-icon-left);
  pointer-events: none;
}
[data-stdg-panel-field] > input {
  align-self: stretch;
  flex: 1;
}
[data-stdg-panel-field]:has(> [data-stdg-icon-16]) > input {
  padding-left: var(--string-dg-panel-field-icon-left);
}
[data-stdg-field-input-disable] {
  flex: 0 0 16%;
  min-width: calc(var(--string-dg-font-size) * 3);
  text-align: center;
  color: var(--string-dg-color-grey-6);
  padding: var(--string-dg-panel-field-input-padding);
  background-image: linear-gradient(0deg, var(--string-dg-color-grey-3));
  background-repeat: no-repeat;
  background-size: 1px 80%;
  background-position: left center;
}

/* slider wrapper */
[data-stdg-panel-field-slider-row] {
  display: flex;
  gap: var(--string-dg-panel-field-slider-gap);
}
[data-stdg-panel-field-slider-row] [data-stdg-panel-field] {
  flex: 0 0 20%;
}
[data-stdg-panel-field-slider-row] [data-stdg-panel-field-slider] {
  flex: 1;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
[data-stdg-panel-field-slider] label {
  position: absolute;
  left: var(--string-dg-panel-field-label-left);
  color: var(--string-dg-color-grey-6);
  pointer-events: none;
}
[data-stdg-panel-field-slider] input {
  grid-area: 1/1;
  justify-self: stretch;
  min-width: 0;
  width: 100%;
}

/* panel responsive */
[data-stdg-panel-breakpoints] {
  box-sizing: border-box;
  border: 1px solid var(--string-dg-color-white);
  background-color: var(--string-dg-color-grey-1);

  border-radius: var(--string-dg-panel-button-radius);

  margin: var(--string-dg-panel-breakpoints-margin);

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  gap: var(--string-dg-panel-button-gap);

  font-size: var(--string-dg-font-size-s);
  font-weight: var(--string-dg-font-bold);
}
[data-stdg-panel-breakpoints]:before {
  content: '0';
  font-size: var(--string-dg-font-size-xs);
  color: var(--string-dg-color-grey-3);
  position: absolute;
  bottom: calc(100% + var(--string-dg-font-size-xs) / 2 + var(--string-dg-panel-breakpoints-span-pos-cor));
}
[data-stdg-panel-breakpoint-value] {
  flex: 1;
  display: grid;
  place-items: center;
  text-align: center;
}
[data-stdg-panel-breakpoint-value] > * {
  grid-area: 1/1;
}
[data-stdg-panel-breakpoint-value] [data-string-grid-list-delete] {
  visibility: hidden;
}
[data-stdg-panel-breakpoint-value]:hover [data-string-grid-list-delete] {
  visibility: visible;
}

[data-stdg-panel-breakpoint-marker] {
  align-self: stretch;
  position: relative;
  display: flex;
  justify-content: center;
  padding: var(--string-dg-panel-breakpoint-marker-padding);
  margin: var(--string-dg-panel-breakpoint-marker-margin);
  background-image: linear-gradient(0deg, var(--string-dg-color-black));
  background-repeat: no-repeat;
  background-size: var(--string-dg-panel-breakpoint-marker-width) 100%;
  background-position: center center;
}
[data-stdg-panel-breakpoint-marker]::before,
[data-stdg-panel-breakpoint-marker]::after {
  content: '';
  position: absolute;
  top: 100%;
  width: 100%;
  padding-bottom: 100%;
}
[data-stdg-panel-breakpoint-marker]::after {
  border-radius: 50%;
  background-color: var(--string-dg-color-black);
  transform-origin: 50% 0%;
  scale: 0.5;
}
[data-stdg-panel-breakpoint-marker] span {
  font-size: var(--string-dg-font-size-xs);
  color: var(--string-dg-color-grey-6);
  position: absolute;
  bottom: calc(100% + var(--string-dg-font-size-xs) / 2);
}
[data-stdg-panel-breakpoint-marker]:hover span {
  color: var(--string-dg-color-black);
}
[data-stdg-panel-breakpoint-marker][data-active='true']::after {
  scale: 1;
}
[data-stdg-panel-breakpoints] [data-stdg-panel-breakpoint-value]:first-child {
  border-radius: var(--string-dg-panel-button-radius);
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[data-stdg-panel-breakpoints] [data-stdg-panel-breakpoint-value]:last-child {
  border-radius: var(--string-dg-panel-button-radius);
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
[data-stdg-panel-breakpoint-value]:has(+ [data-active='true']),
[data-stdg-panel-breakpoint-marker][data-active='true'] + div {
  background-color: var(--string-dg-color-grey-3);
}

/* dock */
[data-stdg-dock] {
  position: fixed;
  z-index: 10035;
  bottom: 24px;
  left: 124px;

  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: var(--string-dg-color-cloud-white);
  padding: var(--string-dg-dock-padding);
  border: 1px solid var(--string-dg-color-middle-white);
  border-radius: var(--string-dg-dock-radius);
  box-shadow: var(--string-dg-dock-shadow);

  backdrop-filter: blur(4px);
}
[data-stdg-dock-list] {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  overflow: visible;
}
[data-stdg-dock-tools] {
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  overflow: visible;
  opacity: 1;
  transition:
    max-width 0.22s ease,
    opacity 0.16s ease;
}
[data-stdg-dock][data-collapsed="true"] [data-stdg-dock-tools] {
  overflow: hidden;
}
[data-stdg-dock-fps-separator] {
  display: block;
}
[data-stdg-dock] > [data-stdg-button] {
  align-self: center;
}
[data-string-defguides-doc-fps] {
  display: grid;
  place-items: center;
  aspect-ratio: 1/1;
  padding: var(--string-dg-button-icon-20-padding);
}
[data-string-defguides-doc-fps] span {
  grid-area: 1/1;
  width: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: default;
}
[data-stdg-horizontal-line] {
  align-self: stretch;
  display: block;
  width: 0px;
  margin: 0 4px;
  border-right: 1px solid var(--string-dg-color-hairline);
}

/* dock sub-badges */
[data-stdg-dock-slot] {
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
}
[data-stdg-dock-slot][data-has-sub-badges]::after {
  content: "";
  position: absolute;
  left: -4px;
  right: -4px;
  bottom: 100%;
  height: 8px;
  pointer-events: auto;
}
[data-stdg-dock-sub-badges] {
  position: fixed;
  display: flex;
  flex-direction: row;
  gap: 4px;
  white-space: nowrap;
  padding: var(--string-dg-badge-padding);
  background-color: var(--string-dg-color-cloud-white);
  border: 1px solid var(--string-dg-color-middle-white);
  border-radius: var(--string-dg-badge-radius);
  box-shadow: var(--string-dg-badge-shadow);
  backdrop-filter: blur(4px);
  opacity: 0;
  pointer-events: none;
  z-index: 10034;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  touch-action: manipulation;
  transform: translate(-50%, calc(100% + 16px));
  transition: transform .3s, opacity .3s;
}
[data-stdg-dock-sub-badge] {
  position: relative;
}
[data-stdg-dock-sub-badge][data-parent-active="false"] [data-stdg-icon-12],
[data-stdg-dock-sub-badge][data-parent-active="false"] [data-stdg-icon-16],
[data-stdg-dock-sub-badge][data-parent-active="false"] [data-stdg-icon-20] {
  color: var(--string-dg-color-grey-5);
}
[data-stdg-dock-sub-badge]::before {
  content: "";
  position: absolute;
  inset: -6px;
}
[data-stdg-dock-sub-badges][data-open="true"] {
  opacity: 1;
  transform: translate(-50%, 0);
  pointer-events: auto;
}

@media (max-width: 1024px), (pointer: coarse) {
  [data-stdg-dock] [data-stdg-button-hover] svg:last-child {
    transform: rotate(0deg);
  }

  [data-stdg-dock] [data-stdg-button-hover][data-collapsed='true'] svg:last-child {
    transform: rotate(180deg);
  }

  [data-stdg-dock] {
    top: 50%;
    bottom: auto;
    left: max(12px, env(safe-area-inset-left, 0px) + 12px);
    transform: translateY(-50%);
    max-height: calc(100vh - 24px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
    flex-direction: column;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
    touch-action: manipulation;
  }

  [data-stdg-dock-list] {
    flex-direction: column;
  }

  [data-stdg-dock-tools] {
    flex-direction: column;
    transition:
      max-height 0.22s ease,
      opacity 0.16s ease;
  }

  [data-stdg-dock][data-collapsed="true"] [data-stdg-dock-tools] {
    overflow: hidden;
  }

  [data-stdg-horizontal-line] {
    width: auto;
    height: 0px;
    margin: 4px 0;
    border-right: none;
    border-top: 1px solid var(--string-dg-color-hairline);
  }

  [data-stdg-dock-slot][data-has-sub-badges]::after {
    left: 100%;
    right: auto;
    top: -4px;
    bottom: -4px;
    width: 8px;
    height: auto;
  }

  [data-stdg-dock-sub-badges] {
    flex-direction: column;
    transform: translate(8px, -50%);
  }

  [data-stdg-dock-sub-badges][data-open="true"] {
    transform: translate(0, -50%);
  }

  /* compact: panel width shrinks to fit narrow viewports */
  [data-stdg-panel] {
    width: min(280px, calc(100vw - 32px));
    max-width: calc(100vw - 32px);
  }

  [data-stdg-badge][data-mobile-sheet="true"] > [data-stdg-panel] {
    right: auto;
    height: auto;
    overflow: hidden auto;
    overscroll-behavior: contain;
  }

  [data-stdg-badge][data-mobile-sheet="true"] > [data-stdg-panel] > [data-stdg-panel] {
    position: static;
    display: none;
    inset: auto;
    width: 100%;
    max-width: 100%;
    height: auto;
    overflow: hidden auto;
    overscroll-behavior: contain;
    box-shadow: none;
    transform: none;
  }

  [data-stdg-badge][data-mobile-sheet="true"] > [data-stdg-panel]:has(> [data-stdg-panel][data-open="true"]) > :not([data-stdg-panel]) {
    display: none;
  }

  [data-stdg-badge][data-mobile-sheet="true"] > [data-stdg-panel] > [data-stdg-panel][data-open="true"] {
    display: block;
  }

  /* panel detached to body as fixed element in mobile mode */
  [data-stdg-panel][data-mobile-sheet="true"] {
    z-index: 10045;
    overflow: hidden auto;
    overscroll-behavior: contain;
  }

  [data-stdg-panel][data-mobile-sheet="true"] > [data-stdg-panel] {
    position: static;
    display: none;
    inset: auto;
    width: 100%;
    max-width: 100%;
    height: auto;
    overflow: hidden auto;
    overscroll-behavior: contain;
    box-shadow: none;
    transform: none;
  }

  [data-stdg-panel][data-mobile-sheet="true"]:has(> [data-stdg-panel][data-open="true"]) > :not([data-stdg-panel]) {
    display: none;
  }

  [data-stdg-panel][data-mobile-sheet="true"] > [data-stdg-panel][data-open="true"] {
    display: block;
  }

  /* compact: progress floating panel */
  [data-stdg-progress] {
    bottom: max(16px, env(safe-area-inset-bottom, 0px) + 16px);
    max-height: calc(100vh - 32px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
  }
}

/* badge */
[data-stdg-badge] {
  position: absolute;
  z-index: 10030;
  top: 0;
  left: 0;
  width: auto;
  padding-bottom: auto;

  display: flex;
  pointer-events: auto;

  background-color: var(--string-dg-color-cloud-white);
  padding: var(--string-dg-badge-padding);
  border: 1px solid var(--string-dg-color-middle-white);
  border-radius: var(--string-dg-badge-radius);
  box-shadow: var(--string-dg-badge-shadow);
}

[data-dragging-active] [data-stdg-badge]:not([data-dragging]) {
  opacity: 0;
  pointer-events: none;
}

[data-stdg-badge][data-test-progress] {
  left: 62px;
}
[data-stdg-badge][data-test-layout] {
  position: fixed;
  top: 200px;
  left: auto;
  right: 100px;
}
[data-stdg-badge][data-visible="false"] {
  display: none;
}

[data-stdg-button]:has([data-stdg-badge-label]) {
  flex-direction: column;
  align-items: center;
}
[data-stdg-button]:has([data-stdg-badge-label]) svg {
  transform: translateY(-25%);
}
[data-stdg-button]:has([data-stdg-badge-label]) > :not([data-stdg-badge-label]) {
  grid-area: unset;
}
[data-stdg-badge-label] {
  grid-area: unset;
  font-size: var(--string-dg-font-size-xs);
  line-height: 0;
  text-align: center;
  color: var(--string-dg-color-black);
  pointer-events: none;
  user-select: none;
  // margin-bottom: -0.4em;
  white-space: nowrap;
  font-weight: var(--string-dg-font-bold);
  width: 0;
  display: flex;
  justify-content: center;
}

/* panel */
[data-stdg-panel] {
  position: absolute;

  width: 220px;
  background-color: var(--string-dg-color-white);
  padding: var(--string-dg-panel-padding);
  border-radius: var(--string-dg-panel-radius);
  box-shadow: var(--string-dg-panel-shadow);
}
[data-stdg-panel][data-open="false"] {
  opacity: 0;
  pointer-events: none;
  transform: translateY(4px);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
[data-stdg-panel][data-open="true"] {
  z-index: 10045;
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
  transition: opacity 0.15s ease, transform 0.15s ease;
}
[data-stdg-panel][data-test-panel-1] {
  top: 0px;
  right: calc(100% + 20px);
}
[data-stdg-panel][data-test-panel-2] {
  top: 0;
  right: calc(100% + 20px + 220px + 80px);
}
[data-stdg-panel][data-test-panel-3] {
  top: 0;
  right: calc(100% + 20px);
}

[data-stdg-panel][data-test-panel-4] {
  top: 0;
  right: calc(100% + 20px + 220px + 80px + 220px + 20px + 220px + 80px);
}
[data-stdg-panel][data-test-panel-5] {
  top: 0;
  right: calc(100% + 20px);
}
[data-stdg-panel][data-test-panel-6] {
  top: calc(400px);
  right: calc(100% + 20px);
}
[data-stdg-panel][data-test-panel-7] {
  top: calc(36px);
  right: calc(100% + 20px);
}

/* progress */
[data-stdg-progress] {
  position: fixed;
  z-index: 999;
  bottom: 62px;
  left: calc((100vw + env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px)) / 2);
  translate: -50% 0;

  width: min(
    440px,
    calc(100vw - 24px - env(safe-area-inset-left, 0px) - env(safe-area-inset-right, 0px))
  );
  max-height: calc(100vh - 86px - env(safe-area-inset-top, 0px) - env(safe-area-inset-bottom, 0px));
  overflow: hidden auto;
  overscroll-behavior: contain;
}

[data-stdg-panel-hr] {
  display: block;
  margin: var(--string-dg-panel-hr-margin);
  border-bottom: 1px solid var(--string-dg-color-grey-1);
}
/* header */
[data-stdg-panel-header] {
  display: grid;
  place-items: center;
  padding: var(--string-dg-panel-header-padding);
}
[data-stdg-panel-header] > * {
  grid-area: 1/1;
}
[data-stdg-button-left] {
  justify-self: start;
}
[data-stdg-button-right] {
  justify-self: end;
}
[data-stdg-panel-header] span {
  font-size: var(--string-dg-font-size-s);
  font-weight: var(--string-dg-font-bold);
}
[data-stdg-panel-header] nav {
  display: flex;
}

/* responsive */
[data-stdg-panel-responsive] {
  display: grid;
  place-items: center;
  padding: var(--string-dg-panel-responsive-margin);
}
[data-stdg-panel-responsive] > * {
  grid-area: 1/1;
}
[data-stdg-panel-list] {
  display: flex;
  flex-direction: row;
}

/* content */
[data-stdg-panel-content] {
  margin: var(--string-dg-panel-conent-margin);
}
[data-stdg-panel-content-50] {
  display: flex;
  flex-wrap: wrap;
}
[data-stdg-panel-content-50] > * {
  width: 50% !important;
}

/* list-item */

/* offsets */
[data-stdg-offsets-item] {
  position: absolute;
  z-index: 999;
  top: 600px;
  left: 260px;

  width: 400px;
  height: 400px;
  fill: none;
  overflow: visible;
}
[data-stdg-offsets-item] [data-stdg-offsets-item-border] {
  stroke-width: 1px;
  stroke: var(--string-dg-color-offset);
  stroke-dasharray: var(--string-dg-offsets-dasharray);
}
[data-stdg-offsets-item-offset] {
}
[data-stdg-offsets-item-offset-arrow-bg] {
  color: var(--string-dg-color-white);
}
[data-stdg-offsets-item-offset-arrow] {
  color: var(--string-dg-color-black);
}

`;function tl(){if(typeof document>"u")return null;let t="string-devtools-shared-styles",e=document.getElementById(t);if(e instanceof HTMLStyleElement)return e;let i=document.createElement("style");return i.id=t,i.textContent=ta,document.head.appendChild(i),i}function td(t="u">typeof window?window.innerWidth:1024){let e=!!("u">typeof window&&"function"==typeof window.matchMedia)&&(window.matchMedia("(pointer: coarse)").matches||window.matchMedia("(any-pointer: coarse)").matches);return{coarsePointer:e,compact:t<=1024||e}}var tc="";function th(t){let e;tc=(e=(t??"").trim())?encodeURIComponent(e):""}function tu(t){return tc?`${t}::${tc}`:t}function tp(t){if(!t)return"";let e=[];return t.ctrlKey&&e.push("Ctrl"),t.altKey&&e.push("Alt"),t.shiftKey&&e.push("Shift"),t.metaKey&&e.push("Meta"),e.push(1===t.key.length?t.key.toUpperCase():t.key),e.join("+")}var tg=class{constructor(){this.entries=new Map,this.collapsed=!1,this.suppressPersist=!1,tl(),this.cleanupExistingDockArtifacts(),this.preferences=this.loadPreferences(),this.onResizeBind=()=>{window.requestAnimationFrame(()=>this.handleViewportChange())},this.onKeydownBind=t=>{let e=t.target;e&&(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement||e.isContentEditable)||!t.shiftKey||t.ctrlKey||t.altKey||t.metaKey||"KeyS"!==t.code||(t.preventDefault(),this.setCollapsed(!this.collapsed))},window.addEventListener("keydown",this.onKeydownBind),window.addEventListener("resize",this.onResizeBind),this.root=document.createElement("div"),this.root.setAttribute("data-stdg",""),this.root.setAttribute("data-stdg-dock",""),this.root.setAttribute("data-collapsed",this.preferences.collapsed?"true":"false"),this.mainButton=this.createMainButton(),this.itemsWrap=document.createElement("div"),this.itemsWrap.setAttribute("data-stdg-dock-list",""),this.toolsWrap=document.createElement("div"),this.toolsWrap.setAttribute("data-stdg-dock-tools",""),this.fpsSeparator=this.createSeparator(),this.fpsSeparator.setAttribute("data-stdg-dock-fps-separator",""),this.fpsElement=document.createElement("div"),this.fpsElement.setAttribute("data-string-defguides-doc-fps",""),this.fpsElement.title="Current FPS";let t=document.createElement("span");t.textContent="0",this.fpsElement.appendChild(t),this.root.appendChild(this.mainButton),this.itemsWrap.appendChild(this.toolsWrap),this.itemsWrap.appendChild(this.fpsSeparator),this.itemsWrap.appendChild(this.fpsElement),this.root.appendChild(this.itemsWrap),(document.body??document.documentElement).appendChild(this.root),this.setCollapsed(this.preferences.collapsed,!1)}add(t){if(this.entries.has(t.id))return;this.applyStoredActiveState(t);let e=document.createElement("button");e.type="button",e.setAttribute("data-stdg",""),e.setAttribute("data-stdg-button",""),e.setAttribute("data-stdg-button-icon-20",""),e.setAttribute("data-devguides-id",t.id);let i=tp(t.hotkey),s=i?`${t.label} (${i})`:t.label;e.setAttribute("aria-label",s),e.innerHTML=tn(20,t.icon),e.title=s,e.addEventListener("click",()=>{let i=!t.getState().active;if(t.setActive(i),!t.subscribe){let i=t.getState();this.renderButton(e,t.label,t.hotkey,i),this.persistActiveState(t.id,i.active)}});let r=document.createElement("div");r.setAttribute("data-stdg",""),r.setAttribute("data-stdg-dock-slot",""),r.setAttribute("data-devguides-slot",t.id),r.appendChild(e);let n=null;t.subBadges&&t.subBadges.length>0&&(r.setAttribute("data-has-sub-badges",""),n=this.createSubBadgeGroup(t));let o=[];n&&o.push(...this.attachSubBadges(r,n));let a=t.subscribe?t.subscribe(i=>{this.renderButton(e,t.label,t.hotkey,i),this.syncSubBadgeState(r,n,i.active),this.persistActiveState(t.id,i.active)}):null;this.entries.set(t.id,{definition:t,button:e,slot:r,subBadges:n,unsubscribe:a,cleanup:o}),this.toolsWrap.appendChild(r),this.sortButtons();let l=t.getState();this.renderButton(e,t.label,t.hotkey,l),this.syncSubBadgeState(r,n,l.active),this.persistActiveState(t.id,l.active)}attachSubBadges(t,e){let i=[];(document.body??document.documentElement).appendChild(e);let s=!1,r=null,n=null,o=0,a=0,l=!1,d=i=>{s!==i&&(s=i,e.setAttribute("data-open",i?"true":"false"),i&&this.positionSubBadges(t,e))},c=()=>td(window.innerWidth).compact,h=()=>{null!==r&&(window.clearTimeout(r),r=null),n=null},u=()=>{h(),l&&window.setTimeout(()=>{l=!1},0)},p=()=>{window.setTimeout(()=>{t.matches(":hover")||e.matches(":hover")||d(!1)},60)},g=()=>{c()||d(!0)};t.addEventListener("pointerenter",g),i.push(()=>t.removeEventListener("pointerenter",g));let m=()=>{c()||p()};t.addEventListener("pointerleave",m),i.push(()=>t.removeEventListener("pointerleave",m));let v=()=>{c()||d(!0)};e.addEventListener("pointerenter",v),i.push(()=>e.removeEventListener("pointerenter",v));let b=()=>{c()||p()};e.addEventListener("pointerleave",b),i.push(()=>e.removeEventListener("pointerleave",b));let f=()=>d(!1);e.addEventListener("string-devtools-sub-badge-action",f),i.push(()=>e.removeEventListener("string-devtools-sub-badge-action",f));let y=t=>{c()&&(t.target instanceof HTMLElement&&t.target.closest("[data-stdg-dock-sub-badge]")||(h(),n=t.pointerId,o=t.clientX,a=t.clientY,r=window.setTimeout(()=>{r=null,l=!0,d(!0)},600)))};t.addEventListener("pointerdown",y),i.push(()=>t.removeEventListener("pointerdown",y));let w=t=>{if(!c()||null===r||t.pointerId!==n)return;let e=Math.abs(t.clientX-o),i=Math.abs(t.clientY-a);(e>12||i>12)&&h()};t.addEventListener("pointermove",w),i.push(()=>t.removeEventListener("pointermove",w)),t.addEventListener("pointerup",u),i.push(()=>t.removeEventListener("pointerup",u)),t.addEventListener("pointercancel",u),i.push(()=>t.removeEventListener("pointercancel",u));let L=()=>{c()&&h()};t.addEventListener("pointerleave",L),i.push(()=>t.removeEventListener("pointerleave",L));let C=t=>{c()&&l&&t.preventDefault()};t.addEventListener("contextmenu",C),i.push(()=>t.removeEventListener("contextmenu",C));let x=t=>{c()&&t.preventDefault()};t.addEventListener("selectstart",x),i.push(()=>t.removeEventListener("selectstart",x));let M=t=>{c()&&l&&(l=!1,t.preventDefault(),t.stopImmediatePropagation())};t.addEventListener("click",M,!0),i.push(()=>t.removeEventListener("click",M,!0)),e.addEventListener("pointerdown",u),i.push(()=>e.removeEventListener("pointerdown",u)),e.addEventListener("pointercancel",u),i.push(()=>e.removeEventListener("pointercancel",u));let S=t=>{c()&&t.preventDefault()};e.addEventListener("contextmenu",S),i.push(()=>e.removeEventListener("contextmenu",S));let k=t=>{c()&&t.preventDefault()};e.addEventListener("selectstart",k),i.push(()=>e.removeEventListener("selectstart",k));let E=()=>{l=!1};e.addEventListener("click",E),i.push(()=>e.removeEventListener("click",E));let A=i=>{if(!s)return;let r=i.target;r instanceof Node&&(t.contains(r)||e.contains(r)||d(!1))};document.addEventListener("pointerdown",A),i.push(()=>document.removeEventListener("pointerdown",A));let O=new MutationObserver(()=>{e.querySelector('[data-active="true"]')||p()});O.observe(e,{subtree:!0,attributes:!0,attributeFilter:["data-active"]}),i.push(()=>O.disconnect());let P=()=>{s&&this.positionSubBadges(t,e)};return window.addEventListener("resize",P),window.addEventListener("scroll",P,!0),i.push(()=>window.removeEventListener("resize",P)),i.push(()=>window.removeEventListener("scroll",P,!0)),e.setAttribute("data-open","false"),i.push(()=>e.remove()),i}positionSubBadges(t,e){let i=t.getBoundingClientRect();td(window.innerWidth).compact?(e.style.left=`${Math.round(i.right+8)}px`,e.style.top=`${Math.round(i.top+i.height/2)}px`,e.style.bottom=""):(e.style.left=`${Math.round(i.left+i.width/2)}px`,e.style.top="",e.style.bottom=`${Math.round(window.innerHeight-i.top+8)}px`)}createSubBadgeGroup(t){let e=document.createElement("div");for(let i of(e.setAttribute("data-stdg",""),e.setAttribute("data-stdg-dock-sub-badges",""),e.setAttribute("data-parent-active","false"),t.subBadges??[])){let s={"data-stdg":"","data-stdg-dock-sub-badge":"","data-sub-badge-id":i.id,"data-active":"false","data-parent-active":"false"};if(i.selectorAttribute&&(s[i.selectorAttribute]=""),i.attributes)for(let[t,e]of Object.entries(i.attributes))null==e||!1===e||(s[t]=!0===e?"":String(e));let r=to({icon:i.icon,size:16,label:i.label,modifiers:["toggle"],attrs:s});r.addEventListener("pointerdown",t=>{t.stopPropagation()}),r.addEventListener("click",e=>{e.stopPropagation(),t.getState().active||t.setActive(!0),i.onClick(r),r.setAttribute("data-active","false"),r.dispatchEvent(new CustomEvent("string-devtools-sub-badge-action",{bubbles:!0}))}),e.appendChild(r)}return e}remove(t){let e=this.entries.get(t);if(e){for(let t of(e.unsubscribe?.(),e.cleanup))t();e.slot.remove(),this.entries.delete(t)}}destroy(){for(let t of(window.removeEventListener("keydown",this.onKeydownBind),window.removeEventListener("resize",this.onResizeBind),this.entries.values())){for(let e of(t.unsubscribe?.(),t.cleanup))e();t.slot.remove()}this.entries.clear(),this.root.remove()}cleanupExistingDockArtifacts(){document.querySelectorAll("[data-stdg-dock]").forEach(t=>t.remove()),document.querySelectorAll("[data-stdg-dock-sub-badges]").forEach(t=>t.remove())}setFPS(t){let e=this.fpsElement.querySelector("span");e&&(e.textContent=String(Math.max(0,Math.round(t))))}sortButtons(){let t,e=Array.from(this.entries.values()).sort((t,e)=>{let i=t.definition.order??0,s=e.definition.order??0;return i!==s?i-s:t.definition.label.localeCompare(e.definition.label)});for(let i of(this.toolsWrap.innerHTML="",this.toolsWrap.appendChild(this.createSeparator()),e)){let e=i.definition.group;void 0!==t&&e!==t&&this.toolsWrap.appendChild(this.createSeparator()),t=e,this.toolsWrap.appendChild(i.slot)}this.fpsSeparator.style.display=e.length>0?"block":"none",this.syncCollapsedLayout()}createSeparator(){let t=document.createElement("span");return t.setAttribute("data-stdg-horizontal-line",""),t}createMainButton(){let t=document.createElement("button");return t.type="button",t.setAttribute("data-stdg",""),t.setAttribute("data-stdg-button",""),t.setAttribute("data-stdg-button-hover",""),t.setAttribute("data-stdg-button-icon-20",""),t.setAttribute("data-collapsed",this.preferences.collapsed?"true":"false"),t.setAttribute("aria-label","Toggle Dev Guides"),t.innerHTML=`
      ${tn(20,"logo")}
      ${tn(12,"chevrone-up")}
    `,t.addEventListener("click",()=>{this.setCollapsed(!this.collapsed)}),t}setCollapsed(t,e=!0){if(this.collapsed=t,this.root.setAttribute("data-collapsed",t?"true":"false"),this.mainButton.setAttribute("data-collapsed",t?"true":"false"),this.mainButton.setAttribute("aria-label",t?"Expand developer tools":"Collapse developer tools"),t){for(let t of(this.suppressPersist=!0,this.entries.values()))t.definition.getState().active&&t.definition.setActive(!1);this.suppressPersist=!1}else{for(let t of(this.suppressPersist=!0,this.entries.values()))!0===this.preferences.active[t.definition.id]&&t.definition.setActive(!0);this.suppressPersist=!1}e&&(this.preferences.collapsed=t,this.savePreferences()),this.syncCollapsedLayout()}syncCollapsedLayout(){let t=td(window.innerWidth).compact,e=t?this.toolsWrap.scrollHeight:this.toolsWrap.scrollWidth;this.toolsWrap.style.maxHeight=t?this.collapsed?"0px":`${e}px`:"",this.toolsWrap.style.maxWidth=t?"":this.collapsed?"0px":`${e}px`,this.toolsWrap.style.opacity=this.collapsed?"0":"1",this.toolsWrap.style.pointerEvents=this.collapsed?"none":"auto"}handleViewportChange(){for(let t of(this.syncCollapsedLayout(),this.entries.values()))t.subBadges&&"true"===t.subBadges.getAttribute("data-open")&&this.positionSubBadges(t.slot,t.subBadges)}renderButton(t,e,i,s){let r=tp(i),n=r?`${e} (${r})`:e;t.setAttribute("data-active",s.active?"true":"false"),t.setAttribute("aria-label",`${n}: ${s.active?"On":"Off"}`),t.title=`${n}: ${s.active?"On":"Off"}`}syncSubBadgeState(t,e,i){let s=i?"true":"false";if(t.setAttribute("data-active",s),e)for(let t of(e.setAttribute("data-parent-active",s),e.querySelectorAll("[data-stdg-dock-sub-badge]")))t.setAttribute("data-parent-active",s),t.setAttribute("aria-disabled",i?"false":"true")}applyStoredActiveState(t){let e=this.preferences.active[t.id];if("boolean"!=typeof e)return;let i=!this.collapsed&&e;i!==t.getState().active&&t.setActive(i)}persistActiveState(t,e){this.suppressPersist||this.collapsed||(this.preferences.active[t]=e,this.savePreferences())}loadPreferences(){try{let t=localStorage.getItem(this.dockStorageKey);if(!t)return{collapsed:!1,active:{}};let e=JSON.parse(t);return{collapsed:!0===e.collapsed,active:e.active&&"object"==typeof e.active?e.active:{}}}catch{return{collapsed:!1,active:{}}}}savePreferences(){try{localStorage.setItem(this.dockStorageKey,JSON.stringify(this.preferences))}catch{}}get dockStorageKey(){return tu("string-devtools:dock")}},tm=class{constructor(){this.definitions=new Map,this.dock=null}register(t){!t||this.definitions.has(t.id)||(this.definitions.set(t.id,t),this.dock||(this.dock=new tg),this.dock.add(t))}setFPS(t){this.dock?.setFPS(t)}destroy(){this.definitions.clear(),this.dock?.destroy(),this.dock=null}},tv=class{constructor(t,e){this.id=t,this.zIndex=e,this.screenRoot=null,this.world=null,this.screen=null,this.worldHost=null,this.hostPositionWasPatched=!1,this.hostPositionInlineValue=null}ensure(t){if(this.screenRoot?.isConnected)return t&&this.attachWorldToHost(t),this.screenRoot;let e=document.querySelector(`[data-string-dev-viewport-layer="${this.id}"]`);if(e)return this.screenRoot=e,this.screen=e.querySelector(`[data-string-dev-viewport-screen="${this.id}"]`),t&&this.attachWorldToHost(t),e;let i=document.createElement("div");i.setAttribute("data-string-dev-viewport-layer",this.id),i.setAttribute("data-string-devtools-theme",""),i.style.position="fixed",i.style.inset="0",i.style.zIndex=String(this.zIndex),i.style.pointerEvents="none",i.style.overflow="hidden";let s=document.createElement("div");return s.setAttribute("data-string-dev-viewport-screen",this.id),s.style.position="absolute",s.style.inset="0",s.style.pointerEvents="none",s.style.overflow="hidden",i.appendChild(s),(document.body??document.documentElement).appendChild(i),this.screenRoot=i,this.screen=s,this.attachWorldToHost(t??document.body??document.documentElement),i}getElement(){return this.screenRoot?.isConnected?this.screenRoot:null}getWorldElement(t){return this.ensure(t),this.world}getScreenElement(){return this.ensure(),this.screen}destroy(){this.restoreHostPosition(),this.screenRoot?.remove(),this.screenRoot=null,this.world?.remove(),this.world=null,this.screen=null,this.worldHost=null}attachWorldToHost(t){if(!(this.worldHost===t&&this.world?.isConnected)){if(this.restoreHostPosition(),this.worldHost=t,!this.world){let t=document.createElement("div");t.setAttribute("data-string-dev-viewport-world",this.id),t.setAttribute("data-string-devtools-theme",""),t.style.position="absolute",t.style.top="0",t.style.left="0",t.style.width="1px",t.style.height="1px",t.style.pointerEvents="none",t.style.overflow="visible",t.style.zIndex=String(this.zIndex),this.world=t}t!==document.body&&t!==document.documentElement&&"static"===window.getComputedStyle(t).position&&(this.hostPositionWasPatched=!0,this.hostPositionInlineValue=t.style.position||null,t.style.position="relative"),t.appendChild(this.world)}}restoreHostPosition(){this.world&&this.world.remove(),this.worldHost&&this.hostPositionWasPatched&&(null==this.hostPositionInlineValue||""===this.hostPositionInlineValue?this.worldHost.style.removeProperty("position"):this.worldHost.style.position=this.hostPositionInlineValue),this.hostPositionWasPatched=!1,this.hostPositionInlineValue=null}},tb=class t{constructor(){this.layers=new Map}static getInstance(){return this.instance||(this.instance=new t),this.instance}acquire(t,e){let i=this.layers.get(t);if(i){if(i.zIndex!==e)throw Error(`Shared devtools layer "${t}" already exists with z-index ${i.zIndex}, requested ${e}.`);return i.refs+=1,i.layer}let s=new tv(t,e);return this.layers.set(t,{layer:s,refs:1,zIndex:e}),s}release(t){let e=this.layers.get(t);e&&(e.refs-=1,e.refs>0||(e.layer.destroy(),this.layers.delete(t)))}};tb.instance=null;var tf=class extends h{constructor(t){super(t),this.overlayRegistry=tb.getInstance(),this.acquiredViewportLayers=new Map,this.devtoolListeners=new Set,this.hotkeyHandler=null,this.devtoolConfig=null,this._type=2,tl();let e=this.constructor.devtool;e&&(this.configureDevtool(e),this.bindDevtoolHotkey(e.hotkey));let i=e?.styles,s=("function"==typeof i?i():i)??this.getStyles();s&&this.ensureStyle(`${this.getStyleScopeId(s)}-styles`,s)}get respectSelfDisable(){return!1}get connectsConfig(){return this.constructor.devtool?.connects}canConnect(t){let e=this.connectsConfig;return e?!!(!0===e.global||t.keys.includes("dev-inspect")||e.keys?.some(e=>t.keys.includes(e))||e.attributes?.some(e=>t.htmlElement.hasAttribute(e))):super.canConnect(t)}getStyleScopeId(t){let e=this.htmlKey||this.constructor.devtool?.connects?.keys?.[0];if(e)return e;let i=0;for(let e=0;e<t.length;e+=1)i=31*i+t.charCodeAt(e)>>>0;return`string-dev-${i.toString(16)}`}getStyles(){return null}getDevtoolDefinition(){if(!this.devtoolConfig)return null;let t=this.devtoolConfig,e=this.getDevtoolSubBadges();return{id:t.id,label:t.label,icon:t.icon,order:t.order,group:t.group,hotkey:t.hotkey,subBadges:e.length>0?e:void 0,getState:()=>({active:this.getDevtoolActiveState()}),setActive:t=>{this.setDevtoolActiveState(t)},subscribe:t=>(this.devtoolListeners.add(t),t({active:this.getDevtoolActiveState()}),()=>{this.devtoolListeners.delete(t)})}}getDevtoolSubBadges(){return[]}configureDevtool(t){this.devtoolConfig=t}bindDevtoolHotkey(t){typeof window>"u"||!t||(this.hotkeyHandler=e=>{let i=e.target;i&&(i instanceof HTMLInputElement||i instanceof HTMLTextAreaElement||i instanceof HTMLSelectElement||i.isContentEditable)||e.key.toLowerCase()!==t.key.toLowerCase()||e.shiftKey!==(t.shiftKey??!1)||e.ctrlKey!==(t.ctrlKey??!1)||e.altKey!==(t.altKey??!1)||e.metaKey!==(t.metaKey??!1)||(e.preventDefault(),this.setDevtoolActiveState(!this.getDevtoolActiveState()))},window.addEventListener("keydown",this.hotkeyHandler))}emitDevtoolState(t=this.getDevtoolActiveState()){let e={active:t};for(let t of this.devtoolListeners)t(e)}acquireViewportLayer(t,e){let i=this.acquiredViewportLayers.get(t);if(i)return i;let s=this.overlayRegistry.acquire(t,e);return this.acquiredViewportLayers.set(t,s),s}releaseViewportLayer(t){this.acquiredViewportLayers.has(t)&&(this.overlayRegistry.release(t),this.acquiredViewportLayers.delete(t))}ensureStyle(t,e){let i=document.getElementById(t);if(i instanceof HTMLStyleElement)return i;let s=document.createElement("style");return s.id=t,s.textContent=e,document.head.appendChild(s),s}getWorldHost(){return this.data.scroll.container??document.body??document.documentElement}getDevtoolActiveState(){return!1}setDevtoolActiveState(t){}destroy(){for(let t of(this.hotkeyHandler&&(window.removeEventListener("keydown",this.hotkeyHandler),this.hotkeyHandler=null),this.devtoolListeners.clear(),this.acquiredViewportLayers.keys()))this.overlayRegistry.release(t);this.acquiredViewportLayers.clear(),super.destroy()}};tf.devtool=null;var ty=["S","M","L","XL"],tw=0;function tL(){return`grid-${Date.now()}-${tw++}`}function tC(t){return Number.isFinite(t)?Math.max(0,Math.round(t)):0}var tx=class{constructor(t,e,i,s){this.root=null,this.key=t,this.label=e,this.value=i,this.onChange=s}setDisabled(t){this.root&&this.root.setAttribute("data-disabled",t?"true":"false")}getValue(){return this.value}destroy(){this.root?.remove(),this.root=null}emit(t){this.value=t,this.onChange(this.key,t)}createLabel(){let t=document.createElement("label");return t.textContent=this.label,t.setAttribute("data-stdg-label",""),t}createRow(){let t=document.createElement("div");return t.setAttribute("data-stdg-panel-field",""),t}},tM=class t extends tx{constructor(t,e,i,s,r=0,n=100,o=1,a=1,l,d,c,h){super(t,e,i,s),this.valueInput=null,this.unitSelect=null,this.stepperButtons=[],this.min=r,this.max=n,this.step=o,this.displayMultiplier=a,this.displayStep=l,this.suffix=d,this.units=c,this.currentUnit=h}build(){let t=this.createRow();return t.appendChild(this.createLabel()),t.appendChild(this.createControls()),this.root=t,t}setValue(t){this.value=t,this.valueInput&&(this.valueInput.value=this.formatValue(t))}setDisabled(t){for(let e of(super.setDisabled(t),this.valueInput&&(this.valueInput.disabled=t),this.unitSelect&&(this.unitSelect.disabled=t),this.stepperButtons))e.disabled=t}createControls(){let t=document.createElement("div");t.setAttribute("data-stdg-field-input","");let e=document.createElement("div");if(e.setAttribute("data-stdg-field-value",""),e.appendChild(this.createInput()),this.suffix){let t=document.createElement("span");t.setAttribute("data-stdg-field-suffix",""),t.textContent=this.suffix,e.appendChild(t)}if(t.appendChild(e),this.units&&this.units.length>0){let e=document.createElement("select");for(let t of(e.setAttribute("data-stdg-select",""),this.units)){let i=document.createElement("option");i.value=t.value,i.textContent=t.label,e.appendChild(i)}e.value=this.currentUnit||this.units[0].value,e.addEventListener("change",()=>{this.currentUnit=e.value,this.valueInput&&(this.valueInput.value=this.formatValue(this.value)),this.onChange(this.key+"Unit",e.value)}),this.unitSelect=e,t.appendChild(e)}let i=document.createElement("div");return i.setAttribute("data-stdg-stepper",""),i.appendChild(this.createStepperButton("up",1)),i.appendChild(this.createStepperButton("down",-1)),t.appendChild(i),t}createInput(){let t=document.createElement("input");return t.type="text",t.inputMode="text",t.setAttribute("enterkeyhint","done"),t.autocomplete="off",t.spellcheck=!1,t.value=this.formatValue(this.value),t.setAttribute("data-stdg-input",""),t.addEventListener("focus",()=>{t.select()}),t.addEventListener("blur",()=>{this.commitInputValue(t)}),t.addEventListener("keydown",e=>{"Enter"===e.key?t.blur():"Escape"===e.key?(t.value=this.formatValue(this.value),t.blur()):("ArrowUp"===e.key||"ArrowDown"===e.key)&&(e.preventDefault(),this.applyDelta("ArrowUp"===e.key?1:-1,e,t))}),t.addEventListener("wheel",e=>{document.activeElement===t&&(e.preventDefault(),this.applyDelta(e.deltaY<0?1:-1,e,t))}),t.addEventListener("mousedown",e=>{1===e.button&&this.startMiddleDrag(e,t)}),t.addEventListener("auxclick",t=>{1===t.button&&t.preventDefault()}),this.valueInput=t,t}createStepperButton(t,e){let i=document.createElement("button");i.type="button",i.setAttribute("data-stdg-button",""),i.setAttribute("data-stdg-button-icon-12",""),i.setAttribute("data-direction",t),i.innerHTML=tn(12,"up"===t?"chevrone-up":"chevrone-down");let s=0,r=0,n=!1,o=()=>{window.clearTimeout(s),window.clearInterval(r),document.removeEventListener("pointerup",o),document.removeEventListener("pointercancel",o)};return i.addEventListener("pointerdown",t=>{0===t.button&&(s=window.setTimeout(()=>{n=!0,this.valueInput&&(this.applyDelta(e,void 0,this.valueInput),r=window.setInterval(()=>{this.valueInput&&this.applyDelta(e,void 0,this.valueInput)},60))},320),document.addEventListener("pointerup",o),document.addEventListener("pointercancel",o))}),i.addEventListener("click",t=>{if(n){n=!1,t.preventDefault();return}this.valueInput&&(this.applyDelta(e,void 0,this.valueInput),this.valueInput.focus(),this.valueInput.select())}),this.stepperButtons.push(i),i}startMiddleDrag(t,e){t.preventDefault();let i=t.clientX,s=0,r=document.body.style.cursor,n=document.body.style.userSelect;document.body.style.cursor="ew-resize",document.body.style.userSelect="none";let o=()=>{document.removeEventListener("mousemove",a),document.removeEventListener("mouseup",o),document.body.style.cursor=r,document.body.style.userSelect=n},a=t=>{let r=t.clientX-i;for(i=t.clientX,s+=r;Math.abs(s)>=6;){let i=s>0?1:-1;this.applyDelta(i,t,e),s-=6*i}};e.focus(),e.select(),document.addEventListener("mousemove",a),document.addEventListener("mouseup",o)}commitInputValue(t){let e=parseFloat(t.value.replace(",","."));if(isNaN(e)){t.value=this.formatValue(this.value);return}let i=this.normalizeDisplayValue(e);t.value=this.formatValue(i),this.emit(i)}applyDelta(t,e,i){let s=e?.shiftKey?10:e?.altKey?.1:1,r=this.modelToDisplay(this.value)+t*this.getDisplayStep()*s,n=this.normalizeDisplayValue(r);i.value=this.formatValue(n),this.emit(n)}normalizeValue(e){let i=Math.min(this.max,Math.max(this.min,e));if(t.DECIMAL_UNITS.has(this.currentUnit??""))return Number(i.toFixed(2));let s=Math.round(i/this.step)*this.step,r=this.getPrecision(this.step);return Number(s.toFixed(r))}normalizeDisplayValue(e){let i=this.modelToDisplay(this.min),s=Math.min(this.modelToDisplay(this.max),Math.max(i,e)),r=this.getDisplayPrecision();if(t.DECIMAL_UNITS.has(this.currentUnit??"")){let t=Number(s.toFixed(r));return this.normalizeValue(this.displayToModel(t))}let n=this.getDisplayStep(),o=Number((Math.round(s/n)*n).toFixed(r));return this.normalizeValue(this.displayToModel(o))}getPrecision(t){return String(t).split(".")[1]?.length??0}formatValue(t){let e=this.modelToDisplay(t),i=this.getDisplayPrecision();return i>0?e.toFixed(i):String(e)}modelToDisplay(t){let e=this.getDisplayPrecision();return Number((t*this.displayMultiplier).toFixed(e))}displayToModel(t){return t/this.displayMultiplier}getDisplayStep(){return this.displayStep??this.step*this.displayMultiplier}getDisplayPrecision(){if(t.DECIMAL_UNITS.has(this.currentUnit??""))return 2;let e=this.getDisplayStep();return e<1?Math.max(2,this.getPrecision(e)):0}};tM.DECIMAL_UNITS=new Set(["rem","em"]);var tS=class{static serialize(t,e){return{v:this.VERSION,source:"StringDevLayout",selectedLayout:e,layouts:t.map(t=>({id:t.id,label:t.label,minWidth:t.minWidth,grids:t.instances.map(t=>({id:t.id,type:t.type,visible:t.visible,...void 0!==t.name?{name:t.name}:{},settings:{...t.settings}}))}))}}static deserialize(t,e){if(!t||"object"!=typeof t)return null;let i=t.v,s=t.source;if("StringDevLayout"!==s&&"StringGrid"!==s||1!==i&&2!==i||!Array.isArray(t.layouts))return null;let r=t.layouts.filter(t=>!!t&&"object"==typeof t&&"string"==typeof t.id).map((t,i)=>({id:t.id,label:ty.includes(t.label)?t.label:"S",minWidth:this.resolveImportedMinWidth(t.minWidth,i),instances:(Array.isArray(t.grids)?t.grids:[]).filter(t=>!!t&&"object"==typeof t&&"string"==typeof t.type&&e.has(t.type)).map(t=>{let i=t.type,s=e.get(i);return{id:"string"==typeof t.id?t.id:tL(),type:i,visible:!1!==t.visible,..."string"==typeof t.name&&t.name?{name:t.name}:{},settings:{...s.getDefaults(),...t.settings&&"object"==typeof t.settings&&!Array.isArray(t.settings)?t.settings:{}}}})}));if(0===r.length)return null;r.sort((t,e)=>e.minWidth-t.minWidth);let n="string"==typeof t.selectedLayout?t.selectedLayout:"string"==typeof t.activeLayout?t.activeLayout:r[0].id,o=r.some(t=>t.id===n)?n:r[0].id;return{layouts:r,selectedLayoutId:o}}static toFile(t,e){let i=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),s=URL.createObjectURL(i),r=document.createElement("a");r.href=s,r.download=t,r.click(),URL.revokeObjectURL(s)}static fromFile(){return new Promise((t,e)=>{let i=document.createElement("input");i.type="file",i.accept=".json,application/json";let s=()=>i.remove();i.addEventListener("change",()=>{let r=i.files?.[0];if(!r){s(),e(Error("No file selected"));return}let n=new FileReader;n.onload=()=>{s();try{t(JSON.parse(n.result))}catch{e(Error("Invalid JSON"))}},n.onerror=()=>{s(),e(Error("File read error"))},n.readAsText(r)}),i.addEventListener("cancel",()=>{s(),e(Error("Cancelled"))}),document.body.appendChild(i),i.click()})}static resolveImportedMinWidth(t,e){return"number"==typeof t&&Number.isFinite(t)?tC(t):[1280,1024,768,0][e]??Math.max(0,1280-256*e)}};tS.VERSION=2;var tk="http://www.w3.org/2000/svg",tE=class{clear(t,e){let i=t.querySelector(`[data-grid-id="${e}"]`);i&&i.remove()}getGroup(t,e){let i=t.querySelector(`[data-grid-id="${e}"]`);return i||((i=document.createElementNS(tk,"g")).setAttribute("data-grid-id",e),t.appendChild(i)),i}createLine(t,e,i,s,r,n,o=1){let a=document.createElementNS(tk,"line");return a.setAttribute("data-string-grid-shape","line"),a.setAttribute("x1",String(t)),a.setAttribute("y1",String(e)),a.setAttribute("x2",String(i)),a.setAttribute("y2",String(s)),a.setAttribute("stroke",r),a.setAttribute("stroke-opacity",String(n)),a.setAttribute("stroke-width",String(o)),a}createRect(t,e,i,s,r,n){let o=document.createElementNS(tk,"rect");return o.setAttribute("data-string-grid-shape","rect"),o.setAttribute("x",String(t)),o.setAttribute("y",String(e)),o.setAttribute("width",String(i)),o.setAttribute("height",String(s)),o.setAttribute("fill",r),o.setAttribute("fill-opacity",String(n)),o}resolveUnit(t,e,i,s){let r=parseFloat(getComputedStyle(document.documentElement).fontSize)||16,n=s instanceof Element&&parseFloat(getComputedStyle(s).fontSize)||r;switch(e){case"%":return t/100*i;case"vw":return t/100*window.innerWidth;case"vh":return t/100*window.innerHeight;case"em":return t*n;case"rem":return t*r;default:return t}}createPath(t,e,i,s=1,r="none"){let n=document.createElementNS(tk,"path");return n.setAttribute("data-string-grid-shape","path"),n.setAttribute("d",t),n.setAttribute("stroke",e),n.setAttribute("stroke-opacity",String(i)),n.setAttribute("stroke-width",String(s)),n.setAttribute("fill",r),n}},tA=class t extends tE{constructor(){super(...arguments),this.type="columns",this.label="Columns",this.icon='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="3" width="2" height="10" fill="currentColor"/><rect x="3" y="3" width="2" height="10" fill="currentColor"/><rect x="11" y="3" width="2" height="10" fill="currentColor"/></svg>'}getDefaults(){return{count:12,gap:20,gapUnit:"px",margin:0,marginUnit:"px",color:"#4a90e2",opacity:.15,showLines:!1}}getUISchema(){return[{type:"number",key:"count",label:"Columns",default:12,min:1,max:48,step:1},{type:"range",key:"gap",label:"Gap",default:20,min:0,max:100,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px"},{type:"range",key:"margin",label:"Margin",default:0,min:0,max:100,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px"},{type:"divider"},{type:"color",key:"color",label:"Color",default:"#4a90e2"},{type:"range",key:"opacity",label:"Opacity",default:.15,min:0,max:1,step:.01,displayMultiplier:100,displayStep:10},{type:"toggle",key:"showLines",label:"Lines only",default:!1}]}render(t,e,i,s){let r=this.getGroup(t,s.__instanceId),{count:n,gap:o,gapUnit:a,margin:l,marginUnit:d,color:c,opacity:h,showLines:u}=s,p=t.parentElement,g=this.resolveUnit(o,a||"px",e,p),m=this.resolveUnit(l,d||"px",e,p),v=(e-2*m-(n-1)*g)/n;if(!(v<=0))for(let t=0;t<n;t++){let e=m+t*(v+g);u?(r.appendChild(this.createLine(e,0,e,i,c,h)),r.appendChild(this.createLine(e+v,0,e+v,i,c,h))):r.appendChild(this.createRect(e,0,v,i,c,h))}}};tA.UNIT_OPTIONS=[{value:"px",label:"px"},{value:"%",label:"%"},{value:"vw",label:"vw"},{value:"vh",label:"vh"},{value:"em",label:"em"},{value:"rem",label:"rem"}];var tO=class t extends tE{constructor(){super(...arguments),this.type="rows",this.label="Rows",this.icon='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="10" height="2" fill="currentColor"/><rect x="3" y="7" width="10" height="2" fill="currentColor"/><rect x="3" y="11" width="10" height="2" fill="currentColor"/></svg>'}getDefaults(){return{mode:"count",count:8,size:24,sizeUnit:"px",gap:0,gapUnit:"px",margin:0,marginUnit:"px",color:"#e2784a",opacity:.2,style:"line"}}getUISchema(){return[{type:"select",key:"mode",label:"Mode",default:"count",options:[{value:"count",label:"By count"},{value:"size",label:"By size"}]},{type:"number",key:"count",label:"Rows",default:8,min:1,max:48,step:1,disabledWhen:{key:"mode",equals:"size"}},{type:"range",key:"size",label:"Size",default:24,min:0,max:1200,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px",disabledWhen:{key:"mode",equals:"count"}},{type:"range",key:"gap",label:"Gap",default:0,min:0,max:100,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px"},{type:"range",key:"margin",label:"Margin",default:0,min:0,max:100,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px"},{type:"divider"},{type:"color",key:"color",label:"Color",default:"#e2784a"},{type:"range",key:"opacity",label:"Opacity",default:.2,min:0,max:1,step:.01,displayMultiplier:100,displayStep:10},{type:"select",key:"style",label:"Style",default:"line",options:[{value:"line",label:"Lines"},{value:"fill",label:"Fill"}]}]}render(t,e,i,s){let r=this.getGroup(t,s.__instanceId),{mode:n,count:o,size:a,sizeUnit:l,gap:d,gapUnit:c,margin:h,marginUnit:u,color:p,opacity:g,style:m}=s,v=t.parentElement,b=this.resolveUnit(d,c||"px",i,v),f=this.resolveUnit(h,u||"px",i,v),y=i-2*f;if(!(y<=0))if("count"===n)this.renderByCount(r,e,y,f,o,b,p,g,m);else{let t=this.resolveUnit(a,l||"px",i,v);if(t<=0)return;this.renderBySize(r,e,y,f,t,b,p,g,m)}}renderByCount(t,e,i,s,r,n,o,a,l){if("fill"===l){let l=(i-(r-1)*n)/r;if(!(l<=0))for(let i=0;i<r;i++){let r=s+i*(l+n);t.appendChild(this.createRect(0,r,e,l,o,a))}}else{if(1===r){let r=s+i/2;t.appendChild(this.createLine(0,r,e,r,o,a));return}let n=i/(r-1);for(let i=0;i<r;i++){let r=s+i*n;t.appendChild(this.createLine(0,r,e,r,o,a))}}}renderBySize(t,e,i,s,r,n,o,a,l){if("fill"===l){let l=r+n;for(let n=0;n<i;n+=l){let l=Math.min(r,i-n);t.appendChild(this.createRect(0,s+n,e,l,o,a))}}else for(let n=0;n<=i;n+=r)t.appendChild(this.createLine(0,s+n,e,s+n,o,a))}};tO.UNIT_OPTIONS=[{value:"px",label:"px"},{value:"%",label:"%"},{value:"vh",label:"vh"},{value:"vw",label:"vw"},{value:"em",label:"em"},{value:"rem",label:"rem"}];var tP="http://www.w3.org/2000/svg",tI=class t extends tE{constructor(){super(...arguments),this.type="dot-grid",this.label="Dots",this.icon='<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="11" y="3" width="2" height="2" fill="currentColor"/><rect x="11" y="7" width="2" height="2" fill="currentColor"/><rect x="11" y="11" width="2" height="2" fill="currentColor"/><rect x="7" y="3" width="2" height="2" fill="currentColor"/><rect x="7" y="7" width="2" height="2" fill="currentColor"/><rect x="7" y="11" width="2" height="2" fill="currentColor"/><rect x="3" y="3" width="2" height="2" fill="currentColor"/><rect x="3" y="7" width="2" height="2" fill="currentColor"/><rect x="3" y="11" width="2" height="2" fill="currentColor"/></svg>'}getDefaults(){return{step:16,stepUnit:"px",dotSize:1.5,shape:"dot",color:"#a0a0a0",opacity:.4}}getUISchema(){return[{type:"range",key:"step",label:"Step",default:16,min:0,max:100,step:1,units:t.UNIT_OPTIONS,defaultUnit:"px"},{type:"range",key:"dotSize",label:"Size",default:1.5,min:.5,max:6,step:.5},{type:"select",key:"shape",label:"Shape",default:"dot",options:[{value:"dot",label:"Dot ●"},{value:"cross",label:"Cross +"}]},{type:"divider"},{type:"color",key:"color",label:"Color",default:"#a0a0a0"},{type:"range",key:"opacity",label:"Opacity",default:.4,min:0,max:1,step:.01,displayMultiplier:100,displayStep:10}]}render(t,e,i,s){let r=this.getGroup(t,s.__instanceId),{step:n,stepUnit:o,dotSize:a,shape:l,color:d,opacity:c}=s,h=this.resolveUnit(n,o||"px",Math.min(e,i),t.parentElement),u=this.getSafeStep(e,i,h,l);if(u<2)return;let p=this.getPatternId(s.__instanceId),g=this.getDefs(t),m=document.createElementNS(tP,"pattern");m.setAttribute("id",p),m.setAttribute("data-string-grid-pattern-for",s.__instanceId),m.setAttribute("patternUnits","userSpaceOnUse"),m.setAttribute("width",String(u)),m.setAttribute("height",String(u)),m.setAttribute("x",String(u/2)),m.setAttribute("y",String(u/2));let v=u/2;if("cross"===l)m.appendChild(this.createLine(v-2*a,v,v+2*a,v,d,c,.8)),m.appendChild(this.createLine(v,v-2*a,v,v+2*a,d,c,.8));else{let t=document.createElementNS(tP,"circle");t.setAttribute("cx",String(v)),t.setAttribute("cy",String(v)),t.setAttribute("r",String(a)),t.setAttribute("fill",d),t.setAttribute("fill-opacity",String(c)),m.appendChild(t)}g.appendChild(m);let b=this.createRect(0,0,e,i,`url(#${p})`,1);b.setAttribute("fill-opacity","1"),r.appendChild(b)}clear(t,e){super.clear(t,e),t.querySelector(`[data-string-grid-pattern-for="${e}"]`)?.remove()}getDefs(t){let e=t.querySelector("defs");return e||(e=document.createElementNS(tP,"defs"),t.insertBefore(e,t.firstChild)),e}getPatternId(t){return`string-grid-dot-pattern-${t.replace(/[^a-zA-Z0-9_-]/g,"-")}`}getSafeStep(e,i,s,r){let n=Math.max(s,2),o="cross"===r?t.MAX_CROSS_CELLS:t.MAX_DOT_CELLS;return Math.floor(e/n)*Math.floor(i/n)<=o?n:Math.max(n,Math.sqrt(e*i/o))}};tI.MAX_DOT_CELLS=12e4,tI.MAX_CROSS_CELLS=8e4,tI.UNIT_OPTIONS=[{value:"px",label:"px"},{value:"%",label:"%"},{value:"vw",label:"vw"},{value:"vh",label:"vh"},{value:"em",label:"em"},{value:"rem",label:"rem"}];var tT="string-devtools-overlay-layout:change",tD=new class{constructor(){this.entries=new Map}register(t,e,i=1){this.entries.set(t,{order:e,badgeCount:i})}unregister(t){this.entries.delete(t)}resolveAnchor(t,e,i){let s=this.getSorted(),r=s.findIndex(e=>e.id===t),n=0;for(let t=0;t<r;t+=1)n+=s[t].badgeCount;return{docX:e+0+31*n,docY:i+0}}resolveCollisionOffset(t,e,i,s){let r=[],n=t.parentElement;for(;n;){let t=n.getAttribute("string-id")??n.getAttribute("data-string-id");if(t){let e=s(t);e&&r.push(e)}n=n.parentElement}let o=0,a=!0;for(;a;)for(let t of(a=!1,r))if(50>Math.abs(t.docX-e)&&31>Math.abs(t.docY-(i+o))){o+=33,a=!0;break}return o}emitLayoutChange(){window.dispatchEvent(new CustomEvent(tT))}getSorted(){let t=[];for(let[e,i]of this.entries)t.push({id:e,...i});return t.sort((t,e)=>t.order!==e.order?t.order-e.order:t.id.localeCompare(e.id)),t}};new class{constructor(){this.id="default",this.cornerLabel="↗"}formatPosition(t){return t}getFixedLines(){return[]}},new class{constructor(){this.id="center",this.cornerLabel="+"}formatPosition(t,e,i,s){return t-(s+i/2)}getFixedLines(t,e,i,s){return[{axis:"horizontal",position:s+e/2},{axis:"vertical",position:i+t/2}]}};var tR=0,tF=0,tj=0,tz=new Map;var tB=class t{constructor(){this.pendingScroll=!1,this.lastScrollEmitted=NaN,this.observerContainerMutation=null,this.pendingResizeRaf=null,this.pendingResizeForce=!1,this.prevWidth=0,this.prevHeight=0,this.loop=new G,this.devtoolsFpsLastSampleTime=0,this.devtoolsFpsFrameCount=0,this.observerContainerResize=null,this.devtoolsAccessToken="",this.devtoolsAccessState="unknown",this.devtoolsAccessRequestId=0,this.pendingDevtoolUses=[],this.hasStarted=!1,this.devtoolsAccessLastMessage="none",this.canRebuild=!0,this.debouncedResize=function(t,e){let i=null;return function(...e){let s=this;i&&clearTimeout(i),i=setTimeout(()=>{t.apply(s,e),i=null},30)}}(()=>{this.queueResize(!1)},0),this.cleanupExistingDevtoolsArtifacts(),this.root=document.body,this.window=window,this.tools=new q,this.data=new S,this.eventManager=new r,this.moduleManager=new n(this.data),this.objectManager=new u(this.data,this.moduleManager,this.eventManager,this.tools),this.centers=new te,this.hoverManager=new ti,this.devtools=new tm,this.context={events:this.eventManager,data:this.data,tools:this.tools,settings:{},centers:this.centers,hover:this.hoverManager,objectManager:this.objectManager},this.cursorController=new s(1,this.context),this.scrollManager=new f(this.context),this.setupSettings({"global-class":!1,"offset-top":"0%","offset-bottom":"0%",key:"--progress","inview-top":"0%","inview-bottom":"0%","enter-el":"top","enter-vp":"bottom","exit-el":"bottom","exit-vp":"top","parallax-bias":"0.0",parallax:"0.2",lerp:"0.2","cursor-lerp":"0.75",radius:"150",strength:"0.3",glide:"1",anchor:"center center",timeout:900,alignment:"center","target-disable":"false","target-style-disable":"false","target-class":"",active:"false",fixed:"false",repeat:"false","self-disable":"false",abs:"false",easing:"cubic-bezier(0.25, 0.25, 0.25, 0.25)","glide-base-velocity":.00125,"glide-reduce-velocity":625e-7,"glide-negative-velocity":-1e-4,"position-strength":3,"position-tension":.05,"position-friction":.15,"position-max-velocity":10,"position-update-threshold":.1,"rotation-strength":.75,"rotation-tension":.06,"rotation-friction":.18,"rotation-max-angular-velocity":6,"rotation-max-angle":18,"rotation-update-threshold":.15,"max-offset":220,"sleep-epsilon":.01,"continuous-push":!0}),this.onContainerTransitionEndBind=this.onContainerTransitionEnd.bind(this),this.onResizeObserverBind=this.onResizeObserverEvent.bind(this),this.observerContainerResize=new ResizeObserver(this.onResizeObserverBind),this.observerContainerResize.observe(this.context.data.scroll.container),this.onWheelBind=this.onWheelEvent.bind(this),this.onScrollBind=this.onScrollEvent.bind(this),this.onResizeBind=()=>{this.queueResize(!1)},this.onMouseMoveBind=this.onMouseMoveEvent.bind(this),this.onScrollStartBind=this.onScrollStart.bind(this),this.onScrollStopBind=this.onScrollStop.bind(this),this.onDirectionChangeBind=this.onDirectionChange.bind(this),this.onScrollConfigChangeBind=this.onScrollConfigChange.bind(this),this.onScrollToBind=this.scrollTo.bind(this),this.onDOMChangedBind=this.onDOMChanged.bind(this),this.eventManager.on("wheel",this.onWheelBind),this.eventManager.on("resize",this.onResizeBind),this.eventManager.on("scrollTo",this.onScrollToBind),this.eventManager.on("dom:changed",this.onDOMChangedBind),this.scrollManager.bindEvents({onScrollStart:this.onScrollStartBind,onScrollStop:this.onScrollStopBind,onDirectionChange:this.onDirectionChangeBind,onModeChange:this.onScrollConfigChangeBind}),this.loop.setOnFrame(t=>{this.data.time.delta=t-this.data.time.now,this.data.time.previous=this.data.time.now,this.data.time.now=t,this.data.time.elapsed+=this.data.time.delta,this.onUpdateEvent(),this.updateDevtoolsFPS(t)}),this.on("image:load:all",()=>{this.onResize()}),this.scrollContainer=window}set scrollPosition(t){this.data.scroll.current=t,this.data.scroll.target=t,this.data.scroll.transformedCurrent=this.data.scroll.current*this.data.viewport.transformScale,this.data.scroll.delta=0,this.data.scroll.lerped=0,this.scrollManager.updatePosition(),this.moduleManager.onScroll(),this.objectManager.checkInview()}set accessDevtoolToken(t){let e=t.trim();if(e!==this.devtoolsAccessToken||"granted"!==this.devtoolsAccessState&&"pending"!==this.devtoolsAccessState){if(this.devtoolsAccessToken=e,0===e.length){this.devtoolsAccessState="unknown";return}this.validateDevtoolsAccess(e)}}set scrollContainer(t){this.observerContainerResize?.unobserve(this.context.data.scroll.container),this.data.scroll.elementContainer.removeEventListener("transitionend",this.onContainerTransitionEndBind),t instanceof Window?(this.data.scroll.container=document.body,this.data.scroll.elementContainer=document.documentElement):t instanceof HTMLElement?(this.data.scroll.container=t,this.data.scroll.elementContainer=t):(this.data.scroll.container=document.body,this.data.scroll.elementContainer=document.documentElement),this.data.scroll.scrollContainer=t,this.data.scroll.elementContainer.addEventListener("transitionend",this.onContainerTransitionEndBind),this.observerContainerResize?.observe(this.context.data.scroll.container),this.observeContainerMutations(),this.queueResize(!0)}get scrollPosition(){return this.data.scroll.current}get scrollHeight(){return this.data.viewport.contentHeight}get containerHeight(){return this.data.viewport.windowHeight}set speed(t){this.data.scroll.speed=t}set speedAccelerate(t){this.data.scroll.speedAccelerate=.1+.4*t}set scrollDesktopMode(t){this.scrollManager.setDesktopMode(t)}set scrollMobileMode(t){this.scrollManager.setMobileMode(t)}set FPSTrackerVisible(t){this.data.system.fpsTracker=t,this.eventManager.emit("tracker:fps:visible",t)}set PositionTrackerVisible(t){this.data.system.positionTracker=t,this.eventManager.emit("tracker:position:visible",t)}set domBatcherEnabled(t){this.objectManager.setDOMBatcherEnabled(t)}set intersectionObserverEnabled(t){this.objectManager.setIntersectionObserverEnabled(t)}static getInstance(){return t.i||(t.i=new t),t.i}reuse(t){return this.moduleManager.find(t)}use(t,e=null){this.moduleManager.find(t)||this.shouldDeferDevtoolModule(t,e)||this.instantiateModule(t,e)}cleanupExistingDevtoolsArtifacts(){for(let e of t.DEVTOOLS_ARTIFACT_SELECTORS)document.querySelectorAll(e).forEach(t=>t.remove())}instantiateModule(t,e=null){let i={...this.context.settings,...e},s=new t({events:this.eventManager,data:this.data,tools:this.tools,settings:i,centers:this.centers,hover:this.hoverManager,objectManager:this.objectManager});this.moduleManager.register(s),"object"==typeof s&&null!==s&&"getDevtoolDefinition"in s&&"function"==typeof s.getDevtoolDefinition&&this.devtools.register(s.getDevtoolDefinition()),this.hasStarted&&(this.objectManager.attachModule(s),s.onInit(),s.onResize(),s.onScroll(this.data),s.onFrame(this.data))}shouldDeferDevtoolModule(t,e){return!!(t===tf||t.prototype instanceof tf)&&"granted"!==this.devtoolsAccessState&&(this.pendingDevtoolUses.push({objectClass:t,settings:e}),this.devtoolsAccessToken.length>0&&"pending"!==this.devtoolsAccessState&&this.validateDevtoolsAccess(this.devtoolsAccessToken),!0)}async validateDevtoolsAccess(e){let i=++this.devtoolsAccessRequestId;this.devtoolsAccessState="pending";try{let s=await fetch(`${t.DEVTOOLS_ACCESS_URL}?token=${encodeURIComponent(e)}`),r=await this.resolveDevtoolsAccessResponse(s);if(i!==this.devtoolsAccessRequestId||e!==this.devtoolsAccessToken)return;if(this.devtoolsAccessState=r?"granted":"denied",!r){this.logDevtoolsAccess("denied"),this.pendingDevtoolUses=[];return}this.logDevtoolsAccess("granted");let n=[...this.pendingDevtoolUses];this.pendingDevtoolUses=[],n.forEach(({objectClass:t,settings:e})=>{this.instantiateModule(t,e)})}catch{if(i!==this.devtoolsAccessRequestId||e!==this.devtoolsAccessToken||"granted"===this.devtoolsAccessState)return;this.devtoolsAccessState="denied",this.logDevtoolsAccess("error"),this.pendingDevtoolUses=[]}}logDevtoolsAccess(e){if(this.devtoolsAccessLastMessage!==e){if(this.devtoolsAccessLastMessage=e,"granted"===e)return void console.info(`${t.DEVTOOLS_LOG_PREFIX} Access granted. Devtools modules are enabled.`);if("denied"===e)return void console.warn(`${t.DEVTOOLS_LOG_PREFIX} Access denied. Devtools modules were not enabled. Check accessDevtoolToken.`);console.warn(`${t.DEVTOOLS_LOG_PREFIX} Access check failed. Devtools modules were not enabled.`)}}async resolveDevtoolsAccessResponse(t){if(!t.ok)return!1;if((t.headers.get("content-type")?.toLowerCase()??"").includes("application/json")){let e=await t.json();return"boolean"==typeof e?e:!!e&&"object"==typeof e&&"allowed"in e&&!0===e.allowed}return"true"===(await t.text()).trim().toLowerCase()}registerScrollMode(t,e){let i;(i="function"==typeof e&&e.prototype instanceof g?new e(this.context):e(this.context)).name||(i.name=t),this.scrollManager.registerMode(t,i)}on(t,e,i=""){this.eventManager.on(t,e,i)}emit(t,e){this.eventManager.emit(t,e)}off(t,e,i=""){this.eventManager.off(t,e,i)}addScrollMark(t){this.scrollManager.addScrollMark(t)}removeScrollMark(t){this.scrollManager.removeScrollMark(t)}start(t){if(this.hasStarted)return;this.hasStarted=!0,this.data.scroll.scrollContainer?.addEventListener("scroll",this.onScrollBind),this.data.scroll.container?.addEventListener("wheel",this.onWheelBind,{passive:!1}),window.addEventListener("resize",this.onResizeBind),this.root.addEventListener("mousemove",this.onMouseMoveBind),this.observeContainerMutations(),this.use(X);let e=parseFloat(window.getComputedStyle(document.documentElement).fontSize);this.context.data.viewport.baseRem=e,document.documentElement.classList.add("-string"),this.syncDebugScrollState(),this.moduleManager.onInit(),this.onResize(),this.initObjects(),this.objectManager.observeDOM(),this.loop.start(t),this.eventManager.emit("start",null)}initObjects(){document.querySelectorAll("[string],[data-string]").forEach(t=>{this.objectManager.add(t)}),document.querySelectorAll("[string-copy-from],[data-string-copy-from]").forEach(t=>{let e=this.tools.domAttribute.process({element:t,key:"copy-from",fallback:""});e&&e.length>0&&this.objectManager.linkMirror(e,t)}),this.moduleManager.onResize(),this.moduleManager.onScroll(),this.moduleManager.onFrame()}setupSettings(t){this.context.settings={...this.context.settings,...t},"string"==typeof t.storageToken?th(t.storageToken):"string"==typeof t["storage-token"]&&th(t["storage-token"]),"string"==typeof t.accessDevtoolToken&&(this.accessDevtoolToken=t.accessDevtoolToken),this.onSettingsChange({isDesktop:this.data.viewport.windowWidth>1024,widthChanged:!0,heightChanged:!0,scrollHeightChanged:!0,isForceRebuild:!1})}onResizeObserverEvent(){this.debouncedResize()}onContainerTransitionEnd(t){t.target===this.context.data.scroll.container&&this.queueResize(!0)}onDOMChanged(){this.queueResize(!1),this.debouncedResize()}observeContainerMutations(){this.observerContainerMutation?.disconnect();let t=this.context.data.scroll.container;t&&(this.observerContainerMutation=new MutationObserver(t=>{for(let e=0;e<t.length;e++){let i=t[e];if("attributes"===i.type&&("style"===i.attributeName||"class"===i.attributeName)){this.queueResize(!1),this.debouncedResize();break}}}),this.observerContainerMutation.observe(t,{attributes:!0,attributeFilter:["style","class"]}))}queueResize(t=!1){t&&(this.pendingResizeForce=!0),null==this.pendingResizeRaf&&(this.pendingResizeRaf=requestAnimationFrame(()=>{this.pendingResizeRaf=null;let t=this.pendingResizeForce;this.pendingResizeForce=!1,this.onResize(t)}))}onMouseMoveEvent(t){this.cursorController.onMouseMove(t),this.moduleManager.onMouseMove(t),K.measure(()=>{this.moduleManager.onMouseMoveMeasure()})}onWheelEvent(t){null==t.target.closest("[string-isolation],[data-string-isolation]")&&(this.scrollManager.get().onWheel(t),this.moduleManager.onWheel(t))}onScrollStart(){this.moduleManager.onScrollStart(),this.eventManager.emit("scroll:start",null)}onScrollStop(){this.moduleManager.onScrollStop(),this.eventManager.emit("scroll:stop",null)}onDirectionChange(){this.moduleManager.onDirectionChange()}onScrollConfigChange(){this.moduleManager.onScrollConfigChange(),this.syncDebugScrollState(),this.moduleManager.onScroll(),this.moduleManager.onScrollMeasure(),this.moduleManager.onFrame(),U.run(()=>{this.moduleManager.onMutate()})}syncDebugScrollState(){let t=document.documentElement,e=window.innerWidth<1024;t.setAttribute("data-string-scroll-mode",String(this.data.scroll.mode)),t.setAttribute("data-string-scroll-device",e?"mobile":"desktop")}onSettingsChange(t){this.cursorController.onSettingsChange(t),this.objectManager.onSettingsChange(t),this.moduleManager.onSettingsChange(t)}onScrollEvent(t){return t.preventDefault(),this.context.centers.invalidateAll(),this.scrollManager.get().onScroll(t),this.pendingScroll=!0,!1}onUpdateEvent(){this.cursorController.onFrame(),this.scrollManager.get().onFrame(),this.moduleManager.onFrame(),(this.pendingScroll||this.data.scroll.current!==this.lastScrollEmitted)&&(this.pendingScroll=!1,this.moduleManager.onScroll(),this.objectManager.checkInview(),this.eventManager.emit("lerp",this.data.scroll.lerped),this.eventManager.emit("scroll",this.data.scroll.current),K.measure(()=>{this.moduleManager.onScrollMeasure()}),this.lastScrollEmitted=this.data.scroll.current),K.mutate(()=>{U.begin(),this.moduleManager.onMutate(),U.commit()}),this.eventManager.emit("update",null),K.flush()}updateDevtoolsFPS(t){0===this.devtoolsFpsLastSampleTime&&(this.devtoolsFpsLastSampleTime=t),this.devtoolsFpsFrameCount+=1;let e=t-this.devtoolsFpsLastSampleTime;if(e<1e3)return;let i=1e3*this.devtoolsFpsFrameCount/e;this.devtools.setFPS(i),this.devtoolsFpsFrameCount=0,this.devtoolsFpsLastSampleTime=t}onResize(t=!1){if(!1==this.canRebuild)return;let e=this.data.scroll.container,i=this.context.data.scroll,s=0,r=0;var n,o=0;let a=e.getBoundingClientRect();"BODY"==e.tagName?(s=document.documentElement.clientWidth||window.innerWidth||a.width,r=window.innerHeight):(s=a.width,r=a.height),o="BODY"===e.tagName?0:a.top,n=i.container.scrollHeight;let l=this.tools.transformScaleParser.process({value:window.getComputedStyle(e).transform});this.context.data.viewport.transformScale="none"==window.getComputedStyle(e).scale?l:Number(window.getComputedStyle(e).scale),this.context.data.scroll.transformedCurrent=this.context.data.scroll.current*this.context.data.viewport.transformScale;let d="ontouchstart"in window||navigator.maxTouchPoints>0,c=s>1024,h=this.prevWidth!==s,u=this.prevHeight!==r,p=Math.abs(this.prevHeight-r),g=this.context.data.viewport.contentHeight!==n,m=h||!d&&u||d&&p>150||g;this.context.data.scroll.topPosition=Math.floor(o),this.context.data.viewport.contentWidth=s,this.context.data.viewport.contentHeight=n,this.prevWidth=s,this.prevHeight=r,this.context.data.viewport.windowWidth=s,this.context.data.viewport.windowHeight=r;let v=parseFloat(window.getComputedStyle(document.documentElement).fontSize);if(this.context.data.viewport.baseRem=v*l,this.syncDebugScrollState(),i.bottomPosition=this.context.data.viewport.contentHeight-r,(h||"boolean"==typeof t&&t)&&this.moduleManager.onResizeWidth(),m||"boolean"==typeof t&&t){let e=this.context.data.scroll.elementContainer.scrollTop;e>0&&(this.context.data.scroll.current=e,this.context.data.scroll.target=e),this.moduleManager.onResize(),this.scrollManager&&this.scrollManager.updateResponsiveMode(),this.onSettingsChange({isDesktop:c,widthChanged:h,heightChanged:u,scrollHeightChanged:g,isForceRebuild:!0===t}),this.objectManager.invalidateInviewIndex(),this.moduleManager.onScroll(),this.moduleManager.onScrollMeasure(),this.moduleManager.onFrame()}this.objectManager.checkInview()}invalidateCenter(t){this.objectManager.all.get(t)&&this.centers.invalidate(t)}scrollTo(t){let e=this.resolveScrollToValue(t);null!=e&&this.scrollManager.get().scrollTo(e.position,e.immediate)}resolveScrollToValue(t){if("number"==typeof t)return{position:t,immediate:!1};if("string"==typeof t||t instanceof HTMLElement){let e=this.resolveElementScrollPosition(t);return null==e?null:{position:e,immediate:!1}}let e=!0===t.immediate,i=t.offset??0;if("position"in t)return{position:t.position+i,immediate:e};let s="selector"in t?t.selector:t.element,r=this.resolveElementScrollPosition(s);return null==r?null:{position:r+i,immediate:e}}resolveElementScrollPosition(t){let e="string"==typeof t?document.querySelector(t):t;if(!(e instanceof HTMLElement))return null;let i=this.data.scroll.container??document.body??document.documentElement,s=this.data.scroll.elementContainer??document.documentElement,r=this.tools.transformNullify.process({element:e});if(i===document.body||i===document.documentElement)return r.top+s.scrollTop;let n=i.getBoundingClientRect();return r.top-n.top+i.scrollTop}destroy(){this.hasStarted=!1,this.data.scroll.scrollContainer?.removeEventListener("scroll",this.onScrollBind),this.data.scroll.container?.removeEventListener("wheel",this.onWheelBind),window.removeEventListener("resize",this.onResizeBind),this.root.removeEventListener("mousemove",this.onMouseMoveBind),this.eventManager.off("dom:changed",this.onDOMChangedBind),this.observerContainerMutation?.disconnect(),this.observerContainerMutation=null,null!=this.pendingResizeRaf&&(cancelAnimationFrame(this.pendingResizeRaf),this.pendingResizeRaf=null),this.objectManager.destroy(),this.scrollManager.destroy(),this.devtools.destroy()}};tB.DEVTOOLS_ACCESS_URL="https://access.fiddle.digital/",tB.DEVTOOLS_LOG_PREFIX="[StringTune Devtools]",tB.DEVTOOLS_ARTIFACT_SELECTORS=["[data-string-dev-viewport-layer]","[data-string-dev-viewport-world]","[data-stdg-dock]","[data-stdg-dock-sub-badges]"];var tN=tB}}]);