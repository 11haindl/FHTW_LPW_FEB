let users = [];

$(document).ready(function(){
    console.log("i am ready");
    $.ajax({
        url: "https://dummyjson.com/users/",
        method: "GET",
    }).done(function (response) {
        //users = response.users;
        let tableObject = new table();
        tableObject.createTable(response.users);
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {

    });
});

/*
$ajaxButton = $("#ajax-tester");
$ajaxButton.on("click", function () {
    console.log("clicked");
    $.ajax({
        url: "https://dummyjson.com/users/",
        method: "GET",
    }).done(function (response) {
        console.log("response: " + JSON.stringify(response));
        //const userObj = user.from(response);
        //console.log(userObj);
        users = response.users;
        console.log(response);
    }).fail(function (error) {
        console.log("error: " + error);
    }).always(function () {
        console.log("done!");
    });
});





function jsonToObject() {
    for (let userObj of users) {
        $('tbody').append(`
        <tr>
            <td>
                ${userObj.id}
            </td>
            <td>
                ${userObj.firstName}
            </td>
            <td>
                ${userObj.lastName}
            </td>
            <td>
                ${userObj.age}
            </td>
           </tr>`);
    }

    $tableRow = $("#userTable tr");
    $tableRow.on("click", function () {
        console.log(this);
    });
}
*/