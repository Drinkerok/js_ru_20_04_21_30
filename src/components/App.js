import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filters from './Filters/index'
import Counter from './Counter'

class App extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <Filters/>
                <ArticleList />
            </div>
        )
    }
}

export default App