// config - 中文含义为配置
// - 我们可以将项目中使用的接口地址统一保存在这个文件中

var baseUrl = 'http://localhost:8000';

var USER_LOGIN = baseUrl + '/admin/login';
var USER_LOGOUT = baseUrl + '/admin/logout';
var USER_INFO = baseUrl + '/admin/login';
var USER_PIC=baseUrl+ '/admin/getuser';
var USER_GET=baseUrl+ '/admin/userinfo_get';
var USER_POST=baseUrl+'/admin/userinfo_edit';