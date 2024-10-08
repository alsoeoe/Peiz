function handleResponse(url, responseBody) {
  // 创建正则表达式对象
  const regexUserMe = new RegExp(
    "^https:\\/\\/flomoapp\\.com\\/api\\/v1\\/user\\/me"
  );
  const regexMemoNotify = new RegExp(
    "^https://flomoapp.com/api/v1/memo/notify_of_today"
  );

  if (regexUserMe.test(url)) {
    // 对第一个URL执行的操作
    responseBody.data.pro_expired_at = "2088-08-08 08:08:08";
    responseBody.data.referee_pro_days = "8888";
  } else if (regexMemoNotify.test(url)) {
    // 对第二个URL执行的操作
    responseBody.message = "";
    responseBody.code = 0;
  }

  return responseBody;
}

// 假设 $request.url 包含当前请求的URL
const modifiedResponse = {};
const responseBody = JSON.parse($response ? $response.body : null);

// 调用函数并传入URL和响应体
const newResponseBody = handleResponse($request.url, responseBody);

modifiedResponse.body = JSON.stringify(newResponseBody);
$done(modifiedResponse);
