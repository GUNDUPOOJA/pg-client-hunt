import getLocation from '../scripts/location.js';

// helper functions


// event handlers

/**
 * Wait to get location and then display it.
 * Location should only be updated in response to a USER GESTURE
 */
async function locationHandler() {
    const locText = await getLocation();
    document.getElementById('locationAnswer').innerHTML = locText;
}

function clearErrorText() {
    document.getElementById('error-message').innerHTML = '';
}

// declaration of the main method
function main() {
    console.log('Starting main method..');

    // get references to html elements
    const locationElement = document.getElementById('location');
    const errorElement = document.getElementById('error-message');

    // initialize the error to empty string
    errorElement.innerHTML = '';

    locationElement.addEventListener('click', locationHandler);
    locationElement.addEventListener('touch', locationHandler);
}
// this is where it begins
window.addEventListener('load', main);


