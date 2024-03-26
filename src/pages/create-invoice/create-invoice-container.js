import {compose, lifecycle, withHandlers, withState} from 'recompose'
import CreateInvoice from './create-invoice'
import {connect} from 'react-redux'
import {
  addInvoice,
  fetchSingleInvoice,
  updateInvoice
} from 'stores/invoice/actions'
import {change, getFormValues, initialize, reduxForm} from 'redux-form'
import {hasObjectLength} from 'utils/condition'
import {projectsSelector} from 'stores/project/selectors'
import {fetchProjects} from 'stores/project/actions'
import {sumBy} from 'lodash'
import paths from 'navigation/navigation-routes'
import {pdfTemplates} from 'stores/common/helpers'
import {formattedDate} from 'utils'

const mapStateToProps = (state, {location}) => ({
  formValues: getFormValues('INVOICE_FORM')(state) || {},
  isEditScreen: hasObjectLength(location.params),
  projects: projectsSelector(state)
})

export default compose(
  connect(mapStateToProps),
  reduxForm({form: 'INVOICE_FORM'}),
  withState('fetchInitialData', 'setFetchInitialData', true),
  withState('items', 'setItems', [{name: '', amount: ''}]),
  withState('tax', 'setTax', {name: 'GST (18%)', value: 18}),
  withState('isSaving', 'setIsSaving', false),
  withHandlers({
    getFinalAmountData: props => () => {
      const {items, tax} = props
      const subtotal = sumBy(items, ({amount}) => +amount) ?? 0
      const taxValue = subtotal * (tax.value / 100)
      const total = subtotal + taxValue
      const taxName = tax.name
      return {subtotal, taxValue, taxName, total}
    }
  }),
  withHandlers({
    setFormData: props => data =>
      props.dispatch(initialize('INVOICE_FORM', data)),
    setFormField: props => (field, value) =>
      props.dispatch(change('INVOICE_FORM', field, value))
  }),
  withHandlers({
    setInitialData: props => async data => {
      const {setFormData, setItems} = props
      setFormData({
        ...data,
        invoice_date: formattedDate(data.invoice_date),
        due_date: formattedDate(data.due_date)
      })
      const items = data?.items ?? []
      setItems(items)
    }
  }),
  withHandlers({
    onSubmit: props => async data => {
      if (!hasObjectLength(data)) return
      const {
        dispatch,
        isEditScreen,
        setIsSaving,
        getFinalAmountData,
        items,
        history
      } = props
      await setIsSaving(true)
      const params = {...data, items, ...getFinalAmountData()}
      const onSuccess = res => {
        history.push({
          pathname: paths.PDF_VIEW,
          params: {data: res, template: pdfTemplates.invoice}
        })
      }
      if (isEditScreen)
        return dispatch(updateInvoice(params, onSuccess, setIsSaving))
      dispatch(addInvoice(params, onSuccess, setIsSaving))
    }
  }),
  lifecycle({
    componentDidMount() {
      const {
        location: {params},
        setInitialData,
        setFetchInitialData: spinner,
        dispatch,
        isEditScreen
      } = this.props
      const id = params?._id
      if (isEditScreen)
        dispatch(fetchSingleInvoice(id, setInitialData, spinner))
      dispatch(fetchProjects(() => spinner(false)))
    }
  })
)(CreateInvoice)
