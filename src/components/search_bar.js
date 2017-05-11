import React, {Component} from 'react';
   
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
    }
    
    render() {
        return (
            <div className="search-bar input-group">
                <input type="text" className="form-control"
                value = {this.state.term} 
                onChange={event=>this.onInputChange(event.target.value)}/>
                <div className="input-group-btn">
                    <button className="btn btn-default" 
                        onClick={()=>this.onSearchClick()} >
                        Search
                    </button>
                </div>
            </div>
           );
    }
    
    onInputChange(term) {
        console.log(term);
        this.setState({term: term});
    }
    
    onSearchClick() {
        console.log("onSearchClick()");
        this.props.onSearchTermChange(this.state.term);
    }
}

export default SearchBar;