class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentVid: {id:{videoId: ''},snippet:{title:'', description:'', thumbnails:{default:{url:''}}}},
      vidList: [{id:{videoId: ''},snippet:{title:'', description:'', thumbnails:{default:{url:''}}}}]
    };

  }

  onVidClick(vid) {
    this.setState({
      currentVid: vid
    });
  }

  searchResults() {
    //console.log(this.props.videoSearch(undefined, stuff=>console.log(stuff)))
    this.props.videoSearch(undefined, stuff=>{
      this.setState({
        vidList: stuff,
        currentVid: stuff[0],
      });
    });
  }

  componentDidMount() {
    this.searchResults();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVid} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.vidList} onVidClick={this.onVidClick.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
