import React from 'react'
import classes from './toolbar.module.css'

export  function Toolbar({ filters, selected, selectFilterCallback }) {
  return (
    <>
    {filters.map((filter) => (
        <button 
        className={filter === selected? classes.selected: classes.notSelected}
        data-filter={filter} 
        onClick={selectFilterCallback}
        key={filter}
        >
            {filter}         
        </button>
    ))}
    </>
  )
}
