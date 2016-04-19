angular.module('lendingApp')
.service('newGroupService', ['$http', 'envService', newGroupService])
.service('getGroupAdminService', ['$http', 'envService', getGroupAdminService])
.service('getGroupService', ['$http', 'envService', getGroupService]);

function newGroupService ($http, envService) {
  return function (groupObj, nextFunc) {
    return $http.post(envService.path + '/group/new', groupObj)
    .then(function(groupData){
      nextFunc(groupData);
    });
  };
}

function getGroupAdminService ($http, envService) {
  return function (nextFunc) {
    return $http.get(envService.path + '/group/allData')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}

function getGroupService ($http, envService) {
  return function (nextFunc) {
    return $http.get(envService.path + '/group')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}
