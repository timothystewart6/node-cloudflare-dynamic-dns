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
var utils_1 = require("./utils");
/**
 * Implementation of the IAuth interface used to provide default values
 * to fields.
 *
 * @private
 */
var Auth = (function () {
    function Auth(options) {
        if (!utils_1.isObject(options)) {
            throw new TypeError("options.auth should be an Object");
        }
        if (!utils_1.isString(options.key)) {
            throw new TypeError("options.auth.key should be a string");
        }
        else {
            this.key = options.key;
        }
        if (!utils_1.isString(options.email)) {
            throw new TypeError("options.auth.email should be a string");
        }
        else {
            this.email = options.email;
        }
    }
    return Auth;
}());
exports.Auth = Auth;
/**
 * Implementation of the IOptions interface used to provide default values
 * to fields.
 *
 * @private
 */
var Options = (function () {
    function Options(options) {
        this.auth = new Auth(options.auth);
        this.ip = options.ip;
        if (!utils_1.isString(options.ip)) {
            if (!utils_1.isUndefined(options.ip)) {
                throw new TypeError("options.ip should be a string or"
                    + " undefined");
            }
        }
        else {
            this.ip = options.ip;
        }
        if (!utils_1.isString(options.recordName)) {
            throw new TypeError("options.recordName should be a string");
        }
        else {
            this.recordName = options.recordName;
        }
        if (!utils_1.isString(options.zoneName)) {
            throw new TypeError("options.zoneName should be a string");
        }
        else {
            this.zoneName = options.zoneName;
        }
    }
    return Options;
}());
exports.Options = Options;
