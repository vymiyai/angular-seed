'use strict';

function Intro03()
{
    this.name = "Intro03";
    this.execute = function( context )
    {
        var callback = function()
        {
            context.jumpTo( new Intro04() );
        };
        
        context.dialog( "Diálogo sem sentido para encher linguiça.", callback );
    };
    
};