# .FollowerApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**followerControllerAccept**](FollowerApi.md#followerControllerAccept) | **PUT** /v1/relationship/accept | 
[**followerControllerFindMyFriends**](FollowerApi.md#followerControllerFindMyFriends) | **POST** /v1/all/friends | 
[**followerControllerFollow**](FollowerApi.md#followerControllerFollow) | **POST** /v1/relationship/follow | 
[**followerControllerFriendRequestList**](FollowerApi.md#followerControllerFriendRequestList) | **GET** /v1/relationship/friend-request-list | 
[**followerControllerUnfollow**](FollowerApi.md#followerControllerUnfollow) | **POST** /v1/relationship/unfollow | 


# **followerControllerAccept**
> FollowerResponseDto followerControllerAccept(acceptFollowerPayloadDto)


### Example


```typescript
import { createConfiguration, FollowerApi } from '';
import type { FollowerApiFollowerControllerAcceptRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FollowerApi(configuration);

const request: FollowerApiFollowerControllerAcceptRequest = {
  
  acceptFollowerPayloadDto: {
    id: "id_example",
  },
};

const data = await apiInstance.followerControllerAccept(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptFollowerPayloadDto** | **AcceptFollowerPayloadDto**|  |


### Return type

**FollowerResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **followerControllerFindMyFriends**
> MyAllFriendsResponseDto followerControllerFindMyFriends(myFriendPayloadDto)


### Example


```typescript
import { createConfiguration, FollowerApi } from '';
import type { FollowerApiFollowerControllerFindMyFriendsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FollowerApi(configuration);

const request: FollowerApiFollowerControllerFindMyFriendsRequest = {
  
  myFriendPayloadDto: {
    id: "id_example",
    page: 3.14,
    limit: 3.14,
    search: "search_example",
  },
};

const data = await apiInstance.followerControllerFindMyFriends(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **myFriendPayloadDto** | **MyFriendPayloadDto**|  |


### Return type

**MyAllFriendsResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **followerControllerFollow**
> FollowerResponseDto followerControllerFollow(followerPayloadDto)


### Example


```typescript
import { createConfiguration, FollowerApi } from '';
import type { FollowerApiFollowerControllerFollowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FollowerApi(configuration);

const request: FollowerApiFollowerControllerFollowRequest = {
  
  followerPayloadDto: {
    follower: "follower_example",
  },
};

const data = await apiInstance.followerControllerFollow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **followerPayloadDto** | **FollowerPayloadDto**|  |


### Return type

**FollowerResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **followerControllerFriendRequestList**
> FriendRequestItemEntityDto followerControllerFriendRequestList()


### Example


```typescript
import { createConfiguration, FollowerApi } from '';

const configuration = createConfiguration();
const apiInstance = new FollowerApi(configuration);

const request = {};

const data = await apiInstance.followerControllerFriendRequestList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**FriendRequestItemEntityDto**

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

# **followerControllerUnfollow**
> FollowerResponseDto followerControllerUnfollow(followerPayloadDto)


### Example


```typescript
import { createConfiguration, FollowerApi } from '';
import type { FollowerApiFollowerControllerUnfollowRequest } from '';

const configuration = createConfiguration();
const apiInstance = new FollowerApi(configuration);

const request: FollowerApiFollowerControllerUnfollowRequest = {
  
  followerPayloadDto: {
    follower: "follower_example",
  },
};

const data = await apiInstance.followerControllerUnfollow(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **followerPayloadDto** | **FollowerPayloadDto**|  |


### Return type

**FollowerResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**401** | Unauthorized |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


