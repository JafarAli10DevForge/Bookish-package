# .NielsenBooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nielsenBooksControllerGetNielsenBookById**](NielsenBooksApi.md#nielsenBooksControllerGetNielsenBookById) | **GET** /v1/nielsen/book/{id} | 
[**nielsenBooksControllerGetNielsenBookImageById**](NielsenBooksApi.md#nielsenBooksControllerGetNielsenBookImageById) | **GET** /v1/nielsen/book/image/{id} | 
[**nielsenBooksControllerGetNielsenBooks**](NielsenBooksApi.md#nielsenBooksControllerGetNielsenBooks) | **GET** /v1/nielsen/books | 


# **nielsenBooksControllerGetNielsenBookById**
> nielsenBooksControllerGetNielsenBookById(body)


### Example


```typescript
import { createConfiguration, NielsenBooksApi } from '';
import type { NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NielsenBooksApi(configuration);

const request: NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest = {
  
  id: "id_example",
  
  body: {},
};

const data = await apiInstance.nielsenBooksControllerGetNielsenBookById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **any**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

void (empty response body)

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nielsenBooksControllerGetNielsenBookImageById**
> void nielsenBooksControllerGetNielsenBookImageById()


### Example


```typescript
import { createConfiguration, NielsenBooksApi } from '';
import type { NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest } from '';

const configuration = createConfiguration();
const apiInstance = new NielsenBooksApi(configuration);

const request: NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest = {
  
  id: "id_example",
};

const data = await apiInstance.nielsenBooksControllerGetNielsenBookImageById(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **nielsenBooksControllerGetNielsenBooks**
> nielsenBooksControllerGetNielsenBooks()


### Example


```typescript
import { createConfiguration, NielsenBooksApi } from '';

const configuration = createConfiguration();
const apiInstance = new NielsenBooksApi(configuration);

const request = {};

const data = await apiInstance.nielsenBooksControllerGetNielsenBooks(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

void (empty response body)

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


