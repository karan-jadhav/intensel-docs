---
title: Get Analysis
slug: /getanalysis
---

## Get Hazard Data

Using This API You Can get analysed hazard data for your selected locations of any specific Project

Endpoint:

> https://devapi.intensel.live/apiv1/getanalysis/


### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |

### Sample Request
```
URL: https://devapi.intensel.live/apiv1/getanalysis/
data: {
		"project_name": "My Awesome Project",
    }
```
### Code Example

```
import requests
URL = "https://devapi.intensel.live/apiv1/getanalysis/"
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
\* Returned Data Will Be Hazard Data Of Selected Variable For All RCP Years

You Wll Get Data For Following RCPS And Years

RCP: **26, 45, 85**

Year: **2030, 2050**