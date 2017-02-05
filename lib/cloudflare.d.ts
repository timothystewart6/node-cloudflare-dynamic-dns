import { Auth } from "./options";
/**
 * Creates or updates a CloudFlare DNS record, depending on whether it already
 * exists. An error is returned if there are multiple DNS records for the
 * specified record name.
 *
 * @param auth CloudFlare API authentication information.
 * @param ip The IP to update the record with.
 * @param recordName The name of the record.
 * @param zoneName The name of the zone.
 * @param callback Callback function called with any error that occurred.
 *
 * @private
 */
export declare function createOrUpdateDnsRecord(auth: Auth, ip: string, recordName: string, zoneName: string, callback: (error?: Error) => void): void;
/**
 * Gets the specified DNS record from CloudFlare. This function is only used
 * for testing this module.
 *
 * @param auth CloudFlare API authentication information.
 * @param recordName The name of the record.
 * @param zoneName The name of the zone.
 * @param callback Callback function called with any error that occurred as
 *                 well as the ID of the record retrieved.
 *
 * @private
 */
export declare function getDnsRecord(auth: Auth, recordName: string, zoneName: string, callback: (err?: Error, dnsRecordId?: string) => void): void;
/**
 * Deletes the specified DNS record from CloudFlare. This function is only used
 * for testing this module.
 *
 * @param auth CloudFlare API authentication information.
 * @param recordName The name of the record.
 * @param zoneName The name of the zone.
 * @param callback Callback function called with any error that occurred.
 *
 * @private
 */
export declare function deleteDnsRecord(auth: Auth, recordName: string, zoneName: string, callback: (err?: Error) => void): void;
/**
 * Gets the DNS record ID associated with the specified record name.
 *
 * @param zoneId The zone ID.
 * @param dnsRecordName The DNS record name.
 * @param auth CloudFlare API authentication information.
 * @param callback Callback function called with any error that occurred, as
 *                 well as the DNS record ID.
 *
 * @private
 */
export declare function getDnsRecordId(zoneId: string, dnsRecordName: string, auth: Auth, callback: (error?: Error, dnsRecordId?: string) => void): void;
/**
 * Gets the zone ID associated with the specified zone name.
 *
 * @param zoneName The zone name.
 * @param auth CloudFlare API authentication information.
 * @param callback Callback function called with any error that occurred, as
 *                 well as the zone ID.
 *
 * @private
 */
export declare function getZoneId(zoneName: string, auth: Auth, callback: (error?: Error, id?: string) => void): void;
/**
 * Gets results from the CloudFlare API.
 *
 * @param path The URI.
 * @param auth CloudFlare API authentication information.
 * @param callback Callback function called with any error that occurred, as
 *                 well as the API results.
 * @param method The HTTP method.
 * @param body The request body.
 * @param startPage The start page associated with the request.
 *
 * @private
 */
export declare function getResults(path: string, auth: Auth, callback: (error?: Error, results?: any[]) => void, method?: string, body?: string, startPage?: number): void;
