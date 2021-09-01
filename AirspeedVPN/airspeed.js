/*
微信公众号：少年歌行PRO 制作

电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot

QQ群：654371081

圈X配置：
[rewrite_local]
^https:\/\/api\.express-api\.com\/v1\/device url script-response-body https://github.com/sngxpro/QuantumultX/blob/master/AirspeedVPN/airspeed.js
[mitm]
hostname = api.express-api.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/v1\/device';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["expire"] = 1800000000000;
	obj.data["type"] = "vip";
	body = JSON.stringify(obj);  
 }
 $done({body});
