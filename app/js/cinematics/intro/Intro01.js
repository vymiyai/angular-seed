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
                context.jumpTo( new Intro02() );
            };

            context.dialog( "Agora uma vagabunda aparece do lado da outra...", ccallback );
        };

        new CharacterView().instantiate( "sakuya2", "img/sazuyaizayoi.png", "sprite01" );
        context.summon( "sakuya2", callback );
    };
    
};