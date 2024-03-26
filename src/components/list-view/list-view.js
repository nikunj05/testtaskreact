import React, {Component} from 'react'
import {Text} from 'components'
import ListItem from './list-item'

export class ListView extends Component {
  constructor(props) {
    super(props)
  }

  leftTitle = title => {
    return <Text>{title}</Text>
  }

  leftSubTitle = ({title, label, labelComponent} = {}) => {
    if (!title && !label && !labelComponent) {
      return
    }

    return (
      <div>
        <Text>{title}</Text>

        {(label || labelComponent) && (
          <div>
            <div>{labelComponent ? labelComponent : <Text>{label}</Text>}</div>
          </div>
        )}
      </div>
    )
  }

  itemsList = (item, index) => {
    const {onClick, leftComponent, rightComponent, listItemProps} = this.props
    return (
      <ListItem
        key={index}
        title={item.name}
        subtitle={this.leftSubTitle(item.subtitle)}
        onClick={() => onClick(item)}
        rightTitle={item.rightTitle}
        rightSubtitle={item.rightSubtitle}
        leftComponent={leftComponent}
        rightComponent={rightComponent}
        {...listItemProps}
      />
    )
  }

  render() {
    const {items, isEmpty, emptyPlaceholder} = this.props

    if (isEmpty) return emptyPlaceholder ?? <span>Empty</span>
    return items.map((item, index) => this.itemsList(item, index))
  }
}
