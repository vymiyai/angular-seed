'use strict';

function CharacterStateAlive()
{
    this.execute = function( context )
    {
        var random = Math.random();

        var message =  "Character " + context.specs + ": ";

        if( random < 0.5 )
        {
            context.setState( new CharacterStateDead() );
            message += "KIA.";
        }
        else
        {
            context.setState( new CharacterStateAlive() );
            message += "Alive.";
        }
        
        alert( message );
    };
    
};