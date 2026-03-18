# .EventsApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**eventControllerBookMarkEvent**](EventsApi.md#eventControllerBookMarkEvent) | **POST** /v1/bookmark-event | 
[**eventControllerBookMarkEventList**](EventsApi.md#eventControllerBookMarkEventList) | **GET** /v1/bookmark-event-list | 
[**eventControllerCreateEvent**](EventsApi.md#eventControllerCreateEvent) | **POST** /v1/event | 
[**eventControllerCreateMyEvents**](EventsApi.md#eventControllerCreateMyEvents) | **POST** /v1/free-event-book | 
[**eventControllerDeleteBookMarkEvent**](EventsApi.md#eventControllerDeleteBookMarkEvent) | **DELETE** /v1/bookmark-event/{eventId} | 
[**eventControllerDeleteEvent**](EventsApi.md#eventControllerDeleteEvent) | **DELETE** /v1/event | 
[**eventControllerFindCustomerOfEvents**](EventsApi.md#eventControllerFindCustomerOfEvents) | **GET** /v1/event-customers | 
[**eventControllerFindEventById**](EventsApi.md#eventControllerFindEventById) | **GET** /v1/event | 
[**eventControllerFindEvents**](EventsApi.md#eventControllerFindEvents) | **GET** /v1/events | 
[**eventControllerFindMyEvent**](EventsApi.md#eventControllerFindMyEvent) | **GET** /v1/my-event | 
[**eventControllerFindMyUpcomingEvents**](EventsApi.md#eventControllerFindMyUpcomingEvents) | **GET** /v1/upcoming/events | 
[**eventControllerFindSearchPlaces**](EventsApi.md#eventControllerFindSearchPlaces) | **POST** /v1/search-places | 
[**eventControllerGetBookMarkEventStatus**](EventsApi.md#eventControllerGetBookMarkEventStatus) | **GET** /v1/bookmark-event-status/{eventId} | 
[**eventControllerUpdateEvent**](EventsApi.md#eventControllerUpdateEvent) | **PUT** /v1/event | 


# **eventControllerBookMarkEvent**
> CreateBookMarkEventResponseDto eventControllerBookMarkEvent(bookMarkEventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerBookMarkEventRequest = {
  // BookMarkEventPayloadDto
  bookMarkEventPayloadDto: {
    eventId: "eventId_example",
  },
};

apiInstance.eventControllerBookMarkEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookMarkEventPayloadDto** | **BookMarkEventPayloadDto**|  |


### Return type

**CreateBookMarkEventResponseDto**

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

# **eventControllerBookMarkEventList**
> BookMarkEventListResponseDto eventControllerBookMarkEventList()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerBookMarkEventListRequest = {
  // number
  page: 3.14,
  // number (optional)
  limit: 3.14,
  // string (optional)
  userId: "userId_example",
};

apiInstance.eventControllerBookMarkEventList(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined


### Return type

**BookMarkEventListResponseDto**

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

# **eventControllerCreateEvent**
> EventResponseDto eventControllerCreateEvent(eventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerCreateEventRequest = {
  // EventPayloadDto
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    endDate: new Date('1970-01-01T00:00:00.00Z'),
    price: 3.14,
    noOfTickets: 3.14,
    description: "description_example",
    place: {
      label: "label_example",
      value: "value_example",
    },
    id: "id_example",
    book: "book_example",
    owner: "owner_example",
    link: "link_example",
    timezone: "timezone_example",
  },
};

apiInstance.eventControllerCreateEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventPayloadDto** | **EventPayloadDto**|  |


### Return type

**EventResponseDto**

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

# **eventControllerCreateMyEvents**
> MyEventResponseDto eventControllerCreateMyEvents(myEventsPayloadDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerCreateMyEventsRequest = {
  // MyEventsPayloadDTO
  myEventsPayloadDTO: {
    eventId: "eventId_example",
  },
};

apiInstance.eventControllerCreateMyEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **myEventsPayloadDTO** | **MyEventsPayloadDTO**|  |


### Return type

**MyEventResponseDto**

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

# **eventControllerDeleteBookMarkEvent**
> DeleteBookMarkEventResponseDto eventControllerDeleteBookMarkEvent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerDeleteBookMarkEventRequest = {
  // string
  eventId: "eventId_example",
};

apiInstance.eventControllerDeleteBookMarkEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**DeleteBookMarkEventResponseDto**

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

# **eventControllerDeleteEvent**
> EventDeleteResponseDto eventControllerDeleteEvent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerDeleteEventRequest = {
  // string
  id: "id_example",
  // boolean (optional)
  withBookedEvent: true,
};

apiInstance.eventControllerDeleteEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **withBookedEvent** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**EventDeleteResponseDto**

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

# **eventControllerFindCustomerOfEvents**
> EventCustomerResponseDto eventControllerFindCustomerOfEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindCustomerOfEventsRequest = {
  // string
  userId: "userId_example",
};

apiInstance.eventControllerFindCustomerOfEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | [**string**] |  | defaults to undefined


### Return type

**EventCustomerResponseDto**

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

# **eventControllerFindEventById**
> EventResponseDto eventControllerFindEventById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindEventByIdRequest = {
  // string
  id: "id_example",
  // boolean (optional)
  withBookedEvent: true,
};

apiInstance.eventControllerFindEventById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined
 **withBookedEvent** | [**boolean**] |  | (optional) defaults to undefined


### Return type

**EventResponseDto**

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

# **eventControllerFindEvents**
> EventsResponseDto eventControllerFindEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindEventsRequest = {
  // number
  page: 3.14,
  // number (optional)
  limit: 3.14,
  // number (optional)
  longitude: 3.14,
  // number (optional)
  latitude: 3.14,
  // string (optional)
  userId: "userId_example",
  // string (optional)
  search: "search_example",
};

apiInstance.eventControllerFindEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | (optional) defaults to undefined
 **longitude** | [**number**] |  | (optional) defaults to undefined
 **latitude** | [**number**] |  | (optional) defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined


### Return type

**EventsResponseDto**

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

# **eventControllerFindMyEvent**
> MyEventResponseDto eventControllerFindMyEvent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindMyEventRequest = {
  // string
  eventId: "eventId_example",
};

apiInstance.eventControllerFindMyEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**MyEventResponseDto**

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

# **eventControllerFindMyUpcomingEvents**
> MyEventsResponseDto eventControllerFindMyUpcomingEvents()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindMyUpcomingEventsRequest = {
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // 'UPCOMING' | 'VISITED'
  type: "UPCOMING",
};

apiInstance.eventControllerFindMyUpcomingEvents(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **type** | [**&#39;UPCOMING&#39; | &#39;VISITED&#39;**]**Array<&#39;UPCOMING&#39; &#124; &#39;VISITED&#39;>** |  | defaults to 'UPCOMING'


### Return type

**MyEventsResponseDto**

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

# **eventControllerFindSearchPlaces**
> LocationPlacesResponseDto eventControllerFindSearchPlaces(locationPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerFindSearchPlacesRequest = {
  // LocationPayloadDto
  locationPayloadDto: {
    place: "place_example",
  },
};

apiInstance.eventControllerFindSearchPlaces(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationPayloadDto** | **LocationPayloadDto**|  |


### Return type

**LocationPlacesResponseDto**

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

# **eventControllerGetBookMarkEventStatus**
> BookMarkEventStatusResponseDto eventControllerGetBookMarkEventStatus()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerGetBookMarkEventStatusRequest = {
  // string
  eventId: "eventId_example",
};

apiInstance.eventControllerGetBookMarkEventStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventId** | [**string**] |  | defaults to undefined


### Return type

**BookMarkEventStatusResponseDto**

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

# **eventControllerUpdateEvent**
> EventResponseDto eventControllerUpdateEvent(eventPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .EventsApi(configuration);

let body:.EventsApiEventControllerUpdateEventRequest = {
  // EventPayloadDto
  eventPayloadDto: {
    title: "title_example",
    image: "image_example",
    startDate: new Date('1970-01-01T00:00:00.00Z'),
    endDate: new Date('1970-01-01T00:00:00.00Z'),
    price: 3.14,
    noOfTickets: 3.14,
    description: "description_example",
    place: {
      label: "label_example",
      value: "value_example",
    },
    id: "id_example",
    book: "book_example",
    owner: "owner_example",
    link: "link_example",
    timezone: "timezone_example",
  },
};

apiInstance.eventControllerUpdateEvent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eventPayloadDto** | **EventPayloadDto**|  |


### Return type

**EventResponseDto**

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


