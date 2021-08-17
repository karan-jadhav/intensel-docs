---
title: Get Analysis
slug: /getanalysis
---

## Add Multiple Asset To Project

Using This API You Can Add Multiple Location To Get Analyzed And Added To Your Project In One Single API Call

Endpoint:

> https://api.itensel.live/apiv1/data/getanalysis/


### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |

### Sample Request
```
URL: https://api.itensel.live/apiv1/getanalysis/
data: {
		"project_name": "My Awesome Project",
    }
```
### Code Example

```
import requests
URL = "https://api.itensel.live/apiv1/data/getanalysis/"
headers = {"Authorization":"Api-Key API_KEY"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

### Expected Response
```
status: HTTP 201
{"RCP_{rcp}-YEAR_{year}":{data}}
```
\* Returned Data Will Be Risk Score Out Of 100

You Wll Get Data For Following RCPS And Years

RCP: **26, 45, 85**

Year: **2030, 2050**