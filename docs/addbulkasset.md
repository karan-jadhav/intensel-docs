---
title: Add Bulk Assets
slug: /addbulkassets
---

## Add Multiple Asset To Project

Using This API You Can Add Multiple Location To Get Analyzed And Added To Your Project In One Single API Call

Endpoint:

> https://devapi.intensel.live/apiv1/add/bulk/


### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |
| asset_data              | Valid Json Data Containing Information About Multiple Locations  |

### Sample Request
```
URL: https://devapi.intensel.live/apiv1/add/
data: {
		"project_name": "My Awesome Project",
        "asset_data" : [
                {
                    "name": "Hong Kong Park",
                    "latitude": 22.424645494250665,
                    "longitude" : 114.2135547607693,
                    "area": 2509,
                    "valuation": 2117.25,
                    "stories": 3,
                },
                {
                    "name": "Canal Rd West",
                    "latitude": 22.27806830351389,
                    "longitude" : 114.18119155173112,
                    "area": 1810,
                    "valuation": 2117.25,
                    "stories": 3,
                }
            ]
    }
```


### asset_data paramters
asset_data is Same As Single API 

[asset_data Paramerts](addasset#asset_data-paramters)

\* For Bulk API asset_data Should Be Valid List 

### Code Example

```
import requests
URL = "https://devapi.intensel.live/apiv1/add/bulk/"
headers = {"Authorization":"Token auth_token"}
payload = {
            "project_name": "My Awesome Project",
            "asset_data" : [
                {
                    "name": "Hong Kong Park",
                    "latitude": 22.424645494250665,
                    "longitude" : 114.2135547607693,
                    "area": 2509,
                    "valuation": 2117.25,
                    "stories": 3,
                },
                {
                    "name": "Canal Rd West",
                    "latitude": 22.27806830351389,
                    "longitude" : 114.18119155173112,
                    "area": 1810,
                    "valuation": 2117.25,
                    "stories": 3,
                }
            ]
          }
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

### Expected Response
```
status: HTTP 201
{"success":"2 assets added to project My Awesome Project"}
```

