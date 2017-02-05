import { IOptions } from "./options";
/**
 * Updates the specified CloudFlare DNS record with an IP address, creating it
 * if it does not exist.
 *
 * @param options The options associated with the update request.
 * @param callback Callback function called with any error that occurred as
 *                 well as the new IP address if the request succeeded.
 */
export declare function update(options: IOptions, callback: (err?: Error, newIp?: string) => void): void;
