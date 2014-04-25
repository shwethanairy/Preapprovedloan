/*!
 * SAP UI development toolkit for HTML5 (SAPUI5)
 * 
 * (c) Copyright 2009-2013 SAP AG. All rights reserved
 */
jQuery.sap.declare("sap.m.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");sap.ui.getCore().initLibrary({name:"sap.m",dependencies:["sap.ui.core"],types:["sap.m.BackgroundDesign","sap.m.ButtonType","sap.m.DateTimeInputType","sap.m.DialogType","sap.m.FacetFilterType","sap.m.FlexAlignItems","sap.m.FlexAlignSelf","sap.m.FlexDirection","sap.m.FlexJustifyContent","sap.m.FlexRendertype","sap.m.HeaderLevel","sap.m.IconTabFilterDesign","sap.m.InputType","sap.m.LabelDesign","sap.m.ListHeaderDesign","sap.m.ListMode","sap.m.ListSeparators","sap.m.ListType","sap.m.PageBackgroundDesign","sap.m.PlacementType","sap.m.PopinDisplay","sap.m.RatingIndicatorVisualMode","sap.m.ScreenSize","sap.m.SelectType","sap.m.SplitAppMode","sap.m.StandardTileType","sap.m.SwipeDirection","sap.m.SwitchType"],interfaces:["sap.m.IconTab"],controls:["sap.m.ActionListItem","sap.m.ActionSelect","sap.m.ActionSheet","sap.m.App","sap.m.Bar","sap.m.BusyDialog","sap.m.BusyIndicator","sap.m.Button","sap.m.Carousel","sap.m.CheckBox","sap.m.ColumnListItem","sap.m.CustomListItem","sap.m.CustomTile","sap.m.DateTimeInput","sap.m.Dialog","sap.m.DisplayListItem","sap.m.FacetFilter","sap.m.FacetFilterList","sap.m.FeedListItem","sap.m.FlexBox","sap.m.GroupHeaderListItem","sap.m.GrowingList","sap.m.HBox","sap.m.IconTabBar","sap.m.Image","sap.m.Input","sap.m.InputBase","sap.m.InputListItem","sap.m.Label","sap.m.Link","sap.m.List","sap.m.ListBase","sap.m.ListItemBase","sap.m.NavContainer","sap.m.ObjectAttribute","sap.m.ObjectHeader","sap.m.ObjectIdentifier","sap.m.ObjectListItem","sap.m.ObjectNumber","sap.m.ObjectStatus","sap.m.Page","sap.m.Panel","sap.m.Popover","sap.m.ProgressIndicator","sap.m.PullToRefresh","sap.m.RadioButton","sap.m.RatingIndicator","sap.m.ResponsivePopover","sap.m.ScrollContainer","sap.m.SearchField","sap.m.SegmentedButton","sap.m.Select","sap.m.SelectDialog","sap.m.Shell","sap.m.Slider","sap.m.SplitApp","sap.m.SplitContainer","sap.m.StandardListItem","sap.m.StandardTile","sap.m.Switch","sap.m.Table","sap.m.TableSelectDialog","sap.m.Text","sap.m.TextArea","sap.m.Tile","sap.m.TileContainer","sap.m.Toolbar","sap.m.ToolbarSpacer","sap.m.VBox","sap.m.ViewSettingsDialog"],elements:["sap.m.Column","sap.m.FacetFilterItem","sap.m.FlexItemData","sap.m.IconTabFilter","sap.m.IconTabSeparator","sap.m.ViewSettingsCustomItem","sap.m.ViewSettingsFilterItem","sap.m.ViewSettingsItem"],version:"1.16.3"});jQuery.sap.declare("sap.m.BackgroundDesign");sap.m.BackgroundDesign={Solid:"Solid",Transparent:"Transparent",Translucent:"Translucent"};jQuery.sap.declare("sap.m.ButtonType");sap.m.ButtonType={Default:"Default",Back:"Back",Accept:"Accept",Reject:"Reject",Transparent:"Transparent",Up:"Up",Unstyled:"Unstyled",Emphasized:"Emphasized"};jQuery.sap.declare("sap.m.DateTimeInputType");sap.m.DateTimeInputType={Date:"Date",DateTime:"DateTime",Time:"Time"};jQuery.sap.declare("sap.m.DialogType");sap.m.DialogType={Standard:"Standard",Message:"Message"};jQuery.sap.declare("sap.m.FacetFilterType");sap.m.FacetFilterType={Simple:"Simple",Light:"Light"};jQuery.sap.declare("sap.m.FlexAlignItems");sap.m.FlexAlignItems={Start:"Start",End:"End",Center:"Center",Baseline:"Baseline",Stretch:"Stretch",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexAlignSelf");sap.m.FlexAlignSelf={Auto:"Auto",Start:"Start",End:"End",Center:"Center",Baseline:"Baseline",Stretch:"Stretch",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexDirection");sap.m.FlexDirection={Row:"Row",Column:"Column",RowReverse:"RowReverse",ColumnReverse:"ColumnReverse",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexJustifyContent");sap.m.FlexJustifyContent={Start:"Start",End:"End",Center:"Center",SpaceBetween:"SpaceBetween",SpaceAround:"SpaceAround",Inherit:"Inherit"};jQuery.sap.declare("sap.m.FlexRendertype");sap.m.FlexRendertype={Div:"Div",List:"List"};jQuery.sap.declare("sap.m.HeaderLevel");sap.m.HeaderLevel={H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6"};jQuery.sap.declare("sap.m.IconTabFilterDesign");sap.m.IconTabFilterDesign={Horizontal:"Horizontal",Vertical:"Vertical"};jQuery.sap.declare("sap.m.InputType");sap.m.InputType={Text:"Text",Date:"Date",Datetime:"Datetime",DatetimeLocale:"DatetimeLocale",Email:"Email",Month:"Month",Number:"Number",Tel:"Tel",Time:"Time",Url:"Url",Week:"Week",Password:"Password"};jQuery.sap.declare("sap.m.LabelDesign");sap.m.LabelDesign={Bold:"Bold",Standard:"Standard"};jQuery.sap.declare("sap.m.ListHeaderDesign");sap.m.ListHeaderDesign={Standard:"Standard",Plain:"Plain"};jQuery.sap.declare("sap.m.ListMode");sap.m.ListMode={None:"None",SingleSelect:"SingleSelect",MultiSelect:"MultiSelect",Delete:"Delete",SingleSelectMaster:"SingleSelectMaster",SingleSelectLeft:"SingleSelectLeft"};jQuery.sap.declare("sap.m.ListSeparators");sap.m.ListSeparators={All:"All",Inner:"Inner",None:"None"};jQuery.sap.declare("sap.m.ListType");sap.m.ListType={Inactive:"Inactive",Detail:"Detail",Navigation:"Navigation",Active:"Active",DetailAndActive:"DetailAndActive"};jQuery.sap.declare("sap.m.PageBackgroundDesign");sap.m.PageBackgroundDesign={Standard:"Standard",List:"List",Solid:"Solid",Transparent:"Transparent"};jQuery.sap.declare("sap.m.PlacementType");sap.m.PlacementType={Left:"Left",Right:"Right",Top:"Top",Bottom:"Bottom",Vertical:"Vertical",Horizontal:"Horizontal",Auto:"Auto"};jQuery.sap.declare("sap.m.PopinDisplay");sap.m.PopinDisplay={Block:"Block",Inline:"Inline"};jQuery.sap.declare("sap.m.RatingIndicatorVisualMode");sap.m.RatingIndicatorVisualMode={Full:"Full",Half:"Half"};jQuery.sap.declare("sap.m.ScreenSize");sap.m.ScreenSize={Phone:"Phone",Tablet:"Tablet",Desktop:"Desktop",XXSmall:"XXSmall",XSmall:"XSmall",Small:"Small",Medium:"Medium",Large:"Large",XLarge:"XLarge",XXLarge:"XXLarge"};jQuery.sap.declare("sap.m.SelectType");sap.m.SelectType={Default:"Default",IconOnly:"IconOnly"};jQuery.sap.declare("sap.m.SplitAppMode");sap.m.SplitAppMode={ShowHideMode:"ShowHideMode",StretchCompressMode:"StretchCompressMode",PopoverMode:"PopoverMode",HideMode:"HideMode"};jQuery.sap.declare("sap.m.StandardTileType");sap.m.StandardTileType={Create:"Create",Monitor:"Monitor",None:"None"};jQuery.sap.declare("sap.m.SwipeDirection");sap.m.SwipeDirection={LeftToRight:"LeftToRight",RightToLeft:"RightToLeft",Both:"Both"};jQuery.sap.declare("sap.m.SwitchType");sap.m.SwitchType={Default:"Default",AcceptReject:"AcceptReject"};
/*!
 * @copyright@
 */
jQuery.sap.require("jquery.sap.mobile");jQuery.sap.require("sap.m.Support");jQuery.sap._touchToMouseEvent=false;jQuery.sap.disableTouchToMouseHandling();if(sap.m&&!sap.m.touch){sap.m.touch={}}
sap.m.touch.find=function(t,T){var i,a;if(!(t instanceof Object)){return}if(T instanceof Object&&typeof T.identifier!=="undefined"){T=T.identifier}else if(typeof T!=="number"){return}a=t.length;for(i=0;i<a;i++){if(t[i].identifier===T){return t[i]}}};
sap.m.touch.countContained=function(t,e){var i,T=0,a,E,$;if(!(t instanceof Object)){return}if(e instanceof Element){e=jQuery(e)}else if(typeof e==="string"){e=jQuery.sap.byId(e)}else if(!(e instanceof jQuery)){return}E=e.children().length;a=t.length;for(i=0;i<a;i++){$=jQuery(t[i].target);if((E===0&&$.is(e))||(e[0].contains($[0]))){T++}}return T};
!function(l){l.getInvalidDate=function(){jQuery.sap.require("sap.ui.core.format.DateFormat");var d=sap.ui.core.format.DateFormat.getDateInstance().parse("");l.getInvalidDate=function(){return d};return d};l.getLocale=function(){var c=sap.ui.getCore().getConfiguration(),L=c.getFormatSettings().getFormatLocale().toString(),o=new sap.ui.core.Locale(L);c=L=null;l.getLocale=function(){return o};return o};l.getLocaleData=function(){jQuery.sap.require("sap.ui.model.type.Date");var L=sap.ui.core.LocaleData.getInstance(l.getLocale());l.getLocaleData=function(){return L};return L};l.isDate=function(v){return v&&Object.prototype.toString.call(v)=="[object Date]"&&!isNaN(v)};l.getIScroll=function(c){if(typeof window.iScroll!="function"||!(c instanceof sap.ui.core.Control)){return}var p,s;for(p=c;p=p.oParent;){s=p.getScrollDelegate?p.getScrollDelegate()._scroller:null;if(s&&s instanceof window.iScroll){return s}}};l.getScrollDelegate=function(c){if(!(c instanceof sap.ui.core.Control)){return}for(var p=c;p=p.oParent;){if(typeof p.getScrollDelegate=="function"){return p.getScrollDelegate()}}};l.ScreenSizes={phone:240,tablet:600,desktop:1024,xxsmall:240,xsmall:320,small:480,medium:560,large:768,xlarge:960,xxlarge:1120};l.BaseFontSize=jQuery(document.documentElement).css("font-size")}(sap.m);sap.m.URLHelper=(function($,w){function i(v){return Object.prototype.toString.call(v)=="[object String]"}function f(t){if(!t||!i(t)){return""}return t.replace(/[^0-9\+\*#]/g,"")}function a(t){if(!t||!i(t)){return""}t=t.split(/\r\n|\r|\n/g).join("\r\n");return w.encodeURIComponent(t)}return $.extend(new sap.ui.base.EventProvider(),{normalizeTel:function(t){return"tel:"+f(t)},normalizeSms:function(t){return"sms:"+f(t)},normalizeEmail:function(e,s,b,c,B){var p=[],u="mailto:",d=w.encodeURIComponent;i(e)&&(u+=d($.trim(e)));i(s)&&p.push("subject="+d(s));i(b)&&p.push("body="+a(b));i(B)&&p.push("bcc="+d($.trim(B)));i(c)&&p.push("cc="+d($.trim(c)));if(p.length){u+="?"+p.join("&")}return u},redirect:function(u,n){this.fireEvent("redirect",u);if(!n){w.location.href=u}else if(w.navigator.app&&typeof w.navigator.app.loadUrl=="function"){w.navigator.app.loadUrl(u,{openExternal:true})}else{w.open(u)}},attachRedirect:function(F,l){return this.attachEvent("redirect",F,l)},detachRedirect:function(F,l){return this.detachEvent("redirect",F,l)},triggerTel:function(t){this.redirect(this.normalizeTel(t))},triggerSms:function(t){this.redirect(this.normalizeSms(t))},triggerEmail:function(e,s,b,c,B){this.redirect(this.normalizeEmail.apply(0,arguments))},toString:function(){return"sap.m.URLHelper"}})}(jQuery,window));sap.m.BackgroundHelper=(function($,w){return{addBackgroundColorStyles:function(r,b,B){r.addClass("sapMGlobalBackgroundColor");if(b||B){r.addStyle("background-image","none");r.addStyle("filter","none")}if(b){r.addStyle("background-color",jQuery.sap.escapeHTML(b))}},renderBackgroundImageTag:function(r,c,C,b,R,o){r.write("<div id='"+c.getId()+"-BG' ");r.addClass(C);r.addClass("sapMGlobalBackgroundImage");if(b){r.addStyle("display","block");r.addStyle("background-image","url("+jQuery.sap.encodeHTML(b)+")");r.addStyle("background-repeat",R?"repeat":"no-repeat");if(!R){r.addStyle("background-size","cover");r.addStyle("background-position","center")}else{r.addStyle("background-position","left top")}}else{}if(o!==1){if(o>1){o=1}r.addStyle("opacity",o)}r.writeClasses();r.writeStyles();r.write("></div>")}}}());sap.m.ImageHelper=(function($,w){function c(C,p,v){if(v!==undefined){var s=C['set'+jQuery.sap.charToUpperCase(p)];if(typeof(s)==="function"){s.call(C,v);return true}}return false}return{getImageControl:function(i,I,p,P,C,a){if(I&&(I.getSrc()!=P['src'])){I.destroy();I=undefined}var o=I;if(!!o&&(o instanceof sap.m.Image||o instanceof sap.ui.core.Icon)){for(var b in P){c(o,b,P[b])}}else{if(!sap.m.Image){jQuery.sap.require("sap.m.Image")}var s=P;s['id']=i;o=sap.ui.core.IconPool.createControlByURI(s,sap.m.Image);o.setParent(p,null,true)}if(!!a){for(var l=0,r=a.length;l!==r;l++){o.removeStyleClass(a[l])}}if(!!C){for(var k=0,d=C.length;k!==d;k++){o.addStyleClass(C[k])}}return I=o}}}());jQuery.sap.setObject("sap.ui.layout.form.FormHelper",{createLabel:function(t){return new sap.m.Label({text:t})},createButton:function(i,p,t){var b=new sap.m.Button(i);b.attachEvent('press',p,t);return b},setButtonContent:function(b,t,T,i,I){b.setText(t);b.setTooltip(T);b.setIcon(i);b.setActiveIcon(I)},addFormClass:function(){return"sapUiFormM"},bFinal:true});
