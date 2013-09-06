'use strict';

function StageViewStateZeroCharacters()
{
    this.name = "Zero Characters Stage";

    this.summon = function( context, characterId, callback )
    {
        var oneCharacterCallback = function()
        {
            context.setState( new StageViewStateOneCharacter() );
            callback();
        };
        
        // turn the character visible.
        $( '#' + characterId )
            .addClass( "characterSlotCenter" )
            .addClass( "invisible" )
            .appendTo( "#stage" )
            .switchClass( "invisible", "visible", context.fadeInTime, "linear", oneCharacterCallback );
    };
    
    this.dismiss = function( context, characterId, callback )
    {
        alert( "No elements to dismiss!" );
    };
    
};