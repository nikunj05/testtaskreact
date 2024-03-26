import {compose, lifecycle, withHandlers, withState} from 'recompose'
import CreatePayslip from './create-payslip'
import {connect} from 'react-redux'
import {getFormValues, reduxForm} from 'redux-form'
import {hasObjectLength} from 'utils/condition'
import paths from 'navigation/navigation-routes'
import {createPayslip} from 'stores/payslip/actions'
import {PAYSLIP_FORM} from 'stores/payslip/types'
import {sum, subtract} from 'lodash'
import {pdfTemplates} from 'stores/common/helpers'
import {routeParamsSelector} from 'stores/common/selector'
import {fetchSingleEmployee} from 'stores/employee/actions'
import {monthYearDate} from 'utils'

const mapStateToProps = (state, {match}) => ({
  formValues: getFormValues(PAYSLIP_FORM)(state) || {},
  ...routeParamsSelector(match),
  initialValues: {
    basic_salary: null,
    deductions: null,
    professional_tax: null,
    leave_deduction: null
  }
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: PAYSLIP_FORM}),
  withState('employee', 'setEmployeeData', null),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    getFinalAmountData: props => () => {
      const {formValues} = props
      const {basic_salary, deductions, professional_tax, leave_deduction} =
        formValues
      const total_deduction = sum([
        +deductions,
        +professional_tax,
        +leave_deduction
      ])
      const total = subtract(+basic_salary, +total_deduction)

      return {
        basic_salary,
        deductions,
        professional_tax,
        leave_deduction,
        total,
        total_deduction
      }
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {dispatch, employee, setIsSaving, history, getFinalAmountData} =
        props
      await setIsSaving(true)
      const params = {
        ...data,
        start_date: monthYearDate(data.start_date),
        employee,
        ...getFinalAmountData()
      }
      const onSuccess = data => {
        history.push({
          pathname: paths.PDF_VIEW,
          params: {data, template: pdfTemplates.payslip}
        })
      }
      dispatch(createPayslip(params, onSuccess, setIsSaving))
    }
  }),
  lifecycle({
    async componentDidMount() {
      const {
        params,
        setEmployeeData,
        setFetchInitialData: spinner,
        dispatch,
        history
      } = this.props
      const id = params?.id
      if (!id || id === ':id') return history.push({pathname: paths.EMPLOYEES})
      await dispatch(fetchSingleEmployee(id, setEmployeeData, spinner))
    }
  })
)(CreatePayslip)
