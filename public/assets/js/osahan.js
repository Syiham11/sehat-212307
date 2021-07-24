/*
Template Name: Swiggiweb - Online Food Ordering Website Template
Author: Askbootstrap
Author URI: https://themeforest.net/user/askbootstrap
Version: 1.0
*/

(function($) {
    "use strict"; // Start of use strict

    $("body").on("contextmenu",function(e){
        return true;
    });
    // $(document).keydown(function(e){
    //      if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)){
    //        return true;
    //      }
    //      if(e.which === 123){
    //          return true;
    //      }
    //      if(e.metaKey){
    //          return true;
    //      }
    //      //document.onkeydown = function(e) {
    //      // "I" key
    //      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
    //          return true;
    //      }
    //      // "J" key
    //      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
    //          return true;
    //      }
    //      // "S" key + macOS
    //      if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //          return true;
    //      }
    //      if (e.keyCode == 224 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
    //          return true;
    //      }
    //      // "U" key
    //      if (e.ctrlKey && e.keyCode == 85) {
    //         return true;
    //      }
    //      // "F12" key
    //      if (event.keyCode == 123) {
    //         return true;
    //      }
    // });
	

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip();




    var $main_nav = $('#main-nav');
    var $toggle = $('.toggle');

    var defaultOptions = {
        disableAt: false,
        customToggle: $toggle,
        levelSpacing: 40,
        navTitle: 'Tokytoky',
        levelTitles: true,
        levelTitleAsBack: true,
        pushContent: '#container',
        insertClose: 2
    };

    // call our plugin
    var Nav = $main_nav.hcOffcanvasNav(defaultOptions);

})(jQuery); // End of use strict