import axios from 'axios'
import axiosCancel from 'axios-cancel'
import qs from 'qs'

axiosCancel(axios, {
  debug: false
})
window.CSRF_TOKEN = "<%= csrfToken %>"
const get = async (url, params, noCache, headers) => {
  if (false) {
    // return mockReqData[url]
  } else {
    axios.cancel(url)
    // Object.keys(params).map(item => {
    //   params[item] = decodeURIComponent(params[item])
    // })
    try {
      let options = {
        method: 'get',
        url,
        params: params,
        timeout: 30000,
        // herders
      }
      options.requestId = url
      const response = await axios(options)
      // if (response.data.status === -10000) {
      //   window.location = `//signin.aliyun.com/etbrain/login.htm?callback=${encodeURIComponent(location.href)}`
      // } else {
      return response
      // }
    } catch (err) {
      return {
        isError: true,
        statusCode: -10001,
        message: '接口异常',
        data: null
      }
    }
  }
}

const post = async (url, params, noCache, headers) => {
  console.log(params)
  if (false) {
    // return mockReqData[url]
  } else {
    axios.cancel(url)
    params = qs.stringify(params)
    try {
      let options = {
        method: 'post',
        url,
        data: params,
        timeout: 30000,
        headers: {
          /* 'x-csrf-token': `${CSRF_TOKEN}`, */
        }
      }
      options.requestId = url
      const response = await axios(options)
      return response
    } catch (err) {
      return {
        isError: true,
        statusCode: -10001,
        message: '接口异常',
        data: null
      }
    }
  }
}

const postPoi = async (url, params, noCache, headers) => {
  if (false) {
    // return mockReqData[url]
  } else {
    axios.cancel(url)
    params = qs.stringify(params)
    try {
      let options = {
        method: 'post',
        url,
        contentType:'application/x-www-form-urlencoded',
        data: params,
        timeout: 30000,
        headers: {
          /* 'x-csrf-token': `${CSRF_TOKEN}`, */
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
      options.requestId = url
      const response = await axios(options)
      return response
    } catch (err) {
      return {
        isError: true,
        statusCode: -10001,
        message: '接口异常',
        data: null
      }
    }
  }
}

const file = async (url, params, noCache, headers) => {
  if (false) {
    // return mockReqData[url]
  } else {
    axios.cancel(url)
    try {
      let options = {
        method: 'post',
        url,
        data: params,
        timeout: 30000,
        headers: {
          /* 'x-csrf-token': `${CSRF_TOKEN}`, */
          'contentType': 'application/x-www-form-urlencoded' 
        }
      }
      options.requestId = url
      const response = await axios(options)
      return response
    } catch (err) {
      return {
        isError: true,
        statusCode: -10001,
        message: '接口异常',
        data: null
      }
    }
  }
}

const put = async (url, params, noCache, headers) => {
  if (false) {
    // return mockReqData[url]
  } else {
    axios.cancel(url)
    try {
      let options = {
        method: 'put',
        url,
        params: params,
        timeout: 30000,
        headers: {
          /* 'x-csrf-token': `${CSRF_TOKEN}` */
        }
      }
      options.requestId = url
      const response = await axios(options)
      return response
    } catch (err) {
      return {
        isError: true,
        statusCode: -10001,
        message: '接口异常',
        data: null
      }
    }
  }
}

export default {
  get,
  post,
  file,
  put,
  postPoi
}