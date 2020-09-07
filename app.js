$(document).ready(function () {

    init()

    function init() {
        var url = "https://api.covid19api.com/summary"

        var globalData = '';
        var nepalData = '';

        $.get(url, function (data) {

            //console.log(data.Countries[118]);

            globalData = `
    
                <td>${data.Global.TotalConfirmed}</td>
                <td>${data.Global.TotalRecovered}</td>
                <td class='text-danger'>${data.Global.TotalDeaths}</td>
                
            `

            nepalData = `
            
                <td>${data.Countries[118].TotalConfirmed}</td>
                <td>${data.Countries[118].TotalRecovered}</td>
                <td class='text-danger'>${data.Countries[118].TotalDeaths}</td>

            `

            $('#golbalData').html(globalData);
            $('#nepalData').html(nepalData);
        });

    }

    $('#btnRefresh').on('click', function(){
        $('#globalData').empty();
        $('#nepalData').empty();
        init();
    })

})