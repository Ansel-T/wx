import {http} from './http';

function topics(params) {
  return http('topics', params).then(res => res)
}

function topicDetail(params) {
  return http(`topic/${params.id}`, { mdrender:true}).then(res => res)
}


module.exports = {
  topics,
  topicDetail

}
  