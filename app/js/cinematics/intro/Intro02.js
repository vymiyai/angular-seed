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
                $( '#dialogBox' ).unbind('click');
                    
                var newState = new Intro03();
                context.setState( newState );
                context.execute();
            };
                
            $( '#dialogBox' ).click( ccallback );
        };
        
        context.dismiss( "sakuya2", callback );
    };
    
};