'use strict';

function BattleEngineStateRun()
{
    this.name = "RUN";
    this.execute = function( context )
    {
        // do stuff with state.
        var character = context.getCurrentCharacter();
        character.execute( this );
        context.nextCharacter();
        
        if( context.isBattleFinished() )
        {
            context.setState( new BattleEngineStateEnd() );
        }
        else
        {
            context.setState( new BattleEngineStateRun() );
        }
        
    };
    
};