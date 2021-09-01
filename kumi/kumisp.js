
/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/lginstaacademy\.com\/\/api\/member url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/kumi/kumisp.js
[mitm]
hostname = lginstaacademy.com
[app下载地址]
km.app\
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/\/api\/member';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["is_vip"] = 1;
	obj.data["expire_time1"] = 1800000000;
	obj.data["expire_time"] = "2030-01-01";
	obj.data["re_today_view_times"] = 999;
	body = JSON.stringify(obj);  
 }

$done({body});
