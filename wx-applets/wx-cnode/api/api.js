import {http} from './http';

function userLogin(params) {
  return http('topics', params).then(res => res)
}


module.exports = {
  userLogin
}
  