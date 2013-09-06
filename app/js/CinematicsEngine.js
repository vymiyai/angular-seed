'use strict';

function CinematicsEngine( cinematic )
{
    // initialize character state.
    this.state = cinematic;
    this.view = new StageView();
    
    this.execute = function()
    {
        this.state.execute( this );
    };
    
    this.setState = function( newState )
    {
        this.state = newState;
    };

    this.getCurrentState = function()
    {
        return this.state.name;
    };
    
    // stage view methods.
    this.summon = function( characterId, callback )
    {
        this.view.summon( characterId, callback );
    };
    
    this.dismiss = function( characterId, callback )
    {
        this.view.dismiss( characterId, callback );
    };

};