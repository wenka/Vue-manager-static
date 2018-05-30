const state = {
  breadcrumbs: [
    {
      label: '首页',
      name: 'home'
    }
  ]
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
  }
}
export default {
  state,
  mutations
}
