/**
 * Created by NamNguyen on 2/16/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../actions'

let RemoveTodo = ({ dispatch }) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(RemoveTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }} />
                <button type="submit">
                    Remove Todo
                </button>
            </form>
        </div>
    )
}
RemoveTodo = connect()(RemoveTodo)

export default RemoveTodo