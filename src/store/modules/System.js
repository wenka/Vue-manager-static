const state = {
  menuCollapse: false, // 菜单栏控制器
  breadcrumbs: [], // 面包屑
  userInfo: null
}

const mutations = {

  /**
   * 保存用户登录态
   * @param state
   * @param userInfo
   */
  updateUserInfo: function (state, userInfo) {
    state.userInfo = userInfo
  },
  /**
   * 更新头部面部屑
   * @param state
   */
  updateBreadcrumbs: function (state, breadcrumbList) {
    state.breadcrumbs = breadcrumbList
  },
  /**
   * 菜单栏状态 更改时间
   * @param state
   */
  triggerCollapse: function (state) {
    state.menuCollapse = !state.menuCollapse
  }
}
export default {
  state,
  mutations
}
