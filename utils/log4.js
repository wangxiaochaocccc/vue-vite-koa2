/*
 * 日志规范封装
 * @Author: 王超 
 * @Date: 2022-05-05 22:47:23 
 * @Last Modified by: 王超
 * @Last Modified time: 2022-05-05 23:14:56
 */

const log4js = require("log4js");

const levels = {
  'trace': log4js.levels.TRACE,
  'debug': log4js.levels.DEBUG,
  'info': log4js.levels.INFO,
  'warn': log4js.levels.WARN,
  'error': log4js.levels.ERROR,
  'fatal': log4js.levels.FATAL
}

log4js.configure({
  appenders: {
    console: { type: 'console' },
    info: {
      type: 'file',
      filename: 'logs/all-logs.log'
    },
    error: {
      type: 'dateFile',
      filename: 'logs/log',
      pattern: 'yyyy-MM-dd.log',
      alwaysIncludePattern: true //设置文件名称为 filename + pattern
    }
  },
  categories: {
    default: { appenders: ['console'], level: 'debug' },
    info: {
      appenders: ['error', 'console'],
      level: 'error'
    },
    error: {
      appenders: ['error','console'],
      level: 'error'
    }
  }
})

/**
 * 日志输出 debug
 * @param {string} content
 * */ 

exports.debug = content => {
  let loger = log4js.getLogger()
  loger.level = levels.debug
  loger.debug(content)
}

/**
 * 日志输出 info
 * @param {string} content
 * */ 

 exports.info = content => {
  let loger = log4js.getLogger('info')
  loger.level = levels.info
  loger.info(content)
 }


/**
 * 日志输出 error
 * @param {string} content
 * */ 

 exports.error = content => {
  let loger = log4js.getLogger('error')
  loger.level = levels.error
  loger.error(content)
}