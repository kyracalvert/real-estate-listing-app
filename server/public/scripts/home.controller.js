myApp.controller('HomeController', function ($http) {
    console.log('in HomeController');

    const hc = this; 

    hc.addListing = function () {
        console.log('in addListing');
        $http({
            method: 'POST',
            url: '/home',
            data: {
                cost: hc.cost,
                sqft: hc.sqft,
                type: hc.options,
                city: hc.city,
                image_path: hc.image
            }
        }).then(function (response) {
           console.log(response)
        }).catch(function (error) {
            alert('unable to post car repair');
        })
    }
})