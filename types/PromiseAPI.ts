import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
    public analyticsControllerGetAnalyticsWithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<AnalyticsResponseDTO>> {
        const result = this.api.analyticsControllerGetAnalyticsWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     */
    public analyticsControllerGetAnalytics(userId: string, _options?: Configuration): Promise<AnalyticsResponseDTO> {
        const result = this.api.analyticsControllerGetAnalytics(userId, _options);
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
    public authControllerAccountDeletionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>> {
        const result = this.api.authControllerAccountDeletionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerAccountDeletion(_options?: Configuration): Promise<UserDeleteResponseDto> {
        const result = this.api.authControllerAccountDeletion(_options);
        return result.toPromise();
    }

    /**
     * @param feedbackPayloadDto 
     */
    public authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto: FeedbackPayloadDto, _options?: Configuration): Promise<HttpInfo<FeedbackCreateResponseDto>> {
        const result = this.api.authControllerAddFeedbackWithHttpInfo(feedbackPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param feedbackPayloadDto 
     */
    public authControllerAddFeedback(feedbackPayloadDto: FeedbackPayloadDto, _options?: Configuration): Promise<FeedbackCreateResponseDto> {
        const result = this.api.authControllerAddFeedback(feedbackPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param appfeepercentageUpdatePayloadDto 
     */
    public authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: Configuration): Promise<HttpInfo<AppfeepercentageResponseDto>> {
        const result = this.api.authControllerAppfeepercentageUpdateWithHttpInfo(appfeepercentageUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param appfeepercentageUpdatePayloadDto 
     */
    public authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto, _options?: Configuration): Promise<AppfeepercentageResponseDto> {
        const result = this.api.authControllerAppfeepercentageUpdate(appfeepercentageUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePasswordWithHttpInfo(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<HttpInfo<PasswordChangeResponseDto>> {
        const result = this.api.authControllerChangePasswordWithHttpInfo(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param changePayloadDto 
     */
    public authControllerChangePassword(changePayloadDto: ChangePayloadDto, _options?: Configuration): Promise<PasswordChangeResponseDto> {
        const result = this.api.authControllerChangePassword(changePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerCreateBusinessUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateBusinessUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerCreateBusinessUser(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRolesWithHttpInfo(createRoleDto: CreateRoleDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerCreateRolesWithHttpInfo(createRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param createRoleDto Payload to create a new role
     */
    public authControllerCreateRoles(createRoleDto: CreateRoleDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerCreateRoles(createRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param createStaffDto 
     */
    public authControllerCreateStaffWithHttpInfo(createStaffDto: CreateStaffDto, _options?: Configuration): Promise<HttpInfo<CreateStaffDto>> {
        const result = this.api.authControllerCreateStaffWithHttpInfo(createStaffDto, _options);
        return result.toPromise();
    }

    /**
     * @param createStaffDto 
     */
    public authControllerCreateStaff(createStaffDto: CreateStaffDto, _options?: Configuration): Promise<CreateStaffDto> {
        const result = this.api.authControllerCreateStaff(createStaffDto, _options);
        return result.toPromise();
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto: CreateStaffRoleDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerCreateStaffRoleWithHttpInfo(createStaffRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param createStaffRoleDto Payload to create a new role
     */
    public authControllerCreateStaffRole(createStaffRoleDto: CreateStaffRoleDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerCreateStaffRole(createStaffRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUserWithHttpInfo(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerCreateUserWithHttpInfo(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param signupPayloadDto 
     */
    public authControllerCreateUser(signupPayloadDto: SignupPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerCreateUser(signupPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteRoleWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerDeleteRoleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteRole(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerDeleteRole(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteStaffWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserDeleteResponseDto>> {
        const result = this.api.authControllerDeleteStaffWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteStaff(id: string, _options?: Configuration): Promise<UserDeleteResponseDto> {
        const result = this.api.authControllerDeleteStaff(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteStaffRoleWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerDeleteStaffRoleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerDeleteStaffRole(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerDeleteStaffRole(id, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const result = this.api.authControllerForgetPasswordWithHttpInfo(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param forgetPasswordPayloadDto 
     */
    public authControllerForgetPassword(forgetPasswordPayloadDto: ForgetPasswordPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        const result = this.api.authControllerForgetPassword(forgetPasswordPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public authControllerGetAchievementWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<UserAchievementResponseDTO>> {
        const result = this.api.authControllerGetAchievementWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public authControllerGetAchievement(user: string, _options?: Configuration): Promise<UserAchievementResponseDTO> {
        const result = this.api.authControllerGetAchievement(user, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param global 
     * @param search 
     */
    public authControllerGetActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        const result = this.api.authControllerGetActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param global 
     * @param search 
     */
    public authControllerGetActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<ActivityResponseDto> {
        const result = this.api.authControllerGetActivity(page, limit, longitude, latitude, global, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param ownerId 
     * @param limit 
     * @param search 
     */
    public authControllerGetAllStaffWithHttpInfo(page: number, ownerId: string, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerGetAllStaffWithHttpInfo(page, ownerId, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param ownerId 
     * @param limit 
     * @param search 
     */
    public authControllerGetAllStaff(page: number, ownerId: string, limit: number, search?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerGetAllStaff(page, ownerId, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     */
    public authControllerGetAllusersWithHttpInfo(page: number, limit: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerGetAllusersWithHttpInfo(page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     */
    public authControllerGetAllusers(page: number, limit: number, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerGetAllusers(page, limit, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param global 
     * @param search 
     */
    public authControllerGetEventsActivityWithHttpInfo(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        const result = this.api.authControllerGetEventsActivityWithHttpInfo(page, limit, longitude, latitude, global, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param global 
     * @param search 
     */
    public authControllerGetEventsActivity(page: number, limit: number, longitude?: number, latitude?: number, global?: boolean, search?: string, _options?: Configuration): Promise<ActivityResponseDto> {
        const result = this.api.authControllerGetEventsActivity(page, limit, longitude, latitude, global, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     * @param userId 
     * @param search 
     */
    public authControllerGetEventsActivityByTypeWithHttpInfo(page: number, limit: number, type: string, userId?: string, search?: string, _options?: Configuration): Promise<HttpInfo<ActivityResponseDto>> {
        const result = this.api.authControllerGetEventsActivityByTypeWithHttpInfo(page, limit, type, userId, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     * @param userId 
     * @param search 
     */
    public authControllerGetEventsActivityByType(page: number, limit: number, type: string, userId?: string, search?: string, _options?: Configuration): Promise<ActivityResponseDto> {
        const result = this.api.authControllerGetEventsActivityByType(page, limit, type, userId, search, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterestsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<InterestsResponseDto>> {
        const result = this.api.authControllerGetInterestsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetInterests(_options?: Configuration): Promise<InterestsResponseDto> {
        const result = this.api.authControllerGetInterests(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermissionWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerGetPermissionWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerGetPermission(_options?: Configuration): Promise<void> {
        const result = this.api.authControllerGetPermission(_options);
        return result.toPromise();
    }

    /**
     * @param email 
     */
    public authControllerGetStaffWithHttpInfo(email: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerGetStaffWithHttpInfo(email, _options);
        return result.toPromise();
    }

    /**
     * @param email 
     */
    public authControllerGetStaff(email: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerGetStaff(email, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerGetStaffRoleWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerGetStaffRoleWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerGetStaffRole(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerGetStaffRole(id, _options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLoginWithHttpInfo(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerLoginWithHttpInfo(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param loginPayloadDto 
     */
    public authControllerLogin(loginPayloadDto: LoginPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerLogin(loginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param loggedOutPayloadDTO 
     */
    public authControllerSignOutWithHttpInfo(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: Configuration): Promise<HttpInfo<LoggedOutResponse>> {
        const result = this.api.authControllerSignOutWithHttpInfo(loggedOutPayloadDTO, _options);
        return result.toPromise();
    }

    /**
     * @param loggedOutPayloadDTO 
     */
    public authControllerSignOut(loggedOutPayloadDTO: LoggedOutPayloadDTO, _options?: Configuration): Promise<LoggedOutResponse> {
        const result = this.api.authControllerSignOut(loggedOutPayloadDTO, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param allRoles 
     * @param ownerId 
     * @param search 
     */
    public authControllerStaffRolesWithHttpInfo(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerStaffRolesWithHttpInfo(page, limit, allRoles, ownerId, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param allRoles 
     * @param ownerId 
     * @param search 
     */
    public authControllerStaffRoles(page: number, limit: number, allRoles?: boolean, ownerId?: string, search?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerStaffRoles(page, limit, allRoles, ownerId, search, _options);
        return result.toPromise();
    }

    /**
     * @param superAdminLoginPayloadDto 
     */
    public authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerSuperAdminLoginloginWithHttpInfo(superAdminLoginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param superAdminLoginPayloadDto 
     */
    public authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto: SuperAdminLoginPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerSuperAdminLoginlogin(superAdminLoginPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userSyncDTO 
     */
    public authControllerSyncUserInfoWithHttpInfo(userSyncDTO: UserSyncDTO, _options?: Configuration): Promise<HttpInfo<UserSyncResponseDto>> {
        const result = this.api.authControllerSyncUserInfoWithHttpInfo(userSyncDTO, _options);
        return result.toPromise();
    }

    /**
     * @param userSyncDTO 
     */
    public authControllerSyncUserInfo(userSyncDTO: UserSyncDTO, _options?: Configuration): Promise<UserSyncResponseDto> {
        const result = this.api.authControllerSyncUserInfo(userSyncDTO, _options);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto 
     */
    public authControllerUpdateWithHttpInfo(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUpdateWithHttpInfo(storeDetailsPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param storeDetailsPayloadDto 
     */
    public authControllerUpdate(storeDetailsPayloadDto: StoreDetailsPayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUpdate(storeDetailsPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateRoleDto 
     */
    public authControllerUpdateRolesWithHttpInfo(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerUpdateRolesWithHttpInfo(id, updateRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateRoleDto 
     */
    public authControllerUpdateRoles(id: string, updateRoleDto: UpdateRoleDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerUpdateRoles(id, updateRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateStaffDto 
     */
    public authControllerUpdateStaffWithHttpInfo(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerUpdateStaffWithHttpInfo(id, updateStaffDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateStaffDto 
     */
    public authControllerUpdateStaff(id: string, updateStaffDto: UpdateStaffDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerUpdateStaff(id, updateStaffDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateStaffRoleDto 
     */
    public authControllerUpdateStaffRolesWithHttpInfo(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerUpdateStaffRolesWithHttpInfo(id, updateStaffRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param updateStaffRoleDto 
     */
    public authControllerUpdateStaffRoles(id: string, updateStaffRoleDto: UpdateStaffRoleDto, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerUpdateStaffRoles(id, updateStaffRoleDto, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param allRoles 
     * @param search 
     */
    public authControllerUserWithHttpInfo(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.authControllerUserWithHttpInfo(page, limit, allRoles, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param allRoles 
     * @param search 
     */
    public authControllerUser(page: number, limit: number, allRoles?: boolean, search?: string, _options?: Configuration): Promise<void> {
        const result = this.api.authControllerUser(page, limit, allRoles, search, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserById(id: string, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserById(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserFollowersWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<UserFollowerResponseDto>> {
        const result = this.api.authControllerUserFollowersWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public authControllerUserFollowers(id: string, _options?: Configuration): Promise<UserFollowerResponseDto> {
        const result = this.api.authControllerUserFollowers(id, _options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMeWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserMeWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public authControllerUserMe(_options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserMe(_options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserRoleUpdateWithHttpInfo(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userRolePayloadDto 
     */
    public authControllerUserRoleUpdate(userRolePayloadDto: UserRolePayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserRoleUpdate(userRolePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto 
     */
    public authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<HttpInfo<UserResponseDto>> {
        const result = this.api.authControllerUserUpdateWithHttpInfo(userUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userUpdatePayloadDto 
     */
    public authControllerUserUpdate(userUpdatePayloadDto: UserUpdatePayloadDto, _options?: Configuration): Promise<UserResponseDto> {
        const result = this.api.authControllerUserUpdate(userUpdatePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        const result = this.api.authControllerVerifyOtpWithHttpInfo(otpEntityPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param otpEntityPayloadDto 
     */
    public authControllerVerifyOtp(otpEntityPayloadDto: OtpEntityPayloadDto, _options?: Configuration): Promise<ForgetPasswordEntityResponseDto> {
        const result = this.api.authControllerVerifyOtp(otpEntityPayloadDto, _options);
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
    public bookControllerAddBookWithHttpInfo(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        const result = this.api.bookControllerAddBookWithHttpInfo(bookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param bookPayloadDto 
     */
    public bookControllerAddBook(bookPayloadDto: BookPayloadDto, _options?: Configuration): Promise<BookResponseDto> {
        const result = this.api.bookControllerAddBook(bookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param requestBody 
     */
    public bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<BooksStatusResponseDto>> {
        const result = this.api.bookControllerAddMyGoodReadsBooksWithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * @param requestBody 
     */
    public bookControllerAddMyGoodReadsBooks(requestBody: Array<string>, _options?: Configuration): Promise<BooksStatusResponseDto> {
        const result = this.api.bookControllerAddMyGoodReadsBooks(requestBody, _options);
        return result.toPromise();
    }

    /**
     * @param readingGoalPayload 
     */
    public bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload: ReadingGoalPayload, _options?: Configuration): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        const result = this.api.bookControllerAddReadingGoalWithHttpInfo(readingGoalPayload, _options);
        return result.toPromise();
    }

    /**
     * @param readingGoalPayload 
     */
    public bookControllerAddReadingGoal(readingGoalPayload: ReadingGoalPayload, _options?: Configuration): Promise<ReadingGoalResponseDTO> {
        const result = this.api.bookControllerAddReadingGoal(readingGoalPayload, _options);
        return result.toPromise();
    }

    /**
     * @param topBookPayload 
     */
    public bookControllerAddTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: Configuration): Promise<HttpInfo<TopBooksResponseDTO>> {
        const result = this.api.bookControllerAddTopBookWithHttpInfo(topBookPayload, _options);
        return result.toPromise();
    }

    /**
     * @param topBookPayload 
     */
    public bookControllerAddTopBook(topBookPayload: TopBookPayload, _options?: Configuration): Promise<TopBooksResponseDTO> {
        const result = this.api.bookControllerAddTopBook(topBookPayload, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<HttpInfo<UserBookDeleteResponseDto>> {
        const result = this.api.bookControllerDeleteReviewWithHttpInfo(userBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerDeleteReview(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<UserBookDeleteResponseDto> {
        const result = this.api.bookControllerDeleteReview(userBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public bookControllerFindBookByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        const result = this.api.bookControllerFindBookByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public bookControllerFindBookById(id: string, _options?: Configuration): Promise<BookResponseDto> {
        const result = this.api.bookControllerFindBookById(id, _options);
        return result.toPromise();
    }

    /**
     * @param bookByStatusDto 
     */
    public bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto: BookByStatusDto, _options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        const result = this.api.bookControllerFindBookByStatusWithHttpInfo(bookByStatusDto, _options);
        return result.toPromise();
    }

    /**
     * @param bookByStatusDto 
     */
    public bookControllerFindBookByStatus(bookByStatusDto: BookByStatusDto, _options?: Configuration): Promise<BooksReviewResponseDto> {
        const result = this.api.bookControllerFindBookByStatus(bookByStatusDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto 
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        const result = this.api.bookControllerFindBookReviewBaseWithHttpInfo(userBookStatusQueryDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookStatusQueryDto 
     */
    public bookControllerFindBookReviewBase(userBookStatusQueryDto: UserBookStatusQueryDto, _options?: Configuration): Promise<BooksReviewResponseDto> {
        const result = this.api.bookControllerFindBookReviewBase(userBookStatusQueryDto, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     * @param isPrompt 
     * @param user 
     */
    public bookControllerFindBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: Configuration): Promise<HttpInfo<BooksResponseDto>> {
        const result = this.api.bookControllerFindBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     * @param isPrompt 
     * @param user 
     */
    public bookControllerFindBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: Configuration): Promise<BooksResponseDto> {
        const result = this.api.bookControllerFindBooks(rate, page, limit, search, isPrompt, user, _options);
        return result.toPromise();
    }

    /**
     * @param goodReadsBookPayloadDto 
     */
    public bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        const result = this.api.bookControllerFindGoodReadsWithHttpInfo(goodReadsBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param goodReadsBookPayloadDto 
     */
    public bookControllerFindGoodReads(goodReadsBookPayloadDto: GoodReadsBookPayloadDto, _options?: Configuration): Promise<BooksReviewResponseDto> {
        const result = this.api.bookControllerFindGoodReads(goodReadsBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public bookControllerFindReadingGoalWithHttpInfo(user: string, _options?: Configuration): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        const result = this.api.bookControllerFindReadingGoalWithHttpInfo(user, _options);
        return result.toPromise();
    }

    /**
     * @param user 
     */
    public bookControllerFindReadingGoal(user: string, _options?: Configuration): Promise<ReadingGoalResponseDTO> {
        const result = this.api.bookControllerFindReadingGoal(user, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     * @param isPrompt 
     * @param user 
     */
    public bookControllerFindTopBooksWithHttpInfo(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: Configuration): Promise<HttpInfo<BooksReviewResponseDto>> {
        const result = this.api.bookControllerFindTopBooksWithHttpInfo(rate, page, limit, search, isPrompt, user, _options);
        return result.toPromise();
    }

    /**
     * @param rate 
     * @param page 
     * @param limit 
     * @param search 
     * @param isPrompt 
     * @param user 
     */
    public bookControllerFindTopBooks(rate: number, page: number, limit: number, search?: string, isPrompt?: boolean, user?: string, _options?: Configuration): Promise<BooksReviewResponseDto> {
        const result = this.api.bookControllerFindTopBooks(rate, page, limit, search, isPrompt, user, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReview(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<UserBookReviewResponseDto> {
        const result = this.api.bookControllerFindUserBookReview(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<HttpInfo<BookReviewCountResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewCountWithHttpInfo(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param status 
     * @param rate 
     * @param review 
     */
    public bookControllerFindUserBookReviewCount(bookId: string, status?: string, rate?: number, review?: string, _options?: Configuration): Promise<BookReviewCountResponseDto> {
        const result = this.api.bookControllerFindUserBookReviewCount(bookId, status, rate, review, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     * @param userId 
     * @param rate 
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>> {
        const result = this.api.bookControllerFindUserBookReviewsWithHttpInfo(bookId, page, limit, userId, rate, _options);
        return result.toPromise();
    }

    /**
     * @param bookId 
     * @param page 
     * @param limit 
     * @param userId 
     * @param rate 
     */
    public bookControllerFindUserBookReviews(bookId: string, page: number, limit: number, userId?: string, rate?: Array<number>, _options?: Configuration): Promise<UserBooksResponseDto> {
        const result = this.api.bookControllerFindUserBookReviews(bookId, page, limit, userId, rate, _options);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(_options?: Configuration): Promise<HttpInfo<UserBooksResponseDto>> {
        const result = this.api.bookControllerFindUserWhichReadBookWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public bookControllerFindUserWhichReadBook(_options?: Configuration): Promise<UserBooksResponseDto> {
        const result = this.api.bookControllerFindUserWhichReadBook(_options);
        return result.toPromise();
    }

    /**
     * @param topBookPayload 
     */
    public bookControllerRemoveTopBookWithHttpInfo(topBookPayload: TopBookPayload, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.bookControllerRemoveTopBookWithHttpInfo(topBookPayload, _options);
        return result.toPromise();
    }

    /**
     * @param topBookPayload 
     */
    public bookControllerRemoveTopBook(topBookPayload: TopBookPayload, _options?: Configuration): Promise<void> {
        const result = this.api.bookControllerRemoveTopBook(topBookPayload, _options);
        return result.toPromise();
    }

    /**
     * @param bookPositionDto 
     */
    public bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto: BookPositionDto, _options?: Configuration): Promise<HttpInfo<BookResponseDto>> {
        const result = this.api.bookControllerUpdateBookPositionWithHttpInfo(bookPositionDto, _options);
        return result.toPromise();
    }

    /**
     * @param bookPositionDto 
     */
    public bookControllerUpdateBookPosition(bookPositionDto: BookPositionDto, _options?: Configuration): Promise<BookResponseDto> {
        const result = this.api.bookControllerUpdateBookPosition(bookPositionDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<HttpInfo<UserBookReviewResponseDto>> {
        const result = this.api.bookControllerUserBookMarkWithHttpInfo(userBookPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param userBookPayloadDto 
     */
    public bookControllerUserBookMark(userBookPayloadDto: UserBookPayloadDto, _options?: Configuration): Promise<UserBookReviewResponseDto> {
        const result = this.api.bookControllerUserBookMark(userBookPayloadDto, _options);
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
    public contactControllerSyncContactsWithHttpInfo(contactDetails: Array<ContactDetails>, _options?: Configuration): Promise<HttpInfo<ContactDetailsDto>> {
        const result = this.api.contactControllerSyncContactsWithHttpInfo(contactDetails, _options);
        return result.toPromise();
    }

    /**
     * @param contactDetails 
     */
    public contactControllerSyncContacts(contactDetails: Array<ContactDetails>, _options?: Configuration): Promise<ContactDetailsDto> {
        const result = this.api.contactControllerSyncContacts(contactDetails, _options);
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
    public appControllerGetHelloWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.appControllerGetHelloWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public appControllerGetHello(_options?: Configuration): Promise<void> {
        const result = this.api.appControllerGetHello(_options);
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
    public deviceControllerAddDeviceWithHttpInfo(addDevicePayload: AddDevicePayload, _options?: Configuration): Promise<HttpInfo<DeviceAddResponse>> {
        const result = this.api.deviceControllerAddDeviceWithHttpInfo(addDevicePayload, _options);
        return result.toPromise();
    }

    /**
     * @param addDevicePayload 
     */
    public deviceControllerAddDevice(addDevicePayload: AddDevicePayload, _options?: Configuration): Promise<DeviceAddResponse> {
        const result = this.api.deviceControllerAddDevice(addDevicePayload, _options);
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
    public eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Promise<HttpInfo<CreateBookMarkEventResponseDto>> {
        const result = this.api.eventControllerBookMarkEventWithHttpInfo(bookMarkEventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param bookMarkEventPayloadDto 
     */
    public eventControllerBookMarkEvent(bookMarkEventPayloadDto: BookMarkEventPayloadDto, _options?: Configuration): Promise<CreateBookMarkEventResponseDto> {
        const result = this.api.eventControllerBookMarkEvent(bookMarkEventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param userId 
     */
    public eventControllerBookMarkEventListWithHttpInfo(page: number, limit?: number, userId?: string, _options?: Configuration): Promise<HttpInfo<BookMarkEventListResponseDto>> {
        const result = this.api.eventControllerBookMarkEventListWithHttpInfo(page, limit, userId, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param userId 
     */
    public eventControllerBookMarkEventList(page: number, limit?: number, userId?: string, _options?: Configuration): Promise<BookMarkEventListResponseDto> {
        const result = this.api.eventControllerBookMarkEventList(page, limit, userId, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerCreateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerCreateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerCreateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerCreateEvent(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param myEventsPayloadDTO 
     */
    public eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: Configuration): Promise<HttpInfo<MyEventResponseDto>> {
        const result = this.api.eventControllerCreateMyEventsWithHttpInfo(myEventsPayloadDTO, _options);
        return result.toPromise();
    }

    /**
     * @param myEventsPayloadDTO 
     */
    public eventControllerCreateMyEvents(myEventsPayloadDTO: MyEventsPayloadDTO, _options?: Configuration): Promise<MyEventResponseDto> {
        const result = this.api.eventControllerCreateMyEvents(myEventsPayloadDTO, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(eventId: string, _options?: Configuration): Promise<HttpInfo<DeleteBookMarkEventResponseDto>> {
        const result = this.api.eventControllerDeleteBookMarkEventWithHttpInfo(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerDeleteBookMarkEvent(eventId: string, _options?: Configuration): Promise<DeleteBookMarkEventResponseDto> {
        const result = this.api.eventControllerDeleteBookMarkEvent(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param withBookedEvent 
     */
    public eventControllerDeleteEventWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<HttpInfo<EventDeleteResponseDto>> {
        const result = this.api.eventControllerDeleteEventWithHttpInfo(id, withBookedEvent, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param withBookedEvent 
     */
    public eventControllerDeleteEvent(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<EventDeleteResponseDto> {
        const result = this.api.eventControllerDeleteEvent(id, withBookedEvent, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(userId: string, _options?: Configuration): Promise<HttpInfo<EventCustomerResponseDto>> {
        const result = this.api.eventControllerFindCustomerOfEventsWithHttpInfo(userId, _options);
        return result.toPromise();
    }

    /**
     * @param userId 
     */
    public eventControllerFindCustomerOfEvents(userId: string, _options?: Configuration): Promise<EventCustomerResponseDto> {
        const result = this.api.eventControllerFindCustomerOfEvents(userId, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param withBookedEvent 
     */
    public eventControllerFindEventByIdWithHttpInfo(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerFindEventByIdWithHttpInfo(id, withBookedEvent, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param withBookedEvent 
     */
    public eventControllerFindEventById(id: string, withBookedEvent?: boolean, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerFindEventById(id, withBookedEvent, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param userId 
     * @param search 
     */
    public eventControllerFindEventsWithHttpInfo(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: Configuration): Promise<HttpInfo<EventsResponseDto>> {
        const result = this.api.eventControllerFindEventsWithHttpInfo(page, limit, longitude, latitude, userId, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param longitude 
     * @param latitude 
     * @param userId 
     * @param search 
     */
    public eventControllerFindEvents(page: number, limit?: number, longitude?: number, latitude?: number, userId?: string, search?: string, _options?: Configuration): Promise<EventsResponseDto> {
        const result = this.api.eventControllerFindEvents(page, limit, longitude, latitude, userId, search, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerFindMyEventWithHttpInfo(eventId: string, _options?: Configuration): Promise<HttpInfo<MyEventResponseDto>> {
        const result = this.api.eventControllerFindMyEventWithHttpInfo(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerFindMyEvent(eventId: string, _options?: Configuration): Promise<MyEventResponseDto> {
        const result = this.api.eventControllerFindMyEvent(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<HttpInfo<MyEventsResponseDto>> {
        const result = this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(page, limit, type, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param type 
     */
    public eventControllerFindMyUpcomingEvents(page: number, limit: number, type: 'UPCOMING' | 'VISITED', _options?: Configuration): Promise<MyEventsResponseDto> {
        const result = this.api.eventControllerFindMyUpcomingEvents(page, limit, type, _options);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto 
     */
    public eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<HttpInfo<LocationPlacesResponseDto>> {
        const result = this.api.eventControllerFindSearchPlacesWithHttpInfo(locationPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param locationPayloadDto 
     */
    public eventControllerFindSearchPlaces(locationPayloadDto: LocationPayloadDto, _options?: Configuration): Promise<LocationPlacesResponseDto> {
        const result = this.api.eventControllerFindSearchPlaces(locationPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(eventId: string, _options?: Configuration): Promise<HttpInfo<BookMarkEventStatusResponseDto>> {
        const result = this.api.eventControllerGetBookMarkEventStatusWithHttpInfo(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param eventId 
     */
    public eventControllerGetBookMarkEventStatus(eventId: string, _options?: Configuration): Promise<BookMarkEventStatusResponseDto> {
        const result = this.api.eventControllerGetBookMarkEventStatus(eventId, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEventWithHttpInfo(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<HttpInfo<EventResponseDto>> {
        const result = this.api.eventControllerUpdateEventWithHttpInfo(eventPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param eventPayloadDto 
     */
    public eventControllerUpdateEvent(eventPayloadDto: EventPayloadDto, _options?: Configuration): Promise<EventResponseDto> {
        const result = this.api.eventControllerUpdateEvent(eventPayloadDto, _options);
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
    public followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerAcceptWithHttpInfo(acceptFollowerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param acceptFollowerPayloadDto 
     */
    public followerControllerAccept(acceptFollowerPayloadDto: AcceptFollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerAccept(acceptFollowerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param myFriendPayloadDto 
     */
    public followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        const result = this.api.followerControllerFindMyFriendsWithHttpInfo(myFriendPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param myFriendPayloadDto 
     */
    public followerControllerFindMyFriends(myFriendPayloadDto: MyFriendPayloadDto, _options?: Configuration): Promise<MyAllFriendsResponseDto> {
        const result = this.api.followerControllerFindMyFriends(myFriendPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerFollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerFollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerFollow(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     */
    public followerControllerFriendRequestListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<FriendRequestItemEntityDto>> {
        const result = this.api.followerControllerFriendRequestListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public followerControllerFriendRequestList(_options?: Configuration): Promise<FriendRequestItemEntityDto> {
        const result = this.api.followerControllerFriendRequestList(_options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerIsFriendWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerIsFriendWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerIsFriend(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerIsFriend(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnfollowWithHttpInfo(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<HttpInfo<FollowerResponseDto>> {
        const result = this.api.followerControllerUnfollowWithHttpInfo(followerPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param followerPayloadDto 
     */
    public followerControllerUnfollow(followerPayloadDto: FollowerPayloadDto, _options?: Configuration): Promise<FollowerResponseDto> {
        const result = this.api.followerControllerUnfollow(followerPayloadDto, _options);
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
     * @param search 
     */
    public friendControllerFindFriendsWithHttpInfo(page: number, limit: number, search?: string, _options?: Configuration): Promise<HttpInfo<FriendsResponseDto>> {
        const result = this.api.friendControllerFindFriendsWithHttpInfo(page, limit, search, _options);
        return result.toPromise();
    }

    /**
     * @param page 
     * @param limit 
     * @param search 
     */
    public friendControllerFindFriends(page: number, limit: number, search?: string, _options?: Configuration): Promise<FriendsResponseDto> {
        const result = this.api.friendControllerFindFriends(page, limit, search, _options);
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
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id: string, body: any, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(id, body, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param body 
     */
    public nielsenBooksControllerGetNielsenBookById(id: string, body: any, _options?: Configuration): Promise<void> {
        const result = this.api.nielsenBooksControllerGetNielsenBookById(id, body, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * @param id 
     */
    public nielsenBooksControllerGetNielsenBookImageById(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.nielsenBooksControllerGetNielsenBookImageById(id, _options);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public nielsenBooksControllerGetNielsenBooks(_options?: Configuration): Promise<void> {
        const result = this.api.nielsenBooksControllerGetNielsenBooks(_options);
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
    public paymentControllerConnectAccountWithHttpInfo(_options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>> {
        const result = this.api.paymentControllerConnectAccountWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerConnectAccount(_options?: Configuration): Promise<BusinessConnectedAccount> {
        const result = this.api.paymentControllerConnectAccount(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options?: Configuration): Promise<HttpInfo<VerificationLinkResponseDTO>> {
        const result = this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerCreateAccountVerificationLink(_options?: Configuration): Promise<VerificationLinkResponseDTO> {
        const result = this.api.paymentControllerCreateAccountVerificationLink(_options);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto 
     */
    public paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<PaymentResponseDto>> {
        const result = this.api.paymentControllerCreatePaymentWithHttpInfo(stripePaymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePaymentPayloadDto 
     */
    public paymentControllerCreatePayment(stripePaymentPayloadDto: StripePaymentPayloadDto, _options?: Configuration): Promise<PaymentResponseDto> {
        const result = this.api.paymentControllerCreatePayment(stripePaymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto 
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<HttpInfo<StripeResponseDto>> {
        const result = this.api.paymentControllerCreatePaymentIntentWithHttpInfo(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param stripePayloadDto 
     */
    public paymentControllerCreatePaymentIntent(stripePayloadDto: StripePayloadDto, _options?: Configuration): Promise<StripeResponseDto> {
        const result = this.api.paymentControllerCreatePaymentIntent(stripePayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto 
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.paymentControllerDeleteCardDetailsWithHttpInfo(paymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     * @param paymentPayloadDto 
     */
    public paymentControllerDeleteCardDetails(paymentPayloadDto: PaymentPayloadDto, _options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.paymentControllerDeleteCardDetails(paymentPayloadDto, _options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardListWithHttpInfo(_options?: Configuration): Promise<HttpInfo<CardListResponseDto>> {
        const result = this.api.paymentControllerGetCardListWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerGetCardList(_options?: Configuration): Promise<CardListResponseDto> {
        const result = this.api.paymentControllerGetCardList(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(_options?: Configuration): Promise<HttpInfo<BusinessConnectedAccount>> {
        const result = this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     */
    public paymentControllerRetrieveConnectedAccount(_options?: Configuration): Promise<BusinessConnectedAccount> {
        const result = this.api.paymentControllerRetrieveConnectedAccount(_options);
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
    public storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto: FileUploadDto, _options?: Configuration): Promise<HttpInfo<StorageResponseDto>> {
        const result = this.api.storageControllerGetPreSignedURLWithHttpInfo(fileUploadDto, _options);
        return result.toPromise();
    }

    /**
     * @param fileUploadDto 
     */
    public storageControllerGetPreSignedURL(fileUploadDto: FileUploadDto, _options?: Configuration): Promise<StorageResponseDto> {
        const result = this.api.storageControllerGetPreSignedURL(fileUploadDto, _options);
        return result.toPromise();
    }


}



