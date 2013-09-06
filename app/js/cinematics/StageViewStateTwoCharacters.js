'use strict';

function StageViewStateTwoCharacters()
{
    this.name = "Two Characters Stage";
    
    this.summon = function( context, characterId, callback )
    {
        alert( "Too many elements to summon!" );
    };
    
    this.dismiss = function( context, characterId, callback )
    {
        var oneCharacterCallback = function()
        {
            var ccallback = function()
            {
                var cccallback = function()
                {
                    context.setState( new StageViewStateOneCharacter() );
                    callback();
                };
                
                // turn remaining character on stage visible.
                $( '#stage > div:first-child' )
                    .removeClass( "characterSlotLeft characterSlotRight" )
                    .addClass( "characterSlotCenter" )
                    .switchClass( "invisible", "visible", context.fadeInTime, "linear", cccallback );
            };
            
            // remove character and turn remaining character invisible.
            $( '#' + characterId ).remove();
            $( '#stage > div:first-child' )
                .switchClass( "visible", "invisible", context.fadeOutTime, "linear", ccallback );
        };
        
        // turn character to be removed invisible.
        $( '#' + characterId )
            .switchClass( "visible", "invisible", context.fadeOutTime, "linear", oneCharacterCallback );
    };
    
};