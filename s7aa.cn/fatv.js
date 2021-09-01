/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X：
[rewrite_local]
#FainTV解锁会员去广告
^http:\/\/ftvn\.hawsing\.com\.tw:3000\/client\/login url script-response-body fatv.js

[mitm]
hostname= = ftvn.hawsing.com.tw:3000


另一种简单方法：
[filter_local]
#FainTV去广告
host, googleads.g.doubleclick.net, reject

*/

var obj = JSON.parse($response.body);

obj.role = 2;
obj.sync = "2027-02-28T06:31:27.761Z";
obj.noAdDate = "2099-09-09T19:40:44.053Z";
obj.noAdDate_Adult = "2099-09-09T19:40:44.053Z";
obj.freeTime = 0;

$done({body: JSON.stringify(obj)}); 
