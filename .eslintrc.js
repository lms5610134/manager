// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "space-before-function-paren": 0, //关闭括号前后空格限制
    "semi": 0,//语句强制分号结尾
    "eqeqeq": 0,  // 不允许使用2个等号
    "no-trailing-spaces":0,  // 末尾不准存在空格
    "eol-last":0, // 末尾必须有空行
    "space-in-parens":0,  // 括号里可以加空格
    "space-infix-ops":0, // 操作符必须用空格隔开
    'no-unreachable':0, // break、return等语句后不允许有语句 swith报错
    'indent': 0
  }
}
