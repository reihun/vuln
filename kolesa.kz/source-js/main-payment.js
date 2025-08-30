!function () {
  'use strict';
  var e,
  i = {
    4845: function (e, i, o) {
      function r(e, i) {
        var o = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          i &&
          (
            r = r.filter(
              (
                function (i) {
                  return Object.getOwnPropertyDescriptor(e, i).enumerable
                }
              )
            )
          ),
          o.push.apply(o, r)
        }
        return o
      }
      function n(e) {
        for (var i = 1; i < arguments.length; i++) {
          var o = null != arguments[i] ? arguments[i] : {
          };
          i % 2 ? r(Object(o), !0).forEach((function (i) {
            a(e, i, o[i])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : r(Object(o)).forEach(
            (
              function (i) {
                Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(o, i))
              }
            )
          )
        }
        return e
      }
      function t(e) {
        return t = 'function' == typeof Symbol &&
        'symbol' == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
         : function (e) {
          return e &&
          'function' == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype ? 'symbol' : typeof e
        },
        t(e)
      }
      function a(e, i, o) {
        return i in e ? Object.defineProperty(e, i, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[i] = o,
        e
      }
      function s(e, i) {
        (null == i || i > e.length) &&
        (i = e.length);
        for (var o = 0, r = new Array(i); o < i; o++) r[o] = e[o];
        return r
      }
      var l = function (e) {
        var i = document.createElement('div');
        i.innerHTML = e;
        var o = i.children;
        return o.length > 1 ? function (e) {
          return function (e) {
            if (Array.isArray(e)) return s(e)
          }(e) ||
          function (e) {
            if (
              'undefined' != typeof Symbol &&
              null != e[Symbol.iterator] ||
              null != e['@@iterator']
            ) return Array.from(e)
          }(e) ||
          function (e, i) {
            if (e) {
              if ('string' == typeof e) return s(e, i);
              var o = Object.prototype.toString.call(e).slice(8, - 1);
              return 'Object' === o &&
              e.constructor &&
              (o = e.constructor.name),
              'Map' === o ||
              'Set' === o ? Array.from(e) : 'Arguments' === o ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? s(e, i) : void 0
            }
          }(e) ||
          function () {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
            )
          }()
        }(o) : o[0]
      },
      u = function (e) {
        return e.replace(/\n/g, '').replace(/\t+</g, '<').replace(/>\t+</g, '><').replace(/>\t +$/g, '>').replace(/[\n\t ]+/g, ' ')
      },
      d = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : void 0 !== o.g ? o.g : 'undefined' != typeof self ? self : {
      },
      b = {
        exports: {
        }
      };
      !function (e, i) {
        !function (o, r) {
          var n = 'function',
          a = 'undefined',
          s = 'object',
          l = 'string',
          u = 'model',
          d = 'name',
          b = 'type',
          c = 'vendor',
          p = 'version',
          w = 'architecture',
          m = 'console',
          f = 'mobile',
          h = 'tablet',
          g = 'smarttv',
          v = 'wearable',
          y = 'embedded',
          x = 'Amazon',
          k = 'Apple',
          O = 'ASUS',
          S = 'BlackBerry',
          _ = 'Google',
          j = 'Huawei',
          C = 'LG',
          E = 'Microsoft',
          T = 'Motorola',
          A = 'Samsung',
          z = 'Sony',
          P = 'Xiaomi',
          q = 'Zebra',
          N = 'Facebook',
          U = function (e) {
            for (var i = {}, o = 0; o < e.length; o++) i[e[o].toUpperCase()] = e[o];
            return i
          },
          M = function (e, i) {
            return t(e) === l &&
            - 1 !== B(i).indexOf(B(e))
          },
          B = function (e) {
            return e.toLowerCase()
          },
          L = function (e, i) {
            if (t(e) === l) return e = e.replace(/^\s\s*/, '').replace(/\s\s*$/, ''),
            t(i) === a ? e : e.substring(0, 255)
          },
          R = function (e, i) {
            for (var o, a, l, u, d, b, c = 0; c < i.length && !d; ) {
              var p = i[c],
              w = i[c + 1];
              for (o = a = 0; o < p.length && !d; ) if (d = p[o++].exec(e)) for (l = 0; l < w.length; l++) b = d[++a],
              t(u = w[l]) === s &&
              u.length > 0 ? 2 === u.length ? t(u[1]) == n ? this[u[0]] = u[1].call(this, b) : this[u[0]] = u[1] : 3 === u.length ? t(u[1]) !== n ||
              u[1].exec &&
              u[1].test ? this[u[0]] = b ? b.replace(u[1], u[2]) : r : this[u[0]] = b ? u[1].call(this, b, u[2]) : r : 4 === u.length &&
              (this[u[0]] = b ? u[3].call(this, b.replace(u[1], u[2])) : r) : this[u] = b ||
              r;
              c += 2
            }
          },
          F = function (e, i) {
            for (var o in i) if (t(i[o]) === s && i[o].length > 0) {
              for (var n = 0; n < i[o].length; n++) if (M(i[o][n], e)) return '?' === o ? r : o
            } else if (M(i[o], e)) return '?' === o ? r : o;
            return e
          },
          D = {
            ME: '4.90',
            'NT 3.11': 'NT3.51',
            'NT 4.0': 'NT4.0',
            2000: 'NT 5.0',
            XP: [
              'NT 5.1',
              'NT 5.2'
            ],
            Vista: 'NT 6.0',
            7: 'NT 6.1',
            8: 'NT 6.2',
            8.1: 'NT 6.3',
            10: [
              'NT 6.4',
              'NT 10.0'
            ],
            RT: 'ARM'
          },
          I = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [
                p,
                [
                  d,
                  'Chrome'
                ]
              ],
              [
                /edg(?:e|ios|a)?\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Edge'
                ]
              ],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /opios[\/ ]+([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Opera Mini'
                ]
              ],
              [
                /\bopr\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Opera'
                ]
              ],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'UCBrowser'
                ]
              ],
              [
                /\bqbcore\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'WeChat(Win) Desktop'
                ]
              ],
              [
                /micromessenger\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'WeChat'
                ]
              ],
              [
                /konqueror\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Konqueror'
                ]
              ],
              [
                /trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i
              ],
              [
                p,
                [
                  d,
                  'IE'
                ]
              ],
              [
                /yabrowser\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Yandex'
                ]
              ],
              [
                /(avast|avg)\/([\w\.]+)/i
              ],
              [
                [d,
                /(.+)/,
                '$1 Secure Browser'],
                p
              ],
              [
                /\bfocus\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Firefox Focus'
                ]
              ],
              [
                /\bopt\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Opera Touch'
                ]
              ],
              [
                /coc_coc\w+\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Coc Coc'
                ]
              ],
              [
                /dolfin\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Dolphin'
                ]
              ],
              [
                /coast\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Opera Coast'
                ]
              ],
              [
                /miuibrowser\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'MIUI Browser'
                ]
              ],
              [
                /fxios\/([-\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Firefox'
                ]
              ],
              [
                /\bqihu|(qi?ho?o?|360)browser/i
              ],
              [
                [d,
                '360 Browser']
              ],
              [
                /(oculus|samsung|sailfish)browser\/([\w\.]+)/i
              ],
              [
                [d,
                /(.+)/,
                '$1 Browser'],
                p
              ],
              [
                /(comodo_dragon)\/([\w\.]+)/i
              ],
              [
                [d,
                /_/g,
                ' '],
                p
              ],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i
              ],
              [
                d
              ],
              [
                /((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i
              ],
              [
                [d,
                N],
                p
              ],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /\bgsa\/([\w\.]+) .*safari\//i
              ],
              [
                p,
                [
                  d,
                  'GSA'
                ]
              ],
              [
                /headlesschrome(?:\/([\w\.]+)| )/i
              ],
              [
                p,
                [
                  d,
                  'Chrome Headless'
                ]
              ],
              [
                / wv\).+(chrome)\/([\w\.]+)/i
              ],
              [
                [d,
                'Chrome WebView'],
                p
              ],
              [
                /droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i
              ],
              [
                p,
                [
                  d,
                  'Android Browser'
                ]
              ],
              [
                /(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /version\/([\w\.]+) .*mobile\/\w+ (safari)/i
              ],
              [
                p,
                [
                  d,
                  'Mobile Safari'
                ]
              ],
              [
                /version\/([\w\.]+) .*(mobile ?safari|safari)/i
              ],
              [
                p,
                d
              ],
              [
                /webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i
              ],
              [
                d,
                [
                  p,
                  F,
                  {
                    '1.0': '/8',
                    1.2: '/1',
                    1.3: '/3',
                    '2.0': '/412',
                    '2.0.2': '/416',
                    '2.0.3': '/417',
                    '2.0.4': '/419',
                    '?': '/'
                  }
                ]
              ],
              [
                /(webkit|khtml)\/([\w\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /(navigator|netscape\d?)\/([-\w\.]+)/i
              ],
              [
                [d,
                'Netscape'],
                p
              ],
              [
                /mobile vr; rv:([\w\.]+)\).+firefox/i
              ],
              [
                p,
                [
                  d,
                  'Firefox Reality'
                ]
              ],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i
              ],
              [
                d,
                p
              ]
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [
                [w,
                'amd64']
              ],
              [
                /(ia32(?=;))/i
              ],
              [
                [w,
                B]
              ],
              [
                /((?:i[346]|x)86)[;\)]/i
              ],
              [
                [w,
                'ia32']
              ],
              [
                /\b(aarch64|arm(v?8e?l?|_?64))\b/i
              ],
              [
                [w,
                'arm64']
              ],
              [
                /\b(arm(?:v[67])?ht?n?[fl]p?)\b/i
              ],
              [
                [w,
                'armhf']
              ],
              [
                /windows (ce|mobile); ppc;/i
              ],
              [
                [w,
                'arm']
              ],
              [
                /((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i
              ],
              [
                [w,
                /ower/,
                '',
                B]
              ],
              [
                /(sun4\w)[;\)]/i
              ],
              [
                [w,
                'sparc']
              ],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i
              ],
              [
                [w,
                B]
              ]
            ],
            device: [
              [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
              [
                u,
                [
                  c,
                  A
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i
              ],
              [
                u,
                [
                  c,
                  A
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\((ip(?:hone|od)[\w ]*);/i
              ],
              [
                u,
                [
                  c,
                  k
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i
              ],
              [
                u,
                [
                  c,
                  k
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i
              ],
              [
                u,
                [
                  c,
                  j
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}-[atu]?[ln][01259x][012359][an]?)\b(?!.+d\/s)/i
              ],
              [
                u,
                [
                  c,
                  j
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i
              ],
              [
                [u,
                /_/g,
                ' '],
                [
                  c,
                  P
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i
              ],
              [
                [u,
                /_/g,
                ' '],
                [
                  c,
                  P
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i
              ],
              [
                u,
                [
                  c,
                  'OPPO'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /vivo (\w+)(?: bui|\))/i,
                /\b(v[12]\d{3}\w?[at])(?: bui|;)/i
              ],
              [
                u,
                [
                  c,
                  'Vivo'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(rmx[12]\d{3})(?: bui|;|\))/i
              ],
              [
                u,
                [
                  c,
                  'Realme'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i
              ],
              [
                u,
                [
                  c,
                  T
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(mz60\d|xoom[2 ]{0,2}) build\//i
              ],
              [
                u,
                [
                  c,
                  T
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i
              ],
              [
                u,
                [
                  c,
                  C
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i
              ],
              [
                u,
                [
                  c,
                  C
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i
              ],
              [
                u,
                [
                  c,
                  'Lenovo'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(?:maemo|nokia).*(n900|lumia \d+)/i,
                /nokia[-_ ]?([-\w\.]*)/i
              ],
              [
                [u,
                /_/g,
                ' '],
                [
                  c,
                  'Nokia'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(pixel c)\b/i
              ],
              [
                u,
                [
                  c,
                  _
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i
              ],
              [
                u,
                [
                  c,
                  _
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /droid.+ ([c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i
              ],
              [
                u,
                [
                  c,
                  z
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /sony tablet [ps]/i,
                /\b(?:sony)?sgp\w+(?: bui|\))/i
              ],
              [
                [u,
                'Xperia Tablet'],
                [
                  c,
                  z
                ],
                [
                  b,
                  h
                ]
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i
              ],
              [
                u,
                [
                  c,
                  'OnePlus'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i
              ],
              [
                u,
                [
                  c,
                  x
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i
              ],
              [
                [u,
                /(.+)/g,
                'Fire Phone $1'],
                [
                  c,
                  x
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(playbook);[-\w\),; ]+(rim)/i
              ],
              [
                u,
                c,
                [
                  b,
                  h
                ]
              ],
              [
                /\b((?:bb[a-f]|st[hv])100-\d)/i,
                /\(bb10; (\w+)/i
              ],
              [
                u,
                [
                  c,
                  S
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i
              ],
              [
                u,
                [
                  c,
                  O
                ],
                [
                  b,
                  h
                ]
              ],
              [
                / (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i
              ],
              [
                u,
                [
                  c,
                  O
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(nexus 9)/i
              ],
              [
                u,
                [
                  c,
                  'HTC'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony)[-_ ]?([-\w]*)/i
              ],
              [
                c,
                [
                  u,
                  /_/g,
                  ' '
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /droid.+; ([ab][1-7]-?[0178a]\d\d?)/i
              ],
              [
                u,
                [
                  c,
                  'Acer'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /droid.+; (m[1-5] note) bui/i,
                /\bmz-([-\w]{2,})/i
              ],
              [
                u,
                [
                  c,
                  'Meizu'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(sh-?[altvz]?\d\d[a-ekm]?)/i
              ],
              [
                u,
                [
                  c,
                  'Sharp'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i
              ],
              [
                c,
                u,
                [
                  b,
                  f
                ]
              ],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i
              ],
              [
                c,
                u,
                [
                  b,
                  h
                ]
              ],
              [
                /(surface duo)/i
              ],
              [
                u,
                [
                  c,
                  E
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /droid [\d\.]+; (fp\du?)(?: b|\))/i
              ],
              [
                u,
                [
                  c,
                  'Fairphone'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(u304aa)/i
              ],
              [
                u,
                [
                  c,
                  'AT&T'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\bsie-(\w*)/i
              ],
              [
                u,
                [
                  c,
                  'Siemens'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(rct\w+) b/i
              ],
              [
                u,
                [
                  c,
                  'RCA'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(venue[\d ]{2,7}) b/i
              ],
              [
                u,
                [
                  c,
                  'Dell'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(q(?:mv|ta)\w+) b/i
              ],
              [
                u,
                [
                  c,
                  'Verizon'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i
              ],
              [
                u,
                [
                  c,
                  'Barnes & Noble'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(tm\d{3}\w+) b/i
              ],
              [
                u,
                [
                  c,
                  'NuVision'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(k88) b/i
              ],
              [
                u,
                [
                  c,
                  'ZTE'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(nx\d{3}j) b/i
              ],
              [
                u,
                [
                  c,
                  'ZTE'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(gen\d{3}) b.+49h/i
              ],
              [
                u,
                [
                  c,
                  'Swiss'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(zur\d{3}) b/i
              ],
              [
                u,
                [
                  c,
                  'Swiss'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b((zeki)?tb.*\b) b/i
              ],
              [
                u,
                [
                  c,
                  'Zeki'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b([yr]\d{2}) b/i,
                /\b(dragon[- ]+touch |dt)(\w{5}) b/i
              ],
              [
                [c,
                'Dragon Touch'],
                u,
                [
                  b,
                  h
                ]
              ],
              [
                /\b(ns-?\w{0,9}) b/i
              ],
              [
                u,
                [
                  c,
                  'Insignia'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b((nxa|next)-?\w{0,9}) b/i
              ],
              [
                u,
                [
                  c,
                  'NextBook'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i
              ],
              [
                [c,
                'Voice'],
                u,
                [
                  b,
                  f
                ]
              ],
              [
                /\b(lvtel\-)?(v1[12]) b/i
              ],
              [
                [c,
                'LvTel'],
                u,
                [
                  b,
                  f
                ]
              ],
              [
                /\b(ph-1) /i
              ],
              [
                u,
                [
                  c,
                  'Essential'
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /\b(v(100md|700na|7011|917g).*\b) b/i
              ],
              [
                u,
                [
                  c,
                  'Envizen'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\b(trio[-\w\. ]+) b/i
              ],
              [
                u,
                [
                  c,
                  'MachSpeed'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /\btu_(1491) b/i
              ],
              [
                u,
                [
                  c,
                  'Rotor'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(shield[\w ]+) b/i
              ],
              [
                u,
                [
                  c,
                  'Nvidia'
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /(sprint) (\w+)/i
              ],
              [
                c,
                u,
                [
                  b,
                  f
                ]
              ],
              [
                /(kin\.[onetw]{3})/i
              ],
              [
                [u,
                /\./g,
                ' '],
                [
                  c,
                  E
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i
              ],
              [
                u,
                [
                  c,
                  q
                ],
                [
                  b,
                  h
                ]
              ],
              [
                /droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i
              ],
              [
                u,
                [
                  c,
                  q
                ],
                [
                  b,
                  f
                ]
              ],
              [
                /(ouya)/i,
                /(nintendo) ([wids3utch]+)/i
              ],
              [
                c,
                u,
                [
                  b,
                  m
                ]
              ],
              [
                /droid.+; (shield) bui/i
              ],
              [
                u,
                [
                  c,
                  'Nvidia'
                ],
                [
                  b,
                  m
                ]
              ],
              [
                /(playstation [345portablevi]+)/i
              ],
              [
                u,
                [
                  c,
                  z
                ],
                [
                  b,
                  m
                ]
              ],
              [
                /\b(xbox(?: one)?(?!; xbox))[\); ]/i
              ],
              [
                u,
                [
                  c,
                  E
                ],
                [
                  b,
                  m
                ]
              ],
              [
                /smart-tv.+(samsung)/i
              ],
              [
                c,
                [
                  b,
                  g
                ]
              ],
              [
                /hbbtv.+maple;(\d+)/i
              ],
              [
                [u,
                /^/,
                'SmartTV'],
                [
                  c,
                  A
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i
              ],
              [
                [c,
                C],
                [
                  b,
                  g
                ]
              ],
              [
                /(apple) ?tv/i
              ],
              [
                c,
                [
                  u,
                  'Apple TV'
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /crkey/i
              ],
              [
                [u,
                'Chromecast'],
                [
                  c,
                  _
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /droid.+aft(\w)( bui|\))/i
              ],
              [
                u,
                [
                  c,
                  x
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /\(dtv[\);].+(aquos)/i
              ],
              [
                u,
                [
                  c,
                  'Sharp'
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i
              ],
              [
                [c,
                L],
                [
                  u,
                  L
                ],
                [
                  b,
                  g
                ]
              ],
              [
                /\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i
              ],
              [
                [b,
                g]
              ],
              [
                /((pebble))app/i
              ],
              [
                c,
                u,
                [
                  b,
                  v
                ]
              ],
              [
                /droid.+; (glass) \d/i
              ],
              [
                u,
                [
                  c,
                  _
                ],
                [
                  b,
                  v
                ]
              ],
              [
                /droid.+; (wt63?0{2,3})\)/i
              ],
              [
                u,
                [
                  c,
                  q
                ],
                [
                  b,
                  v
                ]
              ],
              [
                /(quest( 2)?)/i
              ],
              [
                u,
                [
                  c,
                  N
                ],
                [
                  b,
                  v
                ]
              ],
              [
                /(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i
              ],
              [
                c,
                [
                  b,
                  y
                ]
              ],
              [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i
              ],
              [
                u,
                [
                  b,
                  f
                ]
              ],
              [
                /droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i
              ],
              [
                u,
                [
                  b,
                  h
                ]
              ],
              [
                /\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i
              ],
              [
                [b,
                h]
              ],
              [
                /(phone|mobile(?:[;\/]| safari)|pda(?=.+windows ce))/i
              ],
              [
                [b,
                f]
              ],
              [
                /(android[-\w\. ]{0,9});.+buil/i
              ],
              [
                u,
                [
                  c,
                  'Generic'
                ]
              ]
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [
                p,
                [
                  d,
                  'EdgeHTML'
                ]
              ],
              [
                /webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Blink'
                ]
              ],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i
              ],
              [
                d,
                p
              ],
              [
                /rv\:([\w\.]{1,9})\b.+(gecko)/i
              ],
              [
                p,
                d
              ]
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [
                d,
                p
              ],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i
              ],
              [
                d,
                [
                  p,
                  F,
                  D
                ]
              ],
              [
                /(win(?=3|9|n)|win 9x )([nt\d\.]+)/i
              ],
              [
                [d,
                'Windows'],
                [
                  p,
                  F,
                  D
                ]
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i
              ],
              [
                [p,
                /_/g,
                '.'],
                [
                  d,
                  'iOS'
                ]
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i
              ],
              [
                [d,
                'Mac OS'],
                [
                  p,
                  /_/g,
                  '.'
                ]
              ],
              [
                /droid ([\w\.]+)\b.+(android[- ]x86)/i
              ],
              [
                p,
                d
              ],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i
              ],
              [
                d,
                p
              ],
              [
                /\(bb(10);/i
              ],
              [
                p,
                [
                  d,
                  S
                ]
              ],
              [
                /(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i
              ],
              [
                p,
                [
                  d,
                  'Symbian'
                ]
              ],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Firefox OS'
                ]
              ],
              [
                /web0s;.+rt(tv)/i,
                /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'webOS'
                ]
              ],
              [
                /crkey\/([\d\.]+)/i
              ],
              [
                p,
                [
                  d,
                  'Chromecast'
                ]
              ],
              [
                /(cros) [\w]+ ([\w\.]+\w)/i
              ],
              [
                [d,
                'Chromium OS'],
                p
              ],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i
              ],
              [
                d,
                p
              ],
              [
                /(sunos) ?([\w\.\d]*)/i
              ],
              [
                [d,
                'Solaris'],
                p
              ],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i
              ],
              [
                d,
                p
              ]
            ]
          },
          V = function e(i, n) {
            if (t(i) === s && (n = i, i = r), !(this instanceof e)) return new e(i, n).getResult();
            var u = i ||
            (
              t(o) !== a &&
              o.navigator &&
              o.navigator.userAgent ? o.navigator.userAgent : ''
            ),
            d = n ? function (e, i) {
              var o = {};
              for (var r in e) i[r] &&
              i[r].length % 2 == 0 ? o[r] = i[r].concat(e[r]) : o[r] = e[r];
              return o
            }(I, n) : I;
            return this.getBrowser = function () {
              var e,
              i = {};
              return i.name = r,
              i.version = r,
              R.call(i, u, d.browser),
              i.major = t(e = i.version) === l ? e.replace(/[^\d\.]/g, '').split('.') [0] : r,
              i
            },
            this.getCPU = function () {
              var e = {};
              return e.architecture = r,
              R.call(e, u, d.cpu),
              e
            },
            this.getDevice = function () {
              var e = {};
              return e.vendor = r,
              e.model = r,
              e.type = r,
              R.call(e, u, d.device),
              e
            },
            this.getEngine = function () {
              var e = {};
              return e.name = r,
              e.version = r,
              R.call(e, u, d.engine),
              e
            },
            this.getOS = function () {
              var e = {};
              return e.name = r,
              e.version = r,
              R.call(e, u, d.os),
              e
            },
            this.getResult = function () {
              return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
              }
            },
            this.getUA = function () {
              return u
            },
            this.setUA = function (e) {
              return u = t(e) === l &&
              e.length > 255 ? L(e, 255) : e,
              this
            },
            this.setUA(u),
            this
          };
          V.VERSION = '1.0.2',
          V.BROWSER = U([d,
          p,
          'major']),
          V.CPU = U([w]),
          V.DEVICE = U([u,
          c,
          b,
          m,
          f,
          g,
          h,
          v,
          y]),
          V.ENGINE = V.OS = U([d,
          p]),
          e.exports &&
          (i = e.exports = V),
          i.UAParser = V;
          var $ = t(o) !== a &&
          (o.jQuery || o.Zepto);
          if ($ && !$.ua) {
            var W = new V;
            $.ua = W.getResult(),
            $.ua.get = function () {
              return W.getUA()
            },
            $.ua.set = function (e) {
              W.setUA(e);
              var i = W.getResult();
              for (var o in i) $.ua[o] = i[o]
            }
          }
        }(
          'object' === ('undefined' == typeof window ? 'undefined' : t(window)) ? window : d
        )
      }(b, b.exports);
      var c = {
        Chrome: 57,
        Edge: 39,
        Safari: 10,
        'Mobile Safari': 10,
        Opera: 50,
        Firefox: 50,
        Vivaldi: 1,
        IE: !1,
        Instagram: 50,
        Facebook: 178
      },
      p = {
        12: 0.1,
        13: 21,
        14: 31,
        15: 39,
        16: 41,
        17: 42,
        18: 44
      },
      w = function (e, i, o, r) {
        var n = e.os.name,
        a = e.os.version,
        s = e.browser.version,
        l = e.browser.major;
        'Edge' === i &&
        l <= 18 &&
        (l = p[l]),
        'Firefox' === i &&
        'iOS' === n &&
        (i = 'Mobile Safari', s = a, l = a.substring(0, a.indexOf('.')));
        var u = !1,
        d = function (e, i) {
          var o = arguments.length > 2 &&
          void 0 !== arguments[2] &&
          arguments[2],
          r = !1;
          return i in e ? e[i] ||
          (r = !0) : o ||
          (r = !0),
          r
        }(o, i, r);
        if (d) u = !0;
         else if (i in o) {
          var b = o[i];
          if ('object' === t(b)) {
            var c = b.major,
            w = b.minor;
            (l < c || l === c && s.replace(/[^\d.]/g, '').split('.') [1] < w) &&
            (u = !0)
          } else l < b &&
          (u = !0)
        }
        return u
      },
      m = function (e) {
        if (!e) return !0;
        var i = document.createElement('div'),
        o = [
          'khtml',
          'ms',
          'o',
          'moz',
          'webkit'
        ],
        r = o.length;
        if (e in i.style) return !0;
        for (
          e = e.replace(/^[a-z]/, (function (e) {
            return e.toUpperCase()
          }));
          r--;
        ) if (o[r] + e in i.style) return !0;
        return !1
      },
      f = (new (0, b.exports)).getResult(),
      h = 'web';
      'Android' === f.os.name ? h = 'android' : 'iOS' === f.os.name &&
      (h = 'iOS');
      var g = l(
        u(
          '\n<button\n    class="popup-update-browser__close" \n    type="button"\n>\n    <svg \n        class="popup-update-browser__close-icon" \n        viewBox="0 0 24 24" \n        xmlns="http://www.w3.org/2000/svg"\n        fill="#1C1819"\n    >\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3279 5L12.001 11.3265L5.67306 5L5 5.67206L11.3269 11.9995L5 18.326L5.67306 19L12.001 12.6725L18.3279 19L19 18.326L12.6731 11.9995L19 5.67206L18.3279 5Z"/>\n    </svg>\n</button>'
        )
      ),
      v = l('<div class="popup-update-browser__overlay"></div>'),
      y = l(
        u(
          '\n<div class="popup-update-browser__content">\n        <h2 class="popup-update-browser__title">\n            Вам следует обновить браузер\n        </h2>\n\n        <p class="popup-update-browser__description">\n            Он устарел и может работать неправильно. Установите&nbsp;один из этих браузеров:\n        </p>\n\n        <ul class="popup-update-browser__list">\n            '.concat(
            [{
              name: 'Chrome',
              logoSrc: 'https://krisha-photos.kcdn.online/content/fe/81462556030da350352-chrome.png',
              web: 'https://www.google.com/intl/ru/chrome/',
              android: 'https://play.google.com/store/apps/details?id=com.android.chrome&hl=ru',
              iOS: 'https://apps.apple.com/us/app/google-chrome/id535886823'
            },
            {
              name: 'Firefox',
              logoSrc: 'https://krisha-photos.kcdn.online/content/81/87862556024662cd340-firefo.png',
              web: 'https://www.mozilla.org/ru/firefox/new/',
              android: 'https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=ru&gl=US',
              iOS: 'https://apps.apple.com/us/app/firefox-private-safe-browser/id989804926'
            },
            {
              name: 'Edge',
              logoSrc: 'https://krisha-photos.kcdn.online/content/de/912625560066c27d310-ms-edge.png',
              web: 'https://www.microsoft.com/ru-ru/edge',
              android: 'https://play.google.com/store/apps/details?id=com.microsoft.emmx&hl=ru&gl=US',
              iOS: 'https://apps.apple.com/us/app/microsoft-edge-web-browser/id1288723196'
            }
            ].map(
              (
                function (e) {
                  return '\n                <li class="popup-update-browser__list-item">\n                    <a href="'.concat(
                    e[h],
                    '" target="_blank" class="popup-update-browser__list-item-link">\n                        <img\n                            width="56"\n                            height="56"\n                            class="popup-update-browser__list-item-image"\n                            src="'
                  ).concat(e.logoSrc, '"\n                            alt="').concat(
                    e.name,
                    '"\n                        >\n                        '
                  ).concat(
                    e.name,
                    '\n                    </a>\n                </li>\n            '
                  )
                }
              )
            ).join(''),
            '\n        </ul>\n    </div>  \n'
          )
        )
      );
      y.appendChild(g);
      var x = document.createElement('aside');
      x.classList.add('popup-update-browser'),
      x.appendChild(y),
      x.appendChild(v),
      i.ed = function (e) {
        return function (e) {
          var i,
          o = arguments.length > 1 &&
          void 0 !== arguments[1] ? arguments[1] : {
          },
          r = n(n({
          }, c), o.browserSupport),
          t = e.browser.name,
          a = o.requiredCssProperty,
          s = void 0 === a ? '' : a,
          l = o.requireChromeOnAndroid,
          u = void 0 !== l &&
          l,
          d = o.isUnknownBrowserOK,
          b = void 0 !== d &&
          d;
          return u &&
          (i = 'Android' === e.os.name && 'Chrome' !== e.browser.name),
          {
            isAndroidButNotChrome: i,
            isBrowserUnsupported: w(e, t, r, b),
            isPropertySupported: m(s)
          }
        }(f, e)
      },
      i.ui = function (e, i) {
        e &&
        (
          [g,
          v].forEach(
            (
              function (e) {
                e.addEventListener(
                  'click',
                  (
                    function (e) {
                      x.parentNode.removeChild(x),
                      i &&
                      'function' == typeof i &&
                      i(e)
                    }
                  )
                )
              }
            )
          ),
          e.appendChild(x)
        )
      }
    },
    89472: function (e, i, o) {
      var r = o(35283),
      n = o(4845),
      t = o(45184),
      a = o.n(t),
      s = 'old-modal-shown',
      l = (0, n.ed) ({
        isUnknownBrowserOK: !0
      }).isBrowserUnsupported;
      r.storage.get('webview') ||
      !a().get(s) &&
      l &&
      (0, n.ui) (document.body, (function () {
        return a().set(s, '1', {
          expires: 1
        })
      }))
    }
  },
  o = {};
  function r(e) {
    var n = o[e];
    if (void 0 !== n) return n.exports;
    var t = o[e] = {
      id: e,
      loaded: !1,
      exports: {
      }
    };
    return i[e].call(t.exports, t, t.exports, r),
    t.loaded = !0,
    t.exports
  }
  r.m = i,
  r.amdD = function () {
    throw new Error('define cannot be used indirect')
  },
  r.amdO = {},
  e = [],
  r.O = function (i, o, n, t) {
    if (!o) {
      var a = 1 / 0;
      for (d = 0; d < e.length; d++) {
        o = e[d][0],
        n = e[d][1],
        t = e[d][2];
        for (var s = !0, l = 0; l < o.length; l++) (!1 & t || a >= t) &&
        Object.keys(r.O).every((function (e) {
          return r.O[e](o[l])
        })) ? o.splice(l--, 1) : (s = !1, t < a && (a = t));
        if (s) {
          e.splice(d--, 1);
          var u = n();
          void 0 !== u &&
          (i = u)
        }
      }
      return i
    }
    t = t ||
    0;
    for (var d = e.length; d > 0 && e[d - 1][2] > t; d--) e[d] = e[d - 1];
    e[d] = [
      o,
      n,
      t
    ]
  },
  r.n = function (e) {
    var i = e &&
    e.__esModule ? function () {
      return e.default
    }
     : function () {
      return e
    };
    return r.d(i, {
      a: i
    }),
    i
  },
  r.d = function (e, i) {
    for (var o in i) r.o(i, o) &&
    !r.o(e, o) &&
    Object.defineProperty(e, o, {
      enumerable: !0,
      get: i[o]
    })
  },
  r.e = function () {
    return Promise.resolve()
  },
  r.g = function () {
    if ('object' == typeof globalThis) return globalThis;
    try {
      return this ||
      new Function('return this') ()
    } catch (e) {
      if ('object' == typeof window) return window
    }
  }(),
  r.hmd = function (e) {
    return (e = Object.create(e)).children ||
    (e.children = []),
    Object.defineProperty(
      e,
      'exports',
      {
        enumerable: !0,
        set: function () {
          throw new Error(
            'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + e.id
          )
        }
      }
    ),
    e
  },
  r.o = function (e, i) {
    return Object.prototype.hasOwnProperty.call(e, i)
  },
  r.r = function (e) {
    'undefined' != typeof Symbol &&
    Symbol.toStringTag &&
    Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module'
    }),
    Object.defineProperty(e, '__esModule', {
      value: !0
    })
  },
  r.nmd = function (e) {
    return e.paths = [],
    e.children ||
    (e.children = []),
    e
  },
  r.j = 657,
  function () {
    var e = {
      657: 0
    };
    r.O.j = function (i) {
      return 0 === e[i]
    };
    var i = function (i, o) {
      var n,
      t,
      a = o[0],
      s = o[1],
      l = o[2],
      u = 0;
      if (a.some((function (i) {
        return 0 !== e[i]
      }))) {
        for (n in s) r.o(s, n) &&
        (r.m[n] = s[n]);
        if (l) var d = l(r)
      }
      for (i && i(o); u < a.length; u++) t = a[u],
      r.o(e, t) &&
      e[t] &&
      e[t][0](),
      e[t] = 0;
      return r.O(d)
    },
    o = self.webpackChunkkolesa_kz = self.webpackChunkkolesa_kz ||
    [];
    o.forEach(i.bind(null, 0)),
    o.push = i.bind(null, o.push.bind(o))
  }();
  var n = r.O(void 0, [
    121
  ], (function () {
    return r(89472)
  }));
  n = r.O(n)
}();
