var btn = document.getElementById("btn");
var animalInfo = document.getElementById("animal-info");


btn.addEventListener("click", function() {
    var ourRequest = new XMLHttpRequest()
    ourRequest.open('GET', 'obj.txt')
    ourRequest.onload = function() {
        var ourData = JSON.parse(ourRequest.responseText);
        // console.log(ourData);
        // for (item in ourData){
        //     console.log("Item: " + ourData[item].name);
        // };
        renderHTML(ourData);
    };
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = ""; 

    for (i=0; i<data.length; i++) {
        htmlString += "<p>" + data[i].name + "'s age is " + data[i].age + "</p>"
    }

    animalInfo.insertAdjacentHTML('beforeend', htmlString);
}