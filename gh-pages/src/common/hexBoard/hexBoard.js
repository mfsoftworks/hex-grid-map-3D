var angular = require('angular');
var Board = require('../../../../src/HexBoard.js'); //
var paper = require('browserifyable-paper');
module.exports = angular.module( 'hexBoard', [] )

.directive( 'hexBoard', function() {
  return {
    link: function( scope, element, attrs ) {
    

      scope.board = new Board(scope.hexDimensions, element[0], scope.contexts, scope.globalMouseClicked);
            onResize = function (event){
                   paperview.viewSize = [event.size.width, event.size.height]
        }
      scope.$emit('boardInitialized');
      
      
    }
  };
})

;

