# .BooksApi

All URIs are relative to *https://localhost:3000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**bookControllerAddBook**](BooksApi.md#bookControllerAddBook) | **POST** /v1/book | 
[**bookControllerAddMyGoodReadsBooks**](BooksApi.md#bookControllerAddMyGoodReadsBooks) | **POST** /v1/books/add-goodreads | 
[**bookControllerAddReadingGoal**](BooksApi.md#bookControllerAddReadingGoal) | **POST** /v1/add/reading/books/goal | 
[**bookControllerAddTopBook**](BooksApi.md#bookControllerAddTopBook) | **POST** /v1/add/top/books | 
[**bookControllerDeleteReview**](BooksApi.md#bookControllerDeleteReview) | **POST** /v1/user/book/delete/review | 
[**bookControllerFindBookById**](BooksApi.md#bookControllerFindBookById) | **GET** /v1/book | 
[**bookControllerFindBookByStatus**](BooksApi.md#bookControllerFindBookByStatus) | **POST** /v1/books/by-status | 
[**bookControllerFindBookReviewBase**](BooksApi.md#bookControllerFindBookReviewBase) | **POST** /v1/books/type | 
[**bookControllerFindBooks**](BooksApi.md#bookControllerFindBooks) | **GET** /v1/books | 
[**bookControllerFindGoodReads**](BooksApi.md#bookControllerFindGoodReads) | **POST** /v1/books/goodreads | 
[**bookControllerFindReadingGoal**](BooksApi.md#bookControllerFindReadingGoal) | **GET** /v1/reading/goal | 
[**bookControllerFindTopBooks**](BooksApi.md#bookControllerFindTopBooks) | **GET** /v1/top/books | 
[**bookControllerFindUserBookReview**](BooksApi.md#bookControllerFindUserBookReview) | **GET** /v1/user/book/review | 
[**bookControllerFindUserBookReviewCount**](BooksApi.md#bookControllerFindUserBookReviewCount) | **GET** /v1/book/review/count | 
[**bookControllerFindUserBookReviews**](BooksApi.md#bookControllerFindUserBookReviews) | **GET** /v1/book/review | 
[**bookControllerFindUserWhichReadBook**](BooksApi.md#bookControllerFindUserWhichReadBook) | **GET** /v1/book/reader | 
[**bookControllerRemoveTopBook**](BooksApi.md#bookControllerRemoveTopBook) | **DELETE** /v1/remove/top/books | 
[**bookControllerUpdateBookPosition**](BooksApi.md#bookControllerUpdateBookPosition) | **PUT** /v1/book/position | 
[**bookControllerUserBookMark**](BooksApi.md#bookControllerUserBookMark) | **POST** /v1/user/book | 


# **bookControllerAddBook**
> BookResponseDto bookControllerAddBook(bookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerAddBookRequest = {
  // BookPayloadDto
  bookPayloadDto: {
    title: "title_example",
    cover: "cover_example",
    description: "description_example",
    genre: "genre_example",
    author: "author_example",
    language: "language_example",
    pages: 3.14,
  },
};

apiInstance.bookControllerAddBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookPayloadDto** | **BookPayloadDto**|  |


### Return type

**BookResponseDto**

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

# **bookControllerAddMyGoodReadsBooks**
> BooksStatusResponseDto bookControllerAddMyGoodReadsBooks(requestBody)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerAddMyGoodReadsBooksRequest = {
  // Array<string>
  requestBody: [
    "requestBody_example",
  ],
};

apiInstance.bookControllerAddMyGoodReadsBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **Array<string>**|  |


### Return type

**BooksStatusResponseDto**

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

# **bookControllerAddReadingGoal**
> ReadingGoalResponseDTO bookControllerAddReadingGoal(readingGoalPayload)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerAddReadingGoalRequest = {
  // ReadingGoalPayload
  readingGoalPayload: {
    visibility: "visibility_example",
    bookReadGoal: 3.14,
  },
};

apiInstance.bookControllerAddReadingGoal(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **readingGoalPayload** | **ReadingGoalPayload**|  |


### Return type

**ReadingGoalResponseDTO**

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

# **bookControllerAddTopBook**
> TopBooksResponseDTO bookControllerAddTopBook(topBookPayload)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerAddTopBookRequest = {
  // TopBookPayload
  topBookPayload: {
    bookId: "bookId_example",
    userId: "userId_example",
  },
};

apiInstance.bookControllerAddTopBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topBookPayload** | **TopBookPayload**|  |


### Return type

**TopBooksResponseDTO**

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

# **bookControllerDeleteReview**
> UserBookDeleteResponseDto bookControllerDeleteReview(userBookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerDeleteReviewRequest = {
  // UserBookPayloadDto
  userBookPayloadDto: {
    bookId: "bookId_example",
    status: "status_example",
    rate: 3.14,
    review: "review_example",
  },
};

apiInstance.bookControllerDeleteReview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookPayloadDto** | **UserBookPayloadDto**|  |


### Return type

**UserBookDeleteResponseDto**

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

# **bookControllerFindBookById**
> BookResponseDto bookControllerFindBookById()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBookByIdRequest = {
  // string
  id: "id_example",
};

apiInstance.bookControllerFindBookById(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**string**] |  | defaults to undefined


### Return type

**BookResponseDto**

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

# **bookControllerFindBookByStatus**
> BooksReviewResponseDto bookControllerFindBookByStatus(bookByStatusDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBookByStatusRequest = {
  // BookByStatusDto
  bookByStatusDto: {
    search: "search_example",
    status: "status_example",
    page: 3.14,
    limit: 3.14,
    userId: "userId_example",
  },
};

apiInstance.bookControllerFindBookByStatus(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookByStatusDto** | **BookByStatusDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindBookReviewBase**
> BooksReviewResponseDto bookControllerFindBookReviewBase(userBookStatusQueryDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBookReviewBaseRequest = {
  // UserBookStatusQueryDto
  userBookStatusQueryDto: {
    type: "type_example",
    rate: 3.14,
    search: "search_example",
    page: 3.14,
    limit: 3.14,
    userId: "userId_example",
  },
};

apiInstance.bookControllerFindBookReviewBase(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookStatusQueryDto** | **UserBookStatusQueryDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindBooks**
> BooksResponseDto bookControllerFindBooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindBooksRequest = {
  // number
  rate: 3.14,
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string (optional)
  search: "search_example",
  // boolean (optional)
  isPrompt: true,
  // string (optional)
  user: "user_example",
};

apiInstance.bookControllerFindBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate** | [**number**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **isPrompt** | [**boolean**] |  | (optional) defaults to undefined
 **user** | [**string**] |  | (optional) defaults to undefined


### Return type

**BooksResponseDto**

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

# **bookControllerFindGoodReads**
> BooksReviewResponseDto bookControllerFindGoodReads(goodReadsBookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindGoodReadsRequest = {
  // GoodReadsBookPayloadDto
  goodReadsBookPayloadDto: {
    books: [
      "books_example",
    ],
    add: true,
  },
};

apiInstance.bookControllerFindGoodReads(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **goodReadsBookPayloadDto** | **GoodReadsBookPayloadDto**|  |


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindReadingGoal**
> ReadingGoalResponseDTO bookControllerFindReadingGoal()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindReadingGoalRequest = {
  // string
  user: "user_example",
};

apiInstance.bookControllerFindReadingGoal(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**string**] |  | defaults to undefined


### Return type

**ReadingGoalResponseDTO**

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

# **bookControllerFindTopBooks**
> BooksReviewResponseDto bookControllerFindTopBooks()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindTopBooksRequest = {
  // number
  rate: 3.14,
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string (optional)
  search: "search_example",
  // boolean (optional)
  isPrompt: true,
  // string (optional)
  user: "user_example",
};

apiInstance.bookControllerFindTopBooks(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate** | [**number**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **search** | [**string**] |  | (optional) defaults to undefined
 **isPrompt** | [**boolean**] |  | (optional) defaults to undefined
 **user** | [**string**] |  | (optional) defaults to undefined


### Return type

**BooksReviewResponseDto**

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

# **bookControllerFindUserBookReview**
> UserBookReviewResponseDto bookControllerFindUserBookReview()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewRequest = {
  // string
  bookId: "bookId_example",
  // string (optional)
  status: "status_example",
  // number (optional)
  rate: 3.14,
  // string (optional)
  review: "review_example",
};

apiInstance.bookControllerFindUserBookReview(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**UserBookReviewResponseDto**

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

# **bookControllerFindUserBookReviewCount**
> BookReviewCountResponseDto bookControllerFindUserBookReviewCount()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewCountRequest = {
  // string
  bookId: "bookId_example",
  // string (optional)
  status: "status_example",
  // number (optional)
  rate: 3.14,
  // string (optional)
  review: "review_example",
};

apiInstance.bookControllerFindUserBookReviewCount(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **status** | [**string**] |  | (optional) defaults to undefined
 **rate** | [**number**] |  | (optional) defaults to undefined
 **review** | [**string**] |  | (optional) defaults to undefined


### Return type

**BookReviewCountResponseDto**

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

# **bookControllerFindUserBookReviews**
> UserBooksResponseDto bookControllerFindUserBookReviews()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerFindUserBookReviewsRequest = {
  // string
  bookId: "bookId_example",
  // number
  page: 3.14,
  // number
  limit: 3.14,
  // string (optional)
  userId: "userId_example",
  // Array<number> (optional)
  rate: [],
};

apiInstance.bookControllerFindUserBookReviews(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookId** | [**string**] |  | defaults to undefined
 **page** | [**number**] |  | defaults to undefined
 **limit** | [**number**] |  | defaults to undefined
 **userId** | [**string**] |  | (optional) defaults to undefined
 **rate** | **Array&lt;number&gt;** |  | (optional) defaults to undefined


### Return type

**UserBooksResponseDto**

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

# **bookControllerFindUserWhichReadBook**
> UserBooksResponseDto bookControllerFindUserWhichReadBook()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:any = {};

apiInstance.bookControllerFindUserWhichReadBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**UserBooksResponseDto**

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

# **bookControllerRemoveTopBook**
> bookControllerRemoveTopBook(topBookPayload)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerRemoveTopBookRequest = {
  // TopBookPayload
  topBookPayload: {
    bookId: "bookId_example",
    userId: "userId_example",
  },
};

apiInstance.bookControllerRemoveTopBook(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **topBookPayload** | **TopBookPayload**|  |


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

# **bookControllerUpdateBookPosition**
> BookResponseDto bookControllerUpdateBookPosition(bookPositionDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerUpdateBookPositionRequest = {
  // BookPositionDto
  bookPositionDto: {
    books: [
      "books_example",
    ],
  },
};

apiInstance.bookControllerUpdateBookPosition(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookPositionDto** | **BookPositionDto**|  |


### Return type

**BookResponseDto**

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

# **bookControllerUserBookMark**
> UserBookReviewResponseDto bookControllerUserBookMark(userBookPayloadDto)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .BooksApi(configuration);

let body:.BooksApiBookControllerUserBookMarkRequest = {
  // UserBookPayloadDto
  userBookPayloadDto: {
    bookId: "bookId_example",
    status: "status_example",
    rate: 3.14,
    review: "review_example",
  },
};

apiInstance.bookControllerUserBookMark(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userBookPayloadDto** | **UserBookPayloadDto**|  |


### Return type

**UserBookReviewResponseDto**

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


