import React, {Component} from 'react'
import Article from './Article'
import PropTypes from 'prop-types'
import Accordeon from '../decorators/accordeon.js'

class ArticleList extends Component {
    // state = {
    //     openArticleId: null
    // }

    render() {
        const {articles, openChildId, toggleChild} = this.props
        const elements = articles.map(article => <li key={article.id}>
            <Article article={article}
                     isOpen={article.id == openChildId}
                     toggleOpen={toggleChild(article.id)}
            />
        </li>)
        return (
            <ul>
                {elements}
            </ul>
        )
    }

    // toggleArticle = openArticleId => ev => {
    //     this.setState({openArticleId})
    // }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default Accordeon(ArticleList)