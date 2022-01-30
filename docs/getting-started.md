---
title: Getting Started
slug: /
---

## Step 0: Base Endpoint for API calls



> https://devapi.intensel.live/apiv1/


## Step 1: Prepare API key

You have to pass Auth TOKEN in headers for authorization

```
Authorization: Token <API_KEY>
```


## Step 2: Make Request

```
import requests
URL = "https://devapi.intensel.live/apiv1/create/"
headers = {"Authorization":"Token auth_token"}
payload = {"project_name": "My Awesome Project"}
response = requests.post(URL, json=payload, headers=headers)
data = response.json()
```

Make Sure to include auth_token in headers for authentication

## Step 3: Done

Congrates you have make your first query.