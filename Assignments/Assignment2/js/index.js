$(document).ready(function(){
    $.ajax({
        url: "https://dummyjson.com/users/",
        method: "GET",
    }).done(function (response) {
        let tableObject = new table();
        tableObject.createTable(response.users);
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});
