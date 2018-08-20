myApp.controller('SalesController', function ($http){
    const vm = this;
    vm.sales = [];
    
    vm.getSales = function() {
        console.log('in getSales')
        $http({
            method: 'GET',
            url: '/sales'
        }).then(function (response){
            vm.sales = response.data;
            console.log(vm.sales)
        }).catch(function (error){
            alert('error in getSales', error)
        });
    }

    vm.getSales();

    vm.deleteSale = function (id) {
        console.log('in deleteRentals')
        $http({
            method: 'DELETE',
            url: '/sales/' + id
        }).then(function (response) {
            alert('Selected property deleted.');
            vm.getSales();
        }).catch(function (error) {
            alert('Unable to delete')
            console.log(error);
        });
    }
})