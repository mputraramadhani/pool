function CRollingScore(){return this.rollingNumber=function(e,r,n,t,o){var c={score:n};createjs.Tween.get(c,{override:!0}).to({score:t},o,createjs.Ease.cubicOut).addEventListener("change",function(){e.refreshText(sprintf(r,Math.floor(c.score)))}).call(function(){c.removeAllEventListeners(),createjs.Tween.removeTweens(c)})},this}