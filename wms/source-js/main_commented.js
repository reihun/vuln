// =====================================
// WEBPACK BUNDLE - MAIN MODULES
// =====================================
// File này chứa các module chính của ứng dụng được bundle bởi webpack
// Cấu trúc: Bootstrap + Module Definitions + Entry Point

// =====================================
// WEBPACK BOOTSTRAP - JSONP LOADER  
// =====================================
! function (l) {
  // Callback xử lý chunk tải về từ JSONP
  function n(n) {
    for (var t, a, o = n[0], s = n[1], r = n[2], c = 0, p = []; c < o.length; c++) a = o[c],
      u[a] &&
      p.push(u[a][0]),
      u[a] = 0;
    for (t in s) Object.prototype.hasOwnProperty.call(s, t) &&
      (l[t] = s[t]);
    for (d && d(n); p.length;) p.shift()();
    return i.push.apply(i, r || []),
      e()
  }

  // Vòng lặp xử lý hàng đợi chunk
  function e() {
    for (var l, n = 0; n < i.length; n++) {
      for (var e = i[n], t = !0, o = 1; o < e.length; o++) {
        var s = e[o];
        0 !== u[s] &&
          (t = !1)
      }
      t &&
        (i.splice(n--, 1), l = a(a.s = e[0]))
    }
    return l
  }
  
  // Cache module, trạng thái chunk và hàng đợi
  var t = {},
    u = {
      2: 0,
      3: 0
    },
    i = [];

  // Trình nạp module (require)
  function a(n) {
    if (t[n]) return t[n].exports;
    var e = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return l[n].call(e.exports, e, e.exports, a),
      e.l = !0,
      e.exports
  }
  
  // Helper webpack cho chunk loading
  a.e = function (l) {
      var n = [],
        e = u[l];
      // ... code tiếp theo
  };

  // Đăng ký các helper webpack khác
  a.m = l,
    a.c = t,
    a.d = function (l, n, e) {
      a.o(l, n) ||
        Object.defineProperty(l, n, {
          configurable: !1,
          enumerable: !0,
          get: e
        })
    },
    // ... các helper khác

  // Thiết lập JSONP để nạp chunk bất đồng bộ
  var o = window.webpackJsonp = window.webpackJsonp || [],
    s = o.push.bind(o);
  o.push = n,
    o = o.slice();
  for (var r = 0; r < o.length; r++) n(o[r]);
  var d = s;
  
  // Khởi động: đẩy entry và chạy
  i.push([776, 1]),
    e()
}(
// =====================================
// MODULE DEFINITIONS - BẮT ĐẦU
// =====================================
// Từ đây là các module được định nghĩa theo ID
[, , , , ,
    function (l, n, e) {
      'use strict';
      // Module 5: Angular directives/components
      // ... nội dung module
    },
    // ... các module khác theo thứ tự ID
]);

// =====================================
// CÁC PHẦN CHÍNH TRONG MODULE DEFINITIONS:
// =====================================
// - Angular Components & Directives  
// - Services & Providers
// - HTTP Interceptors
// - Routing Configuration 

// - UI Components (Material, Bootstrap)
// - Business Logic Modules
// - Utility Functions
// - Third-party Library Integrations
// =====================================
