'use strict';

function Intro01()
{
    this.name = "Intro01";
    this.execute = function( context )
    {
        var callback = function()
        {
            var ccallback = function()
            {
                $( '#dialogBox' ).unbind('click');
                    
                var newState = new Intro02();
                context.setState( newState );
                context.execute();
            };
                
            $( '#dialogBox' ).click( ccallback );
        };

        new CharacterView().instantiate( "sakuya2", "img/sazuyaizayoi.png", "sprite01" );
        context.summon( "sakuya2", callback );
    };
    
};