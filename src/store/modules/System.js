const state = {
  breadcrumbs: [
    {
      label: '首页',
      name: 'main'
    }
  ]
}

const mutations = {
  updateBreadcrumb: function (state, breadcrumbs) {
    let paths = [
      {
        label: '首页',
        name: 'main'
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
