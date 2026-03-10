import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, mergeConfiguration } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AcceptFollowerPayloadDto } from '../models/AcceptFollowerPayloadDto';
import { Activity } from '../models/Activity';
import { ActivityResponse } from '../models/ActivityResponse';
import { ActivityResponseDto } from '../models/ActivityResponseDto';
import { AddDevicePayload } from '../models/AddDevicePayload';
import { Address } from '../models/Address';
import { AnalyticsResponseDTO } from '../models/AnalyticsResponseDTO';
import { AppfeepercentageResponseDto } from '../models/AppfeepercentageResponseDto';
import { AppfeepercentageUpdatePayloadDto } from '../models/AppfeepercentageUpdatePayloadDto';
import { AttendeeDTO } from '../models/AttendeeDTO';
import { AuthorResponseDto } from '../models/AuthorResponseDto';
import { BillingDetails } from '../models/BillingDetails';
import { Book } from '../models/Book';
import { BookByStatusDto } from '../models/BookByStatusDto';
import { BookMarkEventDTO } from '../models/BookMarkEventDTO';
import { BookMarkEventListDTO } from '../models/BookMarkEventListDTO';
import { BookMarkEventListResponseDto } from '../models/BookMarkEventListResponseDto';
import { BookMarkEventPayloadDto } from '../models/BookMarkEventPayloadDto';
import { BookMarkEventStatusResponseDto } from '../models/BookMarkEventStatusResponseDto';
import { BookPayloadDto } from '../models/BookPayloadDto';
import { BookPositionDto } from '../models/BookPositionDto';
import { BookResponseDto } from '../models/BookResponseDto';
import { BookReviewCountResponseDto } from '../models/BookReviewCountResponseDto';
import { Books } from '../models/Books';
import { BooksResponseDto } from '../models/BooksResponseDto';
import { BooksReviewResponseDto } from '../models/BooksReviewResponseDto';
import { BooksStatusResponseDto } from '../models/BooksStatusResponseDto';
import { BusinessConnectedAccount } from '../models/BusinessConnectedAccount';
import { Card } from '../models/Card';
import { CardChecks } from '../models/CardChecks';
import { CardList } from '../models/CardList';
import { CardListResponseDto } from '../models/CardListResponseDto';
import { CardNetwork } from '../models/CardNetwork';
import { CardSecure } from '../models/CardSecure';
import { ChangePayloadDto } from '../models/ChangePayloadDto';
import { ContactDetails } from '../models/ContactDetails';
import { ContactDetailsDto } from '../models/ContactDetailsDto';
import { ContactDetailsResponse } from '../models/ContactDetailsResponse';
import { CreateBookMarkEventResponseDto } from '../models/CreateBookMarkEventResponseDto';
import { CreateRoleDto } from '../models/CreateRoleDto';
import { CreateStaffDto } from '../models/CreateStaffDto';
import { CreateStaffRoleDto } from '../models/CreateStaffRoleDto';
import { DeleteBookMarkEventResponseDto } from '../models/DeleteBookMarkEventResponseDto';
import { DeviceAddResponse } from '../models/DeviceAddResponse';
import { DeviceEntity } from '../models/DeviceEntity';
import { EventCustomer } from '../models/EventCustomer';
import { EventCustomerResponseDto } from '../models/EventCustomerResponseDto';
import { EventDeleteResponseDto } from '../models/EventDeleteResponseDto';
import { EventPayloadDto } from '../models/EventPayloadDto';
import { EventResponseDto } from '../models/EventResponseDto';
import { Events } from '../models/Events';
import { EventsList } from '../models/EventsList';
import { EventsResponseDto } from '../models/EventsResponseDto';
import { FeedbackCreateResponseDto } from '../models/FeedbackCreateResponseDto';
import { FeedbackPayloadDto } from '../models/FeedbackPayloadDto';
import { FileUploadDto } from '../models/FileUploadDto';
import { FileUrl } from '../models/FileUrl';
import { Follower } from '../models/Follower';
import { FollowerPayloadDto } from '../models/FollowerPayloadDto';
import { FollowerResponseDto } from '../models/FollowerResponseDto';
import { ForgetPasswordEntityResponse } from '../models/ForgetPasswordEntityResponse';
import { ForgetPasswordEntityResponseDto } from '../models/ForgetPasswordEntityResponseDto';
import { ForgetPasswordPayloadDto } from '../models/ForgetPasswordPayloadDto';
import { FriendRequestItem } from '../models/FriendRequestItem';
import { FriendRequestItemEntityDto } from '../models/FriendRequestItemEntityDto';
import { FriendsResponse } from '../models/FriendsResponse';
import { FriendsResponseDto } from '../models/FriendsResponseDto';
import { GoodReadsBookPayloadDto } from '../models/GoodReadsBookPayloadDto';
import { InterestsPayloadDto } from '../models/InterestsPayloadDto';
import { InterestsResponseDto } from '../models/InterestsResponseDto';
import { Location } from '../models/Location';
import { LocationPayloadDto } from '../models/LocationPayloadDto';
import { LocationPlacesResponseDto } from '../models/LocationPlacesResponseDto';
import { LoggedOutPayloadDTO } from '../models/LoggedOutPayloadDTO';
import { LoggedOutResponse } from '../models/LoggedOutResponse';
import { LoginPayloadDto } from '../models/LoginPayloadDto';
import { MetaResponse } from '../models/MetaResponse';
import { MyAllFriendsResponseDto } from '../models/MyAllFriendsResponseDto';
import { MyEventResponseDto } from '../models/MyEventResponseDto';
import { MyEvents } from '../models/MyEvents';
import { MyEventsPayloadDTO } from '../models/MyEventsPayloadDTO';
import { MyEventsResponse } from '../models/MyEventsResponse';
import { MyEventsResponseDto } from '../models/MyEventsResponseDto';
import { MyFriendPayloadDto } from '../models/MyFriendPayloadDto';
import { MyFriendsResponse } from '../models/MyFriendsResponse';
import { OtpEntityPayloadDto } from '../models/OtpEntityPayloadDto';
import { PasswordChangeResponse } from '../models/PasswordChangeResponse';
import { PasswordChangeResponseDto } from '../models/PasswordChangeResponseDto';
import { PaymentPayloadDto } from '../models/PaymentPayloadDto';
import { PaymentResponse } from '../models/PaymentResponse';
import { PaymentResponseDto } from '../models/PaymentResponseDto';
import { PermissionResponseDto } from '../models/PermissionResponseDto';
import { Places } from '../models/Places';
import { Rating } from '../models/Rating';
import { ReadingGoalPayload } from '../models/ReadingGoalPayload';
import { ReadingGoalResponse } from '../models/ReadingGoalResponse';
import { ReadingGoalResponseDTO } from '../models/ReadingGoalResponseDTO';
import { Review } from '../models/Review';
import { RoleResponseDto } from '../models/RoleResponseDto';
import { SignupPayloadDto } from '../models/SignupPayloadDto';
import { StorageResponseDto } from '../models/StorageResponseDto';
import { StoreDetailsPayloadDto } from '../models/StoreDetailsPayloadDto';
import { StripePayloadDto } from '../models/StripePayloadDto';
import { StripePaymentPayloadDto } from '../models/StripePaymentPayloadDto';
import { StripeResponse } from '../models/StripeResponse';
import { StripeResponseDto } from '../models/StripeResponseDto';
import { SuperAdminLoginPayloadDto } from '../models/SuperAdminLoginPayloadDto';
import { TopBookPayload } from '../models/TopBookPayload';
import { TopBooksResponse } from '../models/TopBooksResponse';
import { TopBooksResponseDTO } from '../models/TopBooksResponseDTO';
import { UpdateRoleDto } from '../models/UpdateRoleDto';
import { UpdateStaffDto } from '../models/UpdateStaffDto';
import { UpdateStaffRoleDto } from '../models/UpdateStaffRoleDto';
import { UserAchievementResponse } from '../models/UserAchievementResponse';
import { UserAchievementResponseDTO } from '../models/UserAchievementResponseDTO';
import { UserBookDeleteResponseDto } from '../models/UserBookDeleteResponseDto';
import { UserBookPayloadDto } from '../models/UserBookPayloadDto';
import { UserBookReviewResponseDto } from '../models/UserBookReviewResponseDto';
import { UserBookStatusQueryDto } from '../models/UserBookStatusQueryDto';
import { UserBooks } from '../models/UserBooks';
import { UserBooksResponse } from '../models/UserBooksResponse';
import { UserBooksResponseDto } from '../models/UserBooksResponseDto';
import { UserDeleteResponseDto } from '../models/UserDeleteResponseDto';
import { UserDetails } from '../models/UserDetails';
import { UserFollowerResponseDto } from '../models/UserFollowerResponseDto';
import { UserFollowers } from '../models/UserFollowers';
import { UserResponse } from '../models/UserResponse';
import { UserResponseDto } from '../models/UserResponseDto';
import { UserRolePayloadDto } from '../models/UserRolePayloadDto';
import { UserSyncDTO } from '../models/UserSyncDTO';
import { UserSyncResponseDto } from '../models/UserSyncResponseDto';
import { UserUpdatePayloadDto } from '../models/UserUpdatePayloadDto';
import { VerificationLinkResponseDTO } from '../models/VerificationLinkResponseDTO';

import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";
export class ObservableAnalyticsApi {
    private requestFactory: AnalyticsApiRequestFactory;
    private responseProcessor: AnalyticsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalyticsApiRequestFactory,
        responseProcessor?: AnalyticsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AnalyticsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AnalyticsApiResponseProcessor();
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<AnalyticsResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.analyticsControllerGetAnalytics(userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.analyticsControllerGetAnalyticsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalytics(userId: string, _options?: ConfigurationOptions): Observable<AnalyticsResponseDTO> {
        return this.analyticsControllerGetAnalyticsWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<AnalyticsResponseDTO>) => apiResponse.data));
    }

}

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class ObservableAuthApi {
    private requestFactory: AuthApiRequestFactory;
    private responseProcessor: AuthApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AuthApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AuthApiResponseProcessor();
    }

    /**
     */
    public authControllerAccountDeletionWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UserDeleteResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerAccountDeletion(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerAccountDeletionWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerAccountDeletion(_options?: ConfigurationOptions): Observable<UserDeleteResponseDto> {
        return this.authControllerAccountDeletionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param feedbackPayloadDto
     */
    public authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto: FeedbackPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<FeedbackCreateResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerAddFeedback(feedbackPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerAddFeedbackWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param feedbackPayloadDto
     */
    public authControllerAddFeedback(feedbackPayloadDto: FeedbackPayloadDto, _options?: ConfigurationOptions): Observable<FeedbackCreateResponseDto> {
        return this.authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FeedbackCreateResponseDto>) => apiResponse.data));
    }

    /**
     * @param appfeepercentageUpdatePayloadDto
     */
    public authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<AppfeepercentageResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerAppfeepercentageUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param appfeepercentageUpdatePayloadDto
     */
    public authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: ConfigurationOptions): Observable<AppfeepercentageResponseDto> {
        return this.authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto, _options).pipe(map((apiResponse: HttpInfo<AppfeepercentageResponseDto>) => apiResponse.data));
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<PasswordChangeResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerChangePassword(changePayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerChangePasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: ConfigurationOptions): Observable<PasswordChangeResponseDto> {
        return this.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options).pipe(map((apiResponse: HttpInfo<PasswordChangeResponseDto>) => apiResponse.data));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerCreateBusinessUser(signupPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateBusinessUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerCreateRoles(createRoleDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerCreateRolesWithHttpInfo(createRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: ConfigurationOptions): Observable<HttpInfo<CreateStaffDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerCreateStaff(createStaffDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: ConfigurationOptions): Observable<CreateStaffDto> {
        return this.authControllerCreateStaffWithHttpInfo(createStaffDto, _options).pipe(map((apiResponse: HttpInfo<CreateStaffDto>) => apiResponse.data));
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto: CreateStaffRoleDto, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerCreateStaffRole(createStaffRoleDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRole(createStaffRoleDto: CreateStaffRoleDto, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerCreateUser(signupPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerCreateUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteRoleWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerDeleteRole(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteRole(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerDeleteRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserDeleteResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerDeleteStaff(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaff(id: string, _options?: ConfigurationOptions): Observable<UserDeleteResponseDto> {
        return this.authControllerDeleteStaffWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRoleWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerDeleteStaffRole(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerDeleteStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRole(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerDeleteStaffRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerForgetPassword(forgetPasswordPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerForgetPasswordWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: ConfigurationOptions): Observable<ForgetPasswordEntityResponseDto> {
        return this.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options).pipe(map((apiResponse: HttpInfo<ForgetPasswordEntityResponseDto>) => apiResponse.data));
    }

    /**
     * @param user
     */
    public authControllerGetAchievementWithHttpInfo(user: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserAchievementResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetAchievement(user, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetAchievementWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param user
     */
    public authControllerGetAchievement(user: string, _options?: ConfigurationOptions): Observable<UserAchievementResponseDTO> {
        return this.authControllerGetAchievementWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<UserAchievementResponseDTO>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ActivityResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetActivity(page, limit, longitude, latitude, global, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: ConfigurationOptions): Observable<ActivityResponseDto> {
        return this.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaffWithHttpInfo(page: number, ownerId: string, limit: number, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetAllStaff(page, ownerId, limit, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetAllStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaff(page: number, ownerId: string, limit: number, search?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerGetAllStaffWithHttpInfo(page, ownerId, limit, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     */
    public authControllerGetAllusersWithHttpInfo(page: number, limit: number, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetAllusers(page, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetAllusersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     */
    public authControllerGetAllusers(page: number, limit: number, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerGetAllusersWithHttpInfo(page, limit, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ActivityResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetEventsActivity(page, limit, longitude, latitude, global, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetEventsActivityWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: ConfigurationOptions): Observable<ActivityResponseDto> {
        return this.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByTypeWithHttpInfo(page: number, limit: number, type: string, userId?: string, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ActivityResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetEventsActivityByType(page, limit, type, userId, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetEventsActivityByTypeWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByType(page: number, limit: number, type: string, userId?: string, search?: string, _options?: ConfigurationOptions): Observable<ActivityResponseDto> {
        return this.authControllerGetEventsActivityByTypeWithHttpInfo(page, limit, type, userId, search, _options).pipe(map((apiResponse: HttpInfo<ActivityResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<InterestsResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetInterests(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetInterestsWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerGetInterests(_options?: ConfigurationOptions): Observable<InterestsResponseDto> {
        return this.authControllerGetInterestsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<InterestsResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerGetPermissionWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetPermission(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetPermissionWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerGetPermission(_options?: ConfigurationOptions): Observable<void> {
        return this.authControllerGetPermissionWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param email
     */
    public authControllerGetStaffWithHttpInfo(email: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetStaff(email, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param email
     */
    public authControllerGetStaff(email: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerGetStaffWithHttpInfo(email, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerGetStaffRoleWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerGetStaffRole(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerGetStaffRoleWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerGetStaffRole(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerGetStaffRoleWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerLogin(loginPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerLoginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerLoginWithHttpInfo(loginPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param loggedOutPayloadDTO
     */
    public authControllerSignOutWithHttpInfo(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: ConfigurationOptions): Observable<HttpInfo<LoggedOutResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerSignOut(loggedOutPayloadDTO, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerSignOutWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param loggedOutPayloadDTO
     */
    public authControllerSignOut(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: ConfigurationOptions): Observable<LoggedOutResponse> {
        return this.authControllerSignOutWithHttpInfo(loggedOutPayloadDTO, _options).pipe(map((apiResponse: HttpInfo<LoggedOutResponse>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRolesWithHttpInfo(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerStaffRoles(page, limit, allRoles, ownerId, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerStaffRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRoles(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerStaffRolesWithHttpInfo(page, limit, allRoles, ownerId, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param superAdminLoginPayloadDto
     */
    public authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerSuperAdminLoginloginWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param superAdminLoginPayloadDto
     */
    public authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param userSyncDTO
     */
    public authControllerSyncUserInfoWithHttpInfo(userSyncDTO: UserSyncDTO, _options?: ConfigurationOptions): Observable<HttpInfo<UserSyncResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerSyncUserInfo(userSyncDTO, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerSyncUserInfoWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userSyncDTO
     */
    public authControllerSyncUserInfo(userSyncDTO: UserSyncDTO, _options?: ConfigurationOptions): Observable<UserSyncResponseDto> {
        return this.authControllerSyncUserInfoWithHttpInfo(userSyncDTO, _options).pipe(map((apiResponse: HttpInfo<UserSyncResponseDto>) => apiResponse.data));
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUpdate(storeDetailsPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUpdateRoles(id, updateRoleDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUpdateStaff(id, updateStaffDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateStaffWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRolesWithHttpInfo(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUpdateStaffRoles(id, updateStaffRoleDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUpdateStaffRolesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRoles(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerUpdateStaffRolesWithHttpInfo(id, updateStaffRoleDto, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUser(page, limit, allRoles, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: ConfigurationOptions): Observable<void> {
        return this.authControllerUserWithHttpInfo(page, limit, allRoles, search, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUserById(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerUserById(id: string, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerUserByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserFollowerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUserFollowers(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserFollowersWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public authControllerUserFollowers(id: string, _options?: ConfigurationOptions): Observable<UserFollowerResponseDto> {
        return this.authControllerUserFollowersWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<UserFollowerResponseDto>) => apiResponse.data));
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUserMe(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserMeWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public authControllerUserMe(_options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerUserMeWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUserRoleUpdate(userRolePayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserRoleUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerUserUpdate(userUpdatePayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerUserUpdateWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: ConfigurationOptions): Observable<UserResponseDto> {
        return this.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserResponseDto>) => apiResponse.data));
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.authControllerVerifyOtp(otpEntityPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authControllerVerifyOtpWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: ConfigurationOptions): Observable<ForgetPasswordEntityResponseDto> {
        return this.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options).pipe(map((apiResponse: HttpInfo<ForgetPasswordEntityResponseDto>) => apiResponse.data));
    }

}

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";
export class ObservableBooksApi {
    private requestFactory: BooksApiRequestFactory;
    private responseProcessor: BooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BooksApiResponseProcessor();
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<BookResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerAddBook(bookPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddBookWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: ConfigurationOptions): Observable<BookResponseDto> {
        return this.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<BookResponseDto>) => apiResponse.data));
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<BooksStatusResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerAddMyGoodReadsBooks(requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddMyGoodReadsBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooks(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<BooksStatusResponseDto> {
        return this.bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<BooksStatusResponseDto>) => apiResponse.data));
    }

    /**
     * @param readingGoalPayload
     */
    public bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload: ReadingGoalPayload, _options?: ConfigurationOptions): Observable<HttpInfo<ReadingGoalResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerAddReadingGoal(readingGoalPayload, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddReadingGoalWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param readingGoalPayload
     */
    public bookControllerAddReadingGoal(readingGoalPayload: ReadingGoalPayload, _options?: ConfigurationOptions): Observable<ReadingGoalResponseDTO> {
        return this.bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload, _options).pipe(map((apiResponse: HttpInfo<ReadingGoalResponseDTO>) => apiResponse.data));
    }

    /**
     * @param topBookPayload
     */
    public bookControllerAddTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: ConfigurationOptions): Observable<HttpInfo<TopBooksResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerAddTopBook(topBookPayload, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerAddTopBookWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param topBookPayload
     */
    public bookControllerAddTopBook(topBookPayload: TopBookPayload, _options?: ConfigurationOptions): Observable<TopBooksResponseDTO> {
        return this.bookControllerAddTopBookWithHttpInfo(topBookPayload, _options).pipe(map((apiResponse: HttpInfo<TopBooksResponseDTO>) => apiResponse.data));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserBookDeleteResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerDeleteReview(userBookPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerDeleteReviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerDeleteReview(userBookPayloadDto: UserBookPayloadDto, _options?: ConfigurationOptions): Observable<UserBookDeleteResponseDto> {
        return this.bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserBookDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<BookResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindBookById(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public bookControllerFindBookById(id: string, _options?: ConfigurationOptions): Observable<BookResponseDto> {
        return this.bookControllerFindBookByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<BookResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto: BookByStatusDto, _options?: ConfigurationOptions): Observable<HttpInfo<BooksReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindBookByStatus(bookByStatusDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookByStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatus(bookByStatusDto: BookByStatusDto, _options?: ConfigurationOptions): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: ConfigurationOptions): Observable<HttpInfo<BooksReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindBookReviewBase(userBookStatusQueryDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBookReviewBaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: ConfigurationOptions): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BooksResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindBooks(rate, page, limit, search, isPrompt, user, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: ConfigurationOptions): Observable<BooksResponseDto> {
        return this.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, _options).pipe(map((apiResponse: HttpInfo<BooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<BooksReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindGoodReads(goodReadsBookPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindGoodReadsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReads(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: ConfigurationOptions): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param user
     */
    public bookControllerFindReadingGoalWithHttpInfo(user: string, _options?: ConfigurationOptions): Observable<HttpInfo<ReadingGoalResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindReadingGoal(user, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindReadingGoalWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param user
     */
    public bookControllerFindReadingGoal(user: string, _options?: ConfigurationOptions): Observable<ReadingGoalResponseDTO> {
        return this.bookControllerFindReadingGoalWithHttpInfo(user, _options).pipe(map((apiResponse: HttpInfo<ReadingGoalResponseDTO>) => apiResponse.data));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindTopBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BooksReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindTopBooks(rate, page, limit, search, isPrompt, user, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindTopBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindTopBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: ConfigurationOptions): Observable<BooksReviewResponseDto> {
        return this.bookControllerFindTopBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, _options).pipe(map((apiResponse: HttpInfo<BooksReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: ConfigurationOptions): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReview(bookId, status, rate, review, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: ConfigurationOptions): Observable<UserBookReviewResponseDto> {
        return this.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<UserBookReviewResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BookReviewCountResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewCountWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: ConfigurationOptions): Observable<BookReviewCountResponseDto> {
        return this.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options).pipe(map((apiResponse: HttpInfo<BookReviewCountResponseDto>) => apiResponse.data));
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [userId]
     * @param [rate]
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: ConfigurationOptions): Observable<HttpInfo<UserBooksResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindUserBookReviews(bookId, page, limit, userId, rate, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserBookReviewsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [userId]
     * @param [rate]
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: ConfigurationOptions): Observable<UserBooksResponseDto> {
        return this.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, userId, rate, _options).pipe(map((apiResponse: HttpInfo<UserBooksResponseDto>) => apiResponse.data));
    }

    /**
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<UserBooksResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerFindUserWhichReadBook(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerFindUserWhichReadBookWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public bookControllerFindUserWhichReadBook(_options?: ConfigurationOptions): Observable<UserBooksResponseDto> {
        return this.bookControllerFindUserWhichReadBookWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<UserBooksResponseDto>) => apiResponse.data));
    }

    /**
     * @param topBookPayload
     */
    public bookControllerRemoveTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerRemoveTopBook(topBookPayload, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerRemoveTopBookWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param topBookPayload
     */
    public bookControllerRemoveTopBook(topBookPayload: TopBookPayload, _options?: ConfigurationOptions): Observable<void> {
        return this.bookControllerRemoveTopBookWithHttpInfo(topBookPayload, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param bookPositionDto
     */
    public bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto: BookPositionDto, _options?: ConfigurationOptions): Observable<HttpInfo<BookResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerUpdateBookPosition(bookPositionDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerUpdateBookPositionWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookPositionDto
     */
    public bookControllerUpdateBookPosition(bookPositionDto: BookPositionDto, _options?: ConfigurationOptions): Observable<BookResponseDto> {
        return this.bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto, _options).pipe(map((apiResponse: HttpInfo<BookResponseDto>) => apiResponse.data));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<UserBookReviewResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.bookControllerUserBookMark(userBookPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.bookControllerUserBookMarkWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: ConfigurationOptions): Observable<UserBookReviewResponseDto> {
        return this.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options).pipe(map((apiResponse: HttpInfo<UserBookReviewResponseDto>) => apiResponse.data));
    }

}

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class ObservableContactApi {
    private requestFactory: ContactApiRequestFactory;
    private responseProcessor: ContactApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactApiResponseProcessor();
    }

    /**
     * @param contactDetails
     */
    public contactControllerSyncContactsWithHttpInfo(contactDetails: Array<ContactDetails>, _options?: ConfigurationOptions): Observable<HttpInfo<ContactDetailsDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.contactControllerSyncContacts(contactDetails, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.contactControllerSyncContactsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param contactDetails
     */
    public contactControllerSyncContacts(contactDetails: Array<ContactDetails>, _options?: ConfigurationOptions): Observable<ContactDetailsDto> {
        return this.contactControllerSyncContactsWithHttpInfo(contactDetails, _options).pipe(map((apiResponse: HttpInfo<ContactDetailsDto>) => apiResponse.data));
    }

}

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     */
    public appControllerGetHelloWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.appControllerGetHello(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.appControllerGetHelloWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public appControllerGetHello(_options?: ConfigurationOptions): Observable<void> {
        return this.appControllerGetHelloWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";
export class ObservableDeviceApi {
    private requestFactory: DeviceApiRequestFactory;
    private responseProcessor: DeviceApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DeviceApiRequestFactory,
        responseProcessor?: DeviceApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DeviceApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DeviceApiResponseProcessor();
    }

    /**
     * @param addDevicePayload
     */
    public deviceControllerAddDeviceWithHttpInfo(addDevicePayload: AddDevicePayload, _options?: ConfigurationOptions): Observable<HttpInfo<DeviceAddResponse>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.deviceControllerAddDevice(addDevicePayload, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deviceControllerAddDeviceWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param addDevicePayload
     */
    public deviceControllerAddDevice(addDevicePayload: AddDevicePayload, _options?: ConfigurationOptions): Observable<DeviceAddResponse> {
        return this.deviceControllerAddDeviceWithHttpInfo(addDevicePayload, _options).pipe(map((apiResponse: HttpInfo<DeviceAddResponse>) => apiResponse.data));
    }

}

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class ObservableEventsApi {
    private requestFactory: EventsApiRequestFactory;
    private responseProcessor: EventsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventsApiResponseProcessor();
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<CreateBookMarkEventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerBookMarkEvent(bookMarkEventPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerBookMarkEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: ConfigurationOptions): Observable<CreateBookMarkEventResponseDto> {
        return this.eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<CreateBookMarkEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<BookMarkEventListResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerBookMarkEventList(page, limit, userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerBookMarkEventListWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: ConfigurationOptions): Observable<BookMarkEventListResponseDto> {
        return this.eventControllerBookMarkEventListWithHttpInfo(page, limit, userId, _options).pipe(map((apiResponse: HttpInfo<BookMarkEventListResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<EventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerCreateEvent(eventPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerCreateEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: ConfigurationOptions): Observable<EventResponseDto> {
        return this.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

    /**
     * @param myEventsPayloadDTO
     */
    public eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: ConfigurationOptions): Observable<HttpInfo<MyEventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerCreateMyEvents(myEventsPayloadDTO, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerCreateMyEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param myEventsPayloadDTO
     */
    public eventControllerCreateMyEvents(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: ConfigurationOptions): Observable<MyEventResponseDto> {
        return this.eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO, _options).pipe(map((apiResponse: HttpInfo<MyEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: ConfigurationOptions): Observable<HttpInfo<DeleteBookMarkEventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerDeleteBookMarkEvent(eventId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerDeleteBookMarkEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEvent(eventId: string, _options?: ConfigurationOptions): Observable<DeleteBookMarkEventResponseDto> {
        return this.eventControllerDeleteBookMarkEventWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<DeleteBookMarkEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<EventDeleteResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerDeleteEvent(id, withBookedEvent, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerDeleteEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: ConfigurationOptions): Observable<EventDeleteResponseDto> {
        return this.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, _options).pipe(map((apiResponse: HttpInfo<EventDeleteResponseDto>) => apiResponse.data));
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(userId: string, _options?: ConfigurationOptions): Observable<HttpInfo<EventCustomerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindCustomerOfEvents(userId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindCustomerOfEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEvents(userId: string, _options?: ConfigurationOptions): Observable<EventCustomerResponseDto> {
        return this.eventControllerFindCustomerOfEventsWithHttpInfo(userId, _options).pipe(map((apiResponse: HttpInfo<EventCustomerResponseDto>) => apiResponse.data));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<EventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindEventById(id, withBookedEvent, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: ConfigurationOptions): Observable<EventResponseDto> {
        return this.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     * @param [search]
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<EventsResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindEvents(page, limit, longitude, latitude, userId, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     * @param [search]
     */
    public eventControllerFindEvents(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: ConfigurationOptions): Observable<EventsResponseDto> {
        return this.eventControllerFindEventsWithHttpInfo(page, limit, longitude, latitude, userId, search, _options).pipe(map((apiResponse: HttpInfo<EventsResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: ConfigurationOptions): Observable<HttpInfo<MyEventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindMyEvent(eventId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindMyEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEvent(eventId: string, _options?: ConfigurationOptions): Observable<MyEventResponseDto> {
        return this.eventControllerFindMyEventWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<MyEventResponseDto>) => apiResponse.data));
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: ConfigurationOptions): Observable<HttpInfo<MyEventsResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindMyUpcomingEvents(page, limit, type, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindMyUpcomingEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: ConfigurationOptions): Observable<MyEventsResponseDto> {
        return this.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options).pipe(map((apiResponse: HttpInfo<MyEventsResponseDto>) => apiResponse.data));
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<LocationPlacesResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerFindSearchPlaces(locationPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerFindSearchPlacesWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: ConfigurationOptions): Observable<LocationPlacesResponseDto> {
        return this.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options).pipe(map((apiResponse: HttpInfo<LocationPlacesResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: ConfigurationOptions): Observable<HttpInfo<BookMarkEventStatusResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerGetBookMarkEventStatus(eventId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerGetBookMarkEventStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatus(eventId: string, _options?: ConfigurationOptions): Observable<BookMarkEventStatusResponseDto> {
        return this.eventControllerGetBookMarkEventStatusWithHttpInfo(eventId, _options).pipe(map((apiResponse: HttpInfo<BookMarkEventStatusResponseDto>) => apiResponse.data));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<EventResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.eventControllerUpdateEvent(eventPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.eventControllerUpdateEventWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: ConfigurationOptions): Observable<EventResponseDto> {
        return this.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options).pipe(map((apiResponse: HttpInfo<EventResponseDto>) => apiResponse.data));
    }

}

import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";
export class ObservableFollowerApi {
    private requestFactory: FollowerApiRequestFactory;
    private responseProcessor: FollowerApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowerApiRequestFactory,
        responseProcessor?: FollowerApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FollowerApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FollowerApiResponseProcessor();
    }

    /**
     * @param acceptFollowerPayloadDto
     */
    public followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<FollowerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerAccept(acceptFollowerPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerAcceptWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param acceptFollowerPayloadDto
     */
    public followerControllerAccept(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: ConfigurationOptions): Observable<FollowerResponseDto> {
        return this.followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<MyAllFriendsResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerFindMyFriends(myFriendPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFindMyFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: ConfigurationOptions): Observable<MyAllFriendsResponseDto> {
        return this.followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto, _options).pipe(map((apiResponse: HttpInfo<MyAllFriendsResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<FollowerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerFollow(followerPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFollowWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<FollowerResponseDto> {
        return this.followerControllerFollowWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

    /**
     */
    public followerControllerFriendRequestListWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<FriendRequestItemEntityDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerFriendRequestList(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerFriendRequestListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public followerControllerFriendRequestList(_options?: ConfigurationOptions): Observable<FriendRequestItemEntityDto> {
        return this.followerControllerFriendRequestListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<FriendRequestItemEntityDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerIsFriendWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<FollowerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerIsFriend(followerPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerIsFriendWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerIsFriend(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<FollowerResponseDto> {
        return this.followerControllerIsFriendWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<FollowerResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.followerControllerUnfollow(followerPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.followerControllerUnfollowWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: ConfigurationOptions): Observable<FollowerResponseDto> {
        return this.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options).pipe(map((apiResponse: HttpInfo<FollowerResponseDto>) => apiResponse.data));
    }

}

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class ObservableFriendsApi {
    private requestFactory: FriendsApiRequestFactory;
    private responseProcessor: FriendsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FriendsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FriendsApiResponseProcessor();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: ConfigurationOptions): Observable<HttpInfo<FriendsResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.friendControllerFindFriends(page, limit, search, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.friendControllerFindFriendsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: ConfigurationOptions): Observable<FriendsResponseDto> {
        return this.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options).pipe(map((apiResponse: HttpInfo<FriendsResponseDto>) => apiResponse.data));
    }

}

import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";
export class ObservableNielsenBooksApi {
    private requestFactory: NielsenBooksApiRequestFactory;
    private responseProcessor: NielsenBooksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: NielsenBooksApiRequestFactory,
        responseProcessor?: NielsenBooksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new NielsenBooksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new NielsenBooksApiResponseProcessor();
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBookById(id, body, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: ConfigurationOptions): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBookImageById(id, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: ConfigurationOptions): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<void>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.nielsenBooksControllerGetNielsenBooks(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.nielsenBooksControllerGetNielsenBooksWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooks(_options?: ConfigurationOptions): Observable<void> {
        return this.nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";
export class ObservablePaymentApi {
    private requestFactory: PaymentApiRequestFactory;
    private responseProcessor: PaymentApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentApiRequestFactory,
        responseProcessor?: PaymentApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PaymentApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PaymentApiResponseProcessor();
    }

    /**
     */
    public paymentControllerConnectAccountWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BusinessConnectedAccount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerConnectAccount(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerConnectAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerConnectAccount(_options?: ConfigurationOptions): Observable<BusinessConnectedAccount> {
        return this.paymentControllerConnectAccountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BusinessConnectedAccount>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<VerificationLinkResponseDTO>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerCreateAccountVerificationLink(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreateAccountVerificationLinkWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLink(_options?: ConfigurationOptions): Observable<VerificationLinkResponseDTO> {
        return this.paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<VerificationLinkResponseDTO>) => apiResponse.data));
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<PaymentResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerCreatePayment(stripePaymentPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreatePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: ConfigurationOptions): Observable<PaymentResponseDto> {
        return this.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options).pipe(map((apiResponse: HttpInfo<PaymentResponseDto>) => apiResponse.data));
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<StripeResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerCreatePaymentIntent(stripePayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerCreatePaymentIntentWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: ConfigurationOptions): Observable<StripeResponseDto> {
        return this.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options).pipe(map((apiResponse: HttpInfo<StripeResponseDto>) => apiResponse.data));
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: ConfigurationOptions): Observable<HttpInfo<CardListResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerDeleteCardDetails(paymentPayloadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerDeleteCardDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: ConfigurationOptions): Observable<CardListResponseDto> {
        return this.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CardListResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerGetCardList(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerGetCardListWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerGetCardList(_options?: ConfigurationOptions): Observable<CardListResponseDto> {
        return this.paymentControllerGetCardListWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CardListResponseDto>) => apiResponse.data));
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<BusinessConnectedAccount>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.paymentControllerRetrieveConnectedAccount(_config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.paymentControllerRetrieveConnectedAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccount(_options?: ConfigurationOptions): Observable<BusinessConnectedAccount> {
        return this.paymentControllerRetrieveConnectedAccountWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<BusinessConnectedAccount>) => apiResponse.data));
    }

}

import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";
export class ObservableStorageApi {
    private requestFactory: StorageApiRequestFactory;
    private responseProcessor: StorageApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageApiRequestFactory,
        responseProcessor?: StorageApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new StorageApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new StorageApiResponseProcessor();
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: ConfigurationOptions): Observable<HttpInfo<StorageResponseDto>> {
        const _config = mergeConfiguration(this.configuration, _options);

        const requestContextPromise = this.requestFactory.storageControllerGetPreSignedURL(fileUploadDto, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of _config.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => _config.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of _config.middleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.storageControllerGetPreSignedURLWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: ConfigurationOptions): Observable<StorageResponseDto> {
        return this.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options).pipe(map((apiResponse: HttpInfo<StorageResponseDto>) => apiResponse.data));
    }

}
