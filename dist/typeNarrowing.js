"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getTea(kind) {
    if (typeof kind === "string") {
        return `Making ${kind}...`;
    }
    return `Tea order: ${kind}`;
}
function serveFood(msg) {
    if (msg) {
        return msg;
    }
    return `Not serving!`;
}
function productSize(size) {
    if (size === "small") {
        return `product size is small...`;
    }
    if (size === "medium") {
        return `product medium is small...`;
    }
    if (size === "large") {
        return `product size is large...`;
    }
    return `product size #${size}`;
}
class serveCoffe {
    serve() {
        return `Serving coffee here...`;
    }
}
class serveTea {
    serve() {
        return `Serving tea herer....`;
    }
}
function serve(item) {
    if (item instanceof serveTea) {
        return item.serve();
    }
}
function isChaiOrder(obj) {
    return (typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number");
}
function serveOrder(item) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`;
    }
    return `Serving custom chai: ${item}`;
}
//# sourceMappingURL=typeNarrowing.js.map