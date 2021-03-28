const xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        const response = JSON.parse(xhttp.responseText);
        const game_roster = response;
        let output = "";
        for (let i = 0; i < game_roster.length; i++) {
            output += "<tr>" +
                "<td>" + game_roster[i].ID + "</td>" +
                "<td>" + game_roster[i].date + "</td>" +
                "<td>" + game_roster[i].time + "</td>" +
                //"<td>" + game_roster[i].url + "</td>" +
                "<td>" + game_roster[i].p1 + "</td>" +
                "<td>" + game_roster[i].p2 + "</td>" +
                "<td>" + game_roster[i].w1 + "</td>" +
                "<td>" + game_roster[i].x + "</td>" +
                "<td>" + game_roster[i].w2 + "</td>" +
                "<td>" + game_roster[i].sport + "</td>" +
                "<td>" + game_roster[i].region + "</td>" +
                "<td>" + game_roster[i].league + "</td>" +
                "<td>" + game_roster[i].today + "</td>" +
                "<td>" + game_roster[i].tomorrow + "</td>" +
                "<td>" + game_roster[i].dateFormatted + "</td>" +
                "<td>" + game_roster[i].dateStr + "</td>" +
                "</tr>"
        }
        document.getElementById("game_roster").innerHTML = output;
    }
};

xhttp.open("GET", "JSON source here", true);
xhttp.send();