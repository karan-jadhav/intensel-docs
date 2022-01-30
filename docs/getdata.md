---
title: Get Analysis
slug: /getanalysis
---

## Get Hazard Data

Using This API You Can get analysed hazard data for your selected locations of any specific Project

Endpoint:

> https://devapi.intensel.live/apiv1/getanalysis/hazard/


### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of the Project    |

### Sample Request
```
URL: https://devapi.intensel.live/apiv1/getanalysis/hazard/
data: {
		"project_name": "My Awesome Project",
    }
```
### Code Example

```
import requests
URL = "https://devapi.intensel.live/apiv1/getanalysis/hazard/"
headers = {"Authorization":"Token auth_token"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

## Get Loss Data

Using This API You Can get analysed Dollar Loss data for your selected locations of any specific Project

Endpoint:

> https://devapi.intensel.live/apiv1/getanalysis/loss/


### Api Parameters

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |

### Sample Request
```
URL: https://devapi.intensel.live/apiv1/getanalysis/loss/
data: {
		"project_name": "My Awesome Project",
    }
```
### Code Example

```
import requests
URL = "https://devapi.intensel.live/apiv1/getanalysis/loss/"
headers = {"Authorization":"Token auth_token"}
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