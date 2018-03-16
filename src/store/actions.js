const actions = {
  action1 (context) {
    context.commit('setAssets', '我是action1变的')
  },
  action2 ({commit}) {
    commit('setAssets', '我是action2变的')
    setTimeout(function () {
      commit('setAssets', '我是action2变的dedededede')
    }, 2000)
    console.log(11111111)
  }
}
export default actions
