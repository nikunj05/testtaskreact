import React from 'react'
import {Title, Loader} from 'components'
import paths from 'navigation/navigation-routes'
import {isBooleanTrue} from 'utils'
import {TabPanel, TabView} from 'primereact'
import ProjectDetails from './partials/project-details'
import ClientDetails from './partials/client-details'
import Milestones from './partials/milestones'
import ProjectFiles from './partials/project-files'
import invoices from './partials/invoices'

const DataComponents = [
  {title: 'Project Details', component: ProjectDetails},
  {title: 'Client Details', component: ClientDetails},
  {title: 'Milestones', component: Milestones},
  {title: 'Project Files', component: ProjectFiles},
  {title: 'Invoices', component: invoices}
]

export default props => {
  const {projectData, fetchInitialData, history} = props
  if (fetchInitialData) return <Loader />
  const {project_name} = projectData
  const header = project_name
  return (
    <>
      <Title title={header} hideButton />
      <TabView>
        {DataComponents.map(({title, component: Component}, i) => (
          <TabPanel key={i} header={title}>
            <Component {...projectData} history={history} />
          </TabPanel>
        ))}
      </TabView>
    </>
  )
}
