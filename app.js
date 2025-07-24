(function () {
'use Strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Sindhu";

  $scope.sayMessage = function () {
    return "Sindhu likes to eat healthy snacks at night!";
  };
}

})();
