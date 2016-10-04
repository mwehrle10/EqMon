'use strict';

(function( ) {
    var app = {
        data: { },
        prms: [ ],
    mapTitle: "",
    opSystem: ""
    };

    var startup = function( ) {
        $(function( ) {
            app.mobileApp = new kendo.mobile.Application( document.body, {
            useNativeScrolling: true,
                    transition: 'slide',
                          skin: 'nova',
                       initial: "views/Index.view.html"
            });
        });
    };

    if (window.cordova) {
        document.addEventListener('deviceready', function( ) {
            if (navigator && navigator.splashscreen) {
                navigator.splashscreen.hide( );
            }
            startup( );
        }, false);
    } else {
        startup( );
    }

    app.keepActiveState = function _keepActiveState( item ) {
        var currentItem = item;
        $('#navigation-container li.active').removeClass( 'active' );
        currentItem.addClass( 'active' );
    };

    window.app = app;
    if ( window.cordova.platformId === "ios" ) {
        $ ( "body" ).addClass ( "iOS" );
        app.opSystem = "ios";
    } 
    else {
       app.opSystem = "android"; 
    }

    app.isOnline = function( ) {
        if ( !navigator || !navigator.connection ) {
            return true;
        } else {
            return navigator.connection.type !== 'none';
        }
    };
}( ));

// START_CUSTOM_CODE_kendoUiMobileApp
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_kendoUiMobileApp