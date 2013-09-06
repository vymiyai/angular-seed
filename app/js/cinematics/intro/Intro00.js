'use strict';

function Intro00()
{
    this.name = "Intro00";
    this.execute = function( context )
    {
        var callback = function()
        {
            var ccallback = function()
            {
                var cccallback = function()
                {
                    context.jumpTo( new Intro01() );
                };

                context.dialog( "Esta é a primeira tela da introdução...", cccallback );
            };

            new CharacterView().instantiate( "sakuya", "img/sazuyaizayoi.png", "sprite02" );
            context.summon( "sakuya", ccallback );
        };
        
        // preload all required stuff.
        $.ajax({
            url: "img/sazuyaizayoi.png",
            success: callback
        });
    };
    
};