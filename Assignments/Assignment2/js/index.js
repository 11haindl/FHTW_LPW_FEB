/* 
make GET request, 
if successful, create a new table object,
if not successful, write error to console
*/
$(document).ready(function(){
    $.ajax({
        url: "https://dummyjson.com/users/",
        method: "GET",
    }).done(function (response) {
        let tableObject = new table('#table-head', '#table-body', 7);
        tableObject.createTable(response.users);
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});
