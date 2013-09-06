'use strict';

function DialogBoxViewStateShowText()
{
    this.name = "Show Text";
    this.index = 0;

    this.click = function( context)
    {
        // do nothing.
    };
    
    this.showText = function( context )
    {
        if( this.index < context.message.length) 
        {
            $( '#dialogBox' ).append( context.message[ this.index++ ] );
            setTimeout( function(){ context.showText(); }, context.interval );
        }
        else
        {
            context.setState( new DialogBoxViewStateFullText() );
            context.showText();
        }
    };
    
};