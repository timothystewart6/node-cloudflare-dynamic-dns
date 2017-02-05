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
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Represents an error in contacting or parsing a response from the CloudFlare
 * API or the myexternalip.com API.
 */
var ApiError = (function (_super) {
    __extends(ApiError, _super);
    /**
     * @private
     */
    function ApiError(options) {
        var _this = _super.call(this, options.message) || this;
        _this.message = options.message;
        _this.innerError = options.innerError;
        _this.response = options.response;
        _this.body = options.body;
        _this.result = options.result;
        return _this;
    }
    return ApiError;
}(Error));
exports.ApiError = ApiError;
