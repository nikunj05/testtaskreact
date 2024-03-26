import React, {Component} from 'react'
import {change} from 'redux-form'
import {ListView} from '../list-view'
import {hasTextLength, internalSearch, hasValue, isEmpty} from 'utils'
import {ScrollView} from '@cantonjs/react-scroll-view'
import {Modal, ModalHeader} from '@windmill/react-ui'
import {Loader} from 'components'
const ITEMS_PER_PAGE = 20

const isScrollToEnd = e =>
  e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight

export class InternalPagination extends Component {
  constructor(props) {
    super(props)
    this.state = this.initialState()
  }

  componentDidMount() {
    this.setInitialState()
  }

  initialState = () => {
    return {
      search: '',
      visible: false,
      searchItems: [],
      itemList: [],
      currentPage: 0,
      loading: this.props?.hideLoader ? false : true,
      searchLoading: false,
      bottomLoader: false
    }
  }

  setInitialState = async () => {
    const {compareField, input, items, displayName} = this.props
    const value = input?.value
    if (!value) return
    let newValue = ''
    for (const key in items) {
      const field = items[key][compareField]
      if (hasValue(key) && field && field.toString() === value) {
        newValue = items[key][displayName]
        break
      }
    }
    await this.setState({
      values: compareField ? newValue : value[displayName],
      searchItems: items || []
    })
  }

  openModal = () => this.setState({visible: true})
  onClose = () => this.setState({visible: false})
  onToggle = () => {
    const {meta, input, isAllowToSelect = true} = this.props
    const {visible} = this.state

    if (!isAllowToSelect) {
      return
    }

    if (visible) {
      this.setState(this.initialState())
      meta.dispatch(change(meta.form, `search-${input?.name}`, ''))
    } else {
      this.setInitialState()
      this.setState({visible: true})
      this.getItems()
    }
  }

  onItemSelect = item => {
    const {onSelect, displayName} = this.props

    if (!hasValue(item)) {
      this.setState({values: null})
      return
    }

    this.setState({values: item[displayName]})
    this.onToggle()
    onSelect && onSelect(item)
  }

  onSearch = async search => {
    this.setState({searchLoading: true, search})
    const {items, searchFields} = this.props
    const newData = internalSearch({
      items,
      search,
      searchFields
    })

    await this.setState({searchItems: newData, currentPage: 0, itemList: []})
    await this.getItems()
  }

  getEmptyTitle = () => {
    const {search} = this.state
    let noSearchResult = 'No search result for'
    return hasTextLength(search) ? `${noSearchResult} "${search}"` : ''
  }

  getItems = async () => {
    const {
      search,
      currentPage,
      searchItems,
      itemList,
      searchLoading,
      loading,
      bottomLoader
    } = this.state
    const {items} = this.props
    !bottomLoader && (await this.setState({bottomLoader: true}))

    const currentItemsList = hasTextLength(search) ? searchItems : items
    const itemsList = currentItemsList.slice(
      currentPage * ITEMS_PER_PAGE,
      (currentPage + 1) * ITEMS_PER_PAGE
    )

    this.setState({
      itemList: [...itemList, ...itemsList],
      currentPage: currentPage + 1
    })

    if (searchLoading) {
      this.setState({searchLoading: false})
    }
    if (loading) {
      this.setState({loading: false})
    }
    bottomLoader && this.setState({bottomLoader: false})
  }

  render() {
    const {items, label, placeholder, listViewProps, input, isRequired} =
      this.props
    const value = input?.value
    const {
      visible,
      values,
      itemList,
      currentPage,
      loading,
      bottomLoader,
      searchItems,
      search
    } = this.state
    const lastPage = Math.ceil(
      hasTextLength(search)
        ? searchItems.length / ITEMS_PER_PAGE
        : items.length / ITEMS_PER_PAGE
    )
    const isMoreItems = currentPage < lastPage

    const loader = <Loader />
    const onScroll = e => isScrollToEnd(e) && isMoreItems && this.getItems()
    return (
      <div>
        <Modal isOpen={visible} onClose={this.onClose}>
          <ModalHeader>{label}</ModalHeader>
          <ScrollView
            scrolleventthrottle={400}
            className="h-64"
            showsverticalscrollindicator="false"
            onScroll={onScroll}>
            <ListView
              items={itemList}
              onClick={this.onItemSelect}
              isEmpty={isEmpty(itemList)}
              bottomDivider={true}
              emptyTitle={this.getEmptyTitle()}
              {...listViewProps}
            />
            {!loading && bottomLoader && isMoreItems && loader}
          </ScrollView>
        </Modal>
      </div>
    )
  }
}
