var searchYouTube = (options = {key: window.YOUTUBE_API_KEY, max: 5, query: ''}, callback) => {
  // TODO
  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search",
    method: 'GET',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      videoEmbeddable: 'true',
      type: 'video'
    },
    contentType: 'application/json',
    success: function (data) {
      callback(data.items);
    },
    error: function (data) {
      console.error('some kind of error');
    }
  });
  //comment

};

window.searchYouTube = searchYouTube;
