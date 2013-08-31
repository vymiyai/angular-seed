'use strict';

function CharacterStateDead()
{
    this.name = "DEAD";
    this.execute = function( context )
    {
        // do nothing.
        alert( "Character " + context.specs + " is dead. Go to next character..." );
    };
    
};