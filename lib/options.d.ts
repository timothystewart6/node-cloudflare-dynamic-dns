/**
 * Represents CloudFlare API settings for key and email authentication.
 */
export interface IAuth {
    /**
     * The API key associated with your CloudFlare account.
     */
    key: string;
    /**
     * The email associated with your CloudFlare account.
     */
    email: string;
}
/**
 * Implementation of the IAuth interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class Auth implements IAuth {
    key: string;
    email: string;
    constructor(options: IAuth);
}
/**
 * The options associated with updating a CloudFlare DNS record with an IP
 * address.
 */
export interface IOptions {
    /**
     * CloudFlare API settings for key and email authentication.
     */
    auth: IAuth;
    /**
     * The new IP address for the record. If left undefined, the external IP as
     * defined by myexternalip.com API is used.
     */
    ip?: string;
    /**
     * The name of the DNS record (e.g. `subdomain.example.com`).
     */
    recordName: string;
    /**
     * The name of the CloudFlare zone (e.g. `example.com`).
     */
    zoneName: string;
}
/**
 * Implementation of the IOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
export declare class Options implements IOptions {
    auth: Auth;
    ip?: string;
    recordName: string;
    zoneName: string;
    constructor(options: IOptions);
}
