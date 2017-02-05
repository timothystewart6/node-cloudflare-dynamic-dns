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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7OztHQWNHOztBQUVILGlDQUFpQztBQUNqQyxxQ0FBdUM7QUFFdkM7O0dBRUc7QUFDSCxJQUFNLEdBQUcsR0FBRyw4QkFBOEIsQ0FBQztBQUUzQzs7Ozs7OztHQU9HO0FBQ0gsdUJBQThCLFFBQytCO0lBQ3pELHNCQUFZLENBQUMsR0FBRyxFQUFFLFVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZO1FBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDUixRQUFRLENBQUMsSUFBSSxnQkFBUSxDQUFDO2dCQUNsQixJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLHFCQUFtQixHQUFLO2dCQUNqQyxRQUFRLFVBQUE7YUFDWCxDQUFDLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQztRQUNYLENBQUM7UUFDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDaEIsUUFBUSxDQUFDLElBQUksZ0JBQVEsQ0FBQztnQkFDbEIsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsUUFBUSxVQUFBO2FBQ1gsQ0FBQyxDQUFDLENBQUM7WUFDSixNQUFNLENBQUM7UUFDWCxDQUFDO1FBQ0QsUUFBUSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUM7QUFwQkQsc0NBb0JDIiwiZmlsZSI6ImlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDb3B5cmlnaHQgKEMpIDIwMTYgTWljaGFlbCBLb3VybGFzXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQge0FwaUVycm9yfSBmcm9tIFwiLi9lcnJvclwiO1xuaW1wb3J0IHtodHRwc1JlcXVlc3R9IGZyb20gXCIuL3JlcXVlc3RcIjtcblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5jb25zdCBVUkwgPSBcImh0dHBzOi8vbXlleHRlcm5hbGlwLmNvbS9yYXdcIjtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50IGV4dGVybmFsIElQIGZyb20gdGhlIG15ZXh0ZXJuYWxpcC5jb20gQVBJLlxuICpcbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2l0aCBhbnkgZXJyb3IgdGhhdCBvY2N1cnJlZCBhc1xuICogICAgICAgICAgICAgICAgIHdlbGwgYXMgdGhlIElQIGFkZHJlc3MgcmV0dXJuZWQgZnJvbSB0aGUgQVBJLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRFeHRlcm5hbElwKGNhbGxiYWNrOiAoZXJyb3I/OiBFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXA/OiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBodHRwc1JlcXVlc3QoVVJMLCAoZXJyb3IsIHJlc3BvbnNlLCByZXNwb25zZUJvZHkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgQXBpRXJyb3Ioe1xuICAgICAgICAgICAgICAgIGJvZHk6IHJlc3BvbnNlQm9keSxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRXJyb3IgYWNjZXNzaW5nICR7VVJMfWAsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJlc3BvbnNlQm9keSkge1xuICAgICAgICAgICAgY2FsbGJhY2sobmV3IEFwaUVycm9yKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk1pc3NpbmcgcmVzcG9uc2UgYm9keVwiLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCByZXNwb25zZUJvZHkudHJpbSgpKTtcbiAgICB9KTtcbn1cbiJdfQ==
