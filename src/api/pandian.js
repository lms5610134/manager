import server from 'utils/request';

/**
 *  盘点查询
 * @param data  查询参数   数据类型：对象
 * -------------------------------------------
 * deviceNo    否  资产编号
 * userno      否  用户工号
 * qrcode      否  二维码编号
 * currentPage  否  当前页数，默认1
 * pageSize    否  每页显示的数量，默认10
 */
export function pandianQuery (data) {
  console.log(data)
  return server({
    url: '/device/pd/query',
    method: 'post',
    data,
    transformRequest: [function (data) {
      var bodyFormData = new FormData()
      for (let it in data) {
        bodyFormData.set(it, data[it])
      }
      return bodyFormData
    }]
  })
}
/**
 *  盘点异常查询
 * @param data  查询参数   数据类型：对象
 * -------------------------------------------
 * deviceNo    否  资产编号
 * userno      否  用户工号
 * qrcode      否  二维码编号
 * currentPage  否  当前页数，默认1
 * pageSize    否  每页显示的数量，默认10
 */
export function pdycQuery (data) {
  console.log(data)
  return server({
    url: '/device/pdyc/query',
    method: 'post',
    data,
    transformRequest: [function (data) {
      var bodyFormData = new FormData()
      for (let it in data) {
        bodyFormData.set(it, data[it])
      }
      return bodyFormData
    }]
  })
}
/**
 *  跳过
 * @param data  查询参数   数据类型：对象
 */
export function skip (deviceNo) {
  var data = {
    deviceNo
  }
  return server({
    url: '/device/pdyc/jump',
    method: 'post',
    data,
    transformRequest: [function (data) {
      var bodyFormData = new FormData()
      for (let it in data) {
        bodyFormData.set(it, data[it])
      }
      return bodyFormData
    }]
  })
}
/**
 *  修正
 * @param data  查询参数   数据类型：对象
 */
export function amend (deviceNo) {
  var data = {
    deviceNo
  }
  return server({
    url: '/device/pdyc/correct',
    method: 'post',
    data,
    transformRequest: [function (data) {
      var bodyFormData = new FormData()
      for (let it in data) {
        bodyFormData.set(it, data[it])
      }
      return bodyFormData
    }]
  })
}
