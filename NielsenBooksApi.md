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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NielsenBooksApi(configuration);

let body:.NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest = {
  // string
  id: "id_example",
  // any
  body: {},
};

apiInstance.nielsenBooksControllerGetNielsenBookById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NielsenBooksApi(configuration);

let body:.NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.nielsenBooksControllerGetNielsenBookImageById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .NielsenBooksApi(configuration);

let body:any = {};

apiInstance.nielsenBooksControllerGetNielsenBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


