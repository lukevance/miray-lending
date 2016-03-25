angular.module('lendingApp')
.service('newGroupService', ['$http', newGroupService])
.service('getGroupAdminService', ['$http', getGroupAdminService])
.service('getGroupService', ['$http', getGroupService]);

function newGroupService ($http) {
  return function (groupObj, nextFunc) {
    return $http.post('//localhost:3000/group/new', groupObj)
    .then(function(groupData){
      nextFunc(groupData);
    });
  };
}

function getGroupAdminService ($http) {
  return function (nextFunc) {
    return $http.get('//localhost:3000/group/allData')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}

function getGroupService ($http) {
  return function (nextFunc) {
    return $http.get('//localhost:3000/group/allData')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}
