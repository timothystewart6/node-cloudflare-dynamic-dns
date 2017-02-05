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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7O0dBY0c7O0FBRUgsMkNBQXFEO0FBQ3JELDJCQUFtQztBQUNuQyxxQ0FBNEM7QUFFNUM7Ozs7Ozs7R0FPRztBQUNILGdCQUF1QixPQUFpQixFQUNqQixRQUErQztJQUM1RCxJQUFBLG1DQUF1RCxFQUF0RCxjQUFJLEVBQUUsVUFBRSxFQUFFLDBCQUFVLEVBQUUsc0JBQVEsQ0FBeUI7SUFFOUQsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNMLG9DQUF1QixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxVQUFDLEtBQUs7WUFDMUQsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDUixRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hCLE1BQU0sQ0FBQztZQUNYLENBQUM7WUFDRCxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osa0JBQWEsQ0FBQyxVQUFDLEtBQUssRUFBRSxVQUFVO1lBQzVCLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztnQkFDOUMsTUFBTSxDQUFDO1lBQ1gsQ0FBQztZQUNELG9DQUF1QixDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFDdEMsVUFBQyxNQUFNO2dCQUNILEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ1QsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNqQixNQUFNLENBQUM7Z0JBQ1gsQ0FBQztnQkFDRCxRQUFRLENBQUMsU0FBUyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztBQUNMLENBQUM7QUE1QkQsd0JBNEJDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoQykgMjAxNC0yMDE2IE1pY2hhZWwgS291cmxhc1xuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHtjcmVhdGVPclVwZGF0ZURuc1JlY29yZH0gZnJvbSBcIi4vY2xvdWRmbGFyZVwiO1xuaW1wb3J0IHtnZXRFeHRlcm5hbElwfSBmcm9tIFwiLi9pcFwiO1xuaW1wb3J0IHtJT3B0aW9ucywgT3B0aW9uc30gZnJvbSBcIi4vb3B0aW9uc1wiO1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHNwZWNpZmllZCBDbG91ZEZsYXJlIEROUyByZWNvcmQgd2l0aCBhbiBJUCBhZGRyZXNzLCBjcmVhdGluZyBpdFxuICogaWYgaXQgZG9lcyBub3QgZXhpc3QuXG4gKlxuICogQHBhcmFtIG9wdGlvbnMgVGhlIG9wdGlvbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSB1cGRhdGUgcmVxdWVzdC5cbiAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2l0aCBhbnkgZXJyb3IgdGhhdCBvY2N1cnJlZCBhc1xuICogICAgICAgICAgICAgICAgIHdlbGwgYXMgdGhlIG5ldyBJUCBhZGRyZXNzIGlmIHRoZSByZXF1ZXN0IHN1Y2NlZWRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZShvcHRpb25zOiBJT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IChlcnI/OiBFcnJvciwgbmV3SXA/OiBzdHJpbmcpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBjb25zdCB7YXV0aCwgaXAsIHJlY29yZE5hbWUsIHpvbmVOYW1lfSA9IG5ldyBPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgaWYgKGlwKSB7XG4gICAgICAgIGNyZWF0ZU9yVXBkYXRlRG5zUmVjb3JkKGF1dGgsIGlwLCByZWNvcmROYW1lLCB6b25lTmFtZSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBpcCk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldEV4dGVybmFsSXAoKGVycm9yLCBleHRlcm5hbElwKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgfHwgIWV4dGVybmFsSXApIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciB8fCBuZXcgRXJyb3IoXCJVbmtub3duIGVycm9yXCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjcmVhdGVPclVwZGF0ZURuc1JlY29yZChhdXRoLCBleHRlcm5hbElwLCByZWNvcmROYW1lLCB6b25lTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChlcnJvcjIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVycm9yMik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCBleHRlcm5hbElwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=
