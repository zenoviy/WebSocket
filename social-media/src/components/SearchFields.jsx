import React from 'react';


export default class SearchFieldArea extends React.Component {
    constructor(props){
        super(props)
        this.searchField = null;
        this.onSearch = this.onSearch.bind(this);
    }
    onSearch(target){
        console.log(target.value)
    }
    render(){
        return(
            <React.Fragment>
                <input ref={ input => this.searchField = input } type="text" onChange={e => this.onSearch(e.target)} />
            </React.Fragment>
        )
    }
}