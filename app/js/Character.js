'use strict';

function Character( specs )
{
    this.specs = specs;
    this.basicSpeed = Math.random();
    
    // initialize character state.
    this.state = new CharacterStateAlive();
    
    this.execute = function( context )
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
    
};