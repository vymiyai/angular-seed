'use strict';

function CharacterView()
{
    this.instantiate = function( characterId, spritesheet, animation )
    {
        var character = $( '<img src="' + spritesheet + '" class="sprite ' + animation + '" />' );
        var innerContainer = $( '<div class="innerContainer"></div>' ).append( character );
        var outerContainer = $( '<div class="outerContainer"></div>' ).append( innerContainer );
        var slot = $( '<div id="' + characterId + '"></div>' ).append( outerContainer );
        
        slot.appendTo( '#spawnArea' );
    };
    
};