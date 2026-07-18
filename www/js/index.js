/* Bootstrap for Expense Tracker */
function onDeviceReady() {
    // main.js handles UI after DOMContentLoaded; nothing extra needed here yet
}

if (typeof cordova !== 'undefined') {
    document.addEventListener('deviceready', onDeviceReady, false);
} else {
    // Web preview / browser
    window.addEventListener('load', onDeviceReady);
}