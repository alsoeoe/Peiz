var responseBody = JSON.parse($response.body);

responseBody = {
    "data": {
        "env": {
            "projectId": "slidebox-ios-prod",
            "region": "asia-east2",
            "function": "api_v1",
            "realm": "prod"
        },
        "appStoreRecord": {
            "purchases": [
                {
                    "productId": "co.slidebox.iap.apple.fullversion"
                }
            ],
            "subscriptions": [],
            "validatedTimestampMs": "1699365288625",
            "bundleId": "co.slidebox.Slidebox"
        }
    }
};

$done({body: JSON.stringify(responseBody)});