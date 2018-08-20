myApp.controller('RentalController', function ($http){
    const vm = this;
    vm.rentals = [];
    
    vm.getRentals = function() {
        console.log('in getRentals')
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function (response){
            vm.rentals = response.data;
            console.log(vm.rentals)
        }).catch(function (error){
            alert('error in getRentals', error)
        });
    }

    vm.getRentals();
})