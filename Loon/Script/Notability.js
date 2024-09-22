var responseBody = JSON.parse($response.body);

responseBody = {
    "data": {
        "processAppleReceipt": {
            "error": 0,
            "subscription": {
                "productId": "com.gingerlabs.Notability.premium_subscription",
                "originalTransactionId": "570001184068302",
                "tier": "premium",
                "refundedDate": null,
                "refundedReason": null,
                "isInBillingRetryPeriod": false,
                "expirationDate": "2029-09-09T09:09:09.000Z",
                "gracePeriodExpiresAt": null,
                "overDeviceLimit": false,
                "expirationIntent": "CUSTOMER_CANCELLED",
                "__typename": "AppStoreSubscription",
                "user": null,
                "status": "canceled",
                "originalPurchaseDate": "2022-09-09T09:09:09.000Z"
            },
            "__typename": "SubscriptionResult"
        }
    }
};

$done({body: JSON.stringify(responseBody)});