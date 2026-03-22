"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let subs = 100;
let apiReqStatus = 'pending';
apiReqStatus = 'success';
let airLineSeat = 'middle';
airLineSeat = 'window';
const orders = ["12", "34", "65", "02"];
// let currentorders;
let currentorders;
for (let order of orders) {
    if (order === '34') {
        currentorders = order;
        break;
    }
}
console.log(currentorders);
//# sourceMappingURL=unionAndAny.js.map