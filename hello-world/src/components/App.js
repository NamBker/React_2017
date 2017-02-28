/**
 * Created by NamNguyen on 2/16/2017.
 */
import React from 'react'
import Footer from './footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (

    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)

export default App