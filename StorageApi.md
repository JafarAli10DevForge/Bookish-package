# .StorageApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storageControllerGetPreSignedURL**](StorageApi.md#storageControllerGetPreSignedURL) | **POST** /v1/storage/file | 


# **storageControllerGetPreSignedURL**
> StorageResponseDto storageControllerGetPreSignedURL(fileUploadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .StorageApi(configuration);

let body:.StorageApiStorageControllerGetPreSignedURLRequest = {
  // FileUploadDto
  fileUploadDto: {
    fileName: "fileName_example",
  },
};

apiInstance.storageControllerGetPreSignedURL(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fileUploadDto** | **FileUploadDto**|  |


### Return type

**StorageResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


