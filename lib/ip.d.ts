/**
 * Gets the current external IP from the myexternalip.com API.
 *
 * @param callback Callback function called with any error that occurred as
 *                 well as the IP address returned from the API.
 *
 * @private
 */
export declare function getExternalIp(callback: (error?: Error, ip?: string) => void): void;
