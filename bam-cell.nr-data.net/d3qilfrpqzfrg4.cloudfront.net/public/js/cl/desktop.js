/*! For license information please see desktop.js.LICENSE.txt */
(() => {
    var t = {
            97748: t => {
                t.exports = function() {
                    var t, e = ["navigation", "request", "process", "log", "user", "state", "error", "manual"],
                        n = function(t, e, n) {
                            for (var r = n, i = 0, o = t.length; i < o; i++) r = e(r, t[i], i, t);
                            return r
                        },
                        r = function(t, e) {
                            return n(t, (function(t, n, r, i) {
                                return e(n, r, i) ? t.concat(n) : t
                            }), [])
                        },
                        i = function(t, e) {
                            return n(t, (function(t, n, r, i) {
                                return !0 === t || n === e
                            }), !1)
                        },
                        o = function(t) {
                            return "[object Array]" === Object.prototype.toString.call(t)
                        },
                        s = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        a = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        u = function(t) {
                            var e, n = [];
                            for (e in t) Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
                            if (!s) return n;
                            for (var r = 0, i = a.length; r < i; r++) Object.prototype.hasOwnProperty.call(t, a[r]) && n.push(a[r]);
                            return n
                        },
                        c = function(t, e) {
                            return void 0 === t && (t = 1), void 0 === e && (e = 1 / 0),
                                function(n) {
                                    return "number" == typeof n && parseInt("" + n, 10) === n && n >= t && n <= e
                                }
                        },
                        l = function(t) {
                            return "function" == typeof t || o(t) && r(t, (function(t) {
                                return "function" == typeof t
                            })).length === t.length
                        },
                        f = function(t) {
                            return "string" == typeof t && !!t.length
                        },
                        h = {},
                        d = function() {
                            return {
                                unhandledExceptions: !0,
                                unhandledRejections: !0
                            }
                        };
                    h.schema = {
                        apiKey: {
                            defaultValue: function() {
                                return null
                            },
                            message: "is required",
                            validate: f
                        },
                        appVersion: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(t) {
                                return void 0 === t || f(t)
                            }
                        },
                        appType: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(t) {
                                return void 0 === t || f(t)
                            }
                        },
                        autoDetectErrors: {
                            defaultValue: function() {
                                return !0
                            },
                            message: "should be true|false",
                            validate: function(t) {
                                return !0 === t || !1 === t
                            }
                        },
                        enabledErrorTypes: {
                            defaultValue: function() {
                                return d()
                            },
                            message: "should be an object containing the flags { unhandledExceptions:true|false, unhandledRejections:true|false }",
                            allowPartialObject: !0,
                            validate: function(t) {
                                if ("object" != typeof t || !t) return !1;
                                var e = u(t),
                                    n = u(d());
                                return !(r(e, (function(t) {
                                    return i(n, t)
                                })).length < e.length || r(u(t), (function(e) {
                                    return "boolean" != typeof t[e]
                                })).length > 0)
                            }
                        },
                        onError: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: l
                        },
                        onSession: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: l
                        },
                        onBreadcrumb: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be a function or array of functions",
                            validate: l
                        },
                        endpoints: {
                            defaultValue: function() {
                                return {
                                    notify: "https://notify.bugsnag.com",
                                    sessions: "https://sessions.bugsnag.com"
                                }
                            },
                            message: "should be an object containing endpoint URLs { notify, sessions }",
                            validate: function(t) {
                                return t && "object" == typeof t && f(t.notify) && f(t.sessions) && 0 === r(u(t), (function(t) {
                                    return !i(["notify", "sessions"], t)
                                })).length
                            }
                        },
                        autoTrackSessions: {
                            defaultValue: function(t) {
                                return !0
                            },
                            message: "should be true|false",
                            validate: function(t) {
                                return !0 === t || !1 === t
                            }
                        },
                        enabledReleaseStages: {
                            defaultValue: function() {
                                return null
                            },
                            message: "should be an array of strings",
                            validate: function(t) {
                                return null === t || o(t) && r(t, (function(t) {
                                    return "string" == typeof t
                                })).length === t.length
                            }
                        },
                        releaseStage: {
                            defaultValue: function() {
                                return "production"
                            },
                            message: "should be a string",
                            validate: function(t) {
                                return "string" == typeof t && t.length
                            }
                        },
                        maxBreadcrumbs: {
                            defaultValue: function() {
                                return 25
                            },
                            message: "should be a number ≤100",
                            validate: function(t) {
                                return c(0, 100)(t)
                            }
                        },
                        enabledBreadcrumbTypes: {
                            defaultValue: function() {
                                return e
                            },
                            message: "should be null or a list of available breadcrumb types (" + e.join(",") + ")",
                            validate: function(t) {
                                return null === t || o(t) && n(t, (function(t, n) {
                                    return !1 === t ? t : i(e, n)
                                }), !0)
                            }
                        },
                        context: {
                            defaultValue: function() {},
                            message: "should be a string",
                            validate: function(t) {
                                return void 0 === t || "string" == typeof t
                            }
                        },
                        user: {
                            defaultValue: function() {
                                return {}
                            },
                            message: "should be an object with { id, email, name } properties",
                            validate: function(t) {
                                return null === t || t && n(u(t), (function(t, e) {
                                    return t && i(["id", "email", "name"], e)
                                }), !0)
                            }
                        },
                        metadata: {
                            defaultValue: function() {
                                return {}
                            },
                            message: "should be an object",
                            validate: function(t) {
                                return "object" == typeof t && null !== t
                            }
                        },
                        logger: {
                            defaultValue: function() {},
                            message: "should be null or an object with methods { debug, info, warn, error }",
                            validate: function(t) {
                                return !t || t && n(["debug", "info", "warn", "error"], (function(e, n) {
                                    return e && "function" == typeof t[n]
                                }), !0)
                            }
                        },
                        redactedKeys: {
                            defaultValue: function() {
                                return ["password"]
                            },
                            message: "should be an array of strings|regexes",
                            validate: function(t) {
                                return o(t) && t.length === r(t, (function(t) {
                                    return "string" == typeof t || t && "function" == typeof t.test
                                })).length
                            }
                        },
                        plugins: {
                            defaultValue: function() {
                                return []
                            },
                            message: "should be an array of plugin objects",
                            validate: function(t) {
                                return o(t) && t.length === r(t, (function(t) {
                                    return t && "object" == typeof t && "function" == typeof t.load
                                })).length
                            }
                        }
                    };
                    var p = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        },
                        g = function(t, e) {
                            return n(t, (function(t, n, r, i) {
                                return t.concat(e(n, r, i))
                            }), [])
                        };

                    function y() {
                        return (y = Object.assign || function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                            }
                            return t
                        }).apply(this, arguments)
                    }
                    var v = h.schema,
                        m = {
                            releaseStage: p({}, v.releaseStage, {
                                defaultValue: function() {
                                    return /^localhost(:\d+)?$/.test(window.location.host) ? "development" : "production"
                                }
                            }),
                            appType: y({}, v.appType, {
                                defaultValue: function() {
                                    return "browser"
                                }
                            }),
                            logger: p({}, v.logger, {
                                defaultValue: function() {
                                    return "undefined" != typeof console && "function" == typeof console.debug ? b() : void 0
                                }
                            })
                        },
                        b = function() {
                            var t = {},
                                e = console.log;
                            return g(["debug", "info", "warn", "error"], (function(n) {
                                var r = console[n];
                                t[n] = "function" == typeof r ? r.bind(console, "[bugsnag]") : e.bind(console, "[bugsnag]")
                            })), t
                        },
                        w = function() {
                            function t(t, e, n, r) {
                                void 0 === r && (r = new Date), this.type = n, this.message = t, this.metadata = e, this.timestamp = r
                            }
                            return t.prototype.toJSON = function() {
                                return {
                                    type: this.type,
                                    name: this.message,
                                    timestamp: this.timestamp,
                                    metaData: this.metadata
                                }
                            }, t
                        }(),
                        _ = {};
                    ! function(e, n) {
                        "use strict";
                        "function" == typeof t && t.amd ? t("stackframe", [], n) : "object" == typeof _ ? _ = n() : e.StackFrame = n()
                    }(this, (function() {
                        "use strict";

                        function t(t) {
                            return !isNaN(parseFloat(t)) && isFinite(t)
                        }

                        function e(t) {
                            return t.charAt(0).toUpperCase() + t.substring(1)
                        }

                        function n(t) {
                            return function() {
                                return this[t]
                            }
                        }
                        var r = ["isConstructor", "isEval", "isNative", "isToplevel"],
                            i = ["columnNumber", "lineNumber"],
                            o = ["fileName", "functionName", "source"],
                            s = ["args"],
                            a = r.concat(i, o, s);

                        function u(t) {
                            if (t instanceof Object)
                                for (var n = 0; n < a.length; n++) t.hasOwnProperty(a[n]) && void 0 !== t[a[n]] && this["set" + e(a[n])](t[a[n]])
                        }
                        u.prototype = {
                            getArgs: function() {
                                return this.args
                            },
                            setArgs: function(t) {
                                if ("[object Array]" !== Object.prototype.toString.call(t)) throw new TypeError("Args must be an Array");
                                this.args = t
                            },
                            getEvalOrigin: function() {
                                return this.evalOrigin
                            },
                            setEvalOrigin: function(t) {
                                if (t instanceof u) this.evalOrigin = t;
                                else {
                                    if (!(t instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                                    this.evalOrigin = new u(t)
                                }
                            },
                            toString: function() {
                                return (this.getFunctionName() || "{anonymous}") + "(" + (this.getArgs() || []).join(",") + ")" + (this.getFileName() ? "@" + this.getFileName() : "") + (t(this.getLineNumber()) ? ":" + this.getLineNumber() : "") + (t(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "")
                            }
                        };
                        for (var c = 0; c < r.length; c++) u.prototype["get" + e(r[c])] = n(r[c]), u.prototype["set" + e(r[c])] = function(t) {
                            return function(e) {
                                this[t] = Boolean(e)
                            }
                        }(r[c]);
                        for (var l = 0; l < i.length; l++) u.prototype["get" + e(i[l])] = n(i[l]), u.prototype["set" + e(i[l])] = function(e) {
                            return function(n) {
                                if (!t(n)) throw new TypeError(e + " must be a Number");
                                this[e] = Number(n)
                            }
                        }(i[l]);
                        for (var f = 0; f < o.length; f++) u.prototype["get" + e(o[f])] = n(o[f]), u.prototype["set" + e(o[f])] = function(t) {
                            return function(e) {
                                this[t] = String(e)
                            }
                        }(o[f]);
                        return u
                    }));
                    var x = {};
                    ! function(e, n) {
                        "use strict";
                        "function" == typeof t && t.amd ? t("error-stack-parser", ["stackframe"], n) : "object" == typeof x ? x = n(_) : e.ErrorStackParser = n(e.StackFrame)
                    }(this, (function(t) {
                        "use strict";
                        var e = /(^|@)\S+\:\d+/,
                            n = /^\s*at .*(\S+\:\d+|\(native\))/m,
                            r = /^(eval@)?(\[native code\])?$/;
                        return {
                            parse: function(t) {
                                if (void 0 !== t.stacktrace || void 0 !== t["opera#sourceloc"]) return this.parseOpera(t);
                                if (t.stack && t.stack.match(n)) return this.parseV8OrIE(t);
                                if (t.stack) return this.parseFFOrSafari(t);
                                throw new Error("Cannot parse given Error object")
                            },
                            extractLocation: function(t) {
                                if (-1 === t.indexOf(":")) return [t];
                                var e = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(t.replace(/[\(\)]/g, ""));
                                return [e[1], e[2] || void 0, e[3] || void 0]
                            },
                            parseV8OrIE: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !!t.match(n)
                                }), this).map((function(e) {
                                    e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, ""));
                                    var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "("),
                                        r = n.match(/ (\((.+):(\d+):(\d+)\)$)/),
                                        i = (n = r ? n.replace(r[0], "") : n).split(/\s+/).slice(1),
                                        o = this.extractLocation(r ? r[1] : i.pop()),
                                        s = i.join(" ") || void 0,
                                        a = ["eval", "<anonymous>"].indexOf(o[0]) > -1 ? void 0 : o[0];
                                    return new t({
                                        functionName: s,
                                        fileName: a,
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseFFOrSafari: function(e) {
                                return e.stack.split("\n").filter((function(t) {
                                    return !t.match(r)
                                }), this).map((function(e) {
                                    if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({
                                        functionName: e
                                    });
                                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/,
                                        r = e.match(n),
                                        i = r && r[1] ? r[1] : void 0,
                                        o = this.extractLocation(e.replace(n, ""));
                                    return new t({
                                        functionName: i,
                                        fileName: o[0],
                                        lineNumber: o[1],
                                        columnNumber: o[2],
                                        source: e
                                    })
                                }), this)
                            },
                            parseOpera: function(t) {
                                return !t.stacktrace || t.message.indexOf("\n") > -1 && t.message.split("\n").length > t.stacktrace.split("\n").length ? this.parseOpera9(t) : t.stack ? this.parseOpera11(t) : this.parseOpera10(t)
                            },
                            parseOpera9: function(e) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, s = r.length; o < s; o += 2) {
                                    var a = n.exec(r[o]);
                                    a && i.push(new t({
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[o]
                                    }))
                                }
                                return i
                            },
                            parseOpera10: function(e) {
                                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, s = r.length; o < s; o += 2) {
                                    var a = n.exec(r[o]);
                                    a && i.push(new t({
                                        functionName: a[3] || void 0,
                                        fileName: a[2],
                                        lineNumber: a[1],
                                        source: r[o]
                                    }))
                                }
                                return i
                            },
                            parseOpera11: function(n) {
                                return n.stack.split("\n").filter((function(t) {
                                    return !!t.match(e) && !t.match(/^Error created at/)
                                }), this).map((function(e) {
                                    var n, r = e.split("@"),
                                        i = this.extractLocation(r.pop()),
                                        o = r.shift() || "",
                                        s = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || void 0;
                                    o.match(/\(([^\)]*)\)/) && (n = o.replace(/^[^\(]+\(([^\)]*)\)$/, "$1"));
                                    var a = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                                    return new t({
                                        functionName: s,
                                        args: a,
                                        fileName: i[0],
                                        lineNumber: i[1],
                                        columnNumber: i[2],
                                        source: e
                                    })
                                }), this)
                            }
                        }
                    }));
                    var k = x,
                        S = function(t) {
                            return !(!t || !t.stack && !t.stacktrace && !t["opera#sourceloc"] || "string" != typeof(t.stack || t.stacktrace || t["opera#sourceloc"]) || t.stack === t.name + ": " + t.message)
                        };

                    function E(t) {
                        switch (Object.prototype.toString.call(t)) {
                            case "[object Error]":
                            case "[object Exception]":
                            case "[object DOMException]":
                                return !0;
                            default:
                                return t instanceof Error
                        }
                    }
                    var T = E,
                        C = function(t, e, n, r) {
                            var i;
                            if (e) {
                                var o;
                                if (null === n) return A(t, e);
                                "object" == typeof n && (o = n), "string" == typeof n && ((i = {})[n] = r, o = i), o && (t[e] || (t[e] = {}), t[e] = p({}, t[e], o))
                            }
                        },
                        A = function(t, e, n) {
                            "string" == typeof e && (n ? t[e] && delete t[e][n] : delete t[e])
                        },
                        O = {
                            add: C,
                            get: function(t, e, n) {
                                if ("string" == typeof e) return n ? t[e] ? t[e][n] : void 0 : t[e]
                            },
                            clear: A
                        },
                        N = {};
                    ! function(e, n) {
                        "use strict";
                        "function" == typeof t && t.amd ? t("stack-generator", ["stackframe"], n) : "object" == typeof N ? N = n(_) : e.StackGenerator = n(e.StackFrame)
                    }(this, (function(t) {
                        return {
                            backtrace: function(e) {
                                var n = [],
                                    r = 10;
                                "object" == typeof e && "number" == typeof e.maxStackSize && (r = e.maxStackSize);
                                for (var i = arguments.callee; i && n.length < r && i.arguments;) {
                                    for (var o = new Array(i.arguments.length), s = 0; s < o.length; ++s) o[s] = i.arguments[s];
                                    /function(?:\s+([\w$]+))+\s*\(/.test(i.toString()) ? n.push(new t({
                                        functionName: RegExp.$1 || void 0,
                                        args: o
                                    })) : n.push(new t({
                                        args: o
                                    }));
                                    try {
                                        i = i.caller
                                    } catch (t) {
                                        break
                                    }
                                }
                                return n
                            }
                        }
                    }));
                    var L = function() {
                            function t(e, r, i, o, s) {
                                void 0 === i && (i = []), void 0 === o && (o = j()), this.apiKey = void 0, this.context = void 0, this.groupingHash = void 0, this.originalError = s, this._handledState = o, this.severity = this._handledState.severity, this.unhandled = this._handledState.unhandled, this.app = {}, this.device = {}, this.request = {}, this.breadcrumbs = [], this.threads = [], this._metadata = {}, this._user = {}, this._session = void 0, this.errors = [{
                                    errorClass: M(e),
                                    errorMessage: M(r),
                                    type: t.__type,
                                    stacktrace: n(i, (function(t, e) {
                                        var n = R(e);
                                        try {
                                            return "{}" === JSON.stringify(n) ? t : t.concat(n)
                                        } catch (e) {
                                            return t
                                        }
                                    }), [])
                                }]
                            }
                            var e = t.prototype;
                            return e.addMetadata = function(t, e, n) {
                                return O.add(this._metadata, t, e, n)
                            }, e.getMetadata = function(t, e) {
                                return O.get(this._metadata, t, e)
                            }, e.clearMetadata = function(t, e) {
                                return O.clear(this._metadata, t, e)
                            }, e.getUser = function() {
                                return this._user
                            }, e.setUser = function(t, e, n) {
                                this._user = {
                                    id: t,
                                    email: e,
                                    name: n
                                }
                            }, e.toJSON = function() {
                                return {
                                    payloadVersion: "4",
                                    exceptions: g(this.errors, (function(t) {
                                        return p({}, t, {
                                            message: t.errorMessage
                                        })
                                    })),
                                    severity: this.severity,
                                    unhandled: this._handledState.unhandled,
                                    severityReason: this._handledState.severityReason,
                                    app: this.app,
                                    device: this.device,
                                    request: this.request,
                                    breadcrumbs: this.breadcrumbs,
                                    context: this.context,
                                    groupingHash: this.groupingHash,
                                    metaData: this._metadata,
                                    user: this._user,
                                    session: this._session
                                }
                            }, t
                        }(),
                        R = function(t) {
                            var e = {
                                file: t.fileName,
                                method: P(t.functionName),
                                lineNumber: t.lineNumber,
                                columnNumber: t.columnNumber,
                                code: void 0,
                                inProject: void 0
                            };
                            return e.lineNumber > -1 && !e.file && !e.method && (e.file = "global code"), e
                        },
                        P = function(t) {
                            return /^global code$/i.test(t) ? "global code" : t
                        },
                        j = function() {
                            return {
                                unhandled: !1,
                                severity: "warning",
                                severityReason: {
                                    type: "handledException"
                                }
                            }
                        },
                        M = function(t) {
                            return "string" == typeof t ? t : ""
                        };
                    L.getStacktrace = function(t, e, n) {
                        if (S(t)) return k.parse(t).slice(e);
                        try {
                            return r(N.backtrace(), (function(t) {
                                return -1 === (t.functionName || "").indexOf("StackGenerator$$")
                            })).slice(1 + n)
                        } catch (t) {
                            return []
                        }
                    }, L.create = function(t, e, n, r, i, o) {
                        void 0 === i && (i = 0);
                        var s, a = B(t, e, r, o),
                            u = a[0],
                            c = a[1];
                        try {
                            var l = L.getStacktrace(u, c > 0 ? 1 + c + i : 0, 1 + i);
                            s = new L(u.name, u.message, l, n, t)
                        } catch (e) {
                            s = new L(u.name, u.message, [], n, t)
                        }
                        return "InvalidError" === u.name && s.addMetadata("" + r, "non-error parameter", D(t)), s
                    };
                    var D = function(t) {
                            return null === t ? "null" : void 0 === t ? "undefined" : t
                        },
                        B = function(t, e, n, r) {
                            var i, o = 0,
                                s = function(t) {
                                    r && r.warn(n + ' received a non-error: "' + t + '"');
                                    var e = new Error(n + ' received a non-error. See "' + n + '" tab for more detail.');
                                    return e.name = "InvalidError", e
                                };
                            if (e) switch (typeof t) {
                                case "string":
                                case "number":
                                case "boolean":
                                    i = new Error(String(t)), o += 1;
                                    break;
                                case "function":
                                    i = s("function"), o += 2;
                                    break;
                                case "object":
                                    null !== t && T(t) ? i = t : null !== t && I(t) ? ((i = new Error(t.message || t.errorMessage)).name = t.name || t.errorClass, o += 1) : (i = s(null === t ? "null" : "unsupported object"), o += 2);
                                    break;
                                default:
                                    i = s("nothing"), o += 2
                            } else T(t) ? i = t : (i = s(typeof t), o += 2);
                            if (!S(i)) try {
                                throw i
                            } catch (t) {
                                S(t) && (i = t, o = 1)
                            }
                            return [i, o]
                        };
                    L.__type = "browserjs";
                    var I = function(t) {
                            return !("string" != typeof t.name && "string" != typeof t.errorClass || "string" != typeof t.message && "string" != typeof t.errorMessage)
                        },
                        q = L,
                        U = function(t, e, n) {
                            var r = 0,
                                i = function() {
                                    if (r >= t.length) return n(null, !0);
                                    e(t[r], (function(t, e) {
                                        return t ? n(t) : !1 === e ? n(null, !1) : (r++, void i())
                                    }))
                                };
                            i()
                        },
                        H = function(t, e, n, r) {
                            U(t, (function(t, r) {
                                if ("function" != typeof t) return r(null);
                                try {
                                    if (2 !== t.length) {
                                        var i = t(e);
                                        return i && "function" == typeof i.then ? i.then((function(t) {
                                            return setTimeout((function() {
                                                return r(null, t)
                                            }))
                                        }), (function(t) {
                                            setTimeout((function() {
                                                return n(t), r(null, !0)
                                            }))
                                        })) : r(null, i)
                                    }
                                    t(e, (function(t, e) {
                                        if (t) return n(t), r(null);
                                        r(null, e)
                                    }))
                                } catch (t) {
                                    n(t), r(null)
                                }
                            }), r)
                        },
                        F = function(t, e, n, r) {
                            for (var i = !1, o = t.slice(); !i && o.length;) try {
                                i = !1 === o.pop()(e)
                            } catch (t) {
                                r.error("Error occurred in " + n + " callback, continuing anyway…"), r.error(t)
                            }
                            return i
                        },
                        z = function(t, e) {
                            var n = "000000000" + t;
                            return n.substr(n.length - e)
                        },
                        $ = "object" == typeof window ? window : self,
                        W = 0;
                    for (var X in $) Object.hasOwnProperty.call($, X) && W++;
                    var Y = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                        V = z((Y + navigator.userAgent.length).toString(36) + W.toString(36), 4),
                        K = function() {
                            return V
                        },
                        J = 0,
                        G = 4,
                        Q = 36,
                        Z = Math.pow(Q, G);

                    function tt() {
                        return z((Math.random() * Z << 0).toString(Q), G)
                    }

                    function et() {
                        return J = J < Z ? J : 0, ++J - 1
                    }

                    function nt() {
                        return "c" + (new Date).getTime().toString(Q) + z(et().toString(Q), G) + K() + (tt() + tt())
                    }
                    nt.fingerprint = K;
                    var rt = nt,
                        it = function() {
                            function t() {
                                this.id = rt(), this.startedAt = new Date, this._handled = 0, this._unhandled = 0, this._user = {}, this.app = {}, this.device = {}
                            }
                            var e = t.prototype;
                            return e.getUser = function() {
                                return this._user
                            }, e.setUser = function(t, e, n) {
                                this._user = {
                                    id: t,
                                    email: e,
                                    name: n
                                }
                            }, e.toJSON = function() {
                                return {
                                    id: this.id,
                                    startedAt: this.startedAt,
                                    events: {
                                        handled: this._handled,
                                        unhandled: this._unhandled
                                    }
                                }
                            }, e._track = function(t) {
                                this[t._handledState.unhandled ? "_unhandled" : "_handled"] += 1
                            }, t
                        }(),
                        ot = function() {},
                        st = function() {
                            function t(e, n, r, i) {
                                var o = this;
                                void 0 === n && (n = h.schema), void 0 === r && (r = []), this._notifier = i, this._config = {}, this._schema = n, this._delivery = {
                                    sendSession: ot,
                                    sendEvent: ot
                                }, this._logger = {
                                    debug: ot,
                                    info: ot,
                                    warn: ot,
                                    error: ot
                                }, this._plugins = {}, this._breadcrumbs = [], this._session = null, this._metadata = {}, this._context = void 0, this._user = {}, this._cbs = {
                                    e: [],
                                    s: [],
                                    sp: [],
                                    b: []
                                }, this.Client = t, this.Event = q, this.Breadcrumb = w, this.Session = it, this._config = this._configure(e, r), g(r.concat(this._config.plugins), (function(t) {
                                    t && o._loadPlugin(t)
                                })), this._depth = 1;
                                var s = this,
                                    a = this.notify;
                                this.notify = function() {
                                    return a.apply(s, arguments)
                                }
                            }
                            var o = t.prototype;
                            return o.addMetadata = function(t, e, n) {
                                return O.add(this._metadata, t, e, n)
                            }, o.getMetadata = function(t, e) {
                                return O.get(this._metadata, t, e)
                            }, o.clearMetadata = function(t, e) {
                                return O.clear(this._metadata, t, e)
                            }, o.getContext = function() {
                                return this._context
                            }, o.setContext = function(t) {
                                this._context = t
                            }, o._configure = function(t, e) {
                                var r = n(e, (function(t, e) {
                                        return e && e.configSchema ? p({}, t, e.configSchema) : t
                                    }), this._schema),
                                    i = n(u(r), (function(e, n) {
                                        var i = r[n].defaultValue(t[n]);
                                        return void 0 !== t[n] ? r[n].validate(t[n]) ? r[n].allowPartialObject ? e.config[n] = p(i, t[n]) : e.config[n] = t[n] : (e.errors[n] = r[n].message, e.config[n] = i) : e.config[n] = i, e
                                    }), {
                                        errors: {},
                                        config: {}
                                    }),
                                    o = i.errors,
                                    s = i.config;
                                if (r.apiKey) {
                                    if (!s.apiKey) throw new Error("No Bugsnag API Key set");
                                    /^[0-9a-f]{32}$/i.test(s.apiKey) || (o.apiKey = "should be a string of 32 hexadecimal characters")
                                }
                                return this._metadata = p({}, s.metadata), this._user = p({}, s.user), this._context = s.context, s.logger && (this._logger = s.logger), s.onError && (this._cbs.e = this._cbs.e.concat(s.onError)), s.onBreadcrumb && (this._cbs.b = this._cbs.b.concat(s.onBreadcrumb)), s.onSession && (this._cbs.s = this._cbs.s.concat(s.onSession)), u(o).length && this._logger.warn(at(o, t)), s
                            }, o.getUser = function() {
                                return this._user
                            }, o.setUser = function(t, e, n) {
                                this._user = {
                                    id: t,
                                    email: e,
                                    name: n
                                }
                            }, o._loadPlugin = function(t) {
                                var e = t.load(this);
                                return t.name && (this._plugins["~" + t.name + "~"] = e), this
                            }, o.getPlugin = function(t) {
                                return this._plugins["~" + t + "~"]
                            }, o._setDelivery = function(t) {
                                this._delivery = t(this)
                            }, o.startSession = function() {
                                var t = new it;
                                return t.app.releaseStage = this._config.releaseStage, t.app.version = this._config.appVersion, t.app.type = this._config.appType, t._user = p({}, this._user), F(this._cbs.s, t, "onSession", this._logger) ? (this._logger.debug("Session not started due to onSession callback"), this) : this._sessionDelegate.startSession(this, t)
                            }, o.addOnError = function(t, e) {
                                void 0 === e && (e = !1), this._cbs.e[e ? "unshift" : "push"](t)
                            }, o.removeOnError = function(t) {
                                this._cbs.e = r(this._cbs.e, (function(e) {
                                    return e !== t
                                }))
                            }, o._addOnSessionPayload = function(t) {
                                this._cbs.sp.push(t)
                            }, o.addOnSession = function(t) {
                                this._cbs.s.push(t)
                            }, o.removeOnSession = function(t) {
                                this._cbs.s = r(this._cbs.s, (function(e) {
                                    return e !== t
                                }))
                            }, o.addOnBreadcrumb = function(t, e) {
                                void 0 === e && (e = !1), this._cbs.b[e ? "unshift" : "push"](t)
                            }, o.removeOnBreadcrumb = function(t) {
                                this._cbs.b = r(this._cbs.b, (function(e) {
                                    return e !== t
                                }))
                            }, o.pauseSession = function() {
                                return this._sessionDelegate.pauseSession(this)
                            }, o.resumeSession = function() {
                                return this._sessionDelegate.resumeSession(this)
                            }, o.leaveBreadcrumb = function(t, n, r) {
                                if (t = "string" == typeof t ? t : "", r = "string" == typeof r && i(e, r) ? r : "manual", n = "object" == typeof n && null !== n ? n : {}, t) {
                                    var o = new w(t, n, r);
                                    F(this._cbs.b, o, "onBreadcrumb", this._logger) ? this._logger.debug("Breadcrumb not attached due to onBreadcrumb callback") : (this._breadcrumbs.push(o), this._breadcrumbs.length > this._config.maxBreadcrumbs && (this._breadcrumbs = this._breadcrumbs.slice(this._breadcrumbs.length - this._config.maxBreadcrumbs)))
                                }
                            }, o._isBreadcrumbTypeEnabled = function(t) {
                                var e = this._config.enabledBreadcrumbTypes;
                                return null === e || i(e, t)
                            }, o.notify = function(t, e, n) {
                                void 0 === n && (n = ot);
                                var r = q.create(t, !0, void 0, "notify()", this._depth + 1, this._logger);
                                this._notify(r, e, n)
                            }, o._notify = function(e, n, r) {
                                var o = this;
                                if (void 0 === r && (r = ot), e.app = p({}, e.app, {
                                        releaseStage: this._config.releaseStage,
                                        version: this._config.appVersion,
                                        type: this._config.appType
                                    }), e.context = e.context || this._context, e._metadata = p({}, e._metadata, this._metadata), e._user = p({}, e._user, this._user), e.breadcrumbs = this._breadcrumbs.slice(), null !== this._config.enabledReleaseStages && !i(this._config.enabledReleaseStages, this._config.releaseStage)) return this._logger.warn("Event not sent due to releaseStage/enabledReleaseStages configuration"), r(null, e);
                                var s = e.severity,
                                    a = function(t) {
                                        o._logger.error("Error occurred in onError callback, continuing anyway…"), o._logger.error(t)
                                    },
                                    u = [].concat(this._cbs.e).concat(n);
                                H(u, e, a, (function(n, i) {
                                    if (n && a(n), !i) return o._logger.debug("Event not sent due to onError callback"), r(null, e);
                                    o._isBreadcrumbTypeEnabled("error") && t.prototype.leaveBreadcrumb.call(o, e.errors[0].errorClass, {
                                        errorClass: e.errors[0].errorClass,
                                        errorMessage: e.errors[0].errorMessage,
                                        severity: e.severity
                                    }, "error"), s !== e.severity && (e._handledState.severityReason = {
                                        type: "userCallbackSetSeverity"
                                    }), e.unhandled !== e._handledState.unhandled && (e._handledState.severityReason.unhandledOverridden = !0, e._handledState.unhandled = e.unhandled), o._session && (o._session._track(e), e._session = o._session), o._delivery.sendEvent({
                                        apiKey: e.apiKey || o._config.apiKey,
                                        notifier: o._notifier,
                                        events: [e]
                                    }, (function(t) {
                                        return r(t, e)
                                    }))
                                }))
                            }, t
                        }(),
                        at = function(t, e) {
                            return new Error("Invalid configuration\n" + g(u(t), (function(n) {
                                return "  - " + n + " " + t[n] + ", got " + ut(e[n])
                            })).join("\n\n"))
                        },
                        ut = function(t) {
                            switch (typeof t) {
                                case "string":
                                case "number":
                                case "object":
                                    return JSON.stringify(t);
                                default:
                                    return String(t)
                            }
                        },
                        ct = st,
                        lt = function(t, e, n, r) {
                            var i = r && r.redactedKeys ? r.redactedKeys : [],
                                o = r && r.redactedPaths ? r.redactedPaths : [];
                            return JSON.stringify(xt(t, i, o), e, n)
                        },
                        ft = 20,
                        ht = 25e3,
                        dt = 8,
                        pt = "...";

                    function gt(t) {
                        return t instanceof Error || /^\[object (Error|(Dom)?Exception)\]$/.test(Object.prototype.toString.call(t))
                    }

                    function yt(t) {
                        return "[Throws: " + (t ? t.message : "?") + "]"
                    }

                    function vt(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return !0;
                        return !1
                    }

                    function mt(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (0 === e.indexOf(t[n])) return !0;
                        return !1
                    }

                    function bt(t, e) {
                        for (var n = 0, r = t.length; n < r; n++) {
                            if ("string" == typeof t[n] && t[n].toLowerCase() === e.toLowerCase()) return !0;
                            if (t[n] && "function" == typeof t[n].test && t[n].test(e)) return !0
                        }
                        return !1
                    }

                    function wt(t) {
                        return "[object Array]" === Object.prototype.toString.call(t)
                    }

                    function _t(t, e) {
                        try {
                            return t[e]
                        } catch (t) {
                            return yt(t)
                        }
                    }

                    function xt(t, e, n) {
                        var r = [],
                            i = 0;

                        function o(t, s) {
                            function a() {
                                return s.length > dt && i > ht
                            }
                            if (i++, s.length > ft) return pt;
                            if (a()) return pt;
                            if (null === t || "object" != typeof t) return t;
                            if (vt(r, t)) return "[Circular]";
                            if (r.push(t), "function" == typeof t.toJSON) try {
                                i--;
                                var u = o(t.toJSON(), s);
                                return r.pop(), u
                            } catch (t) {
                                return yt(t)
                            }
                            if (gt(t)) {
                                i--;
                                var c = o({
                                    name: t.name,
                                    message: t.message
                                }, s);
                                return r.pop(), c
                            }
                            if (wt(t)) {
                                for (var l = [], f = 0, h = t.length; f < h; f++) {
                                    if (a()) {
                                        l.push(pt);
                                        break
                                    }
                                    l.push(o(t[f], s.concat("[]")))
                                }
                                return r.pop(), l
                            }
                            var d = {};
                            try {
                                for (var p in t)
                                    if (Object.prototype.hasOwnProperty.call(t, p))
                                        if (mt(n, s.join(".")) && bt(e, p)) d[p] = "[REDACTED]";
                                        else {
                                            if (a()) {
                                                d[p] = pt;
                                                break
                                            }
                                            d[p] = o(_t(t, p), s.concat(p))
                                        }
                            } catch (t) {}
                            return r.pop(), d
                        }
                        return o(t, [])
                    }
                    var kt = {},
                        St = ["events.[].metaData", "events.[].breadcrumbs.[].metaData", "events.[].request"];
                    kt.event = function(t, e) {
                        var n = lt(t, null, null, {
                            redactedPaths: St,
                            redactedKeys: e
                        });
                        if (n.length > 1e6 && (t.events[0]._metadata = {
                                notifier: "WARNING!\nSerialized payload was " + n.length / 1e6 + "MB (limit = 1MB)\nmetadata was removed"
                            }, (n = lt(t, null, null, {
                                redactedPaths: St,
                                redactedKeys: e
                            })).length > 1e6)) throw new Error("payload exceeded 1MB limit");
                        return n
                    }, kt.session = function(t, e) {
                        var n = lt(t, null, null);
                        if (n.length > 1e6) throw new Error("payload exceeded 1MB limit");
                        return n
                    };
                    var Et = {};
                    Et = function(t, e) {
                        return void 0 === e && (e = window), {
                            sendEvent: function(n, r) {
                                void 0 === r && (r = function() {});
                                var i = Tt(t._config, "notify", "4", e),
                                    o = new e.XDomainRequest;
                                o.onload = function() {
                                    r(null)
                                }, o.open("POST", i), setTimeout((function() {
                                    try {
                                        o.send(kt.event(n, t._config.redactedKeys))
                                    } catch (e) {
                                        t._logger.error(e), r(e)
                                    }
                                }), 0)
                            },
                            sendSession: function(n, r) {
                                void 0 === r && (r = function() {});
                                var i = Tt(t._config, "sessions", "1", e),
                                    o = new e.XDomainRequest;
                                o.onload = function() {
                                    r(null)
                                }, o.open("POST", i), setTimeout((function() {
                                    try {
                                        o.send(kt.session(n, t._config.redactedKeys))
                                    } catch (e) {
                                        t._logger.error(e), r(e)
                                    }
                                }), 0)
                            }
                        }
                    };
                    var Tt = function(t, e, n, r) {
                            var i = JSON.parse(JSON.stringify(new Date));
                            return Ct(t.endpoints[e], r.location.protocol) + "?apiKey=" + encodeURIComponent(t.apiKey) + "&payloadVersion=" + n + "&sentAt=" + encodeURIComponent(i)
                        },
                        Ct = Et._matchPageProtocol = function(t, e) {
                            return "http:" === e ? t.replace(/^https:/, "http:") : t
                        },
                        At = function(t, e) {
                            return void 0 === e && (e = window), {
                                sendEvent: function(n, r) {
                                    void 0 === r && (r = function() {});
                                    try {
                                        var i = t._config.endpoints.notify,
                                            o = new e.XMLHttpRequest;
                                        o.onreadystatechange = function() {
                                            o.readyState === e.XMLHttpRequest.DONE && r(null)
                                        }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", n.apiKey || t._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "4"), o.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), o.send(kt.event(n, t._config.redactedKeys))
                                    } catch (e) {
                                        t._logger.error(e)
                                    }
                                },
                                sendSession: function(n, r) {
                                    void 0 === r && (r = function() {});
                                    try {
                                        var i = t._config.endpoints.sessions,
                                            o = new e.XMLHttpRequest;
                                        o.onreadystatechange = function() {
                                            o.readyState === e.XMLHttpRequest.DONE && r(null)
                                        }, o.open("POST", i), o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Bugsnag-Api-Key", t._config.apiKey), o.setRequestHeader("Bugsnag-Payload-Version", "1"), o.setRequestHeader("Bugsnag-Sent-At", (new Date).toISOString()), o.send(kt.session(n, t._config.redactedKeys))
                                    } catch (e) {
                                        t._logger.error(e)
                                    }
                                }
                            }
                        },
                        Ot = new Date,
                        Nt = function() {
                            Ot = new Date
                        },
                        Lt = {
                            name: "appDuration",
                            load: function(t) {
                                return t.addOnError((function(t) {
                                    var e = new Date;
                                    t.app.duration = e - Ot
                                }), !0), {
                                    reset: Nt
                                }
                            }
                        },
                        Rt = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    e.addOnError((function(e) {
                                        void 0 === e.context && (e.context = t.location.pathname)
                                    }), !0)
                                }
                            }
                        },
                        Pt = function(t, e) {
                            var n = "000000000" + t;
                            return n.substr(n.length - e)
                        },
                        jt = "object" == typeof window ? window : self,
                        Mt = 0;
                    for (var Dt in jt) Object.hasOwnProperty.call(jt, Dt) && Mt++;
                    var Bt = navigator.mimeTypes ? navigator.mimeTypes.length : 0,
                        It = Pt((Bt + navigator.userAgent.length).toString(36) + Mt.toString(36), 4),
                        qt = function() {
                            return It
                        },
                        Ut = 0,
                        Ht = 4,
                        Ft = 36,
                        zt = Math.pow(Ft, Ht);

                    function $t() {
                        return Pt((Math.random() * zt << 0).toString(Ft), Ht)
                    }

                    function Wt() {
                        return Ut = Ut < zt ? Ut : 0, ++Ut - 1
                    }

                    function Xt() {
                        return "c" + (new Date).getTime().toString(Ft) + Pt(Wt().toString(Ft), Ht) + qt() + ($t() + $t())
                    }
                    Xt.fingerprint = qt;
                    var Yt = Xt,
                        Vt = "bugsnag-anonymous-id",
                        Kt = function() {
                            try {
                                var t = window.localStorage,
                                    e = t.getItem(Vt);
                                return e && /^c[a-z0-9]{20,32}$/.test(e) || (e = Yt(), t.setItem(Vt, e)), e
                            } catch (t) {}
                        },
                        Jt = function(t, e) {
                            return void 0 === t && (t = navigator), void 0 === e && (e = window.screen), {
                                load: function(n) {
                                    var r = {
                                        locale: t.browserLanguage || t.systemLanguage || t.userLanguage || t.language,
                                        userAgent: t.userAgent
                                    };
                                    e && e.orientation && e.orientation.type ? r.orientation = e.orientation.type : r.orientation = document.documentElement.clientWidth > document.documentElement.clientHeight ? "landscape" : "portrait", n._config.generateAnonymousId && (r.id = Kt()), n.addOnSession((function(t) {
                                        t.device = p({}, t.device, r), n._config.collectUserIp || Gt(t)
                                    })), n.addOnError((function(t) {
                                        t.device = p({}, t.device, r, {
                                            time: new Date
                                        }), n._config.collectUserIp || Gt(t)
                                    }), !0)
                                },
                                configSchema: {
                                    generateAnonymousId: {
                                        validate: function(t) {
                                            return !0 === t || !1 === t
                                        },
                                        defaultValue: function() {
                                            return !0
                                        },
                                        message: "should be true|false"
                                    }
                                }
                            }
                        },
                        Gt = function(t) {
                            var e = t.getUser();
                            e && e.id || t.setUser(t.device.id)
                        },
                        Qt = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    e.addOnError((function(e) {
                                        e.request && e.request.url || (e.request = p({}, e.request, {
                                            url: t.location.href
                                        }))
                                    }), !0)
                                }
                            }
                        },
                        Zt = {
                            load: function(t) {
                                t._sessionDelegate = te
                            }
                        },
                        te = {
                            startSession: function(t, e) {
                                var n = t;
                                return n._session = e, n._pausedSession = null, null === n._config.enabledReleaseStages || i(n._config.enabledReleaseStages, n._config.releaseStage) ? (n._delivery.sendSession({
                                    notifier: n._notifier,
                                    device: e.device,
                                    app: e.app,
                                    sessions: [{
                                        id: e.id,
                                        startedAt: e.startedAt,
                                        user: e._user
                                    }]
                                }), n) : (n._logger.warn("Session not sent due to releaseStage/enabledReleaseStages configuration"), n)
                            },
                            resumeSession: function(t) {
                                return t._session ? t : t._pausedSession ? (t._session = t._pausedSession, t._pausedSession = null, t) : t.startSession()
                            },
                            pauseSession: function(t) {
                                t._pausedSession = t._session, t._session = null
                            }
                        },
                        ee = {
                            load: function(t) {
                                t._config.collectUserIp || t.addOnError((function(t) {
                                    t._user && void 0 === t._user.id && delete t._user.id, t._user = p({
                                        id: "[REDACTED]"
                                    }, t._user), t.request = p({
                                        clientIp: "[REDACTED]"
                                    }, t.request)
                                }))
                            },
                            configSchema: {
                                collectUserIp: {
                                    defaultValue: function() {
                                        return !0
                                    },
                                    message: "should be true|false",
                                    validate: function(t) {
                                        return !0 === t || !1 === t
                                    }
                                }
                            }
                        },
                        ne = {
                            load: function(t) {
                                !/^(local-)?dev(elopment)?$/.test(t._config.releaseStage) && t._isBreadcrumbTypeEnabled("log") && g(re, (function(e) {
                                    var r = console[e];
                                    console[e] = function() {
                                        for (var i = arguments.length, o = new Array(i), s = 0; s < i; s++) o[s] = arguments[s];
                                        t.leaveBreadcrumb("Console output", n(o, (function(t, e, n) {
                                            var r = "[Unknown value]";
                                            try {
                                                r = String(e)
                                            } catch (t) {}
                                            if ("[object Object]" === r) try {
                                                r = JSON.stringify(e)
                                            } catch (t) {}
                                            return t["[" + n + "]"] = r, t
                                        }), {
                                            severity: 0 === e.indexOf("group") ? "log" : e
                                        }), "log"), r.apply(console, o)
                                    }, console[e]._restore = function() {
                                        console[e] = r
                                    }
                                }))
                            }
                        },
                        re = r(["log", "debug", "info", "warn", "error"], (function(t) {
                            return "undefined" != typeof console && "function" == typeof console[t]
                        })),
                        ie = 200,
                        oe = 5e5,
                        se = function(t, e) {
                            return void 0 === t && (t = document), void 0 === e && (e = window), {
                                load: function(i) {
                                    if (i._config.trackInlineScripts) {
                                        var o = e.location.href,
                                            s = "",
                                            a = t.attachEvent ? "complete" === t.readyState : "loading" !== t.readyState,
                                            u = function() {
                                                return t.documentElement.outerHTML
                                            };
                                        s = u();
                                        var c = t.onreadystatechange;
                                        t.onreadystatechange = function() {
                                            "interactive" === t.readyState && (s = u(), a = !0);
                                            try {
                                                c.apply(this, arguments)
                                            } catch (t) {}
                                        };
                                        var l = null,
                                            f = function(t) {
                                                l = t
                                            },
                                            h = function() {
                                                var e = t.currentScript || l;
                                                if (!e && !a) {
                                                    var n = t.scripts || t.getElementsByTagName("script");
                                                    e = n[n.length - 1]
                                                }
                                                return e
                                            },
                                            d = function(t) {
                                                a && s || (s = u());
                                                var e = ["\x3c!-- DOC START --\x3e"].concat(s.split("\n")),
                                                    r = t - 1,
                                                    i = Math.max(r - 3, 0),
                                                    o = Math.min(r + 3, e.length);
                                                return n(e.slice(i, o), (function(t, e, n) {
                                                    return t[i + 1 + n] = e.length <= ie ? e : e.substr(0, ie), t
                                                }), {})
                                            };
                                        i.addOnError((function(t) {
                                            t.errors[0].stacktrace = r(t.errors[0].stacktrace, (function(t) {
                                                return !/__trace__$/.test(t.method)
                                            }));
                                            var e = t.errors[0].stacktrace[0];
                                            if (!e || !e.file || e.file.replace(/#.*$/, "") === o.replace(/#.*$/, "")) {
                                                var n = h();
                                                if (n) {
                                                    var i = n.innerHTML;
                                                    t.addMetadata("script", "content", i.length <= oe ? i : i.substr(0, oe)), e && e.lineNumber && (e.code = d(e.lineNumber))
                                                }
                                            }
                                        }), !0);
                                        var p = g(["setTimeout", "setInterval", "setImmediate", "requestAnimationFrame"], (function(t) {
                                            return ae(e, t, (function(t) {
                                                return y(t, (function(t) {
                                                    return {
                                                        get: function() {
                                                            return t[0]
                                                        },
                                                        replace: function(e) {
                                                            t[0] = e
                                                        }
                                                    }
                                                }))
                                            }))
                                        }))[0];
                                        g(["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"], (function(t) {
                                            e[t] && e[t].prototype && Object.prototype.hasOwnProperty.call(e[t].prototype, "addEventListener") && (ae(e[t].prototype, "addEventListener", (function(t) {
                                                return y(t, ue)
                                            })), ae(e[t].prototype, "removeEventListener", (function(t) {
                                                return y(t, ue, !0)
                                            })))
                                        }))
                                    }

                                    function y(t, e, n) {
                                        return void 0 === n && (n = !1),
                                            function() {
                                                var r = [].slice.call(arguments);
                                                try {
                                                    var i = e(r),
                                                        o = i.get();
                                                    if (n && t.apply(this, r), "function" != typeof o) return t.apply(this, r);
                                                    if (o.__trace__) i.replace(o.__trace__);
                                                    else {
                                                        var s = h();
                                                        o.__trace__ = function() {
                                                            f(s), p((function() {
                                                                f(null)
                                                            }), 0);
                                                            var t = o.apply(this, arguments);
                                                            return f(null), t
                                                        }, o.__trace__.__trace__ = o.__trace__, i.replace(o.__trace__)
                                                    }
                                                } catch (t) {}
                                                if (t.apply) return t.apply(this, r);
                                                switch (r.length) {
                                                    case 1:
                                                        return t(r[0]);
                                                    case 2:
                                                        return t(r[0], r[1]);
                                                    default:
                                                        return t()
                                                }
                                            }
                                    }
                                },
                                configSchema: {
                                    trackInlineScripts: {
                                        validate: function(t) {
                                            return !0 === t || !1 === t
                                        },
                                        defaultValue: function() {
                                            return !0
                                        },
                                        message: "should be true|false"
                                    }
                                }
                            }
                        };

                    function ae(t, e, n) {
                        var r = t[e];
                        if (!r) return r;
                        var i = n(r);
                        return t[e] = i, r
                    }

                    function ue(t) {
                        var e = !!t[1] && "function" == typeof t[1].handleEvent;
                        return {
                            get: function() {
                                return e ? t[1].handleEvent : t[1]
                            },
                            replace: function(n) {
                                e ? t[1].handleEvent = n : t[1] = n
                            }
                        }
                    }
                    var ce = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    "addEventListener" in t && e._isBreadcrumbTypeEnabled("user") && t.addEventListener("click", (function(n) {
                                        var r, i;
                                        try {
                                            r = le(n.target), i = fe(n.target, t)
                                        } catch (t) {
                                            r = "[hidden]", i = "[hidden]", e._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/yy3rn63z")
                                        }
                                        e.leaveBreadcrumb("UI click", {
                                            targetText: r,
                                            targetSelector: i
                                        }, "user")
                                    }), !0)
                                }
                            }
                        },
                        le = function(t) {
                            var e = t.textContent || t.innerText || "";
                            return e || "submit" !== t.type && "button" !== t.type || (e = t.value), he(e = e.replace(/^\s+|\s+$/g, ""), 140)
                        };

                    function fe(t, e) {
                        var n = [t.tagName];
                        if (t.id && n.push("#" + t.id), t.className && t.className.length && n.push("." + t.className.split(" ").join(".")), !e.document.querySelectorAll || !Array.prototype.indexOf) return n.join("");
                        try {
                            if (1 === e.document.querySelectorAll(n.join("")).length) return n.join("")
                        } catch (t) {
                            return n.join("")
                        }
                        if (t.parentNode.childNodes.length > 1) {
                            var r = Array.prototype.indexOf.call(t.parentNode.childNodes, t) + 1;
                            n.push(":nth-child(" + r + ")")
                        }
                        return 1 === e.document.querySelectorAll(n.join("")).length ? n.join("") : t.parentNode ? fe(t.parentNode, e) + " > " + n.join("") : n.join("")
                    }

                    function he(t, e) {
                        var n = "(...)";
                        return t && t.length <= e ? t : t.slice(0, e - n.length) + n
                    }
                    var de = {};
                    de = function(t) {
                        return void 0 === t && (t = window), {
                            load: function(e) {
                                if ("addEventListener" in t && e._isBreadcrumbTypeEnabled("navigation")) {
                                    var n = function(t) {
                                        return function() {
                                            return e.leaveBreadcrumb(t, {}, "navigation")
                                        }
                                    };
                                    t.addEventListener("pagehide", n("Page hidden"), !0), t.addEventListener("pageshow", n("Page shown"), !0), t.addEventListener("load", n("Page loaded"), !0), t.document.addEventListener("DOMContentLoaded", n("DOMContentLoaded"), !0), t.addEventListener("load", (function() {
                                        return t.addEventListener("popstate", n("Navigated back"), !0)
                                    })), t.addEventListener("hashchange", (function(n) {
                                        var r = n.oldURL ? {
                                            from: pe(n.oldURL, t),
                                            to: pe(n.newURL, t),
                                            state: ve(t)
                                        } : {
                                            to: pe(t.location.href, t)
                                        };
                                        e.leaveBreadcrumb("Hash changed", r, "navigation")
                                    }), !0), t.history.replaceState && ye(e, t.history, "replaceState", t), t.history.pushState && ye(e, t.history, "pushState", t)
                                }
                            }
                        }
                    };
                    var pe = function(t, e) {
                            var n = e.document.createElement("A");
                            return n.href = t, "" + n.pathname + n.search + n.hash
                        },
                        ge = function(t, e, n, r) {
                            var i = pe(t.location.href, t);
                            return {
                                title: n,
                                state: e,
                                prevState: ve(t),
                                to: r || i,
                                from: i
                            }
                        },
                        ye = function(t, e, n, r) {
                            var i = e[n];
                            e[n] = function(o, s, a) {
                                t.leaveBreadcrumb("History " + n, ge(r, o, s, a), "navigation"), "function" == typeof t.resetEventCount && t.resetEventCount(), t._config.autoTrackSessions && t.startSession(), i.apply(e, [o, s].concat(void 0 !== a ? a : []))
                            }
                        },
                        ve = function(t) {
                            try {
                                return t.history.state
                            } catch (t) {}
                        },
                        me = "request",
                        be = "BS~~S",
                        we = "BS~~U",
                        _e = "BS~~M",
                        xe = function(t, e) {
                            return void 0 === t && (t = []), void 0 === e && (e = window), {
                                load: function(n) {
                                    if (n._isBreadcrumbTypeEnabled("request")) {
                                        var r = [n._config.endpoints.notify, n._config.endpoints.sessions].concat(t);
                                        a(), l();
                                        var o = function(t, e, r) {
                                                var i = {
                                                    status: t.status,
                                                    request: e + " " + r
                                                };
                                                t.status >= 400 ? n.leaveBreadcrumb("fetch() failed", i, me) : n.leaveBreadcrumb("fetch() succeeded", i, me)
                                            },
                                            s = function(t, e) {
                                                n.leaveBreadcrumb("fetch() error", {
                                                    request: t + " " + e
                                                }, me)
                                            }
                                    }

                                    function a() {
                                        if ("addEventListener" in e.XMLHttpRequest.prototype) {
                                            var t = e.XMLHttpRequest.prototype.open;
                                            e.XMLHttpRequest.prototype.open = function(e, n) {
                                                this[we] = n, this[_e] = e, this[be] && (this.removeEventListener("load", u), this.removeEventListener("error", c)), this.addEventListener("load", u), this.addEventListener("error", c), this[be] = !0, t.apply(this, arguments)
                                            }
                                        }
                                    }

                                    function u() {
                                        if (!i(r, this[we].replace(/\?.*$/, ""))) {
                                            var t = {
                                                status: this.status,
                                                request: this[_e] + " " + this[we]
                                            };
                                            this.status >= 400 ? n.leaveBreadcrumb("XMLHttpRequest failed", t, me) : n.leaveBreadcrumb("XMLHttpRequest succeeded", t, me)
                                        }
                                    }

                                    function c() {
                                        i(r, this[we].replace(/\?.*$/, "")) || n.leaveBreadcrumb("XMLHttpRequest error", {
                                            request: this[_e] + " " + this[we]
                                        }, me)
                                    }

                                    function l() {
                                        if ("fetch" in e && !e.fetch.polyfill) {
                                            var t = e.fetch;
                                            e.fetch = function() {
                                                var e, n = arguments,
                                                    r = arguments[0],
                                                    i = arguments[1],
                                                    a = null;
                                                return r && "object" == typeof r ? (a = r.url, i && "method" in i ? e = i.method : r && "method" in r && (e = r.method)) : (a = r, i && "method" in i && (e = i.method)), void 0 === e && (e = "GET"), new Promise((function(r, i) {
                                                    t.apply(void 0, n).then((function(t) {
                                                        o(t, e, a), r(t)
                                                    })).catch((function(t) {
                                                        s(e, a), i(t)
                                                    }))
                                                }))
                                            }
                                        }
                                    }
                                }
                            }
                        },
                        ke = {
                            load: function(t) {
                                var e = 0;
                                t.addOnError((function(n) {
                                    if (e >= t._config.maxEvents) return !1;
                                    e++
                                })), t.resetEventCount = function() {
                                    e = 0
                                }
                            },
                            configSchema: {
                                maxEvents: {
                                    defaultValue: function() {
                                        return 10
                                    },
                                    message: "should be a positive integer ≤100",
                                    validate: function(t) {
                                        return c(1, 100)(t)
                                    }
                                }
                            }
                        },
                        Se = {},
                        Ee = (Se = {
                            load: function(t) {
                                t.addOnError((function(t) {
                                    var e = n(t.errors, (function(t, e) {
                                        return t.concat(e.stacktrace)
                                    }), []);
                                    g(e, (function(t) {
                                        t.file = Ee(t.file)
                                    }))
                                }))
                            }
                        })._strip = function(t) {
                            return "string" == typeof t ? t.replace(/\?.*$/, "").replace(/#.*$/, "") : t
                        },
                        Te = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    if (e._config.autoDetectErrors && e._config.enabledErrorTypes.unhandledExceptions) {
                                        var n = t.onerror;
                                        t.onerror = r
                                    }

                                    function r(t, r, i, o, s) {
                                        if (0 === i && /Script error\.?/.test(t)) e._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/yy3rn63z");
                                        else {
                                            var a, u = {
                                                severity: "error",
                                                unhandled: !0,
                                                severityReason: {
                                                    type: "unhandledException"
                                                }
                                            };
                                            if (s) a = e.Event.create(s, !0, u, "window onerror", 1), Ce(a.errors[0].stacktrace, r, i, o);
                                            else if ("object" != typeof t || null === t || r && "string" == typeof r || i || o || s) a = e.Event.create(t, !0, u, "window onerror", 1), Ce(a.errors[0].stacktrace, r, i, o);
                                            else {
                                                var c = t.type ? "Event: " + t.type : "Error",
                                                    l = t.message || t.detail || "";
                                                (a = e.Event.create({
                                                    name: c,
                                                    message: l
                                                }, !0, u, "window onerror", 1)).originalError = t, a.addMetadata("window onerror", {
                                                    event: t,
                                                    extraParameters: r
                                                })
                                            }
                                            e._notify(a)
                                        }
                                        "function" == typeof n && n.apply(this, arguments)
                                    }
                                }
                            }
                        },
                        Ce = function(t, e, n, r) {
                            t[0] || t.push({});
                            var i = t[0];
                            i.file || "string" != typeof e || (i.file = e), !i.lineNumber && Ae(n) && (i.lineNumber = n), i.columnNumber || (Ae(r) ? i.columnNumber = r : window.event && Ae(window.event.errorCharacter) && (i.columnNumber = window.event.errorCharacter))
                        },
                        Ae = function(t) {
                            return "number" == typeof t && "NaN" !== String.call(t)
                        },
                        Oe = function(t) {
                            return void 0 === t && (t = window), {
                                load: function(e) {
                                    if (e._config.autoDetectErrors && e._config.enabledErrorTypes.unhandledRejections) {
                                        var n = function(t) {
                                            var n = t.reason,
                                                r = !1;
                                            try {
                                                t.detail && t.detail.reason && (n = t.detail.reason, r = !0)
                                            } catch (t) {}
                                            var i = e.Event.create(n, !1, {
                                                severity: "error",
                                                unhandled: !0,
                                                severityReason: {
                                                    type: "unhandledPromiseRejection"
                                                }
                                            }, "unhandledrejection handler", 1, e._logger);
                                            r && g(i.errors[0].stacktrace, Ne(n)), e._notify(i, (function(t) {
                                                var e;
                                                T(t.originalError) && !t.originalError.stack && t.addMetadata("unhandledRejection handler", ((e = {})[Object.prototype.toString.call(t.originalError)] = {
                                                    name: t.originalError.name,
                                                    message: t.originalError.message,
                                                    code: t.originalError.code
                                                }, e))
                                            }))
                                        };
                                        "addEventListener" in t ? t.addEventListener("unhandledrejection", n) : t.onunhandledrejection = function(t, e) {
                                            n({
                                                detail: {
                                                    reason: t,
                                                    promise: e
                                                }
                                            })
                                        }
                                    }
                                }
                            }
                        },
                        Ne = function(t) {
                            return function(e) {
                                e.file !== t.toString() && e.method && (e.method = e.method.replace(/^\s+/, ""))
                            }
                        },
                        Le = {},
                        Re = "Bugsnag JavaScript",
                        Pe = "7.13.2",
                        je = "https://github.com/bugsnag/bugsnag-js",
                        Me = p({}, h.schema, m),
                        De = {
                            _client: null,
                            createClient: function(t) {
                                "string" == typeof t && (t = {
                                    apiKey: t
                                }), t || (t = {});
                                var e = [Lt, Jt(), Rt(), Qt(), ke, Zt, ee, Se, Te(), Oe(), de(), ce(), xe(), ne, se()],
                                    n = new ct(t, Me, e, {
                                        name: Re,
                                        version: Pe,
                                        url: je
                                    });
                                return n._setDelivery(window.XDomainRequest ? Et : At), n._logger.debug("Loaded!"), n.leaveBreadcrumb("Bugsnag loaded", {}, "state"), n._config.autoTrackSessions ? n.startSession() : n
                            },
                            start: function(t) {
                                return De._client ? (De._client._logger.warn("Bugsnag.start() was called more than once. Ignoring."), De._client) : (De._client = De.createClient(t), De._client)
                            }
                        };
                    return g(["resetEventCount"].concat(u(ct.prototype)), (function(t) {
                        /^_/.test(t) || (De[t] = function() {
                            if (!De._client) return console.log("Bugsnag." + t + "() was called before Bugsnag.start()");
                            De._client._depth += 1;
                            var e = De._client[t].apply(De._client, arguments);
                            return De._client._depth -= 1, e
                        })
                    })), (Le = De).Client = ct, Le.Event = q, Le.Session = it, Le.Breadcrumb = w, Le.default = De, Le
                }()
            },
            64061: (t, e, n) => {
                t.exports = n(97748)
            },
            57576: function(t, e) {
                var n, r, i;
                r = "undefined" != typeof window ? window : this, i = function(r, i) {
                    var o = [],
                        s = r.document,
                        a = o.slice,
                        u = o.concat,
                        c = o.push,
                        l = o.indexOf,
                        f = {},
                        h = f.toString,
                        d = f.hasOwnProperty,
                        p = {},
                        g = "1.12.4",
                        y = function(t, e) {
                            return new y.fn.init(t, e)
                        },
                        v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                        m = /^-ms-/,
                        b = /-([\da-z])/gi,
                        w = function(t, e) {
                            return e.toUpperCase()
                        };

                    function _(t) {
                        var e = !!t && "length" in t && t.length,
                            n = y.type(t);
                        return "function" !== n && !y.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }
                    y.fn = y.prototype = {
                        jquery: g,
                        constructor: y,
                        selector: "",
                        length: 0,
                        toArray: function() {
                            return a.call(this)
                        },
                        get: function(t) {
                            return null != t ? t < 0 ? this[t + this.length] : this[t] : a.call(this)
                        },
                        pushStack: function(t) {
                            var e = y.merge(this.constructor(), t);
                            return e.prevObject = this, e.context = this.context, e
                        },
                        each: function(t) {
                            return y.each(this, t)
                        },
                        map: function(t) {
                            return this.pushStack(y.map(this, (function(e, n) {
                                return t.call(e, n, e)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(a.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        eq: function(t) {
                            var e = this.length,
                                n = +t + (t < 0 ? e : 0);
                            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: c,
                        sort: o.sort,
                        splice: o.splice
                    }, y.extend = y.fn.extend = function() {
                        var t, e, n, r, i, o, s = arguments[0] || {},
                            a = 1,
                            u = arguments.length,
                            c = !1;
                        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || y.isFunction(s) || (s = {}), a === u && (s = this, a--); a < u; a++)
                            if (null != (i = arguments[a]))
                                for (r in i) t = s[r], s !== (n = i[r]) && (c && n && (y.isPlainObject(n) || (e = y.isArray(n))) ? (e ? (e = !1, o = t && y.isArray(t) ? t : []) : o = t && y.isPlainObject(t) ? t : {}, s[r] = y.extend(c, o, n)) : void 0 !== n && (s[r] = n));
                        return s
                    }, y.extend({
                        expando: "jQuery" + (g + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t)
                        },
                        noop: function() {},
                        isFunction: function(t) {
                            return "function" === y.type(t)
                        },
                        isArray: Array.isArray || function(t) {
                            return "array" === y.type(t)
                        },
                        isWindow: function(t) {
                            return null != t && t == t.window
                        },
                        isNumeric: function(t) {
                            var e = t && t.toString();
                            return !y.isArray(t) && e - parseFloat(e) + 1 >= 0
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0
                        },
                        isPlainObject: function(t) {
                            var e;
                            if (!t || "object" !== y.type(t) || t.nodeType || y.isWindow(t)) return !1;
                            try {
                                if (t.constructor && !d.call(t, "constructor") && !d.call(t.constructor.prototype, "isPrototypeOf")) return !1
                            } catch (t) {
                                return !1
                            }
                            if (!p.ownFirst)
                                for (e in t) return d.call(t, e);
                            for (e in t);
                            return void 0 === e || d.call(t, e)
                        },
                        type: function(t) {
                            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[h.call(t)] || "object" : typeof t
                        },
                        globalEval: function(t) {
                            t && y.trim(t) && (r.execScript || function(t) {
                                r.eval.call(r, t)
                            })(t)
                        },
                        camelCase: function(t) {
                            return t.replace(m, "ms-").replace(b, w)
                        },
                        nodeName: function(t, e) {
                            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                        },
                        each: function(t, e) {
                            var n, r = 0;
                            if (_(t))
                                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                            else
                                for (r in t)
                                    if (!1 === e.call(t[r], r, t[r])) break;
                            return t
                        },
                        trim: function(t) {
                            return null == t ? "" : (t + "").replace(v, "")
                        },
                        makeArray: function(t, e) {
                            var n = e || [];
                            return null != t && (_(Object(t)) ? y.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n
                        },
                        inArray: function(t, e, n) {
                            var r;
                            if (e) {
                                if (l) return l.call(e, t, n);
                                for (r = e.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0; n < r; n++)
                                    if (n in e && e[n] === t) return n
                            }
                            return -1
                        },
                        merge: function(t, e) {
                            for (var n = +e.length, r = 0, i = t.length; r < n;) t[i++] = e[r++];
                            if (n != n)
                                for (; void 0 !== e[r];) t[i++] = e[r++];
                            return t.length = i, t
                        },
                        grep: function(t, e, n) {
                            for (var r = [], i = 0, o = t.length, s = !n; i < o; i++) !e(t[i], i) !== s && r.push(t[i]);
                            return r
                        },
                        map: function(t, e, n) {
                            var r, i, o = 0,
                                s = [];
                            if (_(t))
                                for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && s.push(i);
                            else
                                for (o in t) null != (i = e(t[o], o, n)) && s.push(i);
                            return u.apply([], s)
                        },
                        guid: 1,
                        proxy: function(t, e) {
                            var n, r, i;
                            if ("string" == typeof e && (i = t[e], e = t, t = i), y.isFunction(t)) return n = a.call(arguments, 2), (r = function() {
                                return t.apply(e || this, n.concat(a.call(arguments)))
                            }).guid = t.guid = t.guid || y.guid++, r
                        },
                        now: function() {
                            return +new Date
                        },
                        support: p
                    }), "function" == typeof Symbol && (y.fn[Symbol.iterator] = o[Symbol.iterator]), y.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                        f["[object " + e + "]"] = e.toLowerCase()
                    }));
                    var x = function(t) {
                        var e, n, r, i, o, s, a, u, c, l, f, h, d, p, g, y, v, m, b, w = "sizzle" + 1 * new Date,
                            _ = t.document,
                            x = 0,
                            k = 0,
                            S = ot(),
                            E = ot(),
                            T = ot(),
                            C = function(t, e) {
                                return t === e && (f = !0), 0
                            },
                            A = 1 << 31,
                            O = {}.hasOwnProperty,
                            N = [],
                            L = N.pop,
                            R = N.push,
                            P = N.push,
                            j = N.slice,
                            M = function(t, e) {
                                for (var n = 0, r = t.length; n < r; n++)
                                    if (t[n] === e) return n;
                                return -1
                            },
                            D = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                            B = "[\\x20\\t\\r\\n\\f]",
                            I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                            q = "\\[[\\x20\\t\\r\\n\\f]*(" + I + ")(?:" + B + "*([*^$|!~]?=)" + B + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + B + "*\\]",
                            U = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + q + ")*)|.*)\\)|)",
                            H = new RegExp(B + "+", "g"),
                            F = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                            z = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                            $ = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                            W = new RegExp("=[\\x20\\t\\r\\n\\f]*([^\\]'\"]*?)[\\x20\\t\\r\\n\\f]*\\]", "g"),
                            X = new RegExp(U),
                            Y = new RegExp("^" + I + "$"),
                            V = {
                                ID: new RegExp("^#(" + I + ")"),
                                CLASS: new RegExp("^\\.(" + I + ")"),
                                TAG: new RegExp("^(" + I + "|[*])"),
                                ATTR: new RegExp("^" + q),
                                PSEUDO: new RegExp("^" + U),
                                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                bool: new RegExp("^(?:" + D + ")$", "i"),
                                needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                            },
                            K = /^(?:input|select|textarea|button)$/i,
                            J = /^h\d$/i,
                            G = /^[^{]+\{\s*\[native \w/,
                            Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            Z = /[+~]/,
                            tt = /'|\\/g,
                            et = new RegExp("\\\\([\\da-f]{1,6}[\\x20\\t\\r\\n\\f]?|([\\x20\\t\\r\\n\\f])|.)", "ig"),
                            nt = function(t, e, n) {
                                var r = "0x" + e - 65536;
                                return r != r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                            },
                            rt = function() {
                                h()
                            };
                        try {
                            P.apply(N = j.call(_.childNodes), _.childNodes), N[_.childNodes.length].nodeType
                        } catch (t) {
                            P = {
                                apply: N.length ? function(t, e) {
                                    R.apply(t, j.call(e))
                                } : function(t, e) {
                                    for (var n = t.length, r = 0; t[n++] = e[r++];);
                                    t.length = n - 1
                                }
                            }
                        }

                        function it(t, e, r, i) {
                            var o, a, c, l, f, p, v, m, x = e && e.ownerDocument,
                                k = e ? e.nodeType : 9;
                            if (r = r || [], "string" != typeof t || !t || 1 !== k && 9 !== k && 11 !== k) return r;
                            if (!i && ((e ? e.ownerDocument || e : _) !== d && h(e), e = e || d, g)) {
                                if (11 !== k && (p = Q.exec(t)))
                                    if (o = p[1]) {
                                        if (9 === k) {
                                            if (!(c = e.getElementById(o))) return r;
                                            if (c.id === o) return r.push(c), r
                                        } else if (x && (c = x.getElementById(o)) && b(e, c) && c.id === o) return r.push(c), r
                                    } else {
                                        if (p[2]) return P.apply(r, e.getElementsByTagName(t)), r;
                                        if ((o = p[3]) && n.getElementsByClassName && e.getElementsByClassName) return P.apply(r, e.getElementsByClassName(o)), r
                                    }
                                if (n.qsa && !T[t + " "] && (!y || !y.test(t))) {
                                    if (1 !== k) x = e, m = t;
                                    else if ("object" !== e.nodeName.toLowerCase()) {
                                        for ((l = e.getAttribute("id")) ? l = l.replace(tt, "\\$&") : e.setAttribute("id", l = w), a = (v = s(t)).length, f = Y.test(l) ? "#" + l : "[id='" + l + "']"; a--;) v[a] = f + " " + gt(v[a]);
                                        m = v.join(","), x = Z.test(t) && dt(e.parentNode) || e
                                    }
                                    if (m) try {
                                        return P.apply(r, x.querySelectorAll(m)), r
                                    } catch (t) {} finally {
                                        l === w && e.removeAttribute("id")
                                    }
                                }
                            }
                            return u(t.replace(F, "$1"), e, r, i)
                        }

                        function ot() {
                            var t = [];
                            return function e(n, i) {
                                return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
                            }
                        }

                        function st(t) {
                            return t[w] = !0, t
                        }

                        function at(t) {
                            var e = d.createElement("div");
                            try {
                                return !!t(e)
                            } catch (t) {
                                return !1
                            } finally {
                                e.parentNode && e.parentNode.removeChild(e), e = null
                            }
                        }

                        function ut(t, e) {
                            for (var n = t.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = e
                        }

                        function ct(t, e) {
                            var n = e && t,
                                r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || A) - (~t.sourceIndex || A);
                            if (r) return r;
                            if (n)
                                for (; n = n.nextSibling;)
                                    if (n === e) return -1;
                            return t ? 1 : -1
                        }

                        function lt(t) {
                            return function(e) {
                                return "input" === e.nodeName.toLowerCase() && e.type === t
                            }
                        }

                        function ft(t) {
                            return function(e) {
                                var n = e.nodeName.toLowerCase();
                                return ("input" === n || "button" === n) && e.type === t
                            }
                        }

                        function ht(t) {
                            return st((function(e) {
                                return e = +e, st((function(n, r) {
                                    for (var i, o = t([], n.length, e), s = o.length; s--;) n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                                }))
                            }))
                        }

                        function dt(t) {
                            return t && void 0 !== t.getElementsByTagName && t
                        }
                        for (e in n = it.support = {}, o = it.isXML = function(t) {
                                var e = t && (t.ownerDocument || t).documentElement;
                                return !!e && "HTML" !== e.nodeName
                            }, h = it.setDocument = function(t) {
                                var e, i, s = t ? t.ownerDocument || t : _;
                                return s !== d && 9 === s.nodeType && s.documentElement ? (p = (d = s).documentElement, g = !o(d), (i = d.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", rt, !1) : i.attachEvent && i.attachEvent("onunload", rt)), n.attributes = at((function(t) {
                                    return t.className = "i", !t.getAttribute("className")
                                })), n.getElementsByTagName = at((function(t) {
                                    return t.appendChild(d.createComment("")), !t.getElementsByTagName("*").length
                                })), n.getElementsByClassName = G.test(d.getElementsByClassName), n.getById = at((function(t) {
                                    return p.appendChild(t).id = w, !d.getElementsByName || !d.getElementsByName(w).length
                                })), n.getById ? (r.find.ID = function(t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var n = e.getElementById(t);
                                        return n ? [n] : []
                                    }
                                }, r.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        return t.getAttribute("id") === e
                                    }
                                }) : (delete r.find.ID, r.filter.ID = function(t) {
                                    var e = t.replace(et, nt);
                                    return function(t) {
                                        var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return n && n.value === e
                                    }
                                }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                                } : function(t, e) {
                                    var n, r = [],
                                        i = 0,
                                        o = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                        return r
                                    }
                                    return o
                                }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                                    if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                                }, v = [], y = [], (n.qsa = G.test(d.querySelectorAll)) && (at((function(t) {
                                    p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || y.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + D + ")"), t.querySelectorAll("[id~=" + w + "-]").length || y.push("~="), t.querySelectorAll(":checked").length || y.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || y.push(".#.+[+~]")
                                })), at((function(t) {
                                    var e = d.createElement("input");
                                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && y.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), t.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), y.push(",.*:")
                                }))), (n.matchesSelector = G.test(m = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && at((function(t) {
                                    n.disconnectedMatch = m.call(t, "div"), m.call(t, "[s!='']:x"), v.push("!=", U)
                                })), y = y.length && new RegExp(y.join("|")), v = v.length && new RegExp(v.join("|")), e = G.test(p.compareDocumentPosition), b = e || G.test(p.contains) ? function(t, e) {
                                    var n = 9 === t.nodeType ? t.documentElement : t,
                                        r = e && e.parentNode;
                                    return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                                } : function(t, e) {
                                    if (e)
                                        for (; e = e.parentNode;)
                                            if (e === t) return !0;
                                    return !1
                                }, C = e ? function(t, e) {
                                    if (t === e) return f = !0, 0;
                                    var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return r || (1 & (r = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t === d || t.ownerDocument === _ && b(_, t) ? -1 : e === d || e.ownerDocument === _ && b(_, e) ? 1 : l ? M(l, t) - M(l, e) : 0 : 4 & r ? -1 : 1)
                                } : function(t, e) {
                                    if (t === e) return f = !0, 0;
                                    var n, r = 0,
                                        i = t.parentNode,
                                        o = e.parentNode,
                                        s = [t],
                                        a = [e];
                                    if (!i || !o) return t === d ? -1 : e === d ? 1 : i ? -1 : o ? 1 : l ? M(l, t) - M(l, e) : 0;
                                    if (i === o) return ct(t, e);
                                    for (n = t; n = n.parentNode;) s.unshift(n);
                                    for (n = e; n = n.parentNode;) a.unshift(n);
                                    for (; s[r] === a[r];) r++;
                                    return r ? ct(s[r], a[r]) : s[r] === _ ? -1 : a[r] === _ ? 1 : 0
                                }, d) : d
                            }, it.matches = function(t, e) {
                                return it(t, null, null, e)
                            }, it.matchesSelector = function(t, e) {
                                if ((t.ownerDocument || t) !== d && h(t), e = e.replace(W, "='$1']"), n.matchesSelector && g && !T[e + " "] && (!v || !v.test(e)) && (!y || !y.test(e))) try {
                                    var r = m.call(t, e);
                                    if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                                } catch (t) {}
                                return it(e, d, null, [t]).length > 0
                            }, it.contains = function(t, e) {
                                return (t.ownerDocument || t) !== d && h(t), b(t, e)
                            }, it.attr = function(t, e) {
                                (t.ownerDocument || t) !== d && h(t);
                                var i = r.attrHandle[e.toLowerCase()],
                                    o = i && O.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !g) : void 0;
                                return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                            }, it.error = function(t) {
                                throw new Error("Syntax error, unrecognized expression: " + t)
                            }, it.uniqueSort = function(t) {
                                var e, r = [],
                                    i = 0,
                                    o = 0;
                                if (f = !n.detectDuplicates, l = !n.sortStable && t.slice(0), t.sort(C), f) {
                                    for (; e = t[o++];) e === t[o] && (i = r.push(o));
                                    for (; i--;) t.splice(r[i], 1)
                                }
                                return l = null, t
                            }, i = it.getText = function(t) {
                                var e, n = "",
                                    r = 0,
                                    o = t.nodeType;
                                if (o) {
                                    if (1 === o || 9 === o || 11 === o) {
                                        if ("string" == typeof t.textContent) return t.textContent;
                                        for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
                                    } else if (3 === o || 4 === o) return t.nodeValue
                                } else
                                    for (; e = t[r++];) n += i(e);
                                return n
                            }, (r = it.selectors = {
                                cacheLength: 50,
                                createPseudo: st,
                                match: V,
                                attrHandle: {},
                                find: {},
                                relative: {
                                    ">": {
                                        dir: "parentNode",
                                        first: !0
                                    },
                                    " ": {
                                        dir: "parentNode"
                                    },
                                    "+": {
                                        dir: "previousSibling",
                                        first: !0
                                    },
                                    "~": {
                                        dir: "previousSibling"
                                    }
                                },
                                preFilter: {
                                    ATTR: function(t) {
                                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                    },
                                    CHILD: function(t) {
                                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || it.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && it.error(t[0]), t
                                    },
                                    PSEUDO: function(t) {
                                        var e, n = !t[6] && t[2];
                                        return V.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = s(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                    }
                                },
                                filter: {
                                    TAG: function(t) {
                                        var e = t.replace(et, nt).toLowerCase();
                                        return "*" === t ? function() {
                                            return !0
                                        } : function(t) {
                                            return t.nodeName && t.nodeName.toLowerCase() === e
                                        }
                                    },
                                    CLASS: function(t) {
                                        var e = S[t + " "];
                                        return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + B + "|$)")) && S(t, (function(t) {
                                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                        }))
                                    },
                                    ATTR: function(t, e, n) {
                                        return function(r) {
                                            var i = it.attr(r, t);
                                            return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(H, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                        }
                                    },
                                    CHILD: function(t, e, n, r, i) {
                                        var o = "nth" !== t.slice(0, 3),
                                            s = "last" !== t.slice(-4),
                                            a = "of-type" === e;
                                        return 1 === r && 0 === i ? function(t) {
                                            return !!t.parentNode
                                        } : function(e, n, u) {
                                            var c, l, f, h, d, p, g = o !== s ? "nextSibling" : "previousSibling",
                                                y = e.parentNode,
                                                v = a && e.nodeName.toLowerCase(),
                                                m = !u && !a,
                                                b = !1;
                                            if (y) {
                                                if (o) {
                                                    for (; g;) {
                                                        for (h = e; h = h[g];)
                                                            if (a ? h.nodeName.toLowerCase() === v : 1 === h.nodeType) return !1;
                                                        p = g = "only" === t && !p && "nextSibling"
                                                    }
                                                    return !0
                                                }
                                                if (p = [s ? y.firstChild : y.lastChild], s && m) {
                                                    for (b = (d = (c = (l = (f = (h = y)[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2], h = d && y.childNodes[d]; h = ++d && h && h[g] || (b = d = 0) || p.pop();)
                                                        if (1 === h.nodeType && ++b && h === e) {
                                                            l[t] = [x, d, b];
                                                            break
                                                        }
                                                } else if (m && (b = d = (c = (l = (f = (h = e)[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] || [])[0] === x && c[1]), !1 === b)
                                                    for (;
                                                        (h = ++d && h && h[g] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== v : 1 !== h.nodeType) || !++b || (m && ((l = (f = h[w] || (h[w] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[t] = [x, b]), h !== e)););
                                                return (b -= i) === r || b % r == 0 && b / r >= 0
                                            }
                                        }
                                    },
                                    PSEUDO: function(t, e) {
                                        var n, i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || it.error("unsupported pseudo: " + t);
                                        return i[w] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? st((function(t, n) {
                                            for (var r, o = i(t, e), s = o.length; s--;) t[r = M(t, o[s])] = !(n[r] = o[s])
                                        })) : function(t) {
                                            return i(t, 0, n)
                                        }) : i
                                    }
                                },
                                pseudos: {
                                    not: st((function(t) {
                                        var e = [],
                                            n = [],
                                            r = a(t.replace(F, "$1"));
                                        return r[w] ? st((function(t, e, n, i) {
                                            for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                                        })) : function(t, i, o) {
                                            return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                                        }
                                    })),
                                    has: st((function(t) {
                                        return function(e) {
                                            return it(t, e).length > 0
                                        }
                                    })),
                                    contains: st((function(t) {
                                        return t = t.replace(et, nt),
                                            function(e) {
                                                return (e.textContent || e.innerText || i(e)).indexOf(t) > -1
                                            }
                                    })),
                                    lang: st((function(t) {
                                        return Y.test(t || "") || it.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                            function(e) {
                                                var n;
                                                do {
                                                    if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                                return !1
                                            }
                                    })),
                                    target: function(e) {
                                        var n = t.location && t.location.hash;
                                        return n && n.slice(1) === e.id
                                    },
                                    root: function(t) {
                                        return t === p
                                    },
                                    focus: function(t) {
                                        return t === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                    },
                                    enabled: function(t) {
                                        return !1 === t.disabled
                                    },
                                    disabled: function(t) {
                                        return !0 === t.disabled
                                    },
                                    checked: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                                    },
                                    selected: function(t) {
                                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                    },
                                    empty: function(t) {
                                        for (t = t.firstChild; t; t = t.nextSibling)
                                            if (t.nodeType < 6) return !1;
                                        return !0
                                    },
                                    parent: function(t) {
                                        return !r.pseudos.empty(t)
                                    },
                                    header: function(t) {
                                        return J.test(t.nodeName)
                                    },
                                    input: function(t) {
                                        return K.test(t.nodeName)
                                    },
                                    button: function(t) {
                                        var e = t.nodeName.toLowerCase();
                                        return "input" === e && "button" === t.type || "button" === e
                                    },
                                    text: function(t) {
                                        var e;
                                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                    },
                                    first: ht((function() {
                                        return [0]
                                    })),
                                    last: ht((function(t, e) {
                                        return [e - 1]
                                    })),
                                    eq: ht((function(t, e, n) {
                                        return [n < 0 ? n + e : n]
                                    })),
                                    even: ht((function(t, e) {
                                        for (var n = 0; n < e; n += 2) t.push(n);
                                        return t
                                    })),
                                    odd: ht((function(t, e) {
                                        for (var n = 1; n < e; n += 2) t.push(n);
                                        return t
                                    })),
                                    lt: ht((function(t, e, n) {
                                        for (var r = n < 0 ? n + e : n; --r >= 0;) t.push(r);
                                        return t
                                    })),
                                    gt: ht((function(t, e, n) {
                                        for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                                        return t
                                    }))
                                }
                            }).pseudos.nth = r.pseudos.eq, {
                                radio: !0,
                                checkbox: !0,
                                file: !0,
                                password: !0,
                                image: !0
                            }) r.pseudos[e] = lt(e);
                        for (e in {
                                submit: !0,
                                reset: !0
                            }) r.pseudos[e] = ft(e);

                        function pt() {}

                        function gt(t) {
                            for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                            return r
                        }

                        function yt(t, e, n) {
                            var r = e.dir,
                                i = n && "parentNode" === r,
                                o = k++;
                            return e.first ? function(e, n, o) {
                                for (; e = e[r];)
                                    if (1 === e.nodeType || i) return t(e, n, o)
                            } : function(e, n, s) {
                                var a, u, c, l = [x, o];
                                if (s) {
                                    for (; e = e[r];)
                                        if ((1 === e.nodeType || i) && t(e, n, s)) return !0
                                } else
                                    for (; e = e[r];)
                                        if (1 === e.nodeType || i) {
                                            if ((a = (u = (c = e[w] || (e[w] = {}))[e.uniqueID] || (c[e.uniqueID] = {}))[r]) && a[0] === x && a[1] === o) return l[2] = a[2];
                                            if (u[r] = l, l[2] = t(e, n, s)) return !0
                                        }
                            }
                        }

                        function vt(t) {
                            return t.length > 1 ? function(e, n, r) {
                                for (var i = t.length; i--;)
                                    if (!t[i](e, n, r)) return !1;
                                return !0
                            } : t[0]
                        }

                        function mt(t, e, n, r, i) {
                            for (var o, s = [], a = 0, u = t.length, c = null != e; a < u; a++)(o = t[a]) && (n && !n(o, r, i) || (s.push(o), c && e.push(a)));
                            return s
                        }

                        function bt(t, e, n, r, i, o) {
                            return r && !r[w] && (r = bt(r)), i && !i[w] && (i = bt(i, o)), st((function(o, s, a, u) {
                                var c, l, f, h = [],
                                    d = [],
                                    p = s.length,
                                    g = o || function(t, e, n) {
                                        for (var r = 0, i = e.length; r < i; r++) it(t, e[r], n);
                                        return n
                                    }(e || "*", a.nodeType ? [a] : a, []),
                                    y = !t || !o && e ? g : mt(g, h, t, a, u),
                                    v = n ? i || (o ? t : p || r) ? [] : s : y;
                                if (n && n(y, v, a, u), r)
                                    for (c = mt(v, d), r(c, [], a, u), l = c.length; l--;)(f = c[l]) && (v[d[l]] = !(y[d[l]] = f));
                                if (o) {
                                    if (i || t) {
                                        if (i) {
                                            for (c = [], l = v.length; l--;)(f = v[l]) && c.push(y[l] = f);
                                            i(null, v = [], c, u)
                                        }
                                        for (l = v.length; l--;)(f = v[l]) && (c = i ? M(o, f) : h[l]) > -1 && (o[c] = !(s[c] = f))
                                    }
                                } else v = mt(v === s ? v.splice(p, v.length) : v), i ? i(null, s, v, u) : P.apply(s, v)
                            }))
                        }

                        function wt(t) {
                            for (var e, n, i, o = t.length, s = r.relative[t[0].type], a = s || r.relative[" "], u = s ? 1 : 0, l = yt((function(t) {
                                    return t === e
                                }), a, !0), f = yt((function(t) {
                                    return M(e, t) > -1
                                }), a, !0), h = [function(t, n, r) {
                                    var i = !s && (r || n !== c) || ((e = n).nodeType ? l(t, n, r) : f(t, n, r));
                                    return e = null, i
                                }]; u < o; u++)
                                if (n = r.relative[t[u].type]) h = [yt(vt(h), n)];
                                else {
                                    if ((n = r.filter[t[u].type].apply(null, t[u].matches))[w]) {
                                        for (i = ++u; i < o && !r.relative[t[i].type]; i++);
                                        return bt(u > 1 && vt(h), u > 1 && gt(t.slice(0, u - 1).concat({
                                            value: " " === t[u - 2].type ? "*" : ""
                                        })).replace(F, "$1"), n, u < i && wt(t.slice(u, i)), i < o && wt(t = t.slice(i)), i < o && gt(t))
                                    }
                                    h.push(n)
                                }
                            return vt(h)
                        }
                        return pt.prototype = r.filters = r.pseudos, r.setFilters = new pt, s = it.tokenize = function(t, e) {
                            var n, i, o, s, a, u, c, l = E[t + " "];
                            if (l) return e ? 0 : l.slice(0);
                            for (a = t, u = [], c = r.preFilter; a;) {
                                for (s in n && !(i = z.exec(a)) || (i && (a = a.slice(i[0].length) || a), u.push(o = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), o.push({
                                        value: n,
                                        type: i[0].replace(F, " ")
                                    }), a = a.slice(n.length)), r.filter) !(i = V[s].exec(a)) || c[s] && !(i = c[s](i)) || (n = i.shift(), o.push({
                                    value: n,
                                    type: s,
                                    matches: i
                                }), a = a.slice(n.length));
                                if (!n) break
                            }
                            return e ? a.length : a ? it.error(t) : E(t, u).slice(0)
                        }, a = it.compile = function(t, e) {
                            var n, i = [],
                                o = [],
                                a = T[t + " "];
                            if (!a) {
                                for (e || (e = s(t)), n = e.length; n--;)(a = wt(e[n]))[w] ? i.push(a) : o.push(a);
                                (a = T(t, function(t, e) {
                                    var n = e.length > 0,
                                        i = t.length > 0,
                                        o = function(o, s, a, u, l) {
                                            var f, p, y, v = 0,
                                                m = "0",
                                                b = o && [],
                                                w = [],
                                                _ = c,
                                                k = o || i && r.find.TAG("*", l),
                                                S = x += null == _ ? 1 : Math.random() || .1,
                                                E = k.length;
                                            for (l && (c = s === d || s || l); m !== E && null != (f = k[m]); m++) {
                                                if (i && f) {
                                                    for (p = 0, s || f.ownerDocument === d || (h(f), a = !g); y = t[p++];)
                                                        if (y(f, s || d, a)) {
                                                            u.push(f);
                                                            break
                                                        }
                                                    l && (x = S)
                                                }
                                                n && ((f = !y && f) && v--, o && b.push(f))
                                            }
                                            if (v += m, n && m !== v) {
                                                for (p = 0; y = e[p++];) y(b, w, s, a);
                                                if (o) {
                                                    if (v > 0)
                                                        for (; m--;) b[m] || w[m] || (w[m] = L.call(u));
                                                    w = mt(w)
                                                }
                                                P.apply(u, w), l && !o && w.length > 0 && v + e.length > 1 && it.uniqueSort(u)
                                            }
                                            return l && (x = S, c = _), b
                                        };
                                    return n ? st(o) : o
                                }(o, i))).selector = t
                            }
                            return a
                        }, u = it.select = function(t, e, i, o) {
                            var u, c, l, f, h, d = "function" == typeof t && t,
                                p = !o && s(t = d.selector || t);
                            if (i = i || [], 1 === p.length) {
                                if ((c = p[0] = p[0].slice(0)).length > 2 && "ID" === (l = c[0]).type && n.getById && 9 === e.nodeType && g && r.relative[c[1].type]) {
                                    if (!(e = (r.find.ID(l.matches[0].replace(et, nt), e) || [])[0])) return i;
                                    d && (e = e.parentNode), t = t.slice(c.shift().value.length)
                                }
                                for (u = V.needsContext.test(t) ? 0 : c.length; u-- && (l = c[u], !r.relative[f = l.type]);)
                                    if ((h = r.find[f]) && (o = h(l.matches[0].replace(et, nt), Z.test(c[0].type) && dt(e.parentNode) || e))) {
                                        if (c.splice(u, 1), !(t = o.length && gt(c))) return P.apply(i, o), i;
                                        break
                                    }
                            }
                            return (d || a(t, p))(o, e, !g, i, !e || Z.test(t) && dt(e.parentNode) || e), i
                        }, n.sortStable = w.split("").sort(C).join("") === w, n.detectDuplicates = !!f, h(), n.sortDetached = at((function(t) {
                            return 1 & t.compareDocumentPosition(d.createElement("div"))
                        })), at((function(t) {
                            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                        })) || ut("type|href|height|width", (function(t, e, n) {
                            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                        })), n.attributes && at((function(t) {
                            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                        })) || ut("value", (function(t, e, n) {
                            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                        })), at((function(t) {
                            return null == t.getAttribute("disabled")
                        })) || ut(D, (function(t, e, n) {
                            var r;
                            if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                        })), it
                    }(r);
                    y.find = x, y.expr = x.selectors, y.expr[":"] = y.expr.pseudos, y.uniqueSort = y.unique = x.uniqueSort, y.text = x.getText, y.isXMLDoc = x.isXML, y.contains = x.contains;
                    var k = function(t, e, n) {
                            for (var r = [], i = void 0 !== n;
                                (t = t[e]) && 9 !== t.nodeType;)
                                if (1 === t.nodeType) {
                                    if (i && y(t).is(n)) break;
                                    r.push(t)
                                }
                            return r
                        },
                        S = function(t, e) {
                            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                            return n
                        },
                        E = y.expr.match.needsContext,
                        T = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
                        C = /^.[^:#\[\.,]*$/;

                    function A(t, e, n) {
                        if (y.isFunction(e)) return y.grep(t, (function(t, r) {
                            return !!e.call(t, r, t) !== n
                        }));
                        if (e.nodeType) return y.grep(t, (function(t) {
                            return t === e !== n
                        }));
                        if ("string" == typeof e) {
                            if (C.test(e)) return y.filter(e, t, n);
                            e = y.filter(e, t)
                        }
                        return y.grep(t, (function(t) {
                            return y.inArray(t, e) > -1 !== n
                        }))
                    }
                    y.filter = function(t, e, n) {
                        var r = e[0];
                        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? y.find.matchesSelector(r, t) ? [r] : [] : y.find.matches(t, y.grep(e, (function(t) {
                            return 1 === t.nodeType
                        })))
                    }, y.fn.extend({
                        find: function(t) {
                            var e, n = [],
                                r = this,
                                i = r.length;
                            if ("string" != typeof t) return this.pushStack(y(t).filter((function() {
                                for (e = 0; e < i; e++)
                                    if (y.contains(r[e], this)) return !0
                            })));
                            for (e = 0; e < i; e++) y.find(t, r[e], n);
                            return (n = this.pushStack(i > 1 ? y.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
                        },
                        filter: function(t) {
                            return this.pushStack(A(this, t || [], !1))
                        },
                        not: function(t) {
                            return this.pushStack(A(this, t || [], !0))
                        },
                        is: function(t) {
                            return !!A(this, "string" == typeof t && E.test(t) ? y(t) : t || [], !1).length
                        }
                    });
                    var O, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
                    (y.fn.init = function(t, e, n) {
                        var r, i;
                        if (!t) return this;
                        if (n = n || O, "string" == typeof t) {
                            if (!(r = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : N.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (r[1]) {
                                if (e = e instanceof y ? e[0] : e, y.merge(this, y.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : s, !0)), T.test(r[1]) && y.isPlainObject(e))
                                    for (r in e) y.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                                return this
                            }
                            if ((i = s.getElementById(r[2])) && i.parentNode) {
                                if (i.id !== r[2]) return O.find(t);
                                this.length = 1, this[0] = i
                            }
                            return this.context = s, this.selector = t, this
                        }
                        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : y.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(y) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), y.makeArray(t, this))
                    }).prototype = y.fn, O = y(s);
                    var L = /^(?:parents|prev(?:Until|All))/,
                        R = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function P(t, e) {
                        do {
                            t = t[e]
                        } while (t && 1 !== t.nodeType);
                        return t
                    }
                    y.fn.extend({
                        has: function(t) {
                            var e, n = y(t, this),
                                r = n.length;
                            return this.filter((function() {
                                for (e = 0; e < r; e++)
                                    if (y.contains(this, n[e])) return !0
                            }))
                        },
                        closest: function(t, e) {
                            for (var n, r = 0, i = this.length, o = [], s = E.test(t) || "string" != typeof t ? y(t, e || this.context) : 0; r < i; r++)
                                for (n = this[r]; n && n !== e; n = n.parentNode)
                                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && y.find.matchesSelector(n, t))) {
                                        o.push(n);
                                        break
                                    }
                            return this.pushStack(o.length > 1 ? y.uniqueSort(o) : o)
                        },
                        index: function(t) {
                            return t ? "string" == typeof t ? y.inArray(this[0], y(t)) : y.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(t, e) {
                            return this.pushStack(y.uniqueSort(y.merge(this.get(), y(t, e))))
                        },
                        addBack: function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), y.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(t) {
                            return k(t, "parentNode")
                        },
                        parentsUntil: function(t, e, n) {
                            return k(t, "parentNode", n)
                        },
                        next: function(t) {
                            return P(t, "nextSibling")
                        },
                        prev: function(t) {
                            return P(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return k(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return k(t, "previousSibling")
                        },
                        nextUntil: function(t, e, n) {
                            return k(t, "nextSibling", n)
                        },
                        prevUntil: function(t, e, n) {
                            return k(t, "previousSibling", n)
                        },
                        siblings: function(t) {
                            return S((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return S(t.firstChild)
                        },
                        contents: function(t) {
                            return y.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : y.merge([], t.childNodes)
                        }
                    }, (function(t, e) {
                        y.fn[t] = function(n, r) {
                            var i = y.map(this, e, n);
                            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = y.filter(r, i)), this.length > 1 && (R[t] || (i = y.uniqueSort(i)), L.test(t) && (i = i.reverse())), this.pushStack(i)
                        }
                    }));
                    var j, M, D = /\S+/g;

                    function B() {
                        s.addEventListener ? (s.removeEventListener("DOMContentLoaded", I), r.removeEventListener("load", I)) : (s.detachEvent("onreadystatechange", I), r.detachEvent("onload", I))
                    }

                    function I() {
                        (s.addEventListener || "load" === r.event.type || "complete" === s.readyState) && (B(), y.ready())
                    }
                    for (M in y.Callbacks = function(t) {
                            t = "string" == typeof t ? function(t) {
                                var e = {};
                                return y.each(t.match(D) || [], (function(t, n) {
                                    e[n] = !0
                                })), e
                            }(t) : y.extend({}, t);
                            var e, n, r, i, o = [],
                                s = [],
                                a = -1,
                                u = function() {
                                    for (i = t.once, r = e = !0; s.length; a = -1)
                                        for (n = s.shift(); ++a < o.length;) !1 === o[a].apply(n[0], n[1]) && t.stopOnFalse && (a = o.length, n = !1);
                                    t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
                                },
                                c = {
                                    add: function() {
                                        return o && (n && !e && (a = o.length - 1, s.push(n)), function e(n) {
                                            y.each(n, (function(n, r) {
                                                y.isFunction(r) ? t.unique && c.has(r) || o.push(r) : r && r.length && "string" !== y.type(r) && e(r)
                                            }))
                                        }(arguments), n && !e && u()), this
                                    },
                                    remove: function() {
                                        return y.each(arguments, (function(t, e) {
                                            for (var n;
                                                (n = y.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= a && a--
                                        })), this
                                    },
                                    has: function(t) {
                                        return t ? y.inArray(t, o) > -1 : o.length > 0
                                    },
                                    empty: function() {
                                        return o && (o = []), this
                                    },
                                    disable: function() {
                                        return i = s = [], o = n = "", this
                                    },
                                    disabled: function() {
                                        return !o
                                    },
                                    lock: function() {
                                        return i = !0, n || c.disable(), this
                                    },
                                    locked: function() {
                                        return !!i
                                    },
                                    fireWith: function(t, n) {
                                        return i || (n = [t, (n = n || []).slice ? n.slice() : n], s.push(n), e || u()), this
                                    },
                                    fire: function() {
                                        return c.fireWith(this, arguments), this
                                    },
                                    fired: function() {
                                        return !!r
                                    }
                                };
                            return c
                        }, y.extend({
                            Deferred: function(t) {
                                var e = [
                                        ["resolve", "done", y.Callbacks("once memory"), "resolved"],
                                        ["reject", "fail", y.Callbacks("once memory"), "rejected"],
                                        ["notify", "progress", y.Callbacks("memory")]
                                    ],
                                    n = "pending",
                                    r = {
                                        state: function() {
                                            return n
                                        },
                                        always: function() {
                                            return i.done(arguments).fail(arguments), this
                                        },
                                        then: function() {
                                            var t = arguments;
                                            return y.Deferred((function(n) {
                                                y.each(e, (function(e, o) {
                                                    var s = y.isFunction(t[e]) && t[e];
                                                    i[o[1]]((function() {
                                                        var t = s && s.apply(this, arguments);
                                                        t && y.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [t] : arguments)
                                                    }))
                                                })), t = null
                                            })).promise()
                                        },
                                        promise: function(t) {
                                            return null != t ? y.extend(t, r) : r
                                        }
                                    },
                                    i = {};
                                return r.pipe = r.then, y.each(e, (function(t, o) {
                                    var s = o[2],
                                        a = o[3];
                                    r[o[1]] = s.add, a && s.add((function() {
                                        n = a
                                    }), e[1 ^ t][2].disable, e[2][2].lock), i[o[0]] = function() {
                                        return i[o[0] + "With"](this === i ? r : this, arguments), this
                                    }, i[o[0] + "With"] = s.fireWith
                                })), r.promise(i), t && t.call(i, i), i
                            },
                            when: function(t) {
                                var e, n, r, i = 0,
                                    o = a.call(arguments),
                                    s = o.length,
                                    u = 1 !== s || t && y.isFunction(t.promise) ? s : 0,
                                    c = 1 === u ? t : y.Deferred(),
                                    l = function(t, n, r) {
                                        return function(i) {
                                            n[t] = this, r[t] = arguments.length > 1 ? a.call(arguments) : i, r === e ? c.notifyWith(n, r) : --u || c.resolveWith(n, r)
                                        }
                                    };
                                if (s > 1)
                                    for (e = new Array(s), n = new Array(s), r = new Array(s); i < s; i++) o[i] && y.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, e)).done(l(i, r, o)).fail(c.reject) : --u;
                                return u || c.resolveWith(r, o), c.promise()
                            }
                        }), y.fn.ready = function(t) {
                            return y.ready.promise().done(t), this
                        }, y.extend({
                            isReady: !1,
                            readyWait: 1,
                            holdReady: function(t) {
                                t ? y.readyWait++ : y.ready(!0)
                            },
                            ready: function(t) {
                                (!0 === t ? --y.readyWait : y.isReady) || (y.isReady = !0, !0 !== t && --y.readyWait > 0 || (j.resolveWith(s, [y]), y.fn.triggerHandler && (y(s).triggerHandler("ready"), y(s).off("ready"))))
                            }
                        }), y.ready.promise = function(t) {
                            if (!j)
                                if (j = y.Deferred(), "complete" === s.readyState || "loading" !== s.readyState && !s.documentElement.doScroll) r.setTimeout(y.ready);
                                else if (s.addEventListener) s.addEventListener("DOMContentLoaded", I), r.addEventListener("load", I);
                            else {
                                s.attachEvent("onreadystatechange", I), r.attachEvent("onload", I);
                                var e = !1;
                                try {
                                    e = null == r.frameElement && s.documentElement
                                } catch (t) {}
                                e && e.doScroll && function t() {
                                    if (!y.isReady) {
                                        try {
                                            e.doScroll("left")
                                        } catch (e) {
                                            return r.setTimeout(t, 50)
                                        }
                                        B(), y.ready()
                                    }
                                }()
                            }
                            return j.promise(t)
                        }, y.ready.promise(), y(p)) break;
                    p.ownFirst = "0" === M, p.inlineBlockNeedsLayout = !1, y((function() {
                            var t, e, n, r;
                            (n = s.getElementsByTagName("body")[0]) && n.style && (e = s.createElement("div"), (r = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", p.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
                        })),
                        function() {
                            var t = s.createElement("div");
                            p.deleteExpando = !0;
                            try {
                                delete t.test
                            } catch (t) {
                                p.deleteExpando = !1
                            }
                            t = null
                        }();
                    var q, U = function(t) {
                            var e = y.noData[(t.nodeName + " ").toLowerCase()],
                                n = +t.nodeType || 1;
                            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
                        },
                        H = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        F = /([A-Z])/g;

                    function z(t, e, n) {
                        if (void 0 === n && 1 === t.nodeType) {
                            var r = "data-" + e.replace(F, "-$1").toLowerCase();
                            if ("string" == typeof(n = t.getAttribute(r))) {
                                try {
                                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : H.test(n) ? y.parseJSON(n) : n)
                                } catch (t) {}
                                y.data(t, e, n)
                            } else n = void 0
                        }
                        return n
                    }

                    function $(t) {
                        var e;
                        for (e in t)
                            if (("data" !== e || !y.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
                        return !0
                    }

                    function W(t, e, n, r) {
                        if (U(t)) {
                            var i, s, a = y.expando,
                                u = t.nodeType,
                                c = u ? y.cache : t,
                                l = u ? t[a] : t[a] && a;
                            if (l && c[l] && (r || c[l].data) || void 0 !== n || "string" != typeof e) return l || (l = u ? t[a] = o.pop() || y.guid++ : a), c[l] || (c[l] = u ? {} : {
                                toJSON: y.noop
                            }), "object" != typeof e && "function" != typeof e || (r ? c[l] = y.extend(c[l], e) : c[l].data = y.extend(c[l].data, e)), s = c[l], r || (s.data || (s.data = {}), s = s.data), void 0 !== n && (s[y.camelCase(e)] = n), "string" == typeof e ? null == (i = s[e]) && (i = s[y.camelCase(e)]) : i = s, i
                        }
                    }

                    function X(t, e, n) {
                        if (U(t)) {
                            var r, i, o = t.nodeType,
                                s = o ? y.cache : t,
                                a = o ? t[y.expando] : y.expando;
                            if (s[a]) {
                                if (e && (r = n ? s[a] : s[a].data)) {
                                    i = (e = y.isArray(e) ? e.concat(y.map(e, y.camelCase)) : e in r || (e = y.camelCase(e)) in r ? [e] : e.split(" ")).length;
                                    for (; i--;) delete r[e[i]];
                                    if (n ? !$(r) : !y.isEmptyObject(r)) return
                                }(n || (delete s[a].data, $(s[a]))) && (o ? y.cleanData([t], !0) : p.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
                            }
                        }
                    }
                    y.extend({
                        cache: {},
                        noData: {
                            "applet ": !0,
                            "embed ": !0,
                            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
                        },
                        hasData: function(t) {
                            return !!(t = t.nodeType ? y.cache[t[y.expando]] : t[y.expando]) && !$(t)
                        },
                        data: function(t, e, n) {
                            return W(t, e, n)
                        },
                        removeData: function(t, e) {
                            return X(t, e)
                        },
                        _data: function(t, e, n) {
                            return W(t, e, n, !0)
                        },
                        _removeData: function(t, e) {
                            return X(t, e, !0)
                        }
                    }), y.fn.extend({
                        data: function(t, e) {
                            var n, r, i, o = this[0],
                                s = o && o.attributes;
                            if (void 0 === t) {
                                if (this.length && (i = y.data(o), 1 === o.nodeType && !y._data(o, "parsedAttrs"))) {
                                    for (n = s.length; n--;) s[n] && 0 === (r = s[n].name).indexOf("data-") && z(o, r = y.camelCase(r.slice(5)), i[r]);
                                    y._data(o, "parsedAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof t ? this.each((function() {
                                y.data(this, t)
                            })) : arguments.length > 1 ? this.each((function() {
                                y.data(this, t, e)
                            })) : o ? z(o, t, y.data(o, t)) : void 0
                        },
                        removeData: function(t) {
                            return this.each((function() {
                                y.removeData(this, t)
                            }))
                        }
                    }), y.extend({
                        queue: function(t, e, n) {
                            var r;
                            if (t) return e = (e || "fx") + "queue", r = y._data(t, e), n && (!r || y.isArray(n) ? r = y._data(t, e, y.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var n = y.queue(t, e),
                                r = n.length,
                                i = n.shift(),
                                o = y._queueHooks(t, e);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, (function() {
                                y.dequeue(t, e)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(t, e) {
                            var n = e + "queueHooks";
                            return y._data(t, n) || y._data(t, n, {
                                empty: y.Callbacks("once memory").add((function() {
                                    y._removeData(t, e + "queue"), y._removeData(t, n)
                                }))
                            })
                        }
                    }), y.fn.extend({
                        queue: function(t, e) {
                            var n = 2;
                            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? y.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                                var n = y.queue(this, t, e);
                                y._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && y.dequeue(this, t)
                            }))
                        },
                        dequeue: function(t) {
                            return this.each((function() {
                                y.dequeue(this, t)
                            }))
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", [])
                        },
                        promise: function(t, e) {
                            var n, r = 1,
                                i = y.Deferred(),
                                o = this,
                                s = this.length,
                                a = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = y._data(o[s], t + "queueHooks")) && n.empty && (r++, n.empty.add(a));
                            return a(), i.promise(e)
                        }
                    }), p.shrinkWrapBlocks = function() {
                        return null != q ? q : (q = !1, (e = s.getElementsByTagName("body")[0]) && e.style ? (t = s.createElement("div"), (n = s.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(s.createElement("div")).style.width = "5px", q = 3 !== t.offsetWidth), e.removeChild(n), q) : void 0);
                        var t, e, n
                    };
                    var Y = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        V = new RegExp("^(?:([+-])=|)(" + Y + ")([a-z%]*)$", "i"),
                        K = ["Top", "Right", "Bottom", "Left"],
                        J = function(t, e) {
                            return t = e || t, "none" === y.css(t, "display") || !y.contains(t.ownerDocument, t)
                        };

                    function G(t, e, n, r) {
                        var i, o = 1,
                            s = 20,
                            a = r ? function() {
                                return r.cur()
                            } : function() {
                                return y.css(t, e, "")
                            },
                            u = a(),
                            c = n && n[3] || (y.cssNumber[e] ? "" : "px"),
                            l = (y.cssNumber[e] || "px" !== c && +u) && V.exec(y.css(t, e));
                        if (l && l[3] !== c) {
                            c = c || l[3], n = n || [], l = +u || 1;
                            do {
                                l /= o = o || ".5", y.style(t, e, l + c)
                            } while (o !== (o = a() / u) && 1 !== o && --s)
                        }
                        return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
                    }
                    var Q, Z, tt, et = function(t, e, n, r, i, o, s) {
                            var a = 0,
                                u = t.length,
                                c = null == n;
                            if ("object" === y.type(n))
                                for (a in i = !0, n) et(t, e, a, n[a], !0, o, s);
                            else if (void 0 !== r && (i = !0, y.isFunction(r) || (s = !0), c && (s ? (e.call(t, r), e = null) : (c = e, e = function(t, e, n) {
                                    return c.call(y(t), n)
                                })), e))
                                for (; a < u; a++) e(t[a], n, s ? r : r.call(t[a], a, e(t[a], n)));
                            return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
                        },
                        nt = /^(?:checkbox|radio)$/i,
                        rt = /<([\w:-]+)/,
                        it = /^$|\/(?:java|ecma)script/i,
                        ot = /^\s+/,
                        st = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

                    function at(t) {
                        var e = st.split("|"),
                            n = t.createDocumentFragment();
                        if (n.createElement)
                            for (; e.length;) n.createElement(e.pop());
                        return n
                    }
                    Q = s.createElement("div"), Z = s.createDocumentFragment(), tt = s.createElement("input"), Q.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", p.leadingWhitespace = 3 === Q.firstChild.nodeType, p.tbody = !Q.getElementsByTagName("tbody").length, p.htmlSerialize = !!Q.getElementsByTagName("link").length, p.html5Clone = "<:nav></:nav>" !== s.createElement("nav").cloneNode(!0).outerHTML, tt.type = "checkbox", tt.checked = !0, Z.appendChild(tt), p.appendChecked = tt.checked, Q.innerHTML = "<textarea>x</textarea>", p.noCloneChecked = !!Q.cloneNode(!0).lastChild.defaultValue, Z.appendChild(Q), (tt = s.createElement("input")).setAttribute("type", "radio"), tt.setAttribute("checked", "checked"), tt.setAttribute("name", "t"), Q.appendChild(tt), p.checkClone = Q.cloneNode(!0).cloneNode(!0).lastChild.checked, p.noCloneEvent = !!Q.addEventListener, Q[y.expando] = 1, p.attributes = !Q.getAttribute(y.expando);
                    var ut = {
                        option: [1, "<select multiple='multiple'>", "</select>"],
                        legend: [1, "<fieldset>", "</fieldset>"],
                        area: [1, "<map>", "</map>"],
                        param: [1, "<object>", "</object>"],
                        thead: [1, "<table>", "</table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: p.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
                    };

                    function ct(t, e) {
                        var n, r, i = 0,
                            o = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
                        if (!o)
                            for (o = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || y.nodeName(r, e) ? o.push(r) : y.merge(o, ct(r, e));
                        return void 0 === e || e && y.nodeName(t, e) ? y.merge([t], o) : o
                    }

                    function lt(t, e) {
                        for (var n, r = 0; null != (n = t[r]); r++) y._data(n, "globalEval", !e || y._data(e[r], "globalEval"))
                    }
                    ut.optgroup = ut.option, ut.tbody = ut.tfoot = ut.colgroup = ut.caption = ut.thead, ut.th = ut.td;
                    var ft = /<|&#?\w+;/,
                        ht = /<tbody/i;

                    function dt(t) {
                        nt.test(t.type) && (t.defaultChecked = t.checked)
                    }

                    function pt(t, e, n, r, i) {
                        for (var o, s, a, u, c, l, f, h = t.length, d = at(e), g = [], v = 0; v < h; v++)
                            if ((s = t[v]) || 0 === s)
                                if ("object" === y.type(s)) y.merge(g, s.nodeType ? [s] : s);
                                else if (ft.test(s)) {
                            for (u = u || d.appendChild(e.createElement("div")), c = (rt.exec(s) || ["", ""])[1].toLowerCase(), f = ut[c] || ut._default, u.innerHTML = f[1] + y.htmlPrefilter(s) + f[2], o = f[0]; o--;) u = u.lastChild;
                            if (!p.leadingWhitespace && ot.test(s) && g.push(e.createTextNode(ot.exec(s)[0])), !p.tbody)
                                for (o = (s = "table" !== c || ht.test(s) ? "<table>" !== f[1] || ht.test(s) ? 0 : u : u.firstChild) && s.childNodes.length; o--;) y.nodeName(l = s.childNodes[o], "tbody") && !l.childNodes.length && s.removeChild(l);
                            for (y.merge(g, u.childNodes), u.textContent = ""; u.firstChild;) u.removeChild(u.firstChild);
                            u = d.lastChild
                        } else g.push(e.createTextNode(s));
                        for (u && d.removeChild(u), p.appendChecked || y.grep(ct(g, "input"), dt), v = 0; s = g[v++];)
                            if (r && y.inArray(s, r) > -1) i && i.push(s);
                            else if (a = y.contains(s.ownerDocument, s), u = ct(d.appendChild(s), "script"), a && lt(u), n)
                            for (o = 0; s = u[o++];) it.test(s.type || "") && n.push(s);
                        return u = null, d
                    }! function() {
                        var t, e, n = s.createElement("div");
                        for (t in {
                                submit: !0,
                                change: !0,
                                focusin: !0
                            }) e = "on" + t, (p[t] = e in r) || (n.setAttribute(e, "t"), p[t] = !1 === n.attributes[e].expando);
                        n = null
                    }();
                    var gt = /^(?:input|select|textarea)$/i,
                        yt = /^key/,
                        vt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                        mt = /^(?:focusinfocus|focusoutblur)$/,
                        bt = /^([^.]*)(?:\.(.+)|)/;

                    function wt() {
                        return !0
                    }

                    function _t() {
                        return !1
                    }

                    function xt() {
                        try {
                            return s.activeElement
                        } catch (t) {}
                    }

                    function kt(t, e, n, r, i, o) {
                        var s, a;
                        if ("object" == typeof e) {
                            for (a in "string" != typeof n && (r = r || n, n = void 0), e) kt(t, a, n, r, e[a], o);
                            return t
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = _t;
                        else if (!i) return t;
                        return 1 === o && (s = i, (i = function(t) {
                            return y().off(t), s.apply(this, arguments)
                        }).guid = s.guid || (s.guid = y.guid++)), t.each((function() {
                            y.event.add(this, e, i, r, n)
                        }))
                    }
                    y.event = {
                        global: {},
                        add: function(t, e, n, r, i) {
                            var o, s, a, u, c, l, f, h, d, p, g, v = y._data(t);
                            if (v) {
                                for (n.handler && (n = (u = n).handler, i = u.selector), n.guid || (n.guid = y.guid++), (s = v.events) || (s = v.events = {}), (l = v.handle) || ((l = v.handle = function(t) {
                                        return void 0 === y || t && y.event.triggered === t.type ? void 0 : y.event.dispatch.apply(l.elem, arguments)
                                    }).elem = t), a = (e = (e || "").match(D) || [""]).length; a--;) d = g = (o = bt.exec(e[a]) || [])[1], p = (o[2] || "").split(".").sort(), d && (c = y.event.special[d] || {}, d = (i ? c.delegateType : c.bindType) || d, c = y.event.special[d] || {}, f = y.extend({
                                    type: d,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && y.expr.match.needsContext.test(i),
                                    namespace: p.join(".")
                                }, u), (h = s[d]) || ((h = s[d] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, r, p, l) || (t.addEventListener ? t.addEventListener(d, l, !1) : t.attachEvent && t.attachEvent("on" + d, l))), c.add && (c.add.call(t, f), f.handler.guid || (f.handler.guid = n.guid)), i ? h.splice(h.delegateCount++, 0, f) : h.push(f), y.event.global[d] = !0);
                                t = null
                            }
                        },
                        remove: function(t, e, n, r, i) {
                            var o, s, a, u, c, l, f, h, d, p, g, v = y.hasData(t) && y._data(t);
                            if (v && (l = v.events)) {
                                for (c = (e = (e || "").match(D) || [""]).length; c--;)
                                    if (d = g = (a = bt.exec(e[c]) || [])[1], p = (a[2] || "").split(".").sort(), d) {
                                        for (f = y.event.special[d] || {}, h = l[d = (r ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = h.length; o--;) s = h[o], !i && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, f.remove && f.remove.call(t, s));
                                        u && !h.length && (f.teardown && !1 !== f.teardown.call(t, p, v.handle) || y.removeEvent(t, d, v.handle), delete l[d])
                                    } else
                                        for (d in l) y.event.remove(t, d + e[c], n, r, !0);
                                y.isEmptyObject(l) && (delete v.handle, y._removeData(t, "events"))
                            }
                        },
                        trigger: function(t, e, n, i) {
                            var o, a, u, c, l, f, h, p = [n || s],
                                g = d.call(t, "type") ? t.type : t,
                                v = d.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (u = f = n = n || s, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(g + y.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), a = g.indexOf(":") < 0 && "on" + g, (t = t[y.expando] ? t : new y.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : y.makeArray(e, [t]), l = y.event.special[g] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                                if (!i && !l.noBubble && !y.isWindow(n)) {
                                    for (c = l.delegateType || g, mt.test(c + g) || (u = u.parentNode); u; u = u.parentNode) p.push(u), f = u;
                                    f === (n.ownerDocument || s) && p.push(f.defaultView || f.parentWindow || r)
                                }
                                for (h = 0;
                                    (u = p[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? c : l.bindType || g, (o = (y._data(u, "events") || {})[t.type] && y._data(u, "handle")) && o.apply(u, e), (o = a && u[a]) && o.apply && U(u) && (t.result = o.apply(u, e), !1 === t.result && t.preventDefault());
                                if (t.type = g, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(p.pop(), e)) && U(n) && a && n[g] && !y.isWindow(n)) {
                                    (f = n[a]) && (n[a] = null), y.event.triggered = g;
                                    try {
                                        n[g]()
                                    } catch (t) {}
                                    y.event.triggered = void 0, f && (n[a] = f)
                                }
                                return t.result
                            }
                        },
                        dispatch: function(t) {
                            t = y.event.fix(t);
                            var e, n, r, i, o, s = [],
                                u = a.call(arguments),
                                c = (y._data(this, "events") || {})[t.type] || [],
                                l = y.event.special[t.type] || {};
                            if (u[0] = t, t.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, t)) {
                                for (s = y.event.handlers.call(this, t, c), e = 0;
                                    (i = s[e++]) && !t.isPropagationStopped();)
                                    for (t.currentTarget = i.elem, n = 0;
                                        (o = i.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, void 0 !== (r = ((y.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (t.result = r) && (t.preventDefault(), t.stopPropagation()));
                                return l.postDispatch && l.postDispatch.call(this, t), t.result
                            }
                        },
                        handlers: function(t, e) {
                            var n, r, i, o, s = [],
                                a = e.delegateCount,
                                u = t.target;
                            if (a && u.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                                for (; u != this; u = u.parentNode || this)
                                    if (1 === u.nodeType && (!0 !== u.disabled || "click" !== t.type)) {
                                        for (r = [], n = 0; n < a; n++) void 0 === r[i = (o = e[n]).selector + " "] && (r[i] = o.needsContext ? y(i, this).index(u) > -1 : y.find(i, this, null, [u]).length), r[i] && r.push(o);
                                        r.length && s.push({
                                            elem: u,
                                            handlers: r
                                        })
                                    }
                            return a < e.length && s.push({
                                elem: this,
                                handlers: e.slice(a)
                            }), s
                        },
                        fix: function(t) {
                            if (t[y.expando]) return t;
                            var e, n, r, i = t.type,
                                o = t,
                                a = this.fixHooks[i];
                            for (a || (this.fixHooks[i] = a = vt.test(i) ? this.mouseHooks : yt.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, t = new y.Event(o), e = r.length; e--;) t[n = r[e]] = o[n];
                            return t.target || (t.target = o.srcElement || s), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, a.filter ? a.filter(t, o) : t
                        },
                        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
                        fixHooks: {},
                        keyHooks: {
                            props: "char charCode key keyCode".split(" "),
                            filter: function(t, e) {
                                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                            }
                        },
                        mouseHooks: {
                            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                            filter: function(t, e) {
                                var n, r, i, o = e.button,
                                    a = e.fromElement;
                                return null == t.pageX && null != e.clientX && (i = (r = t.target.ownerDocument || s).documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? e.toElement : a), t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                            }
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            focus: {
                                trigger: function() {
                                    if (this !== xt() && this.focus) try {
                                        return this.focus(), !1
                                    } catch (t) {}
                                },
                                delegateType: "focusin"
                            },
                            blur: {
                                trigger: function() {
                                    if (this === xt() && this.blur) return this.blur(), !1
                                },
                                delegateType: "focusout"
                            },
                            click: {
                                trigger: function() {
                                    if (y.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                                },
                                _default: function(t) {
                                    return y.nodeName(t.target, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        },
                        simulate: function(t, e, n) {
                            var r = y.extend(new y.Event, n, {
                                type: t,
                                isSimulated: !0
                            });
                            y.event.trigger(r, null, e), r.isDefaultPrevented() && n.preventDefault()
                        }
                    }, y.removeEvent = s.removeEventListener ? function(t, e, n) {
                        t.removeEventListener && t.removeEventListener(e, n)
                    } : function(t, e, n) {
                        var r = "on" + e;
                        t.detachEvent && (void 0 === t[r] && (t[r] = null), t.detachEvent(r, n))
                    }, y.Event = function(t, e) {
                        if (!(this instanceof y.Event)) return new y.Event(t, e);
                        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? wt : _t) : this.type = t, e && y.extend(this, e), this.timeStamp = t && t.timeStamp || y.now(), this[y.expando] = !0
                    }, y.Event.prototype = {
                        constructor: y.Event,
                        isDefaultPrevented: _t,
                        isPropagationStopped: _t,
                        isImmediatePropagationStopped: _t,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = wt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            this.isPropagationStopped = wt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = wt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, y.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(t, e) {
                        y.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var n, r = this,
                                    i = t.relatedTarget,
                                    o = t.handleObj;
                                return i && (i === r || y.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                            }
                        }
                    })), p.submit || (y.event.special.submit = {
                        setup: function() {
                            if (y.nodeName(this, "form")) return !1;
                            y.event.add(this, "click._submit keypress._submit", (function(t) {
                                var e = t.target,
                                    n = y.nodeName(e, "input") || y.nodeName(e, "button") ? y.prop(e, "form") : void 0;
                                n && !y._data(n, "submit") && (y.event.add(n, "submit._submit", (function(t) {
                                    t._submitBubble = !0
                                })), y._data(n, "submit", !0))
                            }))
                        },
                        postDispatch: function(t) {
                            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && y.event.simulate("submit", this.parentNode, t))
                        },
                        teardown: function() {
                            if (y.nodeName(this, "form")) return !1;
                            y.event.remove(this, "._submit")
                        }
                    }), p.change || (y.event.special.change = {
                        setup: function() {
                            if (gt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (y.event.add(this, "propertychange._change", (function(t) {
                                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
                            })), y.event.add(this, "click._change", (function(t) {
                                this._justChanged && !t.isTrigger && (this._justChanged = !1), y.event.simulate("change", this, t)
                            }))), !1;
                            y.event.add(this, "beforeactivate._change", (function(t) {
                                var e = t.target;
                                gt.test(e.nodeName) && !y._data(e, "change") && (y.event.add(e, "change._change", (function(t) {
                                    !this.parentNode || t.isSimulated || t.isTrigger || y.event.simulate("change", this.parentNode, t)
                                })), y._data(e, "change", !0))
                            }))
                        },
                        handle: function(t) {
                            var e = t.target;
                            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
                        },
                        teardown: function() {
                            return y.event.remove(this, "._change"), !gt.test(this.nodeName)
                        }
                    }), p.focusin || y.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        var n = function(t) {
                            y.event.simulate(e, t.target, y.event.fix(t))
                        };
                        y.event.special[e] = {
                            setup: function() {
                                var r = this.ownerDocument || this,
                                    i = y._data(r, e);
                                i || r.addEventListener(t, n, !0), y._data(r, e, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this,
                                    i = y._data(r, e) - 1;
                                i ? y._data(r, e, i) : (r.removeEventListener(t, n, !0), y._removeData(r, e))
                            }
                        }
                    })), y.fn.extend({
                        on: function(t, e, n, r) {
                            return kt(this, t, e, n, r)
                        },
                        one: function(t, e, n, r) {
                            return kt(this, t, e, n, r, 1)
                        },
                        off: function(t, e, n) {
                            var r, i;
                            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, y(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof t) {
                                for (i in t) this.off(i, e, t[i]);
                                return this
                            }
                            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = _t), this.each((function() {
                                y.event.remove(this, t, n, e)
                            }))
                        },
                        trigger: function(t, e) {
                            return this.each((function() {
                                y.event.trigger(t, e, this)
                            }))
                        },
                        triggerHandler: function(t, e) {
                            var n = this[0];
                            if (n) return y.event.trigger(t, e, n, !0)
                        }
                    });
                    var St = / jQuery\d+="(?:null|\d+)"/g,
                        Et = new RegExp("<(?:" + st + ")[\\s/>]", "i"),
                        Tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
                        Ct = /<script|<style|<link/i,
                        At = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Ot = /^true\/(.*)/,
                        Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
                        Lt = at(s).appendChild(s.createElement("div"));

                    function Rt(t, e) {
                        return y.nodeName(t, "table") && y.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
                    }

                    function Pt(t) {
                        return t.type = (null !== y.find.attr(t, "type")) + "/" + t.type, t
                    }

                    function jt(t) {
                        var e = Ot.exec(t.type);
                        return e ? t.type = e[1] : t.removeAttribute("type"), t
                    }

                    function Mt(t, e) {
                        if (1 === e.nodeType && y.hasData(t)) {
                            var n, r, i, o = y._data(t),
                                s = y._data(e, o),
                                a = o.events;
                            if (a)
                                for (n in delete s.handle, s.events = {}, a)
                                    for (r = 0, i = a[n].length; r < i; r++) y.event.add(e, n, a[n][r]);
                            s.data && (s.data = y.extend({}, s.data))
                        }
                    }

                    function Dt(t, e) {
                        var n, r, i;
                        if (1 === e.nodeType) {
                            if (n = e.nodeName.toLowerCase(), !p.noCloneEvent && e[y.expando]) {
                                for (r in (i = y._data(e)).events) y.removeEvent(e, r, i.handle);
                                e.removeAttribute(y.expando)
                            }
                            "script" === n && e.text !== t.text ? (Pt(e).text = t.text, jt(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), p.html5Clone && t.innerHTML && !y.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && nt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                        }
                    }

                    function Bt(t, e, n, r) {
                        e = u.apply([], e);
                        var i, o, s, a, c, l, f = 0,
                            h = t.length,
                            d = h - 1,
                            g = e[0],
                            v = y.isFunction(g);
                        if (v || h > 1 && "string" == typeof g && !p.checkClone && At.test(g)) return t.each((function(i) {
                            var o = t.eq(i);
                            v && (e[0] = g.call(this, i, o.html())), Bt(o, e, n, r)
                        }));
                        if (h && (i = (l = pt(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === l.childNodes.length && (l = i), i || r)) {
                            for (s = (a = y.map(ct(l, "script"), Pt)).length; f < h; f++) o = l, f !== d && (o = y.clone(o, !0, !0), s && y.merge(a, ct(o, "script"))), n.call(t[f], o, f);
                            if (s)
                                for (c = a[a.length - 1].ownerDocument, y.map(a, jt), f = 0; f < s; f++) o = a[f], it.test(o.type || "") && !y._data(o, "globalEval") && y.contains(c, o) && (o.src ? y._evalUrl && y._evalUrl(o.src) : y.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Nt, "")));
                            l = i = null
                        }
                        return t
                    }

                    function It(t, e, n) {
                        for (var r, i = e ? y.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || y.cleanData(ct(r)), r.parentNode && (n && y.contains(r.ownerDocument, r) && lt(ct(r, "script")), r.parentNode.removeChild(r));
                        return t
                    }
                    y.extend({
                        htmlPrefilter: function(t) {
                            return t.replace(Tt, "<$1></$2>")
                        },
                        clone: function(t, e, n) {
                            var r, i, o, s, a, u = y.contains(t.ownerDocument, t);
                            if (p.html5Clone || y.isXMLDoc(t) || !Et.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Lt.innerHTML = t.outerHTML, Lt.removeChild(o = Lt.firstChild)), !(p.noCloneEvent && p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || y.isXMLDoc(t)))
                                for (r = ct(o), a = ct(t), s = 0; null != (i = a[s]); ++s) r[s] && Dt(i, r[s]);
                            if (e)
                                if (n)
                                    for (a = a || ct(t), r = r || ct(o), s = 0; null != (i = a[s]); s++) Mt(i, r[s]);
                                else Mt(t, o);
                            return (r = ct(o, "script")).length > 0 && lt(r, !u && ct(t, "script")), r = a = i = null, o
                        },
                        cleanData: function(t, e) {
                            for (var n, r, i, s, a = 0, u = y.expando, c = y.cache, l = p.attributes, f = y.event.special; null != (n = t[a]); a++)
                                if ((e || U(n)) && (s = (i = n[u]) && c[i])) {
                                    if (s.events)
                                        for (r in s.events) f[r] ? y.event.remove(n, r) : y.removeEvent(n, r, s.handle);
                                    c[i] && (delete c[i], l || void 0 === n.removeAttribute ? n[u] = void 0 : n.removeAttribute(u), o.push(i))
                                }
                        }
                    }), y.fn.extend({
                        domManip: Bt,
                        detach: function(t) {
                            return It(this, t, !0)
                        },
                        remove: function(t) {
                            return It(this, t)
                        },
                        text: function(t) {
                            return et(this, (function(t) {
                                return void 0 === t ? y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || s).createTextNode(t))
                            }), null, t, arguments.length)
                        },
                        append: function() {
                            return Bt(this, arguments, (function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Rt(this, t).appendChild(t)
                            }))
                        },
                        prepend: function() {
                            return Bt(this, arguments, (function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = Rt(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return Bt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            }))
                        },
                        after: function() {
                            return Bt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++) {
                                for (1 === t.nodeType && y.cleanData(ct(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                                t.options && y.nodeName(t, "select") && (t.options.length = 0)
                            }
                            return this
                        },
                        clone: function(t, e) {
                            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                                return y.clone(this, t, e)
                            }))
                        },
                        html: function(t) {
                            return et(this, (function(t) {
                                var e = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(St, "") : void 0;
                                if ("string" == typeof t && !Ct.test(t) && (p.htmlSerialize || !Et.test(t)) && (p.leadingWhitespace || !ot.test(t)) && !ut[(rt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = y.htmlPrefilter(t);
                                    try {
                                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (y.cleanData(ct(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (t) {}
                                }
                                e && this.empty().append(t)
                            }), null, t, arguments.length)
                        },
                        replaceWith: function() {
                            var t = [];
                            return Bt(this, arguments, (function(e) {
                                var n = this.parentNode;
                                y.inArray(this, t) < 0 && (y.cleanData(ct(this)), n && n.replaceChild(e, this))
                            }), t)
                        }
                    }), y.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(t, e) {
                        y.fn[t] = function(t) {
                            for (var n, r = 0, i = [], o = y(t), s = o.length - 1; r <= s; r++) n = r === s ? this : this.clone(!0), y(o[r])[e](n), c.apply(i, n.get());
                            return this.pushStack(i)
                        }
                    }));
                    var qt, Ut = {
                        HTML: "block",
                        BODY: "block"
                    };

                    function Ht(t, e) {
                        var n = y(e.createElement(t)).appendTo(e.body),
                            r = y.css(n[0], "display");
                        return n.detach(), r
                    }

                    function Ft(t) {
                        var e = s,
                            n = Ut[t];
                        return n || ("none" !== (n = Ht(t, e)) && n || ((e = ((qt = (qt || y("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || qt[0].contentDocument).document).write(), e.close(), n = Ht(t, e), qt.detach()), Ut[t] = n), n
                    }
                    var zt = /^margin/,
                        $t = new RegExp("^(" + Y + ")(?!px)[a-z%]+$", "i"),
                        Wt = function(t, e, n, r) {
                            var i, o, s = {};
                            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
                            for (o in i = n.apply(t, r || []), e) t.style[o] = s[o];
                            return i
                        },
                        Xt = s.documentElement;
                    ! function() {
                        var t, e, n, i, o, a, u = s.createElement("div"),
                            c = s.createElement("div");

                        function l() {
                            var l, f, h = s.documentElement;
                            h.appendChild(u), c.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", t = n = a = !1, e = o = !0, r.getComputedStyle && (f = r.getComputedStyle(c), t = "1%" !== (f || {}).top, a = "2px" === (f || {}).marginLeft, n = "4px" === (f || {
                                width: "4px"
                            }).width, c.style.marginRight = "50%", e = "4px" === (f || {
                                marginRight: "4px"
                            }).marginRight, (l = c.appendChild(s.createElement("div"))).style.cssText = c.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", c.style.width = "1px", o = !parseFloat((r.getComputedStyle(l) || {}).marginRight), c.removeChild(l)), c.style.display = "none", (i = 0 === c.getClientRects().length) && (c.style.display = "", c.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", c.childNodes[0].style.borderCollapse = "separate", (l = c.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (i = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", i = 0 === l[0].offsetHeight)), h.removeChild(u)
                        }
                        c.style && (c.style.cssText = "float:left;opacity:.5", p.opacity = "0.5" === c.style.opacity, p.cssFloat = !!c.style.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", p.clearCloneStyle = "content-box" === c.style.backgroundClip, (u = s.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", c.innerHTML = "", u.appendChild(c), p.boxSizing = "" === c.style.boxSizing || "" === c.style.MozBoxSizing || "" === c.style.WebkitBoxSizing, y.extend(p, {
                            reliableHiddenOffsets: function() {
                                return null == t && l(), i
                            },
                            boxSizingReliable: function() {
                                return null == t && l(), n
                            },
                            pixelMarginRight: function() {
                                return null == t && l(), e
                            },
                            pixelPosition: function() {
                                return null == t && l(), t
                            },
                            reliableMarginRight: function() {
                                return null == t && l(), o
                            },
                            reliableMarginLeft: function() {
                                return null == t && l(), a
                            }
                        }))
                    }();
                    var Yt, Vt, Kt = /^(top|right|bottom|left)$/;

                    function Jt(t, e) {
                        return {
                            get: function() {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }
                    r.getComputedStyle ? (Yt = function(t) {
                        var e = t.ownerDocument.defaultView;
                        return e && e.opener || (e = r), e.getComputedStyle(t)
                    }, Vt = function(t, e, n) {
                        var r, i, o, s, a = t.style;
                        return "" !== (s = (n = n || Yt(t)) ? n.getPropertyValue(e) || n[e] : void 0) && void 0 !== s || y.contains(t.ownerDocument, t) || (s = y.style(t, e)), n && !p.pixelMarginRight() && $t.test(s) && zt.test(e) && (r = a.width, i = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = r, a.minWidth = i, a.maxWidth = o), void 0 === s ? s : s + ""
                    }) : Xt.currentStyle && (Yt = function(t) {
                        return t.currentStyle
                    }, Vt = function(t, e, n) {
                        var r, i, o, s, a = t.style;
                        return null == (s = (n = n || Yt(t)) ? n[e] : void 0) && a && a[e] && (s = a[e]), $t.test(s) && !Kt.test(e) && (r = a.left, (o = (i = t.runtimeStyle) && i.left) && (i.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = r, o && (i.left = o)), void 0 === s ? s : s + "" || "auto"
                    });
                    var Gt = /alpha\([^)]*\)/i,
                        Qt = /opacity\s*=\s*([^)]*)/i,
                        Zt = /^(none|table(?!-c[ea]).+)/,
                        te = new RegExp("^(" + Y + ")(.*)$", "i"),
                        ee = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        ne = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        },
                        re = ["Webkit", "O", "Moz", "ms"],
                        ie = s.createElement("div").style;

                    function oe(t) {
                        if (t in ie) return t;
                        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = re.length; n--;)
                            if ((t = re[n] + e) in ie) return t
                    }

                    function se(t, e) {
                        for (var n, r, i, o = [], s = 0, a = t.length; s < a; s++)(r = t[s]).style && (o[s] = y._data(r, "olddisplay"), n = r.style.display, e ? (o[s] || "none" !== n || (r.style.display = ""), "" === r.style.display && J(r) && (o[s] = y._data(r, "olddisplay", Ft(r.nodeName)))) : (i = J(r), (n && "none" !== n || !i) && y._data(r, "olddisplay", i ? n : y.css(r, "display"))));
                        for (s = 0; s < a; s++)(r = t[s]).style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? o[s] || "" : "none"));
                        return t
                    }

                    function ae(t, e, n) {
                        var r = te.exec(e);
                        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
                    }

                    function ue(t, e, n, r, i) {
                        for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += y.css(t, n + K[o], !0, i)), r ? ("content" === n && (s -= y.css(t, "padding" + K[o], !0, i)), "margin" !== n && (s -= y.css(t, "border" + K[o] + "Width", !0, i))) : (s += y.css(t, "padding" + K[o], !0, i), "padding" !== n && (s += y.css(t, "border" + K[o] + "Width", !0, i)));
                        return s
                    }

                    function ce(t, e, n) {
                        var r = !0,
                            i = "width" === e ? t.offsetWidth : t.offsetHeight,
                            o = Yt(t),
                            s = p.boxSizing && "border-box" === y.css(t, "boxSizing", !1, o);
                        if (i <= 0 || null == i) {
                            if (((i = Vt(t, e, o)) < 0 || null == i) && (i = t.style[e]), $t.test(i)) return i;
                            r = s && (p.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
                        }
                        return i + ue(t, e, n || (s ? "border" : "content"), r, o) + "px"
                    }

                    function le(t, e, n, r, i) {
                        return new le.prototype.init(t, e, n, r, i)
                    }
                    y.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var n = Vt(t, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {
                            float: p.cssFloat ? "cssFloat" : "styleFloat"
                        },
                        style: function(t, e, n, r) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var i, o, s, a = y.camelCase(e),
                                    u = t.style;
                                if (e = y.cssProps[a] || (y.cssProps[a] = oe(a) || a), s = y.cssHooks[e] || y.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(t, !1, r)) ? i : u[e];
                                if ("string" == (o = typeof n) && (i = V.exec(n)) && i[1] && (n = G(t, e, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (y.cssNumber[a] ? "" : "px")), p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), !s || !("set" in s) || void 0 !== (n = s.set(t, n, r)))) try {
                                    u[e] = n
                                } catch (t) {}
                            }
                        },
                        css: function(t, e, n, r) {
                            var i, o, s, a = y.camelCase(e);
                            return e = y.cssProps[a] || (y.cssProps[a] = oe(a) || a), (s = y.cssHooks[e] || y.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), void 0 === o && (o = Vt(t, e, r)), "normal" === o && e in ne && (o = ne[e]), "" === n || n ? (i = parseFloat(o), !0 === n || isFinite(i) ? i || 0 : o) : o
                        }
                    }), y.each(["height", "width"], (function(t, e) {
                        y.cssHooks[e] = {
                            get: function(t, n, r) {
                                if (n) return Zt.test(y.css(t, "display")) && 0 === t.offsetWidth ? Wt(t, ee, (function() {
                                    return ce(t, e, r)
                                })) : ce(t, e, r)
                            },
                            set: function(t, n, r) {
                                var i = r && Yt(t);
                                return ae(0, n, r ? ue(t, e, r, p.boxSizing && "border-box" === y.css(t, "boxSizing", !1, i), i) : 0)
                            }
                        }
                    })), p.opacity || (y.cssHooks.opacity = {
                        get: function(t, e) {
                            return Qt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
                        },
                        set: function(t, e) {
                            var n = t.style,
                                r = t.currentStyle,
                                i = y.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                                o = r && r.filter || n.filter || "";
                            n.zoom = 1, (e >= 1 || "" === e) && "" === y.trim(o.replace(Gt, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = Gt.test(o) ? o.replace(Gt, i) : o + " " + i)
                        }
                    }), y.cssHooks.marginRight = Jt(p.reliableMarginRight, (function(t, e) {
                        if (e) return Wt(t, {
                            display: "inline-block"
                        }, Vt, [t, "marginRight"])
                    })), y.cssHooks.marginLeft = Jt(p.reliableMarginLeft, (function(t, e) {
                        if (e) return (parseFloat(Vt(t, "marginLeft")) || (y.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Wt(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        })) : 0)) + "px"
                    })), y.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(t, e) {
                        y.cssHooks[t + e] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + K[r] + e] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, zt.test(t) || (y.cssHooks[t + e].set = ae)
                    })), y.fn.extend({
                        css: function(t, e) {
                            return et(this, (function(t, e, n) {
                                var r, i, o = {},
                                    s = 0;
                                if (y.isArray(e)) {
                                    for (r = Yt(t), i = e.length; s < i; s++) o[e[s]] = y.css(t, e[s], !1, r);
                                    return o
                                }
                                return void 0 !== n ? y.style(t, e, n) : y.css(t, e)
                            }), t, e, arguments.length > 1)
                        },
                        show: function() {
                            return se(this, !0)
                        },
                        hide: function() {
                            return se(this)
                        },
                        toggle: function(t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                                J(this) ? y(this).show() : y(this).hide()
                            }))
                        }
                    }), y.Tween = le, le.prototype = {
                        constructor: le,
                        init: function(t, e, n, r, i, o) {
                            this.elem = t, this.prop = n, this.easing = i || y.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (y.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var t = le.propHooks[this.prop];
                            return t && t.get ? t.get(this) : le.propHooks._default.get(this)
                        },
                        run: function(t) {
                            var e, n = le.propHooks[this.prop];
                            return this.options.duration ? this.pos = e = y.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : le.propHooks._default.set(this), this
                        }
                    }, le.prototype.init.prototype = le.prototype, le.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = y.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                            },
                            set: function(t) {
                                y.fx.step[t.prop] ? y.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[y.cssProps[t.prop]] && !y.cssHooks[t.prop] ? t.elem[t.prop] = t.now : y.style(t.elem, t.prop, t.now + t.unit)
                            }
                        }
                    }, le.propHooks.scrollTop = le.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, y.easing = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        _default: "swing"
                    }, y.fx = le.prototype.init, y.fx.step = {};
                    var fe, he, de = /^(?:toggle|show|hide)$/,
                        pe = /queueHooks$/;

                    function ge() {
                        return r.setTimeout((function() {
                            fe = void 0
                        })), fe = y.now()
                    }

                    function ye(t, e) {
                        var n, r = {
                                height: t
                            },
                            i = 0;
                        for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = K[i])] = r["padding" + n] = t;
                        return e && (r.opacity = r.width = t), r
                    }

                    function ve(t, e, n) {
                        for (var r, i = (me.tweeners[e] || []).concat(me.tweeners["*"]), o = 0, s = i.length; o < s; o++)
                            if (r = i[o].call(n, e, t)) return r
                    }

                    function me(t, e, n) {
                        var r, i, o = 0,
                            s = me.prefilters.length,
                            a = y.Deferred().always((function() {
                                delete u.elem
                            })),
                            u = function() {
                                if (i) return !1;
                                for (var e = fe || ge(), n = Math.max(0, c.startTime + c.duration - e), r = 1 - (n / c.duration || 0), o = 0, s = c.tweens.length; o < s; o++) c.tweens[o].run(r);
                                return a.notifyWith(t, [c, r, n]), r < 1 && s ? n : (a.resolveWith(t, [c]), !1)
                            },
                            c = a.promise({
                                elem: t,
                                props: y.extend({}, e),
                                opts: y.extend(!0, {
                                    specialEasing: {},
                                    easing: y.easing._default
                                }, n),
                                originalProperties: e,
                                originalOptions: n,
                                startTime: fe || ge(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(e, n) {
                                    var r = y.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                                    return c.tweens.push(r), r
                                },
                                stop: function(e) {
                                    var n = 0,
                                        r = e ? c.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) c.tweens[n].run(1);
                                    return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this
                                }
                            }),
                            l = c.props;
                        for (function(t, e) {
                                var n, r, i, o, s;
                                for (n in t)
                                    if (i = e[r = y.camelCase(n)], o = t[n], y.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (s = y.cssHooks[r]) && "expand" in s)
                                        for (n in o = s.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
                                    else e[r] = i
                            }(l, c.opts.specialEasing); o < s; o++)
                            if (r = me.prefilters[o].call(c, t, l, c.opts)) return y.isFunction(r.stop) && (y._queueHooks(c.elem, c.opts.queue).stop = y.proxy(r.stop, r)), r;
                        return y.map(l, ve, c), y.isFunction(c.opts.start) && c.opts.start.call(t, c), y.fx.timer(y.extend(u, {
                            elem: t,
                            anim: c,
                            queue: c.opts.queue
                        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
                    }
                    y.Animation = y.extend(me, {
                            tweeners: {
                                "*": [function(t, e) {
                                    var n = this.createTween(t, e);
                                    return G(n.elem, t, V.exec(e), n), n
                                }]
                            },
                            tweener: function(t, e) {
                                y.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(D);
                                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], me.tweeners[n] = me.tweeners[n] || [], me.tweeners[n].unshift(e)
                            },
                            prefilters: [function(t, e, n) {
                                var r, i, o, s, a, u, c, l = this,
                                    f = {},
                                    h = t.style,
                                    d = t.nodeType && J(t),
                                    g = y._data(t, "fxshow");
                                for (r in n.queue || (null == (a = y._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || u()
                                    }), a.unqueued++, l.always((function() {
                                        l.always((function() {
                                            a.unqueued--, y.queue(t, "fx").length || a.empty.fire()
                                        }))
                                    }))), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = y.css(t, "display")) ? y._data(t, "olddisplay") || Ft(t.nodeName) : c) && "none" === y.css(t, "float") && (p.inlineBlockNeedsLayout && "inline" !== Ft(t.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.shrinkWrapBlocks() || l.always((function() {
                                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                                    }))), e)
                                    if (i = e[r], de.exec(i)) {
                                        if (delete e[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
                                            if ("show" !== i || !g || void 0 === g[r]) continue;
                                            d = !0
                                        }
                                        f[r] = g && g[r] || y.style(t, r)
                                    } else c = void 0;
                                if (y.isEmptyObject(f)) "inline" === ("none" === c ? Ft(t.nodeName) : c) && (h.display = c);
                                else
                                    for (r in g ? "hidden" in g && (d = g.hidden) : g = y._data(t, "fxshow", {}), o && (g.hidden = !d), d ? y(t).show() : l.done((function() {
                                            y(t).hide()
                                        })), l.done((function() {
                                            var e;
                                            for (e in y._removeData(t, "fxshow"), f) y.style(t, e, f[e])
                                        })), f) s = ve(d ? g[r] : 0, r, l), r in g || (g[r] = s.start, d && (s.end = s.start, s.start = "width" === r || "height" === r ? 1 : 0))
                            }],
                            prefilter: function(t, e) {
                                e ? me.prefilters.unshift(t) : me.prefilters.push(t)
                            }
                        }), y.speed = function(t, e, n) {
                            var r = t && "object" == typeof t ? y.extend({}, t) : {
                                complete: n || !n && e || y.isFunction(t) && t,
                                duration: t,
                                easing: n && e || e && !y.isFunction(e) && e
                            };
                            return r.duration = y.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in y.fx.speeds ? y.fx.speeds[r.duration] : y.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                y.isFunction(r.old) && r.old.call(this), r.queue && y.dequeue(this, r.queue)
                            }, r
                        }, y.fn.extend({
                            fadeTo: function(t, e, n, r) {
                                return this.filter(J).css("opacity", 0).show().end().animate({
                                    opacity: e
                                }, t, n, r)
                            },
                            animate: function(t, e, n, r) {
                                var i = y.isEmptyObject(t),
                                    o = y.speed(e, n, r),
                                    s = function() {
                                        var e = me(this, y.extend({}, t), o);
                                        (i || y._data(this, "finish")) && e.stop(!0)
                                    };
                                return s.finish = s, i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
                            },
                            stop: function(t, e, n) {
                                var r = function(t) {
                                    var e = t.stop;
                                    delete t.stop, e(n)
                                };
                                return "string" != typeof t && (n = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each((function() {
                                    var e = !0,
                                        i = null != t && t + "queueHooks",
                                        o = y.timers,
                                        s = y._data(this);
                                    if (i) s[i] && s[i].stop && r(s[i]);
                                    else
                                        for (i in s) s[i] && s[i].stop && pe.test(i) && r(s[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                                    !e && n || y.dequeue(this, t)
                                }))
                            },
                            finish: function(t) {
                                return !1 !== t && (t = t || "fx"), this.each((function() {
                                    var e, n = y._data(this),
                                        r = n[t + "queue"],
                                        i = n[t + "queueHooks"],
                                        o = y.timers,
                                        s = r ? r.length : 0;
                                    for (n.finish = !0, y.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                    for (e = 0; e < s; e++) r[e] && r[e].finish && r[e].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), y.each(["toggle", "show", "hide"], (function(t, e) {
                            var n = y.fn[e];
                            y.fn[e] = function(t, r, i) {
                                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ye(e, !0), t, r, i)
                            }
                        })), y.each({
                            slideDown: ye("show"),
                            slideUp: ye("hide"),
                            slideToggle: ye("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(t, e) {
                            y.fn[t] = function(t, n, r) {
                                return this.animate(e, t, n, r)
                            }
                        })), y.timers = [], y.fx.tick = function() {
                            var t, e = y.timers,
                                n = 0;
                            for (fe = y.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
                            e.length || y.fx.stop(), fe = void 0
                        }, y.fx.timer = function(t) {
                            y.timers.push(t), t() ? y.fx.start() : y.timers.pop()
                        }, y.fx.interval = 13, y.fx.start = function() {
                            he || (he = r.setInterval(y.fx.tick, y.fx.interval))
                        }, y.fx.stop = function() {
                            r.clearInterval(he), he = null
                        }, y.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, y.fn.delay = function(t, e) {
                            return t = y.fx && y.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                                var i = r.setTimeout(e, t);
                                n.stop = function() {
                                    r.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var t, e = s.createElement("input"),
                                n = s.createElement("div"),
                                r = s.createElement("select"),
                                i = r.appendChild(s.createElement("option"));
                            (n = s.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = n.getElementsByTagName("a")[0], e.setAttribute("type", "checkbox"), n.appendChild(e), (t = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", p.getSetAttribute = "t" !== n.className, p.style = /top/.test(t.getAttribute("style")), p.hrefNormalized = "/a" === t.getAttribute("href"), p.checkOn = !!e.value, p.optSelected = i.selected, p.enctype = !!s.createElement("form").enctype, r.disabled = !0, p.optDisabled = !i.disabled, (e = s.createElement("input")).setAttribute("value", ""), p.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), p.radioValue = "t" === e.value
                        }();
                    var be = /\r/g,
                        we = /[\x20\t\r\n\f]+/g;
                    y.fn.extend({
                        val: function(t) {
                            var e, n, r, i = this[0];
                            return arguments.length ? (r = y.isFunction(t), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? t.call(this, n, y(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : y.isArray(i) && (i = y.map(i, (function(t) {
                                    return null == t ? "" : t + ""
                                }))), (e = y.valHooks[this.type] || y.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                            }))) : i ? (e = y.valHooks[i.type] || y.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(be, "") : null == n ? "" : n : void 0
                        }
                    }), y.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = y.find.attr(t, "value");
                                    return null != e ? e : y.trim(y.text(t)).replace(we, " ")
                                }
                            },
                            select: {
                                get: function(t) {
                                    for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type || i < 0, s = o ? null : [], a = o ? i + 1 : r.length, u = i < 0 ? a : o ? i : 0; u < a; u++)
                                        if (((n = r[u]).selected || u === i) && (p.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !y.nodeName(n.parentNode, "optgroup"))) {
                                            if (e = y(n).val(), o) return e;
                                            s.push(e)
                                        }
                                    return s
                                },
                                set: function(t, e) {
                                    for (var n, r, i = t.options, o = y.makeArray(e), s = i.length; s--;)
                                        if (r = i[s], y.inArray(y.valHooks.option.get(r), o) > -1) try {
                                            r.selected = n = !0
                                        } catch (t) {
                                            r.scrollHeight
                                        } else r.selected = !1;
                                    return n || (t.selectedIndex = -1), i
                                }
                            }
                        }
                    }), y.each(["radio", "checkbox"], (function() {
                        y.valHooks[this] = {
                            set: function(t, e) {
                                if (y.isArray(e)) return t.checked = y.inArray(y(t).val(), e) > -1
                            }
                        }, p.checkOn || (y.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    }));
                    var _e, xe, ke = y.expr.attrHandle,
                        Se = /^(?:checked|selected)$/i,
                        Ee = p.getSetAttribute,
                        Te = p.input;
                    y.fn.extend({
                        attr: function(t, e) {
                            return et(this, y.attr, t, e, arguments.length > 1)
                        },
                        removeAttr: function(t) {
                            return this.each((function() {
                                y.removeAttr(this, t)
                            }))
                        }
                    }), y.extend({
                        attr: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? y.prop(t, e, n) : (1 === o && y.isXMLDoc(t) || (e = e.toLowerCase(), i = y.attrHooks[e] || (y.expr.match.bool.test(e) ? xe : _e)), void 0 !== n ? null === n ? void y.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = y.find.attr(t, e)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!p.radioValue && "radio" === e && y.nodeName(t, "input")) {
                                        var n = t.value;
                                        return t.setAttribute("type", e), n && (t.value = n), e
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var n, r, i = 0,
                                o = e && e.match(D);
                            if (o && 1 === t.nodeType)
                                for (; n = o[i++];) r = y.propFix[n] || n, y.expr.match.bool.test(n) ? Te && Ee || !Se.test(n) ? t[r] = !1 : t[y.camelCase("default-" + n)] = t[r] = !1 : y.attr(t, n, ""), t.removeAttribute(Ee ? n : r)
                        }
                    }), xe = {
                        set: function(t, e, n) {
                            return !1 === e ? y.removeAttr(t, n) : Te && Ee || !Se.test(n) ? t.setAttribute(!Ee && y.propFix[n] || n, n) : t[y.camelCase("default-" + n)] = t[n] = !0, n
                        }
                    }, y.each(y.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                        var n = ke[e] || y.find.attr;
                        Te && Ee || !Se.test(e) ? ke[e] = function(t, e, r) {
                            var i, o;
                            return r || (o = ke[e], ke[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, ke[e] = o), i
                        } : ke[e] = function(t, e, n) {
                            if (!n) return t[y.camelCase("default-" + e)] ? e.toLowerCase() : null
                        }
                    })), Te && Ee || (y.attrHooks.value = {
                        set: function(t, e, n) {
                            if (!y.nodeName(t, "input")) return _e && _e.set(t, e, n);
                            t.defaultValue = e
                        }
                    }), Ee || (_e = {
                        set: function(t, e, n) {
                            var r = t.getAttributeNode(n);
                            if (r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n)) return e
                        }
                    }, ke.id = ke.name = ke.coords = function(t, e, n) {
                        var r;
                        if (!n) return (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
                    }, y.valHooks.button = {
                        get: function(t, e) {
                            var n = t.getAttributeNode(e);
                            if (n && n.specified) return n.value
                        },
                        set: _e.set
                    }, y.attrHooks.contenteditable = {
                        set: function(t, e, n) {
                            _e.set(t, "" !== e && e, n)
                        }
                    }, y.each(["width", "height"], (function(t, e) {
                        y.attrHooks[e] = {
                            set: function(t, n) {
                                if ("" === n) return t.setAttribute(e, "auto"), n
                            }
                        }
                    }))), p.style || (y.attrHooks.style = {
                        get: function(t) {
                            return t.style.cssText || void 0
                        },
                        set: function(t, e) {
                            return t.style.cssText = e + ""
                        }
                    });
                    var Ce = /^(?:input|select|textarea|button|object)$/i,
                        Ae = /^(?:a|area)$/i;
                    y.fn.extend({
                        prop: function(t, e) {
                            return et(this, y.prop, t, e, arguments.length > 1)
                        },
                        removeProp: function(t) {
                            return t = y.propFix[t] || t, this.each((function() {
                                try {
                                    this[t] = void 0, delete this[t]
                                } catch (t) {}
                            }))
                        }
                    }), y.extend({
                        prop: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && y.isXMLDoc(t) || (e = y.propFix[e] || e, i = y.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = y.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Ae.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), p.hrefNormalized || y.each(["href", "src"], (function(t, e) {
                        y.propHooks[e] = {
                            get: function(t) {
                                return t.getAttribute(e, 4)
                            }
                        }
                    })), p.optSelected || (y.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                        }
                    }), y.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        y.propFix[this.toLowerCase()] = this
                    })), p.enctype || (y.propFix.enctype = "encoding");
                    var Oe = /[\t\r\n\f]/g;

                    function Ne(t) {
                        return y.attr(t, "class") || ""
                    }
                    y.fn.extend({
                        addClass: function(t) {
                            var e, n, r, i, o, s, a, u = 0;
                            if (y.isFunction(t)) return this.each((function(e) {
                                y(this).addClass(t.call(this, e, Ne(this)))
                            }));
                            if ("string" == typeof t && t)
                                for (e = t.match(D) || []; n = this[u++];)
                                    if (i = Ne(n), r = 1 === n.nodeType && (" " + i + " ").replace(Oe, " ")) {
                                        for (s = 0; o = e[s++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (a = y.trim(r)) && y.attr(n, "class", a)
                                    }
                            return this
                        },
                        removeClass: function(t) {
                            var e, n, r, i, o, s, a, u = 0;
                            if (y.isFunction(t)) return this.each((function(e) {
                                y(this).removeClass(t.call(this, e, Ne(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ("string" == typeof t && t)
                                for (e = t.match(D) || []; n = this[u++];)
                                    if (i = Ne(n), r = 1 === n.nodeType && (" " + i + " ").replace(Oe, " ")) {
                                        for (s = 0; o = e[s++];)
                                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                        i !== (a = y.trim(r)) && y.attr(n, "class", a)
                                    }
                            return this
                        },
                        toggleClass: function(t, e) {
                            var n = typeof t;
                            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : y.isFunction(t) ? this.each((function(n) {
                                y(this).toggleClass(t.call(this, n, Ne(this), e), e)
                            })) : this.each((function() {
                                var e, r, i, o;
                                if ("string" === n)
                                    for (r = 0, i = y(this), o = t.match(D) || []; e = o[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                                else void 0 !== t && "boolean" !== n || ((e = Ne(this)) && y._data(this, "__className__", e), y.attr(this, "class", e || !1 === t ? "" : y._data(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(t) {
                            var e, n, r = 0;
                            for (e = " " + t + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + Ne(n) + " ").replace(Oe, " ").indexOf(e) > -1) return !0;
                            return !1
                        }
                    }), y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), (function(t, e) {
                        y.fn[e] = function(t, n) {
                            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                        }
                    })), y.fn.extend({
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }
                    });
                    var Le = r.location,
                        Re = y.now(),
                        Pe = /\?/,
                        je = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
                    y.parseJSON = function(t) {
                        if (r.JSON && r.JSON.parse) return r.JSON.parse(t + "");
                        var e, n = null,
                            i = y.trim(t + "");
                        return i && !y.trim(i.replace(je, (function(t, r, i, o) {
                            return e && r && (n = 0), 0 === n ? t : (e = i || r, n += !o - !i, "")
                        }))) ? Function("return " + i)() : y.error("Invalid JSON: " + t)
                    }, y.parseXML = function(t) {
                        var e;
                        if (!t || "string" != typeof t) return null;
                        try {
                            r.DOMParser ? e = (new r.DOMParser).parseFromString(t, "text/xml") : ((e = new r.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
                        } catch (t) {
                            e = void 0
                        }
                        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || y.error("Invalid XML: " + t), e
                    };
                    var Me = /#.*$/,
                        De = /([?&])_=[^&]*/,
                        Be = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
                        Ie = /^(?:GET|HEAD)$/,
                        qe = /^\/\//,
                        Ue = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
                        He = {},
                        Fe = {},
                        ze = "*/".concat("*"),
                        $e = Le.href,
                        We = Ue.exec($e.toLowerCase()) || [];

                    function Xe(t) {
                        return function(e, n) {
                            "string" != typeof e && (n = e, e = "*");
                            var r, i = 0,
                                o = e.toLowerCase().match(D) || [];
                            if (y.isFunction(n))
                                for (; r = o[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                        }
                    }

                    function Ye(t, e, n, r) {
                        var i = {},
                            o = t === Fe;

                        function s(a) {
                            var u;
                            return i[a] = !0, y.each(t[a] || [], (function(t, a) {
                                var c = a(e, n, r);
                                return "string" != typeof c || o || i[c] ? o ? !(u = c) : void 0 : (e.dataTypes.unshift(c), s(c), !1)
                            })), u
                        }
                        return s(e.dataTypes[0]) || !i["*"] && s("*")
                    }

                    function Ve(t, e) {
                        var n, r, i = y.ajaxSettings.flatOptions || {};
                        for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
                        return n && y.extend(!0, t, n), t
                    }

                    function Ke(t) {
                        return t.style && t.style.display || y.css(t, "display")
                    }
                    y.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: $e,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(We[1]),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": ze,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": y.parseJSON,
                                "text xml": y.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? Ve(Ve(t, y.ajaxSettings), e) : Ve(y.ajaxSettings, t)
                        },
                        ajaxPrefilter: Xe(He),
                        ajaxTransport: Xe(Fe),
                        ajax: function(t, e) {
                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var n, i, o, s, a, u, c, l, f = y.ajaxSetup({}, e),
                                h = f.context || f,
                                d = f.context && (h.nodeType || h.jquery) ? y(h) : y.event,
                                p = y.Deferred(),
                                g = y.Callbacks("once memory"),
                                v = f.statusCode || {},
                                m = {},
                                b = {},
                                w = 0,
                                _ = "canceled",
                                x = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (2 === w) {
                                            if (!l)
                                                for (l = {}; e = Be.exec(s);) l[e[1].toLowerCase()] = e[2];
                                            e = l[t.toLowerCase()]
                                        }
                                        return null == e ? null : e
                                    },
                                    getAllResponseHeaders: function() {
                                        return 2 === w ? s : null
                                    },
                                    setRequestHeader: function(t, e) {
                                        var n = t.toLowerCase();
                                        return w || (t = b[n] = b[n] || t, m[t] = e), this
                                    },
                                    overrideMimeType: function(t) {
                                        return w || (f.mimeType = t), this
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (w < 2)
                                                for (e in t) v[e] = [v[e], t[e]];
                                            else x.always(t[x.status]);
                                        return this
                                    },
                                    abort: function(t) {
                                        var e = t || _;
                                        return c && c.abort(e), k(0, e), this
                                    }
                                };
                            if (p.promise(x).complete = g.add, x.success = x.done, x.error = x.fail, f.url = ((t || f.url || $e) + "").replace(Me, "").replace(qe, We[1] + "//"), f.type = e.method || e.type || f.method || f.type, f.dataTypes = y.trim(f.dataType || "*").toLowerCase().match(D) || [""], null == f.crossDomain && (n = Ue.exec(f.url.toLowerCase()), f.crossDomain = !(!n || n[1] === We[1] && n[2] === We[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (We[3] || ("http:" === We[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = y.param(f.data, f.traditional)), Ye(He, f, e, x), 2 === w) return x;
                            for (i in (u = y.event && f.global) && 0 == y.active++ && y.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ie.test(f.type), o = f.url, f.hasContent || (f.data && (o = f.url += (Pe.test(o) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = De.test(o) ? o.replace(De, "$1_=" + Re++) : o + (Pe.test(o) ? "&" : "?") + "_=" + Re++)), f.ifModified && (y.lastModified[o] && x.setRequestHeader("If-Modified-Since", y.lastModified[o]), y.etag[o] && x.setRequestHeader("If-None-Match", y.etag[o])), (f.data && f.hasContent && !1 !== f.contentType || e.contentType) && x.setRequestHeader("Content-Type", f.contentType), x.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]), f.headers) x.setRequestHeader(i, f.headers[i]);
                            if (f.beforeSend && (!1 === f.beforeSend.call(h, x, f) || 2 === w)) return x.abort();
                            for (i in _ = "abort", {
                                    success: 1,
                                    error: 1,
                                    complete: 1
                                }) x[i](f[i]);
                            if (c = Ye(Fe, f, e, x)) {
                                if (x.readyState = 1, u && d.trigger("ajaxSend", [x, f]), 2 === w) return x;
                                f.async && f.timeout > 0 && (a = r.setTimeout((function() {
                                    x.abort("timeout")
                                }), f.timeout));
                                try {
                                    w = 1, c.send(m, k)
                                } catch (t) {
                                    if (!(w < 2)) throw t;
                                    k(-1, t)
                                }
                            } else k(-1, "No Transport");

                            function k(t, e, n, i) {
                                var l, m, b, _, k, S = e;
                                2 !== w && (w = 2, a && r.clearTimeout(a), c = void 0, s = i || "", x.readyState = t > 0 ? 4 : 0, l = t >= 200 && t < 300 || 304 === t, n && (_ = function(t, e, n) {
                                    for (var r, i, o, s, a = t.contents, u = t.dataTypes;
                                        "*" === u[0];) u.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (i)
                                        for (s in a)
                                            if (a[s] && a[s].test(i)) {
                                                u.unshift(s);
                                                break
                                            }
                                    if (u[0] in n) o = u[0];
                                    else {
                                        for (s in n) {
                                            if (!u[0] || t.converters[s + " " + u[0]]) {
                                                o = s;
                                                break
                                            }
                                            r || (r = s)
                                        }
                                        o = o || r
                                    }
                                    if (o) return o !== u[0] && u.unshift(o), n[o]
                                }(f, x, n)), _ = function(t, e, n, r) {
                                    var i, o, s, a, u, c = {},
                                        l = t.dataTypes.slice();
                                    if (l[1])
                                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                                    for (o = l.shift(); o;)
                                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())
                                            if ("*" === o) o = u;
                                            else if ("*" !== u && u !== o) {
                                        if (!(s = c[u + " " + o] || c["* " + o]))
                                            for (i in c)
                                                if ((a = i.split(" "))[1] === o && (s = c[u + " " + a[0]] || c["* " + a[0]])) {
                                                    !0 === s ? s = c[i] : !0 !== c[i] && (o = a[0], l.unshift(a[1]));
                                                    break
                                                }
                                        if (!0 !== s)
                                            if (s && t.throws) e = s(e);
                                            else try {
                                                e = s(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: s ? t : "No conversion from " + u + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: e
                                    }
                                }(f, _, x, l), l ? (f.ifModified && ((k = x.getResponseHeader("Last-Modified")) && (y.lastModified[o] = k), (k = x.getResponseHeader("etag")) && (y.etag[o] = k)), 204 === t || "HEAD" === f.type ? S = "nocontent" : 304 === t ? S = "notmodified" : (S = _.state, m = _.data, l = !(b = _.error))) : (b = S, !t && S || (S = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (e || S) + "", l ? p.resolveWith(h, [m, S, x]) : p.rejectWith(h, [x, S, b]), x.statusCode(v), v = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [x, f, l ? m : b]), g.fireWith(h, [x, S]), u && (d.trigger("ajaxComplete", [x, f]), --y.active || y.event.trigger("ajaxStop")))
                            }
                            return x
                        },
                        getJSON: function(t, e, n) {
                            return y.get(t, e, n, "json")
                        },
                        getScript: function(t, e) {
                            return y.get(t, void 0, e, "script")
                        }
                    }), y.each(["get", "post"], (function(t, e) {
                        y[e] = function(t, n, r, i) {
                            return y.isFunction(n) && (i = i || r, r = n, n = void 0), y.ajax(y.extend({
                                url: t,
                                type: e,
                                dataType: i,
                                data: n,
                                success: r
                            }, y.isPlainObject(t) && t))
                        }
                    })), y._evalUrl = function(t) {
                        return y.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            throws: !0
                        })
                    }, y.fn.extend({
                        wrapAll: function(t) {
                            if (y.isFunction(t)) return this.each((function(e) {
                                y(this).wrapAll(t.call(this, e))
                            }));
                            if (this[0]) {
                                var e = y(t, this[0].ownerDocument).eq(0).clone(!0);
                                this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                                    return t
                                })).append(this)
                            }
                            return this
                        },
                        wrapInner: function(t) {
                            return y.isFunction(t) ? this.each((function(e) {
                                y(this).wrapInner(t.call(this, e))
                            })) : this.each((function() {
                                var e = y(this),
                                    n = e.contents();
                                n.length ? n.wrapAll(t) : e.append(t)
                            }))
                        },
                        wrap: function(t) {
                            var e = y.isFunction(t);
                            return this.each((function(n) {
                                y(this).wrapAll(e ? t.call(this, n) : t)
                            }))
                        },
                        unwrap: function() {
                            return this.parent().each((function() {
                                y.nodeName(this, "body") || y(this).replaceWith(this.childNodes)
                            })).end()
                        }
                    }), y.expr.filters.hidden = function(t) {
                        return p.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
                            if (!y.contains(t.ownerDocument || s, t)) return !0;
                            for (; t && 1 === t.nodeType;) {
                                if ("none" === Ke(t) || "hidden" === t.type) return !0;
                                t = t.parentNode
                            }
                            return !1
                        }(t)
                    }, y.expr.filters.visible = function(t) {
                        return !y.expr.filters.hidden(t)
                    };
                    var Je = /%20/g,
                        Ge = /\[\]$/,
                        Qe = /\r?\n/g,
                        Ze = /^(?:submit|button|image|reset|file)$/i,
                        tn = /^(?:input|select|textarea|keygen)/i;

                    function en(t, e, n, r) {
                        var i;
                        if (y.isArray(e)) y.each(e, (function(e, i) {
                            n || Ge.test(t) ? r(t, i) : en(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== y.type(e)) r(t, e);
                        else
                            for (i in e) en(t + "[" + i + "]", e[i], n, r)
                    }
                    y.param = function(t, e) {
                        var n, r = [],
                            i = function(t, e) {
                                e = y.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                            };
                        if (void 0 === e && (e = y.ajaxSettings && y.ajaxSettings.traditional), y.isArray(t) || t.jquery && !y.isPlainObject(t)) y.each(t, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in t) en(n, t[n], e, i);
                        return r.join("&").replace(Je, "+")
                    }, y.fn.extend({
                        serialize: function() {
                            return y.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var t = y.prop(this, "elements");
                                return t ? y.makeArray(t) : this
                            })).filter((function() {
                                var t = this.type;
                                return this.name && !y(this).is(":disabled") && tn.test(this.nodeName) && !Ze.test(t) && (this.checked || !nt.test(t))
                            })).map((function(t, e) {
                                var n = y(this).val();
                                return null == n ? null : y.isArray(n) ? y.map(n, (function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Qe, "\r\n")
                                    }
                                })) : {
                                    name: e.name,
                                    value: n.replace(Qe, "\r\n")
                                }
                            })).get()
                        }
                    }), y.ajaxSettings.xhr = void 0 !== r.ActiveXObject ? function() {
                        return this.isLocal ? an() : s.documentMode > 8 ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || an()
                    } : sn;
                    var nn = 0,
                        rn = {},
                        on = y.ajaxSettings.xhr();

                    function sn() {
                        try {
                            return new r.XMLHttpRequest
                        } catch (t) {}
                    }

                    function an() {
                        try {
                            return new r.ActiveXObject("Microsoft.XMLHTTP")
                        } catch (t) {}
                    }
                    r.attachEvent && r.attachEvent("onunload", (function() {
                        for (var t in rn) rn[t](void 0, !0)
                    })), p.cors = !!on && "withCredentials" in on, (on = p.ajax = !!on) && y.ajaxTransport((function(t) {
                        var e;
                        if (!t.crossDomain || p.cors) return {
                            send: function(n, i) {
                                var o, s = t.xhr(),
                                    a = ++nn;
                                if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (o in t.xhrFields) s[o] = t.xhrFields[o];
                                for (o in t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) void 0 !== n[o] && s.setRequestHeader(o, n[o] + "");
                                s.send(t.hasContent && t.data || null), e = function(n, r) {
                                    var o, u, c;
                                    if (e && (r || 4 === s.readyState))
                                        if (delete rn[a], e = void 0, s.onreadystatechange = y.noop, r) 4 !== s.readyState && s.abort();
                                        else {
                                            c = {}, o = s.status, "string" == typeof s.responseText && (c.text = s.responseText);
                                            try {
                                                u = s.statusText
                                            } catch (t) {
                                                u = ""
                                            }
                                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                                        }
                                    c && i(o, u, c, s.getAllResponseHeaders())
                                }, t.async ? 4 === s.readyState ? r.setTimeout(e) : s.onreadystatechange = rn[a] = e : e()
                            },
                            abort: function() {
                                e && e(void 0, !0)
                            }
                        }
                    })), y.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return y.globalEval(t), t
                            }
                        }
                    }), y.ajaxPrefilter("script", (function(t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
                    })), y.ajaxTransport("script", (function(t) {
                        if (t.crossDomain) {
                            var e, n = s.head || y("head")[0] || s.documentElement;
                            return {
                                send: function(r, i) {
                                    (e = s.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function(t, n) {
                                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
                                    }, n.insertBefore(e, n.firstChild)
                                },
                                abort: function() {
                                    e && e.onload(void 0, !0)
                                }
                            }
                        }
                    }));
                    var un = [],
                        cn = /(=)\?(?=&|$)|\?\?/;
                    y.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = un.pop() || y.expando + "_" + Re++;
                            return this[t] = !0, t
                        }
                    }), y.ajaxPrefilter("json jsonp", (function(t, e, n) {
                        var i, o, s, a = !1 !== t.jsonp && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
                        if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(cn, "$1" + i) : !1 !== t.jsonp && (t.url += (Pe.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return s || y.error(i + " was not called"), s[0]
                        }, t.dataTypes[0] = "json", o = r[i], r[i] = function() {
                            s = arguments
                        }, n.always((function() {
                            void 0 === o ? y(r).removeProp(i) : r[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, un.push(i)), s && y.isFunction(o) && o(s[0]), s = o = void 0
                        })), "script"
                    })), y.parseHTML = function(t, e, n) {
                        if (!t || "string" != typeof t) return null;
                        "boolean" == typeof e && (n = e, e = !1), e = e || s;
                        var r = T.exec(t),
                            i = !n && [];
                        return r ? [e.createElement(r[1])] : (r = pt([t], e, i), i && i.length && y(i).remove(), y.merge([], r.childNodes))
                    };
                    var ln = y.fn.load;

                    function fn(t) {
                        return y.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
                    }
                    y.fn.load = function(t, e, n) {
                        if ("string" != typeof t && ln) return ln.apply(this, arguments);
                        var r, i, o, s = this,
                            a = t.indexOf(" ");
                        return a > -1 && (r = y.trim(t.slice(a, t.length)), t = t.slice(0, a)), y.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), s.length > 0 && y.ajax({
                            url: t,
                            type: i || "GET",
                            dataType: "html",
                            data: e
                        }).done((function(t) {
                            o = arguments, s.html(r ? y("<div>").append(y.parseHTML(t)).find(r) : t)
                        })).always(n && function(t, e) {
                            s.each((function() {
                                n.apply(this, o || [t.responseText, e, t])
                            }))
                        }), this
                    }, y.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                        y.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })), y.expr.filters.animated = function(t) {
                        return y.grep(y.timers, (function(e) {
                            return t === e.elem
                        })).length
                    }, y.offset = {
                        setOffset: function(t, e, n) {
                            var r, i, o, s, a, u, c = y.css(t, "position"),
                                l = y(t),
                                f = {};
                            "static" === c && (t.style.position = "relative"), a = l.offset(), o = y.css(t, "top"), u = y.css(t, "left"), ("absolute" === c || "fixed" === c) && y.inArray("auto", [o, u]) > -1 ? (s = (r = l.position()).top, i = r.left) : (s = parseFloat(o) || 0, i = parseFloat(u) || 0), y.isFunction(e) && (e = e.call(t, n, y.extend({}, a))), null != e.top && (f.top = e.top - a.top + s), null != e.left && (f.left = e.left - a.left + i), "using" in e ? e.using.call(t, f) : l.css(f)
                        }
                    }, y.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                y.offset.setOffset(this, t, e)
                            }));
                            var e, n, r = {
                                    top: 0,
                                    left: 0
                                },
                                i = this[0],
                                o = i && i.ownerDocument;
                            return o ? (e = o.documentElement, y.contains(e, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), n = fn(o), {
                                top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                                left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
                            }) : r) : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var t, e, n = {
                                        top: 0,
                                        left: 0
                                    },
                                    r = this[0];
                                return "fixed" === y.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), y.nodeName(t[0], "html") || (n = t.offset()), n.top += y.css(t[0], "borderTopWidth", !0), n.left += y.css(t[0], "borderLeftWidth", !0)), {
                                    top: e.top - n.top - y.css(r, "marginTop", !0),
                                    left: e.left - n.left - y.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var t = this.offsetParent; t && !y.nodeName(t, "html") && "static" === y.css(t, "position");) t = t.offsetParent;
                                return t || Xt
                            }))
                        }
                    }), y.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(t, e) {
                        var n = /Y/.test(e);
                        y.fn[t] = function(r) {
                            return et(this, (function(t, r, i) {
                                var o = fn(t);
                                if (void 0 === i) return o ? e in o ? o[e] : o.document.documentElement[r] : t[r];
                                o ? o.scrollTo(n ? y(o).scrollLeft() : i, n ? i : y(o).scrollTop()) : t[r] = i
                            }), t, r, arguments.length, null)
                        }
                    })), y.each(["top", "left"], (function(t, e) {
                        y.cssHooks[e] = Jt(p.pixelPosition, (function(t, n) {
                            if (n) return n = Vt(t, e), $t.test(n) ? y(t).position()[e] + "px" : n
                        }))
                    })), y.each({
                        Height: "height",
                        Width: "width"
                    }, (function(t, e) {
                        y.each({
                            padding: "inner" + t,
                            content: e,
                            "": "outer" + t
                        }, (function(n, r) {
                            y.fn[r] = function(r, i) {
                                var o = arguments.length && (n || "boolean" != typeof r),
                                    s = n || (!0 === r || !0 === i ? "margin" : "border");
                                return et(this, (function(e, n, r) {
                                    var i;
                                    return y.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? y.css(e, n, s) : y.style(e, n, r, s)
                                }), e, o ? r : void 0, o, null)
                            }
                        }))
                    })), y.fn.extend({
                        bind: function(t, e, n) {
                            return this.on(t, null, e, n)
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e)
                        },
                        delegate: function(t, e, n, r) {
                            return this.on(e, t, n, r)
                        },
                        undelegate: function(t, e, n) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                        }
                    }), y.fn.size = function() {
                        return this.length
                    }, y.fn.andSelf = y.fn.addBack, void 0 === (n = function() {
                        return y
                    }.apply(e, [])) || (t.exports = n);
                    var hn = r.jQuery,
                        dn = r.$;
                    return y.noConflict = function(t) {
                        return r.$ === y && (r.$ = dn), t && r.jQuery === y && (r.jQuery = hn), y
                    }, i || (r.jQuery = r.$ = y), y
                }, "object" == typeof t.exports ? t.exports = r.document ? i(r, !0) : function(t) {
                    if (!t.document) throw new Error("jQuery requires a window with a document");
                    return i(t)
                } : i(r)
            },
            86606: function(t) {
                var e;
                e = function() {
                    return function(t) {
                        var e = {};

                        function n(r) {
                            if (e[r]) return e[r].exports;
                            var i = e[r] = {
                                exports: {},
                                id: r,
                                loaded: !1
                            };
                            return t[r].call(i.exports, i, i.exports, n), i.loaded = !0, i.exports
                        }
                        return n.m = t, n.c = e, n.p = "", n(0)
                    }([function(t, e, n) {
                        "use strict";
                        var r = n(1);
                        t.exports = r.default
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(2),
                            i = n(9),
                            o = n(24),
                            s = n(39),
                            a = n(40),
                            u = n(41),
                            c = n(12),
                            l = n(5),
                            f = n(71),
                            h = n(8),
                            d = n(43),
                            p = n(14),
                            g = function() {
                                function t(e, n) {
                                    var c = this;
                                    if (function(t) {
                                            if (null == t) throw "You must pass your app key when you instantiate Pusher."
                                        }(e), !(n = n || {}).cluster && !n.wsHost && !n.httpHost) {
                                        var g = p.default.buildLogSuffix("javascriptQuickStart");
                                        h.default.warn("You should always specify a cluster when connecting. " + g)
                                    }
                                    this.key = e, this.config = i.extend(f.getGlobalConfig(), n.cluster ? f.getClusterConfig(n.cluster) : {}, n), this.channels = d.default.createChannels(), this.global_emitter = new o.default, this.sessionID = Math.floor(1e9 * Math.random()), this.timeline = new s.default(this.key, this.sessionID, {
                                        cluster: this.config.cluster,
                                        features: t.getClientFeatures(),
                                        params: this.config.timelineParams || {},
                                        limit: 50,
                                        level: a.default.INFO,
                                        version: l.default.VERSION
                                    }), this.config.disableStats || (this.timelineSender = d.default.createTimelineSender(this.timeline, {
                                        host: this.config.statsHost,
                                        path: "/timeline/v2/" + r.default.TimelineTransport.name
                                    })), this.connection = d.default.createConnectionManager(this.key, i.extend({
                                        getStrategy: function(t) {
                                            var e = i.extend({}, c.config, t);
                                            return u.build(r.default.getDefaultStrategy(e), e)
                                        },
                                        timeline: this.timeline,
                                        activityTimeout: this.config.activity_timeout,
                                        pongTimeout: this.config.pong_timeout,
                                        unavailableTimeout: this.config.unavailable_timeout
                                    }, this.config, {
                                        useTLS: this.shouldUseTLS()
                                    })), this.connection.bind("connected", (function() {
                                        c.subscribeAll(), c.timelineSender && c.timelineSender.send(c.connection.isUsingTLS())
                                    })), this.connection.bind("message", (function(t) {
                                        var e = 0 === t.event.indexOf("pusher_internal:");
                                        if (t.channel) {
                                            var n = c.channel(t.channel);
                                            n && n.handleEvent(t)
                                        }
                                        e || c.global_emitter.emit(t.event, t.data)
                                    })), this.connection.bind("connecting", (function() {
                                        c.channels.disconnect()
                                    })), this.connection.bind("disconnected", (function() {
                                        c.channels.disconnect()
                                    })), this.connection.bind("error", (function(t) {
                                        h.default.warn("Error", t)
                                    })), t.instances.push(this), this.timeline.info({
                                        instances: t.instances.length
                                    }), t.isReady && this.connect()
                                }
                                return t.ready = function() {
                                    t.isReady = !0;
                                    for (var e = 0, n = t.instances.length; e < n; e++) t.instances[e].connect()
                                }, t.log = function(e) {
                                    t.logToConsole && window.console && window.console.log && window.console.log(e)
                                }, t.getClientFeatures = function() {
                                    return i.keys(i.filterObject({
                                        ws: r.default.Transports.ws
                                    }, (function(t) {
                                        return t.isSupported({})
                                    })))
                                }, t.prototype.channel = function(t) {
                                    return this.channels.find(t)
                                }, t.prototype.allChannels = function() {
                                    return this.channels.all()
                                }, t.prototype.connect = function() {
                                    if (this.connection.connect(), this.timelineSender && !this.timelineSenderTimer) {
                                        var t = this.connection.isUsingTLS(),
                                            e = this.timelineSender;
                                        this.timelineSenderTimer = new c.PeriodicTimer(6e4, (function() {
                                            e.send(t)
                                        }))
                                    }
                                }, t.prototype.disconnect = function() {
                                    this.connection.disconnect(), this.timelineSenderTimer && (this.timelineSenderTimer.ensureAborted(), this.timelineSenderTimer = null)
                                }, t.prototype.bind = function(t, e, n) {
                                    return this.global_emitter.bind(t, e, n), this
                                }, t.prototype.unbind = function(t, e, n) {
                                    return this.global_emitter.unbind(t, e, n), this
                                }, t.prototype.bind_global = function(t) {
                                    return this.global_emitter.bind_global(t), this
                                }, t.prototype.unbind_global = function(t) {
                                    return this.global_emitter.unbind_global(t), this
                                }, t.prototype.unbind_all = function(t) {
                                    return this.global_emitter.unbind_all(), this
                                }, t.prototype.subscribeAll = function() {
                                    var t;
                                    for (t in this.channels.channels) this.channels.channels.hasOwnProperty(t) && this.subscribe(t)
                                }, t.prototype.subscribe = function(t) {
                                    var e = this.channels.add(t, this);
                                    return e.subscriptionPending && e.subscriptionCancelled ? e.reinstateSubscription() : e.subscriptionPending || "connected" !== this.connection.state || e.subscribe(), e
                                }, t.prototype.unsubscribe = function(t) {
                                    var e = this.channels.find(t);
                                    e && e.subscriptionPending ? e.cancelSubscription() : (e = this.channels.remove(t)) && "connected" === this.connection.state && e.unsubscribe()
                                }, t.prototype.send_event = function(t, e, n) {
                                    return this.connection.send_event(t, e, n)
                                }, t.prototype.shouldUseTLS = function() {
                                    return "https:" === r.default.getProtocol() || !0 === this.config.forceTLS || Boolean(this.config.encrypted)
                                }, t.instances = [], t.isReady = !1, t.logToConsole = !1, t.Runtime = r.default, t.ScriptReceivers = r.default.ScriptReceivers, t.DependenciesReceivers = r.default.DependenciesReceivers, t.auth_callbacks = r.default.auth_callbacks, t
                            }();
                        e.__esModule = !0, e.default = g, r.default.setup(g)
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(3),
                            i = n(7),
                            o = n(15),
                            s = n(16),
                            a = n(17),
                            u = n(4),
                            c = n(18),
                            l = n(19),
                            f = n(26),
                            h = n(27),
                            d = n(28),
                            p = n(29),
                            g = {
                                nextAuthCallbackID: 1,
                                auth_callbacks: {},
                                ScriptReceivers: u.ScriptReceivers,
                                DependenciesReceivers: r.DependenciesReceivers,
                                getDefaultStrategy: h.default,
                                Transports: l.default,
                                transportConnectionInitializer: d.default,
                                HTTPFactory: p.default,
                                TimelineTransport: c.default,
                                getXHRAPI: function() {
                                    return window.XMLHttpRequest
                                },
                                getWebSocketAPI: function() {
                                    return window.WebSocket || window.MozWebSocket
                                },
                                setup: function(t) {
                                    var e = this;
                                    window.Pusher = t;
                                    var n = function() {
                                        e.onDocumentBody(t.ready)
                                    };
                                    window.JSON ? n() : r.Dependencies.load("json2", {}, n)
                                },
                                getDocument: function() {
                                    return document
                                },
                                getProtocol: function() {
                                    return this.getDocument().location.protocol
                                },
                                getAuthorizers: function() {
                                    return {
                                        ajax: i.default,
                                        jsonp: o.default
                                    }
                                },
                                onDocumentBody: function(t) {
                                    var e = this;
                                    document.body ? t() : setTimeout((function() {
                                        e.onDocumentBody(t)
                                    }), 0)
                                },
                                createJSONPRequest: function(t, e) {
                                    return new a.default(t, e)
                                },
                                createScriptRequest: function(t) {
                                    return new s.default(t)
                                },
                                getLocalStorage: function() {
                                    try {
                                        return window.localStorage
                                    } catch (t) {
                                        return
                                    }
                                },
                                createXHR: function() {
                                    return this.getXHRAPI() ? this.createXMLHttpRequest() : this.createMicrosoftXHR()
                                },
                                createXMLHttpRequest: function() {
                                    return new(this.getXHRAPI())
                                },
                                createMicrosoftXHR: function() {
                                    return new ActiveXObject("Microsoft.XMLHTTP")
                                },
                                getNetwork: function() {
                                    return f.Network
                                },
                                createWebSocket: function(t) {
                                    return new(this.getWebSocketAPI())(t)
                                },
                                createSocketRequest: function(t, e) {
                                    if (this.isXHRSupported()) return this.HTTPFactory.createXHR(t, e);
                                    if (this.isXDRSupported(0 === e.indexOf("https:"))) return this.HTTPFactory.createXDR(t, e);
                                    throw "Cross-origin HTTP requests are not supported"
                                },
                                isXHRSupported: function() {
                                    var t = this.getXHRAPI();
                                    return Boolean(t) && void 0 !== (new t).withCredentials
                                },
                                isXDRSupported: function(t) {
                                    var e = t ? "https:" : "http:",
                                        n = this.getProtocol();
                                    return Boolean(window.XDomainRequest) && n === e
                                },
                                addUnloadListener: function(t) {
                                    void 0 !== window.addEventListener ? window.addEventListener("unload", t, !1) : void 0 !== window.attachEvent && window.attachEvent("onunload", t)
                                },
                                removeUnloadListener: function(t) {
                                    void 0 !== window.addEventListener ? window.removeEventListener("unload", t, !1) : void 0 !== window.detachEvent && window.detachEvent("onunload", t)
                                }
                            };
                        e.__esModule = !0, e.default = g
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(4),
                            i = n(5),
                            o = n(6);
                        e.DependenciesReceivers = new r.ScriptReceiverFactory("_pusher_dependencies", "Pusher.DependenciesReceivers"), e.Dependencies = new o.default({
                            cdn_http: i.default.cdn_http,
                            cdn_https: i.default.cdn_https,
                            version: i.default.VERSION,
                            suffix: i.default.dependency_suffix,
                            receivers: e.DependenciesReceivers
                        })
                    }, function(t, e) {
                        "use strict";
                        var n = function() {
                            function t(t, e) {
                                this.lastId = 0, this.prefix = t, this.name = e
                            }
                            return t.prototype.create = function(t) {
                                this.lastId++;
                                var e = this.lastId,
                                    n = this.prefix + e,
                                    r = this.name + "[" + e + "]",
                                    i = !1,
                                    o = function() {
                                        i || (t.apply(null, arguments), i = !0)
                                    };
                                return this[e] = o, {
                                    number: e,
                                    id: n,
                                    name: r,
                                    callback: o
                                }
                            }, t.prototype.remove = function(t) {
                                delete this[t.number]
                            }, t
                        }();
                        e.ScriptReceiverFactory = n, e.ScriptReceivers = new n("_pusher_script_", "Pusher.ScriptReceivers")
                    }, function(t, e) {
                        "use strict";
                        e.__esModule = !0, e.default = {
                            VERSION: "4.4.0",
                            PROTOCOL: 7,
                            host: "ws.pusherapp.com",
                            ws_port: 80,
                            wss_port: 443,
                            ws_path: "",
                            sockjs_host: "sockjs.pusher.com",
                            sockjs_http_port: 80,
                            sockjs_https_port: 443,
                            sockjs_path: "/pusher",
                            stats_host: "stats.pusher.com",
                            channel_auth_endpoint: "/pusher/auth",
                            channel_auth_transport: "ajax",
                            activity_timeout: 12e4,
                            pong_timeout: 3e4,
                            unavailable_timeout: 1e4,
                            cdn_http: "http://js.pusher.com",
                            cdn_https: "https://js.pusher.com",
                            dependency_suffix: ""
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(4),
                            i = n(2),
                            o = function() {
                                function t(t) {
                                    this.options = t, this.receivers = t.receivers || r.ScriptReceivers, this.loading = {}
                                }
                                return t.prototype.load = function(t, e, n) {
                                    var r = this;
                                    if (r.loading[t] && r.loading[t].length > 0) r.loading[t].push(n);
                                    else {
                                        r.loading[t] = [n];
                                        var o = i.default.createScriptRequest(r.getPath(t, e)),
                                            s = r.receivers.create((function(e) {
                                                if (r.receivers.remove(s), r.loading[t]) {
                                                    var n = r.loading[t];
                                                    delete r.loading[t];
                                                    for (var i = function(t) {
                                                            t || o.cleanup()
                                                        }, a = 0; a < n.length; a++) n[a](e, i)
                                                }
                                            }));
                                        o.send(s)
                                    }
                                }, t.prototype.getRoot = function(t) {
                                    var e = i.default.getDocument().location.protocol;
                                    return (t && t.useTLS || "https:" === e ? this.options.cdn_https : this.options.cdn_http).replace(/\/*$/, "") + "/" + this.options.version
                                }, t.prototype.getPath = function(t, e) {
                                    return this.getRoot(e) + "/" + t + this.options.suffix + ".js"
                                }, t
                            }();
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(8),
                            i = n(2),
                            o = n(14);
                        e.__esModule = !0, e.default = function(t, e, n) {
                            var s;
                            for (var a in (s = i.default.createXHR()).open("POST", this.options.authEndpoint, !0), s.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), this.authOptions.headers) s.setRequestHeader(a, this.authOptions.headers[a]);
                            return s.onreadystatechange = function() {
                                if (4 === s.readyState)
                                    if (200 === s.status) {
                                        var t, e = !1;
                                        try {
                                            t = JSON.parse(s.responseText), e = !0
                                        } catch (t) {
                                            n(!0, "JSON returned from webapp was invalid, yet status code was 200. Data was: " + s.responseText)
                                        }
                                        e && n(!1, t)
                                    } else {
                                        var i = o.default.buildLogSuffix("authenticationEndpoint");
                                        r.default.warn("Couldn't retrieve authentication info. " + s.status + "Clients must be authenticated to join private or presence channels. " + i), n(!0, s.status)
                                    }
                            }, s.send(this.composeQuery(e)), s
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(1),
                            o = {
                                debug: function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                    i.default.log && i.default.log(r.stringify.apply(this, arguments))
                                },
                                warn: function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e - 0] = arguments[e];
                                    var n = r.stringify.apply(this, arguments);
                                    i.default.log ? i.default.log(n) : window.console && (window.console.warn ? window.console.warn(n) : window.console.log && window.console.log(n))
                                }
                            };
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(10),
                            i = n(11);

                        function o(t, e) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(t[n], n, t)
                        }

                        function s(t, e) {
                            for (var n = [], r = 0; r < t.length; r++) n.push(e(t[r], r, t, n));
                            return n
                        }

                        function a(t, e) {
                            var n = {};
                            return o(t, (function(t, r) {
                                n[r] = e(t)
                            })), n
                        }

                        function u(t, e) {
                            var n = {};
                            return o(t, (function(r, i) {
                                (e && e(r, i, t, n) || Boolean(r)) && (n[i] = r)
                            })), n
                        }

                        function c(t) {
                            var e = [];
                            return o(t, (function(t, n) {
                                e.push([n, t])
                            })), e
                        }

                        function l(t) {
                            return a(t, (function(t) {
                                return "object" == typeof t && (t = h(t)), encodeURIComponent(r.default(t.toString()))
                            }))
                        }

                        function f(t) {
                            var e = [],
                                n = [];
                            return function t(r, i) {
                                var o, s, a;
                                switch (typeof r) {
                                    case "object":
                                        if (!r) return null;
                                        for (o = 0; o < e.length; o += 1)
                                            if (e[o] === r) return {
                                                $ref: n[o]
                                            };
                                        if (e.push(r), n.push(i), "[object Array]" === Object.prototype.toString.apply(r))
                                            for (a = [], o = 0; o < r.length; o += 1) a[o] = t(r[o], i + "[" + o + "]");
                                        else
                                            for (s in a = {}, r) Object.prototype.hasOwnProperty.call(r, s) && (a[s] = t(r[s], i + "[" + JSON.stringify(s) + "]"));
                                        return a;
                                    case "number":
                                    case "string":
                                    case "boolean":
                                        return r
                                }
                            }(t, "$")
                        }

                        function h(t) {
                            try {
                                return JSON.stringify(t)
                            } catch (e) {
                                return JSON.stringify(f(t))
                            }
                        }
                        e.extend = function t(e) {
                            for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                            for (var i = 0; i < n.length; i++) {
                                var o = n[i];
                                for (var s in o) o[s] && o[s].constructor && o[s].constructor === Object ? e[s] = t(e[s] || {}, o[s]) : e[s] = o[s]
                            }
                            return e
                        }, e.stringify = function() {
                            for (var t = ["Pusher"], e = 0; e < arguments.length; e++) "string" == typeof arguments[e] ? t.push(arguments[e]) : t.push(h(arguments[e]));
                            return t.join(" : ")
                        }, e.arrayIndexOf = function(t, e) {
                            var n = Array.prototype.indexOf;
                            if (null === t) return -1;
                            if (n && t.indexOf === n) return t.indexOf(e);
                            for (var r = 0, i = t.length; r < i; r++)
                                if (t[r] === e) return r;
                            return -1
                        }, e.objectApply = o, e.keys = function(t) {
                            var e = [];
                            return o(t, (function(t, n) {
                                e.push(n)
                            })), e
                        }, e.values = function(t) {
                            var e = [];
                            return o(t, (function(t) {
                                e.push(t)
                            })), e
                        }, e.apply = function(t, e, n) {
                            for (var r = 0; r < t.length; r++) e.call(n || window, t[r], r, t)
                        }, e.map = s, e.mapObject = a, e.filter = function(t, e) {
                            e = e || function(t) {
                                return !!t
                            };
                            for (var n = [], r = 0; r < t.length; r++) e(t[r], r, t, n) && n.push(t[r]);
                            return n
                        }, e.filterObject = u, e.flatten = c, e.any = function(t, e) {
                            for (var n = 0; n < t.length; n++)
                                if (e(t[n], n, t)) return !0;
                            return !1
                        }, e.all = function(t, e) {
                            for (var n = 0; n < t.length; n++)
                                if (!e(t[n], n, t)) return !1;
                            return !0
                        }, e.encodeParamsObject = l, e.buildQueryString = function(t) {
                            return s(c(l(u(t, (function(t) {
                                return void 0 !== t
                            })))), i.default.method("join", "=")).join("&")
                        }, e.decycleObject = f, e.safeJSONStringify = h
                    }, function(t, e, n) {
                        "use strict";
                        e.__esModule = !0, e.default = function(t) {
                            return f(c(t))
                        };
                        for (var r = String.fromCharCode, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {}, s = 0, a = i.length; s < a; s++) o[i.charAt(s)] = s;
                        var u = function(t) {
                                var e = t.charCodeAt(0);
                                return e < 128 ? t : e < 2048 ? r(192 | e >>> 6) + r(128 | 63 & e) : r(224 | e >>> 12 & 15) + r(128 | e >>> 6 & 63) + r(128 | 63 & e)
                            },
                            c = function(t) {
                                return t.replace(/[^\x00-\x7F]/g, u)
                            },
                            l = function(t) {
                                var e = [0, 2, 1][t.length % 3],
                                    n = t.charCodeAt(0) << 16 | (t.length > 1 ? t.charCodeAt(1) : 0) << 8 | (t.length > 2 ? t.charCodeAt(2) : 0);
                                return [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), e >= 2 ? "=" : i.charAt(n >>> 6 & 63), e >= 1 ? "=" : i.charAt(63 & n)].join("")
                            },
                            f = window.btoa || function(t) {
                                return t.replace(/[\s\S]{1,3}/g, l)
                            }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(12),
                            i = {
                                now: function() {
                                    return Date.now ? Date.now() : (new Date).valueOf()
                                },
                                defer: function(t) {
                                    return new r.OneOffTimer(0, t)
                                },
                                method: function(t) {
                                    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                    var r = Array.prototype.slice.call(arguments, 1);
                                    return function(e) {
                                        return e[t].apply(e, r.concat(arguments))
                                    }
                                }
                            };
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(13);

                        function o(t) {
                            window.clearTimeout(t)
                        }

                        function s(t) {
                            window.clearInterval(t)
                        }
                        var a = function(t) {
                            function e(e, n) {
                                t.call(this, setTimeout, o, e, (function(t) {
                                    return n(), null
                                }))
                            }
                            return r(e, t), e
                        }(i.default);
                        e.OneOffTimer = a;
                        var u = function(t) {
                            function e(e, n) {
                                t.call(this, setInterval, s, e, (function(t) {
                                    return n(), t
                                }))
                            }
                            return r(e, t), e
                        }(i.default);
                        e.PeriodicTimer = u
                    }, function(t, e) {
                        "use strict";
                        var n = function() {
                            function t(t, e, n, r) {
                                var i = this;
                                this.clear = e, this.timer = t((function() {
                                    i.timer && (i.timer = r(i.timer))
                                }), n)
                            }
                            return t.prototype.isRunning = function() {
                                return null !== this.timer
                            }, t.prototype.ensureAborted = function() {
                                this.timer && (this.clear(this.timer), this.timer = null)
                            }, t
                        }();
                        e.__esModule = !0, e.default = n
                    }, function(t, e) {
                        "use strict";
                        var n = {
                            baseUrl: "https://pusher.com",
                            urls: {
                                authenticationEndpoint: {
                                    path: "/docs/authenticating_users"
                                },
                                javascriptQuickStart: {
                                    path: "/docs/javascript_quick_start"
                                },
                                triggeringClientEvents: {
                                    path: "/docs/client_api_guide/client_events#trigger-events"
                                }
                            }
                        };
                        e.__esModule = !0, e.default = {
                            buildLogSuffix: function(t) {
                                var e, r = n.urls[t];
                                return r ? (r.fullUrl ? e = r.fullUrl : r.path && (e = n.baseUrl + r.path), e ? "See: " + e : "") : ""
                            }
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(8);
                        e.__esModule = !0, e.default = function(t, e, n) {
                            void 0 !== this.authOptions.headers && r.default.warn("Warn", "To send headers with the auth request, you must use AJAX, rather than JSONP.");
                            var i = t.nextAuthCallbackID.toString();
                            t.nextAuthCallbackID++;
                            var o = t.getDocument(),
                                s = o.createElement("script");
                            t.auth_callbacks[i] = function(t) {
                                n(!1, t)
                            };
                            var a = "Pusher.auth_callbacks['" + i + "']";
                            s.src = this.options.authEndpoint + "?callback=" + encodeURIComponent(a) + "&" + this.composeQuery(e);
                            var u = o.getElementsByTagName("head")[0] || o.documentElement;
                            u.insertBefore(s, u.firstChild)
                        }
                    }, function(t, e) {
                        "use strict";
                        var n = function() {
                            function t(t) {
                                this.src = t
                            }
                            return t.prototype.send = function(t) {
                                var e = this,
                                    n = "Error loading " + e.src;
                                e.script = document.createElement("script"), e.script.id = t.id, e.script.src = e.src, e.script.type = "text/javascript", e.script.charset = "UTF-8", e.script.addEventListener ? (e.script.onerror = function() {
                                    t.callback(n)
                                }, e.script.onload = function() {
                                    t.callback(null)
                                }) : e.script.onreadystatechange = function() {
                                    "loaded" !== e.script.readyState && "complete" !== e.script.readyState || t.callback(null)
                                }, void 0 === e.script.async && document.attachEvent && /opera/i.test(navigator.userAgent) ? (e.errorScript = document.createElement("script"), e.errorScript.id = t.id + "_error", e.errorScript.text = t.name + "('" + n + "');", e.script.async = e.errorScript.async = !1) : e.script.async = !0;
                                var r = document.getElementsByTagName("head")[0];
                                r.insertBefore(e.script, r.firstChild), e.errorScript && r.insertBefore(e.errorScript, e.script.nextSibling)
                            }, t.prototype.cleanup = function() {
                                this.script && (this.script.onload = this.script.onerror = null, this.script.onreadystatechange = null), this.script && this.script.parentNode && this.script.parentNode.removeChild(this.script), this.errorScript && this.errorScript.parentNode && this.errorScript.parentNode.removeChild(this.errorScript), this.script = null, this.errorScript = null
                            }, t
                        }();
                        e.__esModule = !0, e.default = n
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(2),
                            o = function() {
                                function t(t, e) {
                                    this.url = t, this.data = e
                                }
                                return t.prototype.send = function(t) {
                                    if (!this.request) {
                                        var e = r.buildQueryString(this.data),
                                            n = this.url + "/" + t.number + "?" + e;
                                        this.request = i.default.createScriptRequest(n), this.request.send(t)
                                    }
                                }, t.prototype.cleanup = function() {
                                    this.request && this.request.cleanup()
                                }, t
                            }();
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(2),
                            i = n(4),
                            o = {
                                name: "jsonp",
                                getAgent: function(t, e) {
                                    return function(n, o) {
                                        var s = "http" + (e ? "s" : "") + "://" + (t.host || t.options.host) + t.options.path,
                                            a = r.default.createJSONPRequest(s, n),
                                            u = r.default.ScriptReceivers.create((function(e, n) {
                                                i.ScriptReceivers.remove(u), a.cleanup(), n && n.host && (t.host = n.host), o && o(e, n)
                                            }));
                                        a.send(u)
                                    }
                                }
                            };
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(20),
                            i = n(22),
                            o = n(21),
                            s = n(2),
                            a = n(3),
                            u = n(9),
                            c = new i.default({
                                file: "sockjs",
                                urls: o.sockjs,
                                handlesActivityChecks: !0,
                                supportsPing: !1,
                                isSupported: function() {
                                    return !0
                                },
                                isInitialized: function() {
                                    return void 0 !== window.SockJS
                                },
                                getSocket: function(t, e) {
                                    return new window.SockJS(t, null, {
                                        js_path: a.Dependencies.getPath("sockjs", {
                                            useTLS: e.useTLS
                                        }),
                                        ignore_null_origin: e.ignoreNullOrigin
                                    })
                                },
                                beforeOpen: function(t, e) {
                                    t.send(JSON.stringify({
                                        path: e
                                    }))
                                }
                            }),
                            l = {
                                isSupported: function(t) {
                                    return s.default.isXDRSupported(t.useTLS)
                                }
                            },
                            f = new i.default(u.extend({}, r.streamingConfiguration, l)),
                            h = new i.default(u.extend({}, r.pollingConfiguration, l));
                        r.default.xdr_streaming = f, r.default.xdr_polling = h, r.default.sockjs = c, e.__esModule = !0, e.default = r.default
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(21),
                            i = n(22),
                            o = n(9),
                            s = n(2),
                            a = new i.default({
                                urls: r.ws,
                                handlesActivityChecks: !1,
                                supportsPing: !1,
                                isInitialized: function() {
                                    return Boolean(s.default.getWebSocketAPI())
                                },
                                isSupported: function() {
                                    return Boolean(s.default.getWebSocketAPI())
                                },
                                getSocket: function(t) {
                                    return s.default.createWebSocket(t)
                                }
                            }),
                            u = {
                                urls: r.http,
                                handlesActivityChecks: !1,
                                supportsPing: !0,
                                isInitialized: function() {
                                    return !0
                                }
                            };
                        e.streamingConfiguration = o.extend({
                            getSocket: function(t) {
                                return s.default.HTTPFactory.createStreamingSocket(t)
                            }
                        }, u), e.pollingConfiguration = o.extend({
                            getSocket: function(t) {
                                return s.default.HTTPFactory.createPollingSocket(t)
                            }
                        }, u);
                        var c = {
                                isSupported: function() {
                                    return s.default.isXHRSupported()
                                }
                            },
                            l = {
                                ws: a,
                                xhr_streaming: new i.default(o.extend({}, e.streamingConfiguration, c)),
                                xhr_polling: new i.default(o.extend({}, e.pollingConfiguration, c))
                            };
                        e.__esModule = !0, e.default = l
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(5);

                        function i(t, e, n) {
                            return t + (e.useTLS ? "s" : "") + "://" + (e.useTLS ? e.hostTLS : e.hostNonTLS) + n
                        }

                        function o(t, e) {
                            return "/app/" + t + "?protocol=" + r.default.PROTOCOL + "&client=js&version=" + r.default.VERSION + (e ? "&" + e : "")
                        }
                        e.ws = {
                            getInitial: function(t, e) {
                                return i("ws", e, (e.httpPath || "") + o(t, "flash=false"))
                            }
                        }, e.http = {
                            getInitial: function(t, e) {
                                return i("http", e, (e.httpPath || "/pusher") + o(t))
                            }
                        }, e.sockjs = {
                            getInitial: function(t, e) {
                                return i("http", e, e.httpPath || "/pusher")
                            },
                            getPath: function(t, e) {
                                return o(t)
                            }
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(23),
                            i = function() {
                                function t(t) {
                                    this.hooks = t
                                }
                                return t.prototype.isSupported = function(t) {
                                    return this.hooks.isSupported(t)
                                }, t.prototype.createConnection = function(t, e, n, i) {
                                    return new r.default(this.hooks, t, e, n, i)
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(11),
                            o = n(9),
                            s = n(24),
                            a = n(8),
                            u = n(2),
                            c = function(t) {
                                function e(e, n, r, i, o) {
                                    t.call(this), this.initialize = u.default.transportConnectionInitializer, this.hooks = e, this.name = n, this.priority = r, this.key = i, this.options = o, this.state = "new", this.timeline = o.timeline, this.activityTimeout = o.activityTimeout, this.id = this.timeline.generateUniqueID()
                                }
                                return r(e, t), e.prototype.handlesActivityChecks = function() {
                                    return Boolean(this.hooks.handlesActivityChecks)
                                }, e.prototype.supportsPing = function() {
                                    return Boolean(this.hooks.supportsPing)
                                }, e.prototype.connect = function() {
                                    var t = this;
                                    if (this.socket || "initialized" !== this.state) return !1;
                                    var e = this.hooks.urls.getInitial(this.key, this.options);
                                    try {
                                        this.socket = this.hooks.getSocket(e, this.options)
                                    } catch (e) {
                                        return i.default.defer((function() {
                                            t.onError(e), t.changeState("closed")
                                        })), !1
                                    }
                                    return this.bindListeners(), a.default.debug("Connecting", {
                                        transport: this.name,
                                        url: e
                                    }), this.changeState("connecting"), !0
                                }, e.prototype.close = function() {
                                    return !!this.socket && (this.socket.close(), !0)
                                }, e.prototype.send = function(t) {
                                    var e = this;
                                    return "open" === this.state && (i.default.defer((function() {
                                        e.socket && e.socket.send(t)
                                    })), !0)
                                }, e.prototype.ping = function() {
                                    "open" === this.state && this.supportsPing() && this.socket.ping()
                                }, e.prototype.onOpen = function() {
                                    this.hooks.beforeOpen && this.hooks.beforeOpen(this.socket, this.hooks.urls.getPath(this.key, this.options)), this.changeState("open"), this.socket.onopen = void 0
                                }, e.prototype.onError = function(t) {
                                    this.emit("error", {
                                        type: "WebSocketError",
                                        error: t
                                    }), this.timeline.error(this.buildTimelineMessage({
                                        error: t.toString()
                                    }))
                                }, e.prototype.onClose = function(t) {
                                    t ? this.changeState("closed", {
                                        code: t.code,
                                        reason: t.reason,
                                        wasClean: t.wasClean
                                    }) : this.changeState("closed"), this.unbindListeners(), this.socket = void 0
                                }, e.prototype.onMessage = function(t) {
                                    this.emit("message", t)
                                }, e.prototype.onActivity = function() {
                                    this.emit("activity")
                                }, e.prototype.bindListeners = function() {
                                    var t = this;
                                    this.socket.onopen = function() {
                                        t.onOpen()
                                    }, this.socket.onerror = function(e) {
                                        t.onError(e)
                                    }, this.socket.onclose = function(e) {
                                        t.onClose(e)
                                    }, this.socket.onmessage = function(e) {
                                        t.onMessage(e)
                                    }, this.supportsPing() && (this.socket.onactivity = function() {
                                        t.onActivity()
                                    })
                                }, e.prototype.unbindListeners = function() {
                                    this.socket && (this.socket.onopen = void 0, this.socket.onerror = void 0, this.socket.onclose = void 0, this.socket.onmessage = void 0, this.supportsPing() && (this.socket.onactivity = void 0))
                                }, e.prototype.changeState = function(t, e) {
                                    this.state = t, this.timeline.info(this.buildTimelineMessage({
                                        state: t,
                                        params: e
                                    })), this.emit(t, e)
                                }, e.prototype.buildTimelineMessage = function(t) {
                                    return o.extend({
                                        cid: this.id
                                    }, t)
                                }, e
                            }(s.default);
                        e.__esModule = !0, e.default = c
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(25),
                            o = function() {
                                function t(t) {
                                    this.callbacks = new i.default, this.global_callbacks = [], this.failThrough = t
                                }
                                return t.prototype.bind = function(t, e, n) {
                                    return this.callbacks.add(t, e, n), this
                                }, t.prototype.bind_global = function(t) {
                                    return this.global_callbacks.push(t), this
                                }, t.prototype.unbind = function(t, e, n) {
                                    return this.callbacks.remove(t, e, n), this
                                }, t.prototype.unbind_global = function(t) {
                                    return t ? (this.global_callbacks = r.filter(this.global_callbacks || [], (function(e) {
                                        return e !== t
                                    })), this) : (this.global_callbacks = [], this)
                                }, t.prototype.unbind_all = function() {
                                    return this.unbind(), this.unbind_global(), this
                                }, t.prototype.emit = function(t, e, n) {
                                    for (var r = 0; r < this.global_callbacks.length; r++) this.global_callbacks[r](t, e);
                                    var i = this.callbacks.get(t),
                                        o = [];
                                    if (n ? o.push(e, n) : e && o.push(e), i && i.length > 0)
                                        for (r = 0; r < i.length; r++) i[r].fn.apply(i[r].context || window, o);
                                    else this.failThrough && this.failThrough(t, e);
                                    return this
                                }, t
                            }();
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = function() {
                                function t() {
                                    this._callbacks = {}
                                }
                                return t.prototype.get = function(t) {
                                    return this._callbacks[o(t)]
                                }, t.prototype.add = function(t, e, n) {
                                    var r = o(t);
                                    this._callbacks[r] = this._callbacks[r] || [], this._callbacks[r].push({
                                        fn: e,
                                        context: n
                                    })
                                }, t.prototype.remove = function(t, e, n) {
                                    if (t || e || n) {
                                        var i = t ? [o(t)] : r.keys(this._callbacks);
                                        e || n ? this.removeCallback(i, e, n) : this.removeAllCallbacks(i)
                                    } else this._callbacks = {}
                                }, t.prototype.removeCallback = function(t, e, n) {
                                    r.apply(t, (function(t) {
                                        this._callbacks[t] = r.filter(this._callbacks[t] || [], (function(t) {
                                            return e && e !== t.fn || n && n !== t.context
                                        })), 0 === this._callbacks[t].length && delete this._callbacks[t]
                                    }), this)
                                }, t.prototype.removeAllCallbacks = function(t) {
                                    r.apply(t, (function(t) {
                                        delete this._callbacks[t]
                                    }), this)
                                }, t
                            }();

                        function o(t) {
                            return "_" + t
                        }
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = function(t) {
                                function e() {
                                    t.call(this);
                                    var e = this;
                                    void 0 !== window.addEventListener && (window.addEventListener("online", (function() {
                                        e.emit("online")
                                    }), !1), window.addEventListener("offline", (function() {
                                        e.emit("offline")
                                    }), !1))
                                }
                                return r(e, t), e.prototype.isOnline = function() {
                                    return void 0 === window.navigator.onLine || window.navigator.onLine
                                }, e
                            }(n(24).default);
                        e.NetInfo = i, e.Network = new i
                    }, function(t, e) {
                        "use strict";
                        e.__esModule = !0, e.default = function(t) {
                            var e;
                            return e = t.useTLS ? [":best_connected_ever", ":ws_loop", [":delayed", 2e3, [":http_fallback_loop"]]] : [":best_connected_ever", ":ws_loop", [":delayed", 2e3, [":wss_loop"]],
                                [":delayed", 5e3, [":http_fallback_loop"]]
                            ], [
                                [":def", "ws_options", {
                                    hostNonTLS: t.wsHost + ":" + t.wsPort,
                                    hostTLS: t.wsHost + ":" + t.wssPort,
                                    httpPath: t.wsPath
                                }],
                                [":def", "wss_options", [":extend", ":ws_options", {
                                    useTLS: !0
                                }]],
                                [":def", "sockjs_options", {
                                    hostNonTLS: t.httpHost + ":" + t.httpPort,
                                    hostTLS: t.httpHost + ":" + t.httpsPort,
                                    httpPath: t.httpPath
                                }],
                                [":def", "timeouts", {
                                    loop: !0,
                                    timeout: 15e3,
                                    timeoutLimit: 6e4
                                }],
                                [":def", "ws_manager", [":transport_manager", {
                                    lives: 2,
                                    minPingDelay: 1e4,
                                    maxPingDelay: t.activity_timeout
                                }]],
                                [":def", "streaming_manager", [":transport_manager", {
                                    lives: 2,
                                    minPingDelay: 1e4,
                                    maxPingDelay: t.activity_timeout
                                }]],
                                [":def_transport", "ws", "ws", 3, ":ws_options", ":ws_manager"],
                                [":def_transport", "wss", "ws", 3, ":wss_options", ":ws_manager"],
                                [":def_transport", "sockjs", "sockjs", 1, ":sockjs_options"],
                                [":def_transport", "xhr_streaming", "xhr_streaming", 1, ":sockjs_options", ":streaming_manager"],
                                [":def_transport", "xdr_streaming", "xdr_streaming", 1, ":sockjs_options", ":streaming_manager"],
                                [":def_transport", "xhr_polling", "xhr_polling", 1, ":sockjs_options"],
                                [":def_transport", "xdr_polling", "xdr_polling", 1, ":sockjs_options"],
                                [":def", "ws_loop", [":sequential", ":timeouts", ":ws"]],
                                [":def", "wss_loop", [":sequential", ":timeouts", ":wss"]],
                                [":def", "sockjs_loop", [":sequential", ":timeouts", ":sockjs"]],
                                [":def", "streaming_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_streaming"], ":xhr_streaming", ":xdr_streaming"]]],
                                [":def", "polling_loop", [":sequential", ":timeouts", [":if", [":is_supported", ":xhr_polling"], ":xhr_polling", ":xdr_polling"]]],
                                [":def", "http_loop", [":if", [":is_supported", ":streaming_loop"],
                                    [":best_connected_ever", ":streaming_loop", [":delayed", 4e3, [":polling_loop"]]],
                                    [":polling_loop"]
                                ]],
                                [":def", "http_fallback_loop", [":if", [":is_supported", ":http_loop"],
                                    [":http_loop"],
                                    [":sockjs_loop"]
                                ]],
                                [":def", "strategy", [":cached", 18e5, [":first_connected", [":if", [":is_supported", ":ws"], e, ":http_fallback_loop"]]]]
                            ]
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(3);
                        e.__esModule = !0, e.default = function() {
                            var t = this;
                            t.timeline.info(t.buildTimelineMessage({
                                transport: t.name + (t.options.useTLS ? "s" : "")
                            })), t.hooks.isInitialized() ? t.changeState("initialized") : t.hooks.file ? (t.changeState("initializing"), r.Dependencies.load(t.hooks.file, {
                                useTLS: t.options.useTLS
                            }, (function(e, n) {
                                t.hooks.isInitialized() ? (t.changeState("initialized"), n(!0)) : (e && t.onError(e), t.onClose(), n(!1))
                            }))) : t.onClose()
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(30),
                            i = n(32);
                        i.default.createXDR = function(t, e) {
                            return this.createRequest(r.default, t, e)
                        }, e.__esModule = !0, e.default = i.default
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(31),
                            i = {
                                getRequest: function(t) {
                                    var e = new window.XDomainRequest;
                                    return e.ontimeout = function() {
                                        t.emit("error", new r.RequestTimedOut), t.close()
                                    }, e.onerror = function(e) {
                                        t.emit("error", e), t.close()
                                    }, e.onprogress = function() {
                                        e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText)
                                    }, e.onload = function() {
                                        e.responseText && e.responseText.length > 0 && t.onChunk(200, e.responseText), t.emit("finished", 200), t.close()
                                    }, e
                                },
                                abortRequest: function(t) {
                                    t.ontimeout = t.onerror = t.onprogress = t.onload = null, t.abort()
                                }
                            };
                        e.__esModule = !0, e.default = i
                    }, function(t, e) {
                        "use strict";
                        var n = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            r = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return n(e, t), e
                            }(Error);
                        e.BadEventName = r;
                        var i = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.RequestTimedOut = i;
                        var o = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.TransportPriorityTooLow = o;
                        var s = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.TransportClosed = s;
                        var a = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.UnsupportedFeature = a;
                        var u = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.UnsupportedTransport = u;
                        var c = function(t) {
                            function e() {
                                t.apply(this, arguments)
                            }
                            return n(e, t), e
                        }(Error);
                        e.UnsupportedStrategy = c
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(33),
                            i = n(34),
                            o = n(36),
                            s = n(37),
                            a = n(38),
                            u = {
                                createStreamingSocket: function(t) {
                                    return this.createSocket(o.default, t)
                                },
                                createPollingSocket: function(t) {
                                    return this.createSocket(s.default, t)
                                },
                                createSocket: function(t, e) {
                                    return new i.default(t, e)
                                },
                                createXHR: function(t, e) {
                                    return this.createRequest(a.default, t, e)
                                },
                                createRequest: function(t, e, n) {
                                    return new r.default(t, e, n)
                                }
                            };
                        e.__esModule = !0, e.default = u
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(2),
                            o = n(24),
                            s = function(t) {
                                function e(e, n, r) {
                                    t.call(this), this.hooks = e, this.method = n, this.url = r
                                }
                                return r(e, t), e.prototype.start = function(t) {
                                    var e = this;
                                    this.position = 0, this.xhr = this.hooks.getRequest(this), this.unloader = function() {
                                        e.close()
                                    }, i.default.addUnloadListener(this.unloader), this.xhr.open(this.method, this.url, !0), this.xhr.setRequestHeader && this.xhr.setRequestHeader("Content-Type", "application/json"), this.xhr.send(t)
                                }, e.prototype.close = function() {
                                    this.unloader && (i.default.removeUnloadListener(this.unloader), this.unloader = null), this.xhr && (this.hooks.abortRequest(this.xhr), this.xhr = null)
                                }, e.prototype.onChunk = function(t, e) {
                                    for (;;) {
                                        var n = this.advanceBuffer(e);
                                        if (!n) break;
                                        this.emit("chunk", {
                                            status: t,
                                            data: n
                                        })
                                    }
                                    this.isBufferTooLong(e) && this.emit("buffer_too_long")
                                }, e.prototype.advanceBuffer = function(t) {
                                    var e = t.slice(this.position),
                                        n = e.indexOf("\n");
                                    return -1 !== n ? (this.position += n + 1, e.slice(0, n)) : null
                                }, e.prototype.isBufferTooLong = function(t) {
                                    return this.position === t.length && t.length > 262144
                                }, e
                            }(o.default);
                        e.__esModule = !0, e.default = s
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(35),
                            i = n(11),
                            o = n(2),
                            s = 1,
                            a = function() {
                                function t(t, e) {
                                    this.hooks = t, this.session = c(1e3) + "/" + function(t) {
                                        for (var e = [], n = 0; n < t; n++) e.push(c(32).toString(32));
                                        return e.join("")
                                    }(8), this.location = function(t) {
                                        var e = /([^\?]*)\/*(\??.*)/.exec(t);
                                        return {
                                            base: e[1],
                                            queryString: e[2]
                                        }
                                    }(e), this.readyState = r.default.CONNECTING, this.openStream()
                                }
                                return t.prototype.send = function(t) {
                                    return this.sendRaw(JSON.stringify([t]))
                                }, t.prototype.ping = function() {
                                    this.hooks.sendHeartbeat(this)
                                }, t.prototype.close = function(t, e) {
                                    this.onClose(t, e, !0)
                                }, t.prototype.sendRaw = function(t) {
                                    if (this.readyState !== r.default.OPEN) return !1;
                                    try {
                                        return o.default.createSocketRequest("POST", u((e = this.location, n = this.session, e.base + "/" + n + "/xhr_send"))).start(t), !0
                                    } catch (t) {
                                        return !1
                                    }
                                    var e, n
                                }, t.prototype.reconnect = function() {
                                    this.closeStream(), this.openStream()
                                }, t.prototype.onClose = function(t, e, n) {
                                    this.closeStream(), this.readyState = r.default.CLOSED, this.onclose && this.onclose({
                                        code: t,
                                        reason: e,
                                        wasClean: n
                                    })
                                }, t.prototype.onChunk = function(t) {
                                    var e;
                                    if (200 === t.status) switch (this.readyState === r.default.OPEN && this.onActivity(), t.data.slice(0, 1)) {
                                        case "o":
                                            e = JSON.parse(t.data.slice(1) || "{}"), this.onOpen(e);
                                            break;
                                        case "a":
                                            e = JSON.parse(t.data.slice(1) || "[]");
                                            for (var n = 0; n < e.length; n++) this.onEvent(e[n]);
                                            break;
                                        case "m":
                                            e = JSON.parse(t.data.slice(1) || "null"), this.onEvent(e);
                                            break;
                                        case "h":
                                            this.hooks.onHeartbeat(this);
                                            break;
                                        case "c":
                                            e = JSON.parse(t.data.slice(1) || "[]"), this.onClose(e[0], e[1], !0)
                                    }
                                }, t.prototype.onOpen = function(t) {
                                    var e, n, i;
                                    this.readyState === r.default.CONNECTING ? (t && t.hostname && (this.location.base = (e = this.location.base, n = t.hostname, (i = /(https?:\/\/)([^\/:]+)((\/|:)?.*)/.exec(e))[1] + n + i[3])), this.readyState = r.default.OPEN, this.onopen && this.onopen()) : this.onClose(1006, "Server lost session", !0)
                                }, t.prototype.onEvent = function(t) {
                                    this.readyState === r.default.OPEN && this.onmessage && this.onmessage({
                                        data: t
                                    })
                                }, t.prototype.onActivity = function() {
                                    this.onactivity && this.onactivity()
                                }, t.prototype.onError = function(t) {
                                    this.onerror && this.onerror(t)
                                }, t.prototype.openStream = function() {
                                    var t = this;
                                    this.stream = o.default.createSocketRequest("POST", u(this.hooks.getReceiveURL(this.location, this.session))), this.stream.bind("chunk", (function(e) {
                                        t.onChunk(e)
                                    })), this.stream.bind("finished", (function(e) {
                                        t.hooks.onFinished(t, e)
                                    })), this.stream.bind("buffer_too_long", (function() {
                                        t.reconnect()
                                    }));
                                    try {
                                        this.stream.start()
                                    } catch (e) {
                                        i.default.defer((function() {
                                            t.onError(e), t.onClose(1006, "Could not start streaming", !1)
                                        }))
                                    }
                                }, t.prototype.closeStream = function() {
                                    this.stream && (this.stream.unbind_all(), this.stream.close(), this.stream = null)
                                }, t
                            }();

                        function u(t) {
                            var e = -1 === t.indexOf("?") ? "?" : "&";
                            return t + e + "t=" + +new Date + "&n=" + s++
                        }

                        function c(t) {
                            return Math.floor(Math.random() * t)
                        }
                        e.__esModule = !0, e.default = a
                    }, function(t, e) {
                        "use strict";
                        var n;
                        ! function(t) {
                            t[t.CONNECTING = 0] = "CONNECTING", t[t.OPEN = 1] = "OPEN", t[t.CLOSED = 3] = "CLOSED"
                        }(n || (n = {})), e.__esModule = !0, e.default = n
                    }, function(t, e) {
                        "use strict";
                        e.__esModule = !0, e.default = {
                            getReceiveURL: function(t, e) {
                                return t.base + "/" + e + "/xhr_streaming" + t.queryString
                            },
                            onHeartbeat: function(t) {
                                t.sendRaw("[]")
                            },
                            sendHeartbeat: function(t) {
                                t.sendRaw("[]")
                            },
                            onFinished: function(t, e) {
                                t.onClose(1006, "Connection interrupted (" + e + ")", !1)
                            }
                        }
                    }, function(t, e) {
                        "use strict";
                        e.__esModule = !0, e.default = {
                            getReceiveURL: function(t, e) {
                                return t.base + "/" + e + "/xhr" + t.queryString
                            },
                            onHeartbeat: function() {},
                            sendHeartbeat: function(t) {
                                t.sendRaw("[]")
                            },
                            onFinished: function(t, e) {
                                200 === e ? t.reconnect() : t.onClose(1006, "Connection interrupted (" + e + ")", !1)
                            }
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(2),
                            i = {
                                getRequest: function(t) {
                                    var e = new(r.default.getXHRAPI());
                                    return e.onreadystatechange = e.onprogress = function() {
                                        switch (e.readyState) {
                                            case 3:
                                                e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText);
                                                break;
                                            case 4:
                                                e.responseText && e.responseText.length > 0 && t.onChunk(e.status, e.responseText), t.emit("finished", e.status), t.close()
                                        }
                                    }, e
                                },
                                abortRequest: function(t) {
                                    t.onreadystatechange = null, t.abort()
                                }
                            };
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(11),
                            o = n(40),
                            s = function() {
                                function t(t, e, n) {
                                    this.key = t, this.session = e, this.events = [], this.options = n || {}, this.sent = 0, this.uniqueID = 0
                                }
                                return t.prototype.log = function(t, e) {
                                    t <= this.options.level && (this.events.push(r.extend({}, e, {
                                        timestamp: i.default.now()
                                    })), this.options.limit && this.events.length > this.options.limit && this.events.shift())
                                }, t.prototype.error = function(t) {
                                    this.log(o.default.ERROR, t)
                                }, t.prototype.info = function(t) {
                                    this.log(o.default.INFO, t)
                                }, t.prototype.debug = function(t) {
                                    this.log(o.default.DEBUG, t)
                                }, t.prototype.isEmpty = function() {
                                    return 0 === this.events.length
                                }, t.prototype.send = function(t, e) {
                                    var n = this,
                                        i = r.extend({
                                            session: this.session,
                                            bundle: this.sent + 1,
                                            key: this.key,
                                            lib: "js",
                                            version: this.options.version,
                                            cluster: this.options.cluster,
                                            features: this.options.features,
                                            timeline: this.events
                                        }, this.options.params);
                                    return this.events = [], t(i, (function(t, r) {
                                        t || n.sent++, e && e(t, r)
                                    })), !0
                                }, t.prototype.generateUniqueID = function() {
                                    return this.uniqueID++, this.uniqueID
                                }, t
                            }();
                        e.__esModule = !0, e.default = s
                    }, function(t, e) {
                        "use strict";
                        var n;
                        ! function(t) {
                            t[t.ERROR = 3] = "ERROR", t[t.INFO = 6] = "INFO", t[t.DEBUG = 7] = "DEBUG"
                        }(n || (n = {})), e.__esModule = !0, e.default = n
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(11),
                            o = n(42),
                            s = n(31),
                            a = n(64),
                            u = n(65),
                            c = n(66),
                            l = n(67),
                            f = n(68),
                            h = n(69),
                            d = n(70),
                            p = n(2).default.Transports;
                        e.build = function(t, e) {
                            return x(t, r.extend({}, v, e))[1].strategy
                        };
                        var g = {
                            isSupported: function() {
                                return !1
                            },
                            connect: function(t, e) {
                                var n = i.default.defer((function() {
                                    e(new s.UnsupportedStrategy)
                                }));
                                return {
                                    abort: function() {
                                        n.ensureAborted()
                                    },
                                    forceMinPriority: function() {}
                                }
                            }
                        };

                        function y(t) {
                            return function(e) {
                                return [t.apply(this, arguments), e]
                            }
                        }
                        var v = {
                            extend: function(t, e, n) {
                                return [r.extend({}, e, n), t]
                            },
                            def: function(t, e, n) {
                                if (void 0 !== t[e]) throw "Redefining symbol " + e;
                                return t[e] = n, [void 0, t]
                            },
                            def_transport: function(t, e, n, i, o, u) {
                                var c, l = p[n];
                                if (!l) throw new s.UnsupportedTransport(n);
                                c = t.enabledTransports && -1 === r.arrayIndexOf(t.enabledTransports, e) || t.disabledTransports && -1 !== r.arrayIndexOf(t.disabledTransports, e) ? g : new a.default(e, i, u ? u.getAssistant(l) : l, r.extend({
                                    key: t.key,
                                    useTLS: t.useTLS,
                                    timeline: t.timeline,
                                    ignoreNullOrigin: t.ignoreNullOrigin
                                }, o));
                                var f = t.def(t, e, c)[1];
                                return f.Transports = t.Transports || {}, f.Transports[e] = c, [void 0, f]
                            },
                            transport_manager: y((function(t, e) {
                                return new o.default(e)
                            })),
                            sequential: y((function(t, e) {
                                var n = Array.prototype.slice.call(arguments, 2);
                                return new u.default(n, e)
                            })),
                            cached: y((function(t, e, n) {
                                return new l.default(n, t.Transports, {
                                    ttl: e,
                                    timeline: t.timeline,
                                    useTLS: t.useTLS
                                })
                            })),
                            first_connected: y((function(t, e) {
                                return new d.default(e)
                            })),
                            best_connected_ever: y((function() {
                                var t = Array.prototype.slice.call(arguments, 1);
                                return new c.default(t)
                            })),
                            delayed: y((function(t, e, n) {
                                return new f.default(n, {
                                    delay: e
                                })
                            })),
                            if: y((function(t, e, n, r) {
                                return new h.default(e, n, r)
                            })),
                            is_supported: y((function(t, e) {
                                return function() {
                                    return e.isSupported()
                                }
                            }))
                        };

                        function m(t) {
                            return "string" == typeof t && ":" === t.charAt(0)
                        }

                        function b(t, e) {
                            return e[t.slice(1)]
                        }

                        function w(t, e) {
                            if (0 === t.length) return [
                                [], e
                            ];
                            var n = x(t[0], e),
                                r = w(t.slice(1), n[1]);
                            return [
                                [n[0]].concat(r[0]), r[1]
                            ]
                        }

                        function _(t, e) {
                            if (m(t[0])) {
                                var n = b(t[0], e);
                                if (t.length > 1) {
                                    if ("function" != typeof n) throw "Calling non-function " + t[0];
                                    var i = [r.extend({}, e)].concat(r.map(t.slice(1), (function(t) {
                                        return x(t, r.extend({}, e))[0]
                                    })));
                                    return n.apply(this, i)
                                }
                                return [n, e]
                            }
                            return w(t, e)
                        }

                        function x(t, e) {
                            return "string" == typeof t ? function(t, e) {
                                if (!m(t)) return [t, e];
                                var n = b(t, e);
                                if (void 0 === n) throw "Undefined symbol " + t;
                                return [n, e]
                            }(t, e) : "object" == typeof t && t instanceof Array && t.length > 0 ? _(t, e) : [t, e]
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(43),
                            i = function() {
                                function t(t) {
                                    this.options = t || {}, this.livesLeft = this.options.lives || 1 / 0
                                }
                                return t.prototype.getAssistant = function(t) {
                                    return r.default.createAssistantToTheTransportManager(this, t, {
                                        minPingDelay: this.options.minPingDelay,
                                        maxPingDelay: this.options.maxPingDelay
                                    })
                                }, t.prototype.isAlive = function() {
                                    return this.livesLeft > 0
                                }, t.prototype.reportDeath = function() {
                                    this.livesLeft -= 1
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(44),
                            i = n(45),
                            o = n(48),
                            s = n(49),
                            a = n(50),
                            u = n(51),
                            c = n(54),
                            l = n(52),
                            f = n(62),
                            h = n(63),
                            d = {
                                createChannels: function() {
                                    return new h.default
                                },
                                createConnectionManager: function(t, e) {
                                    return new f.default(t, e)
                                },
                                createChannel: function(t, e) {
                                    return new l.default(t, e)
                                },
                                createPrivateChannel: function(t, e) {
                                    return new u.default(t, e)
                                },
                                createPresenceChannel: function(t, e) {
                                    return new a.default(t, e)
                                },
                                createEncryptedChannel: function(t, e) {
                                    return new c.default(t, e)
                                },
                                createTimelineSender: function(t, e) {
                                    return new s.default(t, e)
                                },
                                createAuthorizer: function(t, e) {
                                    return e.authorizer ? e.authorizer(t, e) : new o.default(t, e)
                                },
                                createHandshake: function(t, e) {
                                    return new i.default(t, e)
                                },
                                createAssistantToTheTransportManager: function(t, e, n) {
                                    return new r.default(t, e, n)
                                }
                            };
                        e.__esModule = !0, e.default = d
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(11),
                            i = n(9),
                            o = function() {
                                function t(t, e, n) {
                                    this.manager = t, this.transport = e, this.minPingDelay = n.minPingDelay, this.maxPingDelay = n.maxPingDelay, this.pingDelay = void 0
                                }
                                return t.prototype.createConnection = function(t, e, n, o) {
                                    var s = this;
                                    o = i.extend({}, o, {
                                        activityTimeout: this.pingDelay
                                    });
                                    var a = this.transport.createConnection(t, e, n, o),
                                        u = null,
                                        c = function() {
                                            a.unbind("open", c), a.bind("closed", l), u = r.default.now()
                                        },
                                        l = function(t) {
                                            if (a.unbind("closed", l), 1002 === t.code || 1003 === t.code) s.manager.reportDeath();
                                            else if (!t.wasClean && u) {
                                                var e = r.default.now() - u;
                                                e < 2 * s.maxPingDelay && (s.manager.reportDeath(), s.pingDelay = Math.max(e / 2, s.minPingDelay))
                                            }
                                        };
                                    return a.bind("open", c), a
                                }, t.prototype.isSupported = function(t) {
                                    return this.manager.isAlive() && this.transport.isSupported(t)
                                }, t
                            }();
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(46),
                            o = n(47),
                            s = function() {
                                function t(t, e) {
                                    this.transport = t, this.callback = e, this.bindListeners()
                                }
                                return t.prototype.close = function() {
                                    this.unbindListeners(), this.transport.close()
                                }, t.prototype.bindListeners = function() {
                                    var t = this;
                                    this.onMessage = function(e) {
                                        var n;
                                        t.unbindListeners();
                                        try {
                                            n = i.processHandshake(e)
                                        } catch (e) {
                                            return t.finish("error", {
                                                error: e
                                            }), void t.transport.close()
                                        }
                                        "connected" === n.action ? t.finish("connected", {
                                            connection: new o.default(n.id, t.transport),
                                            activityTimeout: n.activityTimeout
                                        }) : (t.finish(n.action, {
                                            error: n.error
                                        }), t.transport.close())
                                    }, this.onClosed = function(e) {
                                        t.unbindListeners();
                                        var n = i.getCloseAction(e) || "backoff",
                                            r = i.getCloseError(e);
                                        t.finish(n, {
                                            error: r
                                        })
                                    }, this.transport.bind("message", this.onMessage), this.transport.bind("closed", this.onClosed)
                                }, t.prototype.unbindListeners = function() {
                                    this.transport.unbind("message", this.onMessage), this.transport.unbind("closed", this.onClosed)
                                }, t.prototype.finish = function(t, e) {
                                    this.callback(r.extend({
                                        transport: this.transport,
                                        action: t
                                    }, e))
                                }, t
                            }();
                        e.__esModule = !0, e.default = s
                    }, function(t, e) {
                        "use strict";
                        e.decodeMessage = function(t) {
                            try {
                                var e = JSON.parse(t.data),
                                    n = e.data;
                                if ("string" == typeof n) try {
                                    n = JSON.parse(e.data)
                                } catch (t) {}
                                var r = {
                                    event: e.event,
                                    channel: e.channel,
                                    data: n
                                };
                                return e.user_id && (r.user_id = e.user_id), r
                            } catch (e) {
                                throw {
                                    type: "MessageParseError",
                                    error: e,
                                    data: t.data
                                }
                            }
                        }, e.encodeMessage = function(t) {
                            return JSON.stringify(t)
                        }, e.processHandshake = function(t) {
                            var n = e.decodeMessage(t);
                            if ("pusher:connection_established" === n.event) {
                                if (!n.data.activity_timeout) throw "No activity timeout specified in handshake";
                                return {
                                    action: "connected",
                                    id: n.data.socket_id,
                                    activityTimeout: 1e3 * n.data.activity_timeout
                                }
                            }
                            if ("pusher:error" === n.event) return {
                                action: this.getCloseAction(n.data),
                                error: this.getCloseError(n.data)
                            };
                            throw "Invalid handshake"
                        }, e.getCloseAction = function(t) {
                            return t.code < 4e3 ? t.code >= 1002 && t.code <= 1004 ? "backoff" : null : 4e3 === t.code ? "tls_only" : t.code < 4100 ? "refused" : t.code < 4200 ? "backoff" : t.code < 4300 ? "retry" : "refused"
                        }, e.getCloseError = function(t) {
                            return 1e3 !== t.code && 1001 !== t.code ? {
                                type: "PusherError",
                                data: {
                                    code: t.code,
                                    message: t.reason || t.message
                                }
                            } : null
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(9),
                            o = n(24),
                            s = n(46),
                            a = n(8),
                            u = function(t) {
                                function e(e, n) {
                                    t.call(this), this.id = e, this.transport = n, this.activityTimeout = n.activityTimeout, this.bindListeners()
                                }
                                return r(e, t), e.prototype.handlesActivityChecks = function() {
                                    return this.transport.handlesActivityChecks()
                                }, e.prototype.send = function(t) {
                                    return this.transport.send(t)
                                }, e.prototype.send_event = function(t, e, n) {
                                    var r = {
                                        event: t,
                                        data: e
                                    };
                                    return n && (r.channel = n), a.default.debug("Event sent", r), this.send(s.encodeMessage(r))
                                }, e.prototype.ping = function() {
                                    this.transport.supportsPing() ? this.transport.ping() : this.send_event("pusher:ping", {})
                                }, e.prototype.close = function() {
                                    this.transport.close()
                                }, e.prototype.bindListeners = function() {
                                    var t = this,
                                        e = {
                                            message: function(e) {
                                                var n;
                                                try {
                                                    n = s.decodeMessage(e)
                                                } catch (n) {
                                                    t.emit("error", {
                                                        type: "MessageParseError",
                                                        error: n,
                                                        data: e.data
                                                    })
                                                }
                                                if (void 0 !== n) {
                                                    switch (a.default.debug("Event recd", n), n.event) {
                                                        case "pusher:error":
                                                            t.emit("error", {
                                                                type: "PusherError",
                                                                data: n.data
                                                            });
                                                            break;
                                                        case "pusher:ping":
                                                            t.emit("ping");
                                                            break;
                                                        case "pusher:pong":
                                                            t.emit("pong")
                                                    }
                                                    t.emit("message", n)
                                                }
                                            },
                                            activity: function() {
                                                t.emit("activity")
                                            },
                                            error: function(e) {
                                                t.emit("error", {
                                                    type: "WebSocketError",
                                                    error: e
                                                })
                                            },
                                            closed: function(e) {
                                                n(), e && e.code && t.handleCloseEvent(e), t.transport = null, t.emit("closed")
                                            }
                                        },
                                        n = function() {
                                            i.objectApply(e, (function(e, n) {
                                                t.transport.unbind(n, e)
                                            }))
                                        };
                                    i.objectApply(e, (function(e, n) {
                                        t.transport.bind(n, e)
                                    }))
                                }, e.prototype.handleCloseEvent = function(t) {
                                    var e = s.getCloseAction(t),
                                        n = s.getCloseError(t);
                                    n && this.emit("error", n), e && this.emit(e, {
                                        action: e,
                                        error: n
                                    })
                                }, e
                            }(o.default);
                        e.__esModule = !0, e.default = u
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(2),
                            i = function() {
                                function t(t, e) {
                                    this.channel = t;
                                    var n = e.authTransport;
                                    if (void 0 === r.default.getAuthorizers()[n]) throw "'" + n + "' is not a recognized auth transport";
                                    this.type = n, this.options = e, this.authOptions = (e || {}).auth || {}
                                }
                                return t.prototype.composeQuery = function(t) {
                                    var e = "socket_id=" + encodeURIComponent(t) + "&channel_name=" + encodeURIComponent(this.channel.name);
                                    for (var n in this.authOptions.params) e += "&" + encodeURIComponent(n) + "=" + encodeURIComponent(this.authOptions.params[n]);
                                    return e
                                }, t.prototype.authorize = function(e, n) {
                                    return t.authorizers = t.authorizers || r.default.getAuthorizers(), t.authorizers[this.type].call(this, r.default, e, n)
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(2),
                            i = function() {
                                function t(t, e) {
                                    this.timeline = t, this.options = e || {}
                                }
                                return t.prototype.send = function(t, e) {
                                    this.timeline.isEmpty() || this.timeline.send(r.default.TimelineTransport.getAgent(this, t), e)
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(51),
                            o = n(8),
                            s = n(53),
                            a = n(14),
                            u = function(t) {
                                function e(e, n) {
                                    t.call(this, e, n), this.members = new s.default
                                }
                                return r(e, t), e.prototype.authorize = function(e, n) {
                                    var r = this;
                                    t.prototype.authorize.call(this, e, (function(t, e) {
                                        if (!t) {
                                            if (void 0 === e.channel_data) {
                                                var i = a.default.buildLogSuffix("authenticationEndpoint");
                                                return o.default.warn("Invalid auth response for channel '" + r.name + "',expected 'channel_data' field. " + i), void n("Invalid auth response")
                                            }
                                            var s = JSON.parse(e.channel_data);
                                            r.members.setMyID(s.user_id)
                                        }
                                        n(t, e)
                                    }))
                                }, e.prototype.handleEvent = function(t) {
                                    var e = t.event;
                                    if (0 === e.indexOf("pusher_internal:")) this.handleInternalEvent(t);
                                    else {
                                        var n = t.data,
                                            r = {};
                                        t.user_id && (r.user_id = t.user_id), this.emit(e, n, r)
                                    }
                                }, e.prototype.handleInternalEvent = function(t) {
                                    var e = t.event,
                                        n = t.data;
                                    switch (e) {
                                        case "pusher_internal:subscription_succeeded":
                                            this.handleSubscriptionSucceededEvent(t);
                                            break;
                                        case "pusher_internal:member_added":
                                            var r = this.members.addMember(n);
                                            this.emit("pusher:member_added", r);
                                            break;
                                        case "pusher_internal:member_removed":
                                            var i = this.members.removeMember(n);
                                            i && this.emit("pusher:member_removed", i)
                                    }
                                }, e.prototype.handleSubscriptionSucceededEvent = function(t) {
                                    this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : (this.members.onSubscription(t.data), this.emit("pusher:subscription_succeeded", this.members))
                                }, e.prototype.disconnect = function() {
                                    this.members.reset(), t.prototype.disconnect.call(this)
                                }, e
                            }(i.default);
                        e.__esModule = !0, e.default = u
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(43),
                            o = function(t) {
                                function e() {
                                    t.apply(this, arguments)
                                }
                                return r(e, t), e.prototype.authorize = function(t, e) {
                                    return i.default.createAuthorizer(this, this.pusher.config).authorize(t, e)
                                }, e
                            }(n(52).default);
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(24),
                            o = n(31),
                            s = n(8),
                            a = n(14),
                            u = function(t) {
                                function e(e, n) {
                                    t.call(this, (function(t, n) {
                                        s.default.debug("No callbacks on " + e + " for " + t)
                                    })), this.name = e, this.pusher = n, this.subscribed = !1, this.subscriptionPending = !1, this.subscriptionCancelled = !1
                                }
                                return r(e, t), e.prototype.authorize = function(t, e) {
                                    return e(!1, {})
                                }, e.prototype.trigger = function(t, e) {
                                    if (0 !== t.indexOf("client-")) throw new o.BadEventName("Event '" + t + "' does not start with 'client-'");
                                    if (!this.subscribed) {
                                        var n = a.default.buildLogSuffix("triggeringClientEvents");
                                        s.default.warn("Client event triggered before channel 'subscription_succeeded' event . " + n)
                                    }
                                    return this.pusher.send_event(t, e, this.name)
                                }, e.prototype.disconnect = function() {
                                    this.subscribed = !1, this.subscriptionPending = !1
                                }, e.prototype.handleEvent = function(t) {
                                    var e = t.event,
                                        n = t.data;
                                    "pusher_internal:subscription_succeeded" === e ? this.handleSubscriptionSucceededEvent(t) : 0 !== e.indexOf("pusher_internal:") && this.emit(e, n, {})
                                }, e.prototype.handleSubscriptionSucceededEvent = function(t) {
                                    this.subscriptionPending = !1, this.subscribed = !0, this.subscriptionCancelled ? this.pusher.unsubscribe(this.name) : this.emit("pusher:subscription_succeeded", t.data)
                                }, e.prototype.subscribe = function() {
                                    var t = this;
                                    this.subscribed || (this.subscriptionPending = !0, this.subscriptionCancelled = !1, this.authorize(this.pusher.connection.socket_id, (function(e, n) {
                                        e ? t.emit("pusher:subscription_error", n) : t.pusher.send_event("pusher:subscribe", {
                                            auth: n.auth,
                                            channel_data: n.channel_data,
                                            channel: t.name
                                        })
                                    })))
                                }, e.prototype.unsubscribe = function() {
                                    this.subscribed = !1, this.pusher.send_event("pusher:unsubscribe", {
                                        channel: this.name
                                    })
                                }, e.prototype.cancelSubscription = function() {
                                    this.subscriptionCancelled = !0
                                }, e.prototype.reinstateSubscription = function() {
                                    this.subscriptionCancelled = !1
                                }, e
                            }(i.default);
                        e.__esModule = !0, e.default = u
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = function() {
                                function t() {
                                    this.reset()
                                }
                                return t.prototype.get = function(t) {
                                    return Object.prototype.hasOwnProperty.call(this.members, t) ? {
                                        id: t,
                                        info: this.members[t]
                                    } : null
                                }, t.prototype.each = function(t) {
                                    var e = this;
                                    r.objectApply(this.members, (function(n, r) {
                                        t(e.get(r))
                                    }))
                                }, t.prototype.setMyID = function(t) {
                                    this.myID = t
                                }, t.prototype.onSubscription = function(t) {
                                    this.members = t.presence.hash, this.count = t.presence.count, this.me = this.get(this.myID)
                                }, t.prototype.addMember = function(t) {
                                    return null === this.get(t.user_id) && this.count++, this.members[t.user_id] = t.user_info, this.get(t.user_id)
                                }, t.prototype.removeMember = function(t) {
                                    var e = this.get(t.user_id);
                                    return e && (delete this.members[t.user_id], this.count--), e
                                }, t.prototype.reset = function() {
                                    this.members = {}, this.count = 0, this.myID = null, this.me = null
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(51),
                            o = n(31),
                            s = n(8),
                            a = n(55),
                            u = n(57),
                            c = function(t) {
                                function e() {
                                    t.apply(this, arguments), this.key = null
                                }
                                return r(e, t), e.prototype.authorize = function(e, n) {
                                    var r = this;
                                    t.prototype.authorize.call(this, e, (function(t, e) {
                                        if (t) n(!0, e);
                                        else {
                                            var i = e.shared_secret;
                                            if (!i) {
                                                var o = "No shared_secret key in auth payload for encrypted channel: " + r.name;
                                                return n(!0, o), void s.default.warn("Error: " + o)
                                            }
                                            r.key = u.decodeBase64(i), delete e.shared_secret, n(!1, e)
                                        }
                                    }))
                                }, e.prototype.trigger = function(t, e) {
                                    throw new o.UnsupportedFeature("Client events are not currently supported for encrypted channels")
                                }, e.prototype.handleEvent = function(e) {
                                    var n = e.event,
                                        r = e.data;
                                    0 !== n.indexOf("pusher_internal:") && 0 !== n.indexOf("pusher:") ? this.handleEncryptedEvent(n, r) : t.prototype.handleEvent.call(this, e)
                                }, e.prototype.handleEncryptedEvent = function(t, e) {
                                    var n = this;
                                    if (this.key)
                                        if (e.ciphertext && e.nonce) {
                                            var r = u.decodeBase64(e.ciphertext);
                                            if (r.length < a.secretbox.overheadLength) s.default.warn("Expected encrypted event ciphertext length to be " + a.secretbox.overheadLength + ", got: " + r.length);
                                            else {
                                                var i = u.decodeBase64(e.nonce);
                                                if (i.length < a.secretbox.nonceLength) s.default.warn("Expected encrypted event nonce length to be " + a.secretbox.nonceLength + ", got: " + i.length);
                                                else {
                                                    var o = a.secretbox.open(r, i, this.key);
                                                    if (null === o) return s.default.debug("Failed to decrypted an event, probably because it was encrypted with a different key. Fetching a new key from the authEndpoint..."), void this.authorize(this.pusher.connection.socket_id, (function(e, c) {
                                                        e ? s.default.warn("Failed to make a request to the authEndpoint: " + c + ". Unable to fetch new key, so dropping encrypted event") : null !== (o = a.secretbox.open(r, i, n.key)) ? n.emitJSON(t, u.encodeUTF8(o)) : s.default.warn("Failed to decrypt event with new key. Dropping encrypted event")
                                                    }));
                                                    this.emitJSON(t, u.encodeUTF8(o))
                                                }
                                            }
                                        } else s.default.warn("Unexpected format for encrypted event, expected object with `ciphertext` and `nonce` fields, got: " + e);
                                    else s.default.debug("Received encrypted event before key has been retrieved from the authEndpoint")
                                }, e.prototype.emitJSON = function(t, e) {
                                    try {
                                        this.emit(t, JSON.parse(e))
                                    } catch (n) {
                                        this.emit(t, e)
                                    }
                                    return this
                                }, e
                            }(i.default);
                        e.__esModule = !0, e.default = c
                    }, function(t, e, n) {
                        ! function(t) {
                            "use strict";
                            var e = function(t) {
                                    var e, n = new Float64Array(16);
                                    if (t)
                                        for (e = 0; e < t.length; e++) n[e] = t[e];
                                    return n
                                },
                                r = function() {
                                    throw new Error("no PRNG")
                                },
                                i = new Uint8Array(16),
                                o = new Uint8Array(32);
                            o[0] = 9;
                            var s = e(),
                                a = e([1]),
                                u = e([56129, 1]),
                                c = e([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]),
                                l = e([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222]),
                                f = e([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                                h = e([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]),
                                d = e([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

                            function p(t, e, n, r) {
                                t[e] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n, t[e + 4] = r >> 24 & 255, t[e + 5] = r >> 16 & 255, t[e + 6] = r >> 8 & 255, t[e + 7] = 255 & r
                            }

                            function g(t, e, n, r, i) {
                                var o, s = 0;
                                for (o = 0; o < i; o++) s |= t[e + o] ^ n[r + o];
                                return (1 & s - 1 >>> 8) - 1
                            }

                            function y(t, e, n, r) {
                                return g(t, e, n, r, 16)
                            }

                            function v(t, e, n, r) {
                                return g(t, e, n, r, 32)
                            }

                            function m(t, e, n, r) {
                                ! function(t, e, n, r) {
                                    for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, d = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, y = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, v = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, m = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, b = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, _ = o, x = s, k = a, S = u, E = c, T = l, C = f, A = h, O = d, N = p, L = g, R = y, P = v, j = m, M = b, D = w, B = 0; B < 20; B += 2) _ ^= (i = (P ^= (i = (O ^= (i = (E ^= (i = _ + P | 0) << 7 | i >>> 25) + _ | 0) << 9 | i >>> 23) + E | 0) << 13 | i >>> 19) + O | 0) << 18 | i >>> 14, T ^= (i = (x ^= (i = (j ^= (i = (N ^= (i = T + x | 0) << 7 | i >>> 25) + T | 0) << 9 | i >>> 23) + N | 0) << 13 | i >>> 19) + j | 0) << 18 | i >>> 14, L ^= (i = (C ^= (i = (k ^= (i = (M ^= (i = L + C | 0) << 7 | i >>> 25) + L | 0) << 9 | i >>> 23) + M | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, D ^= (i = (R ^= (i = (A ^= (i = (S ^= (i = D + R | 0) << 7 | i >>> 25) + D | 0) << 9 | i >>> 23) + S | 0) << 13 | i >>> 19) + A | 0) << 18 | i >>> 14, _ ^= (i = (S ^= (i = (k ^= (i = (x ^= (i = _ + S | 0) << 7 | i >>> 25) + _ | 0) << 9 | i >>> 23) + x | 0) << 13 | i >>> 19) + k | 0) << 18 | i >>> 14, T ^= (i = (E ^= (i = (A ^= (i = (C ^= (i = T + E | 0) << 7 | i >>> 25) + T | 0) << 9 | i >>> 23) + C | 0) << 13 | i >>> 19) + A | 0) << 18 | i >>> 14, L ^= (i = (N ^= (i = (O ^= (i = (R ^= (i = L + N | 0) << 7 | i >>> 25) + L | 0) << 9 | i >>> 23) + R | 0) << 13 | i >>> 19) + O | 0) << 18 | i >>> 14, D ^= (i = (M ^= (i = (j ^= (i = (P ^= (i = D + M | 0) << 7 | i >>> 25) + D | 0) << 9 | i >>> 23) + P | 0) << 13 | i >>> 19) + j | 0) << 18 | i >>> 14;
                                    _ = _ + o | 0, x = x + s | 0, k = k + a | 0, S = S + u | 0, E = E + c | 0, T = T + l | 0, C = C + f | 0, A = A + h | 0, O = O + d | 0, N = N + p | 0, L = L + g | 0, R = R + y | 0, P = P + v | 0, j = j + m | 0, M = M + b | 0, D = D + w | 0, t[0] = _ >>> 0 & 255, t[1] = _ >>> 8 & 255, t[2] = _ >>> 16 & 255, t[3] = _ >>> 24 & 255, t[4] = x >>> 0 & 255, t[5] = x >>> 8 & 255, t[6] = x >>> 16 & 255, t[7] = x >>> 24 & 255, t[8] = k >>> 0 & 255, t[9] = k >>> 8 & 255, t[10] = k >>> 16 & 255, t[11] = k >>> 24 & 255, t[12] = S >>> 0 & 255, t[13] = S >>> 8 & 255, t[14] = S >>> 16 & 255, t[15] = S >>> 24 & 255, t[16] = E >>> 0 & 255, t[17] = E >>> 8 & 255, t[18] = E >>> 16 & 255, t[19] = E >>> 24 & 255, t[20] = T >>> 0 & 255, t[21] = T >>> 8 & 255, t[22] = T >>> 16 & 255, t[23] = T >>> 24 & 255, t[24] = C >>> 0 & 255, t[25] = C >>> 8 & 255, t[26] = C >>> 16 & 255, t[27] = C >>> 24 & 255, t[28] = A >>> 0 & 255, t[29] = A >>> 8 & 255, t[30] = A >>> 16 & 255, t[31] = A >>> 24 & 255, t[32] = O >>> 0 & 255, t[33] = O >>> 8 & 255, t[34] = O >>> 16 & 255, t[35] = O >>> 24 & 255, t[36] = N >>> 0 & 255, t[37] = N >>> 8 & 255, t[38] = N >>> 16 & 255, t[39] = N >>> 24 & 255, t[40] = L >>> 0 & 255, t[41] = L >>> 8 & 255, t[42] = L >>> 16 & 255, t[43] = L >>> 24 & 255, t[44] = R >>> 0 & 255, t[45] = R >>> 8 & 255, t[46] = R >>> 16 & 255, t[47] = R >>> 24 & 255, t[48] = P >>> 0 & 255, t[49] = P >>> 8 & 255, t[50] = P >>> 16 & 255, t[51] = P >>> 24 & 255, t[52] = j >>> 0 & 255, t[53] = j >>> 8 & 255, t[54] = j >>> 16 & 255, t[55] = j >>> 24 & 255, t[56] = M >>> 0 & 255, t[57] = M >>> 8 & 255, t[58] = M >>> 16 & 255, t[59] = M >>> 24 & 255, t[60] = D >>> 0 & 255, t[61] = D >>> 8 & 255, t[62] = D >>> 16 & 255, t[63] = D >>> 24 & 255
                                }(t, e, n, r)
                            }

                            function b(t, e, n, r) {
                                ! function(t, e, n, r) {
                                    for (var i, o = 255 & r[0] | (255 & r[1]) << 8 | (255 & r[2]) << 16 | (255 & r[3]) << 24, s = 255 & n[0] | (255 & n[1]) << 8 | (255 & n[2]) << 16 | (255 & n[3]) << 24, a = 255 & n[4] | (255 & n[5]) << 8 | (255 & n[6]) << 16 | (255 & n[7]) << 24, u = 255 & n[8] | (255 & n[9]) << 8 | (255 & n[10]) << 16 | (255 & n[11]) << 24, c = 255 & n[12] | (255 & n[13]) << 8 | (255 & n[14]) << 16 | (255 & n[15]) << 24, l = 255 & r[4] | (255 & r[5]) << 8 | (255 & r[6]) << 16 | (255 & r[7]) << 24, f = 255 & e[0] | (255 & e[1]) << 8 | (255 & e[2]) << 16 | (255 & e[3]) << 24, h = 255 & e[4] | (255 & e[5]) << 8 | (255 & e[6]) << 16 | (255 & e[7]) << 24, d = 255 & e[8] | (255 & e[9]) << 8 | (255 & e[10]) << 16 | (255 & e[11]) << 24, p = 255 & e[12] | (255 & e[13]) << 8 | (255 & e[14]) << 16 | (255 & e[15]) << 24, g = 255 & r[8] | (255 & r[9]) << 8 | (255 & r[10]) << 16 | (255 & r[11]) << 24, y = 255 & n[16] | (255 & n[17]) << 8 | (255 & n[18]) << 16 | (255 & n[19]) << 24, v = 255 & n[20] | (255 & n[21]) << 8 | (255 & n[22]) << 16 | (255 & n[23]) << 24, m = 255 & n[24] | (255 & n[25]) << 8 | (255 & n[26]) << 16 | (255 & n[27]) << 24, b = 255 & n[28] | (255 & n[29]) << 8 | (255 & n[30]) << 16 | (255 & n[31]) << 24, w = 255 & r[12] | (255 & r[13]) << 8 | (255 & r[14]) << 16 | (255 & r[15]) << 24, _ = 0; _ < 20; _ += 2) o ^= (i = (v ^= (i = (d ^= (i = (c ^= (i = o + v | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + c | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, l ^= (i = (s ^= (i = (m ^= (i = (p ^= (i = l + s | 0) << 7 | i >>> 25) + l | 0) << 9 | i >>> 23) + p | 0) << 13 | i >>> 19) + m | 0) << 18 | i >>> 14, g ^= (i = (f ^= (i = (a ^= (i = (b ^= (i = g + f | 0) << 7 | i >>> 25) + g | 0) << 9 | i >>> 23) + b | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, w ^= (i = (y ^= (i = (h ^= (i = (u ^= (i = w + y | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + u | 0) << 13 | i >>> 19) + h | 0) << 18 | i >>> 14, o ^= (i = (u ^= (i = (a ^= (i = (s ^= (i = o + u | 0) << 7 | i >>> 25) + o | 0) << 9 | i >>> 23) + s | 0) << 13 | i >>> 19) + a | 0) << 18 | i >>> 14, l ^= (i = (c ^= (i = (h ^= (i = (f ^= (i = l + c | 0) << 7 | i >>> 25) + l | 0) << 9 | i >>> 23) + f | 0) << 13 | i >>> 19) + h | 0) << 18 | i >>> 14, g ^= (i = (p ^= (i = (d ^= (i = (y ^= (i = g + p | 0) << 7 | i >>> 25) + g | 0) << 9 | i >>> 23) + y | 0) << 13 | i >>> 19) + d | 0) << 18 | i >>> 14, w ^= (i = (b ^= (i = (m ^= (i = (v ^= (i = w + b | 0) << 7 | i >>> 25) + w | 0) << 9 | i >>> 23) + v | 0) << 13 | i >>> 19) + m | 0) << 18 | i >>> 14;
                                    t[0] = o >>> 0 & 255, t[1] = o >>> 8 & 255, t[2] = o >>> 16 & 255, t[3] = o >>> 24 & 255, t[4] = l >>> 0 & 255, t[5] = l >>> 8 & 255, t[6] = l >>> 16 & 255, t[7] = l >>> 24 & 255, t[8] = g >>> 0 & 255, t[9] = g >>> 8 & 255, t[10] = g >>> 16 & 255, t[11] = g >>> 24 & 255, t[12] = w >>> 0 & 255, t[13] = w >>> 8 & 255, t[14] = w >>> 16 & 255, t[15] = w >>> 24 & 255, t[16] = f >>> 0 & 255, t[17] = f >>> 8 & 255, t[18] = f >>> 16 & 255, t[19] = f >>> 24 & 255, t[20] = h >>> 0 & 255, t[21] = h >>> 8 & 255, t[22] = h >>> 16 & 255, t[23] = h >>> 24 & 255, t[24] = d >>> 0 & 255, t[25] = d >>> 8 & 255, t[26] = d >>> 16 & 255, t[27] = d >>> 24 & 255, t[28] = p >>> 0 & 255, t[29] = p >>> 8 & 255, t[30] = p >>> 16 & 255, t[31] = p >>> 24 & 255
                                }(t, e, n, r)
                            }
                            var w = new Uint8Array([101, 120, 112, 97, 110, 100, 32, 51, 50, 45, 98, 121, 116, 101, 32, 107]);

                            function _(t, e, n, r, i, o, s) {
                                var a, u, c = new Uint8Array(16),
                                    l = new Uint8Array(64);
                                for (u = 0; u < 16; u++) c[u] = 0;
                                for (u = 0; u < 8; u++) c[u] = o[u];
                                for (; i >= 64;) {
                                    for (m(l, c, s, w), u = 0; u < 64; u++) t[e + u] = n[r + u] ^ l[u];
                                    for (a = 1, u = 8; u < 16; u++) a = a + (255 & c[u]) | 0, c[u] = 255 & a, a >>>= 8;
                                    i -= 64, e += 64, r += 64
                                }
                                if (i > 0)
                                    for (m(l, c, s, w), u = 0; u < i; u++) t[e + u] = n[r + u] ^ l[u];
                                return 0
                            }

                            function x(t, e, n, r, i) {
                                var o, s, a = new Uint8Array(16),
                                    u = new Uint8Array(64);
                                for (s = 0; s < 16; s++) a[s] = 0;
                                for (s = 0; s < 8; s++) a[s] = r[s];
                                for (; n >= 64;) {
                                    for (m(u, a, i, w), s = 0; s < 64; s++) t[e + s] = u[s];
                                    for (o = 1, s = 8; s < 16; s++) o = o + (255 & a[s]) | 0, a[s] = 255 & o, o >>>= 8;
                                    n -= 64, e += 64
                                }
                                if (n > 0)
                                    for (m(u, a, i, w), s = 0; s < n; s++) t[e + s] = u[s];
                                return 0
                            }

                            function k(t, e, n, r, i) {
                                var o = new Uint8Array(32);
                                b(o, r, i, w);
                                for (var s = new Uint8Array(8), a = 0; a < 8; a++) s[a] = r[a + 16];
                                return x(t, e, n, s, o)
                            }

                            function S(t, e, n, r, i, o, s) {
                                var a = new Uint8Array(32);
                                b(a, o, s, w);
                                for (var u = new Uint8Array(8), c = 0; c < 8; c++) u[c] = o[c + 16];
                                return _(t, e, n, r, i, u, a)
                            }
                            var E = function(t) {
                                var e, n, r, i, o, s, a, u;
                                this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.leftover = 0, this.fin = 0, e = 255 & t[0] | (255 & t[1]) << 8, this.r[0] = 8191 & e, n = 255 & t[2] | (255 & t[3]) << 8, this.r[1] = 8191 & (e >>> 13 | n << 3), r = 255 & t[4] | (255 & t[5]) << 8, this.r[2] = 7939 & (n >>> 10 | r << 6), i = 255 & t[6] | (255 & t[7]) << 8, this.r[3] = 8191 & (r >>> 7 | i << 9), o = 255 & t[8] | (255 & t[9]) << 8, this.r[4] = 255 & (i >>> 4 | o << 12), this.r[5] = o >>> 1 & 8190, s = 255 & t[10] | (255 & t[11]) << 8, this.r[6] = 8191 & (o >>> 14 | s << 2), a = 255 & t[12] | (255 & t[13]) << 8, this.r[7] = 8065 & (s >>> 11 | a << 5), u = 255 & t[14] | (255 & t[15]) << 8, this.r[8] = 8191 & (a >>> 8 | u << 8), this.r[9] = u >>> 5 & 127, this.pad[0] = 255 & t[16] | (255 & t[17]) << 8, this.pad[1] = 255 & t[18] | (255 & t[19]) << 8, this.pad[2] = 255 & t[20] | (255 & t[21]) << 8, this.pad[3] = 255 & t[22] | (255 & t[23]) << 8, this.pad[4] = 255 & t[24] | (255 & t[25]) << 8, this.pad[5] = 255 & t[26] | (255 & t[27]) << 8, this.pad[6] = 255 & t[28] | (255 & t[29]) << 8, this.pad[7] = 255 & t[30] | (255 & t[31]) << 8
                            };

                            function T(t, e, n, r, i, o) {
                                var s = new E(o);
                                return s.update(n, r, i), s.finish(t, e), 0
                            }

                            function C(t, e, n, r, i, o) {
                                var s = new Uint8Array(16);
                                return T(s, 0, n, r, i, o), y(t, e, s, 0)
                            }

                            function A(t, e, n, r, i) {
                                var o;
                                if (n < 32) return -1;
                                for (S(t, 0, e, 0, n, r, i), T(t, 16, t, 32, n - 32, t), o = 0; o < 16; o++) t[o] = 0;
                                return 0
                            }

                            function O(t, e, n, r, i) {
                                var o, s = new Uint8Array(32);
                                if (n < 32) return -1;
                                if (k(s, 0, 32, r, i), 0 !== C(e, 16, e, 32, n - 32, s)) return -1;
                                for (S(t, 0, e, 0, n, r, i), o = 0; o < 32; o++) t[o] = 0;
                                return 0
                            }

                            function N(t, e) {
                                var n;
                                for (n = 0; n < 16; n++) t[n] = 0 | e[n]
                            }

                            function L(t) {
                                var e, n, r = 1;
                                for (e = 0; e < 16; e++) n = t[e] + r + 65535, r = Math.floor(n / 65536), t[e] = n - 65536 * r;
                                t[0] += r - 1 + 37 * (r - 1)
                            }

                            function R(t, e, n) {
                                for (var r, i = ~(n - 1), o = 0; o < 16; o++) r = i & (t[o] ^ e[o]), t[o] ^= r, e[o] ^= r
                            }

                            function P(t, n) {
                                var r, i, o, s = e(),
                                    a = e();
                                for (r = 0; r < 16; r++) a[r] = n[r];
                                for (L(a), L(a), L(a), i = 0; i < 2; i++) {
                                    for (s[0] = a[0] - 65517, r = 1; r < 15; r++) s[r] = a[r] - 65535 - (s[r - 1] >> 16 & 1), s[r - 1] &= 65535;
                                    s[15] = a[15] - 32767 - (s[14] >> 16 & 1), o = s[15] >> 16 & 1, s[14] &= 65535, R(a, s, 1 - o)
                                }
                                for (r = 0; r < 16; r++) t[2 * r] = 255 & a[r], t[2 * r + 1] = a[r] >> 8
                            }

                            function j(t, e) {
                                var n = new Uint8Array(32),
                                    r = new Uint8Array(32);
                                return P(n, t), P(r, e), v(n, 0, r, 0)
                            }

                            function M(t) {
                                var e = new Uint8Array(32);
                                return P(e, t), 1 & e[0]
                            }

                            function D(t, e) {
                                var n;
                                for (n = 0; n < 16; n++) t[n] = e[2 * n] + (e[2 * n + 1] << 8);
                                t[15] &= 32767
                            }

                            function B(t, e, n) {
                                for (var r = 0; r < 16; r++) t[r] = e[r] + n[r]
                            }

                            function I(t, e, n) {
                                for (var r = 0; r < 16; r++) t[r] = e[r] - n[r]
                            }

                            function q(t, e, n) {
                                var r, i, o = 0,
                                    s = 0,
                                    a = 0,
                                    u = 0,
                                    c = 0,
                                    l = 0,
                                    f = 0,
                                    h = 0,
                                    d = 0,
                                    p = 0,
                                    g = 0,
                                    y = 0,
                                    v = 0,
                                    m = 0,
                                    b = 0,
                                    w = 0,
                                    _ = 0,
                                    x = 0,
                                    k = 0,
                                    S = 0,
                                    E = 0,
                                    T = 0,
                                    C = 0,
                                    A = 0,
                                    O = 0,
                                    N = 0,
                                    L = 0,
                                    R = 0,
                                    P = 0,
                                    j = 0,
                                    M = 0,
                                    D = n[0],
                                    B = n[1],
                                    I = n[2],
                                    q = n[3],
                                    U = n[4],
                                    H = n[5],
                                    F = n[6],
                                    z = n[7],
                                    $ = n[8],
                                    W = n[9],
                                    X = n[10],
                                    Y = n[11],
                                    V = n[12],
                                    K = n[13],
                                    J = n[14],
                                    G = n[15];
                                o += (r = e[0]) * D, s += r * B, a += r * I, u += r * q, c += r * U, l += r * H, f += r * F, h += r * z, d += r * $, p += r * W, g += r * X, y += r * Y, v += r * V, m += r * K, b += r * J, w += r * G, s += (r = e[1]) * D, a += r * B, u += r * I, c += r * q, l += r * U, f += r * H, h += r * F, d += r * z, p += r * $, g += r * W, y += r * X, v += r * Y, m += r * V, b += r * K, w += r * J, _ += r * G, a += (r = e[2]) * D, u += r * B, c += r * I, l += r * q, f += r * U, h += r * H, d += r * F, p += r * z, g += r * $, y += r * W, v += r * X, m += r * Y, b += r * V, w += r * K, _ += r * J, x += r * G, u += (r = e[3]) * D, c += r * B, l += r * I, f += r * q, h += r * U, d += r * H, p += r * F, g += r * z, y += r * $, v += r * W, m += r * X, b += r * Y, w += r * V, _ += r * K, x += r * J, k += r * G, c += (r = e[4]) * D, l += r * B, f += r * I, h += r * q, d += r * U, p += r * H, g += r * F, y += r * z, v += r * $, m += r * W, b += r * X, w += r * Y, _ += r * V, x += r * K, k += r * J, S += r * G, l += (r = e[5]) * D, f += r * B, h += r * I, d += r * q, p += r * U, g += r * H, y += r * F, v += r * z, m += r * $, b += r * W, w += r * X, _ += r * Y, x += r * V, k += r * K, S += r * J, E += r * G, f += (r = e[6]) * D, h += r * B, d += r * I, p += r * q, g += r * U, y += r * H, v += r * F, m += r * z, b += r * $, w += r * W, _ += r * X, x += r * Y, k += r * V, S += r * K, E += r * J, T += r * G, h += (r = e[7]) * D, d += r * B, p += r * I, g += r * q, y += r * U, v += r * H, m += r * F, b += r * z, w += r * $, _ += r * W, x += r * X, k += r * Y, S += r * V, E += r * K, T += r * J, C += r * G, d += (r = e[8]) * D, p += r * B, g += r * I, y += r * q, v += r * U, m += r * H, b += r * F, w += r * z, _ += r * $, x += r * W, k += r * X, S += r * Y, E += r * V, T += r * K, C += r * J, A += r * G, p += (r = e[9]) * D, g += r * B, y += r * I, v += r * q, m += r * U, b += r * H, w += r * F, _ += r * z, x += r * $, k += r * W, S += r * X, E += r * Y, T += r * V, C += r * K, A += r * J, O += r * G, g += (r = e[10]) * D, y += r * B, v += r * I, m += r * q, b += r * U, w += r * H, _ += r * F, x += r * z, k += r * $, S += r * W, E += r * X, T += r * Y, C += r * V, A += r * K, O += r * J, N += r * G, y += (r = e[11]) * D, v += r * B, m += r * I, b += r * q, w += r * U, _ += r * H, x += r * F, k += r * z, S += r * $, E += r * W, T += r * X, C += r * Y, A += r * V, O += r * K, N += r * J, L += r * G, v += (r = e[12]) * D, m += r * B, b += r * I, w += r * q, _ += r * U, x += r * H, k += r * F, S += r * z, E += r * $, T += r * W, C += r * X, A += r * Y, O += r * V, N += r * K, L += r * J, R += r * G, m += (r = e[13]) * D, b += r * B, w += r * I, _ += r * q, x += r * U, k += r * H, S += r * F, E += r * z, T += r * $, C += r * W, A += r * X, O += r * Y, N += r * V, L += r * K, R += r * J, P += r * G, b += (r = e[14]) * D, w += r * B, _ += r * I, x += r * q, k += r * U, S += r * H, E += r * F, T += r * z, C += r * $, A += r * W, O += r * X, N += r * Y, L += r * V, R += r * K, P += r * J, j += r * G, w += (r = e[15]) * D, s += 38 * (x += r * I), a += 38 * (k += r * q), u += 38 * (S += r * U), c += 38 * (E += r * H), l += 38 * (T += r * F), f += 38 * (C += r * z), h += 38 * (A += r * $), d += 38 * (O += r * W), p += 38 * (N += r * X), g += 38 * (L += r * Y), y += 38 * (R += r * V), v += 38 * (P += r * K), m += 38 * (j += r * J), b += 38 * (M += r * G), o = (r = (o += 38 * (_ += r * B)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = s + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), w = (r = w + i + 65535) - 65536 * (i = Math.floor(r / 65536)), o = (r = (o += i - 1 + 37 * (i - 1)) + (i = 1) + 65535) - 65536 * (i = Math.floor(r / 65536)), s = (r = s + i + 65535) - 65536 * (i = Math.floor(r / 65536)), a = (r = a + i + 65535) - 65536 * (i = Math.floor(r / 65536)), u = (r = u + i + 65535) - 65536 * (i = Math.floor(r / 65536)), c = (r = c + i + 65535) - 65536 * (i = Math.floor(r / 65536)), l = (r = l + i + 65535) - 65536 * (i = Math.floor(r / 65536)), f = (r = f + i + 65535) - 65536 * (i = Math.floor(r / 65536)), h = (r = h + i + 65535) - 65536 * (i = Math.floor(r / 65536)), d = (r = d + i + 65535) - 65536 * (i = Math.floor(r / 65536)), p = (r = p + i + 65535) - 65536 * (i = Math.floor(r / 65536)), g = (r = g + i + 65535) - 65536 * (i = Math.floor(r / 65536)), y = (r = y + i + 65535) - 65536 * (i = Math.floor(r / 65536)), v = (r = v + i + 65535) - 65536 * (i = Math.floor(r / 65536)), m = (r = m + i + 65535) - 65536 * (i = Math.floor(r / 65536)), b = (r = b + i + 65535) - 65536 * (i = Math.floor(r / 65536)), w = (r = w + i + 65535) - 65536 * (i = Math.floor(r / 65536)), o += i - 1 + 37 * (i - 1), t[0] = o, t[1] = s, t[2] = a, t[3] = u, t[4] = c, t[5] = l, t[6] = f, t[7] = h, t[8] = d, t[9] = p, t[10] = g, t[11] = y, t[12] = v, t[13] = m, t[14] = b, t[15] = w
                            }

                            function U(t, e) {
                                q(t, e, e)
                            }

                            function H(t, n) {
                                var r, i = e();
                                for (r = 0; r < 16; r++) i[r] = n[r];
                                for (r = 253; r >= 0; r--) U(i, i), 2 !== r && 4 !== r && q(i, i, n);
                                for (r = 0; r < 16; r++) t[r] = i[r]
                            }

                            function F(t, n, r) {
                                var i, o, s = new Uint8Array(32),
                                    a = new Float64Array(80),
                                    c = e(),
                                    l = e(),
                                    f = e(),
                                    h = e(),
                                    d = e(),
                                    p = e();
                                for (o = 0; o < 31; o++) s[o] = n[o];
                                for (s[31] = 127 & n[31] | 64, s[0] &= 248, D(a, r), o = 0; o < 16; o++) l[o] = a[o], h[o] = c[o] = f[o] = 0;
                                for (c[0] = h[0] = 1, o = 254; o >= 0; --o) R(c, l, i = s[o >>> 3] >>> (7 & o) & 1), R(f, h, i), B(d, c, f), I(c, c, f), B(f, l, h), I(l, l, h), U(h, d), U(p, c), q(c, f, c), q(f, l, d), B(d, c, f), I(c, c, f), U(l, c), I(f, h, p), q(c, f, u), B(c, c, h), q(f, f, c), q(c, h, p), q(h, l, a), U(l, d), R(c, l, i), R(f, h, i);
                                for (o = 0; o < 16; o++) a[o + 16] = c[o], a[o + 32] = f[o], a[o + 48] = l[o], a[o + 64] = h[o];
                                var g = a.subarray(32),
                                    y = a.subarray(16);
                                return H(g, g), q(y, y, g), P(t, y), 0
                            }

                            function z(t, e) {
                                return F(t, e, o)
                            }

                            function $(t, e) {
                                return r(e, 32), z(t, e)
                            }

                            function W(t, e, n) {
                                var r = new Uint8Array(32);
                                return F(r, n, e), b(t, i, r, w)
                            }
                            E.prototype.blocks = function(t, e, n) {
                                for (var r, i, o, s, a, u, c, l, f, h, d, p, g, y, v, m, b, w, _, x = this.fin ? 0 : 2048, k = this.h[0], S = this.h[1], E = this.h[2], T = this.h[3], C = this.h[4], A = this.h[5], O = this.h[6], N = this.h[7], L = this.h[8], R = this.h[9], P = this.r[0], j = this.r[1], M = this.r[2], D = this.r[3], B = this.r[4], I = this.r[5], q = this.r[6], U = this.r[7], H = this.r[8], F = this.r[9]; n >= 16;) h = f = 0, h += (k += 8191 & (r = 255 & t[e + 0] | (255 & t[e + 1]) << 8)) * P, h += (S += 8191 & (r >>> 13 | (i = 255 & t[e + 2] | (255 & t[e + 3]) << 8) << 3)) * (5 * F), h += (E += 8191 & (i >>> 10 | (o = 255 & t[e + 4] | (255 & t[e + 5]) << 8) << 6)) * (5 * H), h += (T += 8191 & (o >>> 7 | (s = 255 & t[e + 6] | (255 & t[e + 7]) << 8) << 9)) * (5 * U), f = (h += (C += 8191 & (s >>> 4 | (a = 255 & t[e + 8] | (255 & t[e + 9]) << 8) << 12)) * (5 * q)) >>> 13, h &= 8191, h += (A += a >>> 1 & 8191) * (5 * I), h += (O += 8191 & (a >>> 14 | (u = 255 & t[e + 10] | (255 & t[e + 11]) << 8) << 2)) * (5 * B), h += (N += 8191 & (u >>> 11 | (c = 255 & t[e + 12] | (255 & t[e + 13]) << 8) << 5)) * (5 * D), h += (L += 8191 & (c >>> 8 | (l = 255 & t[e + 14] | (255 & t[e + 15]) << 8) << 8)) * (5 * M), d = f += (h += (R += l >>> 5 | x) * (5 * j)) >>> 13, d += k * j, d += S * P, d += E * (5 * F), d += T * (5 * H), f = (d += C * (5 * U)) >>> 13, d &= 8191, d += A * (5 * q), d += O * (5 * I), d += N * (5 * B), d += L * (5 * D), f += (d += R * (5 * M)) >>> 13, d &= 8191, p = f, p += k * M, p += S * j, p += E * P, p += T * (5 * F), f = (p += C * (5 * H)) >>> 13, p &= 8191, p += A * (5 * U), p += O * (5 * q), p += N * (5 * I), p += L * (5 * B), g = f += (p += R * (5 * D)) >>> 13, g += k * D, g += S * M, g += E * j, g += T * P, f = (g += C * (5 * F)) >>> 13, g &= 8191, g += A * (5 * H), g += O * (5 * U), g += N * (5 * q), g += L * (5 * I), y = f += (g += R * (5 * B)) >>> 13, y += k * B, y += S * D, y += E * M, y += T * j, f = (y += C * P) >>> 13, y &= 8191, y += A * (5 * F), y += O * (5 * H), y += N * (5 * U), y += L * (5 * q), v = f += (y += R * (5 * I)) >>> 13, v += k * I, v += S * B, v += E * D, v += T * M, f = (v += C * j) >>> 13, v &= 8191, v += A * P, v += O * (5 * F), v += N * (5 * H), v += L * (5 * U), m = f += (v += R * (5 * q)) >>> 13, m += k * q, m += S * I, m += E * B, m += T * D, f = (m += C * M) >>> 13, m &= 8191, m += A * j, m += O * P, m += N * (5 * F), m += L * (5 * H), b = f += (m += R * (5 * U)) >>> 13, b += k * U, b += S * q, b += E * I, b += T * B, f = (b += C * D) >>> 13, b &= 8191, b += A * M, b += O * j, b += N * P, b += L * (5 * F), w = f += (b += R * (5 * H)) >>> 13, w += k * H, w += S * U, w += E * q, w += T * I, f = (w += C * B) >>> 13, w &= 8191, w += A * D, w += O * M, w += N * j, w += L * P, _ = f += (w += R * (5 * F)) >>> 13, _ += k * F, _ += S * H, _ += E * U, _ += T * q, f = (_ += C * I) >>> 13, _ &= 8191, _ += A * B, _ += O * D, _ += N * M, _ += L * j, k = h = 8191 & (f = (f = ((f += (_ += R * P) >>> 13) << 2) + f | 0) + (h &= 8191) | 0), S = d += f >>>= 13, E = p &= 8191, T = g &= 8191, C = y &= 8191, A = v &= 8191, O = m &= 8191, N = b &= 8191, L = w &= 8191, R = _ &= 8191, e += 16, n -= 16;
                                this.h[0] = k, this.h[1] = S, this.h[2] = E, this.h[3] = T, this.h[4] = C, this.h[5] = A, this.h[6] = O, this.h[7] = N, this.h[8] = L, this.h[9] = R
                            }, E.prototype.finish = function(t, e) {
                                var n, r, i, o, s = new Uint16Array(10);
                                if (this.leftover) {
                                    for (o = this.leftover, this.buffer[o++] = 1; o < 16; o++) this.buffer[o] = 0;
                                    this.fin = 1, this.blocks(this.buffer, 0, 16)
                                }
                                for (n = this.h[1] >>> 13, this.h[1] &= 8191, o = 2; o < 10; o++) this.h[o] += n, n = this.h[o] >>> 13, this.h[o] &= 8191;
                                for (this.h[0] += 5 * n, n = this.h[0] >>> 13, this.h[0] &= 8191, this.h[1] += n, n = this.h[1] >>> 13, this.h[1] &= 8191, this.h[2] += n, s[0] = this.h[0] + 5, n = s[0] >>> 13, s[0] &= 8191, o = 1; o < 10; o++) s[o] = this.h[o] + n, n = s[o] >>> 13, s[o] &= 8191;
                                for (s[9] -= 8192, r = (1 ^ n) - 1, o = 0; o < 10; o++) s[o] &= r;
                                for (r = ~r, o = 0; o < 10; o++) this.h[o] = this.h[o] & r | s[o];
                                for (this.h[0] = 65535 & (this.h[0] | this.h[1] << 13), this.h[1] = 65535 & (this.h[1] >>> 3 | this.h[2] << 10), this.h[2] = 65535 & (this.h[2] >>> 6 | this.h[3] << 7), this.h[3] = 65535 & (this.h[3] >>> 9 | this.h[4] << 4), this.h[4] = 65535 & (this.h[4] >>> 12 | this.h[5] << 1 | this.h[6] << 14), this.h[5] = 65535 & (this.h[6] >>> 2 | this.h[7] << 11), this.h[6] = 65535 & (this.h[7] >>> 5 | this.h[8] << 8), this.h[7] = 65535 & (this.h[8] >>> 8 | this.h[9] << 5), i = this.h[0] + this.pad[0], this.h[0] = 65535 & i, o = 1; o < 8; o++) i = (this.h[o] + this.pad[o] | 0) + (i >>> 16) | 0, this.h[o] = 65535 & i;
                                t[e + 0] = this.h[0] >>> 0 & 255, t[e + 1] = this.h[0] >>> 8 & 255, t[e + 2] = this.h[1] >>> 0 & 255, t[e + 3] = this.h[1] >>> 8 & 255, t[e + 4] = this.h[2] >>> 0 & 255, t[e + 5] = this.h[2] >>> 8 & 255, t[e + 6] = this.h[3] >>> 0 & 255, t[e + 7] = this.h[3] >>> 8 & 255, t[e + 8] = this.h[4] >>> 0 & 255, t[e + 9] = this.h[4] >>> 8 & 255, t[e + 10] = this.h[5] >>> 0 & 255, t[e + 11] = this.h[5] >>> 8 & 255, t[e + 12] = this.h[6] >>> 0 & 255, t[e + 13] = this.h[6] >>> 8 & 255, t[e + 14] = this.h[7] >>> 0 & 255, t[e + 15] = this.h[7] >>> 8 & 255
                            }, E.prototype.update = function(t, e, n) {
                                var r, i;
                                if (this.leftover) {
                                    for ((i = 16 - this.leftover) > n && (i = n), r = 0; r < i; r++) this.buffer[this.leftover + r] = t[e + r];
                                    if (n -= i, e += i, this.leftover += i, this.leftover < 16) return;
                                    this.blocks(this.buffer, 0, 16), this.leftover = 0
                                }
                                if (n >= 16 && (i = n - n % 16, this.blocks(t, e, i), e += i, n -= i), n) {
                                    for (r = 0; r < n; r++) this.buffer[this.leftover + r] = t[e + r];
                                    this.leftover += n
                                }
                            };
                            var X = A,
                                Y = O,
                                V = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

                            function K(t, e, n, r) {
                                for (var i, o, s, a, u, c, l, f, h, d, p, g, y, v, m, b, w, _, x, k, S, E, T, C, A, O, N = new Int32Array(16), L = new Int32Array(16), R = t[0], P = t[1], j = t[2], M = t[3], D = t[4], B = t[5], I = t[6], q = t[7], U = e[0], H = e[1], F = e[2], z = e[3], $ = e[4], W = e[5], X = e[6], Y = e[7], K = 0; r >= 128;) {
                                    for (x = 0; x < 16; x++) k = 8 * x + K, N[x] = n[k + 0] << 24 | n[k + 1] << 16 | n[k + 2] << 8 | n[k + 3], L[x] = n[k + 4] << 24 | n[k + 5] << 16 | n[k + 6] << 8 | n[k + 7];
                                    for (x = 0; x < 80; x++)
                                        if (i = R, o = P, s = j, a = M, u = D, c = B, l = I, h = U, d = H, p = F, g = z, y = $, v = W, m = X, T = 65535 & (E = Y), C = E >>> 16, A = 65535 & (S = q), O = S >>> 16, T += 65535 & (E = ($ >>> 14 | D << 18) ^ ($ >>> 18 | D << 14) ^ (D >>> 9 | $ << 23)), C += E >>> 16, A += 65535 & (S = (D >>> 14 | $ << 18) ^ (D >>> 18 | $ << 14) ^ ($ >>> 9 | D << 23)), O += S >>> 16, T += 65535 & (E = $ & W ^ ~$ & X), C += E >>> 16, A += 65535 & (S = D & B ^ ~D & I), O += S >>> 16, T += 65535 & (E = V[2 * x + 1]), C += E >>> 16, A += 65535 & (S = V[2 * x]), O += S >>> 16, S = N[x % 16], C += (E = L[x % 16]) >>> 16, A += 65535 & S, O += S >>> 16, A += (C += (T += 65535 & E) >>> 16) >>> 16, T = 65535 & (E = _ = 65535 & T | C << 16), C = E >>> 16, A = 65535 & (S = w = 65535 & A | (O += A >>> 16) << 16), O = S >>> 16, T += 65535 & (E = (U >>> 28 | R << 4) ^ (R >>> 2 | U << 30) ^ (R >>> 7 | U << 25)), C += E >>> 16, A += 65535 & (S = (R >>> 28 | U << 4) ^ (U >>> 2 | R << 30) ^ (U >>> 7 | R << 25)), O += S >>> 16, C += (E = U & H ^ U & F ^ H & F) >>> 16, A += 65535 & (S = R & P ^ R & j ^ P & j), O += S >>> 16, f = 65535 & (A += (C += (T += 65535 & E) >>> 16) >>> 16) | (O += A >>> 16) << 16, b = 65535 & T | C << 16, T = 65535 & (E = g), C = E >>> 16, A = 65535 & (S = a), O = S >>> 16, C += (E = _) >>> 16, A += 65535 & (S = w), O += S >>> 16, P = i, j = o, M = s, D = a = 65535 & (A += (C += (T += 65535 & E) >>> 16) >>> 16) | (O += A >>> 16) << 16, B = u, I = c, q = l, R = f, H = h, F = d, z = p, $ = g = 65535 & T | C << 16, W = y, X = v, Y = m, U = b, x % 16 == 15)
                                            for (k = 0; k < 16; k++) S = N[k], T = 65535 & (E = L[k]), C = E >>> 16, A = 65535 & S, O = S >>> 16, S = N[(k + 9) % 16], T += 65535 & (E = L[(k + 9) % 16]), C += E >>> 16, A += 65535 & S, O += S >>> 16, w = N[(k + 1) % 16], T += 65535 & (E = ((_ = L[(k + 1) % 16]) >>> 1 | w << 31) ^ (_ >>> 8 | w << 24) ^ (_ >>> 7 | w << 25)), C += E >>> 16, A += 65535 & (S = (w >>> 1 | _ << 31) ^ (w >>> 8 | _ << 24) ^ w >>> 7), O += S >>> 16, w = N[(k + 14) % 16], C += (E = ((_ = L[(k + 14) % 16]) >>> 19 | w << 13) ^ (w >>> 29 | _ << 3) ^ (_ >>> 6 | w << 26)) >>> 16, A += 65535 & (S = (w >>> 19 | _ << 13) ^ (_ >>> 29 | w << 3) ^ w >>> 6), O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, N[k] = 65535 & A | O << 16, L[k] = 65535 & T | C << 16;
                                    T = 65535 & (E = U), C = E >>> 16, A = 65535 & (S = R), O = S >>> 16, S = t[0], C += (E = e[0]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[0] = R = 65535 & A | O << 16, e[0] = U = 65535 & T | C << 16, T = 65535 & (E = H), C = E >>> 16, A = 65535 & (S = P), O = S >>> 16, S = t[1], C += (E = e[1]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[1] = P = 65535 & A | O << 16, e[1] = H = 65535 & T | C << 16, T = 65535 & (E = F), C = E >>> 16, A = 65535 & (S = j), O = S >>> 16, S = t[2], C += (E = e[2]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[2] = j = 65535 & A | O << 16, e[2] = F = 65535 & T | C << 16, T = 65535 & (E = z), C = E >>> 16, A = 65535 & (S = M), O = S >>> 16, S = t[3], C += (E = e[3]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[3] = M = 65535 & A | O << 16, e[3] = z = 65535 & T | C << 16, T = 65535 & (E = $), C = E >>> 16, A = 65535 & (S = D), O = S >>> 16, S = t[4], C += (E = e[4]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[4] = D = 65535 & A | O << 16, e[4] = $ = 65535 & T | C << 16, T = 65535 & (E = W), C = E >>> 16, A = 65535 & (S = B), O = S >>> 16, S = t[5], C += (E = e[5]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[5] = B = 65535 & A | O << 16, e[5] = W = 65535 & T | C << 16, T = 65535 & (E = X), C = E >>> 16, A = 65535 & (S = I), O = S >>> 16, S = t[6], C += (E = e[6]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[6] = I = 65535 & A | O << 16, e[6] = X = 65535 & T | C << 16, T = 65535 & (E = Y), C = E >>> 16, A = 65535 & (S = q), O = S >>> 16, S = t[7], C += (E = e[7]) >>> 16, A += 65535 & S, O += S >>> 16, O += (A += (C += (T += 65535 & E) >>> 16) >>> 16) >>> 16, t[7] = q = 65535 & A | O << 16, e[7] = Y = 65535 & T | C << 16, K += 128, r -= 128
                                }
                                return r
                            }

                            function J(t, e, n) {
                                var r, i = new Int32Array(8),
                                    o = new Int32Array(8),
                                    s = new Uint8Array(256),
                                    a = n;
                                for (i[0] = 1779033703, i[1] = 3144134277, i[2] = 1013904242, i[3] = 2773480762, i[4] = 1359893119, i[5] = 2600822924, i[6] = 528734635, i[7] = 1541459225, o[0] = 4089235720, o[1] = 2227873595, o[2] = 4271175723, o[3] = 1595750129, o[4] = 2917565137, o[5] = 725511199, o[6] = 4215389547, o[7] = 327033209, K(i, o, e, n), n %= 128, r = 0; r < n; r++) s[r] = e[a - n + r];
                                for (s[n] = 128, s[(n = 256 - 128 * (n < 112 ? 1 : 0)) - 9] = 0, p(s, n - 8, a / 536870912 | 0, a << 3), K(i, o, s, n), r = 0; r < 8; r++) p(t, 8 * r, i[r], o[r]);
                                return 0
                            }

                            function G(t, n) {
                                var r = e(),
                                    i = e(),
                                    o = e(),
                                    s = e(),
                                    a = e(),
                                    u = e(),
                                    c = e(),
                                    f = e(),
                                    h = e();
                                I(r, t[1], t[0]), I(h, n[1], n[0]), q(r, r, h), B(i, t[0], t[1]), B(h, n[0], n[1]), q(i, i, h), q(o, t[3], n[3]), q(o, o, l), q(s, t[2], n[2]), B(s, s, s), I(a, i, r), I(u, s, o), B(c, s, o), B(f, i, r), q(t[0], a, u), q(t[1], f, c), q(t[2], c, u), q(t[3], a, f)
                            }

                            function Q(t, e, n) {
                                var r;
                                for (r = 0; r < 4; r++) R(t[r], e[r], n)
                            }

                            function Z(t, n) {
                                var r = e(),
                                    i = e(),
                                    o = e();
                                H(o, n[2]), q(r, n[0], o), q(i, n[1], o), P(t, i), t[31] ^= M(r) << 7
                            }

                            function tt(t, e, n) {
                                var r, i;
                                for (N(t[0], s), N(t[1], a), N(t[2], a), N(t[3], s), i = 255; i >= 0; --i) Q(t, e, r = n[i / 8 | 0] >> (7 & i) & 1), G(e, t), G(t, t), Q(t, e, r)
                            }

                            function et(t, n) {
                                var r = [e(), e(), e(), e()];
                                N(r[0], f), N(r[1], h), N(r[2], a), q(r[3], f, h), tt(t, r, n)
                            }

                            function nt(t, n, i) {
                                var o, s = new Uint8Array(64),
                                    a = [e(), e(), e(), e()];
                                for (i || r(n, 32), J(s, n, 32), s[0] &= 248, s[31] &= 127, s[31] |= 64, et(a, s), Z(t, a), o = 0; o < 32; o++) n[o + 32] = t[o];
                                return 0
                            }
                            var rt = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

                            function it(t, e) {
                                var n, r, i, o;
                                for (r = 63; r >= 32; --r) {
                                    for (n = 0, i = r - 32, o = r - 12; i < o; ++i) e[i] += n - 16 * e[r] * rt[i - (r - 32)], n = e[i] + 128 >> 8, e[i] -= 256 * n;
                                    e[i] += n, e[r] = 0
                                }
                                for (n = 0, i = 0; i < 32; i++) e[i] += n - (e[31] >> 4) * rt[i], n = e[i] >> 8, e[i] &= 255;
                                for (i = 0; i < 32; i++) e[i] -= n * rt[i];
                                for (r = 0; r < 32; r++) e[r + 1] += e[r] >> 8, t[r] = 255 & e[r]
                            }

                            function ot(t) {
                                var e, n = new Float64Array(64);
                                for (e = 0; e < 64; e++) n[e] = t[e];
                                for (e = 0; e < 64; e++) t[e] = 0;
                                it(t, n)
                            }

                            function st(t, n, r, i) {
                                var o, s, a = new Uint8Array(64),
                                    u = new Uint8Array(64),
                                    c = new Uint8Array(64),
                                    l = new Float64Array(64),
                                    f = [e(), e(), e(), e()];
                                J(a, i, 32), a[0] &= 248, a[31] &= 127, a[31] |= 64;
                                var h = r + 64;
                                for (o = 0; o < r; o++) t[64 + o] = n[o];
                                for (o = 0; o < 32; o++) t[32 + o] = a[32 + o];
                                for (J(c, t.subarray(32), r + 32), ot(c), et(f, c), Z(t, f), o = 32; o < 64; o++) t[o] = i[o];
                                for (J(u, t, r + 64), ot(u), o = 0; o < 64; o++) l[o] = 0;
                                for (o = 0; o < 32; o++) l[o] = c[o];
                                for (o = 0; o < 32; o++)
                                    for (s = 0; s < 32; s++) l[o + s] += u[o] * a[s];
                                return it(t.subarray(32), l), h
                            }

                            function at(t, n) {
                                var r = e(),
                                    i = e(),
                                    o = e(),
                                    u = e(),
                                    l = e(),
                                    f = e(),
                                    h = e();
                                return N(t[2], a), D(t[1], n), U(o, t[1]), q(u, o, c), I(o, o, t[2]), B(u, t[2], u), U(l, u), U(f, l), q(h, f, l), q(r, h, o), q(r, r, u),
                                    function(t, n) {
                                        var r, i = e();
                                        for (r = 0; r < 16; r++) i[r] = n[r];
                                        for (r = 250; r >= 0; r--) U(i, i), 1 !== r && q(i, i, n);
                                        for (r = 0; r < 16; r++) t[r] = i[r]
                                    }(r, r), q(r, r, o), q(r, r, u), q(r, r, u), q(t[0], r, u), U(i, t[0]), q(i, i, u), j(i, o) && q(t[0], t[0], d), U(i, t[0]), q(i, i, u), j(i, o) ? -1 : (M(t[0]) === n[31] >> 7 && I(t[0], s, t[0]), q(t[3], t[0], t[1]), 0)
                            }

                            function ut(t, n, r, i) {
                                var o, s = new Uint8Array(32),
                                    a = new Uint8Array(64),
                                    u = [e(), e(), e(), e()],
                                    c = [e(), e(), e(), e()];
                                if (r < 64) return -1;
                                if (at(c, i)) return -1;
                                for (o = 0; o < r; o++) t[o] = n[o];
                                for (o = 0; o < 32; o++) t[o + 32] = i[o];
                                if (J(a, t, r), ot(a), tt(u, c, a), et(c, n.subarray(32)), G(u, c), Z(s, u), r -= 64, v(n, 0, s, 0)) {
                                    for (o = 0; o < r; o++) t[o] = 0;
                                    return -1
                                }
                                for (o = 0; o < r; o++) t[o] = n[o + 64];
                                return r
                            }
                            var ct, lt = 16,
                                ft = 64,
                                ht = 32,
                                dt = 64;

                            function pt(t, e) {
                                if (32 !== t.length) throw new Error("bad key size");
                                if (24 !== e.length) throw new Error("bad nonce size")
                            }

                            function gt() {
                                for (var t = 0; t < arguments.length; t++)
                                    if (!(arguments[t] instanceof Uint8Array)) throw new TypeError("unexpected type, use Uint8Array")
                            }

                            function yt(t) {
                                for (var e = 0; e < t.length; e++) t[e] = 0
                            }
                            t.lowlevel = {
                                crypto_core_hsalsa20: b,
                                crypto_stream_xor: S,
                                crypto_stream: k,
                                crypto_stream_salsa20_xor: _,
                                crypto_stream_salsa20: x,
                                crypto_onetimeauth: T,
                                crypto_onetimeauth_verify: C,
                                crypto_verify_16: y,
                                crypto_verify_32: v,
                                crypto_secretbox: A,
                                crypto_secretbox_open: O,
                                crypto_scalarmult: F,
                                crypto_scalarmult_base: z,
                                crypto_box_beforenm: W,
                                crypto_box_afternm: X,
                                crypto_box: function(t, e, n, r, i, o) {
                                    var s = new Uint8Array(32);
                                    return W(s, i, o), X(t, e, n, r, s)
                                },
                                crypto_box_open: function(t, e, n, r, i, o) {
                                    var s = new Uint8Array(32);
                                    return W(s, i, o), Y(t, e, n, r, s)
                                },
                                crypto_box_keypair: $,
                                crypto_hash: J,
                                crypto_sign: st,
                                crypto_sign_keypair: nt,
                                crypto_sign_open: ut,
                                crypto_secretbox_KEYBYTES: 32,
                                crypto_secretbox_NONCEBYTES: 24,
                                crypto_secretbox_ZEROBYTES: 32,
                                crypto_secretbox_BOXZEROBYTES: lt,
                                crypto_scalarmult_BYTES: 32,
                                crypto_scalarmult_SCALARBYTES: 32,
                                crypto_box_PUBLICKEYBYTES: 32,
                                crypto_box_SECRETKEYBYTES: 32,
                                crypto_box_BEFORENMBYTES: 32,
                                crypto_box_NONCEBYTES: 24,
                                crypto_box_ZEROBYTES: 32,
                                crypto_box_BOXZEROBYTES: 16,
                                crypto_sign_BYTES: ft,
                                crypto_sign_PUBLICKEYBYTES: ht,
                                crypto_sign_SECRETKEYBYTES: dt,
                                crypto_sign_SEEDBYTES: 32,
                                crypto_hash_BYTES: 64
                            }, t.randomBytes = function(t) {
                                var e = new Uint8Array(t);
                                return r(e, t), e
                            }, t.secretbox = function(t, e, n) {
                                gt(t, e, n), pt(n, e);
                                for (var r = new Uint8Array(32 + t.length), i = new Uint8Array(r.length), o = 0; o < t.length; o++) r[o + 32] = t[o];
                                return A(i, r, r.length, e, n), i.subarray(lt)
                            }, t.secretbox.open = function(t, e, n) {
                                gt(t, e, n), pt(n, e);
                                for (var r = new Uint8Array(lt + t.length), i = new Uint8Array(r.length), o = 0; o < t.length; o++) r[o + lt] = t[o];
                                return r.length < 32 || 0 !== O(i, r, r.length, e, n) ? null : i.subarray(32)
                            }, t.secretbox.keyLength = 32, t.secretbox.nonceLength = 24, t.secretbox.overheadLength = lt, t.scalarMult = function(t, e) {
                                if (gt(t, e), 32 !== t.length) throw new Error("bad n size");
                                if (32 !== e.length) throw new Error("bad p size");
                                var n = new Uint8Array(32);
                                return F(n, t, e), n
                            }, t.scalarMult.base = function(t) {
                                if (gt(t), 32 !== t.length) throw new Error("bad n size");
                                var e = new Uint8Array(32);
                                return z(e, t), e
                            }, t.scalarMult.scalarLength = 32, t.scalarMult.groupElementLength = 32, t.box = function(e, n, r, i) {
                                var o = t.box.before(r, i);
                                return t.secretbox(e, n, o)
                            }, t.box.before = function(t, e) {
                                gt(t, e),
                                    function(t, e) {
                                        if (32 !== t.length) throw new Error("bad public key size");
                                        if (32 !== e.length) throw new Error("bad secret key size")
                                    }(t, e);
                                var n = new Uint8Array(32);
                                return W(n, t, e), n
                            }, t.box.after = t.secretbox, t.box.open = function(e, n, r, i) {
                                var o = t.box.before(r, i);
                                return t.secretbox.open(e, n, o)
                            }, t.box.open.after = t.secretbox.open, t.box.keyPair = function() {
                                var t = new Uint8Array(32),
                                    e = new Uint8Array(32);
                                return $(t, e), {
                                    publicKey: t,
                                    secretKey: e
                                }
                            }, t.box.keyPair.fromSecretKey = function(t) {
                                if (gt(t), 32 !== t.length) throw new Error("bad secret key size");
                                var e = new Uint8Array(32);
                                return z(e, t), {
                                    publicKey: e,
                                    secretKey: new Uint8Array(t)
                                }
                            }, t.box.publicKeyLength = 32, t.box.secretKeyLength = 32, t.box.sharedKeyLength = 32, t.box.nonceLength = 24, t.box.overheadLength = t.secretbox.overheadLength, t.sign = function(t, e) {
                                if (gt(t, e), e.length !== dt) throw new Error("bad secret key size");
                                var n = new Uint8Array(ft + t.length);
                                return st(n, t, t.length, e), n
                            }, t.sign.open = function(t, e) {
                                if (gt(t, e), e.length !== ht) throw new Error("bad public key size");
                                var n = new Uint8Array(t.length),
                                    r = ut(n, t, t.length, e);
                                if (r < 0) return null;
                                for (var i = new Uint8Array(r), o = 0; o < i.length; o++) i[o] = n[o];
                                return i
                            }, t.sign.detached = function(e, n) {
                                for (var r = t.sign(e, n), i = new Uint8Array(ft), o = 0; o < i.length; o++) i[o] = r[o];
                                return i
                            }, t.sign.detached.verify = function(t, e, n) {
                                if (gt(t, e, n), e.length !== ft) throw new Error("bad signature size");
                                if (n.length !== ht) throw new Error("bad public key size");
                                var r, i = new Uint8Array(ft + t.length),
                                    o = new Uint8Array(ft + t.length);
                                for (r = 0; r < ft; r++) i[r] = e[r];
                                for (r = 0; r < t.length; r++) i[r + ft] = t[r];
                                return ut(o, i, i.length, n) >= 0
                            }, t.sign.keyPair = function() {
                                var t = new Uint8Array(ht),
                                    e = new Uint8Array(dt);
                                return nt(t, e), {
                                    publicKey: t,
                                    secretKey: e
                                }
                            }, t.sign.keyPair.fromSecretKey = function(t) {
                                if (gt(t), t.length !== dt) throw new Error("bad secret key size");
                                for (var e = new Uint8Array(ht), n = 0; n < e.length; n++) e[n] = t[32 + n];
                                return {
                                    publicKey: e,
                                    secretKey: new Uint8Array(t)
                                }
                            }, t.sign.keyPair.fromSeed = function(t) {
                                if (gt(t), 32 !== t.length) throw new Error("bad seed size");
                                for (var e = new Uint8Array(ht), n = new Uint8Array(dt), r = 0; r < 32; r++) n[r] = t[r];
                                return nt(e, n, !0), {
                                    publicKey: e,
                                    secretKey: n
                                }
                            }, t.sign.publicKeyLength = ht, t.sign.secretKeyLength = dt, t.sign.seedLength = 32, t.sign.signatureLength = ft, t.hash = function(t) {
                                gt(t);
                                var e = new Uint8Array(64);
                                return J(e, t, t.length), e
                            }, t.hash.hashLength = 64, t.verify = function(t, e) {
                                return gt(t, e), 0 !== t.length && 0 !== e.length && t.length === e.length && 0 === g(t, 0, e, 0, t.length)
                            }, t.setPRNG = function(t) {
                                r = t
                            }, (ct = "undefined" != typeof self ? self.crypto || self.msCrypto : null) && ct.getRandomValues ? t.setPRNG((function(t, e) {
                                var n, r = new Uint8Array(e);
                                for (n = 0; n < e; n += 65536) ct.getRandomValues(r.subarray(n, n + Math.min(e - n, 65536)));
                                for (n = 0; n < e; n++) t[n] = r[n];
                                yt(r)
                            })) : (ct = n(56)) && ct.randomBytes && t.setPRNG((function(t, e) {
                                var n, r = ct.randomBytes(e);
                                for (n = 0; n < e; n++) t[n] = r[n];
                                yt(r)
                            }))
                        }(void 0 !== t && t.exports ? t.exports : self.nacl = self.nacl || {})
                    }, function(t, e) {}, function(t, e, n) {
                        (function(e) {
                            ! function(e, n) {
                                "use strict";
                                void 0 !== t && t.exports ? t.exports = n() : (e.nacl || (e.nacl = {}), e.nacl.util = n())
                            }(this, (function() {
                                "use strict";
                                var t = {};

                                function n(t) {
                                    if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(t)) throw new TypeError("invalid encoding")
                                }
                                return t.decodeUTF8 = function(t) {
                                    if ("string" != typeof t) throw new TypeError("expected string");
                                    var e, n = unescape(encodeURIComponent(t)),
                                        r = new Uint8Array(n.length);
                                    for (e = 0; e < n.length; e++) r[e] = n.charCodeAt(e);
                                    return r
                                }, t.encodeUTF8 = function(t) {
                                    var e, n = [];
                                    for (e = 0; e < t.length; e++) n.push(String.fromCharCode(t[e]));
                                    return decodeURIComponent(escape(n.join("")))
                                }, "undefined" == typeof atob ? void 0 !== e.from ? (t.encodeBase64 = function(t) {
                                    return e.from(t).toString("base64")
                                }, t.decodeBase64 = function(t) {
                                    return n(t), new Uint8Array(Array.prototype.slice.call(e.from(t, "base64"), 0))
                                }) : (t.encodeBase64 = function(t) {
                                    return new e(t).toString("base64")
                                }, t.decodeBase64 = function(t) {
                                    return n(t), new Uint8Array(Array.prototype.slice.call(new e(t, "base64"), 0))
                                }) : (t.encodeBase64 = function(t) {
                                    var e, n = [],
                                        r = t.length;
                                    for (e = 0; e < r; e++) n.push(String.fromCharCode(t[e]));
                                    return btoa(n.join(""))
                                }, t.decodeBase64 = function(t) {
                                    n(t);
                                    var e, r = atob(t),
                                        i = new Uint8Array(r.length);
                                    for (e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
                                    return i
                                }), t
                            }))
                        }).call(e, n(58).Buffer)
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(59),
                            i = n(60),
                            o = n(61);

                        function s() {
                            return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                        }

                        function a(t, e) {
                            if (s() < e) throw new RangeError("Invalid typed array length");
                            return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
                        }

                        function u(t, e, n) {
                            if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
                            if ("number" == typeof t) {
                                if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                                return f(this, t)
                            }
                            return c(this, t, e, n)
                        }

                        function c(t, e, n, r) {
                            if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                            return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function(t, e, n, r) {
                                if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                                if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                                return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e), t
                            }(t, e, n, r) : "string" == typeof e ? function(t, e, n) {
                                if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                                var r = 0 | p(e, n),
                                    i = (t = a(t, r)).write(e, n);
                                return i !== r && (t = t.slice(0, i)), t
                            }(t, e, n) : function(t, e) {
                                if (u.isBuffer(e)) {
                                    var n = 0 | d(e.length);
                                    return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                                }
                                if (e) {
                                    if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : h(t, e);
                                    if ("Buffer" === e.type && o(e.data)) return h(t, e.data)
                                }
                                var r;
                                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                            }(t, e)
                        }

                        function l(t) {
                            if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                            if (t < 0) throw new RangeError('"size" argument must not be negative')
                        }

                        function f(t, e) {
                            if (l(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT)
                                for (var n = 0; n < e; ++n) t[n] = 0;
                            return t
                        }

                        function h(t, e) {
                            var n = e.length < 0 ? 0 : 0 | d(e.length);
                            t = a(t, n);
                            for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                            return t
                        }

                        function d(t) {
                            if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                            return 0 | t
                        }

                        function p(t, e) {
                            if (u.isBuffer(t)) return t.length;
                            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                            "string" != typeof t && (t = "" + t);
                            var n = t.length;
                            if (0 === n) return 0;
                            for (var r = !1;;) switch (e) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return n;
                                case "utf8":
                                case "utf-8":
                                case void 0:
                                    return U(t).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * n;
                                case "hex":
                                    return n >>> 1;
                                case "base64":
                                    return H(t).length;
                                default:
                                    if (r) return U(t).length;
                                    e = ("" + e).toLowerCase(), r = !0
                            }
                        }

                        function g(t, e, n) {
                            var r = !1;
                            if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                            if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                            if ((n >>>= 0) <= (e >>>= 0)) return "";
                            for (t || (t = "utf8");;) switch (t) {
                                case "hex":
                                    return N(this, e, n);
                                case "utf8":
                                case "utf-8":
                                    return T(this, e, n);
                                case "ascii":
                                    return A(this, e, n);
                                case "latin1":
                                case "binary":
                                    return O(this, e, n);
                                case "base64":
                                    return E(this, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return L(this, e, n);
                                default:
                                    if (r) throw new TypeError("Unknown encoding: " + t);
                                    t = (t + "").toLowerCase(), r = !0
                            }
                        }

                        function y(t, e, n) {
                            var r = t[e];
                            t[e] = t[n], t[n] = r
                        }

                        function v(t, e, n, r, i) {
                            if (0 === t.length) return -1;
                            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                                if (i) return -1;
                                n = t.length - 1
                            } else if (n < 0) {
                                if (!i) return -1;
                                n = 0
                            }
                            if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : m(t, e, n, r, i);
                            if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : m(t, [e], n, r, i);
                            throw new TypeError("val must be string, number or Buffer")
                        }

                        function m(t, e, n, r, i) {
                            var o, s = 1,
                                a = t.length,
                                u = e.length;
                            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                                if (t.length < 2 || e.length < 2) return -1;
                                s = 2, a /= 2, u /= 2, n /= 2
                            }

                            function c(t, e) {
                                return 1 === s ? t[e] : t.readUInt16BE(e * s)
                            }
                            if (i) {
                                var l = -1;
                                for (o = n; o < a; o++)
                                    if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                                        if (-1 === l && (l = o), o - l + 1 === u) return l * s
                                    } else -1 !== l && (o -= o - l), l = -1
                            } else
                                for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                                    for (var f = !0, h = 0; h < u; h++)
                                        if (c(t, o + h) !== c(e, h)) {
                                            f = !1;
                                            break
                                        }
                                    if (f) return o
                                }
                            return -1
                        }

                        function b(t, e, n, r) {
                            n = Number(n) || 0;
                            var i = t.length - n;
                            r ? (r = Number(r)) > i && (r = i) : r = i;
                            var o = e.length;
                            if (o % 2 != 0) throw new TypeError("Invalid hex string");
                            r > o / 2 && (r = o / 2);
                            for (var s = 0; s < r; ++s) {
                                var a = parseInt(e.substr(2 * s, 2), 16);
                                if (isNaN(a)) return s;
                                t[n + s] = a
                            }
                            return s
                        }

                        function w(t, e, n, r) {
                            return F(U(e, t.length - n), t, n, r)
                        }

                        function _(t, e, n, r) {
                            return F(function(t) {
                                for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                                return e
                            }(e), t, n, r)
                        }

                        function x(t, e, n, r) {
                            return _(t, e, n, r)
                        }

                        function k(t, e, n, r) {
                            return F(H(e), t, n, r)
                        }

                        function S(t, e, n, r) {
                            return F(function(t, e) {
                                for (var n, r, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) r = (n = t.charCodeAt(s)) >> 8, i = n % 256, o.push(i), o.push(r);
                                return o
                            }(e, t.length - n), t, n, r)
                        }

                        function E(t, e, n) {
                            return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                        }

                        function T(t, e, n) {
                            n = Math.min(t.length, n);
                            for (var r = [], i = e; i < n;) {
                                var o, s, a, u, c = t[i],
                                    l = null,
                                    f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                if (i + f <= n) switch (f) {
                                    case 1:
                                        c < 128 && (l = c);
                                        break;
                                    case 2:
                                        128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                        break;
                                    case 3:
                                        o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                        break;
                                    case 4:
                                        o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                                }
                                null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += f
                            }
                            return function(t) {
                                var e = t.length;
                                if (e <= C) return String.fromCharCode.apply(String, t);
                                for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += C));
                                return n
                            }(r)
                        }
                        e.Buffer = u, e.SlowBuffer = function(t) {
                            return +t != t && (t = 0), u.alloc(+t)
                        }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== window.TYPED_ARRAY_SUPPORT ? window.TYPED_ARRAY_SUPPORT : function() {
                            try {
                                var t = new Uint8Array(1);
                                return t.__proto__ = {
                                    __proto__: Uint8Array.prototype,
                                    foo: function() {
                                        return 42
                                    }
                                }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                            } catch (t) {
                                return !1
                            }
                        }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function(t) {
                            return t.__proto__ = u.prototype, t
                        }, u.from = function(t, e, n) {
                            return c(null, t, e, n)
                        }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                            value: null,
                            configurable: !0
                        })), u.alloc = function(t, e, n) {
                            return function(t, e, n, r) {
                                return l(e), e <= 0 ? a(t, e) : void 0 !== n ? "string" == typeof r ? a(t, e).fill(n, r) : a(t, e).fill(n) : a(t, e)
                            }(null, t, e, n)
                        }, u.allocUnsafe = function(t) {
                            return f(null, t)
                        }, u.allocUnsafeSlow = function(t) {
                            return f(null, t)
                        }, u.isBuffer = function(t) {
                            return !(null == t || !t._isBuffer)
                        }, u.compare = function(t, e) {
                            if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                            if (t === e) return 0;
                            for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
                                if (t[i] !== e[i]) {
                                    n = t[i], r = e[i];
                                    break
                                }
                            return n < r ? -1 : r < n ? 1 : 0
                        }, u.isEncoding = function(t) {
                            switch (String(t).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, u.concat = function(t, e) {
                            if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                            if (0 === t.length) return u.alloc(0);
                            var n;
                            if (void 0 === e)
                                for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                            var r = u.allocUnsafe(e),
                                i = 0;
                            for (n = 0; n < t.length; ++n) {
                                var s = t[n];
                                if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                                s.copy(r, i), i += s.length
                            }
                            return r
                        }, u.byteLength = p, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                            var t = this.length;
                            if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
                            return this
                        }, u.prototype.swap32 = function() {
                            var t = this.length;
                            if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                            for (var e = 0; e < t; e += 4) y(this, e, e + 3), y(this, e + 1, e + 2);
                            return this
                        }, u.prototype.swap64 = function() {
                            var t = this.length;
                            if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                            for (var e = 0; e < t; e += 8) y(this, e, e + 7), y(this, e + 1, e + 6), y(this, e + 2, e + 5), y(this, e + 3, e + 4);
                            return this
                        }, u.prototype.toString = function() {
                            var t = 0 | this.length;
                            return 0 === t ? "" : 0 === arguments.length ? T(this, 0, t) : g.apply(this, arguments)
                        }, u.prototype.equals = function(t) {
                            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                            return this === t || 0 === u.compare(this, t)
                        }, u.prototype.inspect = function() {
                            var t = "",
                                n = e.INSPECT_MAX_BYTES;
                            return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                        }, u.prototype.compare = function(t, e, n, r, i) {
                            if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                            if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                            if (r >= i && e >= n) return 0;
                            if (r >= i) return -1;
                            if (e >= n) return 1;
                            if (this === t) return 0;
                            for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = t.slice(e, n), f = 0; f < a; ++f)
                                if (c[f] !== l[f]) {
                                    o = c[f], s = l[f];
                                    break
                                }
                            return o < s ? -1 : s < o ? 1 : 0
                        }, u.prototype.includes = function(t, e, n) {
                            return -1 !== this.indexOf(t, e, n)
                        }, u.prototype.indexOf = function(t, e, n) {
                            return v(this, t, e, n, !0)
                        }, u.prototype.lastIndexOf = function(t, e, n) {
                            return v(this, t, e, n, !1)
                        }, u.prototype.write = function(t, e, n, r) {
                            if (void 0 === e) r = "utf8", n = this.length, e = 0;
                            else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                            else {
                                if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                            }
                            var i = this.length - e;
                            if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                            r || (r = "utf8");
                            for (var o = !1;;) switch (r) {
                                case "hex":
                                    return b(this, t, e, n);
                                case "utf8":
                                case "utf-8":
                                    return w(this, t, e, n);
                                case "ascii":
                                    return _(this, t, e, n);
                                case "latin1":
                                case "binary":
                                    return x(this, t, e, n);
                                case "base64":
                                    return k(this, t, e, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return S(this, t, e, n);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + r);
                                    r = ("" + r).toLowerCase(), o = !0
                            }
                        }, u.prototype.toJSON = function() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        };
                        var C = 4096;

                        function A(t, e, n) {
                            var r = "";
                            n = Math.min(t.length, n);
                            for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                            return r
                        }

                        function O(t, e, n) {
                            var r = "";
                            n = Math.min(t.length, n);
                            for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                            return r
                        }

                        function N(t, e, n) {
                            var r, i = t.length;
                            (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
                            for (var o = "", s = e; s < n; ++s) o += (r = t[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
                            return o
                        }

                        function L(t, e, n) {
                            for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                            return i
                        }

                        function R(t, e, n) {
                            if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                            if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                        }

                        function P(t, e, n, r, i, o) {
                            if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                            if (n + r > t.length) throw new RangeError("Index out of range")
                        }

                        function j(t, e, n, r) {
                            e < 0 && (e = 65535 + e + 1);
                            for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                        }

                        function M(t, e, n, r) {
                            e < 0 && (e = 4294967295 + e + 1);
                            for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
                        }

                        function D(t, e, n, r, i, o) {
                            if (n + r > t.length) throw new RangeError("Index out of range");
                            if (n < 0) throw new RangeError("Index out of range")
                        }

                        function B(t, e, n, r, o) {
                            return o || D(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
                        }

                        function I(t, e, n, r, o) {
                            return o || D(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
                        }
                        u.prototype.slice = function(t, e) {
                            var n, r = this.length;
                            if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
                            else {
                                var i = e - t;
                                n = new u(i, void 0);
                                for (var o = 0; o < i; ++o) n[o] = this[o + t]
                            }
                            return n
                        }, u.prototype.readUIntLE = function(t, e, n) {
                            t |= 0, e |= 0, n || R(t, e, this.length);
                            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                            return r
                        }, u.prototype.readUIntBE = function(t, e, n) {
                            t |= 0, e |= 0, n || R(t, e, this.length);
                            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                            return r
                        }, u.prototype.readUInt8 = function(t, e) {
                            return e || R(t, 1, this.length), this[t]
                        }, u.prototype.readUInt16LE = function(t, e) {
                            return e || R(t, 2, this.length), this[t] | this[t + 1] << 8
                        }, u.prototype.readUInt16BE = function(t, e) {
                            return e || R(t, 2, this.length), this[t] << 8 | this[t + 1]
                        }, u.prototype.readUInt32LE = function(t, e) {
                            return e || R(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                        }, u.prototype.readUInt32BE = function(t, e) {
                            return e || R(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                        }, u.prototype.readIntLE = function(t, e, n) {
                            t |= 0, e |= 0, n || R(t, e, this.length);
                            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
                        }, u.prototype.readIntBE = function(t, e, n) {
                            t |= 0, e |= 0, n || R(t, e, this.length);
                            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                        }, u.prototype.readInt8 = function(t, e) {
                            return e || R(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                        }, u.prototype.readInt16LE = function(t, e) {
                            e || R(t, 2, this.length);
                            var n = this[t] | this[t + 1] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }, u.prototype.readInt16BE = function(t, e) {
                            e || R(t, 2, this.length);
                            var n = this[t + 1] | this[t] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }, u.prototype.readInt32LE = function(t, e) {
                            return e || R(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                        }, u.prototype.readInt32BE = function(t, e) {
                            return e || R(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                        }, u.prototype.readFloatLE = function(t, e) {
                            return e || R(t, 4, this.length), i.read(this, t, !0, 23, 4)
                        }, u.prototype.readFloatBE = function(t, e) {
                            return e || R(t, 4, this.length), i.read(this, t, !1, 23, 4)
                        }, u.prototype.readDoubleLE = function(t, e) {
                            return e || R(t, 8, this.length), i.read(this, t, !0, 52, 8)
                        }, u.prototype.readDoubleBE = function(t, e) {
                            return e || R(t, 8, this.length), i.read(this, t, !1, 52, 8)
                        }, u.prototype.writeUIntLE = function(t, e, n, r) {
                            t = +t, e |= 0, n |= 0, r || P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                            var i = 1,
                                o = 0;
                            for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                            return e + n
                        }, u.prototype.writeUIntBE = function(t, e, n, r) {
                            t = +t, e |= 0, n |= 0, r || P(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                            var i = n - 1,
                                o = 1;
                            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                            return e + n
                        }, u.prototype.writeUInt8 = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                        }, u.prototype.writeUInt16LE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
                        }, u.prototype.writeUInt16BE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
                        }, u.prototype.writeUInt32LE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : M(this, t, e, !0), e + 4
                        }, u.prototype.writeUInt32BE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4
                        }, u.prototype.writeIntLE = function(t, e, n, r) {
                            if (t = +t, e |= 0, !r) {
                                var i = Math.pow(2, 8 * n - 1);
                                P(this, t, e, n, i - 1, -i)
                            }
                            var o = 0,
                                s = 1,
                                a = 0;
                            for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                            return e + n
                        }, u.prototype.writeIntBE = function(t, e, n, r) {
                            if (t = +t, e |= 0, !r) {
                                var i = Math.pow(2, 8 * n - 1);
                                P(this, t, e, n, i - 1, -i)
                            }
                            var o = n - 1,
                                s = 1,
                                a = 0;
                            for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                            return e + n
                        }, u.prototype.writeInt8 = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                        }, u.prototype.writeInt16LE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
                        }, u.prototype.writeInt16BE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
                        }, u.prototype.writeInt32LE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : M(this, t, e, !0), e + 4
                        }, u.prototype.writeInt32BE = function(t, e, n) {
                            return t = +t, e |= 0, n || P(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : M(this, t, e, !1), e + 4
                        }, u.prototype.writeFloatLE = function(t, e, n) {
                            return B(this, t, e, !0, n)
                        }, u.prototype.writeFloatBE = function(t, e, n) {
                            return B(this, t, e, !1, n)
                        }, u.prototype.writeDoubleLE = function(t, e, n) {
                            return I(this, t, e, !0, n)
                        }, u.prototype.writeDoubleBE = function(t, e, n) {
                            return I(this, t, e, !1, n)
                        }, u.prototype.copy = function(t, e, n, r) {
                            if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                            if (0 === t.length || 0 === this.length) return 0;
                            if (e < 0) throw new RangeError("targetStart out of bounds");
                            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                            if (r < 0) throw new RangeError("sourceEnd out of bounds");
                            r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                            var i, o = r - n;
                            if (this === t && n < e && e < r)
                                for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                            else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                                for (i = 0; i < o; ++i) t[i + e] = this[i + n];
                            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                            return o
                        }, u.prototype.fill = function(t, e, n, r) {
                            if ("string" == typeof t) {
                                if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                                    var i = t.charCodeAt(0);
                                    i < 256 && (t = i)
                                }
                                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                                if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                            } else "number" == typeof t && (t &= 255);
                            if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                            if (n <= e) return this;
                            var o;
                            if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                                for (o = e; o < n; ++o) this[o] = t;
                            else {
                                var s = u.isBuffer(t) ? t : U(new u(t, r).toString()),
                                    a = s.length;
                                for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
                            }
                            return this
                        };
                        var q = /[^+\/0-9A-Za-z-_]/g;

                        function U(t, e) {
                            var n;
                            e = e || 1 / 0;
                            for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                                if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                                    if (!i) {
                                        if (n > 56319) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (s + 1 === r) {
                                            (e -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        i = n;
                                        continue
                                    }
                                    if (n < 56320) {
                                        (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                                        continue
                                    }
                                    n = 65536 + (i - 55296 << 10 | n - 56320)
                                } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                                if (i = null, n < 128) {
                                    if ((e -= 1) < 0) break;
                                    o.push(n)
                                } else if (n < 2048) {
                                    if ((e -= 2) < 0) break;
                                    o.push(n >> 6 | 192, 63 & n | 128)
                                } else if (n < 65536) {
                                    if ((e -= 3) < 0) break;
                                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                } else {
                                    if (!(n < 1114112)) throw new Error("Invalid code point");
                                    if ((e -= 4) < 0) break;
                                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                }
                            }
                            return o
                        }

                        function H(t) {
                            return r.toByteArray(function(t) {
                                if ((t = function(t) {
                                        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                                    }(t).replace(q, "")).length < 2) return "";
                                for (; t.length % 4 != 0;) t += "=";
                                return t
                            }(t))
                        }

                        function F(t, e, n, r) {
                            for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                            return i
                        }
                    }, function(t, e) {
                        "use strict";
                        e.byteLength = function(t) {
                            var e = u(t),
                                n = e[0],
                                r = e[1];
                            return 3 * (n + r) / 4 - r
                        }, e.toByteArray = function(t) {
                            for (var e, n = u(t), o = n[0], s = n[1], a = new i(function(t, e, n) {
                                    return 3 * (e + n) / 4 - n
                                }(0, o, s)), c = 0, l = s > 0 ? o - 4 : o, f = 0; f < l; f += 4) e = r[t.charCodeAt(f)] << 18 | r[t.charCodeAt(f + 1)] << 12 | r[t.charCodeAt(f + 2)] << 6 | r[t.charCodeAt(f + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = 255 & e;
                            return 2 === s && (e = r[t.charCodeAt(f)] << 2 | r[t.charCodeAt(f + 1)] >> 4, a[c++] = 255 & e), 1 === s && (e = r[t.charCodeAt(f)] << 10 | r[t.charCodeAt(f + 1)] << 4 | r[t.charCodeAt(f + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = 255 & e), a
                        }, e.fromByteArray = function(t) {
                            for (var e, r = t.length, i = r % 3, o = [], s = 16383, a = 0, u = r - i; a < u; a += s) o.push(c(t, a, a + s > u ? u : a + s));
                            return 1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), o.join("")
                        };
                        for (var n = [], r = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) n[s] = o[s], r[o.charCodeAt(s)] = s;

                        function u(t) {
                            var e = t.length;
                            if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                            var n = t.indexOf("=");
                            return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
                        }

                        function c(t, e, r) {
                            for (var i, o, s = [], a = e; a < r; a += 3) i = (t[a] << 16 & 16711680) + (t[a + 1] << 8 & 65280) + (255 & t[a + 2]), s.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                            return s.join("")
                        }
                        r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
                    }, function(t, e) {
                        e.read = function(t, e, n, r, i) {
                            var o, s, a = 8 * i - r - 1,
                                u = (1 << a) - 1,
                                c = u >> 1,
                                l = -7,
                                f = n ? i - 1 : 0,
                                h = n ? -1 : 1,
                                d = t[e + f];
                            for (f += h, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += h, l -= 8);
                            for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + f], f += h, l -= 8);
                            if (0 === o) o = 1 - c;
                            else {
                                if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                                s += Math.pow(2, r), o -= c
                            }
                            return (d ? -1 : 1) * s * Math.pow(2, o - r)
                        }, e.write = function(t, e, n, r, i, o) {
                            var s, a, u, c = 8 * o - i - 1,
                                l = (1 << c) - 1,
                                f = l >> 1,
                                h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                d = r ? 0 : o - 1,
                                p = r ? 1 : -1,
                                g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                            for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + d] = 255 & a, d += p, a /= 256, i -= 8);
                            for (s = s << i | a, c += i; c > 0; t[n + d] = 255 & s, d += p, s /= 256, c -= 8);
                            t[n + d - p] |= 128 * g
                        }
                    }, function(t, e) {
                        var n = {}.toString;
                        t.exports = Array.isArray || function(t) {
                            return "[object Array]" == n.call(t)
                        }
                    }, function(t, e, n) {
                        "use strict";
                        var r = this && this.__extends || function(t, e) {
                                for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
                            },
                            i = n(24),
                            o = n(12),
                            s = n(8),
                            a = n(9),
                            u = n(2),
                            c = function(t) {
                                function e(e, n) {
                                    var r = this;
                                    t.call(this), this.key = e, this.options = n || {}, this.state = "initialized", this.connection = null, this.usingTLS = !!n.useTLS, this.timeline = this.options.timeline, this.errorCallbacks = this.buildErrorCallbacks(), this.connectionCallbacks = this.buildConnectionCallbacks(this.errorCallbacks), this.handshakeCallbacks = this.buildHandshakeCallbacks(this.errorCallbacks);
                                    var i = u.default.getNetwork();
                                    i.bind("online", (function() {
                                        r.timeline.info({
                                            netinfo: "online"
                                        }), "connecting" !== r.state && "unavailable" !== r.state || r.retryIn(0)
                                    })), i.bind("offline", (function() {
                                        r.timeline.info({
                                            netinfo: "offline"
                                        }), r.connection && r.sendActivityCheck()
                                    })), this.updateStrategy()
                                }
                                return r(e, t), e.prototype.connect = function() {
                                    this.connection || this.runner || (this.strategy.isSupported() ? (this.updateState("connecting"), this.startConnecting(), this.setUnavailableTimer()) : this.updateState("failed"))
                                }, e.prototype.send = function(t) {
                                    return !!this.connection && this.connection.send(t)
                                }, e.prototype.send_event = function(t, e, n) {
                                    return !!this.connection && this.connection.send_event(t, e, n)
                                }, e.prototype.disconnect = function() {
                                    this.disconnectInternally(), this.updateState("disconnected")
                                }, e.prototype.isUsingTLS = function() {
                                    return this.usingTLS
                                }, e.prototype.startConnecting = function() {
                                    var t = this,
                                        e = function(n, r) {
                                            n ? t.runner = t.strategy.connect(0, e) : "error" === r.action ? (t.emit("error", {
                                                type: "HandshakeError",
                                                error: r.error
                                            }), t.timeline.error({
                                                handshakeError: r.error
                                            })) : (t.abortConnecting(), t.handshakeCallbacks[r.action](r))
                                        };
                                    this.runner = this.strategy.connect(0, e)
                                }, e.prototype.abortConnecting = function() {
                                    this.runner && (this.runner.abort(), this.runner = null)
                                }, e.prototype.disconnectInternally = function() {
                                    this.abortConnecting(), this.clearRetryTimer(), this.clearUnavailableTimer(), this.connection && this.abandonConnection().close()
                                }, e.prototype.updateStrategy = function() {
                                    this.strategy = this.options.getStrategy({
                                        key: this.key,
                                        timeline: this.timeline,
                                        useTLS: this.usingTLS
                                    })
                                }, e.prototype.retryIn = function(t) {
                                    var e = this;
                                    this.timeline.info({
                                        action: "retry",
                                        delay: t
                                    }), t > 0 && this.emit("connecting_in", Math.round(t / 1e3)), this.retryTimer = new o.OneOffTimer(t || 0, (function() {
                                        e.disconnectInternally(), e.connect()
                                    }))
                                }, e.prototype.clearRetryTimer = function() {
                                    this.retryTimer && (this.retryTimer.ensureAborted(), this.retryTimer = null)
                                }, e.prototype.setUnavailableTimer = function() {
                                    var t = this;
                                    this.unavailableTimer = new o.OneOffTimer(this.options.unavailableTimeout, (function() {
                                        t.updateState("unavailable")
                                    }))
                                }, e.prototype.clearUnavailableTimer = function() {
                                    this.unavailableTimer && this.unavailableTimer.ensureAborted()
                                }, e.prototype.sendActivityCheck = function() {
                                    var t = this;
                                    this.stopActivityCheck(), this.connection.ping(), this.activityTimer = new o.OneOffTimer(this.options.pongTimeout, (function() {
                                        t.timeline.error({
                                            pong_timed_out: t.options.pongTimeout
                                        }), t.retryIn(0)
                                    }))
                                }, e.prototype.resetActivityCheck = function() {
                                    var t = this;
                                    this.stopActivityCheck(), this.connection && !this.connection.handlesActivityChecks() && (this.activityTimer = new o.OneOffTimer(this.activityTimeout, (function() {
                                        t.sendActivityCheck()
                                    })))
                                }, e.prototype.stopActivityCheck = function() {
                                    this.activityTimer && this.activityTimer.ensureAborted()
                                }, e.prototype.buildConnectionCallbacks = function(t) {
                                    var e = this;
                                    return a.extend({}, t, {
                                        message: function(t) {
                                            e.resetActivityCheck(), e.emit("message", t)
                                        },
                                        ping: function() {
                                            e.send_event("pusher:pong", {})
                                        },
                                        activity: function() {
                                            e.resetActivityCheck()
                                        },
                                        error: function(t) {
                                            e.emit("error", {
                                                type: "WebSocketError",
                                                error: t
                                            })
                                        },
                                        closed: function() {
                                            e.abandonConnection(), e.shouldRetry() && e.retryIn(1e3)
                                        }
                                    })
                                }, e.prototype.buildHandshakeCallbacks = function(t) {
                                    var e = this;
                                    return a.extend({}, t, {
                                        connected: function(t) {
                                            e.activityTimeout = Math.min(e.options.activityTimeout, t.activityTimeout, t.connection.activityTimeout || 1 / 0), e.clearUnavailableTimer(), e.setConnection(t.connection), e.socket_id = e.connection.id, e.updateState("connected", {
                                                socket_id: e.socket_id
                                            })
                                        }
                                    })
                                }, e.prototype.buildErrorCallbacks = function() {
                                    var t = this,
                                        e = function(e) {
                                            return function(n) {
                                                n.error && t.emit("error", {
                                                    type: "WebSocketError",
                                                    error: n.error
                                                }), e(n)
                                            }
                                        };
                                    return {
                                        tls_only: e((function() {
                                            t.usingTLS = !0, t.updateStrategy(), t.retryIn(0)
                                        })),
                                        refused: e((function() {
                                            t.disconnect()
                                        })),
                                        backoff: e((function() {
                                            t.retryIn(1e3)
                                        })),
                                        retry: e((function() {
                                            t.retryIn(0)
                                        }))
                                    }
                                }, e.prototype.setConnection = function(t) {
                                    for (var e in this.connection = t, this.connectionCallbacks) this.connection.bind(e, this.connectionCallbacks[e]);
                                    this.resetActivityCheck()
                                }, e.prototype.abandonConnection = function() {
                                    if (this.connection) {
                                        for (var t in this.stopActivityCheck(), this.connectionCallbacks) this.connection.unbind(t, this.connectionCallbacks[t]);
                                        var e = this.connection;
                                        return this.connection = null, e
                                    }
                                }, e.prototype.updateState = function(t, e) {
                                    var n = this.state;
                                    if (this.state = t, n !== t) {
                                        var r = t;
                                        "connected" === r && (r += " with new socket ID " + e.socket_id), s.default.debug("State changed", n + " -> " + r), this.timeline.info({
                                            state: t,
                                            params: e
                                        }), this.emit("state_change", {
                                            previous: n,
                                            current: t
                                        }), this.emit(t, e)
                                    }
                                }, e.prototype.shouldRetry = function() {
                                    return "connecting" === this.state || "connected" === this.state
                                }, e
                            }(i.default);
                        e.__esModule = !0, e.default = c
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(43),
                            o = n(31),
                            s = function() {
                                function t() {
                                    this.channels = {}
                                }
                                return t.prototype.add = function(t, e) {
                                    return this.channels[t] || (this.channels[t] = function(t, e) {
                                        if (0 === t.indexOf("private-encrypted-")) {
                                            if ("ReactNative" == navigator.product) {
                                                var n = "Encrypted channels are not yet supported when using React Native builds.";
                                                throw new o.UnsupportedFeature(n)
                                            }
                                            return i.default.createEncryptedChannel(t, e)
                                        }
                                        return 0 === t.indexOf("private-") ? i.default.createPrivateChannel(t, e) : 0 === t.indexOf("presence-") ? i.default.createPresenceChannel(t, e) : i.default.createChannel(t, e)
                                    }(t, e)), this.channels[t]
                                }, t.prototype.all = function() {
                                    return r.values(this.channels)
                                }, t.prototype.find = function(t) {
                                    return this.channels[t]
                                }, t.prototype.remove = function(t) {
                                    var e = this.channels[t];
                                    return delete this.channels[t], e
                                }, t.prototype.disconnect = function() {
                                    r.objectApply(this.channels, (function(t) {
                                        t.disconnect()
                                    }))
                                }, t
                            }();
                        e.__esModule = !0, e.default = s
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(43),
                            i = n(11),
                            o = n(31),
                            s = n(9),
                            a = function() {
                                function t(t, e, n, r) {
                                    this.name = t, this.priority = e, this.transport = n, this.options = r || {}
                                }
                                return t.prototype.isSupported = function() {
                                    return this.transport.isSupported({
                                        useTLS: this.options.useTLS
                                    })
                                }, t.prototype.connect = function(t, e) {
                                    var n = this;
                                    if (!this.isSupported()) return u(new o.UnsupportedStrategy, e);
                                    if (this.priority < t) return u(new o.TransportPriorityTooLow, e);
                                    var i = !1,
                                        a = this.transport.createConnection(this.name, this.priority, this.options.key, this.options),
                                        c = null,
                                        l = function() {
                                            a.unbind("initialized", l), a.connect()
                                        },
                                        f = function() {
                                            c = r.default.createHandshake(a, (function(t) {
                                                i = !0, p(), e(null, t)
                                            }))
                                        },
                                        h = function(t) {
                                            p(), e(t)
                                        },
                                        d = function() {
                                            var t;
                                            p(), t = s.safeJSONStringify(a), e(new o.TransportClosed(t))
                                        },
                                        p = function() {
                                            a.unbind("initialized", l), a.unbind("open", f), a.unbind("error", h), a.unbind("closed", d)
                                        };
                                    return a.bind("initialized", l), a.bind("open", f), a.bind("error", h), a.bind("closed", d), a.initialize(), {
                                        abort: function() {
                                            i || (p(), c ? c.close() : a.close())
                                        },
                                        forceMinPriority: function(t) {
                                            i || n.priority < t && (c ? c.close() : a.close())
                                        }
                                    }
                                }, t
                            }();

                        function u(t, e) {
                            return i.default.defer((function() {
                                e(t)
                            })), {
                                abort: function() {},
                                forceMinPriority: function() {}
                            }
                        }
                        e.__esModule = !0, e.default = a
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(11),
                            o = n(12),
                            s = function() {
                                function t(t, e) {
                                    this.strategies = t, this.loop = Boolean(e.loop), this.failFast = Boolean(e.failFast), this.timeout = e.timeout, this.timeoutLimit = e.timeoutLimit
                                }
                                return t.prototype.isSupported = function() {
                                    return r.any(this.strategies, i.default.method("isSupported"))
                                }, t.prototype.connect = function(t, e) {
                                    var n = this,
                                        r = this.strategies,
                                        i = 0,
                                        o = this.timeout,
                                        s = null,
                                        a = function(u, c) {
                                            c ? e(null, c) : (i += 1, n.loop && (i %= r.length), i < r.length ? (o && (o *= 2, n.timeoutLimit && (o = Math.min(o, n.timeoutLimit))), s = n.tryStrategy(r[i], t, {
                                                timeout: o,
                                                failFast: n.failFast
                                            }, a)) : e(!0))
                                        };
                                    return s = this.tryStrategy(r[i], t, {
                                        timeout: o,
                                        failFast: this.failFast
                                    }, a), {
                                        abort: function() {
                                            s.abort()
                                        },
                                        forceMinPriority: function(e) {
                                            t = e, s && s.forceMinPriority(e)
                                        }
                                    }
                                }, t.prototype.tryStrategy = function(t, e, n, r) {
                                    var i = null,
                                        s = null;
                                    return n.timeout > 0 && (i = new o.OneOffTimer(n.timeout, (function() {
                                        s.abort(), r(!0)
                                    }))), s = t.connect(e, (function(t, e) {
                                        t && i && i.isRunning() && !n.failFast || (i && i.ensureAborted(), r(t, e))
                                    })), {
                                        abort: function() {
                                            i && i.ensureAborted(), s.abort()
                                        },
                                        forceMinPriority: function(t) {
                                            s.forceMinPriority(t)
                                        }
                                    }
                                }, t
                            }();
                        e.__esModule = !0, e.default = s
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(9),
                            i = n(11),
                            o = function() {
                                function t(t) {
                                    this.strategies = t
                                }
                                return t.prototype.isSupported = function() {
                                    return r.any(this.strategies, i.default.method("isSupported"))
                                }, t.prototype.connect = function(t, e) {
                                    return function(t, e, n) {
                                        var i = r.map(t, (function(t, r, i, o) {
                                            return t.connect(e, n(r, o))
                                        }));
                                        return {
                                            abort: function() {
                                                r.apply(i, s)
                                            },
                                            forceMinPriority: function(t) {
                                                r.apply(i, (function(e) {
                                                    e.forceMinPriority(t)
                                                }))
                                            }
                                        }
                                    }(this.strategies, t, (function(t, n) {
                                        return function(i, o) {
                                            n[t].error = i, i ? function(t) {
                                                return r.all(t, (function(t) {
                                                    return Boolean(t.error)
                                                }))
                                            }(n) && e(!0) : (r.apply(n, (function(t) {
                                                t.forceMinPriority(o.transport.priority)
                                            })), e(null, o))
                                        }
                                    }))
                                }, t
                            }();

                        function s(t) {
                            t.error || t.aborted || (t.abort(), t.aborted = !0)
                        }
                        e.__esModule = !0, e.default = o
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(11),
                            i = n(2),
                            o = n(65),
                            s = n(9),
                            a = function() {
                                function t(t, e, n) {
                                    this.strategy = t, this.transports = e, this.ttl = n.ttl || 18e5, this.usingTLS = n.useTLS, this.timeline = n.timeline
                                }
                                return t.prototype.isSupported = function() {
                                    return this.strategy.isSupported()
                                }, t.prototype.connect = function(t, e) {
                                    var n = this.usingTLS,
                                        a = function(t) {
                                            var e = i.default.getLocalStorage();
                                            if (e) try {
                                                var n = e[u(t)];
                                                if (n) return JSON.parse(n)
                                            } catch (e) {
                                                c(t)
                                            }
                                            return null
                                        }(n),
                                        l = [this.strategy];
                                    if (a && a.timestamp + this.ttl >= r.default.now()) {
                                        var f = this.transports[a.transport];
                                        f && (this.timeline.info({
                                            cached: !0,
                                            transport: a.transport,
                                            latency: a.latency
                                        }), l.push(new o.default([f], {
                                            timeout: 2 * a.latency + 1e3,
                                            failFast: !0
                                        })))
                                    }
                                    var h = r.default.now(),
                                        d = l.pop().connect(t, (function o(a, f) {
                                            a ? (c(n), l.length > 0 ? (h = r.default.now(), d = l.pop().connect(t, o)) : e(a)) : (function(t, e, n) {
                                                var o = i.default.getLocalStorage();
                                                if (o) try {
                                                    o[u(t)] = s.safeJSONStringify({
                                                        timestamp: r.default.now(),
                                                        transport: e,
                                                        latency: n
                                                    })
                                                } catch (t) {}
                                            }(n, f.transport.name, r.default.now() - h), e(null, f))
                                        }));
                                    return {
                                        abort: function() {
                                            d.abort()
                                        },
                                        forceMinPriority: function(e) {
                                            t = e, d && d.forceMinPriority(e)
                                        }
                                    }
                                }, t
                            }();

                        function u(t) {
                            return "pusherTransport" + (t ? "TLS" : "NonTLS")
                        }

                        function c(t) {
                            var e = i.default.getLocalStorage();
                            if (e) try {
                                delete e[u(t)]
                            } catch (t) {}
                        }
                        e.__esModule = !0, e.default = a
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(12),
                            i = function() {
                                function t(t, e) {
                                    var n = e.delay;
                                    this.strategy = t, this.options = {
                                        delay: n
                                    }
                                }
                                return t.prototype.isSupported = function() {
                                    return this.strategy.isSupported()
                                }, t.prototype.connect = function(t, e) {
                                    var n, i = this.strategy,
                                        o = new r.OneOffTimer(this.options.delay, (function() {
                                            n = i.connect(t, e)
                                        }));
                                    return {
                                        abort: function() {
                                            o.ensureAborted(), n && n.abort()
                                        },
                                        forceMinPriority: function(e) {
                                            t = e, n && n.forceMinPriority(e)
                                        }
                                    }
                                }, t
                            }();
                        e.__esModule = !0, e.default = i
                    }, function(t, e) {
                        "use strict";
                        var n = function() {
                            function t(t, e, n) {
                                this.test = t, this.trueBranch = e, this.falseBranch = n
                            }
                            return t.prototype.isSupported = function() {
                                return (this.test() ? this.trueBranch : this.falseBranch).isSupported()
                            }, t.prototype.connect = function(t, e) {
                                return (this.test() ? this.trueBranch : this.falseBranch).connect(t, e)
                            }, t
                        }();
                        e.__esModule = !0, e.default = n
                    }, function(t, e) {
                        "use strict";
                        var n = function() {
                            function t(t) {
                                this.strategy = t
                            }
                            return t.prototype.isSupported = function() {
                                return this.strategy.isSupported()
                            }, t.prototype.connect = function(t, e) {
                                var n = this.strategy.connect(t, (function(t, r) {
                                    r && n.abort(), e(t, r)
                                }));
                                return n
                            }, t
                        }();
                        e.__esModule = !0, e.default = n
                    }, function(t, e, n) {
                        "use strict";
                        var r = n(5);
                        e.getGlobalConfig = function() {
                            return {
                                wsHost: r.default.host,
                                wsPort: r.default.ws_port,
                                wssPort: r.default.wss_port,
                                wsPath: r.default.ws_path,
                                httpHost: r.default.sockjs_host,
                                httpPort: r.default.sockjs_http_port,
                                httpsPort: r.default.sockjs_https_port,
                                httpPath: r.default.sockjs_path,
                                statsHost: r.default.stats_host,
                                authEndpoint: r.default.channel_auth_endpoint,
                                authTransport: r.default.channel_auth_transport,
                                activity_timeout: r.default.activity_timeout,
                                pong_timeout: r.default.pong_timeout,
                                unavailable_timeout: r.default.unavailable_timeout
                            }
                        }, e.getClusterConfig = function(t) {
                            return {
                                wsHost: "ws-" + t + ".pusher.com",
                                httpHost: "sockjs-" + t + ".pusher.com"
                            }
                        }
                    }])
                }, t.exports = e()
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.exports
    }
    window.Bugsnag = n(64061), window.Bugsnag.start({
        apiKey: "bfb8263dbe38ef60e4b32e270006604d"
    }), (() => {
        "use strict";

        function t(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function e(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function r(t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t
        }

        function i() {
            return (i = Object.assign || function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = arguments[e];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                }
                return t
            }).apply(this, arguments)
        }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    writable: !0,
                    configurable: !0
                }
            }), e && a(t, e)
        }

        function s(t) {
            return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                return t.__proto__ || Object.getPrototypeOf(t)
            })(t)
        }

        function a(t, e) {
            return (a = Object.setPrototypeOf || function(t, e) {
                return t.__proto__ = e, t
            })(t, e)
        }

        function u(t, e) {
            return !e || "object" != typeof e && "function" != typeof e ? function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }(t) : e
        }

        function c(t) {
            var e = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }();
            return function() {
                var n, r = s(t);
                if (e) {
                    var i = s(this).constructor;
                    n = Reflect.construct(r, arguments, i)
                } else n = r.apply(this, arguments);
                return u(this, n)
            }
        }
        var l = function() {
                function e(n) {
                    t(this, e), this._defaultOptions = {
                        auth: {
                            headers: {}
                        },
                        authEndpoint: "/broadcasting/auth",
                        broadcaster: "pusher",
                        csrfToken: null,
                        host: null,
                        key: null,
                        namespace: "App.Events"
                    }, this.setOptions(n), this.connect()
                }
                return r(e, [{
                    key: "setOptions",
                    value: function(t) {
                        return this.options = i(this._defaultOptions, t), this.csrfToken() && (this.options.auth.headers["X-CSRF-TOKEN"] = this.csrfToken()), t
                    }
                }, {
                    key: "csrfToken",
                    value: function() {
                        var t;
                        return "undefined" != typeof window && window.Laravel && window.Laravel.csrfToken ? window.Laravel.csrfToken : this.options.csrfToken ? this.options.csrfToken : "undefined" != typeof document && "function" == typeof document.querySelector && (t = document.querySelector('meta[name="csrf-token"]')) ? t.getAttribute("content") : null
                    }
                }]), e
            }(),
            f = function() {
                function e() {
                    t(this, e)
                }
                return r(e, [{
                    key: "listenForWhisper",
                    value: function(t, e) {
                        return this.listen(".client-" + t, e)
                    }
                }, {
                    key: "notification",
                    value: function(t) {
                        return this.listen(".Illuminate\\Notifications\\Events\\BroadcastNotificationCreated", t)
                    }
                }, {
                    key: "stopListeningForWhisper",
                    value: function(t, e) {
                        return this.stopListening(".client-" + t, e)
                    }
                }]), e
            }(),
            h = function() {
                function e(n) {
                    t(this, e), this.setNamespace(n)
                }
                return r(e, [{
                    key: "format",
                    value: function(t) {
                        return "." === t.charAt(0) || "\\" === t.charAt(0) ? t.substr(1) : (this.namespace && (t = this.namespace + "." + t), t.replace(/\./g, "\\"))
                    }
                }, {
                    key: "setNamespace",
                    value: function(t) {
                        this.namespace = t
                    }
                }]), e
            }(),
            d = function(e) {
                o(i, e);
                var n = c(i);

                function i(e, r, o) {
                    var s;
                    return t(this, i), (s = n.call(this)).name = r, s.pusher = e, s.options = o, s.eventFormatter = new h(s.options.namespace), s.subscribe(), s
                }
                return r(i, [{
                    key: "subscribe",
                    value: function() {
                        this.subscription = this.pusher.subscribe(this.name)
                    }
                }, {
                    key: "unsubscribe",
                    value: function() {
                        this.pusher.unsubscribe(this.name)
                    }
                }, {
                    key: "listen",
                    value: function(t, e) {
                        return this.on(this.eventFormatter.format(t), e), this
                    }
                }, {
                    key: "stopListening",
                    value: function(t, e) {
                        return e ? this.subscription.unbind(this.eventFormatter.format(t), e) : this.subscription.unbind(this.eventFormatter.format(t)), this
                    }
                }, {
                    key: "subscribed",
                    value: function(t) {
                        return this.on("pusher:subscription_succeeded", (function() {
                            t()
                        })), this
                    }
                }, {
                    key: "error",
                    value: function(t) {
                        return this.on("pusher:subscription_error", (function(e) {
                            t(e)
                        })), this
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        return this.subscription.bind(t, e), this
                    }
                }]), i
            }(f),
            p = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "whisper",
                    value: function(t, e) {
                        return this.pusher.channels.channels[this.name].trigger("client-".concat(t), e), this
                    }
                }]), i
            }(d),
            g = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "whisper",
                    value: function(t, e) {
                        return this.pusher.channels.channels[this.name].trigger("client-".concat(t), e), this
                    }
                }]), i
            }(d),
            y = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "here",
                    value: function(t) {
                        return this.on("pusher:subscription_succeeded", (function(e) {
                            t(Object.keys(e.members).map((function(t) {
                                return e.members[t]
                            })))
                        })), this
                    }
                }, {
                    key: "joining",
                    value: function(t) {
                        return this.on("pusher:member_added", (function(e) {
                            t(e.info)
                        })), this
                    }
                }, {
                    key: "leaving",
                    value: function(t) {
                        return this.on("pusher:member_removed", (function(e) {
                            t(e.info)
                        })), this
                    }
                }, {
                    key: "whisper",
                    value: function(t, e) {
                        return this.pusher.channels.channels[this.name].trigger("client-".concat(t), e), this
                    }
                }]), i
            }(d),
            v = function(e) {
                o(i, e);
                var n = c(i);

                function i(e, r, o) {
                    var s;
                    return t(this, i), (s = n.call(this)).events = {}, s.listeners = {}, s.name = r, s.socket = e, s.options = o, s.eventFormatter = new h(s.options.namespace), s.subscribe(), s
                }
                return r(i, [{
                    key: "subscribe",
                    value: function() {
                        this.socket.emit("subscribe", {
                            channel: this.name,
                            auth: this.options.auth || {}
                        })
                    }
                }, {
                    key: "unsubscribe",
                    value: function() {
                        this.unbind(), this.socket.emit("unsubscribe", {
                            channel: this.name,
                            auth: this.options.auth || {}
                        })
                    }
                }, {
                    key: "listen",
                    value: function(t, e) {
                        return this.on(this.eventFormatter.format(t), e), this
                    }
                }, {
                    key: "stopListening",
                    value: function(t, e) {
                        return this.unbindEvent(this.eventFormatter.format(t), e), this
                    }
                }, {
                    key: "subscribed",
                    value: function(t) {
                        return this.on("connect", (function(e) {
                            t(e)
                        })), this
                    }
                }, {
                    key: "error",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        var n = this;
                        return this.listeners[t] = this.listeners[t] || [], this.events[t] || (this.events[t] = function(e, r) {
                            n.name === e && n.listeners[t] && n.listeners[t].forEach((function(t) {
                                return t(r)
                            }))
                        }, this.socket.on(t, this.events[t])), this.listeners[t].push(e), this
                    }
                }, {
                    key: "unbind",
                    value: function() {
                        var t = this;
                        Object.keys(this.events).forEach((function(e) {
                            t.unbindEvent(e)
                        }))
                    }
                }, {
                    key: "unbindEvent",
                    value: function(t, e) {
                        this.listeners[t] = this.listeners[t] || [], e && (this.listeners[t] = this.listeners[t].filter((function(t) {
                            return t !== e
                        }))), e && 0 !== this.listeners[t].length || (this.events[t] && (this.socket.removeListener(t, this.events[t]), delete this.events[t]), delete this.listeners[t])
                    }
                }]), i
            }(f),
            m = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "whisper",
                    value: function(t, e) {
                        return this.socket.emit("client event", {
                            channel: this.name,
                            event: "client-".concat(t),
                            data: e
                        }), this
                    }
                }]), i
            }(v),
            b = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "here",
                    value: function(t) {
                        return this.on("presence:subscribed", (function(e) {
                            t(e.map((function(t) {
                                return t.user_info
                            })))
                        })), this
                    }
                }, {
                    key: "joining",
                    value: function(t) {
                        return this.on("presence:joining", (function(e) {
                            return t(e.user_info)
                        })), this
                    }
                }, {
                    key: "leaving",
                    value: function(t) {
                        return this.on("presence:leaving", (function(e) {
                            return t(e.user_info)
                        })), this
                    }
                }]), i
            }(m),
            w = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "subscribe",
                    value: function() {}
                }, {
                    key: "unsubscribe",
                    value: function() {}
                }, {
                    key: "listen",
                    value: function(t, e) {
                        return this
                    }
                }, {
                    key: "stopListening",
                    value: function(t, e) {
                        return this
                    }
                }, {
                    key: "subscribed",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "error",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "on",
                    value: function(t, e) {
                        return this
                    }
                }]), i
            }(f),
            _ = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "whisper",
                    value: function(t, e) {
                        return this
                    }
                }]), i
            }(w),
            x = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    return t(this, i), n.apply(this, arguments)
                }
                return r(i, [{
                    key: "here",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "joining",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "leaving",
                    value: function(t) {
                        return this
                    }
                }, {
                    key: "whisper",
                    value: function(t, e) {
                        return this
                    }
                }]), i
            }(w),
            k = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    var e;
                    return t(this, i), (e = n.apply(this, arguments)).channels = {}, e
                }
                return r(i, [{
                    key: "connect",
                    value: function() {
                        void 0 !== this.options.client ? this.pusher = this.options.client : this.pusher = new Pusher(this.options.key, this.options)
                    }
                }, {
                    key: "listen",
                    value: function(t, e, n) {
                        return this.channel(t).listen(e, n)
                    }
                }, {
                    key: "channel",
                    value: function(t) {
                        return this.channels[t] || (this.channels[t] = new d(this.pusher, t, this.options)), this.channels[t]
                    }
                }, {
                    key: "privateChannel",
                    value: function(t) {
                        return this.channels["private-" + t] || (this.channels["private-" + t] = new p(this.pusher, "private-" + t, this.options)), this.channels["private-" + t]
                    }
                }, {
                    key: "encryptedPrivateChannel",
                    value: function(t) {
                        return this.channels["private-encrypted-" + t] || (this.channels["private-encrypted-" + t] = new g(this.pusher, "private-encrypted-" + t, this.options)), this.channels["private-encrypted-" + t]
                    }
                }, {
                    key: "presenceChannel",
                    value: function(t) {
                        return this.channels["presence-" + t] || (this.channels["presence-" + t] = new y(this.pusher, "presence-" + t, this.options)), this.channels["presence-" + t]
                    }
                }, {
                    key: "leave",
                    value: function(t) {
                        var e = this;
                        [t, "private-" + t, "presence-" + t].forEach((function(t, n) {
                            e.leaveChannel(t)
                        }))
                    }
                }, {
                    key: "leaveChannel",
                    value: function(t) {
                        this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t])
                    }
                }, {
                    key: "socketId",
                    value: function() {
                        return this.pusher.connection.socket_id
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.pusher.disconnect()
                    }
                }]), i
            }(l),
            S = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    var e;
                    return t(this, i), (e = n.apply(this, arguments)).channels = {}, e
                }
                return r(i, [{
                    key: "connect",
                    value: function() {
                        var t = this,
                            e = this.getSocketIO();
                        return this.socket = e(this.options.host, this.options), this.socket.on("reconnect", (function() {
                            Object.values(t.channels).forEach((function(t) {
                                t.subscribe()
                            }))
                        })), this.socket
                    }
                }, {
                    key: "getSocketIO",
                    value: function() {
                        if (void 0 !== this.options.client) return this.options.client;
                        if ("undefined" != typeof io) return io;
                        throw new Error("Socket.io client not found. Should be globally available or passed via options.client")
                    }
                }, {
                    key: "listen",
                    value: function(t, e, n) {
                        return this.channel(t).listen(e, n)
                    }
                }, {
                    key: "channel",
                    value: function(t) {
                        return this.channels[t] || (this.channels[t] = new v(this.socket, t, this.options)), this.channels[t]
                    }
                }, {
                    key: "privateChannel",
                    value: function(t) {
                        return this.channels["private-" + t] || (this.channels["private-" + t] = new m(this.socket, "private-" + t, this.options)), this.channels["private-" + t]
                    }
                }, {
                    key: "presenceChannel",
                    value: function(t) {
                        return this.channels["presence-" + t] || (this.channels["presence-" + t] = new b(this.socket, "presence-" + t, this.options)), this.channels["presence-" + t]
                    }
                }, {
                    key: "leave",
                    value: function(t) {
                        var e = this;
                        [t, "private-" + t, "presence-" + t].forEach((function(t) {
                            e.leaveChannel(t)
                        }))
                    }
                }, {
                    key: "leaveChannel",
                    value: function(t) {
                        this.channels[t] && (this.channels[t].unsubscribe(), delete this.channels[t])
                    }
                }, {
                    key: "socketId",
                    value: function() {
                        return this.socket.id
                    }
                }, {
                    key: "disconnect",
                    value: function() {
                        this.socket.disconnect()
                    }
                }]), i
            }(l),
            E = function(e) {
                o(i, e);
                var n = c(i);

                function i() {
                    var e;
                    return t(this, i), (e = n.apply(this, arguments)).channels = {}, e
                }
                return r(i, [{
                    key: "connect",
                    value: function() {}
                }, {
                    key: "listen",
                    value: function(t, e, n) {
                        return new w
                    }
                }, {
                    key: "channel",
                    value: function(t) {
                        return new w
                    }
                }, {
                    key: "privateChannel",
                    value: function(t) {
                        return new _
                    }
                }, {
                    key: "presenceChannel",
                    value: function(t) {
                        return new x
                    }
                }, {
                    key: "leave",
                    value: function(t) {}
                }, {
                    key: "leaveChannel",
                    value: function(t) {}
                }, {
                    key: "socketId",
                    value: function() {
                        return "fake-socket-id"
                    }
                }, {
                    key: "disconnect",
                    value: function() {}
                }]), i
            }(l);
        const T = function() {
            function e(n) {
                t(this, e), this.options = n, this.connect(), this.options.withoutInterceptors || this.registerInterceptors()
            }
            return r(e, [{
                key: "channel",
                value: function(t) {
                    return this.connector.channel(t)
                }
            }, {
                key: "connect",
                value: function() {
                    "pusher" == this.options.broadcaster ? this.connector = new k(this.options) : "socket.io" == this.options.broadcaster ? this.connector = new S(this.options) : "null" == this.options.broadcaster ? this.connector = new E(this.options) : "function" == typeof this.options.broadcaster && (this.connector = new this.options.broadcaster(this.options))
                }
            }, {
                key: "disconnect",
                value: function() {
                    this.connector.disconnect()
                }
            }, {
                key: "join",
                value: function(t) {
                    return this.connector.presenceChannel(t)
                }
            }, {
                key: "leave",
                value: function(t) {
                    this.connector.leave(t)
                }
            }, {
                key: "leaveChannel",
                value: function(t) {
                    this.connector.leaveChannel(t)
                }
            }, {
                key: "listen",
                value: function(t, e, n) {
                    return this.connector.listen(t, e, n)
                }
            }, {
                key: "private",
                value: function(t) {
                    return this.connector.privateChannel(t)
                }
            }, {
                key: "encryptedPrivate",
                value: function(t) {
                    return this.connector.encryptedPrivateChannel(t)
                }
            }, {
                key: "socketId",
                value: function() {
                    return this.connector.socketId()
                }
            }, {
                key: "registerInterceptors",
                value: function() {
                    "function" == typeof Vue && Vue.http && this.registerVueRequestInterceptor(), "function" == typeof axios && this.registerAxiosRequestInterceptor(), "function" == typeof jQuery && this.registerjQueryAjaxSetup()
                }
            }, {
                key: "registerVueRequestInterceptor",
                value: function() {
                    var t = this;
                    Vue.http.interceptors.push((function(e, n) {
                        t.socketId() && e.headers.set("X-Socket-ID", t.socketId()), n()
                    }))
                }
            }, {
                key: "registerAxiosRequestInterceptor",
                value: function() {
                    var t = this;
                    axios.interceptors.request.use((function(e) {
                        return t.socketId() && (e.headers["X-Socket-Id"] = t.socketId()), e
                    }))
                }
            }, {
                key: "registerjQueryAjaxSetup",
                value: function() {
                    var t = this;
                    void 0 !== jQuery.ajax && jQuery.ajaxPrefilter((function(e, n, r) {
                        t.socketId() && r.setRequestHeader("X-Socket-Id", t.socketId())
                    }))
                }
            }]), e
        }();
        window.Pusher = n(86606), window.Echo = new T({
            broadcaster: "pusher",
            key: "4971de26666a6fede50a",
            cluster: "us2",
            forceTLS: !0
        })
    })(), window.$ = window.jQuery = n(57576), window.contentLocker = function(t) {
        this.interval;
        var e = {
            id: "contentLocker",
            timerDelay: 0,
            blockContextMenu: !0,
            clickTarget: document.getElementsByTagName("body")[0],
            onShow: !1,
            onHide: !1,
            pageCloseMessage: !1
        };
        this.extend = function(t, e) {
            for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
            return t
        }, this.options = this.extend(e, t), this.init = function() {
            this.id = this.options.id, this.backgroundId = "contentLockerBackground", !1 !== this.options.pageCloseMessage && (window.onbeforeunload = function() {
                if (n.isVisible()) return n.options.pageCloseMessage
            });
            var t = 0;
            "onTimer" == this.options.type && (t = this.options.timerDelay), setTimeout((function() {
                n.showLocker()
            }), t), this.options.blockContextMenu && this.blockContext()
        }, this.isVisible = function() {
            var t = document.getElementById("contentLocker");
            return null != t && "none" != t.style.display
        }, this.actionCompleted = function() {
            clearInterval(n.interval), n.unblockContext(), n.hideLocker()
        }, this.unblockContext = function() {
            document.getElementsByTagName("body")[0].removeAttribute("oncontextmenu")
        }, this.blockContext = function() {
            var t = document.getElementsByTagName("body")[0];
            t.setAttribute("oncontextmenu", "shake(); return false;"), t.classList.add("stop-scrolling")
        }, this.preventDefault = function(t) {
            (t = t || window.event).preventDefault && t.preventDefault(), t.returnValue = !1
        }, this.preventDefaultForScrollKeys = function(t) {
            if (keys[t.keyCode]) return preventDefault(t), !1
        }, this.blockScroll = function() {
            window.addEventListener && window.addEventListener("DOMMouseScroll", this.preventDefault, !1), window.onwheel = this.preventDefault, window.onmousewheel = document.onmousewheel = this.preventDefault, window.ontouchmove = this.preventDefault, document.onkeydown = this.preventDefaultForScrollKeys
        }, this.unblockScroll = function() {
            window.removeEventListener && window.removeEventListener("DOMMouseScroll", this.preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
        }, this.showLocker = function() {
            document.getElementById(this.backgroundId).style.display = "block", document.getElementById("contentLocker").style.display = "block", !1 !== this.options.onShow && this.options.onShow(), window.parent.postMessage("hide_scrollbar", "*")
        }, this.hideLocker = function() {
            if (document.getElementById(this.backgroundId).style.display = "none", document.getElementById("contentLocker").style.display = "none", !1 !== this.options.onHide && this.options.onHide(), !(window.navigator.userAgent.indexOf("MSIE ") > 0)) return !1;
            location.reload()
        }, window.lockerCallback = function(t) {
            !t.IsError && t.Result && n.actionCompleted()
        }, window.shake = function() {
            var t = document.getElementById("contentLocker"),
                e = t.style.cssText,
                n = (new Date).getTime();
            ! function r() {
                var i = (new Date).getTime() - n,
                    o = i / 500;
                if (o < 1) {
                    var s = 10 * Math.sin(4 * o * Math.PI);
                    t.style["margin-left"] = s + "px", setTimeout(r, Math.min(25, 500 - i))
                } else t.style.cssText = e
            }()
        };
        var n = this;
        this.init()
    }, (() => {
        var t = !1;

        function e(t) {
            window.Bugsnag.leaveBreadcrumb("Conversion received", t), n(t), r(t)
        }

        function n(t) {
            var e;
            (o("handling conversion", {
                conversion: t
            }), t.remaining > 0) ? $("#conversions-remaining").text(t.remaining): t.redirect_url ? (window.Bugsnag.leaveBreadcrumb("0 Conversions remaining, redirecting to " + t.redirect_url), o("redirecting", {
                url: t.redirect_url
            }), window.location.replace(t.redirect_url)) : (window.Bugsnag.leaveBreadcrumb("0 Conversions remaining, completing locker action"), null === (e = window.locker) || void 0 === e || e.actionCompleted())
        }

        function r(t) {
            $("#offer-" + t.offer_id).fadeOut()
        }

        function i() {
            $.get(route).success((function(t) {
                $.each(t.data, (function(e, i) {
                    r(i), e + 1 === t.data.length && (window.Bugsnag.leaveBreadcrumb("Refreshing: final conversion reached", i), n(i))
                }))
            }))
        }

        function o(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            $.ajax({
                type: "POST",
                url: l_route,
                data: {
                    e: t,
                    d: e
                },
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                }
            })
        }
        "undefined" != typeof channel ? (window.Echo.channel(channel).listen("Tools\\ConversionAdded", e), window.Echo.channel(channel).listen("Tools\\OfferClickAdded", e), window.Echo.channel(channel).listen("Tools\\ToolUnlockAdded", e), window.Echo.connector.pusher.connection.bind("connected", (function() {
            window.Bugsnag.leaveBreadcrumb("Connected to pusher"), t ? (window.Bugsnag.leaveBreadcrumb("Refreshing conversion count"), i()) : t = !0
        })), setInterval((function() {
            "connected" !== window.Echo.connector.pusher.connection.state && i()
        }), 15e3)) : setInterval((function() {
            i()
        }), 15e3)
    })()
})();