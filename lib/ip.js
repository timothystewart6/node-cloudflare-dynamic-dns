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
/**
 * @private
 */
var URL = "https://myexternalip.com/raw";
/**
 * Gets the current external IP from the myexternalip.com API.
 *
 * @param callback Callback function called with any error that occurred as
 *                 well as the IP address returned from the API.
 *
 * @private
 */
function getExternalIp(callback) {
    request_1.httpsRequest(URL, function (error, response, responseBody) {
        if (error) {
            callback(new error_1.ApiError({
                body: responseBody,
                message: "Error accessing " + URL,
                response: response
            }));
            return;
        }
        if (!responseBody) {
            callback(new error_1.ApiError({
                message: "Missing response body",
                response: response
            }));
            return;
        }
        callback(undefined, responseBody.trim());
    });
}
exports.getExternalIp = getExternalIp;
