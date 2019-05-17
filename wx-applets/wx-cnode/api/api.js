import {http} from './http';

function topics(params) {
  return http('topics', params).then(res => res).catch(err => err)
}

function topicDetail(params) {
  return http(`topic/${params.id}`,{ mdrender:true}).then(res => res).catch(err => err)
}


module.exports = {
  topics,
  topicDetail

}
  