import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import {connect} from 'react-redux'
import {selectedArticles} from '../../AC/index'

class SelectFilter extends Component {
    static propTypes = {
        articles: PropTypes.array
    };

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const selected = this.props.selected

        return (
            <Select options = {options} value = {selected}
                    onChange = {this.handleSelectionChange}
                    multi = {true}
            />
        )
    }

    handleSelectionChange = filters => {
        this.props.selectedArticles(filters.map(option => option.value))
    }
}

export default connect(state => ({
    articles: state.articles,
    selected: state.filters.selected
}), {selectedArticles})(SelectFilter)