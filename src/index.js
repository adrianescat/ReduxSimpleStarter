import React, { Component } from  'react';
import ReactDOM from  'react-dom';
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';

const API_KEY = 'AIzaSyCAMpuGgKd1fHnymj4N27qRMFm-i0s64A4';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {videos: []};

        YTSearch({key: API_KEY, term: 'Nicky Jam'}, videos => {
            this.setState({videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    } 
}

ReactDOM.render(<App />, document.querySelector('.container'));