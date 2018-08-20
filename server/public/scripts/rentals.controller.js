myApp.controller('RentalController', function ($http) {
    const vm = this;
    vm.rentals = [];

    vm.getRentals = function () {
        console.log('in getRentals')
        $http({
            method: 'GET',
            url: '/rentals'
        }).then(function (response) {
            vm.rentals = response.data;
            console.log(vm.rentals)
        }).catch(function (error) {
            alert('error in getRentals', error)
        });
    }

    vm.getRentals();

    vm.deleteRental = function (id) {
        console.log('in deleteRentals')
        $http({
            method: 'DELETE',
            url: '/rentals/' + id
        }).then(function (response) {
            alert('Selected property deleted.');
            vm.getRentals();
        }).catch(function (error) {
            alert('Unable to delete')
            console.log(error);
        });
    }
})