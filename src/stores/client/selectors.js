import {createSelector} from 'reselect'

const clientStore = state => state?.client

export const clientsSelector = createSelector(
  clientStore,
  store => store.clients
)
