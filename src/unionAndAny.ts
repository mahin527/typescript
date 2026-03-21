let subs: number | string = 100

let apiReqStatus: 'pending' | 'success' | 'error' = 'pending'

apiReqStatus = 'success'


let airLineSeat: 'window' | 'middle' | 'aisle' = 'middle'

airLineSeat = 'window'


const orders = ["12", "34", "65", "02"]

// let currentorders;

let currentorders: string | undefined;


for(let order of orders){
    if (order === '34') {
        currentorders = order
        break
    }
}

console.log(currentorders);
