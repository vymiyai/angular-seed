'use strict';

function BattleEngineStateEnd()
{
    this.name = "END";
    this.execute = function( context )
    {
        // do stuff.
        alert( "End of battle." );
    };
    
};