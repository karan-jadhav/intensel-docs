---
title: Response
slug: /response
---

## Response Object

Response returned from API is a valid JSON object

Response contains Two datas objects in following format
Response
```
{
	'generic_data': [...],
	'loss_data': [...]
}
```
## Single Asset Response:
### Generic Data
Response
```
[
	{
		'Rainfall Flood RCP 2.6 YEAR 2030': '23.72636857299805',
        'Rainfall Flood RCP 2.6 YEAR 2050': '34.982376857299805',
        'Rainfall Flood RCP 4.5 YEAR 2030': '45.23765857299805',
        'Rainfall Flood RCP 4.5 YEAR 2050': '12.2378857299805',
        'Rainfall Flood RCP 8.5 YEAR 2030': '76.23866857299805',
        'Rainfall Flood RCP 8.5 YEAR 2050': '67.238766857299805',
        'Storm Surge RCP 2.6 YEAR 2030': '34.2386557299805',
        'Storm Surge RCP 2.6 YEAR 2050': '76.2386857299805',
        'Storm Surge RCP 4.5 YEAR 2030': '98.23866857299805',
        'Storm Surge RCP 4.5 YEAR 2050': '12.238766857299805',
        'Storm Surge RCP 8.5 YEAR 2030': '45.2397857299805',
        'Storm Surge RCP 8.5 YEAR 2050': '65.2376857299805',
        'Typhoon RCP 2.6 YEAR 2030': '96.14606857299805',
        'Typhoon RCP 2.6 YEAR 2050': '115.37528',
        'Typhoon RCP 4.5 YEAR 2030': '130.70594787597656',
        'Typhoon RCP 4.5 YEAR 2050': '156.84714',
        'Typhoon RCP 8.5 YEAR 2030': '154.7567367553711',
        'Typhoon RCP 8.5 YEAR 2050': '185.70808',
        'latitude': '18.94136785',
        'longitude': '72.83526733695547',
        'name': 'Mumbai CSMT (Suburban), Dr Dadabhai Naoroji Road'
	}
]
```

### Loss And Risks Data
Response
```
[
    {
        'Asset Flood Damage RCP 2.6': 0.0,
        'Asset Flood Damage RCP 4.5': 0.0,
        'Asset Flood Damage RCP 8.5': 0.0,
        'Asset Storm Damage RCP 2.6': 0.0,
        'Asset Storm Damage RCP 4.5': 0.0,
        'Asset Storm Damage RCP 8.5': 0.0,
        'Asset Typhoon Damage RCP 2.6': 0.02,
        'Asset Typhoon Damage RCP 4.5': 0.02,
        'Asset Typhoon Damage RCP 8.5': 0.02,
        'Drought Risk RCP 2.6': 0.0,
        'Drought Risk RCP 4.5': 0.0,
        'Drought Risk RCP 8.5': 0.0,
        'Extreme heat Risk RCP 2.6': 0.0,
        'Extreme heat Risk RCP 4.5': 0.0,
        'Extreme heat Risk RCP 8.5': 0.0,
        'Flood Dollar Percentage Loss RCP 2.6': 0.0,
        'Flood Dollar Percentage Loss RCP 4.5': 0.0,
        'Flood Dollar Percentage Loss RCP 8.5': 0.0,
        'Landslide Risk RCP 2.6': 0.0,
        'Landslide Risk RCP 4.5': 0.0,
        'Landslide Risk RCP 8.5': 0.0,
        'OVERALL Risk RCP 2.6': 3.0,
        'OVERALL Risk RCP 4.5': 4.1,
        'OVERALL Risk RCP 8.5': 4.8,
        'Operational Flood Loss RCP 2.6': 0.0,
        'Operational Flood Loss RCP 4.5': 0.0,
        'Operational Flood Loss RCP 8.5': 0.0,
        'Operational Storm Loss RCP 2.6': 0.0,
        'Operational Storm Loss RCP 4.5': 0.0,
        'Operational Storm Loss RCP 8.5': 0.0,
        'Operational Typhoon Loss RCP 2.6': 0.3,
        'Operational Typhoon Loss RCP 4.5': 0.3,
        'Operational Typhoon Loss RCP 8.5': 0.3,
        'Rainfall Flood Risk RCP 2.6': 0.0,
        'Rainfall Flood Risk RCP 4.5': 0.0,
        'Rainfall Flood Risk RCP 8.5': 0.0,
        'Rainfall Risk RCP 2.6': 0.0,
        'Rainfall Risk RCP 4.5': 0.0,
        'Rainfall Risk RCP 8.5': 0.0,
        'River Flood Risk RCP 2.6': 0.0,
        'River Flood Risk RCP 4.5': 0.0,
        'River Flood Risk RCP 8.5': 0.0,
        'Snow Melt Risk RCP 2.6': 0.0,
        'Snow Melt Risk RCP 4.5': 0.0,
        'Snow Melt Risk RCP 8.5': 0.0,
        'Storm Surge Dollar Percentage Loss RCP 2.6': 0.0,
        'Storm Surge Dollar Percentage Loss RCP 4.5': 0.0,
        'Storm Surge Dollar Percentage Loss RCP 8.5': 0.0,
        'Storm Surge Risk RCP 2.6': 0.0,
        'Storm Surge Risk RCP 4.5': 0.0,
        'Storm Surge Risk RCP 8.5': 0.0,
        'Total Loss RCP 2.6': 0.32,
        'Total Loss RCP 4.5': 0.32,
        'Total Loss RCP 8.5': 0.32,
        'Typhoon Risk RCP 2.6': 24.0,
        'Typhoon Risk RCP 4.5': 32.7,
        'Typhoon Risk RCP 8.5': 38.7,
        'latitude': '18.94136785',
        'longitude': '72.83526733695547',
        'name': 'Mumbai CSMT (Suburban), Dr Dadabhai Naoroji Road'
	}
]
```
## Bulk Assets Response:
### Generic Data
Response Will be saame as Single asset but in nested format for each asset

[Single Asset Generic Response](/docs/response#generic-data)
```
[
	{
		...generic Data for asset 1
	},
	{
		...generic Data For asset 2
	},
	.
	.
	.
	{
		...generic Data For asset n
	}
]
```

### Loss And Risks Data
[Single Asset Loss Response](/docs/response#loss-and-risks-data)
```
[
	{
		...Loss Data for asset 1
	},
	{
		...Loss Data For asset 2
	},
	.
	.
	.
	{
		...Loss Data For asset n
	}
]
```