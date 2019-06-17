import {http} from './http';

function topics(params) {
  return http('topics', params).then(res => res).catch(err => err)
}

function topicDetail(params) {
  return http(`topic/${params.id}`,params).then(res => res).catch(err => err)
}

function checkToken(token){
  return http(`accesstoken`, { accesstoken:token, method: 'post' }).then(res => res).catch(err => err)
}

function fetchUserInfo(name) {
  return http(`user/${name}`).then(res => res).catch(err => err)
}

function fetchCollect(name) {
  return http(`topic_collect/${name}`).then(res => res).catch(err => err)
}

function addCollect(params) {
  return http(`topic_collect/collect`, params).then(res => res).catch(err => err)
}

function deCollect(params) {
  return http(`topic_collect/de_collect`, params).then(res => res).catch(err => err)
}

module.exports = {
  topics,
  topicDetail,
  checkToken,
  fetchUserInfo,
  fetchCollect,
  addCollect,
  deCollect

}
  