# .ContactApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contactControllerSyncContacts**](ContactApi.md#contactControllerSyncContacts) | **POST** /v1/contact/sync | 


# **contactControllerSyncContacts**
> ContactDetailsDto contactControllerSyncContacts(contactDetails)


### Example


```typescript
import { createConfiguration, ContactApi } from '';
import type { ContactApiContactControllerSyncContactsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new ContactApi(configuration);

const request: ContactApiContactControllerSyncContactsRequest = {
  
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

const data = await apiInstance.contactControllerSyncContacts(request);
console.log('API called successfully. Returned data:', data);
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


