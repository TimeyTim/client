"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function func(options) {
    return function fooBar() {
        var foo = 1;
        if (options) {
            foo = 2;
        }
        return foo;
    };
}
exports.default = func;
//# sourceMappingURL=index.js.map