import React from 'react'
import data from './data'
import List from './List'
import './Info.css'

class Info extends React.Component {

    constructor() {
        super()

        this.state = {
            people: data,
            currentIndex: 0,
            currentPerson: data[0],
            disablePrevious: true,
            disableNext: false,
        }
    }

    next = () => {

        let index = this.state.currentIndex + 1

        if (index === this.state.people.length - 1) {
            this.setState({
                currentIndex: index,
                currentPerson: this.state.people[index],
                disableNext: true,
                disablePrevious: false
            })
        }
        else {
            this.setState({
                currentIndex: index,
                currentPerson: this.state.people[index],
                disableNext: false,
                disablePrevious: false
            })
        }
    }

    previous = () => {

        let index = this.state.currentIndex - 1

        if (index === 0) {
            this.setState({
                currentIndex: index,
                currentPerson: this.state.people[index],
                disableNext: false,
                disablePrevious: true
            })
        }
        else {
            this.setState({
                currentIndex: index,
                currentPerson: this.state.people[index],
                disableNext: false,
                disablePrevious: false
            })
        }
    }

    render() {

        console.log('index', this.state.currentIndex)
        console.log('person', this.state.currentPerson)
        return (
            <div className="info">
                <h1 className="page">{ `${this.state.currentIndex + 1}/${this.state.people.length}` }</h1>
                <h1 className="name">{ `${this.state.currentPerson.name.first} ${this.state.currentPerson.name.last}` }</h1>
                <div className="summary">
                    <p><span>From:</span> { `${this.state.currentPerson.city }, ${this.state.currentPerson.country}` }</p>
                    <p><span>Job Title:</span> { this.state.currentPerson.title }</p>
                    <p><span>Employer:</span> { this.state.currentPerson.employer }</p>
                </div>
                <p><span>Favorite Movies:</span></p>
                <List movies={ this.state.currentPerson.favoriteMovies }/>
                <div className="footer">
                    <button onClick={ this.previous } disabled={ this.state.disablePrevious }>{ '< Previous' }</button>
                    <div className="contain">
                        <p>Edit</p>
                        <p>Delete</p>
                        <p>New</p>
                    </div>
                    <button onClick={ this.next } disabled={ this.state.disableNext }>{ 'Next >' }</button>
                </div>
            </div>
        )
    }
}

export default Info