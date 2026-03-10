import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAnalyticsApi } from './ObservableAPI';

import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";
export class PromiseAnalyticsApi {
    private api: ObservableAnalyticsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AnalyticsApiRequestFactory,
        responseProcessor?: AnalyticsApiResponseProcessor
    ) {
        this.api = new ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AnalyticsResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.analyticsControllerGetAnalyticsWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userId
     */
    public analyticsControllerGetAnalytics(userId: string, _options?: PromiseConfigurationOptions): Promise<AnalyticsResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.analyticsControllerGetAnalytics(userId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public authControllerAccountDeletionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAccountDeletionWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerAccountDeletion(_options?: PromiseConfigurationOptions): Promise<UserDeleteResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAccountDeletion(observableOptions);
        return result.toPromise();
    }

    /**
     * @param feedbackPayloadDto
     */
    public authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto: FeedbackPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FeedbackCreateResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param feedbackPayloadDto
     */
    public authControllerAddFeedback(feedbackPayloadDto: FeedbackPayloadDto, _options?: PromiseConfigurationOptions): Promise<FeedbackCreateResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAddFeedback(feedbackPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param appfeepercentageUpdatePayloadDto
     */
    public authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AppfeepercentageResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param appfeepercentageUpdatePayloadDto
     */
    public authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<AppfeepercentageResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PasswordChangeResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: PromiseConfigurationOptions): Promise<PasswordChangeResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerChangePassword(changePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateBusinessUser(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateRolesWithHttpInfo(createRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateRoles(createRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateStaffDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateStaffWithHttpInfo(createStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffDto
     */
    public authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: PromiseConfigurationOptions): Promise<CreateStaffDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateStaff(createStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto: CreateStaffRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRole(createStaffRoleDto: CreateStaffRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateStaffRole(createStaffRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerCreateUser(signupPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteRoleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteRoleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteRole(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteRole(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteStaffWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaff(id: string, _options?: PromiseConfigurationOptions): Promise<UserDeleteResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteStaff(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRoleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteStaffRoleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerDeleteStaffRole(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerDeleteStaffRole(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: PromiseConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param user
     */
    public authControllerGetAchievementWithHttpInfo(user: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserAchievementResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAchievementWithHttpInfo(user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param user
     */
    public authControllerGetAchievement(user: string, _options?: PromiseConfigurationOptions): Promise<UserAchievementResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAchievement(user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<ActivityResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetActivity(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaffWithHttpInfo(page: number, ownerId: string, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAllStaffWithHttpInfo(page, ownerId, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param ownerId
     * @param limit
     * @param [search]
     */
    public authControllerGetAllStaff(page: number, ownerId: string, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAllStaff(page, ownerId, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     */
    public authControllerGetAllusersWithHttpInfo(page: number, limit: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAllusersWithHttpInfo(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     */
    public authControllerGetAllusers(page: number, limit: number, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetAllusers(page, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [longitude]
     * @param [latitude]
     * @param [global]
     * @param [search]
     */
    public authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<ActivityResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetEventsActivity(page, limit, longitude, latitude, global, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByTypeWithHttpInfo(page: number, limit: number, type: string, userId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetEventsActivityByTypeWithHttpInfo(page, limit, type, userId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     * @param [userId]
     * @param [search]
     */
    public authControllerGetEventsActivityByType(page: number, limit: number, type: string, userId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<ActivityResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetEventsActivityByType(page, limit, type, userId, search, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<InterestsResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetInterestsWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterests(_options?: PromiseConfigurationOptions): Promise<InterestsResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetInterests(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermissionWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetPermissionWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermission(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetPermission(observableOptions);
        return result.toPromise();
    }

    /**
     * @param email
     */
    public authControllerGetStaffWithHttpInfo(email: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetStaffWithHttpInfo(email, observableOptions);
        return result.toPromise();
    }

    /**
     * @param email
     */
    public authControllerGetStaff(email: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetStaff(email, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerGetStaffRoleWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetStaffRoleWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerGetStaffRole(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerGetStaffRole(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerLogin(loginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loggedOutPayloadDTO
     */
    public authControllerSignOutWithHttpInfo(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LoggedOutResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSignOutWithHttpInfo(loggedOutPayloadDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loggedOutPayloadDTO
     */
    public authControllerSignOut(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: PromiseConfigurationOptions): Promise<LoggedOutResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSignOut(loggedOutPayloadDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRolesWithHttpInfo(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerStaffRolesWithHttpInfo(page, limit, allRoles, ownerId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [ownerId]
     * @param [search]
     */
    public authControllerStaffRoles(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerStaffRoles(page, limit, allRoles, ownerId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param superAdminLoginPayloadDto
     */
    public authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param superAdminLoginPayloadDto
     */
    public authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userSyncDTO
     */
    public authControllerSyncUserInfoWithHttpInfo(userSyncDTO: UserSyncDTO, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserSyncResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSyncUserInfoWithHttpInfo(userSyncDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userSyncDTO
     */
    public authControllerSyncUserInfo(userSyncDTO: UserSyncDTO, _options?: PromiseConfigurationOptions): Promise<UserSyncResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerSyncUserInfo(userSyncDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto
     */
    public authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdate(storeDetailsPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateRoleDto
     */
    public authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateRoles(id, updateRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffDto
     */
    public authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateStaff(id, updateStaffDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRolesWithHttpInfo(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateStaffRolesWithHttpInfo(id, updateStaffRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param updateStaffRoleDto
     */
    public authControllerUpdateStaffRoles(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUpdateStaffRoles(id, updateStaffRoleDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserWithHttpInfo(page, limit, allRoles, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [allRoles]
     * @param [search]
     */
    public authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUser(page, limit, allRoles, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserById(id: string, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserFollowerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserFollowersWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public authControllerUserFollowers(id: string, _options?: PromiseConfigurationOptions): Promise<UserFollowerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserFollowers(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserMeWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMe(_options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserMe(observableOptions);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: PromiseConfigurationOptions): Promise<UserResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerUserUpdate(userUpdatePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: PromiseConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBooksApi } from './ObservableAPI';

import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";
export class PromiseBooksApi {
    private api: ObservableBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BooksApiRequestFactory,
        responseProcessor?: BooksApiResponseProcessor
    ) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookPayloadDto
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: PromiseConfigurationOptions): Promise<BookResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddBook(bookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksStatusResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * @param requestBody
     */
    public bookControllerAddMyGoodReadsBooks(requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<BooksStatusResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddMyGoodReadsBooks(requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * @param readingGoalPayload
     */
    public bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload: ReadingGoalPayload, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param readingGoalPayload
     */
    public bookControllerAddReadingGoal(readingGoalPayload: ReadingGoalPayload, _options?: PromiseConfigurationOptions): Promise<ReadingGoalResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddReadingGoal(readingGoalPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param topBookPayload
     */
    public bookControllerAddTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: PromiseConfigurationOptions): Promise<HttpInfo<TopBooksResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddTopBookWithHttpInfo(topBookPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param topBookPayload
     */
    public bookControllerAddTopBook(topBookPayload: TopBookPayload, _options?: PromiseConfigurationOptions): Promise<TopBooksResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerAddTopBook(topBookPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBookDeleteResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerDeleteReview(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserBookDeleteResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerDeleteReview(userBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public bookControllerFindBookById(id: string, _options?: PromiseConfigurationOptions): Promise<BookResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookById(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto: BookByStatusDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookByStatusDto
     */
    public bookControllerFindBookByStatus(bookByStatusDto: BookByStatusDto, _options?: PromiseConfigurationOptions): Promise<BooksReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookByStatus(bookByStatusDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto
     */
    public bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: PromiseConfigurationOptions): Promise<BooksReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBookReviewBase(userBookStatusQueryDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: PromiseConfigurationOptions): Promise<BooksResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindBooks(rate, page, limit, search, isPrompt, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param goodReadsBookPayloadDto
     */
    public bookControllerFindGoodReads(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<BooksReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindGoodReads(goodReadsBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param user
     */
    public bookControllerFindReadingGoalWithHttpInfo(user: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindReadingGoalWithHttpInfo(user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param user
     */
    public bookControllerFindReadingGoal(user: string, _options?: PromiseConfigurationOptions): Promise<ReadingGoalResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindReadingGoal(user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindTopBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindTopBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param rate
     * @param page
     * @param limit
     * @param [search]
     * @param [isPrompt]
     * @param [user]
     */
    public bookControllerFindTopBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: PromiseConfigurationOptions): Promise<BooksReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindTopBooks(rate, page, limit, search, isPrompt, user, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<UserBookReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReview(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookReviewCountResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param [status]
     * @param [rate]
     * @param [review]
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: PromiseConfigurationOptions): Promise<BookReviewCountResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReviewCount(bookId, status, rate, review, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [userId]
     * @param [rate]
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, userId, rate, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookId
     * @param page
     * @param limit
     * @param [userId]
     * @param [rate]
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: PromiseConfigurationOptions): Promise<UserBooksResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserBookReviews(bookId, page, limit, userId, rate, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserWhichReadBookWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBook(_options?: PromiseConfigurationOptions): Promise<UserBooksResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerFindUserWhichReadBook(observableOptions);
        return result.toPromise();
    }

    /**
     * @param topBookPayload
     */
    public bookControllerRemoveTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerRemoveTopBookWithHttpInfo(topBookPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param topBookPayload
     */
    public bookControllerRemoveTopBook(topBookPayload: TopBookPayload, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerRemoveTopBook(topBookPayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookPositionDto
     */
    public bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto: BookPositionDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookPositionDto
     */
    public bookControllerUpdateBookPosition(bookPositionDto: BookPositionDto, _options?: PromiseConfigurationOptions): Promise<BookResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerUpdateBookPosition(bookPositionDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: PromiseConfigurationOptions): Promise<UserBookReviewResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.bookControllerUserBookMark(userBookPayloadDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableContactApi } from './ObservableAPI';

import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";
export class PromiseContactApi {
    private api: ObservableContactApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactApiRequestFactory,
        responseProcessor?: ContactApiResponseProcessor
    ) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param contactDetails
     */
    public contactControllerSyncContactsWithHttpInfo(contactDetails: Array<ContactDetails>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContactDetailsDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.contactControllerSyncContactsWithHttpInfo(contactDetails, observableOptions);
        return result.toPromise();
    }

    /**
     * @param contactDetails
     */
    public contactControllerSyncContacts(contactDetails: Array<ContactDetails>, _options?: PromiseConfigurationOptions): Promise<ContactDetailsDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.contactControllerSyncContacts(contactDetails, observableOptions);
        return result.toPromise();
    }


}



import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public appControllerGetHelloWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.appControllerGetHelloWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public appControllerGetHello(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.appControllerGetHello(observableOptions);
        return result.toPromise();
    }


}



import { ObservableDeviceApi } from './ObservableAPI';

import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";
export class PromiseDeviceApi {
    private api: ObservableDeviceApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeviceApiRequestFactory,
        responseProcessor?: DeviceApiResponseProcessor
    ) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param addDevicePayload
     */
    public deviceControllerAddDeviceWithHttpInfo(addDevicePayload: AddDevicePayload, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeviceAddResponse>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deviceControllerAddDeviceWithHttpInfo(addDevicePayload, observableOptions);
        return result.toPromise();
    }

    /**
     * @param addDevicePayload
     */
    public deviceControllerAddDevice(addDevicePayload: AddDevicePayload, _options?: PromiseConfigurationOptions): Promise<DeviceAddResponse> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.deviceControllerAddDevice(addDevicePayload, observableOptions);
        return result.toPromise();
    }


}



import { ObservableEventsApi } from './ObservableAPI';

import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";
export class PromiseEventsApi {
    private api: ObservableEventsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventsApiRequestFactory,
        responseProcessor?: EventsApiResponseProcessor
    ) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CreateBookMarkEventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param bookMarkEventPayloadDto
     */
    public eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: PromiseConfigurationOptions): Promise<CreateBookMarkEventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerBookMarkEvent(bookMarkEventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookMarkEventListResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerBookMarkEventListWithHttpInfo(page, limit, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [userId]
     */
    public eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: PromiseConfigurationOptions): Promise<BookMarkEventListResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerBookMarkEventList(page, limit, userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerCreateEvent(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param myEventsPayloadDTO
     */
    public eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyEventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param myEventsPayloadDTO
     */
    public eventControllerCreateMyEvents(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: PromiseConfigurationOptions): Promise<MyEventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerCreateMyEvents(myEventsPayloadDTO, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<DeleteBookMarkEventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerDeleteBookMarkEventWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerDeleteBookMarkEvent(eventId: string, _options?: PromiseConfigurationOptions): Promise<DeleteBookMarkEventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerDeleteBookMarkEvent(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventDeleteResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<EventDeleteResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerDeleteEvent(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(userId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventCustomerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindCustomerOfEventsWithHttpInfo(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param userId
     */
    public eventControllerFindCustomerOfEvents(userId: string, _options?: PromiseConfigurationOptions): Promise<EventCustomerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindCustomerOfEvents(userId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param [withBookedEvent]
     */
    public eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindEventById(id, withBookedEvent, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     * @param [search]
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventsResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindEventsWithHttpInfo(page, limit, longitude, latitude, userId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param [limit]
     * @param [longitude]
     * @param [latitude]
     * @param [userId]
     * @param [search]
     */
    public eventControllerFindEvents(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: PromiseConfigurationOptions): Promise<EventsResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindEvents(page, limit, longitude, latitude, userId, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyEventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindMyEventWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerFindMyEvent(eventId: string, _options?: PromiseConfigurationOptions): Promise<MyEventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindMyEvent(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyEventsResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param type
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: PromiseConfigurationOptions): Promise<MyEventsResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindMyUpcomingEvents(page, limit, type, observableOptions);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<LocationPlacesResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: PromiseConfigurationOptions): Promise<LocationPlacesResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerFindSearchPlaces(locationPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BookMarkEventStatusResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerGetBookMarkEventStatusWithHttpInfo(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventId
     */
    public eventControllerGetBookMarkEventStatus(eventId: string, _options?: PromiseConfigurationOptions): Promise<BookMarkEventStatusResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerGetBookMarkEventStatus(eventId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: PromiseConfigurationOptions): Promise<EventResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.eventControllerUpdateEvent(eventPayloadDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFollowerApi } from './ObservableAPI';

import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";
export class PromiseFollowerApi {
    private api: ObservableFollowerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FollowerApiRequestFactory,
        responseProcessor?: FollowerApiResponseProcessor
    ) {
        this.api = new ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param acceptFollowerPayloadDto
     */
    public followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param acceptFollowerPayloadDto
     */
    public followerControllerAccept(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerAccept(acceptFollowerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param myFriendPayloadDto
     */
    public followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: PromiseConfigurationOptions): Promise<MyAllFriendsResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFindMyFriends(myFriendPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFollowWithHttpInfo(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFollow(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public followerControllerFriendRequestListWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<FriendRequestItemEntityDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFriendRequestListWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public followerControllerFriendRequestList(_options?: PromiseConfigurationOptions): Promise<FriendRequestItemEntityDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerFriendRequestList(observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerIsFriendWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerIsFriendWithHttpInfo(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerIsFriend(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerIsFriend(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerUnfollowWithHttpInfo(followerPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: PromiseConfigurationOptions): Promise<FollowerResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.followerControllerUnfollow(followerPayloadDto, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFriendsApi } from './ObservableAPI';

import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";
export class PromiseFriendsApi {
    private api: ObservableFriendsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FriendsApiRequestFactory,
        responseProcessor?: FriendsApiResponseProcessor
    ) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FriendsResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.friendControllerFindFriendsWithHttpInfo(page, limit, search, observableOptions);
        return result.toPromise();
    }

    /**
     * @param page
     * @param limit
     * @param [search]
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: PromiseConfigurationOptions): Promise<FriendsResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.friendControllerFindFriends(page, limit, search, observableOptions);
        return result.toPromise();
    }


}



import { ObservableNielsenBooksApi } from './ObservableAPI';

import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";
export class PromiseNielsenBooksApi {
    private api: ObservableNielsenBooksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: NielsenBooksApiRequestFactory,
        responseProcessor?: NielsenBooksApiResponseProcessor
    ) {
        this.api = new ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     * @param body
     */
    public nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBookById(id, body, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, observableOptions);
        return result.toPromise();
    }

    /**
     * @param id
     */
    public nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBookImageById(id, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooks(_options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.nielsenBooksControllerGetNielsenBooks(observableOptions);
        return result.toPromise();
    }


}



import { ObservablePaymentApi } from './ObservableAPI';

import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";
export class PromisePaymentApi {
    private api: ObservablePaymentApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PaymentApiRequestFactory,
        responseProcessor?: PaymentApiResponseProcessor
    ) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public paymentControllerConnectAccountWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerConnectAccountWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerConnectAccount(_options?: PromiseConfigurationOptions): Promise<BusinessConnectedAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerConnectAccount(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<VerificationLinkResponseDTO>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLink(_options?: PromiseConfigurationOptions): Promise<VerificationLinkResponseDTO> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreateAccountVerificationLink(observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PaymentResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<PaymentResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreatePayment(stripePaymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StripeResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: PromiseConfigurationOptions): Promise<StripeResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerCreatePaymentIntent(stripePayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: PromiseConfigurationOptions): Promise<CardListResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerDeleteCardDetails(paymentPayloadDto, observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerGetCardListWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardList(_options?: PromiseConfigurationOptions): Promise<CardListResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerGetCardList(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccount(_options?: PromiseConfigurationOptions): Promise<BusinessConnectedAccount> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.paymentControllerRetrieveConnectedAccount(observableOptions);
        return result.toPromise();
    }


}



import { ObservableStorageApi } from './ObservableAPI';

import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";
export class PromiseStorageApi {
    private api: ObservableStorageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: StorageApiRequestFactory,
        responseProcessor?: StorageApiResponseProcessor
    ) {
        this.api = new ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: PromiseConfigurationOptions): Promise<HttpInfo<StorageResponseDto>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, observableOptions);
        return result.toPromise();
    }

    /**
     * @param fileUploadDto
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: PromiseConfigurationOptions): Promise<StorageResponseDto> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.storageControllerGetPreSignedURL(fileUploadDto, observableOptions);
        return result.toPromise();
    }


}



