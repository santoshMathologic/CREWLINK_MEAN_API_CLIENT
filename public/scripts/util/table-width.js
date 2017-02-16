'use strict';


angular.module('crewLinkApp')
    .directive('tableWidth', function () {
        return {
            link: function (scope, elem, attr) {
                var ratio = +(attr.tableWidth);
                elem.css({'display': 'block', 'color': 'red', 'width': ratio +'%'});
                console.log(scope);
                
                
            }
        }
    });


