import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: '',
            placeholder: 'Enter a text please',
        };
    }

    onInputChange(term) {
        console.log('Input Value: ' + term);

        this.props.onSearchTermChange(term);
        this.setState({term: term});
    }


    render() {

        return (
            <div className='search-bar'>
                <input type="text"
                       onChange={event => this.onInputChange(event.target.value)}
                       placeholder={this.state.placeholder}
                       value={this.state.term}/>
            </div>
        );
    }
}