var responseBody = JSON.parse($response.body);
responseBody.result.membershipStatus = 1;
$done({ body: JSON.stringify(responseBody) });
