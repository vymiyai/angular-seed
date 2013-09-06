'use strict';

function DialogBoxView()
{
    this.state = new DialogBoxViewStateEmptyText();
    
    this.fadeOutTime = 500;
    this.fadeInTime = 500;
    
    this.target = "dialogBox";
    this.interval = 30;
    
    this.message = "";
    this.callback = null;
    
    this.click = function()
    {
         this.state.click( this );
    };
    
    this.showText = function()
    {
        this.state.showText( this );
    };
    
    this.setState = function( newState )
    {
        this.state = newState;
    };

    this.setMessage = function( message, callback )
    {
        this.message = message;
        this.callback = callback;
    };
    
    
    

    this.summon = function( characterId, callback )
    {
        this.state.summon( this, characterId, callback );
    };
    
    this.dismiss = function( characterId, callback )
    {
        this.state.dismiss( this, characterId, callback );
    };
};