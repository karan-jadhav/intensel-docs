---
title: Getting Started
slug: /
---

## Step 0: Base Endpoint for API calls



> https://api.intensel.live/apiv1/


## Step 1: Prepare API key

You have to pass api key in headers for authorization

```
Authorization: Api-Key <API_KEY>
```


## Step 2: Make Request

```
import requests
URL = "https://api.intensel.live/apiv1/create/"
headers = {"Authorization":"Api-Key API_KEY"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

Make Sure to include API_KEY in headers for authentication

## Step 3: Done

Congrates you have make your first query.