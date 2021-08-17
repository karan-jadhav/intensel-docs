---
title: Getting Started
slug: /
---

## Step 0: Endpoint for API calls



> https://dev.intensel.live/apiv1/data/


## Step 1: Prepare API key

You have to pass api key in headers for authorization

```
Authorization: Api-Key <API_KEY>
```


## Step 2: Make Request

```
import requests
URL = "https://dev.intensel.live/apiv1/data/"
headers = {"Authorization":"Api-Key API_KEY"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

Make Sure to include API_KEY in headers for authentication

## Step 3: Done

Congrates you have make your first query.