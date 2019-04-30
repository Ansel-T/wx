import {http} from './http';

function topics(params) {
  return http('topics', params).then(res => res)
}


module.exports = {
  topics
}
  