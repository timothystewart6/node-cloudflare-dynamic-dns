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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUgsaUNBQXdEO0FBaUJ4RDs7Ozs7R0FLRztBQUNIO0lBSUksY0FBWSxPQUFjO1FBQ3RCLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsTUFBTSxJQUFJLFNBQVMsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDO1FBQzVELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDO1FBQzNCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzQixNQUFNLElBQUksU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQy9CLENBQUM7SUFDTCxDQUFDO0lBQ0wsV0FBQztBQUFELENBckJBLEFBcUJDLElBQUE7QUFyQlksb0JBQUk7QUFrRGpCOzs7OztHQUtHO0FBQ0g7SUFNSSxpQkFBWSxPQUFpQjtRQUN6QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFFckIsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxtQkFBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLE1BQU0sSUFBSSxTQUFTLENBQUMsa0NBQWtDO3NCQUNoQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxDQUFDO1FBQ0wsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDO1FBQ3pCLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLElBQUksU0FBUyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO1FBQ3pDLENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM5QixNQUFNLElBQUksU0FBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3JDLENBQUM7SUFDTCxDQUFDO0lBQ0wsY0FBQztBQUFELENBaENBLEFBZ0NDLElBQUE7QUFoQ1ksMEJBQU8iLCJmaWxlIjoib3B0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29weXJpZ2h0IChDKSAyMDE2IE1pY2hhZWwgS291cmxhc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtpc09iamVjdCwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkfSBmcm9tIFwiLi91dGlsc1wiO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgQ2xvdWRGbGFyZSBBUEkgc2V0dGluZ3MgZm9yIGtleSBhbmQgZW1haWwgYXV0aGVudGljYXRpb24uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGgge1xuICAgIC8qKlxuICAgICAqIFRoZSBBUEkga2V5IGFzc29jaWF0ZWQgd2l0aCB5b3VyIENsb3VkRmxhcmUgYWNjb3VudC5cbiAgICAgKi9cbiAgICBrZXk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbWFpbCBhc3NvY2lhdGVkIHdpdGggeW91ciBDbG91ZEZsYXJlIGFjY291bnQuXG4gICAgICovXG4gICAgZW1haWw6IHN0cmluZztcbn1cblxuLyoqXG4gKiBJbXBsZW1lbnRhdGlvbiBvZiB0aGUgSUF1dGggaW50ZXJmYWNlIHVzZWQgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlc1xuICogdG8gZmllbGRzLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjbGFzcyBBdXRoIGltcGxlbWVudHMgSUF1dGgge1xuICAgIHB1YmxpYyBrZXk6IHN0cmluZztcbiAgICBwdWJsaWMgZW1haWw6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IElBdXRoKSB7XG4gICAgICAgIGlmICghaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJvcHRpb25zLmF1dGggc2hvdWxkIGJlIGFuIE9iamVjdFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5rZXkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9ucy5hdXRoLmtleSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmtleSA9IG9wdGlvbnMua2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc1N0cmluZyhvcHRpb25zLmVtYWlsKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbnMuYXV0aC5lbWFpbCBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVtYWlsID0gb3B0aW9ucy5lbWFpbDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLyoqXG4gKiBUaGUgb3B0aW9ucyBhc3NvY2lhdGVkIHdpdGggdXBkYXRpbmcgYSBDbG91ZEZsYXJlIEROUyByZWNvcmQgd2l0aCBhbiBJUFxuICogYWRkcmVzcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJT3B0aW9ucyB7XG4gICAgLyoqXG4gICAgICogQ2xvdWRGbGFyZSBBUEkgc2V0dGluZ3MgZm9yIGtleSBhbmQgZW1haWwgYXV0aGVudGljYXRpb24uXG4gICAgICovXG4gICAgYXV0aDogSUF1dGg7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmV3IElQIGFkZHJlc3MgZm9yIHRoZSByZWNvcmQuIElmIGxlZnQgdW5kZWZpbmVkLCB0aGUgZXh0ZXJuYWwgSVAgYXNcbiAgICAgKiBkZWZpbmVkIGJ5IG15ZXh0ZXJuYWxpcC5jb20gQVBJIGlzIHVzZWQuXG4gICAgICovXG4gICAgaXA/OiBzdHJpbmc7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgRE5TIHJlY29yZCAoZS5nLiBgc3ViZG9tYWluLmV4YW1wbGUuY29tYCkuXG4gICAgICovXG4gICAgcmVjb3JkTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIENsb3VkRmxhcmUgem9uZSAoZS5nLiBgZXhhbXBsZS5jb21gKS5cbiAgICAgKi9cbiAgICB6b25lTmFtZTogc3RyaW5nO1xufVxuXG4vKipcbiAqIEltcGxlbWVudGF0aW9uIG9mIHRoZSBJT3B0aW9ucyBpbnRlcmZhY2UgdXNlZCB0byBwcm92aWRlIGRlZmF1bHQgdmFsdWVzXG4gKiB0byBmaWVsZHMuXG4gKlxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGNsYXNzIE9wdGlvbnMgaW1wbGVtZW50cyBJT3B0aW9ucyB7XG4gICAgcHVibGljIGF1dGg6IEF1dGg7XG4gICAgcHVibGljIGlwPzogc3RyaW5nO1xuICAgIHB1YmxpYyByZWNvcmROYW1lOiBzdHJpbmc7XG4gICAgcHVibGljIHpvbmVOYW1lOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zOiBJT3B0aW9ucykge1xuICAgICAgICB0aGlzLmF1dGggPSBuZXcgQXV0aChvcHRpb25zLmF1dGgpO1xuXG4gICAgICAgIHRoaXMuaXAgPSBvcHRpb25zLmlwO1xuXG4gICAgICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5pcCkpIHtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQob3B0aW9ucy5pcCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9ucy5pcCBzaG91bGQgYmUgYSBzdHJpbmcgb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyBcIiB1bmRlZmluZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlwID0gb3B0aW9ucy5pcDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNTdHJpbmcob3B0aW9ucy5yZWNvcmROYW1lKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIm9wdGlvbnMucmVjb3JkTmFtZSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlY29yZE5hbWUgPSBvcHRpb25zLnJlY29yZE5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzU3RyaW5nKG9wdGlvbnMuem9uZU5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib3B0aW9ucy56b25lTmFtZSBzaG91bGQgYmUgYSBzdHJpbmdcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnpvbmVOYW1lID0gb3B0aW9ucy56b25lTmFtZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
