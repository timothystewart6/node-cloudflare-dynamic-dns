/**
 * Copyright (C) 2016 Michael Kourlas
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
"use strict";
var error_1 = require("./error");
var request_1 = require("./request");
var utils_1 = require("./utils");
/**
 * @private
 */
var BASE_URL = "https://api.cloudflare.com/client/v4";
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
function createOrUpdateDnsRecord(auth, ip, recordName, zoneName, callback) {
    getZoneId(zoneName, auth, function (error, zoneId) {
        if (error || !zoneId) {
            callback(error || new Error("Unknown error"));
            return;
        }
        getDnsRecordId(zoneId, recordName, auth, function (error2, dnsRecordId) {
            if (error2) {
                callback(error2);
                return;
            }
            if (dnsRecordId) {
                updateDnsRecord(zoneId, dnsRecordId, ip, auth, function (error3) {
                    callback(error3);
                });
            }
            else {
                createDnsRecord(zoneId, recordName, ip, auth, function (error3) {
                    callback(error3);
                });
            }
        });
    });
}
exports.createOrUpdateDnsRecord = createOrUpdateDnsRecord;
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
function getDnsRecord(auth, recordName, zoneName, callback) {
    getZoneId(zoneName, auth, function (error, zoneId) {
        if (error || !zoneId) {
            callback(error || new Error("Unknown error"));
            return;
        }
        getDnsRecordId(zoneId, recordName, auth, function (error2, dnsRecordId) {
            if (error2) {
                callback(error2);
                return;
            }
            callback(undefined, dnsRecordId);
        });
    });
}
exports.getDnsRecord = getDnsRecord;
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
function deleteDnsRecord(auth, recordName, zoneName, callback) {
    getZoneId(zoneName, auth, function (error, zoneId) {
        if (error || !zoneId) {
            callback(error || new Error("Unknown error"));
            return;
        }
        getDnsRecordId(zoneId, recordName, auth, function (error2, dnsRecordId) {
            if (error2) {
                callback(error2);
                return;
            }
            if (dnsRecordId) {
                getResults("zones/" + zoneId + "/dns_records/" + dnsRecordId, auth, function (error3, results) {
                    if (error3 || !results) {
                        callback(error3 || new Error("Unknown error"));
                        return;
                    }
                    callback();
                }, "DELETE");
            }
            else {
                callback();
            }
        });
    });
}
exports.deleteDnsRecord = deleteDnsRecord;
/**
 * Creates a DNS record with the specified information.
 *
 * @param zoneId The zone ID.
 * @param dnsRecordName The DNS record name.
 * @param ip The IP to update the record with.
 * @param auth CloudFlare API authentication information.
 * @param callback Callback function called with any error that occurred.
 *
 * @private
 */
function createDnsRecord(zoneId, dnsRecordName, ip, auth, callback) {
    getResults("zones/" + zoneId + "/dns_records", auth, function (error, results) {
        if (error || !results) {
            callback(error || new Error("Unknown error"));
            return;
        }
        callback();
    }, "POST", JSON.stringify({
        content: ip,
        name: dnsRecordName,
        type: "A"
    }));
}
/**
 * Updates a DNS record with the specified information.
 *
 * @param zoneId The zone ID.
 * @param recordId The DNS record ID.
 * @param ip The IP to update the record with.
 * @param auth CloudFlare API authentication information.
 * @param callback Callback function called with any error that occurred.
 *
 * @private
 */
function updateDnsRecord(zoneId, recordId, ip, auth, callback) {
    getResults("zones/" + zoneId + "/dns_records/" + recordId, auth, function (error, results) {
        if (error || !results) {
            callback(error || new Error("Unknown error"));
            return;
        }
        callback();
    }, "PATCH", JSON.stringify({
        content: ip,
        type: "A"
    }));
}
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
function getDnsRecordId(zoneId, dnsRecordName, auth, callback) {
    getResults("zones/" + zoneId + "/dns_records", auth, function (error, results) {
        if (error || !results) {
            callback(error || new Error("Unknown error"));
            return;
        }
        var matchingResults = results.filter(function (result) { return result.name === dnsRecordName; });
        if (matchingResults.length === 0) {
            callback();
            return;
        }
        if (matchingResults.length > 1) {
            callback(new error_1.ApiError({
                message: "Multiple DNS record entries found with name"
                    + (" " + dnsRecordName),
                result: results
            }));
            return;
        }
        var result = matchingResults[0];
        if (!utils_1.isString(result.id)) {
            callback(new error_1.ApiError({
                message: "ID for DNS record entry malformed or missing",
                result: results
            }));
            return;
        }
        callback(undefined, result.id);
    });
}
exports.getDnsRecordId = getDnsRecordId;
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
function getZoneId(zoneName, auth, callback) {
    getResults("zones", auth, function (error, results) {
        if (error || !results) {
            callback(error || new Error("Unknown error"));
            return;
        }
        var matchingResults = results.filter(function (result) { return result.name === zoneName; });
        if (matchingResults.length === 0) {
            callback(new error_1.ApiError({
                message: "No zone entries found with name " + zoneName,
                result: results
            }));
            return;
        }
        if (matchingResults.length > 1) {
            callback(new error_1.ApiError({
                message: "No zone entries found with name " + zoneName,
                result: results
            }));
            return;
        }
        var result = results[0];
        if (!utils_1.isString(result.id)) {
            callback(new error_1.ApiError({
                message: "ID for zone entry malformed or missing",
                result: results
            }));
            return;
        }
        callback(undefined, result.id);
    });
}
exports.getZoneId = getZoneId;
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
function getResults(path, auth, callback, method, body, startPage) {
    if (method === void 0) { method = "GET"; }
    if (startPage === void 0) { startPage = 1; }
    var uri = BASE_URL + "/" + path;
    if (method === "GET") {
        uri += "?page=" + startPage;
    }
    var headers = {
        "X-Auth-Key": auth.key,
        "X-Auth-Email": auth.email
    };
    request_1.httpsRequest(uri, function (error, response, responseBody) {
        if (error) {
            callback(new error_1.ApiError({
                body: responseBody,
                innerError: error,
                message: "Error accessing CloudFlare API",
                response: response
            }));
            return;
        }
        if (!responseBody) {
            callback(new error_1.ApiError({
                innerError: error,
                message: "Missing response body",
                response: response
            }));
            return;
        }
        var json = JSON.parse(responseBody);
        if (!json.success) {
            callback(new error_1.ApiError({
                body: responseBody,
                message: "CloudFlare API returned success false",
                response: response
            }));
            return;
        }
        var results = [];
        if (utils_1.isArray(json.result)) {
            results = results.concat(json.result);
        }
        else {
            results.push(json.result);
        }
        if (json.result_info
            && json.result_info.page
                < json.result_info.total_pages) {
            getResults(path, auth, function (extraError, extraResults) {
                if (error) {
                    callback(extraError);
                    return;
                }
                results = results.concat(extraResults);
                callback(undefined, results);
            }, method, body, startPage + 1);
        }
        else {
            callback(undefined, results);
        }
    }, method, headers, body);
}
exports.getResults = getResults;
