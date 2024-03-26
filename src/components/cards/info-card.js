import React from 'react'
import {Card, CardBody} from '@windmill/react-ui'

export const InfoCard = ({title, value, children: icon, onClick, color}) => {
  return (
    <Card onClick={onClick} style={{borderColor: color, borderWidth: 1}}>
      <CardBody className="flex items-center">
        {icon}
        <div>
          <p
            className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"
            style={{color}}>
            {title}
          </p>
          <p
            className="text-lg font-semibold text-gray-700 dark:text-gray-200"
            style={{color}}>
            {value}
          </p>
        </div>
      </CardBody>
    </Card>
  )
}
