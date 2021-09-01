body = $response.body.replace(/userType":\d+/g, 'userType":2').replace(/radishQty":\d+/g, 'radishQty\":999').replace(/proType":\d+/g, 'proType":1').replace(/level":\d+/g, 'level":30');
$done({body});
