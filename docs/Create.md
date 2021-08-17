---
title: Create Project
slug: /create
---

## Create A Project

Project Contains All Your Assets And It Allows To Analyze All Of Your Submitted Locations At Once

Endpoint:
```
https://api.itensel.live/api/data/create/
```

| parameters        | value                             |
| ---------------- | --------------------------------- |
| project_name              | Name Of thhe Project    |

### Sample Request
```
URL: https://api.itensel.live/api/data/create/
data: {
      "project_name": "My Awesome Project",
      "variables":["Rainfall Flood", "Extreme Heat"],
    }
```
Variable Name Are Climate Variables Which You Wish To Analyze

### Climate Variables

| Variables         |
| ---------------- |
|  River Flood *     |
|  Typhoon *     |
|  Storm Surge  *    |
|  Landslide      |
|  Extreme Heat      |
|  Snow Melt      |
|  Rainfall Flood      |
|  Drought      |
|  Sea Level Rise      |
\* Marked Are Required And Cant Be Skipped

### Code Example

```
import requests
URL = "https://api.itensel.live/api/data/create/"
headers = {"Authorization":"Api-Key API_KEY"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

### Expected Response
```
status: HTTP 201
{"success":"Project Created Successfully"}
```