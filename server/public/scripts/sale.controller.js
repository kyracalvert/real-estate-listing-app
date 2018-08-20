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
})