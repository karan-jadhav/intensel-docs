---
title: Parameters
slug: /parameters
---

## Single Asset API Request
Endpoint:
```
https://dev.itensel.live/api/data/
```

| parameter        | value                             |
| ---------------- | --------------------------------- |
| lat              | Latitude value of the location    |
| lon              | longitude value of the location   |
| variables (optional) | variables to analyse climate risk |


### Sample Request
```
URL: https://dev.intensel.live/api/data/
data: {
		"lat": 19.041418976652057,
        "lon": 73.07692536557195,
        "variables": ["Rainfall Flood", "Typhoon", "Storm Surge"]
       }
```



### variables Parameter

Value of variables parameter should be valid JSON format

We Provide Following variables for analysis

1. Rainfall Flood (default)
2. Typhoon (default)
3. Storm Surge (default)
4. Landslide
5. Rainfall
6. Extreme Heat
7. Snow Melt
8. River Flood

> Rainfall Flood, Typhoon and Storm Surge Are default variables in case variable parameter is not passed in API request

## Bulk Assets API Request
Endpoint:
```
https://dev.intensel.live/api/data/bulk/
```

| Parameter            | Value                                                |
| -------------------- | ---------------------------------------------------- |
| locations            | latitude and longitude values in netsted list format |
| variables (optional) | variables to analyse climate risk                    |

### Sample Bulk Request

```
URL: https://dev.intensel.live/api/data/bulk/
data: {
		"locations":[
			[19.041418976652057, 73.07692536557195],
            [13.041418976652034, 54.07692534557195]
        ]
}
```
> locations should be valid JSON list with value [latitude, longitude]

### variables Parameter

Variables for bulk request is same as variables for Single Asset Request

[variables](/docs/parameters#variables-parameter)




