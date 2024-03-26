import {ViewData} from 'components'
import React from 'react'

export default props => {
  const {
    project_name,
    _id,
    start_date,
    employees,
    end_date,
    created,
    project_cost,
    project_type
  } = props

  return (
    <div class="grid gap-4 mt-5 md:grid-cols-1 lg:grid-cols-2">
      <ViewData label="Project ID" value={_id} />
      <ViewData label="Project Name" value={project_name} />
      <ViewData label="Project Budget" value={project_cost} />
      <ViewData label="Project Category" value={project_type.name} />
      <ViewData label="Start Date" value={start_date} />
      <ViewData label="End Date" value={end_date} />
      <ViewData label="Created At" value={created} />
      <ViewData label="Assign Employee Count" value={employees.length} />
    </div>
  )
}
