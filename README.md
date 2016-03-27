# show-airing-today
A simple function to get all show airing today from TheMovieDB API.
You must have an API KEY from https://www.themoviedb.org/


## How it works

Installation
```cli
npm install show-airing-today [--save]
```

Usage
```javascript
var airingToday = require('show-airing-today');

airingToday('your API key', function(error, results) {
  // error = null if no error, otherwise message describing the error
  // results = collection of show airing today
});
```

Sample of one show
```json
{
  "poster_path": "\/vxuoMW6YBt6UsxvMfRNwRl9LtWS.jpg",
  "popularity": 38.583116,
  "id": 1402,
  "backdrop_path": "\/zYFQM9G5j9cRsMNMuZAX64nmUMf.jpg",
  "vote_average": 7.33,
  "overview": "Sheriff's deputy Rick Grimes awakens from a coma to find a post-apocalyptic world dominated by flesh-eating zombies. He sets out to find his family and encounters many other survivors along the way.",
  "first_air_date": "2010-10-31",
  "origin_country": ["US"],
  "genre_ids": [18],
  "original_language": "en",
  "vote_count": 406,
  "name": "The Walking Dead",
  "original_name": "The Walking Dead"
}
```

If there is not enough data you need, you can use the official API.

## Contribution

Do not hesitate to enhance the project with Pull Request, I will accept every PR I find relevant.
