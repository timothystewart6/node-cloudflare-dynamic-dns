/// <reference types="node" />
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
import * as http from "http";
/**
 * Creates an HTTPS request to the specified URL.
 *
 * @param url The URL of the HTTP request.
 * @param callback Called when a response is received with any error that
 *                 occurred as well as the response and response body if one is
 *                 received.
 * @param method The HTTP method associated with the request.
 * @param headers An object containing the headers of the request.
 * @param body The body of the request.
 *
 * @private
 */
export declare function httpsRequest(url: string, callback: (error?: Error, response?: http.IncomingMessage, body?: string) => void, method?: string, headers?: {
    [name: string]: string;
}, body?: string): void;
