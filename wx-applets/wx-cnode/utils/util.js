const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const lastAt = data => {
  let n = Date.parse(new Date()),
      e = Date.parse(new Date(data)),
      diff = n - e,
      seconds = Math.round(diff / 1000),
      mm = Math.round(seconds / 60),
      h = Math.round(mm / 60 ),
      d = Math.round(h / 24),
      m = Math.round(d / 30),
      y = Math.round(d / 365),
      dTime = seconds < 60 && '几秒前' || 
              mm < 60 && `${mm} 分钟前`  ||
              h < 24 && `${h} 小时前`  ||
              d < 30 && `${d} 天前 `   ||
              m < 12  && `${m} 个月前` ||
              `${y} 年前`;
      return dTime;
}


module.exports = {
  formatTime: formatTime,
  lastAt: lastAt
}
