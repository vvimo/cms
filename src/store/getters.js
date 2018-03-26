const getters = {
  roles: state => state.user.roles,
  userInfo: state => state.user.info,
  user: state => state.user.user,
  sidebar: state => state.app.sidebar,
  language: state => state.app.language,
  hrViews: state => state.coreView.hrViews,
  timeViews: state => state.coreView.timeViews,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  status: state => state.user.status,
  setting: state => state.user.setting,
  permission_routers: state => state.permission.routers,
  addRouters: state => state.permission.addRouters,
  errorLogs: state => state.errorLog.logs
}
export default getters
