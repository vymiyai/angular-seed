'use strict';

function BattleEngineStateRun()
{
    this.execute = function( context )
    {
        // do stuff with state.
        var character = context.getCurrentCharacter();
        character.execute();
        context.setNextCharacter();
        
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