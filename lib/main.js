/**
 * Copyright (C) 2014-2016 Michael Kourlas
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
var cloudflare_1 = require("./cloudflare");
var ip_1 = require("./ip");
var options_1 = require("./options");
/**
 * Updates the specified CloudFlare DNS record with an IP address, creating it
 * if it does not exist.
 *
 * @param options The options associated with the update request.
 * @param callback Callback function called with any error that occurred as
 *                 well as the new IP address if the request succeeded.
 */
function update(options, callback) {
    var _a = new options_1.Options(options), auth = _a.auth, ip = _a.ip, recordName = _a.recordName, zoneName = _a.zoneName;
    if (ip) {
        cloudflare_1.createOrUpdateDnsRecord(auth, ip, recordName, zoneName, function (error) {
            if (error) {
                callback(error);
                return;
            }
            callback(undefined, ip);
        });
    }
    else {
        ip_1.getExternalIp(function (error, externalIp) {
            if (error || !externalIp) {
                callback(error || new Error("Unknown error"));
                return;
            }
            cloudflare_1.createOrUpdateDnsRecord(auth, externalIp, recordName, zoneName, function (error2) {
                if (error2) {
                    callback(error2);
                    return;
                }
                callback(undefined, externalIp);
            });
        });
    }
}
exports.update = update;
