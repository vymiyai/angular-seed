'use strict';

function DialogBoxViewStateFullText()
{
    this.name = "Full Text";

    this.click = function( context )
    {
        $( '#dialogBox' )
            .text( "" )
            .unbind('click');
            
        context.callback();
    };
    
    this.showText = function( context )
    {
        $( '#dialogBox' )
            .text( context.message )
            .click( function(){ context.click(); } );
    };
    
};