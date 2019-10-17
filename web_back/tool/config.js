// config - 中文含义为配置
// - 我们可以将项目中使用的接口地址统一保存在这个文件中

var baseUrl = 'http://localhost:8000';

var USER_LOGIN = baseUrl + '/admin/login';
var USER_LOGOUT = baseUrl + '/admin/logout';
var USER_INFO = baseUrl + '/admin/login';
var USER_PIC=baseUrl+ '/admin/getuser';
var USER_GET=baseUrl+ '/admin/userinfo_get';
var USER_POST=baseUrl+'/admin/userinfo_edit';
var ARTICLE_SEARCH=baseUrl+'/admin/category_search';
var ARTICLE_ADD=baseUrl+'/admin/category_add';
var ARTICLE_EDIT=baseUrl+'/admin/category_edit';
var ARTICLE_DEL=baseUrl+'/admin/category_delete';
var ARTICLE_XUAN=baseUrl+'/admin/search';
var ARTICLE_DELETE=baseUrl+'/admin/article_delete'