'use strict';

function DialogBoxViewStateFullText()
{
    this.name = "Full Text";

    this.click = function( context )
    {
        context.callback();
    };
    
    this.showText = function( context )
    {
        $( '#dialogBox' ).text( context.message );
        $( '#dialogBox' ).click( function(){ context.click(); } );
    };
    
};