var responseBody = JSON.parse($response.body);
Object.assign(responseBody.result, {
  MembershipStatus: 1,
  MemberLimitDays: "999",
  MemberLimitTimeStamp: "20990909",
});

$done({ body: JSON.stringify(responseBody) });
