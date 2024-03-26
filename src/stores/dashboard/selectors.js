import {createSelector} from 'reselect'

const dashboardStore = state => state?.dashboard

export const dashboardsSelector = createSelector(dashboardStore, store => store)
