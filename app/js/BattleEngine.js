'use strict';

function BattleEngine( battleGroup01, battleGroup02 )
{
    this.turnCount = 0;
    this.battleGroup01 = battleGroup01;
    this.battleGroup02 = battleGroup02;
    this.elements = [];
    
    this.currentCharacter = 0;
    
    // initialize battle engine.
    this.state = new BattleEngineStateInitial();
    
    this.execute = function()
    {
        this.state.execute( this );
    };
    
    this.setState = function( newState )
    {
        this.state = newState;
    };
    
    this.getCurrentCharacter = function()
    {
        return this.elements[ this.currentCharacter ];
    };
    
    this.nextCharacter = function()
    {
        var index = this.currentCharacter;
        index++;
        this.currentCharacter = index % this.elements.length;
    };
    
    this.isGroupAlive = function( group )
    {
        for( var index in group )
        {
            var characterState = group[ index ].getCurrentState();
            if( characterState == "ALIVE" )
            {
                return true;
            }
        }
        
        return false;
    };
    
    this.isBattleFinished = function()
    {
        var battleGroup01Alive = this.isGroupAlive( this.battleGroup01 );
        var battleGroup02Alive = this.isGroupAlive( this.battleGroup02 );

        // return false only when both battle groups are alive.
        return !( battleGroup01Alive && battleGroup02Alive );
    };
    
    this.getTurnCount = function()
    {
        this.turnCount++;
        return this.turnCount;
    };
    
};