'use strict';

function Intro04()
{
    this.name = "Intro04";
    this.execute = function( context )
    {
        var callback = function()
        {
            alert( "Intro cinematics: END" );
            
            // do something else.
        };
        
        $( '#dialogBox' ).click( callback );
    };
    
};