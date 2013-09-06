'use strict';

function Intro04()
{
    this.name = "Intro04";
    this.execute = function( context )
    {
        var callback = function()
        {
            var ccallback = function()
            {
                alert( "Intro cinematics: END" );
            };
                
            $( '#visibleArea' ).fadeOut( 1000, ccallback );
        };
        
        context.dismiss( "sakuya2", callback );
    };
    
    
    
};