import React from 'react'
import {Field} from 'redux-form'
import {BaseInput, BaseSelect, FileInput, BaseDatePicker} from 'components/base'
import MileStone from './milestone'
import EmployeeSelect from './employee-select'
import {fileUrl} from 'utils'
import {CURRENCIES} from 'stores/common/helpers'

export default props => {
  const {
    handleSubmit,
    clients,
    projectTypes,
    isEditScreen,
    onSubmit,
    formValues
  } = props
  const image = fileUrl(formValues.project_files)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full">
        <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
          Basic Info
        </h6>
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="grid gap-y-6 gap-2 grid-cols-1 md:grid-cols-2 col-span-5 lg:col-span-4">
            <Field
              required
              label="Project Name"
              name="project_name"
              component={BaseInput}
              type="text"
              placeholder="Project Name"
              className="mt-1"
            />
            <Field
              label="Project cost"
              name="project_cost"
              component={BaseInput}
              type="text"
              placeholder="Project cost"
              className="mt-1"
            />
            <Field
              items={clients}
              name="client"
              label="Client"
              displayKey="client_name"
              required
              component={BaseSelect}
            />
            <Field
              items={projectTypes}
              name="project_type"
              label="Category"
              displayKey="name"
              required
              component={BaseSelect}
            />
            <Field
              name="currency"
              label="Currency"
              displayKey={'currency'}
              items={CURRENCIES}
              renderItem={item => (
                <div className="flex flex-1 justify-between">
                  <div>{`${item.currency} (${item.code})`}</div>
                  <span>{item.symbol}</span>
                </div>
              )}
              component={BaseSelect}
            />
            <Field
              label="Start Date"
              name="start_date"
              component={BaseDatePicker}
              placeholder="Start Date"
            />

            <Field
              label="End Date"
              name="end_date"
              component={BaseDatePicker}
              placeholder="End Date"
            />
          </div>
        </div>

        <h6 className="col-span-5 text-lg font-semibold text-left lg:col-span-1">
          Other Details
        </h6>
        <EmployeeSelect {...props} />
        <MileStone {...props} />
        <Field
          label="Project Files"
          name="project_files"
          multiple="multiple"
          accept=""
          component={FileInput}
          previewImage={isEditScreen && image}
        />
      </div>
    </form>
  )
}
