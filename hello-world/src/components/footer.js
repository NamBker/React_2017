/**
 * Created by NamNguyen on 2/16/2017.
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:
        {" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
        {", "}
        <FilterLink filter="SHOW_DELETE">
            Delete
        </FilterLink>
    </p>
)

export default Footer