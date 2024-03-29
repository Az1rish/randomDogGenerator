'use strict';

function getImage() {
    const breed = $('.breed').val();
    fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert("Something is amiss, try again later"));
}

function displayResults(responseJson) {
    console.log(responseJson);

    let image = responseJson.message;
    const breed = $('.breed').val();
    if (responseJson.status === "error") {
        return alert("Sorry, we don't have that breed on file. Please type another breed.");
    } else {
    $('.results').html(`<img src="${image}" class="results-img" alt="Picture of a ${breed}">`);
    }
}

function watchForm() {
    $('form').submit(e => {
        e.preventDefault();
        getImage();
    });
}

$(function() {
    console.log("What kind of dog are we gonna look at now?");
    watchForm();
});