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
    
    this.setNextCharacter = function()
    {
        var index = this.currentCharacter;
        index++;
        this.currentCharacter = index % this.elements.length;
    };
    
    this.isBattleFinished = function()
    {
        var index;
        var battleGroup01Alive = false;
        var battleGroup02Alive = false;
        
        for( index in this.battleGroup01 )
        {
            var characterState = this.battleGroup01[ index ].getCurrentState();
            if( characterState == "CharacterStateAlive" )
            {
                battleGroup01Alive = true;
                break;
            }
        }
        
        for( index in this.battleGroup02 )
        {
            var characterState = this.battleGroup02[ index ].getCurrentState();
            if( characterState == "CharacterStateAlive" )
            {
                battleGroup02Alive = true;
                break;
            }
        }
        
        // return false only when both battle groups are alive.
        return !( battleGroup01Alive && battleGroup02Alive );
        
        /*
        if( Math.random() < 0.9 )
            return false;
        else
            return true;
        */
    };
    
    this.getTurnCount = function()
    {
        this.turnCount++;
        return this.turnCount;
    };
    
};