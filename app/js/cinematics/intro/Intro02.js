'use strict';

function Intro02()
{
    this.name = "Intro02";
    this.execute = function( context )
    {
        var callback = function()
        {
            var ccallback = function()
            {
                context.jumpTo( new Intro03() );
            };

            context.dialog( "A primeira vadia some agora...", ccallback );
        };
        
        context.dismiss( "sakuya", callback );
    };
    
};