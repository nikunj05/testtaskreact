import React from 'react'
import {Label, Input} from '@windmill/react-ui'
import {filter} from 'lodash'
import {Calendar} from 'primereact'
import {BaseButton} from 'components'

export default props => {
  const {milestones, setMilestones} = props
  const onChange = (index, event) => {
    const values = [...milestones]
    const value = event.target.value
    const name = event.target.name
    values[index][name] = value
    setMilestones(values)
  }

  const addField = () =>
    setMilestones([...milestones, {title: '', date: '', amount: ''}])

  const removeField = index => {
    const values = filter(milestones, (item, i) => i !== index)
    setMilestones(values)
  }
  const MilestoneFiled = (item, i) => (
    <form
      className="flex flex-row mb-2"
      key={i}
      onChange={event => onChange(i, event)}>
      <div className="grid gap-y-4 gap-1 grid-cols-1 md:grid-cols-4 col-span-4 lg:col-span-4">
        <Input
          className="my-1 max-h-10 h-10"
          type="text"
          placeholder="title"
          name="title"
          value={item.title ?? ''}
        />
        <Calendar
          className="my-1 max-h-10 h max-w-40 min-w-40"
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
          placeholder="Amount"
          name="amount"
          value={item.amount ?? ''}
        />
        <BaseButton
          icon="pi pi-trash"
          className="p-button-outlined p-button-danger"
          label="Remove"
          onClick={() => removeField(i)}
        />
      </div>
    </form>
  )

  return (
    <div className="my-3">
      <Label className="mt-2">Milestone</Label>
      {milestones.map(MilestoneFiled)}
      <BaseButton
        className="p-button-outlined p-button-secondary"
        onClick={addField}
        label="Add More"
      />
    </div>
  )
}
