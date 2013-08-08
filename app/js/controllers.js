'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [ '$scope', 'Buttons', function( $scope, Buttons ) {
        $scope.buttons = Buttons.menu;
    }]).
    controller('MyCtrl2', [ '$scope', 'Buttons', function( $scope, Buttons ) {
        $scope.buttons = Buttons.menu;
    }]).
    controller('LibraryController', [ '$scope', 'Buttons', 'Profiles', 'LibraryLevel', function( $scope, Buttons, Profiles, LibraryLevel ) {
        $scope.buttons = Buttons.menu;
        $scope.profiles = Profiles;
        $scope.getLevel = function(){ return LibraryLevel.get(); };
        $scope.setLevel = function( level ){ LibraryLevel.set( level ); };
        $scope.profileClick = function( characterName ){ $scope.profile = Profiles[ characterName ]; LibraryLevel.set( 'profile.art' ) };
    }]);