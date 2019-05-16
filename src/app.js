import React, {Component} from 'react';
import {connect} from 'react-redux';

import * as actions from './actions';

class App extends Component {

    componentWillMount(){
        this.props.movieslist()
        //this.props.directorslist();
    }

    renderMovies = (movies) => (
        movies ?
        movies.map(item =>(
            <div>
                {item.name}
            </div>
        )):
        null
    )

    render(){
        return(
            <div>
                {this.renderMovies(this.props.data.movies)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.movies
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         // movieslist,
//         // directorslist
//     },dispatch)
// }

export default connect(mapStateToProps, actions)(App);