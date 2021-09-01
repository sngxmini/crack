/*
微信公众号：少年歌行PRO 制作
电报资源发布群（禁言纯净）@shao66 
电报水友交流群（资源同步）@sngxpro
电报私聊 @shaogebot
QQ群：654371081
圈X配置：
[rewrite_local]
^http?:\/\/sdk\.yunduoketang\.com\/appApi\/course\/liveAndFace\/list url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/dama/dama.js
[mitm]
hostname = sdk.yunduoketang.com
*/

var body = $response.body;
var url = $request.url;

const path1 = '\/appApi\/course\/liveAndFace\/list';

let obj = JSON.parse(body);

if (url.indexOf(path1) != -1) {
	obj.data["freeFlag"] = 1;
	body = JSON.stringify(obj);  
 }

$done({body});
