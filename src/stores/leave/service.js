import Request from 'utils/request'

export const fetchLeaves = id => Request.get(`leave/${id}`)
export const fetchSingleLeave = id => Request.get(`leave/single/${id}`)
export const createLeave = params => Request.post('leave', params)

export const acceptLeave = id =>
  Request.put(`leave/action/${id}`, {status: 'accepted'})

export const rejectLeave = id =>
  Request.put(`leave/action/${id}`, {status: 'rejected'})
