import React from 'react'
import './List.css'


class List extends React.Component {

    constructor(props) {
        super(props)
    }

    makeList = () => {
        let list = this.props.movies.map((element) => {
            return (<li>{ element }</li>)
        })

        return list
    }
    
    render() {
        
        let movieList = this.makeList()

        return (
            <ol className="movie-list">
                { movieList }
            </ol>
        )
    }
}

export default List