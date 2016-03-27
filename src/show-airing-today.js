var request = require('request'),
    _ = require('lodash');

// call getAllShow till last page isn't reached
function fetchOtherPages(url, data, results, callback) {
    if (data.total_pages > data.page) {
        getAllShowToday(url, data.page + 1, results, callback);
    } else {
        callback(null, results);
    }
}

// parse results
function computePageResults(url, rawData, results, callback) {
    try {
        var data = JSON.parse(rawData);
    } catch (e) {
        return (callback('Error while fetching data', null));
    }
    fetchOtherPages(url, data, _.concat(results, data.results), callback);
}

// request for airing show today
function getAllShowToday(url, page, results, callback) {
    request(url + '&page=' + page, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            computePageResults(url, body, results, callback);
        }
        else if (error)
            callback('Couldn\'t reach TheMovieDB API', null);
        else {
            var res = JSON.parse(response.body);
            callback(res.status_message, null);
        }
    });
}

module.exports = function(apiKey, callback) {
    var url = 'http://api.themoviedb.org/3/tv/airing_today?api_key=' + apiKey;

    getAllShowToday(url, 1, [], callback);
}
