function totalLength(x: string | any[], y: string | any[]): number {
    
    x.slice(0);

    if(x instanceof Array) {
        x.push('abc')
    }

    if(typeof x === "string") {
        x.substr(1);
    }

    let total: number = x.length + y.length;
    return total;
}