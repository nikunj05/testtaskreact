import React from 'react'
import {Label, Input} from '@windmill/react-ui'
import {filter} from 'lodash'
import {BaseButton} from 'components'

export default props => {
  const {items, setItems} = props
  const onChange = (index, event) => {
    const values = [...items]
    const value = event.target.value
    const name = event.target.name
    values[index][name] = value
    setItems(values)
  }

  const addField = () => setItems([...items, {name: '', amount: ''}])

  const removeField = index => {
    const values = filter(items, (item, i) => i !== index)
    setItems(values)
  }
  const ItemFiled = (item, i) => (
    <form
      className="flex flex-row mb-2"
      key={i}
      onChange={event => onChange(i, event)}>
      <div className="grid gap-y-4 gap-2 grid-cols-1 md:grid-cols-4 col-span-4 lg:col-span-4">
        <Input
          className="my-1 max-h-10 h-10 col-span-2"
          type="text"
          placeholder="Name"
          name="name"
          value={item.name ?? ''}
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
    <div className="col-span-12 my-3">
      <Label className="mt-2">Items</Label>
      {items.map(ItemFiled)}

      <BaseButton
        className="p-button-outlined p-button-secondary"
        onClick={addField}
        label="Add More"
      />
    </div>
  )
}
