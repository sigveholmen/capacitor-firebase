export interface FirebaseAnalyticsPlugin {
  /**
   * Retrieves the app instance id.
   *
   * Only available for Android and iOS.
   *
   * @since 1.4.0
   */
  getAppInstanceId(): Promise<GetAppInstanceIdResult>;
  /**
   * Sets the user's consent mode.
   *
   * @since 6.0.0
   */
  setConsent(options: SetConsentOptions): Promise<void>;
  /**
   * Sets the user ID property.
   *
   * @since 0.1.0
   */
  setUserId(options: SetUserIdOptions): Promise<void>;
  /**
   * Sets a custom user property to a given value.
   *
   * @since 0.1.0
   */
  setUserProperty(options: SetUserPropertyOptions): Promise<void>;
  /**
   * Sets the current screen name.
   *
   * @since 0.1.0
   */
  setCurrentScreen(options: SetCurrentScreenOptions): Promise<void>;
  /**
   * Logs an app event.
   *
   * @since 0.1.0
   */
  logEvent(options: LogEventOptions): Promise<void>;
  /**
   * Sets the duration of inactivity that terminates the current session.
   *
   * Only available for Android and iOS.
   *
   * @since 0.1.0
   */
  setSessionTimeoutDuration(
    options: SetSessionTimeoutDurationOptions,
  ): Promise<void>;
  /**
   * Enables/disables automatic data collection.
   * The value does not apply until the next run of the app.
   *
   * @since 0.1.0
   */
  setEnabled(options: SetEnabledOptions): Promise<void>;
  /**
   * Returns whether or not automatic data collection is enabled.
   *
   * Only available for Web.
   *
   * @since 0.1.0
   */
  isEnabled(): Promise<IsEnabledResult>;
  /**
   * Clears all analytics data for this app from the device.
   * Resets the app instance id.
   *
   * Only available for Android and iOS.
   *
   * @since 0.1.0
   */
  resetAnalyticsData(): Promise<void>;
  /**
   * Initiates on-device conversion measurement with an email address.
   *
   * Only available for iOS.
   *
   * @since 7.2.0
   */
  initiateOnDeviceConversionMeasurementWithEmailAddress(
    options: InitiateOnDeviceConversionMeasurementWithEmailAddressOptions,
  ): Promise<void>;
  /**
   * Initiates on-device conversion measurement with a phone number.
   *
   * Only available for iOS.
   *
   * @since 7.2.0
   */
  initiateOnDeviceConversionMeasurementWithPhoneNumber(
    options: InitiateOnDeviceConversionMeasurementWithPhoneNumberOptions,
  ): Promise<void>;
  /**
   * Initiates on-device conversion measurement with a hashed email address.
   *
   * Only available for iOS.
   *
   * @since 7.2.0
   */
  initiateOnDeviceConversionMeasurementWithHashedEmailAddress(
    options: InitiateOnDeviceConversionMeasurementWithHashedEmailAddressOptions,
  ): Promise<void>;
  /**
   * Initiates on-device conversion measurement with a hashed phone number.
   *
   * Only available for iOS.
   *
   * @since 7.2.0
   */
  initiateOnDeviceConversionMeasurementWithHashedPhoneNumber(
    options: InitiateOnDeviceConversionMeasurementWithHashedPhoneNumberOptions,
  ): Promise<void>;
}

/**
 * @since 1.4.0
 */
export interface GetAppInstanceIdResult {
  /**
   * The app instance id.
   *
   * Not defined if `FirebaseAnalytics.ConsentType.ANALYTICS_STORAGE` has been set to `FirebaseAnalytics.ConsentStatus.DENIED`.
   *
   * @since 1.4.0
   */
  appInstanceId?: string;
}

/**
 * @since 6.0.0
 */
export interface SetConsentOptions {
  /**
   * The consent type.
   *
   * @since 6.0.0
   */
  type: ConsentType;
  /**
   * The consent status.
   *
   * @since 6.0.0
   */
  status: ConsentStatus;
}

/**
 * @since 0.1.0
 */
export interface SetUserIdOptions {
  /**
   * @since 0.1.0
   */
  userId: string | null;
}

/**
 * @since 0.1.0
 */
export interface SetUserPropertyOptions {
  /**
   * @since 0.1.0
   */
  key: string;
  /**
   * @since 0.1.0
   */
  value: string | null;
}

/**
 * @since 0.1.0
 */
export interface SetCurrentScreenOptions {
  /**
   * @since 0.1.0
   */
  screenName: string | null;
  /**
   * Only available for Android and iOS.
   *
   * @default null
   * @since 0.1.0
   */
  screenClassOverride?: string | null;
}

/**
 * @since 0.1.0
 */
export interface LogEventOptions {
  /**
   * The event name.
   *
   * @since 0.1.0
   */
  name: string;
  /**
   * The optional event params.
   *
   * @since 0.1.0
   */
  params?: { [key: string]: any };
}

/**
 * @since 0.1.0
 */
export interface SetSessionTimeoutDurationOptions {
  /**
   * Duration in seconds.
   *
   * @default 1800
   * @since 0.1.0
   */
  duration: number;
}

/**
 * @since 0.1.0
 */
export interface SetEnabledOptions {
  /**
   * @since 0.1.0
   */
  enabled: boolean;
}

/**
 * @since 0.1.0
 */
export interface IsEnabledResult {
  /**
   * @since 0.1.0
   */
  enabled: boolean;
}

/**
 * @since 6.0.0
 */
export enum ConsentType {
  /**
   * @since 6.0.0
   */
  AdPersonalization = 'AD_PERSONALIZATION',
  /**
   * @since 6.0.0
   */
  AdStorage = 'AD_STORAGE',
  /**
   * @since 6.0.0
   */
  AdUserData = 'AD_USER_DATA',
  /**
   * @since 6.0.0
   */
  AnalyticsStorage = 'ANALYTICS_STORAGE',
  /**
   * @since 6.0.0
   */
  FunctionalityStorage = 'FUNCTIONALITY_STORAGE',
  /**
   * @since 6.0.0
   */
  PersonalizationStorage = 'PERSONALIZATION_STORAGE',
}

/**
 * @since 6.0.0
 */
export enum ConsentStatus {
  /**
   * @since 6.0.0
   */
  Granted = 'GRANTED',
  /**
   * @since 6.0.0
   */
  Denied = 'DENIED',
}

/**
 * @since 7.2.0
 */
export interface InitiateOnDeviceConversionMeasurementWithEmailAddressOptions {
  /**
   * The email address to initiate on-device conversion measurement with.
   *
   * @since 7.2.0
   */
  emailAddress: string;
}

/**
 * @since 7.2.0
 */
export interface InitiateOnDeviceConversionMeasurementWithPhoneNumberOptions {
  /**
   * The phone number to initiate on-device conversion measurement with.
   *
   * @since 7.2.0
   */
  phoneNumber: string;
}

/**
 * @since 7.2.0
 */
export interface InitiateOnDeviceConversionMeasurementWithHashedEmailAddressOptions {
  /**
   * The email address to initiate on-device conversion measurement with.
   *
   * @since 7.2.0
   */
  emailAddressToHash: string;
}

/**
 * @since 7.2.0
 */
export interface InitiateOnDeviceConversionMeasurementWithHashedPhoneNumberOptions {
  /**
   * The phone number to initiate on-device conversion measurement with.
   *
   * @since 7.2.0
   */
  phoneNumberToHash: string;
}
