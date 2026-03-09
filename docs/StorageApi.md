# .StorageApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storageControllerGetPreSignedURL**](StorageApi.md#storageControllerGetPreSignedURL) | **POST** /v1/storage/file | 


# **storageControllerGetPreSignedURL**
> StorageResponseDto storageControllerGetPreSignedURL(fileUploadDto)


### Example


```typescript
import { createConfiguration, StorageApi } from '';
import type { StorageApiStorageControllerGetPreSignedURLRequest } from '';

const configuration = createConfiguration();
const apiInstance = new StorageApi(configuration);

const request: StorageApiStorageControllerGetPreSignedURLRequest = {
  
  fileUploadDto: {
    fileName: "fileName_example",
  },
};

const data = await apiInstance.storageControllerGetPreSignedURL(request);
console.log('API called successfully. Returned data:', data);
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


