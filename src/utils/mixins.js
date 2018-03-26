export function IsPC () {
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true

  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}

/**
 * 根据身份证号码获取基础信息
 * userCard
 */
export function IdCard (userCard) {
  // 获取出身日期
  let birth = userCard.substring(6, 10) + '-' + userCard.substring(10, 12) + '-' + userCard.substring(12, 14)
  let sex = parseInt(userCard.substr(16, 1)) % 2 === 1 ? '男' : '女'
  // 获取年龄
  let myDate = new Date()
  let month = myDate.getMonth() + 1
  let day = myDate.getDate()
  let age = myDate.getFullYear() - userCard.substring(6, 10) - 1
  if ((userCard.substring(10, 12) < month || userCard.substring(10, 12) === month) && userCard.substring(12, 14) <= day) {
    age++
  }
  return {
    birth,
    sex,
    age
  }
}
