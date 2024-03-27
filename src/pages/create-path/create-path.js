import React, {useState} from 'react'
import {BaseButton, FileInput, BaseSelect, BaseInput} from 'components'
import {HelperText, Button} from '@windmill/react-ui'

import {fileUrl} from 'utils'
import Breadcrumbs from './partials/breadcrumbs'

export default props => {
  const onSubmit = () => {}
  const [skillAndProficiency, setSkillAndProficiency] = useState([
    {skill: null, proficiency: null}
  ])
  const [img, setImg] = useState(null)
  const image = fileUrl(img)

  return (
    <div className="items-center justify-center min-h-screen ">
      <div className="flex-1 justify-center h-full max-w-4xl p-6 mx-auto overflow-hidden bg-white rounded- py-10 ">
        <Breadcrumbs />
        <main className="flex-1 items-center justify-center min-w-4xl border border-gray-300 rounded-lg">
          <form onSubmit={onSubmit}>
            <div className="mb-4 py-4 px-6 w-full border-b border-gray-300">
              <h1 className="mb-1 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Learning Path Overview
              </h1>
              <HelperText className="text-xs">
                Define the title, description, and other high-level details for
                your personalized learning path.
              </HelperText>
            </div>
            <div className="w-full p-6">
              <BaseInput
                label="Learning Path Name"
                name="email"
                type="description"
                placeholder="Write name of the path here"
              />
              <BaseInput
                label="Learning Path Description"
                name="password"
                type="textarea"
                placeholder="Write learning path description"
                className="mb-5"
              />
              {skillAndProficiency?.map((item, i) => {
                const {skill, proficiency} = item
                const setSkill = value => {
                  setSkillAndProficiency([
                    ...skillAndProficiency.slice(0, i),
                    {skill: value, proficiency: proficiency},
                    ...skillAndProficiency.slice(i + 1)
                  ])
                }
                const setProficiency = value => {
                  setSkillAndProficiency([
                    ...skillAndProficiency.slice(0, i),
                    {skill: skill, proficiency: value},
                    ...skillAndProficiency.slice(i + 1)
                  ])
                }
                return (
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 col-span-5 lg:col-span-4">
                    <BaseSelect
                      name="skill"
                      label="Skills Acquisition"
                      placeholder={'Select skills'}
                      value={skill}
                      onChange={setSkill}
                      displayKey={'name'}
                      items={SKILLS}
                    />
                    <BaseSelect
                      name="proficiency_level"
                      label="Proficiency Level"
                      placeholder={'Select proficiency level'}
                      value={proficiency}
                      onChange={setProficiency}
                      displayKey={'name'}
                      items={PROFICIENCY}
                    />
                  </div>
                )
              })}
              <Button
                onClick={() =>
                  setSkillAndProficiency([
                    ...skillAndProficiency,
                    {skill: null, proficiency: null}
                  ])
                }
                className="mb-5"
                layout="outline">
                + Add more
              </Button>
              <FileInput
                value={img}
                onChange={({value}) => setImg(value)}
                label="Thumbnail"
                name="project_files"
                multiple="multiple"
                accept=""
              />
            </div>
          </form>
        </main>
      </div>
      <div className="mt-16 flex justify-end flex-1 p-6  bg-white border-t-2 border-gray-200">
        <Button disabled layout="outline">
          Save & Continue
        </Button>
      </div>
    </div>
  )
}

export const SKILLS = [
  {type: 'communication', name: 'Communication'},
  {type: 'customer_service', name: 'Customer service'},
  {type: 'problem_solving', name: 'Problem-solving'},
  {type: 'time_management', name: 'Time management'}
]
export const PROFICIENCY = [
  {name: '25%', type: '25'},
  {name: '50%', type: '50'},
  {name: '75%', type: '75'},
  {name: '100%', type: '100'}
]
