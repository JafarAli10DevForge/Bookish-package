# .AuthApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authControllerAccountDeletion**](AuthApi.md#authControllerAccountDeletion) | **PUT** /v1/auth/delete | 
[**authControllerAddFeedback**](AuthApi.md#authControllerAddFeedback) | **POST** /v1/auth/feedback | 
[**authControllerAppfeepercentageUpdate**](AuthApi.md#authControllerAppfeepercentageUpdate) | **PUT** /v1/auth/appfee_percentage | 
[**authControllerChangePassword**](AuthApi.md#authControllerChangePassword) | **PUT** /v1/auth/change-password | 
[**authControllerCreateBusinessUser**](AuthApi.md#authControllerCreateBusinessUser) | **POST** /v1/auth/register-business | 
[**authControllerCreateRoles**](AuthApi.md#authControllerCreateRoles) | **POST** /v1/auth/role | 
[**authControllerCreateStaff**](AuthApi.md#authControllerCreateStaff) | **POST** /v1/auth/staff | 
[**authControllerCreateStaffRole**](AuthApi.md#authControllerCreateStaffRole) | **POST** /v1/auth/staff-role | 
[**authControllerCreateUser**](AuthApi.md#authControllerCreateUser) | **POST** /v1/auth/signup | 
[**authControllerDeleteRole**](AuthApi.md#authControllerDeleteRole) | **DELETE** /v1/auth/role/{id} | 
[**authControllerDeleteStaff**](AuthApi.md#authControllerDeleteStaff) | **DELETE** /v1/auth/staff/{id} | 
[**authControllerDeleteStaffRole**](AuthApi.md#authControllerDeleteStaffRole) | **DELETE** /v1/auth/staff-role/{id} | 
[**authControllerForgetPassword**](AuthApi.md#authControllerForgetPassword) | **PUT** /v1/auth/forget-password | 
[**authControllerGetAchievement**](AuthApi.md#authControllerGetAchievement) | **GET** /v1/auth/achievement | 
[**authControllerGetActivity**](AuthApi.md#authControllerGetActivity) | **GET** /v1/auth/activities | 
[**authControllerGetAllStaff**](AuthApi.md#authControllerGetAllStaff) | **GET** /v1/auth/staff | 
[**authControllerGetAllusers**](AuthApi.md#authControllerGetAllusers) | **GET** /v1/auth/all_users | 
[**authControllerGetEventsActivity**](AuthApi.md#authControllerGetEventsActivity) | **GET** /v1/auth/events/activities | 
[**authControllerGetEventsActivityByType**](AuthApi.md#authControllerGetEventsActivityByType) | **GET** /v1/auth/type-activities | 
[**authControllerGetInterests**](AuthApi.md#authControllerGetInterests) | **GET** /v1/auth/interests | 
[**authControllerGetPermission**](AuthApi.md#authControllerGetPermission) | **GET** /v1/auth/permissions | 
[**authControllerGetStaff**](AuthApi.md#authControllerGetStaff) | **GET** /v1/auth/staff/{email} | 
[**authControllerGetStaffRole**](AuthApi.md#authControllerGetStaffRole) | **GET** /v1/auth/staff-role/{id} | 
[**authControllerLogin**](AuthApi.md#authControllerLogin) | **POST** /v1/auth/login | 
[**authControllerSignOut**](AuthApi.md#authControllerSignOut) | **POST** /v1/auth/user-logout | 
[**authControllerStaffRoles**](AuthApi.md#authControllerStaffRoles) | **GET** /v1/auth/staff-roles | 
[**authControllerSuperAdminLoginlogin**](AuthApi.md#authControllerSuperAdminLoginlogin) | **POST** /v1/auth/super_admin_login | 
[**authControllerSyncUserInfo**](AuthApi.md#authControllerSyncUserInfo) | **POST** /v1/auth/sync-info | 
[**authControllerUpdate**](AuthApi.md#authControllerUpdate) | **PUT** /v1/auth/store | 
[**authControllerUpdateRoles**](AuthApi.md#authControllerUpdateRoles) | **PUT** /v1/auth/update/role/{id} | 
[**authControllerUpdateStaff**](AuthApi.md#authControllerUpdateStaff) | **PUT** /v1/auth/staff/{id} | 
[**authControllerUpdateStaffRoles**](AuthApi.md#authControllerUpdateStaffRoles) | **PUT** /v1/auth/staff-role/{id} | 
[**authControllerUser**](AuthApi.md#authControllerUser) | **GET** /v1/auth/roles | 
[**authControllerUserById**](AuthApi.md#authControllerUserById) | **GET** /v1/auth/user | 
[**authControllerUserFollowers**](AuthApi.md#authControllerUserFollowers) | **GET** /v1/auth/follower | 
[**authControllerUserMe**](AuthApi.md#authControllerUserMe) | **GET** /v1/auth/user/me | 
[**authControllerUserRoleUpdate**](AuthApi.md#authControllerUserRoleUpdate) | **PUT** /v1/auth/role | 
[**authControllerUserUpdate**](AuthApi.md#authControllerUserUpdate) | **PUT** /v1/auth/user | 
[**authControllerVerifyOtp**](AuthApi.md#authControllerVerifyOtp) | **PUT** /v1/auth/verify-otp | 


# **authControllerAccountDeletion**
> UserDeleteResponseDto authControllerAccountDeletion()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerAccountDeletion(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserDeleteResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerAddFeedback**
> FeedbackCreateResponseDto authControllerAddFeedback(feedbackPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerAddFeedbackRequest = {
  // FeedbackPayloadDto
  feedbackPayloadDto: {
    type: "type_example",
    message: "message_example",
    name: "name_example",
    email: "email_example",
  },
};

apiInstance.authControllerAddFeedback(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **feedbackPayloadDto** | **FeedbackPayloadDto**|  |


### Return type

**FeedbackCreateResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Feedback created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerAppfeepercentageUpdate**
> AppfeepercentageResponseDto authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerAppfeepercentageUpdateRequest = {
  // AppfeepercentageUpdatePayloadDto
  appfeepercentageUpdatePayloadDto: {
    id: "id_example",
    appfeepercentage: 3.14,
  },
};

apiInstance.authControllerAppfeepercentageUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appfeepercentageUpdatePayloadDto** | **AppfeepercentageUpdatePayloadDto**|  |


### Return type

**AppfeepercentageResponseDto**

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

# **authControllerChangePassword**
> PasswordChangeResponseDto authControllerChangePassword(changePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerChangePasswordRequest = {
  // ChangePayloadDto
  changePayloadDto: {
    email: "email_example",
    confirmPassword: "confirmPassword_example",
    newPassword: "newPassword_example",
  },
};

apiInstance.authControllerChangePassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePayloadDto** | **ChangePayloadDto**|  |


### Return type

**PasswordChangeResponseDto**

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

# **authControllerCreateBusinessUser**
> UserResponseDto authControllerCreateBusinessUser(signupPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateBusinessUserRequest = {
  // SignupPayloadDto
  signupPayloadDto: {
    userName: "userName_example",
    email: "email_example",
    password: "password_example",
    role: "role_example",
    currency: "currency_example",
    activityStatus: "public",
  },
};

apiInstance.authControllerCreateBusinessUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupPayloadDto** | **SignupPayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerCreateRoles**
> authControllerCreateRoles(createRoleDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateRolesRequest = {
  // CreateRoleDto | Payload to create a new role
  createRoleDto: {
    name: "Admin",
    description: "This role provides administrative access to the system.",
    permissions: ["64c9abefc347e1234567890a","64c9abefc347e1234567890b"],
  },
};

apiInstance.authControllerCreateRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRoleDto** | **CreateRoleDto**| Payload to create a new role |


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

# **authControllerCreateStaff**
> CreateStaffDto authControllerCreateStaff(createStaffDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateStaffRequest = {
  // CreateStaffDto
  createStaffDto: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    roles: ["60d0fe4f5311236168a109ca","60d0fe4f5311236168a109cb"],
    owner: "60d0fe4f5311236168a109ca",
  },
};

apiInstance.authControllerCreateStaff(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStaffDto** | **CreateStaffDto**|  |


### Return type

**CreateStaffDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Staff created successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerCreateStaffRole**
> authControllerCreateStaffRole(createStaffRoleDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateStaffRoleRequest = {
  // CreateStaffRoleDto | Payload to create a new role
  createStaffRoleDto: {
    name: "Admin",
    owner: "64c9abefc347e1234567890a",
    description: "This role provides administrative access to the system.",
    permissions: ["64c9abefc347e1234567890a","64c9abefc347e1234567890b"],
  },
};

apiInstance.authControllerCreateStaffRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStaffRoleDto** | **CreateStaffRoleDto**| Payload to create a new role |


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

# **authControllerCreateUser**
> UserResponseDto authControllerCreateUser(signupPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerCreateUserRequest = {
  // SignupPayloadDto
  signupPayloadDto: {
    userName: "userName_example",
    email: "email_example",
    password: "password_example",
    role: "role_example",
    currency: "currency_example",
    activityStatus: "public",
  },
};

apiInstance.authControllerCreateUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **signupPayloadDto** | **SignupPayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerDeleteRole**
> authControllerDeleteRole()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerDeleteRoleRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerDeleteRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **authControllerDeleteStaff**
> UserDeleteResponseDto authControllerDeleteStaff()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerDeleteStaffRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerDeleteStaff(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserDeleteResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Staff deleted successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerDeleteStaffRole**
> authControllerDeleteStaffRole()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerDeleteStaffRoleRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerDeleteStaffRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **authControllerForgetPassword**
> ForgetPasswordEntityResponseDto authControllerForgetPassword(forgetPasswordPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerForgetPasswordRequest = {
  // ForgetPasswordPayloadDto
  forgetPasswordPayloadDto: {
    email: "email_example",
  },
};

apiInstance.authControllerForgetPassword(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **forgetPasswordPayloadDto** | **ForgetPasswordPayloadDto**|  |


### Return type

**ForgetPasswordEntityResponseDto**

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

# **authControllerGetAchievement**
> UserAchievementResponseDTO authControllerGetAchievement()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetAchievementRequest = {
  // string
  user: "user_example",
};

apiInstance.authControllerGetAchievement(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined


### Return type

**UserAchievementResponseDTO**

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

# **authControllerGetActivity**
> ActivityResponseDto authControllerGetActivity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetActivityRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // number (optional)
  longitude: 3.14,
  // number (optional)
  latitude: 3.14,
  // boolean (optional)
  global: true,
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerGetActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **global** | [**boolean**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**ActivityResponseDto**

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

# **authControllerGetAllStaff**
> void authControllerGetAllStaff()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetAllStaffRequest = {
  // number
  page: 3.14,
  // string
  ownerId: "ownerId_example",
  // number
  limit: 3.14,
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerGetAllStaff(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **ownerId** | [**string**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All staff retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerGetAllusers**
> void authControllerGetAllusers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetAllusersRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
};

apiInstance.authControllerGetAllusers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | All users retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerGetEventsActivity**
> ActivityResponseDto authControllerGetEventsActivity()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetEventsActivityRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // number (optional)
  longitude: 3.14,
  // number (optional)
  latitude: 3.14,
  // boolean (optional)
  global: true,
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerGetEventsActivity(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **global** | [**boolean**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**ActivityResponseDto**

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

# **authControllerGetEventsActivityByType**
> ActivityResponseDto authControllerGetEventsActivityByType()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetEventsActivityByTypeRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string
  type: "type_example",
  // string (optional)
  userId: "userId_example",
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerGetEventsActivityByType(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **type** | [**string**] |  | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**ActivityResponseDto**

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

# **authControllerGetInterests**
> InterestsResponseDto authControllerGetInterests()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerGetInterests(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**InterestsResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerGetPermission**
> authControllerGetPermission()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerGetPermission(body).then((data:any) => {
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

# **authControllerGetStaff**
> void authControllerGetStaff()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetStaffRequest = {
  // string
  email: "email_example",
};

apiInstance.authControllerGetStaff(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | staff retrieved successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerGetStaffRole**
> authControllerGetStaffRole()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerGetStaffRoleRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerGetStaffRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


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

# **authControllerLogin**
> UserResponseDto authControllerLogin(loginPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerLoginRequest = {
  // LoginPayloadDto
  loginPayloadDto: {
    email: "email_example",
    password: "password_example",
    role: "role_example",
  },
};

apiInstance.authControllerLogin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginPayloadDto** | **LoginPayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerSignOut**
> LoggedOutResponse authControllerSignOut(loggedOutPayloadDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerSignOutRequest = {
  // LoggedOutPayloadDTO
  loggedOutPayloadDTO: {
    identifier: "device-001",
  },
};

apiInstance.authControllerSignOut(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loggedOutPayloadDTO** | **LoggedOutPayloadDTO**|  |


### Return type

**LoggedOutResponse**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerStaffRoles**
> authControllerStaffRoles()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerStaffRolesRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // boolean (optional)
  allRoles: true,
  // string (optional)
  ownerId: "ownerId_example",
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerStaffRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **allRoles** | [**boolean**] |  | (optional) defaults to undefined
 **ownerId** | [**string**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


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

# **authControllerSuperAdminLoginlogin**
> UserResponseDto authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerSuperAdminLoginloginRequest = {
  // SuperAdminLoginPayloadDto
  superAdminLoginPayloadDto: {
    userId: "userId_example",
  },
};

apiInstance.authControllerSuperAdminLoginlogin(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **superAdminLoginPayloadDto** | **SuperAdminLoginPayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerSyncUserInfo**
> UserSyncResponseDto authControllerSyncUserInfo(userSyncDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerSyncUserInfoRequest = {
  // UserSyncDTO
  userSyncDTO: {
    location: [0,1],
  },
};

apiInstance.authControllerSyncUserInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userSyncDTO** | **UserSyncDTO**|  |


### Return type

**UserSyncResponseDto**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUpdate**
> UserResponseDto authControllerUpdate(storeDetailsPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUpdateRequest = {
  // StoreDetailsPayloadDto
  storeDetailsPayloadDto: {
    storeName: "storeName_example",
    storeLogo: "storeLogo_example",
  },
};

apiInstance.authControllerUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storeDetailsPayloadDto** | **StoreDetailsPayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerUpdateRoles**
> authControllerUpdateRoles(updateRoleDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUpdateRolesRequest = {
  // string
  id: "id_example",
  // UpdateRoleDto
  updateRoleDto: {
    name: "Moderator",
    description: "This role provides moderation capabilities in the system.",
    permissions: ["64c9abefc347e1234567890b","64c9abefc347e1234567890c"],
  },
};

apiInstance.authControllerUpdateRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateRoleDto** | **UpdateRoleDto**|  |
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

# **authControllerUpdateStaff**
> void authControllerUpdateStaff(updateStaffDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUpdateStaffRequest = {
  // string
  id: "id_example",
  // UpdateStaffDto
  updateStaffDto: {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    roles: ["60d0fe4f5311236168a109ca","60d0fe4f5311236168a109cb"],
  },
};

apiInstance.authControllerUpdateStaff(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStaffDto** | **UpdateStaffDto**|  |
 **id** | [**string**] |  | defaults to undefined


### Return type

**void**

### Authorization

[bearer](README.md#bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Staff updated successfully |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUpdateStaffRoles**
> authControllerUpdateStaffRoles(updateStaffRoleDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUpdateStaffRolesRequest = {
  // string
  id: "id_example",
  // UpdateStaffRoleDto
  updateStaffRoleDto: {
    name: "Moderator",
    owner: "64c9abefc347e1234567890a",
    description: "This role provides moderation capabilities in the system.",
    permissions: ["64c9abefc347e1234567890b","64c9abefc347e1234567890c"],
  },
};

apiInstance.authControllerUpdateStaffRoles(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStaffRoleDto** | **UpdateStaffRoleDto**|  |
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

# **authControllerUser**
> authControllerUser()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // boolean (optional)
  allRoles: true,
  // string (optional)
  search: "search_example",
};

apiInstance.authControllerUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **allRoles** | [**boolean**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


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

# **authControllerUserById**
> UserResponseDto authControllerUserById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerUserById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserResponseDto**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authControllerUserFollowers**
> UserFollowerResponseDto authControllerUserFollowers()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserFollowersRequest = {
  // string
  id: "id_example",
};

apiInstance.authControllerUserFollowers(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**UserFollowerResponseDto**

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

# **authControllerUserMe**
> UserResponseDto authControllerUserMe()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:any = {};

apiInstance.authControllerUserMe(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserResponseDto**

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

# **authControllerUserRoleUpdate**
> UserResponseDto authControllerUserRoleUpdate(userRolePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserRoleUpdateRequest = {
  // UserRolePayloadDto
  userRolePayloadDto: {
    role: "role_example",
  },
};

apiInstance.authControllerUserRoleUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRolePayloadDto** | **UserRolePayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerUserUpdate**
> UserResponseDto authControllerUserUpdate(userUpdatePayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerUserUpdateRequest = {
  // UserUpdatePayloadDto
  userUpdatePayloadDto: {
    firstName: "firstName_example",
    lastName: "lastName_example",
    userName: "userName_example",
    interests: [
      "interests_example",
    ],
    email: "email_example",
    profile: "profile_example",
    followerCount: 3.14,
    followingCount: 3.14,
    activityStatus: "activityStatus_example",
  },
};

apiInstance.authControllerUserUpdate(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdatePayloadDto** | **UserUpdatePayloadDto**|  |


### Return type

**UserResponseDto**

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

# **authControllerVerifyOtp**
> ForgetPasswordEntityResponseDto authControllerVerifyOtp(otpEntityPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AuthApi(configuration);

let body:.AuthApiAuthControllerVerifyOtpRequest = {
  // OtpEntityPayloadDto
  otpEntityPayloadDto: {
    otp: "otp_example",
    email: "email_example",
  },
};

apiInstance.authControllerVerifyOtp(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **otpEntityPayloadDto** | **OtpEntityPayloadDto**|  |


### Return type

**ForgetPasswordEntityResponseDto**

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


