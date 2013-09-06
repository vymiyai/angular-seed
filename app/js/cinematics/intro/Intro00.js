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
                var cccalback = function()
                {
                    $( '#dialogBox' ).unbind('click');
                    
                    var newState = new Intro01();
                    context.setState( newState );
                    context.execute();
                };
                
                $( '#dialogBox' ).click( cccalback );
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