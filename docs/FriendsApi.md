# .FriendsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**friendControllerFindFriends**](FriendsApi.md#friendControllerFindFriends) | **GET** /v1/friends | 


# **friendControllerFindFriends**
> FriendsResponseDto friendControllerFindFriends()


### Example


```typescript
import { createConfiguration, FriendsApi } from '';
import type { FriendsApiFriendControllerFindFriendsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FriendsApi(configuration);

const request: FriendsApiFriendControllerFindFriendsRequest = {
  
  page: 3.14,
  
  limit: 3.14,
  
  search: "search_example",
};

const data = await apiInstance.friendControllerFindFriends(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**FriendsResponseDto**

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


