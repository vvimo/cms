import request from '@/utils/request'

// 薪酬体系分类查询
function salaryStandard (req) {
  return request({
    url: '/ehr/control/salaryStandard',
    method: 'post',
    data: {}
  })
}

// 体系明细项查询
function standardCategory (req) {
  return request({
    url: '/ehr/control/standardCategory',
    method: 'post',
    data: req
  })
}

// 体系明细项设置查询
function standardCategorySet (req) {
  return request({
    url: '/ehr/control/standardCategorySet',
    method: 'post',
    data: req
  })
}

// 体系明细项设置增删改
function standardCategorySetMod (req) {
  return request({
    url: '/ehr/control/standardCategorySetMod',
    method: 'post',
    data: req
  })
}

// 薪酬体系分类增加
function salaryStandardAdd (req) {
  return request({
    url: '/ehr/control/salaryStandardAdd',
    method: 'post',
    data: req
  })
}

// 薪酬体系分类修改
function salaryStandardMod (req) {
  return request({
    url: '/ehr/control/salaryStandardMod',
    method: 'post',
    data: req
  })
}

// 薪酬体系分类删除
function salaryStandardDel (req) {
  return request({
    url: '/ehr/control/salaryStandardDel',
    method: 'post',
    data: req
  })
}

// 薪酬预算-查询个人预算
function salaryTryCount (req) {
  return request({
    url: '/ehr/control/salaryTryCount',
    method: 'post',
    data: req
  })
}

function standardCategoryMod (req) {
  return request({
    url: '/ehr/control/standardCategoryMod',
    method: 'post',
    data: req
  })
}

function standardCategoryDel (req) {
  return request({
    url: '/ehr/control/standardCategoryDel',
    method: 'post',
    data: req
  })
}

export default {
  salaryStandard,
  standardCategory,
  standardCategorySet,
  standardCategorySetMod,
  salaryStandardAdd,
  salaryStandardMod,
  salaryStandardDel,
  salaryTryCount,
  standardCategoryMod,
  standardCategoryDel
}
