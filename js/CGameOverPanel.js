function CGameOverPanel(e){var n,s,i,r,a,o,h,_,c,T,d,l=e;this._init=function(){n=new Array,s=new Array,(d=new createjs.Container).visible=!1,l.addChild(d),(T=new createjs.Shape).graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),T.alpha=0,i=T.on("mousedown",function(){}),d.addChild(T),(c=new createjs.Container).scale=.01,c.x=CANVAS_WIDTH/2,c.y=CANVAS_HEIGHT/2,d.addChild(c);var e=s_oSpriteLibrary.getSprite("msg_box"),t=createBitmap(e);c.addChild(t);t=e.width-300;o=new CTLText(c,20+e.width/2-t/2,e.height/2-100,t,80,80,"center","#fff",FONT_GAME,1,0,0,"",!0,!0,!1,!1),h=new CTLText(c,20+e.width/4-t/2,e.height/2-110,800,100,40,"center","#fff",FONT_GAME,1,0,0," ",!0,!0,!0,!1),_=new CTLText(c,20+e.width/4-t/2,e.height/2,800,100,40,"center","#fff",FONT_GAME,1,0,0," ",!0,!0,!0,!1),(r=new CGfxButton(e.width/2-250,e.height-100,s_oSpriteLibrary.getSprite("but_home"),c)).addEventListener(ON_MOUSE_UP,this._onHome,this),(a=new CGfxButton(e.width/2+250,e.height-100,s_oSpriteLibrary.getSprite("but_restart"),c)).addEventListener(ON_MOUSE_UP,this._onRestart,this),a.pulseAnimation(),c.regX=e.width/2,c.regY=e.height/2},this.addEventListener=function(e,t,i){n[e]=t,s[e]=i},this.unload=function(){T.off("mousedown",i),r.unload(),a.unload()},this.show=function(e,t){o.refreshText(e),t&&(o.setOffsetY(-100),h.refreshText(TEXT_FINAL_SCORE+"\n"+t),_.refreshText(sprintf(TEXT_BEST_SCORE,s_iBestScore)),s_oLocalStorage.saveBestScore(t),$(s_oMain).trigger("share_event",t),$(s_oMain).trigger("save_score",t)),d.visible=!0,createjs.Tween.get(T).to({alpha:.7},500),createjs.Tween.get(c).to({scale:1},1e3,createjs.Ease.elasticOut)},this._blockButtons=function(){r.block(!0),a.block(!0)},this._onRestart=function(){this._blockButtons(),n[ON_RESTART]&&n[ON_RESTART].call(s[ON_RESTART])},this._onHome=function(){this._blockButtons(),n[ON_EXIT_GAME]&&n[ON_EXIT_GAME].call(s[ON_EXIT_GAME])},this._init()}