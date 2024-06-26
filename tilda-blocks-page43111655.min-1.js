window.isSafari=!1;if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){window.isSafari=!0}
window.isSafariVersion='';if(window.isSafari){var version=(navigator.appVersion).match(/Version\/(\d+)\.(\d+)\.?(\d+)? Safari/);if(version!==null){window.isSafariVersion=[parseInt(version[1],10),parseInt(version[2],10),parseInt(version[3]||0,10)]}}
function t_throttle(fn,threshhold,scope){var last;var deferTimer;threshhold||(threshhold=250);return function(){var context=scope||this;var now=+new Date();var args=arguments;if(last&&now<last+threshhold){clearTimeout(deferTimer);deferTimer=setTimeout(function(){last=now;fn.apply(context,args)},threshhold)}else{last=now;fn.apply(context,args)}}}
function t674_init(recid){var rec=document.getElementById('rec'+recid);if(!rec)return;var backgroundImage=rec.querySelector('.t674__img-holder');if(!backgroundImage)return;backgroundImage.onload=function(){var delay=0;var allRecords=document.getElementById('allrecords');if(allRecords.getAttribute('data-blocks-animationoff')!=='yes'){delay=600}
setTimeout(function(){document.body.classList.add('t674__body_with-bg')},delay)};var event=document.createEvent('HTMLEvents');event.initEvent('load',!0,!1);backgroundImage.dispatchEvent(event)}
function t390_initPopup(recId){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t390');if(!container)return;rec.setAttribute('data-animationappear','off');rec.style.opacity=1;var popup=rec.querySelector('.t-popup');var popupTooltipHook=popup.getAttribute('data-tooltip-hook');var analitics=popup.getAttribute('data-track-popup');var popupCloseBtn=popup.querySelector('.t-popup__close');var hrefs=rec.querySelectorAll('a[href*="#"]');var escapeEvent=t390_escClosePopup.bind(this,recId);if(popupTooltipHook){t_onFuncLoad('t_popup__addAttributesForAccessibility',function(){t_popup__addAttributesForAccessibility(popupTooltipHook)});document.addEventListener('click',function(event){var target=event.target;var href=target.closest('a[href="'+popupTooltipHook+'"]')?target:!1;if(!href)return;event.preventDefault();t390_showPopup(recId,escapeEvent);t_onFuncLoad('t_popup__resizePopup',function(){t_popup__resizePopup(recId)});t390__lazyLoad();if(analitics&&window.Tilda){Tilda.sendEventToStatistics(analitics,popupTooltipHook)}});t_onFuncLoad('t_popup__addClassOnTriggerButton',function(){t_popup__addClassOnTriggerButton(document,popupTooltipHook)})}
popup.addEventListener('scroll',t_throttle(function(){t390__lazyLoad()}));popup.addEventListener('click',function(event){if(event.target===this)t390_closePopup(recId,escapeEvent)});popupCloseBtn.addEventListener('click',function(){t390_closePopup(recId,escapeEvent)});for(var i=0;i<hrefs.length;i++){hrefs[i].addEventListener('click',function(){var url=this.getAttribute('href');if(!url||url.substring(0,7)!='#price:'){t390_closePopup(recId,escapeEvent);if(!url||url.substring(0,7)=='#popup:'){setTimeout(function(){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');document.body.classList.add('t-body_popupshowed')},300)}}})}
var curPath=window.location.pathname;var curFullPath=window.location.origin+curPath;var isAndroid=/(android)/i.test(navigator.userAgent);if(isAndroid){var selects='a[href^="#"]:not([href="#"]):not([href^="#price"]):not([href^="#popup"]):not([href^="#prodpopup"]):not([href^="#order"]):not([href^="#!"]),'+'a[href^="'+curPath+'#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"]),'+'a[href^="'+curFullPath+'#"]:not([href*="#!/tproduct/"]):not([href*="#!/tab/"]):not([href*="#popup"])';var selectors=rec.querySelectorAll(selects);for(var i=0;i<selectors.length;i++){selectors[i].addEventListener('click',function(event){var hash=this.hash.trim();if(window.location.hash){setTimeout(function(){window.location.href=hash},50)}})}}
function t390_escClosePopup(recId){if(arguments[1].key==='Escape')t390_closePopup(recId,escapeEvent)}}
function t390_showPopup(recId,escapeEvent){var rec=document.getElementById('rec'+recId);if(!rec)return;var container=rec.querySelector('.t390');if(!container)return;var windowWidth=window.innerWidth;var screenMin=rec.getAttribute('data-screen-min');var screenMax=rec.getAttribute('data-screen-max');if(screenMin&&windowWidth<parseInt(screenMin,10))return;if(screenMax&&windowWidth>parseInt(screenMax,10))return;var popup=rec.querySelector('.t-popup');var documentBody=document.body;t_onFuncLoad('t_popup__showPopup',function(){t_popup__showPopup(popup)});if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupShowed');documentBody.classList.add('t-body_popupshowed');documentBody.classList.add('t390__body_popupshowed');document.addEventListener('keydown',escapeEvent)}
function t390_closePopup(recId,escapeEvent){var rec=document.getElementById('rec'+recId);var popup=rec.querySelector('.t-popup');var popupActive=document.querySelector('.t-popup.t-popup_show');if(popup===popupActive){if(typeof t_triggerEvent==='function')t_triggerEvent(document.body,'popupHidden');document.body.classList.remove('t-body_popupshowed');document.body.classList.remove('t390__body_popupshowed')}
popup.classList.remove('t-popup_show');t_onFuncLoad('t_popup__addFocusOnTriggerButton',function(){t_popup__addFocusOnTriggerButton()});setTimeout(function(){var popupHide=document.querySelectorAll('.t-popup:not(.t-popup_show)');for(var i=0;i<popupHide.length;i++){popupHide[i].style.display='none'}},300);document.removeEventListener('keydown',escapeEvent)}
function t390_sendPopupEventToStatistics(popupName){var virtPage='/tilda/popup/';var virtTitle='Popup: ';if(popupName.substring(0,7)=='#popup:'){popupName=popupName.substring(7)}
virtPage+=popupName;virtTitle+=popupName;if(window.Tilda&&typeof Tilda.sendEventToStatistics=='function'){Tilda.sendEventToStatistics(virtPage,virtTitle,'',0)}else{if(ga){if(window.mainTracker!='tilda'){ga('send',{hitType:'pageview',page:virtPage,title:virtTitle})}}
if(window.mainMetrika&&window[window.mainMetrika]){window[window.mainMetrika].hit(virtPage,{title:virtTitle,referer:window.location.href})}}}
function t390__lazyLoad(){var allRecords=document.getElementById('allrecords');if(window.lazy==='y'||(allRecords&&allRecords.getAttribute('data-tilda-lazy')==='yes')){t_onFuncLoad('t_lazyload_update',function(){t_lazyload_update()})}}