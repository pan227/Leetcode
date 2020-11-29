class MyPromise {
    constructor(run) {
        this.array = [];
        this.flag = false;
        run(this.resolve);
    }

    then(fun) {
        this.array.push(fun);
    }

    resolve(val) {
        if(!flag) {
            this.array.forEach(fun => fun(val));
            this.flag = true;
        }

    }
}

let a = new Promise((resolve, rejedt) => {
    //resolve notifyAll
    File.read("a", (err, data) => {resolve(data)});
    File.read("b", (err, data) => {resolve(data)});
})

a.then(val => console.log(val)).then();
res = new Promise(resolve => {
    setTimeout(() => {resolve(2)}, 200)
})