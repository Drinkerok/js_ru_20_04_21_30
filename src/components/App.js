import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <Router>
                <div>
                    <UserForm />
                    <ul>
                        <li><NavLink to = '/counter' activeStyle = {{color: 'red'}}>Counter</NavLink></li>
                        <li><NavLink to = '/filters' activeStyle = {{color: 'red'}}>Filters</NavLink></li>
                        <li><NavLink to = '/articles' activeStyle = {{color: 'red'}}>Articles</NavLink></li>
                    </ul>

                    <Route path = '/counter' component = {Counter}/>
                    <Route path = '/filters' component = {Filters}/>
                    <Route path = '/articles' component = {ArticleList}/>
                </div>
            </Router>
        )
    }
}

export default App