# .PaymentApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymentControllerConnectAccount**](PaymentApi.md#paymentControllerConnectAccount) | **POST** /v1/payment/connect-account | 
[**paymentControllerCreateAccountVerificationLink**](PaymentApi.md#paymentControllerCreateAccountVerificationLink) | **POST** /v1/payment/verification-link | 
[**paymentControllerCreatePayment**](PaymentApi.md#paymentControllerCreatePayment) | **POST** /v1/payment | 
[**paymentControllerCreatePaymentIntent**](PaymentApi.md#paymentControllerCreatePaymentIntent) | **POST** /v1/payment/intent | 
[**paymentControllerDeleteCardDetails**](PaymentApi.md#paymentControllerDeleteCardDetails) | **DELETE** /v1/payment/cards | 
[**paymentControllerGetCardList**](PaymentApi.md#paymentControllerGetCardList) | **GET** /v1/payment/cards | 
[**paymentControllerRetrieveConnectedAccount**](PaymentApi.md#paymentControllerRetrieveConnectedAccount) | **GET** /v1/payment/connect-account | 


# **paymentControllerConnectAccount**
> BusinessConnectedAccount paymentControllerConnectAccount()


### Example


```typescript
import { createConfiguration, PaymentApi } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request = {};

const data = await apiInstance.paymentControllerConnectAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BusinessConnectedAccount**

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

# **paymentControllerCreateAccountVerificationLink**
> VerificationLinkResponseDTO paymentControllerCreateAccountVerificationLink()


### Example


```typescript
import { createConfiguration, PaymentApi } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request = {};

const data = await apiInstance.paymentControllerCreateAccountVerificationLink(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**VerificationLinkResponseDTO**

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

# **paymentControllerCreatePayment**
> PaymentResponseDto paymentControllerCreatePayment(stripePaymentPayloadDto)


### Example


```typescript
import { createConfiguration, PaymentApi } from '';
import type { PaymentApiPaymentControllerCreatePaymentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request: PaymentApiPaymentControllerCreatePaymentRequest = {
  
  stripePaymentPayloadDto: {
    paymentId: "paymentId_example",
    eventId: "eventId_example",
  },
};

const data = await apiInstance.paymentControllerCreatePayment(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripePaymentPayloadDto** | **StripePaymentPayloadDto**|  |


### Return type

**PaymentResponseDto**

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

# **paymentControllerCreatePaymentIntent**
> StripeResponseDto paymentControllerCreatePaymentIntent(stripePayloadDto)


### Example


```typescript
import { createConfiguration, PaymentApi } from '';
import type { PaymentApiPaymentControllerCreatePaymentIntentRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request: PaymentApiPaymentControllerCreatePaymentIntentRequest = {
  
  stripePayloadDto: {
    amount: 3.14,
    event: "event_example",
  },
};

const data = await apiInstance.paymentControllerCreatePaymentIntent(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **stripePayloadDto** | **StripePayloadDto**|  |


### Return type

**StripeResponseDto**

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

# **paymentControllerDeleteCardDetails**
> CardListResponseDto paymentControllerDeleteCardDetails(paymentPayloadDto)


### Example


```typescript
import { createConfiguration, PaymentApi } from '';
import type { PaymentApiPaymentControllerDeleteCardDetailsRequest } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request: PaymentApiPaymentControllerDeleteCardDetailsRequest = {
  
  paymentPayloadDto: {
    id: "id_example",
  },
};

const data = await apiInstance.paymentControllerDeleteCardDetails(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **paymentPayloadDto** | **PaymentPayloadDto**|  |


### Return type

**CardListResponseDto**

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

# **paymentControllerGetCardList**
> CardListResponseDto paymentControllerGetCardList()


### Example


```typescript
import { createConfiguration, PaymentApi } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request = {};

const data = await apiInstance.paymentControllerGetCardList(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**CardListResponseDto**

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

# **paymentControllerRetrieveConnectedAccount**
> BusinessConnectedAccount paymentControllerRetrieveConnectedAccount()


### Example


```typescript
import { createConfiguration, PaymentApi } from '';

const configuration = createConfiguration();
const apiInstance = new PaymentApi(configuration);

const request = {};

const data = await apiInstance.paymentControllerRetrieveConnectedAccount(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters
This endpoint does not need any parameter.


### Return type

**BusinessConnectedAccount**

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


