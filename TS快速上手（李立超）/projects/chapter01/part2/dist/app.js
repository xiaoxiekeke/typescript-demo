(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./m.js"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    console.log("hellow");
    var m_js_1 = require("./m.js");
    console.log(m_js_1["default"]);
});
