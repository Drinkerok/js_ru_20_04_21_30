import {INCREMENT, DELETE_ARTICLE, SELECTED_ARTICLES, SELECTED_DATE} from '../constants'

export function increment() {
    const action = {
        type: INCREMENT
    }
    return action
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: { id }
    }
}

export function selectedArticles(selected) {
    return {
        type: SELECTED_ARTICLES,
        payload: { selected }
    }
}

export function selectedDate(dateRange) {
    return {
        type: SELECTED_DATE,
        payload: { dateRange }
    }
}