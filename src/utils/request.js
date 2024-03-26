import {logoutSuccess} from 'stores/auth/actions'
import axios from 'axios'
import {hasValue} from './condition'
import {store as reduxStore} from 'stores'
import env from 'config/config-api'

type IProps = {
  path: string,
  method?: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE',
  header?: Object,
  data?: Object,
  axiosProps?: any,
  image: any
}

export default class Request {
  static get(path, options = {}) {
    return this.request({method: 'GET', path, ...options})
  }

  static post(path, data, options = {}) {
    return this.request({method: 'POST', path, data, ...options})
  }

  static put(path, data, options = {}) {
    return this.request({method: 'PUT', path, data, ...options})
  }

  static delete(path, data, options = {}) {
    return this.request({method: 'DELETE', path, data, ...options})
  }

  static createFormData = (data, withFormData, withFile = false) => {
    if (!withFormData) {
      return JSON.stringify(data)
    }

    const formData = new FormData()
    if (!hasValue(data)) {
      return formData
    }
    for (const key in data) {
      data.hasOwnProperty(key) && formData.append(key, data[key])
    }
    if (withFile) {
      const files = Object.keys(data?.project_files).map(
        key => data?.project_files[key]
      )
      if (files) files.forEach(file => formData.append('project_files', file))
    }
    return formData
  }

  static createImageFormData = (data, image) => {
    const formData = new FormData()

    const uri = image.uri
    const uriParts = uri.split('.')
    const fileType = uriParts[uriParts.length - 1]

    formData.append(
      image.name,
      JSON.stringify({
        name: uri.includes('.') ? `${image.name}.${fileType}` : `${image.name}`,
        data: image.base64.trimRight()
      })
    )

    if (!hasValue(data)) {
      return formData
    }
    for (const key in data) {
      data.hasOwnProperty(key) && formData.append(key, data[key])
    }
    return formData
  }

  static async request({
    path,
    method,
    data,
    header = {},
    image,
    axiosProps,
    withFormData = false,
    withFile = false,
    throw_error = true,
    includes,
    expand,
    cancelToken
  }: IProps) {
    const store = reduxStore.getState()
    const {idToken} = store.auth
    const url = `${env.ENDPOINT_API}${path}`
    const defaultHeader = {
      Authorization: idToken,
      Accept: 'application/json',
      'Content-Type': image ? 'multipart/form-data' : 'application/json',
      ...header
    }

    const params = !image
      ? Request.createFormData(data, withFormData, withFile)
      : Request.createImageFormData(data, image)

    return axios({
      method,
      url,
      headers: defaultHeader,
      data: params,
      ...(includes && {params: {includes}}),
      ...(expand && {params: {expand}}),
      ...axiosProps,
      ...(cancelToken && {cancelToken: cancelToken.token})
    })
      .then(function (response) {
        const {data} = response
        if (data && data.hasOwnProperty('error') && throw_error) {
          throw {response: {data: {...data, status: 422}}}
        }

        return data
      })
      .catch(function ({response}) {
        if (response?.status === 401) {
          reduxStore.dispatch(logoutSuccess())
        }

        throw response
      })
  }
}
