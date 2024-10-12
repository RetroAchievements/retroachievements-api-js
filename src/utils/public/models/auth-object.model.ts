/**
 * Each RetroAchievements API call is uniquely authenticated
 * using a web API key. Your account's personal Web API Key can
 * be found on the /settings page.
 */

/**
 * @deprecated `username` is no longer required for web API calls. Pass a string containing just your webApiKey instead.
 */
interface LegacyAuthObject {
  /**
   * You or your app's exact username on the RetroAchievements.org website.
   * For example, https://retroachievements.org/user/Scott would have a value
   * of "Scott".
   */
  username: string;

  /**
   * This can be found in the "Keys" section of your Settings page on the
   * RetroAchievements.org website. This is a 32-digit alphanumeric key
   * that is case-sensitive.
   */
  webApiKey: string;
}

export type ApiAuthorization = string | LegacyAuthObject;
