import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };

        this._onInputChange = this._onInputChange.bind(this);
    }

    _onInputChange(event) {
        this.setState({term: event.target.value});
    }

    render() {
        return (
            <input onChange={this._onInputChange} />
        );
    }
}

export default SearchBar;