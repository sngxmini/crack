/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^https:\/\/www\.babybooks\.top\/v0\/profile url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/babybooks/babybooks2.js
[mitm]
hostname = www.babybooks.top
[app下载地址]
https:\/\/apps.apple.com\/cn\/app\/%E5%84%BF%E7%AB%A5%E7%9D%A1%E5%89%8D%E6%95%85%E4%BA%8B-%E7%AB%A5%E5%B9%B4%E5%BF%85%E5%90%AC%E7%9A%84%E5%A5%BD%E6%95%85%E4%BA%8B\/id1458435477
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/v0\/profile';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["is_vip"] = true;
	obj.data["vip_exp_time"] = 1800000000;
	body = JSON.stringify(obj);  
 }

$done({body});
