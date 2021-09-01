"use strict";

const GIPHY_URL = "http://api.giphy.com/v1/gifs/search?q=";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

$(".search-form").on("submit", getGiphy);

async function getGiphy(evt) {
    evt.preventDefault();
    let searchTerm = $("#search-term").val(); 
    let response = await axios.get(`${GIPHY_URL}${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    console.log("response=",response);
    console.log("response.data=", response.data)
    console.log("response.data.data:", response.data.data);
    let index = getRandomNumber();
    let newGiphyURL = response.data.data[index].images.fixed_width.url;
    console.log("newGiphyURL:", newGiphyURL);
    appendGiphy(newGiphyURL);
}

console.log("Let's get this party started!");

function getRandomNumber () {
    return Math.floor(Math.random()*50);
}

function appendGiphy (newGiphyURL) {
    let newGiphyHtml = $("<img>").attr("src", newGiphyURL).attr("alt", "giphy");
    console.log("newGiphyHtml:", newGiphyHtml);
    $(".giphy-gallery").append(newGiphyHtml);
}