# .FollowerApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**followerControllerAccept**](FollowerApi.md#followerControllerAccept) | **PUT** /v1/relationship/accept | 
[**followerControllerFindMyFriends**](FollowerApi.md#followerControllerFindMyFriends) | **POST** /v1/all/friends | 
[**followerControllerFollow**](FollowerApi.md#followerControllerFollow) | **POST** /v1/relationship/follow | 
[**followerControllerFriendRequestList**](FollowerApi.md#followerControllerFriendRequestList) | **GET** /v1/relationship/friend-request-list | 
[**followerControllerIsFriend**](FollowerApi.md#followerControllerIsFriend) | **POST** /v1/relationship/isFriend | 
[**followerControllerUnfollow**](FollowerApi.md#followerControllerUnfollow) | **POST** /v1/relationship/unfollow | 


# **followerControllerAccept**
> FollowerResponseDto followerControllerAccept(acceptFollowerPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerAcceptRequest = {
  // AcceptFollowerPayloadDto
  acceptFollowerPayloadDto: {
    id: "id_example",
  },
};

apiInstance.followerControllerAccept(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerFindMyFriendsRequest = {
  // MyFriendPayloadDto
  myFriendPayloadDto: {
    id: "id_example",
    page: 3.14,
    limit: 3.14,
    search: "search_example",
  },
};

apiInstance.followerControllerFindMyFriends(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerFollowRequest = {
  // FollowerPayloadDto
  followerPayloadDto: {
    follower: "follower_example",
  },
};

apiInstance.followerControllerFollow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:any = {};

apiInstance.followerControllerFriendRequestList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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

# **followerControllerIsFriend**
> FollowerResponseDto followerControllerIsFriend(followerPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerIsFriendRequest = {
  // FollowerPayloadDto
  followerPayloadDto: {
    follower: "follower_example",
  },
};

apiInstance.followerControllerIsFriend(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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

# **followerControllerUnfollow**
> FollowerResponseDto followerControllerUnfollow(followerPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .FollowerApi(configuration);

let body:.FollowerApiFollowerControllerUnfollowRequest = {
  // FollowerPayloadDto
  followerPayloadDto: {
    follower: "follower_example",
  },
};

apiInstance.followerControllerUnfollow(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
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


