const {locations: locationsMock} = require('./geocode.mock');
const url = require('url');

module.exports.geocodeRequest = async (request, response) => {
    const {city} = url.parse(request.url, true).query
    const locationMock = locationsMock[city.toLowerCase()]
    response.json(locationMock)
}
