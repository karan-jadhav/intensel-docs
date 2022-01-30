---
title: Authentication
slug: /auth
---

# Get Token For Api Calls

Using This API you can get Auth TOKEN which is required for further API calls

Endpoint:

> https://devapi.intensel.live/apiv1/auth/

### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| username              | username of account    |
| password              | password of account    |
| company_code              | Company Code of account    |

### Code Example

```
import requests
URL = "https://devapi.intensel.live/apiv1/auth/"
payload = {"username": "jhon", "password": "Sec*%*ret", "company_code":"JB007"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

### Expected Response
```
status: HTTP 201
{"token": "ajshadnmAndWhatever"}
```