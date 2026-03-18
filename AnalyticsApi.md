# .AnalyticsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**analyticsControllerGetAnalytics**](AnalyticsApi.md#analyticsControllerGetAnalytics) | **GET** /v1/analytics | 


# **analyticsControllerGetAnalytics**
> AnalyticsResponseDTO analyticsControllerGetAnalytics()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AnalyticsApi(configuration);

let body:.AnalyticsApiAnalyticsControllerGetAnalyticsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.analyticsControllerGetAnalytics(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**AnalyticsResponseDTO**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


