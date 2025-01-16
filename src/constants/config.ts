/**
 * 运行环境
 * PRODUCTION: 线上; TESTING: 测试; DEVELOPMENT: 开发
 */
export const MODE = import.meta.env.MODE as
  | 'DEVELOPMENT'
  | 'TESTING'
  | 'PRODUCTION';
