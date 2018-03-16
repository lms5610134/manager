import server from 'utils/request';

/**
 *  导入资产
 * @param file  excel文件  必传
 */
export function deviceBatch (file) {
  var data = {
    file
  }
  return server({
    url: '/device/batch',
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
 *
 * @param data 修改后的参数  数据类型：对象
 * -------------------------------------------
 * deviceNo       是  设备编码
 * userno         否  用户工号
 * qrcode         否  二维码编码
 * name           否  设备名称
 * brand           否  品牌
 * model           否  型号
 * arrival_date    否  到货日期
 * affairs_no     否  入库员
 * status         否  设备状态
 * create_no       否  入库员
 * username       否  责任人
 * dept           否  部门
 * office         否  办公地点
 * company         否  公司
 * remark         否  设备备注*
 */
export function deviceUpdate(data) {
  data = {
    ...data
  }
  return server({
    url: '/device/update',
    method: 'post',
    data,
    transformRequest: [function (data) {
      var bodyFormData = new FormData()
      for (let it in data) {
        if (it.indexOf('time') === -1) {
          bodyFormData.set(it, data[it])
        } else {
            delete data[it]
        }
      }
      console.log()
      return bodyFormData
    }]
  })
}

/**
 *  个人资产查询
 * @param userno 工号  数据类型: 字符串/数字
 */
// export function deviceGet(userno) {
//   var data = {
//     userno
//   }
//   return request({
//     url: '/device/get',
//     method: 'post',
//     data
//   })
// }

/**
 *  资产查询
 * @param data  查询参数   数据类型：对象
 * -------------------------------------------
 * deviceNo    否  资产编号
 * userno      否  用户工号
 * qrcode      否  二维码编号
 * currentPage  否  当前页数，默认1
 * pageSize    否  每页显示的数量，默认10
 */
export function deviceQuery (data) {
  console.log(data)
  return server({
    url: '/device/query',
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
 * 资产变更记录
 * @param deviceNo  设备编号
 */
export function deviceChange(deviceNo) {
  var data = {
    deviceNo
  };
  return server({
    url: '/device/change',
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
