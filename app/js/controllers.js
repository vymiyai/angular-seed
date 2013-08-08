'use strict';

/* Controllers */

angular.module('myApp.controllers', []).
    controller('MyCtrl1', [ '$scope', 'Buttons', function( $scope, Buttons ) {
        $scope.buttons = Buttons.menu;
    }]).
    controller('MyCtrl2', [ '$scope', 'Buttons', function( $scope, Buttons ) {
        $scope.buttons = Buttons.menu;
    }]).
    controller('LibraryController', [ '$scope', 'Buttons', 'Profiles',  function( $scope, Buttons, Profiles ) {
        $scope.buttons = Buttons.menu;
        $scope.profiles = Profiles;
        
        $scope.profileClick = function( characterName ){ $scope.profile = Profiles[ characterName ]; };
    }]).
    controller('ProfileController', [ '$scope', 'Profiles', 'LibraryProfile', function( $scope, Profiles, LibraryProfile ) {
        
    }]);