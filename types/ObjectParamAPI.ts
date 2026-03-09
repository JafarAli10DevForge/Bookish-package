import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

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

import { ObservableAnalyticsApi } from "./ObservableAPI";
import { AnalyticsApiRequestFactory, AnalyticsApiResponseProcessor} from "../apis/AnalyticsApi";

export interface AnalyticsApiAnalyticsControllerGetAnalyticsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AnalyticsApianalyticsControllerGetAnalytics
     */
    userId: string
}

export class ObjectAnalyticsApi {
    private api: ObservableAnalyticsApi

    public constructor(configuration: Configuration, requestFactory?: AnalyticsApiRequestFactory, responseProcessor?: AnalyticsApiResponseProcessor) {
        this.api = new ObservableAnalyticsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public analyticsControllerGetAnalyticsWithHttpInfo(param: AnalyticsApiAnalyticsControllerGetAnalyticsRequest, options?: ConfigurationOptions): Promise<HttpInfo<AnalyticsResponseDTO>> {
        return this.api.analyticsControllerGetAnalyticsWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public analyticsControllerGetAnalytics(param: AnalyticsApiAnalyticsControllerGetAnalyticsRequest, options?: ConfigurationOptions): Promise<AnalyticsResponseDTO> {
        return this.api.analyticsControllerGetAnalytics(param.userId,  options).toPromise();
    }

}

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiAuthControllerAccountDeletionRequest {
}

export interface AuthApiAuthControllerAddFeedbackRequest {
    /**
     * 
     * @type FeedbackPayloadDto
     * @memberof AuthApiauthControllerAddFeedback
     */
    feedbackPayloadDto: FeedbackPayloadDto
}

export interface AuthApiAuthControllerAppfeepercentageUpdateRequest {
    /**
     * 
     * @type AppfeepercentageUpdatePayloadDto
     * @memberof AuthApiauthControllerAppfeepercentageUpdate
     */
    appfeepercentageUpdatePayloadDto: AppfeepercentageUpdatePayloadDto
}

export interface AuthApiAuthControllerChangePasswordRequest {
    /**
     * 
     * @type ChangePayloadDto
     * @memberof AuthApiauthControllerChangePassword
     */
    changePayloadDto: ChangePayloadDto
}

export interface AuthApiAuthControllerCreateBusinessUserRequest {
    /**
     * 
     * @type SignupPayloadDto
     * @memberof AuthApiauthControllerCreateBusinessUser
     */
    signupPayloadDto: SignupPayloadDto
}

export interface AuthApiAuthControllerCreateRolesRequest {
    /**
     * Payload to create a new role
     * @type CreateRoleDto
     * @memberof AuthApiauthControllerCreateRoles
     */
    createRoleDto: CreateRoleDto
}

export interface AuthApiAuthControllerCreateStaffRequest {
    /**
     * 
     * @type CreateStaffDto
     * @memberof AuthApiauthControllerCreateStaff
     */
    createStaffDto: CreateStaffDto
}

export interface AuthApiAuthControllerCreateStaffRoleRequest {
    /**
     * Payload to create a new role
     * @type CreateStaffRoleDto
     * @memberof AuthApiauthControllerCreateStaffRole
     */
    createStaffRoleDto: CreateStaffRoleDto
}

export interface AuthApiAuthControllerCreateUserRequest {
    /**
     * 
     * @type SignupPayloadDto
     * @memberof AuthApiauthControllerCreateUser
     */
    signupPayloadDto: SignupPayloadDto
}

export interface AuthApiAuthControllerDeleteRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerDeleteRole
     */
    id: string
}

export interface AuthApiAuthControllerDeleteStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerDeleteStaff
     */
    id: string
}

export interface AuthApiAuthControllerDeleteStaffRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerDeleteStaffRole
     */
    id: string
}

export interface AuthApiAuthControllerForgetPasswordRequest {
    /**
     * 
     * @type ForgetPasswordPayloadDto
     * @memberof AuthApiauthControllerForgetPassword
     */
    forgetPasswordPayloadDto: ForgetPasswordPayloadDto
}

export interface AuthApiAuthControllerGetAchievementRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetAchievement
     */
    user: string
}

export interface AuthApiAuthControllerGetActivityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    longitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetActivity
     */
    latitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerGetActivity
     */
    global?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetActivity
     */
    search?: string
}

export interface AuthApiAuthControllerGetAllStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllStaff
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetAllStaff
     */
    ownerId: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllStaff
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetAllStaff
     */
    search?: string
}

export interface AuthApiAuthControllerGetAllusersRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllusers
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetAllusers
     */
    limit: number
}

export interface AuthApiAuthControllerGetEventsActivityRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    longitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    latitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    global?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetEventsActivity
     */
    search?: string
}

export interface AuthApiAuthControllerGetEventsActivityByTypeRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivityByType
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerGetEventsActivityByType
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetEventsActivityByType
     */
    type: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetEventsActivityByType
     */
    userId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetEventsActivityByType
     */
    search?: string
}

export interface AuthApiAuthControllerGetInterestsRequest {
}

export interface AuthApiAuthControllerGetPermissionRequest {
}

export interface AuthApiAuthControllerGetStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetStaff
     */
    email: string
}

export interface AuthApiAuthControllerGetStaffRoleRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerGetStaffRole
     */
    id: string
}

export interface AuthApiAuthControllerLoginRequest {
    /**
     * 
     * @type LoginPayloadDto
     * @memberof AuthApiauthControllerLogin
     */
    loginPayloadDto: LoginPayloadDto
}

export interface AuthApiAuthControllerSignOutRequest {
    /**
     * 
     * @type LoggedOutPayloadDTO
     * @memberof AuthApiauthControllerSignOut
     */
    loggedOutPayloadDTO: LoggedOutPayloadDTO
}

export interface AuthApiAuthControllerStaffRolesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerStaffRoles
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerStaffRoles
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerStaffRoles
     */
    allRoles?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerStaffRoles
     */
    ownerId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerStaffRoles
     */
    search?: string
}

export interface AuthApiAuthControllerSuperAdminLoginloginRequest {
    /**
     * 
     * @type SuperAdminLoginPayloadDto
     * @memberof AuthApiauthControllerSuperAdminLoginlogin
     */
    superAdminLoginPayloadDto: SuperAdminLoginPayloadDto
}

export interface AuthApiAuthControllerSyncUserInfoRequest {
    /**
     * 
     * @type UserSyncDTO
     * @memberof AuthApiauthControllerSyncUserInfo
     */
    userSyncDTO: UserSyncDTO
}

export interface AuthApiAuthControllerUpdateRequest {
    /**
     * 
     * @type StoreDetailsPayloadDto
     * @memberof AuthApiauthControllerUpdate
     */
    storeDetailsPayloadDto: StoreDetailsPayloadDto
}

export interface AuthApiAuthControllerUpdateRolesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUpdateRoles
     */
    id: string
    /**
     * 
     * @type UpdateRoleDto
     * @memberof AuthApiauthControllerUpdateRoles
     */
    updateRoleDto: UpdateRoleDto
}

export interface AuthApiAuthControllerUpdateStaffRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUpdateStaff
     */
    id: string
    /**
     * 
     * @type UpdateStaffDto
     * @memberof AuthApiauthControllerUpdateStaff
     */
    updateStaffDto: UpdateStaffDto
}

export interface AuthApiAuthControllerUpdateStaffRolesRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUpdateStaffRoles
     */
    id: string
    /**
     * 
     * @type UpdateStaffRoleDto
     * @memberof AuthApiauthControllerUpdateStaffRoles
     */
    updateStaffRoleDto: UpdateStaffRoleDto
}

export interface AuthApiAuthControllerUserRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerUser
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof AuthApiauthControllerUser
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof AuthApiauthControllerUser
     */
    allRoles?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUser
     */
    search?: string
}

export interface AuthApiAuthControllerUserByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUserById
     */
    id: string
}

export interface AuthApiAuthControllerUserFollowersRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof AuthApiauthControllerUserFollowers
     */
    id: string
}

export interface AuthApiAuthControllerUserMeRequest {
}

export interface AuthApiAuthControllerUserRoleUpdateRequest {
    /**
     * 
     * @type UserRolePayloadDto
     * @memberof AuthApiauthControllerUserRoleUpdate
     */
    userRolePayloadDto: UserRolePayloadDto
}

export interface AuthApiAuthControllerUserUpdateRequest {
    /**
     * 
     * @type UserUpdatePayloadDto
     * @memberof AuthApiauthControllerUserUpdate
     */
    userUpdatePayloadDto: UserUpdatePayloadDto
}

export interface AuthApiAuthControllerVerifyOtpRequest {
    /**
     * 
     * @type OtpEntityPayloadDto
     * @memberof AuthApiauthControllerVerifyOtp
     */
    otpEntityPayloadDto: OtpEntityPayloadDto
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public authControllerAccountDeletionWithHttpInfo(param: AuthApiAuthControllerAccountDeletionRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        return this.api.authControllerAccountDeletionWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAccountDeletion(param: AuthApiAuthControllerAccountDeletionRequest = {}, options?: ConfigurationOptions): Promise<UserDeleteResponseDto> {
        return this.api.authControllerAccountDeletion( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAddFeedbackWithHttpInfo(param: AuthApiAuthControllerAddFeedbackRequest, options?: ConfigurationOptions): Promise<HttpInfo<FeedbackCreateResponseDto>> {
        return this.api.authControllerAddFeedbackWithHttpInfo(param.feedbackPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAddFeedback(param: AuthApiAuthControllerAddFeedbackRequest, options?: ConfigurationOptions): Promise<FeedbackCreateResponseDto> {
        return this.api.authControllerAddFeedback(param.feedbackPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAppfeepercentageUpdateWithHttpInfo(param: AuthApiAuthControllerAppfeepercentageUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<AppfeepercentageResponseDto>> {
        return this.api.authControllerAppfeepercentageUpdateWithHttpInfo(param.appfeepercentageUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerAppfeepercentageUpdate(param: AuthApiAuthControllerAppfeepercentageUpdateRequest, options?: ConfigurationOptions): Promise<AppfeepercentageResponseDto> {
        return this.api.authControllerAppfeepercentageUpdate(param.appfeepercentageUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerChangePasswordWithHttpInfo(param: AuthApiAuthControllerChangePasswordRequest, options?: ConfigurationOptions): Promise<HttpInfo<PasswordChangeResponseDto>> {
        return this.api.authControllerChangePasswordWithHttpInfo(param.changePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerChangePassword(param: AuthApiAuthControllerChangePasswordRequest, options?: ConfigurationOptions): Promise<PasswordChangeResponseDto> {
        return this.api.authControllerChangePassword(param.changePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateBusinessUserWithHttpInfo(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerCreateBusinessUserWithHttpInfo(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateBusinessUser(param: AuthApiAuthControllerCreateBusinessUserRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerCreateBusinessUser(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateRolesWithHttpInfo(param: AuthApiAuthControllerCreateRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerCreateRolesWithHttpInfo(param.createRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateRoles(param: AuthApiAuthControllerCreateRolesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerCreateRoles(param.createRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaffWithHttpInfo(param: AuthApiAuthControllerCreateStaffRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateStaffDto>> {
        return this.api.authControllerCreateStaffWithHttpInfo(param.createStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaff(param: AuthApiAuthControllerCreateStaffRequest, options?: ConfigurationOptions): Promise<CreateStaffDto> {
        return this.api.authControllerCreateStaff(param.createStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaffRoleWithHttpInfo(param: AuthApiAuthControllerCreateStaffRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerCreateStaffRoleWithHttpInfo(param.createStaffRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateStaffRole(param: AuthApiAuthControllerCreateStaffRoleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerCreateStaffRole(param.createStaffRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateUserWithHttpInfo(param: AuthApiAuthControllerCreateUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerCreateUserWithHttpInfo(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerCreateUser(param: AuthApiAuthControllerCreateUserRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerCreateUser(param.signupPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteRoleWithHttpInfo(param: AuthApiAuthControllerDeleteRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerDeleteRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteRole(param: AuthApiAuthControllerDeleteRoleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerDeleteRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaffWithHttpInfo(param: AuthApiAuthControllerDeleteStaffRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserDeleteResponseDto>> {
        return this.api.authControllerDeleteStaffWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaff(param: AuthApiAuthControllerDeleteStaffRequest, options?: ConfigurationOptions): Promise<UserDeleteResponseDto> {
        return this.api.authControllerDeleteStaff(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaffRoleWithHttpInfo(param: AuthApiAuthControllerDeleteStaffRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerDeleteStaffRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerDeleteStaffRole(param: AuthApiAuthControllerDeleteStaffRoleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerDeleteStaffRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgetPasswordWithHttpInfo(param: AuthApiAuthControllerForgetPasswordRequest, options?: ConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        return this.api.authControllerForgetPasswordWithHttpInfo(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerForgetPassword(param: AuthApiAuthControllerForgetPasswordRequest, options?: ConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        return this.api.authControllerForgetPassword(param.forgetPasswordPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAchievementWithHttpInfo(param: AuthApiAuthControllerGetAchievementRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserAchievementResponseDTO>> {
        return this.api.authControllerGetAchievementWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAchievement(param: AuthApiAuthControllerGetAchievementRequest, options?: ConfigurationOptions): Promise<UserAchievementResponseDTO> {
        return this.api.authControllerGetAchievement(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetActivityWithHttpInfo(param: AuthApiAuthControllerGetActivityRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        return this.api.authControllerGetActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetActivity(param: AuthApiAuthControllerGetActivityRequest, options?: ConfigurationOptions): Promise<ActivityResponseDto> {
        return this.api.authControllerGetActivity(param.page, param.limit, param.longitude, param.latitude, param.global, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllStaffWithHttpInfo(param: AuthApiAuthControllerGetAllStaffRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerGetAllStaffWithHttpInfo(param.page, param.ownerId, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllStaff(param: AuthApiAuthControllerGetAllStaffRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerGetAllStaff(param.page, param.ownerId, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllusersWithHttpInfo(param: AuthApiAuthControllerGetAllusersRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerGetAllusersWithHttpInfo(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetAllusers(param: AuthApiAuthControllerGetAllusersRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerGetAllusers(param.page, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivityWithHttpInfo(param: AuthApiAuthControllerGetEventsActivityRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        return this.api.authControllerGetEventsActivityWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.global, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivity(param: AuthApiAuthControllerGetEventsActivityRequest, options?: ConfigurationOptions): Promise<ActivityResponseDto> {
        return this.api.authControllerGetEventsActivity(param.page, param.limit, param.longitude, param.latitude, param.global, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivityByTypeWithHttpInfo(param: AuthApiAuthControllerGetEventsActivityByTypeRequest, options?: ConfigurationOptions): Promise<HttpInfo<ActivityResponseDto>> {
        return this.api.authControllerGetEventsActivityByTypeWithHttpInfo(param.page, param.limit, param.type, param.userId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetEventsActivityByType(param: AuthApiAuthControllerGetEventsActivityByTypeRequest, options?: ConfigurationOptions): Promise<ActivityResponseDto> {
        return this.api.authControllerGetEventsActivityByType(param.page, param.limit, param.type, param.userId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetInterestsWithHttpInfo(param: AuthApiAuthControllerGetInterestsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<InterestsResponseDto>> {
        return this.api.authControllerGetInterestsWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetInterests(param: AuthApiAuthControllerGetInterestsRequest = {}, options?: ConfigurationOptions): Promise<InterestsResponseDto> {
        return this.api.authControllerGetInterests( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetPermissionWithHttpInfo(param: AuthApiAuthControllerGetPermissionRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerGetPermissionWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetPermission(param: AuthApiAuthControllerGetPermissionRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerGetPermission( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetStaffWithHttpInfo(param: AuthApiAuthControllerGetStaffRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerGetStaffWithHttpInfo(param.email,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetStaff(param: AuthApiAuthControllerGetStaffRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerGetStaff(param.email,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetStaffRoleWithHttpInfo(param: AuthApiAuthControllerGetStaffRoleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerGetStaffRoleWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerGetStaffRole(param: AuthApiAuthControllerGetStaffRoleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerGetStaffRole(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLoginWithHttpInfo(param: AuthApiAuthControllerLoginRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerLoginWithHttpInfo(param.loginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerLogin(param: AuthApiAuthControllerLoginRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerLogin(param.loginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSignOutWithHttpInfo(param: AuthApiAuthControllerSignOutRequest, options?: ConfigurationOptions): Promise<HttpInfo<LoggedOutResponse>> {
        return this.api.authControllerSignOutWithHttpInfo(param.loggedOutPayloadDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSignOut(param: AuthApiAuthControllerSignOutRequest, options?: ConfigurationOptions): Promise<LoggedOutResponse> {
        return this.api.authControllerSignOut(param.loggedOutPayloadDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerStaffRolesWithHttpInfo(param: AuthApiAuthControllerStaffRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerStaffRolesWithHttpInfo(param.page, param.limit, param.allRoles, param.ownerId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerStaffRoles(param: AuthApiAuthControllerStaffRolesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerStaffRoles(param.page, param.limit, param.allRoles, param.ownerId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSuperAdminLoginloginWithHttpInfo(param: AuthApiAuthControllerSuperAdminLoginloginRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerSuperAdminLoginloginWithHttpInfo(param.superAdminLoginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSuperAdminLoginlogin(param: AuthApiAuthControllerSuperAdminLoginloginRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerSuperAdminLoginlogin(param.superAdminLoginPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSyncUserInfoWithHttpInfo(param: AuthApiAuthControllerSyncUserInfoRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserSyncResponseDto>> {
        return this.api.authControllerSyncUserInfoWithHttpInfo(param.userSyncDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerSyncUserInfo(param: AuthApiAuthControllerSyncUserInfoRequest, options?: ConfigurationOptions): Promise<UserSyncResponseDto> {
        return this.api.authControllerSyncUserInfo(param.userSyncDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateWithHttpInfo(param: AuthApiAuthControllerUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUpdateWithHttpInfo(param.storeDetailsPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdate(param: AuthApiAuthControllerUpdateRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerUpdate(param.storeDetailsPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateRolesWithHttpInfo(param: AuthApiAuthControllerUpdateRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerUpdateRolesWithHttpInfo(param.id, param.updateRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateRoles(param: AuthApiAuthControllerUpdateRolesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerUpdateRoles(param.id, param.updateRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaffWithHttpInfo(param: AuthApiAuthControllerUpdateStaffRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerUpdateStaffWithHttpInfo(param.id, param.updateStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaff(param: AuthApiAuthControllerUpdateStaffRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerUpdateStaff(param.id, param.updateStaffDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaffRolesWithHttpInfo(param: AuthApiAuthControllerUpdateStaffRolesRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerUpdateStaffRolesWithHttpInfo(param.id, param.updateStaffRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUpdateStaffRoles(param: AuthApiAuthControllerUpdateStaffRolesRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerUpdateStaffRoles(param.id, param.updateStaffRoleDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserWithHttpInfo(param: AuthApiAuthControllerUserRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.authControllerUserWithHttpInfo(param.page, param.limit, param.allRoles, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUser(param: AuthApiAuthControllerUserRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.authControllerUser(param.page, param.limit, param.allRoles, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserByIdWithHttpInfo(param: AuthApiAuthControllerUserByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserById(param: AuthApiAuthControllerUserByIdRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerUserById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserFollowersWithHttpInfo(param: AuthApiAuthControllerUserFollowersRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserFollowerResponseDto>> {
        return this.api.authControllerUserFollowersWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserFollowers(param: AuthApiAuthControllerUserFollowersRequest, options?: ConfigurationOptions): Promise<UserFollowerResponseDto> {
        return this.api.authControllerUserFollowers(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserMeWithHttpInfo(param: AuthApiAuthControllerUserMeRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserMeWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserMe(param: AuthApiAuthControllerUserMeRequest = {}, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerUserMe( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserRoleUpdateWithHttpInfo(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserRoleUpdateWithHttpInfo(param.userRolePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserRoleUpdate(param: AuthApiAuthControllerUserRoleUpdateRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerUserRoleUpdate(param.userRolePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserUpdateWithHttpInfo(param: AuthApiAuthControllerUserUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserResponseDto>> {
        return this.api.authControllerUserUpdateWithHttpInfo(param.userUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerUserUpdate(param: AuthApiAuthControllerUserUpdateRequest, options?: ConfigurationOptions): Promise<UserResponseDto> {
        return this.api.authControllerUserUpdate(param.userUpdatePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtpWithHttpInfo(param: AuthApiAuthControllerVerifyOtpRequest, options?: ConfigurationOptions): Promise<HttpInfo<ForgetPasswordEntityResponseDto>> {
        return this.api.authControllerVerifyOtpWithHttpInfo(param.otpEntityPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public authControllerVerifyOtp(param: AuthApiAuthControllerVerifyOtpRequest, options?: ConfigurationOptions): Promise<ForgetPasswordEntityResponseDto> {
        return this.api.authControllerVerifyOtp(param.otpEntityPayloadDto,  options).toPromise();
    }

}

import { ObservableBooksApi } from "./ObservableAPI";
import { BooksApiRequestFactory, BooksApiResponseProcessor} from "../apis/BooksApi";

export interface BooksApiBookControllerAddBookRequest {
    /**
     * 
     * @type BookPayloadDto
     * @memberof BooksApibookControllerAddBook
     */
    bookPayloadDto: BookPayloadDto
}

export interface BooksApiBookControllerAddMyGoodReadsBooksRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BooksApibookControllerAddMyGoodReadsBooks
     */
    requestBody: Array<string>
}

export interface BooksApiBookControllerAddReadingGoalRequest {
    /**
     * 
     * @type ReadingGoalPayload
     * @memberof BooksApibookControllerAddReadingGoal
     */
    readingGoalPayload: ReadingGoalPayload
}

export interface BooksApiBookControllerAddTopBookRequest {
    /**
     * 
     * @type TopBookPayload
     * @memberof BooksApibookControllerAddTopBook
     */
    topBookPayload: TopBookPayload
}

export interface BooksApiBookControllerDeleteReviewRequest {
    /**
     * 
     * @type UserBookPayloadDto
     * @memberof BooksApibookControllerDeleteReview
     */
    userBookPayloadDto: UserBookPayloadDto
}

export interface BooksApiBookControllerFindBookByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBookById
     */
    id: string
}

export interface BooksApiBookControllerFindBookByStatusRequest {
    /**
     * 
     * @type BookByStatusDto
     * @memberof BooksApibookControllerFindBookByStatus
     */
    bookByStatusDto: BookByStatusDto
}

export interface BooksApiBookControllerFindBookReviewBaseRequest {
    /**
     * 
     * @type UserBookStatusQueryDto
     * @memberof BooksApibookControllerFindBookReviewBase
     */
    userBookStatusQueryDto: UserBookStatusQueryDto
}

export interface BooksApiBookControllerFindBooksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    rate: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindBooks
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBooks
     */
    search?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BooksApibookControllerFindBooks
     */
    isPrompt?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindBooks
     */
    user?: string
}

export interface BooksApiBookControllerFindGoodReadsRequest {
    /**
     * 
     * @type GoodReadsBookPayloadDto
     * @memberof BooksApibookControllerFindGoodReads
     */
    goodReadsBookPayloadDto: GoodReadsBookPayloadDto
}

export interface BooksApiBookControllerFindReadingGoalRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindReadingGoal
     */
    user: string
}

export interface BooksApiBookControllerFindTopBooksRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindTopBooks
     */
    rate: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindTopBooks
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindTopBooks
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindTopBooks
     */
    search?: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof BooksApibookControllerFindTopBooks
     */
    isPrompt?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindTopBooks
     */
    user?: string
}

export interface BooksApiBookControllerFindUserBookReviewRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    status?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReview
     */
    rate?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReview
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewCountRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    status?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    rate?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviewCount
     */
    review?: string
}

export interface BooksApiBookControllerFindUserBookReviewsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    bookId: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    userId?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;number&gt;
     * @memberof BooksApibookControllerFindUserBookReviews
     */
    rate?: Array<number>
}

export interface BooksApiBookControllerFindUserWhichReadBookRequest {
}

export interface BooksApiBookControllerRemoveTopBookRequest {
    /**
     * 
     * @type TopBookPayload
     * @memberof BooksApibookControllerRemoveTopBook
     */
    topBookPayload: TopBookPayload
}

export interface BooksApiBookControllerUpdateBookPositionRequest {
    /**
     * 
     * @type BookPositionDto
     * @memberof BooksApibookControllerUpdateBookPosition
     */
    bookPositionDto: BookPositionDto
}

export interface BooksApiBookControllerUserBookMarkRequest {
    /**
     * 
     * @type UserBookPayloadDto
     * @memberof BooksApibookControllerUserBookMark
     */
    userBookPayloadDto: UserBookPayloadDto
}

export class ObjectBooksApi {
    private api: ObservableBooksApi

    public constructor(configuration: Configuration, requestFactory?: BooksApiRequestFactory, responseProcessor?: BooksApiResponseProcessor) {
        this.api = new ObservableBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public bookControllerAddBookWithHttpInfo(param: BooksApiBookControllerAddBookRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        return this.api.bookControllerAddBookWithHttpInfo(param.bookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddBook(param: BooksApiBookControllerAddBookRequest, options?: ConfigurationOptions): Promise<BookResponseDto> {
        return this.api.bookControllerAddBook(param.bookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddMyGoodReadsBooksWithHttpInfo(param: BooksApiBookControllerAddMyGoodReadsBooksRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksStatusResponseDto>> {
        return this.api.bookControllerAddMyGoodReadsBooksWithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddMyGoodReadsBooks(param: BooksApiBookControllerAddMyGoodReadsBooksRequest, options?: ConfigurationOptions): Promise<BooksStatusResponseDto> {
        return this.api.bookControllerAddMyGoodReadsBooks(param.requestBody,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddReadingGoalWithHttpInfo(param: BooksApiBookControllerAddReadingGoalRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        return this.api.bookControllerAddReadingGoalWithHttpInfo(param.readingGoalPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddReadingGoal(param: BooksApiBookControllerAddReadingGoalRequest, options?: ConfigurationOptions): Promise<ReadingGoalResponseDTO> {
        return this.api.bookControllerAddReadingGoal(param.readingGoalPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddTopBookWithHttpInfo(param: BooksApiBookControllerAddTopBookRequest, options?: ConfigurationOptions): Promise<HttpInfo<TopBooksResponseDTO>> {
        return this.api.bookControllerAddTopBookWithHttpInfo(param.topBookPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerAddTopBook(param: BooksApiBookControllerAddTopBookRequest, options?: ConfigurationOptions): Promise<TopBooksResponseDTO> {
        return this.api.bookControllerAddTopBook(param.topBookPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerDeleteReviewWithHttpInfo(param: BooksApiBookControllerDeleteReviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserBookDeleteResponseDto>> {
        return this.api.bookControllerDeleteReviewWithHttpInfo(param.userBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerDeleteReview(param: BooksApiBookControllerDeleteReviewRequest, options?: ConfigurationOptions): Promise<UserBookDeleteResponseDto> {
        return this.api.bookControllerDeleteReview(param.userBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookByIdWithHttpInfo(param: BooksApiBookControllerFindBookByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        return this.api.bookControllerFindBookByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookById(param: BooksApiBookControllerFindBookByIdRequest, options?: ConfigurationOptions): Promise<BookResponseDto> {
        return this.api.bookControllerFindBookById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookByStatusWithHttpInfo(param: BooksApiBookControllerFindBookByStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        return this.api.bookControllerFindBookByStatusWithHttpInfo(param.bookByStatusDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookByStatus(param: BooksApiBookControllerFindBookByStatusRequest, options?: ConfigurationOptions): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindBookByStatus(param.bookByStatusDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookReviewBaseWithHttpInfo(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        return this.api.bookControllerFindBookReviewBaseWithHttpInfo(param.userBookStatusQueryDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBookReviewBase(param: BooksApiBookControllerFindBookReviewBaseRequest, options?: ConfigurationOptions): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindBookReviewBase(param.userBookStatusQueryDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooksWithHttpInfo(param: BooksApiBookControllerFindBooksRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksResponseDto>> {
        return this.api.bookControllerFindBooksWithHttpInfo(param.rate, param.page, param.limit, param.search, param.isPrompt, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindBooks(param: BooksApiBookControllerFindBooksRequest, options?: ConfigurationOptions): Promise<BooksResponseDto> {
        return this.api.bookControllerFindBooks(param.rate, param.page, param.limit, param.search, param.isPrompt, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindGoodReadsWithHttpInfo(param: BooksApiBookControllerFindGoodReadsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        return this.api.bookControllerFindGoodReadsWithHttpInfo(param.goodReadsBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindGoodReads(param: BooksApiBookControllerFindGoodReadsRequest, options?: ConfigurationOptions): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindGoodReads(param.goodReadsBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindReadingGoalWithHttpInfo(param: BooksApiBookControllerFindReadingGoalRequest, options?: ConfigurationOptions): Promise<HttpInfo<ReadingGoalResponseDTO>> {
        return this.api.bookControllerFindReadingGoalWithHttpInfo(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindReadingGoal(param: BooksApiBookControllerFindReadingGoalRequest, options?: ConfigurationOptions): Promise<ReadingGoalResponseDTO> {
        return this.api.bookControllerFindReadingGoal(param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindTopBooksWithHttpInfo(param: BooksApiBookControllerFindTopBooksRequest, options?: ConfigurationOptions): Promise<HttpInfo<BooksReviewResponseDto>> {
        return this.api.bookControllerFindTopBooksWithHttpInfo(param.rate, param.page, param.limit, param.search, param.isPrompt, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindTopBooks(param: BooksApiBookControllerFindTopBooksRequest, options?: ConfigurationOptions): Promise<BooksReviewResponseDto> {
        return this.api.bookControllerFindTopBooks(param.rate, param.page, param.limit, param.search, param.isPrompt, param.user,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        return this.api.bookControllerFindUserBookReviewWithHttpInfo(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReview(param: BooksApiBookControllerFindUserBookReviewRequest, options?: ConfigurationOptions): Promise<UserBookReviewResponseDto> {
        return this.api.bookControllerFindUserBookReview(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewCountWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookReviewCountResponseDto>> {
        return this.api.bookControllerFindUserBookReviewCountWithHttpInfo(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewCount(param: BooksApiBookControllerFindUserBookReviewCountRequest, options?: ConfigurationOptions): Promise<BookReviewCountResponseDto> {
        return this.api.bookControllerFindUserBookReviewCount(param.bookId, param.status, param.rate, param.review,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviewsWithHttpInfo(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        return this.api.bookControllerFindUserBookReviewsWithHttpInfo(param.bookId, param.page, param.limit, param.userId, param.rate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserBookReviews(param: BooksApiBookControllerFindUserBookReviewsRequest, options?: ConfigurationOptions): Promise<UserBooksResponseDto> {
        return this.api.bookControllerFindUserBookReviews(param.bookId, param.page, param.limit, param.userId, param.rate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserWhichReadBookWithHttpInfo(param: BooksApiBookControllerFindUserWhichReadBookRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<UserBooksResponseDto>> {
        return this.api.bookControllerFindUserWhichReadBookWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerFindUserWhichReadBook(param: BooksApiBookControllerFindUserWhichReadBookRequest = {}, options?: ConfigurationOptions): Promise<UserBooksResponseDto> {
        return this.api.bookControllerFindUserWhichReadBook( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerRemoveTopBookWithHttpInfo(param: BooksApiBookControllerRemoveTopBookRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.bookControllerRemoveTopBookWithHttpInfo(param.topBookPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerRemoveTopBook(param: BooksApiBookControllerRemoveTopBookRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.bookControllerRemoveTopBook(param.topBookPayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUpdateBookPositionWithHttpInfo(param: BooksApiBookControllerUpdateBookPositionRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookResponseDto>> {
        return this.api.bookControllerUpdateBookPositionWithHttpInfo(param.bookPositionDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUpdateBookPosition(param: BooksApiBookControllerUpdateBookPositionRequest, options?: ConfigurationOptions): Promise<BookResponseDto> {
        return this.api.bookControllerUpdateBookPosition(param.bookPositionDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUserBookMarkWithHttpInfo(param: BooksApiBookControllerUserBookMarkRequest, options?: ConfigurationOptions): Promise<HttpInfo<UserBookReviewResponseDto>> {
        return this.api.bookControllerUserBookMarkWithHttpInfo(param.userBookPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public bookControllerUserBookMark(param: BooksApiBookControllerUserBookMarkRequest, options?: ConfigurationOptions): Promise<UserBookReviewResponseDto> {
        return this.api.bookControllerUserBookMark(param.userBookPayloadDto,  options).toPromise();
    }

}

import { ObservableContactApi } from "./ObservableAPI";
import { ContactApiRequestFactory, ContactApiResponseProcessor} from "../apis/ContactApi";

export interface ContactApiContactControllerSyncContactsRequest {
    /**
     * 
     * @type Array&lt;ContactDetails&gt;
     * @memberof ContactApicontactControllerSyncContacts
     */
    contactDetails: Array<ContactDetails>
}

export class ObjectContactApi {
    private api: ObservableContactApi

    public constructor(configuration: Configuration, requestFactory?: ContactApiRequestFactory, responseProcessor?: ContactApiResponseProcessor) {
        this.api = new ObservableContactApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public contactControllerSyncContactsWithHttpInfo(param: ContactApiContactControllerSyncContactsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContactDetailsDto>> {
        return this.api.contactControllerSyncContactsWithHttpInfo(param.contactDetails,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public contactControllerSyncContacts(param: ContactApiContactControllerSyncContactsRequest, options?: ConfigurationOptions): Promise<ContactDetailsDto> {
        return this.api.contactControllerSyncContacts(param.contactDetails,  options).toPromise();
    }

}

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiAppControllerGetHelloRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public appControllerGetHelloWithHttpInfo(param: DefaultApiAppControllerGetHelloRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.appControllerGetHelloWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public appControllerGetHello(param: DefaultApiAppControllerGetHelloRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.appControllerGetHello( options).toPromise();
    }

}

import { ObservableDeviceApi } from "./ObservableAPI";
import { DeviceApiRequestFactory, DeviceApiResponseProcessor} from "../apis/DeviceApi";

export interface DeviceApiDeviceControllerAddDeviceRequest {
    /**
     * 
     * @type AddDevicePayload
     * @memberof DeviceApideviceControllerAddDevice
     */
    addDevicePayload: AddDevicePayload
}

export class ObjectDeviceApi {
    private api: ObservableDeviceApi

    public constructor(configuration: Configuration, requestFactory?: DeviceApiRequestFactory, responseProcessor?: DeviceApiResponseProcessor) {
        this.api = new ObservableDeviceApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public deviceControllerAddDeviceWithHttpInfo(param: DeviceApiDeviceControllerAddDeviceRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeviceAddResponse>> {
        return this.api.deviceControllerAddDeviceWithHttpInfo(param.addDevicePayload,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public deviceControllerAddDevice(param: DeviceApiDeviceControllerAddDeviceRequest, options?: ConfigurationOptions): Promise<DeviceAddResponse> {
        return this.api.deviceControllerAddDevice(param.addDevicePayload,  options).toPromise();
    }

}

import { ObservableEventsApi } from "./ObservableAPI";
import { EventsApiRequestFactory, EventsApiResponseProcessor} from "../apis/EventsApi";

export interface EventsApiEventControllerBookMarkEventRequest {
    /**
     * 
     * @type BookMarkEventPayloadDto
     * @memberof EventsApieventControllerBookMarkEvent
     */
    bookMarkEventPayloadDto: BookMarkEventPayloadDto
}

export interface EventsApiEventControllerBookMarkEventListRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerBookMarkEventList
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerBookMarkEventList
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerBookMarkEventList
     */
    userId?: string
}

export interface EventsApiEventControllerCreateEventRequest {
    /**
     * 
     * @type EventPayloadDto
     * @memberof EventsApieventControllerCreateEvent
     */
    eventPayloadDto: EventPayloadDto
}

export interface EventsApiEventControllerCreateMyEventsRequest {
    /**
     * 
     * @type MyEventsPayloadDTO
     * @memberof EventsApieventControllerCreateMyEvents
     */
    myEventsPayloadDTO: MyEventsPayloadDTO
}

export interface EventsApiEventControllerDeleteBookMarkEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerDeleteBookMarkEvent
     */
    eventId: string
}

export interface EventsApiEventControllerDeleteEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerDeleteEvent
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EventsApieventControllerDeleteEvent
     */
    withBookedEvent?: boolean
}

export interface EventsApiEventControllerFindCustomerOfEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindCustomerOfEvents
     */
    userId: string
}

export interface EventsApiEventControllerFindEventByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindEventById
     */
    id: string
    /**
     * 
     * Defaults to: undefined
     * @type boolean
     * @memberof EventsApieventControllerFindEventById
     */
    withBookedEvent?: boolean
}

export interface EventsApiEventControllerFindEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    longitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindEvents
     */
    latitude?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindEvents
     */
    userId?: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindEvents
     */
    search?: string
}

export interface EventsApiEventControllerFindMyEventRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerFindMyEvent
     */
    eventId: string
}

export interface EventsApiEventControllerFindMyUpcomingEventsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    limit: number
    /**
     * 
     * Defaults to: &#39;UPCOMING&#39;
     * @type &#39;UPCOMING&#39; | &#39;VISITED&#39;
     * @memberof EventsApieventControllerFindMyUpcomingEvents
     */
    type: 'UPCOMING' | 'VISITED'
}

export interface EventsApiEventControllerFindSearchPlacesRequest {
    /**
     * 
     * @type LocationPayloadDto
     * @memberof EventsApieventControllerFindSearchPlaces
     */
    locationPayloadDto: LocationPayloadDto
}

export interface EventsApiEventControllerGetBookMarkEventStatusRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof EventsApieventControllerGetBookMarkEventStatus
     */
    eventId: string
}

export interface EventsApiEventControllerUpdateEventRequest {
    /**
     * 
     * @type EventPayloadDto
     * @memberof EventsApieventControllerUpdateEvent
     */
    eventPayloadDto: EventPayloadDto
}

export class ObjectEventsApi {
    private api: ObservableEventsApi

    public constructor(configuration: Configuration, requestFactory?: EventsApiRequestFactory, responseProcessor?: EventsApiResponseProcessor) {
        this.api = new ObservableEventsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public eventControllerBookMarkEventWithHttpInfo(param: EventsApiEventControllerBookMarkEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<CreateBookMarkEventResponseDto>> {
        return this.api.eventControllerBookMarkEventWithHttpInfo(param.bookMarkEventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerBookMarkEvent(param: EventsApiEventControllerBookMarkEventRequest, options?: ConfigurationOptions): Promise<CreateBookMarkEventResponseDto> {
        return this.api.eventControllerBookMarkEvent(param.bookMarkEventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerBookMarkEventListWithHttpInfo(param: EventsApiEventControllerBookMarkEventListRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookMarkEventListResponseDto>> {
        return this.api.eventControllerBookMarkEventListWithHttpInfo(param.page, param.limit, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerBookMarkEventList(param: EventsApiEventControllerBookMarkEventListRequest, options?: ConfigurationOptions): Promise<BookMarkEventListResponseDto> {
        return this.api.eventControllerBookMarkEventList(param.page, param.limit, param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateEventWithHttpInfo(param: EventsApiEventControllerCreateEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerCreateEventWithHttpInfo(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateEvent(param: EventsApiEventControllerCreateEventRequest, options?: ConfigurationOptions): Promise<EventResponseDto> {
        return this.api.eventControllerCreateEvent(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateMyEventsWithHttpInfo(param: EventsApiEventControllerCreateMyEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MyEventResponseDto>> {
        return this.api.eventControllerCreateMyEventsWithHttpInfo(param.myEventsPayloadDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerCreateMyEvents(param: EventsApiEventControllerCreateMyEventsRequest, options?: ConfigurationOptions): Promise<MyEventResponseDto> {
        return this.api.eventControllerCreateMyEvents(param.myEventsPayloadDTO,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerDeleteBookMarkEventWithHttpInfo(param: EventsApiEventControllerDeleteBookMarkEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<DeleteBookMarkEventResponseDto>> {
        return this.api.eventControllerDeleteBookMarkEventWithHttpInfo(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerDeleteBookMarkEvent(param: EventsApiEventControllerDeleteBookMarkEventRequest, options?: ConfigurationOptions): Promise<DeleteBookMarkEventResponseDto> {
        return this.api.eventControllerDeleteBookMarkEvent(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerDeleteEventWithHttpInfo(param: EventsApiEventControllerDeleteEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventDeleteResponseDto>> {
        return this.api.eventControllerDeleteEventWithHttpInfo(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerDeleteEvent(param: EventsApiEventControllerDeleteEventRequest, options?: ConfigurationOptions): Promise<EventDeleteResponseDto> {
        return this.api.eventControllerDeleteEvent(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindCustomerOfEventsWithHttpInfo(param: EventsApiEventControllerFindCustomerOfEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventCustomerResponseDto>> {
        return this.api.eventControllerFindCustomerOfEventsWithHttpInfo(param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindCustomerOfEvents(param: EventsApiEventControllerFindCustomerOfEventsRequest, options?: ConfigurationOptions): Promise<EventCustomerResponseDto> {
        return this.api.eventControllerFindCustomerOfEvents(param.userId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventByIdWithHttpInfo(param: EventsApiEventControllerFindEventByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerFindEventByIdWithHttpInfo(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventById(param: EventsApiEventControllerFindEventByIdRequest, options?: ConfigurationOptions): Promise<EventResponseDto> {
        return this.api.eventControllerFindEventById(param.id, param.withBookedEvent,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEventsWithHttpInfo(param: EventsApiEventControllerFindEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventsResponseDto>> {
        return this.api.eventControllerFindEventsWithHttpInfo(param.page, param.limit, param.longitude, param.latitude, param.userId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindEvents(param: EventsApiEventControllerFindEventsRequest, options?: ConfigurationOptions): Promise<EventsResponseDto> {
        return this.api.eventControllerFindEvents(param.page, param.limit, param.longitude, param.latitude, param.userId, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyEventWithHttpInfo(param: EventsApiEventControllerFindMyEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<MyEventResponseDto>> {
        return this.api.eventControllerFindMyEventWithHttpInfo(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyEvent(param: EventsApiEventControllerFindMyEventRequest, options?: ConfigurationOptions): Promise<MyEventResponseDto> {
        return this.api.eventControllerFindMyEvent(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyUpcomingEventsWithHttpInfo(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MyEventsResponseDto>> {
        return this.api.eventControllerFindMyUpcomingEventsWithHttpInfo(param.page, param.limit, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindMyUpcomingEvents(param: EventsApiEventControllerFindMyUpcomingEventsRequest, options?: ConfigurationOptions): Promise<MyEventsResponseDto> {
        return this.api.eventControllerFindMyUpcomingEvents(param.page, param.limit, param.type,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindSearchPlacesWithHttpInfo(param: EventsApiEventControllerFindSearchPlacesRequest, options?: ConfigurationOptions): Promise<HttpInfo<LocationPlacesResponseDto>> {
        return this.api.eventControllerFindSearchPlacesWithHttpInfo(param.locationPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerFindSearchPlaces(param: EventsApiEventControllerFindSearchPlacesRequest, options?: ConfigurationOptions): Promise<LocationPlacesResponseDto> {
        return this.api.eventControllerFindSearchPlaces(param.locationPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerGetBookMarkEventStatusWithHttpInfo(param: EventsApiEventControllerGetBookMarkEventStatusRequest, options?: ConfigurationOptions): Promise<HttpInfo<BookMarkEventStatusResponseDto>> {
        return this.api.eventControllerGetBookMarkEventStatusWithHttpInfo(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerGetBookMarkEventStatus(param: EventsApiEventControllerGetBookMarkEventStatusRequest, options?: ConfigurationOptions): Promise<BookMarkEventStatusResponseDto> {
        return this.api.eventControllerGetBookMarkEventStatus(param.eventId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEventWithHttpInfo(param: EventsApiEventControllerUpdateEventRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventResponseDto>> {
        return this.api.eventControllerUpdateEventWithHttpInfo(param.eventPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public eventControllerUpdateEvent(param: EventsApiEventControllerUpdateEventRequest, options?: ConfigurationOptions): Promise<EventResponseDto> {
        return this.api.eventControllerUpdateEvent(param.eventPayloadDto,  options).toPromise();
    }

}

import { ObservableFollowerApi } from "./ObservableAPI";
import { FollowerApiRequestFactory, FollowerApiResponseProcessor} from "../apis/FollowerApi";

export interface FollowerApiFollowerControllerAcceptRequest {
    /**
     * 
     * @type AcceptFollowerPayloadDto
     * @memberof FollowerApifollowerControllerAccept
     */
    acceptFollowerPayloadDto: AcceptFollowerPayloadDto
}

export interface FollowerApiFollowerControllerFindMyFriendsRequest {
    /**
     * 
     * @type MyFriendPayloadDto
     * @memberof FollowerApifollowerControllerFindMyFriends
     */
    myFriendPayloadDto: MyFriendPayloadDto
}

export interface FollowerApiFollowerControllerFollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerFollow
     */
    followerPayloadDto: FollowerPayloadDto
}

export interface FollowerApiFollowerControllerFriendRequestListRequest {
}

export interface FollowerApiFollowerControllerUnfollowRequest {
    /**
     * 
     * @type FollowerPayloadDto
     * @memberof FollowerApifollowerControllerUnfollow
     */
    followerPayloadDto: FollowerPayloadDto
}

export class ObjectFollowerApi {
    private api: ObservableFollowerApi

    public constructor(configuration: Configuration, requestFactory?: FollowerApiRequestFactory, responseProcessor?: FollowerApiResponseProcessor) {
        this.api = new ObservableFollowerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public followerControllerAcceptWithHttpInfo(param: FollowerApiFollowerControllerAcceptRequest, options?: ConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerAcceptWithHttpInfo(param.acceptFollowerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerAccept(param: FollowerApiFollowerControllerAcceptRequest, options?: ConfigurationOptions): Promise<FollowerResponseDto> {
        return this.api.followerControllerAccept(param.acceptFollowerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFindMyFriendsWithHttpInfo(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MyAllFriendsResponseDto>> {
        return this.api.followerControllerFindMyFriendsWithHttpInfo(param.myFriendPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFindMyFriends(param: FollowerApiFollowerControllerFindMyFriendsRequest, options?: ConfigurationOptions): Promise<MyAllFriendsResponseDto> {
        return this.api.followerControllerFindMyFriends(param.myFriendPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFollowWithHttpInfo(param: FollowerApiFollowerControllerFollowRequest, options?: ConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerFollowWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFollow(param: FollowerApiFollowerControllerFollowRequest, options?: ConfigurationOptions): Promise<FollowerResponseDto> {
        return this.api.followerControllerFollow(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFriendRequestListWithHttpInfo(param: FollowerApiFollowerControllerFriendRequestListRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<FriendRequestItemEntityDto>> {
        return this.api.followerControllerFriendRequestListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerFriendRequestList(param: FollowerApiFollowerControllerFriendRequestListRequest = {}, options?: ConfigurationOptions): Promise<FriendRequestItemEntityDto> {
        return this.api.followerControllerFriendRequestList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnfollowWithHttpInfo(param: FollowerApiFollowerControllerUnfollowRequest, options?: ConfigurationOptions): Promise<HttpInfo<FollowerResponseDto>> {
        return this.api.followerControllerUnfollowWithHttpInfo(param.followerPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public followerControllerUnfollow(param: FollowerApiFollowerControllerUnfollowRequest, options?: ConfigurationOptions): Promise<FollowerResponseDto> {
        return this.api.followerControllerUnfollow(param.followerPayloadDto,  options).toPromise();
    }

}

import { ObservableFriendsApi } from "./ObservableAPI";
import { FriendsApiRequestFactory, FriendsApiResponseProcessor} from "../apis/FriendsApi";

export interface FriendsApiFriendControllerFindFriendsRequest {
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    page: number
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof FriendsApifriendControllerFindFriends
     */
    limit: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof FriendsApifriendControllerFindFriends
     */
    search?: string
}

export class ObjectFriendsApi {
    private api: ObservableFriendsApi

    public constructor(configuration: Configuration, requestFactory?: FriendsApiRequestFactory, responseProcessor?: FriendsApiResponseProcessor) {
        this.api = new ObservableFriendsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public friendControllerFindFriendsWithHttpInfo(param: FriendsApiFriendControllerFindFriendsRequest, options?: ConfigurationOptions): Promise<HttpInfo<FriendsResponseDto>> {
        return this.api.friendControllerFindFriendsWithHttpInfo(param.page, param.limit, param.search,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public friendControllerFindFriends(param: FriendsApiFriendControllerFindFriendsRequest, options?: ConfigurationOptions): Promise<FriendsResponseDto> {
        return this.api.friendControllerFindFriends(param.page, param.limit, param.search,  options).toPromise();
    }

}

import { ObservableNielsenBooksApi } from "./ObservableAPI";
import { NielsenBooksApiRequestFactory, NielsenBooksApiResponseProcessor} from "../apis/NielsenBooksApi";

export interface NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NielsenBooksApinielsenBooksControllerGetNielsenBookById
     */
    id: string
    /**
     * 
     * @type any
     * @memberof NielsenBooksApinielsenBooksControllerGetNielsenBookById
     */
    body: any
}

export interface NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof NielsenBooksApinielsenBooksControllerGetNielsenBookImageById
     */
    id: string
}

export interface NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest {
}

export class ObjectNielsenBooksApi {
    private api: ObservableNielsenBooksApi

    public constructor(configuration: Configuration, requestFactory?: NielsenBooksApiRequestFactory, responseProcessor?: NielsenBooksApiResponseProcessor) {
        this.api = new ObservableNielsenBooksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.nielsenBooksControllerGetNielsenBookByIdWithHttpInfo(param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBookById(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookByIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.nielsenBooksControllerGetNielsenBookById(param.id, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.nielsenBooksControllerGetNielsenBookImageByIdWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBookImageById(param: NielsenBooksApiNielsenBooksControllerGetNielsenBookImageByIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.nielsenBooksControllerGetNielsenBookImageById(param.id,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBooksWithHttpInfo(param: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.nielsenBooksControllerGetNielsenBooksWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public nielsenBooksControllerGetNielsenBooks(param: NielsenBooksApiNielsenBooksControllerGetNielsenBooksRequest = {}, options?: ConfigurationOptions): Promise<void> {
        return this.api.nielsenBooksControllerGetNielsenBooks( options).toPromise();
    }

}

import { ObservablePaymentApi } from "./ObservableAPI";
import { PaymentApiRequestFactory, PaymentApiResponseProcessor} from "../apis/PaymentApi";

export interface PaymentApiPaymentControllerConnectAccountRequest {
}

export interface PaymentApiPaymentControllerCreateAccountVerificationLinkRequest {
}

export interface PaymentApiPaymentControllerCreatePaymentRequest {
    /**
     * 
     * @type StripePaymentPayloadDto
     * @memberof PaymentApipaymentControllerCreatePayment
     */
    stripePaymentPayloadDto: StripePaymentPayloadDto
}

export interface PaymentApiPaymentControllerCreatePaymentIntentRequest {
    /**
     * 
     * @type StripePayloadDto
     * @memberof PaymentApipaymentControllerCreatePaymentIntent
     */
    stripePayloadDto: StripePayloadDto
}

export interface PaymentApiPaymentControllerDeleteCardDetailsRequest {
    /**
     * 
     * @type PaymentPayloadDto
     * @memberof PaymentApipaymentControllerDeleteCardDetails
     */
    paymentPayloadDto: PaymentPayloadDto
}

export interface PaymentApiPaymentControllerGetCardListRequest {
}

export interface PaymentApiPaymentControllerRetrieveConnectedAccountRequest {
}

export class ObjectPaymentApi {
    private api: ObservablePaymentApi

    public constructor(configuration: Configuration, requestFactory?: PaymentApiRequestFactory, responseProcessor?: PaymentApiResponseProcessor) {
        this.api = new ObservablePaymentApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public paymentControllerConnectAccountWithHttpInfo(param: PaymentApiPaymentControllerConnectAccountRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        return this.api.paymentControllerConnectAccountWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerConnectAccount(param: PaymentApiPaymentControllerConnectAccountRequest = {}, options?: ConfigurationOptions): Promise<BusinessConnectedAccount> {
        return this.api.paymentControllerConnectAccount( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreateAccountVerificationLinkWithHttpInfo(param: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<VerificationLinkResponseDTO>> {
        return this.api.paymentControllerCreateAccountVerificationLinkWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreateAccountVerificationLink(param: PaymentApiPaymentControllerCreateAccountVerificationLinkRequest = {}, options?: ConfigurationOptions): Promise<VerificationLinkResponseDTO> {
        return this.api.paymentControllerCreateAccountVerificationLink( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: ConfigurationOptions): Promise<HttpInfo<PaymentResponseDto>> {
        return this.api.paymentControllerCreatePaymentWithHttpInfo(param.stripePaymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePayment(param: PaymentApiPaymentControllerCreatePaymentRequest, options?: ConfigurationOptions): Promise<PaymentResponseDto> {
        return this.api.paymentControllerCreatePayment(param.stripePaymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentIntentWithHttpInfo(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: ConfigurationOptions): Promise<HttpInfo<StripeResponseDto>> {
        return this.api.paymentControllerCreatePaymentIntentWithHttpInfo(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerCreatePaymentIntent(param: PaymentApiPaymentControllerCreatePaymentIntentRequest, options?: ConfigurationOptions): Promise<StripeResponseDto> {
        return this.api.paymentControllerCreatePaymentIntent(param.stripePayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerDeleteCardDetailsWithHttpInfo(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.paymentControllerDeleteCardDetailsWithHttpInfo(param.paymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerDeleteCardDetails(param: PaymentApiPaymentControllerDeleteCardDetailsRequest, options?: ConfigurationOptions): Promise<CardListResponseDto> {
        return this.api.paymentControllerDeleteCardDetails(param.paymentPayloadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerGetCardListWithHttpInfo(param: PaymentApiPaymentControllerGetCardListRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CardListResponseDto>> {
        return this.api.paymentControllerGetCardListWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerGetCardList(param: PaymentApiPaymentControllerGetCardListRequest = {}, options?: ConfigurationOptions): Promise<CardListResponseDto> {
        return this.api.paymentControllerGetCardList( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerRetrieveConnectedAccountWithHttpInfo(param: PaymentApiPaymentControllerRetrieveConnectedAccountRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<BusinessConnectedAccount>> {
        return this.api.paymentControllerRetrieveConnectedAccountWithHttpInfo( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public paymentControllerRetrieveConnectedAccount(param: PaymentApiPaymentControllerRetrieveConnectedAccountRequest = {}, options?: ConfigurationOptions): Promise<BusinessConnectedAccount> {
        return this.api.paymentControllerRetrieveConnectedAccount( options).toPromise();
    }

}

import { ObservableStorageApi } from "./ObservableAPI";
import { StorageApiRequestFactory, StorageApiResponseProcessor} from "../apis/StorageApi";

export interface StorageApiStorageControllerGetPreSignedURLRequest {
    /**
     * 
     * @type FileUploadDto
     * @memberof StorageApistorageControllerGetPreSignedURL
     */
    fileUploadDto: FileUploadDto
}

export class ObjectStorageApi {
    private api: ObservableStorageApi

    public constructor(configuration: Configuration, requestFactory?: StorageApiRequestFactory, responseProcessor?: StorageApiResponseProcessor) {
        this.api = new ObservableStorageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public storageControllerGetPreSignedURLWithHttpInfo(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: ConfigurationOptions): Promise<HttpInfo<StorageResponseDto>> {
        return this.api.storageControllerGetPreSignedURLWithHttpInfo(param.fileUploadDto,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public storageControllerGetPreSignedURL(param: StorageApiStorageControllerGetPreSignedURLRequest, options?: ConfigurationOptions): Promise<StorageResponseDto> {
        return this.api.storageControllerGetPreSignedURL(param.fileUploadDto,  options).toPromise();
    }

}
