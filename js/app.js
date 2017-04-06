// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
})

.controller("AppCtrl", function($scope, $window, $ionicModal,$timeout){

$scope.fullscreen=false;

if (window.innerWidth < 650) {
$scope.fullscreen=true;
    }

if(String(window.location).includes('typemymusic.com\/?')){
$scope.fullscreen=true;
}

document.getElementById('music').value = '`     k      ,      ¡         •        , 7  %  ^  7   8 ,  ¡       §       ,      ﬁ           ,    å     ¢      , 3  !   @   3  4    , 2   S  !   2   3   ,     ⁄      .';
document.getElementById('music').focus()



$scope.facebook=function(){$window.open("http://www.facebook.com/typemymusic")};
$scope.twitter=function(){$window.open("https://twitter.com/intent/tweet?text=Check%20out%20the%20best%20music%20notation%20font%20on%20the%20web,%20TypeMyMusic!%20www.typemymusic.com")};
$scope.iconic=function(){$window.open("http://www.iconicpasswords.com")};

$scope.synonymy=function(){

if (navigator.appVersion.indexOf("iPhone") > 0 ){
$window.open("https://itunes.apple.com/us/app/synonymy-lite/id938998017?ls=1&mt=8");
}else if(navigator.appVersion.indexOf("Android") > 0){
$window.open("https://play.google.com/store/apps/details?id=air.com.jarvisfilms.synonymylite");
}else{
$window.open("http://www.synonymy-game.com");
}

};

$scope.fullscreenpop=function(){
  $scope.fullscreen=true;
  $timeout(function(){
      document.getElementById('musicsand').value = '                   `    k  ,     ¡       •    ,  7 % ^ 7 8 ,   ¡      §       ,     ﬁ         ,  å    ¢  , 3 ! @ 3 4, 2S!23,    ⁄   .';
document.getElementById('musicsand').focus()
  },50)


}

$scope.closepopup=function(){

// mobile site
  if (true){}
// mobile site

  $scope.fullscreen=false;
}



/*
    $ionicModal.fromTemplateUrl('mobile.html', {
      scope: $scope,
      backdropClickToClose: true,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.Modal = modal;
    });

    $scope.openMobile = function() {

      $scope.Modal.show();

    };

    $scope.closeMobile = function() {
$scope.Modal.hide();
    };
*/


$scope.jarvisfilms=function(){$window.open("http://www.jarvisfilms.com", '_blank')};

$scope.birdsupstairs = function() {
$window.open('https://www.youtube.com/embed/2rI_em4MscE?rel=0&autoplay=1','_blank')
    };

    $scope.github = function() {
$window.open('https://www.youtube.com/embed/2rI_em4MscE?rel=0&autoplay=1','_blank')
    };

      $scope.print = function() {
window.print();
    };

$scope.download = function() {
$window.open('TypeMyMusic_1.1.ttf','_self')
    };






});
