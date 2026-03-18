# .ContactApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactControllerSyncContacts**](ContactApi.md#contactControllerSyncContacts) | **POST** /v1/contact/sync | 


# **contactControllerSyncContacts**
> ContactDetailsDto contactControllerSyncContacts(contactDetails)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .ContactApi(configuration);

let body:.ContactApiContactControllerSyncContactsRequest = {
  // Array<ContactDetails>
  contactDetails: [
    {
      firstName: "firstName_example",
      lastName: "lastName_example",
      countryCode: "countryCode_example",
      mobileNumber: "mobileNumber_example",
      mobile: "mobile_example",
    },
  ],
};

apiInstance.contactControllerSyncContacts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactDetails** | **Array<ContactDetails>**|  |


### Return type

**ContactDetailsDto**

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


