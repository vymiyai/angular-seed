'use strict';

function Intro04()
{
    this.name = "Intro04";
    this.execute = function( context )
    {
        var callback = function()
        {
            alert( "Intro cinematics: END" );
        };
        
        context.dismiss( "sakuya", callback );
    };
    
    
    
};