'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module( 'myApp.services', [] ).
    value('version', '0.1').
    service('Buttons', function(){
        var buttons = {
            menu:[
                {
                    html:"Toggle Precondition 1",
                    href:"#/view1"
                },
                {
                    html:"Toggle Precondition 2",
                    href:"#/view2"
                },
                {
                    html:"Library",
                    href:"#/library"
                }]
        };
        
        return buttons;
    }).
    service('Profiles', function(){
        var profiles = {
                "Vats Darkagma": {
                    name:"Vats Darkagma",
                    src:"img/ore.png",
                    description:"The two-kilo whitefish."
                },
                "Vennrod Chietzcotl": {
                    name:"Vennrod Chietzcotl",
                    src:"img/ore.png",
                    description:"The Deuterius' proud captain."
                }
            };
        
        return profiles;
    }).
    service('LibraryProfile', function(){
        var profile = {};
        
        return {
            get:function(){ return profile; },
            set:function( newProfile ){ profile = newProfile; },
        };
    });
