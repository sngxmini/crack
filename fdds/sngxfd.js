/*
微信公众号：少年歌行pro
转载请注明出处

圈X
[rewrite_local]
#樊登读书解锁付费书籍
^https:\/\/gateway-api.*.com\/innovation-orchestration\/api\/ebook\/v100\/ebookInfo url script-response-body https://raw.githubusercontent.com/sngxpro/QuantumultX/master/fdds/sngxfd.js


[mitm]
hostname= gateway-api.*.com

下载地址：appstore下载


*/



body = $response.body.replace(/false/g, "true");
$done({body});
