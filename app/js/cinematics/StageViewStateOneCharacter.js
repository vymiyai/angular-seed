'use strict';

function StageViewStateOneCharacter()
{
    this.name = "One Character Stage";
    
    this.summon = function( context, characterId, callback )
    {
        var twoCharactersCallback = function()
        {
            var ccallback = function()
            {
                context.setState( new StageViewStateTwoCharacters() );
                callback();
            };
            
            // turn the new added character to the right of the stage.
            $( '#' + characterId )
                .addClass( "characterSlotRight" )
                .addClass( "invisible" )
                .appendTo( "#stage" )
                .switchClass( "invisible", "visible", context.fadeInTime, "linear", ccallback );
        };
        
        // shift character on stage to the left.
        $( '#stage > div:first-child' )
            .switchClass( "visible", "invisible", context.fadeOutTime, "linear" )
            .switchClass( "characterSlotCenter", "characterSlotLeft", 0 )
            .switchClass( "invisible", "visible", context.fadeInTime, "linear", twoCharactersCallback );
    };
    
    this.dismiss = function( context, characterId, callback )
    {
        var zeroCharactersCallback = function()
        {
            $( '#' + characterId ).remove();
            context.setState( new StageViewStateZeroCharacters() );
            callback();
        };
        
        // turn character on stage invisible.
        $( '#' + characterId )
            .switchClass( "visible", "invisible", context.fadeOutTime, "linear", zeroCharactersCallback );
    };
    
};