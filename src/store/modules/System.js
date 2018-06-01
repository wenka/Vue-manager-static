const state = {
  breadcrumbs: [
    {
      label: '首页',
      name: 'home'
    }
  ],
  menuCollapse: false
}

const mutations = {
  updateBreadcrumb: function (state, breadcrumbs) {
    let paths = [
      {
        label: '首页',
        name: 'home'
      }
    ]
    paths = paths.concat(breadcrumbs)
    state.breadcrumbs = paths
  },
  triggerCollapse: function (state) {
    state.menuCollapse = !state.menuCollapse
  }
}
export default {
  state,
  mutations
}
