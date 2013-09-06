'use strict';

function DialogBoxViewStateEmptyText()
{
    this.name = "Empty Text";

    this.click = function( context )
    {
        // do nothing.
    };
    
    this.showText = function( context )
    {
        $( '#dialogBox' ).text( "" );
        context.setState( new DialogBoxViewStateShowText() );
        context.showText();
    };
    
};