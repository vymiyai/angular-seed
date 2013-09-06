'use strict';

function Intro03()
{
    this.name = "Intro03";
    this.execute = function( context )
    {
        var callback = function()
        {
            var ccallback = function()
            {
                $( '#dialogBox' ).unbind('click');
                    
                var newState = new Intro04();
                context.setState( newState );
                context.execute( context );
            };
                
            $( '#dialogBox' ).click( ccallback );
        };
        
        var dialogBox = new DialogBoxView();
        dialogBox.setText( "wololo wololo aeyoyolo wololo~", callback );
        dialogBox.showText();
    };
    
};