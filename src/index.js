import React from  'react';
import ReactDOM from  'react-dom';
import SearchBar from './components/searchBar';

const API_KEY = 'AIzaSyCAMpuGgKd1fHnymj4N27qRMFm-i0s64A4';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));