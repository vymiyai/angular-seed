'use strict';

function Intro03()
{
    this.name = "Intro03";
    this.execute = function( context )
    {
        var callback = function()
        {
            var newState = new Intro04();
        };
        
        $( '#dialogBox' ).click( callback );
    };
    
};