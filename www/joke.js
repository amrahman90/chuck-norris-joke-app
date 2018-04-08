var xmlhttp;

window.onload=function()
{
    init();
}

function init()
{
    document.getElementById('btnGetJoke').addEventListener('click', getJoke, false);
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = receiveJoke;
}

function getJoke()
{
    var url = `http://api.icndb.com/jokes/random/?firstName=${document.getElementById('first').value}&lastName=${document.getElementById('last').value}`;
    xmlhttp.open('GET', url, false);
    xmlhttp.send();
}

function receiveJoke()
{
    if(xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        var json = jQuery.parseJSON(xmlhttp.responseText);
        document.getElementById('joke').innerHTML = json.value.joke;
    }
}
