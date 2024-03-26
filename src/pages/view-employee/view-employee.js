import React from 'react'
import {Title} from 'components'
import {TabPanel, TabView} from 'primereact'
import Payslips from './partials/payslip/payslips'
import Increments from './partials/increments'
import Leaves from './partials/leaves'
import {Loader} from 'components'
import EmployeeDetails from './partials/employee-details'
import leavesData from 'pages/leaves/partials/leaves-data'

const DataComponents = [
  {title: 'Employee Details', component: EmployeeDetails},
  {title: 'Payslips', component: Payslips},
  {title: 'Increments', component: Increments},
  {title: 'Leaves', component: Leaves},
  {title: 'Leave Data', component: leavesData}
]

export default props => {
  const {employeeData, leaveData, fetchInitialData, history} = props
  if (fetchInitialData) return <Loader />
  const {employee_name} = employeeData

  return (
    <>
      <Title title={employee_name} hideButton />
      <TabView>
        {DataComponents.map(({title, component: Component}, i) => (
          <TabPanel key={i} header={title}>
            <Component {...leaveData} {...employeeData} history={history} />
          </TabPanel>
        ))}
      </TabView>
    </>
  )
}
