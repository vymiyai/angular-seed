'use strict';

function BattleEngineStateInitial()
{
    this.name = "INITIAL";
    this.execute = function( context )
    {
        alert( "Initializing battle engine." );
        
        var elements = context.battleGroup01.concat( context.battleGroup02 );
        context.elements = elements.sort( function( a, b ) { return b.basicSpeed - a.basicSpeed; } );
        
        var speeds = "Basic speeds: [ ";
        for( var index in context.elements )
        {
            var element = context.elements[ index ];
            speeds += element.specs + ": " + element.basicSpeed + " ";
        }
        alert( speeds + "]" );
        
        context.setState( new BattleEngineStateRun() );
    };
    
};