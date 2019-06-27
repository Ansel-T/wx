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

/**
 * 消息相关
 */
function fetchMessageCount(params){
  return http(`message/count`, params,false).then(res => res).catch(err => err)
}

/**
 * 获取已读和未读消息
 */
function fetchMessage(params){
  return http(`messages`,params).then(res => res).catch(err => err)
}

/**
 * 标记全部已读
 */
function setMessageMarkAll(params) {
  return http(`/message/mark_all`, params).then(res => res).catch(err => err)
}

/**
 * 标记单个消息为已读
 */
function setMessageMarkOne(params) {
  return http(`/message/mark_one/${params.msgId}`, params).then(res => res).catch(err => err)
}

module.exports = {
  topics,
  topicDetail,
  checkToken,
  fetchUserInfo,
  fetchCollect,
  addCollect,
  deCollect,
  fetchMessageCount,
  fetchMessage,
  setMessageMarkAll,
  setMessageMarkOne


}
  