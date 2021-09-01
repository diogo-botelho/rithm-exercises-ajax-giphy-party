"use strict";

const GIPHY_URL = "http://api.giphy.com/v1/gifs/search?";
const API_KEY = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"

$(".search-form").on("submit", getGiphy);

/** Uses Ajax to get a random image url and append it to the giphy-gallery */
async function getGiphy(evt) {
    evt.preventDefault();
    let searchTerm = $("#search-term").val(); 
    let response = await axios.get(GIPHY_URL, { params:{q: searchTerm, "api_key": API_KEY}} );
    // `${GIPHY_URL}${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
    // console.log("response=",response);
    // console.log("response.data=", response.data)
    // console.log("response.data.data:", response.data.data);
    let responseLength = response.data.data.length;
    let index = getRandomNumber(responseLength);
    let newGiphyURL = response.data.data[index].images.fixed_width.url;
    // console.log("newGiphyURL:", newGiphyURL);
    appendGiphy(newGiphyURL);
}

/**Remove Function
 * event listener on the button
 * clears the div using .empty()
 */

$("#remove-giphies-button").on("click", removeGiphies)

/** removes all giphy images from the giphy-gallery div */
function removeGiphies() {
    $(".giphy-gallery").empty();
}

// console.log("Let's get this party started!");

/** using the responseLength, returns a random number between 0 and the responseLength */
function getRandomNumber (responseLength) {
    return Math.floor(Math.random()*responseLength);
}

/** creates a new img tag and adds the src and alt attributes, it then appends this new img tag to the giphy-galler */
function appendGiphy (newGiphyURL) {
    let newGiphyHtml = $("<img>").attr("src", newGiphyURL).attr("alt", "giphy");
    // console.log("newGiphyHtml:", newGiphyHtml);
    $(".giphy-gallery").append(newGiphyHtml);
}