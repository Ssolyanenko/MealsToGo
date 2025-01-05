/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const {geocodeRequest} = require("./geocode");
const url = require("url");
const {locations: locationsMock} = require("./geocode/geocode.mock");
const {placesRequest} = require("./places");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.geocode = onRequest((request, response) => {
    geocodeRequest(request, response);
});

exports.placesNearBy = onRequest((request, response) => {
    placesRequest(request, response);
});
