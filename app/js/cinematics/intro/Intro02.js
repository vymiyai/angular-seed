'use strict';

function Intro02()
{
    this.name = "Intro02";
    this.execute = function( context )
    {
        context.dismiss( "sakuya2", function(){ alert( "Fim de execucao." ); } );
    };
    
};