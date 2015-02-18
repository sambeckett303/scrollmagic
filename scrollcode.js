// init the controller
var controller = new ScrollMagic({
    globalSceneOptions: {
        triggerHook: "onLeave"
    }
});
function stopRotation() {
    $('#actualball').css('-webkit-animation', '');
    $('#actualball').css('-moz-animation', '');
    $('#actualball').css('animation', '');
};
function getVerticalHeight() {
  var myHeight = 0;
  if( typeof( window.innerWidth ) == 'number' ) {
    //Non-IE
    myHeight = window.innerHeight;
  } else if( document.documentElement && ( document.documentElement.clientWidth || document.documentElement.clientHeight ) ) {
    //IE 6+ in 'standards compliant mode'
    myHeight = document.documentElement.clientHeight;
  } else if( document.body && ( document.body.clientWidth || document.body.clientHeight ) ) {
    //IE 4 compatible
    myHeight = document.body.clientHeight;
  }
  return myHeight;
}

$(document).ready(function(){
    var docHeight = getVerticalHeight();
    var initialBallHeight = docHeight*0.25;
    var initialSnowHeight = docHeight*0.38;
    var snow1 = initialSnowHeight+110;
    var snow2 = snow1-30;
    var snow3 = snow2-100;
    var snow4 = snow3+200;
    var firstSnowHeight = snow1+"px";
    var secondSnowHeight = snow2+"px";
    var thirdSnowHeight = snow3+"px";
    var fourthSnowheight = snow4+"px";
    var date1Height = docHeight*(0.1);
    var date2Height = docHeight*(0.28);
    var date3Height = docHeight*(0.36);
    var date4Height = docHeight*(0.41);
    var date5Height = docHeight*(0.44);
    var date6Height = docHeight*(0.52);
    var date7Height = docHeight*(0.62);
    var date8Height = docHeight*(0.65);
    var date1String = date1Height+"px";
    var date2String = date2Height+"px";
    var date3String = date3Height+"px";
    var date4String = date4Height+"px";
    var date5String = date5Height+"px";
    var date6String = date6Height+"px";
    var date7String = date7Height+"px";
    var date8String = date8Height+"px";
    var stopRot = stopRotation();

    var pinani = new TimelineMax()
        .add([
            TweenMax.to("#myname", 2, {scale: 5, rotation: 360, ease: Linear.easeNone}),
            TweenMax.to("#animated-example", 0.5, {css:{opacity:"0"}, ease: Linear.easeNone}),
            TweenMax.to("#arrow2", 0.5, {css:{opacity:"0"}, ease: Linear.easeNone}),
            TweenMax.to("#arrow3", 0.5, {css:{opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#myname", .5, {scale: 15, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#snowboard", 3, {css:{top:"-920px", left:"73%"}}),
            TweenMax.to("#a", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.4}),
            TweenMax.to("#b", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.5}),
            TweenMax.to("#o", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.6}),
            TweenMax.to("#u", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.7}),
            TweenMax.to("#t", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.8}),
            TweenMax.to("#m", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 0.9}),
            TweenMax.to("#e", .5, {css:{top:"-50px"}, ease: Bounce.easeOut, delay: 1})
        ])
        .add(TweenMax.to("#snowboard", .3, {css:{top:"-830px"}}))
        .add([
            TweenMax.to("#snowboard", 3, {css:{left:"-170px"}}),
            TweenMax.to("#s1", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0}),
            TweenMax.to("#t2", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.1}),
            TweenMax.to("#s", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.2}),
            TweenMax.to("#e2", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.3}),
            TweenMax.to("#r", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.4}),
            TweenMax.to("#e1", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.5}),
            TweenMax.to("#t1", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.6}),
            TweenMax.to("#n", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.7}),
            TweenMax.to("#i", .5,{css:{top:"50px"}, ease: Bounce.easeOut, delay: 0.8})

        ])
        .add([
            TweenMax.to("#soccerball", 3, {css:{top:initialBallHeight}, ease: Bounce.easeOut}),
            TweenMax.to("#soccerball", 3, {css:{left:"61%"}, onComplete: stopRot}),
            TweenMax.to("#soccer", 1, {css:{visibility:"visible"}, delay: 1.1})
        ])
        .add([
            TweenMax.to("#stick", 1.5, {css:{left:"180px"}, ease: Linear.easeNone}),
            TweenMax.to("#hockey", 1, {css:{"-webkit-transform" : "rotateY(0deg)", transform: "rotateY(0deg)", visibility: "visible", opacity: "1"}, delay: 0.85, ease: Linear.easOut})
        ])
        .add([
            TweenMax.to("#snow", 0.6, {css:{left:"175px"}, ease: Linear.easeNone})
            
        ])
        .add([
            TweenMax.to("#snow", 1, {css:{top:firstSnowHeight,left:"390px"}, ease: Linear.easeNone}),
            TweenMax.to("#stick", 0.7, {rotation: 20, transformOrigin:"left 50%", ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#snow", .2, {css:{top:secondSnowHeight,left:"450px"}})
        ])
        .add([
            TweenMax.to("#snow", .4, {css:{top:thirdSnowHeight,left:"700px"}, ease: Linear.easeNone}),
            TweenMax.to("#snow", .4, {rotation: -180, transformOrigin:"0% 50%", ease: Linear.easeNone}),
            TweenMax.to("#stick", .4, {rotation: 0, transformOrigin:"left 50%", ease: Bounce.easeOut}),
            TweenMax.to("#snowboarding", .4, {css:{opacity:"0.5"}}),
            TweenMax.to("#snowboarding", .4, {rotation: -180, transformOrigin:"left% 50%", ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#snow", .25, {css:{top:fourthSnowheight,left:"64%"}, ease: Linear.easeNone}),
            TweenMax.to("#snow", .24, {rotation: -350, transformOrigin:"0% 50%", ease: Linear.easeNone}),
            TweenMax.to("#snowboarding", .2, {css:{opacity:"1"}}),
            TweenMax.to("#snowboarding", .2, {rotation: -360, transformOrigin:"left% 50%", ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#biker", 2, {css:{left:"220px"}}),
            TweenMax.to("#biking", 1, {css:{left:"50%"}, ease: Bounce.easeOut, delay: 1})
        ])
        .add([
            TweenMax.to("#first-page", 3, {css:{top:"-100%"}}),//, ease: Linear.easeNone}),
            TweenMax.to("#second-page", 3, {css:{top:"0%"}})//, ease: Linear.easeNone}})
        ])
        .add([
            TweenMax.to("#2spinner", 1.5, {css:{left:"50%", "-webkit-transform":"translate(-50%, 0)"}, ease: Linear.easeNone}),//"533px"}}),
            TweenMax.to("#e3", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.4}),
            TweenMax.to("#d", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.5}),
            TweenMax.to("#u2", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.6}),
            TweenMax.to("#c", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.7}),
            TweenMax.to("#a2", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.8}),
            TweenMax.to("#t3", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 0.9}),
            TweenMax.to("#i2", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 1}),
            TweenMax.to("#o2", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 1.1}),
            TweenMax.to("#n2", .5, {css:{top:"100px", visibility:"visible"}, ease: Bounce.easeOut, delay: 1.2}),
        ])
        .add([
            TweenMax.to("#timeline-circle", .6, {css:{opacity:"1", visibility:"visible"}, ease: Linear.easeNone}),
            TweenMax.to("#line", .6, {css:{opacity:"1", visibility:"visible"}, ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#2spinner", 1.5, {css:{left:"1800px",  "-webkit-transform":"translate(-50%, 0)"}, ease: Linear.easeNone}),
            TweenMax.to("#w", .5, {css:{top:"100px", visibility:"visible"}, ease:Bounce.easeOut, delay: 0.2}),
            TweenMax.to("#o3", .5, {css:{top:"100px", visibility:"visible"}, ease:Bounce.easeOut, delay: 0.3}),
            TweenMax.to("#r2", .5, {css:{top:"100px", visibility:"visible"}, ease:Bounce.easeOut, delay: 0.4}),
            TweenMax.to("#k", .5, {css:{top:"100px", visibility:"visible"}, ease:Bounce.easeOut, delay: 0.5}),
        ])
        .add([
            TweenMax.to("#timeline-circle", 1, {css:{top:date1String}, ease: Linear.easeNone}),
            TweenMax.to("#timeline-circle", 1, {scale: 0.8, ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#date1", 1, {css:{visibility:"visible", opacity: "1"}}),
            TweenMax.to("#date2", 1, {css:{visibility:"visible", opacity: "1"}})
        ])
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date2String}, ease: Linear.easeNone}),
            TweenMax.to("#date1", 1, {css:{ opacity: "0"}, ease: Linear.easeNone}),
            TweenMax.to("#date2", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date3", 1, {css:{visibility:"visible", opacity:"1"}, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date3String}, ease: Linear.easeNone}),
            TweenMax.to("#date3", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date4", 1, {css:{visibility:"visible", opacity:"1"}, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date4String}, ease: Linear.easeNone}),
            TweenMax.to("#date4", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date5", 1, {css:{visibility:"visible", opacity:"1"}}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date5String}, ease: Linear.easeNone}),
            TweenMax.to("#date5", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date6", 1, {css:{visibility:"visible", opacity:"1"}}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date6String}, ease: Linear.easeNone}),
            TweenMax.to("#date6", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date7", 1, {css:{visibility:"visible", opacity:"1"}, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date7String}, ease: Linear.easeNone}),
            TweenMax.to("#date7", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date8", 1, {css:{visibility:"visible", opacity:"1"}, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{top:date8String}, ease: Linear.easeNone}),
            TweenMax.to("#date8", 1, {css:{ opacity:"0"}, ease: Linear.easeNone})
        ])
        .add(TweenMax.to("#date9", 1, {css:{visibility:"visible", opacity:"1"}, ease: Linear.easeNone}))
        .add([
            TweenMax.to("#timeline-circle", 2, {css:{opacity: "0",top:"600px"}, ease: Linear.easeNone}),
            TweenMax.to("#date9", 1, {css:{ opacity: "0"}, ease: Linear.easeNone})
        ])
        .add([
            TweenMax.to("#second-page", 3, {css:{top:"-100%"}}),
            TweenMax.to("#third-page", 3, {css:{top:"0%"}})
        ])
        .add([
            TweenMax.to("#cloud1", 12.5, {css:{left:"-120px"}, ease: Linear.easeNone}),
            TweenMax.to("#cloud2", 12.5, {css:{left:"550px"}, ease: Linear.easeNone}),
            TweenMax.to("#cloud3", 12.5, {css:{left:"200px"}, ease: Linear.easeNone}),
            TweenMax.to("#cloud4", 12.5, {css:{left:"780px"}, ease: Linear.easeNone}),
            TweenMax.to("#skyline", 12.5, {css:{left:"33%"}, ease: Linear.easeNone}),

            TweenMax.to("#ground1", 3, {css:{left:"-1350px"}, ease: Linear.easeNone}),
            TweenMax.to("#bush1", 3, {css:{left:"-1150px"}, ease: Linear.easeNone}),
            TweenMax.to("#bush2", 3, {css:{left:"600px"}, ease: Linear.easeNone}),
            TweenMax.to("#tree1", 3, {css:{left:"-500px"}, ease: Linear.easeNone}),
            TweenMax.to("#tree2", 3, {css:{left:"450px"}, ease: Linear.easeNone}),
            TweenMax.to("#tree3", 3, {css:{left:"1450px"}, ease: Linear.easeNone}),
            TweenMax.to("#sect1", 3, {css:{left:"-170px"}, ease: Linear.easeNone}),
            TweenMax.to("#sect2", 3, {css:{left:"800px"}, ease: Linear.easeNone}),
            TweenMax.to("#ground2", 3, {css:{left:"0px"}, ease: Linear.easeNone}),
            TweenMax.to("#ground3", 3, {css:{left:"1350px"}, ease: Linear.easeNone}),

            TweenMax.to("#ground2", 3, {css:{left:"-1350px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#ground3", 3, {css:{left:"0px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#ground4", 3, {css:{left:"1350px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#sect1", 3, {css:{left:"-1520px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#sect2", 3, {css:{left:"-550px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#sect3", 3, {css:{left:"420px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#sect4", 3, {css:{left:"1300px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#tree2", 3, {css:{left:"-900px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#tree3", 3, {css:{left:"100px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#bush2", 3, {css:{left:"-750px"}, ease: Linear.easeNone, delay: 3}),
            TweenMax.to("#bush3", 3, {css:{left:"1000px"}, ease: Linear.easeNone, delay: 3}),     

            TweenMax.to("#ground3", 3, {css:{left:"-1350px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#ground4", 3, {css:{left:"0px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#ground5", 3, {css:{left:"1350px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#sect2", 3, {css:{left:"-1900px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#sect3", 3, {css:{left:"-930px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#sect4", 3, {css:{left:"-50px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#sect5", 3, {css:{left:"900px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#tree3", 3, {css:{left:"-1250px"}, ease: Linear.easeNone, delay: 6}),
            TweenMax.to("#tree4", 3, {css:{left:"575px"}, ease: Linear.easeNone, delay: 6}),
            //TweenMax.to("#tree5", 3, {css:{left:"1450px"}, ease: Linear.easeNone, delay: 6}), 
            TweenMax.to("#bush3", 3, {css:{left:"-350px"}, ease: Linear.easeNone, delay: 6}),

            TweenMax.to("#ground4", 3, {css:{left:"-1350px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#ground5", 3, {css:{left:"0px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#ground6", 3, {css:{left:"1350px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#sect4", 3, {css:{left:"-1400px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#sect5", 3, {css:{left:"-450px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#tree4", 3, {css:{left:"-775px"}, ease: Linear.easeNone, delay: 9}),
            TweenMax.to("#tree5", 3, {css:{left:"200px"}, ease: Linear.easeNone, delay:9}),

            TweenMax.to("#ground5", 0.5, {css:{left:"-225px"}, ease: Linear.easeNone, delay: 12}),
            TweenMax.to("#ground6", 0.5, {css:{left:"1125px"}, ease: Linear.easeNone, delay: 12}),
            TweenMax.to("#sect5", 0.5, {css:{left:"-675px"}, ease: Linear.easeNone, delay: 12}),
            TweenMax.to("#tree5", 0.5, {css:{left:"-25px"}, ease: Linear.easeNone, delay: 12}) 
        ])
        .add([
            TweenMax.to("#third-page", 3, {css:{top:"-100%"}}),
            TweenMax.to("#ground-page", 3, {css:{top:"0%"}}),
            TweenMax.to("#ground-page", 3, {css:{top:"-100%"}, delay: 3}),
            TweenMax.to("#contact-page", 3, {css:{top:"0%"}, delay: 3})
        ])
        //.add([
            
        //])
        // panel slide color
        /*
        .add([
            TweenMax.to("#slide h3:first-child", 0.2, {autoAlpha: 0}),
            TweenMax.from("#slide h3:last-child", 0.2, {autoAlpha: 0})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "yellow"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "blue"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "green"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "red"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "red"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "white"})
        ])
        .add([
            TweenMax.to("#slide", 0.3, {backgroundColor: "#c7e1ff"}),
            TweenMax.to("#slide h3:last-child", 0.3, {color: "black"})
        ])

        // panel slide translateX
        //.add(TweenMax.to("#slide-dos", 1, {transform: "translateX(0)"}))

        // panel unpinned
        .add(TweenMax.from("#unpin", .5, {top: "100%"}));*/


    // panel section pin
    new ScrollScene({
            triggerElement: "section#pin",
            duration:  5000
            //$(window).height()
        })
        .setTween(pinani)
        .setPin("section#pin")
        .addTo(controller)
        .addIndicators();
    });
