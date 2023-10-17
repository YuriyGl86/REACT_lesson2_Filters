import React from 'react'
import { useState } from 'react'
import { Toolbar } from '../Toolbar'
import { projectList, filtersList } from './db'
import { ProjectList } from '../ProjectList/ProjectList'




export function Portfolio() {
    const initialState = {
      selectedFilter: 'All',
      projects: projectList
    }
    const [portfolioState, setFilter] = useState(initialState)

    const handleFilterSelect = (event) => {
      const filter = event.target.dataset.filter
      console.log(filter)
      setFilter({
        selectedFilter: filter,
        projects: projectList.filter(project => {
          return (project.category === filter || filter === 'All')
        })
      })
    }

  return (
    <>
      <Toolbar
        filters = {filtersList}
        selected = {portfolioState.selectedFilter}
        selectFilterCallback = {handleFilterSelect}
      />
      <div>Portfolio</div>
      <ProjectList 
        projects={portfolioState.projects}
      />
    </>

  )
}
