# .DeviceApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deviceControllerAddDevice**](DeviceApi.md#deviceControllerAddDevice) | **POST** /v1/device | 


# **deviceControllerAddDevice**
> DeviceAddResponse deviceControllerAddDevice(addDevicePayload)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DeviceApi(configuration);

let body:.DeviceApiDeviceControllerAddDeviceRequest = {
  // AddDevicePayload
  addDevicePayload: {
    name: "My Device",
    identifier: "device-001",
    token: "abcdef123456",
    os: "android",
    version: "13",
  },
};

apiInstance.deviceControllerAddDevice(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addDevicePayload** | **AddDevicePayload**|  |


### Return type

**DeviceAddResponse**

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


