'use strict';

angular.module('crewLinkApp', []).controller('personCtrl', function ($scope) {
    $scope.personList = [
        { name: "ramesh", last: "sharma", address: "mangalore", age: 30, place: 2 },

        { name: "suresh", last: "mehra", address: "kolar", age: 25, place: 1 },
        { name: "babula", last: "sahu", address: "bangalore", age: 40, place: 4 },
        { name: "aarav", last: "ahuja", address: "bangalore", age: 35, place: 3 },
        { name: "santosh", last: "verma", address: "bangalore", age: 28, place: 8 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 },
        { name: "santosh", last: "rao", address: "bangalore", age: 30, place: 3 }
    ];




    function sortArry(a, par) {

        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a.length - i - 1; j++) {
                if (a[j][par] > a[j + 1][par]) {
                    var temp = a[j];
                    a[j] = a[j + 1];
                    a[j + 1] = temp;

                }

            }

        }

    }

    function sortArryNew(a, par) {
        for (var i = 0; i < a.length; i++) {
            for (var j = i + 1; j < a.length; j++) {
                if (a[i][par].localeCompare(a[j][par]) == 0) {
                    var removedObject = a.splice(j, 1);
                    removedObject = null;

                }
            }
        }
    }
    sortArryNew($scope.personList, "name");
    //sortArry($scope.personList, "name");


    function sortArryCompare(a, b) {
        return parseFloat(a.age) - parseFloat(b.age);

    }
    //sortArryCompare($scope.personList, "name");

    angular.forEach($scope.personList.sort(sortArryCompare), function (res) {

        console.log("" + res.age);
    })






});

