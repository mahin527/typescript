function getTea(kind: string | number) {
    if (typeof kind === "string") {
        return `Making ${kind}...`
    }
    return `Tea order: ${kind}`
}

function serveFood(msg?: string) {
    if (msg) {
        return msg
    }
    return `Not serving!`
}

function productSize(size: "small" | "medium" | "large" | number) {
    if (size === "small") {
        return `product size is small...`
    }
    if (size === "medium") {
        return `product medium is small...`
    }
    if (size === "large") {
        return `product size is large...`
    }
    return `product size #${size}`
}

class serveCoffe {
    serve() {
        return `Serving coffee here...`
    }
}

class serveTea {
    serve() {
        return `Serving tea herer....`
    }
}


function serve(item: serveTea | serveCoffe) {
    if (item instanceof serveTea) {
        return item.serve()
    }
}


type chaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj: any): obj is chaiOrder {
    return (
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"

    )
}

function serveOrder(item: chaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar`
    }
    return `Serving custom chai: ${item}`
}


