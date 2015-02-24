angular.module('DropzoneTest', [
	'ui.dropzone'
]).controller('DropzoneTestCtrl', ['$scope', function($scope) {
	$scope.columns = [
		[ { name: 'Draggable 1' }, { name: 'Draggable 2' } ],
		[ { name: 'Draggable 3' } ],
		[ { name: 'Draggable 4' }, { name: 'Draggable 5' }, { name: 'Draggable 6' } ]
	];

	$scope.$on('model-change', function() {
		console.log($scope.columns);
	});
}]);