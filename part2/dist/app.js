System.register("m", [], function (exports_1, context_1) {
    "use strict";
    var b, hi;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            b = 20;
            exports_1("hi", hi = '你好');
        }
    };
});
System.register("app", ["m"], function (exports_2, context_2) {
    "use strict";
    var m_js_1, a;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (m_js_1_1) {
                m_js_1 = m_js_1_1;
            }
        ],
        execute: function () {
            console.log("hello app");
            a = 10;
            console.log(a);
            console.log(m_js_1.hi);
        }
    };
});
