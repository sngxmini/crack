/*

作者微信公众号：ios黑科技
作者官方网站：s7aa.cn

公众号少年歌行pro托管中

圈X
[rewrite_local]
#独品社区解锁会员
^http:\/\/taohuatannj\.com\/(api\/user\/personal|api\/community\/edit) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/s7aa.cn/dpsq.js

[mitm]
hostname= taohuatannj.com

独品社区下载地址：（任意号注册不限制，不收验证码）
邀请码：K4GPHE
https://wws.lanzous.com/s/seyou01
https://wws.lanzous.com/s/seyou02

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = '/api/community/edit';
const p2 = '/api/user/personal';


if (url.indexOf(p1) != -1) {
    obj = {
  "code": 200,
},
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.vip = 1,
    obj.data.vip_time = "2099-09-09 09:09:09",
    body = JSON.stringify(obj);
} 
$done({body});
