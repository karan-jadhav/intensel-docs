---
title: Add Single Asset
slug: /addasset
---

## Add Single Asset To Project

Using This API You Can Add Single Location To Get Analyzed And Added To Your Project

Endpoint:
```
https://api.itensel.live/api/data/add/
```
### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |
| asset_data              | Valid Json Data Containing Information About Location    |

### Sample Request
```
URL: https://api.itensel.live/api/data/add/
data: {
		"project_name": "My Awesome Project",
        "asset_data" : {
            "name": "Hong Kong Park",
            "latitude": 22.424645494250665,
            "longitude" : 114.2135547607693,
            "area": 2509,
            "valuation": 2117.25,
            "stories": 3,
            }
    }
```

### asset_data paramters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| name (optional)              | Name Of The location (If Not Provided Will Get identified By Us)    |
| latitude *              | Latitude Of Location |
| Longitude *              | Longitude Of Location |
| area (optional)              | Area of location in sqm (If Not Provided Will Get identified By Us) |
| Valuation (Optional)              | Valuation Of Location in USD/sqm (If Not Provided Will Get identified By Us) |
| Stories (Optional)              | Number Of Floors/Stories Of The Location (If Not Provided Will Get identified By Us) |
\* Marked Parameters Are Required

### Code Example

```
import requests
URL = "https://api.itensel.live/api/data/add/"
headers = {"Authorization":"Api-Key API_KEY"}
payload = {
            "project_name": "My Awesome Project",
            "asset_data" : {
                "name": "Hong Kong Park",
                "latitude": 22.424645494250665,
                "longitude" : 114.2135547607693,
                "area": 2509,
                "valuation": 2117.25,
                "stories": 3,
            }
          }
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

### Expected Response
```
status: HTTP 201
{"success":"Asset Added To Project My Awesome Project With Name Hong Kong Park"}
```
