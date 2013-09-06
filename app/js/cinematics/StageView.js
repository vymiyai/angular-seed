'use strict';

function StageView()
{
    this.state = new StageViewStateZeroCharacters();
    this.fadeOutTime = 250;
    this.fadeInTime = 250;

    this.setState = function( newState )
    {
        this.state = newState;
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