/*
微信公众号：少年歌行PRO 制作

电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot

QQ群：654371081

圈X配置：
[rewrite_local]
^https:\/\/irecgo\.softin-tech\.com\/user\/info url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/lw/lw.js

[mitm]
hostname = irecgo.softin-tech.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/user\/info';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["expires_date_ms"] = 1800000000111;
	body = JSON.stringify(obj);  
 }
$done({body});
