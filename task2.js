$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        method: "GET",
        success: function(response) {
            response.forEach(function(user) {
                var row = $("<tr></tr>");
                row.append($("<td></td>").text(user.name));
                row.append($("<td></td>").text(user.username));
                row.append($("<td></td>").text(user.email));
                row.append($("<td></td>").text(user.phone));
                row.append($("<td></td>").text(user.website));
                $("#users tbody").append(row);
            });
        }
    });
});