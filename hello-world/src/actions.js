/**
 * Created by NamNguyen on 2/16/2017.
 */
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const REMOVE_TODO = 'REMOVE_TODO'

/*
 * other constants
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_DELETE: 'SHOW_DELETE',
}

/*
 * action creators
 */

export function addTodo(text) {
    return { type: ADD_TODO, text }
}
export function removeTodo(text) {
    return { type: REMOVE_TODO, text }
}

export function toggleTodo(index) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
}