import React from 'react'
import {Label, Input} from '@windmill/react-ui'
import {Calendar} from 'primereact'
import {filter} from 'lodash'
import {BaseButton} from 'components'

export default props => {
  const {increments, setIncrements} = props
  const onChange = (index, event) => {
    const values = [...increments]
    const value = event.target.value
    const name = event.target.name
    values[index][name] = value
    setIncrements(values)
  }

  const addField = () =>
    setIncrements([...increments, {percentage: '', date: '', amount: ''}])

  const removeField = index => {
    const values = filter(increments, (item, i) => i !== index)
    setIncrements(values)
  }
  const IncrementFiled = (item, i) => (
    <form
      className="flex flex-row my-3"
      key={i}
      onChange={event => onChange(i, event)}>
      <div className="grid gap-y-4 gap-1 grid-cols-1 md:grid-cols-4 col-span-4 lg:col-span-4">
        <Calendar
          className="my-1 mx-4 min-w-40 h-12"
          placeholder={item.date ?? 'Date'}
          name="date"
          dateFormat="dd/mm/yy"
          onChange={event => onChange(i, event)}
          value={item.date}
          defaultValue={item.date}
        />
        <Input
          className="my-1 max-h-10 h-10"
          type="text"
          placeholder="Percentage"
          name="percentage"
          value={item.percentage ?? ''}
        />
        <Input
          className="my-1 max-h-10 h-10"
          type="text"
          placeholder="Amount"
          name="amount"
          value={item.amount ?? ''}
        />
        <BaseButton
          icon="pi pi-trash"
          className="min-w-40 p-button-outlined p-button-danger"
          label="Remove"
          onClick={() => removeField(i)}
        />
      </div>
    </form>
  )
  return (
    <div className="mb-3">
      <Label className="mt-2">Increment</Label>
      {increments.map(IncrementFiled)}
      <BaseButton
        className="p-button-outlined p-button-secondary"
        onClick={addField}
        label="Add More"
      />
    </div>
  )
}
