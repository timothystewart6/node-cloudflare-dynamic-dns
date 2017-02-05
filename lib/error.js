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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHOzs7Ozs7O0FBZUg7OztHQUdHO0FBQ0g7SUFBOEIsNEJBQUs7SUEwQi9COztPQUVHO0lBQ0gsa0JBQVksT0FBeUI7UUFBckMsWUFDSSxrQkFBTSxPQUFPLENBQUMsT0FBTyxDQUFDLFNBTXpCO1FBTEcsS0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQy9CLEtBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztRQUNyQyxLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDakMsS0FBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEtBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7SUFDakMsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXJDQSxBQXFDQyxDQXJDNkIsS0FBSyxHQXFDbEM7QUFyQ1ksNEJBQVEiLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoQykgMjAxNiBNaWNoYWVsIEtvdXJsYXNcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCAqIGFzIGh0dHAgZnJvbSBcImh0dHBcIjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIElBcGlFcnJvck9wdGlvbnMge1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgICBpbm5lckVycm9yPzogYW55O1xuICAgIHJlc3BvbnNlPzogaHR0cC5JbmNvbWluZ01lc3NhZ2U7XG4gICAgYm9keT86IGFueTtcbiAgICByZXN1bHQ/OiBhbnk7XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBlcnJvciBpbiBjb250YWN0aW5nIG9yIHBhcnNpbmcgYSByZXNwb25zZSBmcm9tIHRoZSBDbG91ZEZsYXJlXG4gKiBBUEkgb3IgdGhlIG15ZXh0ZXJuYWxpcC5jb20gQVBJLlxuICovXG5leHBvcnQgY2xhc3MgQXBpRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgLyoqXG4gICAgICogVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cbiAgICAgKi9cbiAgICBwdWJsaWMgbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoaXMgZXJyb3IsIGlmIGFwcGxpY2FibGUuXG4gICAgICovXG4gICAgcHVibGljIGlubmVyRXJyb3I/OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgcmVzcG9uc2UgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLCBpZiBhcHBsaWNhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXNwb25zZT86IGh0dHAuSW5jb21pbmdNZXNzYWdlO1xuXG4gICAgLyoqXG4gICAgICogVGhlIGJvZHkgb2YgdGhlIHJlc3BvbnNlIHJldHVybmVkIGZyb20gdGhlIEFQSSwgaWYgYXBwbGljYWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgYm9keT86IGFueTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBBUEkgcmVzdWx0LCBpZiBhcHBsaWNhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZXN1bHQ/OiBhbnk7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElBcGlFcnJvck9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucy5tZXNzYWdlKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gb3B0aW9ucy5tZXNzYWdlO1xuICAgICAgICB0aGlzLmlubmVyRXJyb3IgPSBvcHRpb25zLmlubmVyRXJyb3I7XG4gICAgICAgIHRoaXMucmVzcG9uc2UgPSBvcHRpb25zLnJlc3BvbnNlO1xuICAgICAgICB0aGlzLmJvZHkgPSBvcHRpb25zLmJvZHk7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gb3B0aW9ucy5yZXN1bHQ7XG4gICAgfVxufVxuIl19
