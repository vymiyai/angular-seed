'use strict';

/* Services */

angular.module( 'myApp.services', [] ).
    value('version', '0.1').
    service('LibraryLevel', function(){
        var level = 'library';
        
        return {
            get:function(){ return level; },
            set:function( newLevel ){ level = newLevel; }
        };
    }).
    // service que mostra os botoes do menu inicial. deveria ser um value.
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
    // service que provem os profiles de cada personagem.
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
    });
