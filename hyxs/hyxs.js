/*
 biz.lemonyd.com
 
https://biz.lemonyd.com(\/user\/account\/info|\/activity\/activity\/account) url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/hyxs/hyxs.js

*/


body = $response.body.replace(/isVip":\w+/g, 'isVip":true').replace(/shell":\d+/g, 'shell":6666666');
$done({body});
