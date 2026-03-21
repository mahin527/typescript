function getTea(kind: string | number ) {
    if (typeof kind === "string") {
        return `Making ${kind}...`
    }
    return `Tea order: ${kind}`
}

function serveFood(msg?:string) {
    if (msg) {
        return msg
    }
    return `Not serving!`
}

