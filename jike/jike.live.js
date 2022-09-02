/*
 * @LastEditors: vic-hu
 * @Description:
 * @FilePath: /jike/jike.live.js
 * @Date: 2022-09-02 19:56:59
 * @LastEditTime: 2022-09-02 19:57:17
 * @Author: vic-hu
 */
let body = JSON.parse($response.body);

if (/^https:\/\/api\.ruguoapp\.com\/1\.0\/recommendFeed\/list/.test($request.url)) {
  body.data = body.data.filter((d) => !d.live && !d.lives);
  body = JSON.stringify(body);
}

$done({ body });