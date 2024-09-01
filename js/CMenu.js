function CMenu(){var i,n,o,_,l,a,r,u,c,d,g,E,S,A,h=null,f=null;this._init=function(){r=createBitmap(s_oSpriteLibrary.getSprite("bg_menu")),s_oStage.addChild(r),_={x:CANVAS_WIDTH/2-250,y:CANVAS_HEIGHT-170},(c=new CGfxButton(_.x,_.y,s_oSpriteLibrary.getSprite("vs_pc_panel"),s_oStage)).addEventListener(ON_MOUSE_UP,this._onButPlaySingle,this),l={x:CANVAS_WIDTH/2+250,y:CANVAS_HEIGHT-170},(d=new CGfxButton(l.x,l.y,s_oSpriteLibrary.getSprite("vs_man_panel"),s_oStage)).addEventListener(ON_MOUSE_UP,this._onButPlayTwo,this);var e=s_oSpriteLibrary.getSprite("but_lang");a=!1===DISABLE_SOUND_MOBILE||!1===s_bMobile?(s=s_oSpriteLibrary.getSprite("audio_icon"),i={x:CANVAS_WIDTH-s.height/2-10,y:s.height/2+10},(g=new CToggle(i.x,i.y,s,s_bAudioActive,s_oStage)).addEventListener(ON_MOUSE_UP,this._onAudioToggle,this),{x:i.x-e.width/NUM_LANGUAGES-10,y:i.y}):{x:CANVAS_WIDTH-s.width/4-10,y:s.height/2+10},(A=new CButLang(a.x,a.y,NUM_LANGUAGES,s_iCurLang,e,s_oStage)).addEventListener(ON_SELECT_LANG,this._onChangeLang,this);var t=window.document,e=t.documentElement;h=e.requestFullscreen||e.mozRequestFullScreen||e.webkitRequestFullScreen||e.msRequestFullscreen,f=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen,(h=!1===ENABLE_FULLSCREEN?!1:h)&&screenfull.isEnabled&&(s=s_oSpriteLibrary.getSprite("but_fullscreen"),o={x:n.x+s.width/2+10,y:n.y},(S=new CToggle(o.x,o.y,s,s_bFullscreen,s_oStage)).addEventListener(ON_MOUSE_UP,this._onFullscreenRelease,this));var s=s_oSpriteLibrary.getSprite("logo_menu");(u=createBitmap(s)).regX=s.width/2,u.regY=s.height/2,u.x=-u.regX,u.y=CANVAS_HEIGHT/2-160,s_oStage.addChild(u),createjs.Tween.get(u,{override:!0}).to({x:CANVAS_WIDTH/2},1e3,createjs.Ease.cubicOut),s_oLocalStorage.isUsed()||((s=new CAreYouSurePanel).changeMessage(TEXT_ERR_LS,-170),s.setOneButton()),(E=new createjs.Shape).graphics.beginFill("black").drawRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT),s_oStage.addChild(E),createjs.Tween.get(E).to({alpha:0},1e3,createjs.Ease.cubicOut),$("#canvas_upper_3d").css("pointer-events","none"),sizeHandler()},this._onExit=function(e){E.on("click",function(){}),createjs.Tween.get(u,{override:!0}).to({x:CANVAS_WIDTH+u.regX},1e3,createjs.Ease.cubicIn),E.visible=!0,createjs.Tween.get(E).to({alpha:1},1e3,createjs.Ease.cubicOut).call(e)},this.unload=function(){c.unload(),d.unload(),!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||(g.unload(),g=null),h&&screenfull.isEnabled&&S.unload(),A.unload(),E.removeAllEventListeners(),s_oStage.removeAllChildren(),s_oMenu=null},this.refreshButtonPos=function(){!1!==DISABLE_SOUND_MOBILE&&!1!==s_bMobile||g.setPosition(i.x-s_iOffsetX,s_iOffsetY+i.y),h&&screenfull.isEnabled&&S.setPosition(o.x+s_iOffsetX,o.y+s_iOffsetY),(void 0).setPosition(n.x+s_iOffsetX,n.y+s_iOffsetY),c.setPosition(_.x,_.y-s_iOffsetY),d.setPosition(l.x,l.y-s_iOffsetY),u.scaleX=u.scaleY=linearFunction(s_iOffsetY,0,EDGEBOARD_Y,1,.9),A.setPosition(a.x-s_iOffsetX,a.y+s_iOffsetY)},this._onButPlaySingle=function(){s_iPlayerMode=GAME_MODE_CPU,s_iGameMode=GAME_MODE_EIGHT,this._onExit(function(){s_oMenu.unload(),s_oMain.gotoDifficultyMenu()})},this._onButPlayTwo=function(){s_iPlayerMode=GAME_MODE_TWO,s_iGameMode=GAME_MODE_EIGHT,this._onExit(function(){s_oMenu.unload(),s_oMain.gotoGame(),$(s_oMain).trigger("start_session")})},this._onChangeLang=function(e){s_iCurLang=e,refreshLanguage()},this._onButCreditsRelease=function(){new CCreditsPanel},this._onAudioToggle=function(){Howler.mute(s_bAudioActive),s_bAudioActive=!s_bAudioActive},this.resetFullscreenBut=function(){h&&screenfull.isEnabled&&S.setActive(s_bFullscreen)},this._onFullscreenRelease=function(){s_bFullscreen?f.call(window.document):h.call(window.document.documentElement),sizeHandler()},(s_oMenu=this)._init()}var s_oMenu=null;