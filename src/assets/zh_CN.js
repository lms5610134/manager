export default {
  name: 'cn',
  messages: {
    after: (field, [target]) => ` ${field}必须在${target}之后`,
    alpha_dash: (field) => ` ${field}只能包含字母数字下划线`,
    alpha_num: (field) => `只能包含字母和数字`,
    alpha_spaces: (field) => `只能包含字母字符，包括空格`,
    alpha: (field) => `只能包含字母`,
    before: (field, [target]) => ` ${field} 必须在${target} 之前`,
    between: (field, [min, max]) => ` ${field} 必须在${min} ${max}之间`,
    confirmed: (field, [confirmedField]) => `两次输入的内容不一致`,
    date_between: (field, [min, max]) => ` ${field}必须在${min}和${max}之间`,
    date_format: (field, [format]) => ` ${field}必须在在${format}格式中`,
    decimal: (field, [decimals] = ['*']) => ` ${field} 必须是数字的而且能够包含${decimals === '*' ? '' : decimals} 小数点`,
    digits: (field, [length]) => ` ${field} 必须是数字，且精确到 ${length}数`,
    dimensions: (field, [width, height]) => ` ${field}必须是 ${width} 像素到 ${height} 像素`,
    email: (field) => `必须是有效的邮箱`,
    ext: (field) => ` ${field} 必须是有效的文件`,
    image: (field) => ` ${field} 必须是图片`,
    in: (field) => ` ${field} 必须是一个有效值`,
    ip: (field) => ` 必须是一个有效的IP地址`,
    max: (field, [length]) => `不能大于${length}个字符`,
    mimes: (field) => ` ${field} 必须是有效的文件类型`,
    min: (field, [length]) => `不能小于${length}个字符`,
    not_in: (field) => ` ${field}必须是一个有效值`,
    numeric: (field) => `只能包含数字字符`,
    regex: (field) => ` ${field} 格式无效.`,
    required: (field) => `此处为必填`,
    size: (field, [size]) => ` ${field} 必须小于 ${size} KB`,
    url: (field) => ` ${field}不是有效的url`,
    iplist: (field) => ` 请输入有效的IP地址并用,隔开`
  },
  attributes: {
    username: '用户名',
    password: '密码',
    partnerName: '接入者名称',
    nameTag: '接入者名称标识'
  }
}
