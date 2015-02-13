function refreshPage () {
  var page_y = document.getElementsByTagName("body")[0].scrollTop;
  window.location.href = window.location.href.split('?')[0] + '?page_y=' + page_y;
}
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
function setVerticalCSS() {
  var myHeight = getVerticalHeight();
  var soccerheight = myHeight*(0.25);
  var bikingheight = myHeight*(0.75);
  var stickheight = myHeight*(0.3);
  var snowheight = myHeight*(0.38);
  var snow2height = myHeight*(0.6);
  var hockeyheight = myHeight*(0.5);
  var soccerpixels = soccerheight + "px";
  var bikingpixels = bikingheight + "px";
  var stickpixels = stickheight + "px";
  var snowboarding = snow2height + "px";
  var hockeypixels = hockeyheight + "px";
  var snowpixels = snowheight + "px";
  if(myHeight < 650) {
    var timelineHeight = myHeight*(0.625);
  } else {
    //TODO: Test this number for higher screens
    var timelineHeight = myHeight*(1.23);
  }
  
  var date1Height = myHeight*(0.31);
  var date2Height = myHeight*(0.33625);
  var date3Height = myHeight*(0.3625);
  var date4Height = myHeight*(0.38875);
  var date5Height = myHeight*(0.415);
  var date6Height = myHeight*(0.44125);
  var date7Height = myHeight*(0.38875);
  var date8Height = myHeight*(0.52);

  var date1 = date1Height + "px";
  var date2 = date2Height+"px";
  var date3 = date3Height+"px";
  var date4 = date4Height+"px";
  var date5 = date5Height+"px";
  var date6 = date6Height+"px";
  var date7 = date7Height+"px";
  var date8 = date8Height+"px";

  var bannerHeight = myHeight*(0.3);
  var bannerString = bannerHeight+"px";

  $("#soccer").css("top", soccerpixels);
  $("#biking").css("top", bikingpixels);
  $("#biker").css("top", bikingpixels);
  $("#stick").css("top", stickpixels);
  $("#snow").css("top", snowpixels);
  $("#hockey").css("top", hockeypixels);
  $("#snowboarding").css("top",snowboarding);
  $("#line").css("height",timelineHeight);
  
  $("#date1").css("top",date1);
  $("#date2").css("top",date1);
  $("#date3").css("top",date2);
  $("#date4").css("top",date3);
  $("#date5").css("top",date4);
  $("#date6").css("top",date5);
  $("#date7").css("top",date6);
  $("#date8").css("top",date7);
  $("#date9").css("top",date8);

  $("#sect1").css("top",bannerString);
  $("#sect2").css("top",bannerString);
  $("#sect3").css("top",bannerString);
  $("#sect4").css("top",bannerString);
  $("#sect5").css("top",bannerString);
  
}
window.onload = function () {
  if ( window.location.href.indexOf('page_y') != -1 ) {
    var match = window.location.href.split('?')[1].split("&")[0].split("=");
    document.getElementsByTagName("body")[0].scrollTop = match[1];
  }
}
function stopRotation() {
    $('#actualball').css('-webkit-animation', '');
    $('#actualball').css('-moz-animation', '');
    $('#actualball').css('animation', '');
};

setVerticalCSS();
$(window).resize(function() {
    refreshPage();
    setVerticalCSS();
});