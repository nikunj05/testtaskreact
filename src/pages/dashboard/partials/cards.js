import {InfoCard, RoundIcon} from 'components'
import {PagesIcon, PeopleIcon, EmployeeIcon} from 'icons'
import React from 'react'
import paths from 'navigation/navigation-routes'

export default props => {
  const {
    dashboard: {clients, employees, projects},
    history
  } = props
  const navigateToClient = () => history.push(paths.CLIENTS)
  const navigateToEmployee = () => history.push(paths.EMPLOYEES)
  const navigateToProject = () => history.push(paths.PROJECTS)
  return (
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <InfoCard
        title="Total clients"
        value={clients}
        onClick={navigateToClient}>
        <RoundIcon
          icon={PeopleIcon}
          iconColorClass="text-orange-500 dark:text-orange-100"
          bgColorClass="bg-orange-100 dark:bg-orange-500"
          className="mr-4"
        />
      </InfoCard>

      <InfoCard
        title="Total Employees"
        value={employees}
        onClick={navigateToEmployee}>
        <RoundIcon
          icon={EmployeeIcon}
          iconColorClass="text-blue-500 dark:text-blue-100"
          bgColorClass="bg-blue-100 dark:bg-blue-500"
          className="mr-4"
        />
      </InfoCard>

      <InfoCard
        title="Total projects"
        value={projects}
        onClick={navigateToProject}>
        <RoundIcon
          icon={PagesIcon}
          iconColorClass="text-green-500 dark:text-green-100"
          bgColorClass="bg-green-100 dark:bg-green-500"
          className="mr-4"
        />
      </InfoCard>
    </div>
  )
}
