angular.module('lendingApp')
.service('newGroupService', ['$http', newGroupService])
.service('getGroupAdminService', ['$http', getGroupAdminService])
.service('getGroupService', ['$http', getGroupService]);

function newGroupService ($http) {
  return function (groupObj, nextFunc) {
    return $http.post('//miraydevelopment.herokuapp.com/group/new', groupObj)
    .then(function(groupData){
      nextFunc(groupData);
    });
  };
}

function getGroupAdminService ($http) {
  return function (nextFunc) {
    return $http.get('//miraydevelopment.herokuapp.com/group/allData')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}

function getGroupService ($http) {
  return function (nextFunc) {
    return $http.get('//miraydevelopment.herokuapp.com/group')
    .then(function(allGroups){
      nextFunc(allGroups.data);
    });
  };
}
