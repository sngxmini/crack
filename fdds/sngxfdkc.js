/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#樊登读书解锁付费課程
^https:\/\/api.*.com\/* url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/fdds/sngxfdkc.js
^https:\/\/gateway-api.*.com(\/resource-orchestration-system\/knowledge\/v100\/mainList|\/resource-orchestration-system\/program\/content) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/fdds/sngxfdkc.js

[mitm]
hostname= gateway-api.*.com,api.*.com

下载地址：appstore



*/



body = $response.body.replace(/isBuyed":\w+/g, 'isBuyed":true').replace(/buyed":\w+/g, 'buyed":true').replace(/trial":\w+/g, 'trial":true').replace(/free":\w+/g, 'free":true').replace(/hasBuy":\w+/g, 'hasBuy":1')                   ;
$done({body});
