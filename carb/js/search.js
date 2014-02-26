// Define a new module for our app. The array holds the names of dependencies if any.
var app = angular.module("instantSearch", []);

// Create the instant search filter

app.filter('searchFor', function(){

    // All filters must return a function. The first parameter
    // is the data that is to be filtered, and the second is an
    // argument that may be passed with a colon (searchFor:searchString)

    return function(arr, searchString){

        if(!searchString){
            return arr;
        }

        var result = [];

        searchString = searchString.toLowerCase();

        // Using the forEach helper method to loop through the array
        angular.forEach(arr, function(item){

            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                result.push(item);
            }

        });

        return result;
    };

});

// The controller

function InstantSearchController($scope){

    // The data model. These items would normally be requested via AJAX,
    // but are hardcoded here for simplicity. See the next example for
    // tips on using AJAX.


    $scope.items = [
{
    title: ' American Amber Ale ',
    min: ' 2.2 ',
    max: ' 2.8 '
},
{
    title: ' American Brown ',
    min: ' 1.5 ',
    max: ' 2.5 '
},
{
    title: ' American Dark Lager ',
    min: ' 2.5 ',
    max: ' 2.7 '
},
{
    title: ' American Lager ',
    min: ' 2.6 ',
    max: ' 2.7 '
},
{
    title: ' American Light Lager ',
    min: ' 2.6 ',
    max: ' 2.6 '
},
{
    title: ' American Pale Ale ',
    min: ' 2.2 ',
    max: ' 2.8 '
},
{
    title: ' American Pilsener ',
    min: ' 2.6 ',
    max: ' 2.7 '
},
{
    title: ' American Premium Lager ',
    min: ' 2.6 ',
    max: ' 2.7 '
},
{
    title: ' American Wheat ',
    min: ' 2.3 ',
    max: ' 2.6 '
},
{
    title: ' Bamberg Rauchbier ',
    min: ' 2.2 ',
    max: ' 2.6 '
},
{
    title: ' Barley Wine ',
    min: ' 1.3 ',
    max: ' 2.3 '
},
{
    title: ' Belgian Dubbel ',
    min: ' 1.9 ',
    max: ' 2.4 '
},
{
    title: ' Belgian Fruit Lambic ',
    min: ' 2.6 ',
    max: ' 4.5 '
},
{
    title: ' Belgian Gueuze Lambic ',
    min: ' 3.0 ',
    max: ' 4.5 '
},
{
    title: ' Belgian Lambic ',
    min: ' 3.0 ',
    max: ' 4.5 '
},
{
    title: ' Belgian Pale Ale ',
    min: ' 1.9 ',
    max: ' 2.5 '
},
{
    title: ' Belgian Strong Ale ',
    min: ' 1.9 ',
    max: ' 2.4 '
},
{
    title: ' Belgian Tripel ',
    min: ' 1.9 ',
    max: ' 2.4 '
},
{
    title: ' Belgian White (Wit) ',
    min: ' 2.1 ',
    max: ' 2.6 '
},
{
    title: ' Berliner Weisse ',
    min: ' 3.5 ',
    max: ' 3.5 '
},
{
    title: ' Bière de Garde ',
    min: '  ',
    max: '  '
},
{
    title: ' Bock ',
    min: ' 2.2 ',
    max: ' 2.7 '
},
{
    title: ' Bohemian Pilsener ',
    min: ' 2.3 ',
    max: ' 2.5 '
},
{
    title: ' Brown Porter ',
    min: ' 1.7 ',
    max: ' 2.5 '
},
{
    title: ' California Common ',
    min: ' 2.4 ',
    max: ' 2.8 '
},
{
    title: ' Cream Ale ',
    min: ' 2.6 ',
    max: ' 2.7 '
},
{
    title: ' Doppelbock ',
    min: ' 2.3 ',
    max: ' 2.6 '
},
{
    title: ' Dortmunder/European Export ',
    min: ' 2.6 ',
    max: ' 2.6 '
},
{
    title: ' Dunkelweizen ',
    min: ' 3.6 ',
    max: ' 4.5 '
},
{
    title: ' Düsseldorf Altbier ',
    min: ' 2.2 ',
    max: ' 3.1 '
},
{
    title: ' Eisbock ',
    min: ' 2.4 ',
    max: ' 2.4 '
},
{
    title: ' English Best (Special) Bitter ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' English Brown ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' English Dark Mild ',
    min: ' 1.3 ',
    max: ' 2.0 '
},
{
    title: ' English Light Mild ',
    min: ' 1.3 ',
    max: ' 2.0 '
},
{
    title: ' English Old/Strong Ale ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' English Ordinary Bitter ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' English Pale Ale ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' English Strong (Extra Special) Bitter ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' Flanders Brown ',
    min: ' 1.9 ',
    max: ' 2.5 '
},
{
    title: ' Foreign-Style Stout ',
    min: ' 2.3 ',
    max: ' 2.6 '
},
{
    title: ' German Pilsener ',
    min: ' 2.5 ',
    max: ' 2.5 '
},
{
    title: ' Helles Bock ',
    min: ' 2.2 ',
    max: ' 2.7 '
},
{
    title: ' Imperial Stout ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' India Pale Ale ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' Irish Dry Stout ',
    min: ' 1.6 ',
    max: ' 2.0 '
},
{
    title: ' Kölsch ',
    min: ' 2.4 ',
    max: ' 2.7 '
},
{
    title: ' Maibock ',
    min: ' 2.2 ',
    max: ' 2.7 '
},
{
    title: ' Märzen/Oktoberfest ',
    min: ' 2.6 ',
    max: ' 2.7 '
},
{
    title: ' Münchner Helles ',
    min: ' 2.3 ',
    max: ' 2.7 '
},
{
    title: ' Munich Dunkel ',
    min: ' 2.2 ',
    max: ' 2.7 '
},
{
    title: ' North German Altbier ',
    min: ' 2.2 ',
    max: ' 3.1 '
},
{
    title: ' Oatmeal Stout ',
    min: '  ',
    max: '  '
},
{
    title: ' Oud Bruin ',
    min: ' 1.9 ',
    max: ' 2.5 '
},
{
    title: ' Robust Porter ',
    min: ' 1.8 ',
    max: ' 2.5 '
},
{
    title: ' Schwarzbier ',
    min: ' 2.2 ',
    max: ' 2.6 '
},
{
    title: ' Scottish Export Ale ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' Scottish Heavy Ale ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' Scottish Light Ale ',
    min: ' 0.75 ',
    max: ' 1.3 '
},
{
    title: ' Strong Scotch Ale ',
    min: ' 1.5 ',
    max: ' 2.3 '
},
{
    title: ' Sweet Stout ',
    min: ' 2.0 ',
    max: ' 2.4 '
},
{
    title: ' Traditional Bock ',
    min: ' 2.2 ',
    max: ' 2.7 '
},
{
    title: ' Vienna ',
    min: ' 2.4 ',
    max: ' 2.6 '
},
{
    title: ' Weizen/Weissbier ',
    min: ' 3.6 ',
    max: ' 4.5 '
},
{
    title: ' Weizenbock ',
    min: ' 3.7 ',
    max: ' 4.7 '
}
    ];


    $scope.rootStyle = $scope.items[0].title;
    $scope.rootMin = $scope.items[0].min;
    $scope.rootMax = $scope.items[0].max;
    $scope.rootValue = ((parseFloat($scope.rootMax) - parseFloat($scope.rootMin)) / 2.0) + parseFloat($scope.rootMin);

    $scope.loadStyle = function (style) {
        $scope.rootStyle = style.title;
        $scope.rootMin = style.min;
        $scope.rootMax = style.max;
        $('#sl1').slider('option', 'min', parseFloat(style.min));
        $('#sl1').slider('option', 'max', parseFloat(style.max));
        $scope.rootValue = ((parseFloat($scope.rootMax) - parseFloat($scope.rootMin)) / 2.0) + parseFloat($scope.rootMin);
        $('#sl1').slider('option', 'value', $scope.rootValue);
        $scope.updateLabels();
    }

    $scope.calcPF = function (vols, temp) {
        var t = temp * (9/5) + 32;

        var v1 = -16.6999 - (0.0101059*t) + (0.00116512*Math.pow(t, 2))
        var v2 = (0.173354*t*vols) + (4.24267*vols) - (0.0684226*Math.pow(vols, 2))

        var result = v1 + v2;

        if (isNaN(result)) {
            return "Needs temperature";
        } else {
            return result.toFixed(2);
        }
        
    }

    $scope.calcB = function (vols, temp) {
        result = $scope.calcPF(vols, temp) / 14.5037738;
        if (isNaN(result)) {
            return "Needs temperature";
        } else {
            return result.toFixed(2);
        }
    }

    $scope.updateLabels = function() {
      $( "#vol" ).val( $( "#sl1" ).slider( "value" ));
      $( "#psi" ).val( $scope.calcPF($( "#sl1" ).slider( "value" ), $scope.rootTemp));
      $( "#bar" ).val( $scope.calcB($( "#sl1" ).slider( "value" ), $scope.rootTemp));
    }

    $('#sl1').slider({
        min: parseFloat($scope.rootMin),
        max: parseFloat($scope.rootMax),
        step: 0.1 ,
        value: $scope.rootValue,
        slide: function(event, ui) {
            $scope.rootValue = ui.value;
            $( "#vol" ).val( ui.value );
            $( "#psi" ).val( $scope.calcPF(ui.value, $scope.rootTemp));
            $( "#bar" ).val( $scope.calcB(ui.value, $scope.rootTemp));
        }
    });

    $scope.updateLabels();

}
