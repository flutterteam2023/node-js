const promise1 = new Promise((resolve, reject) => {

    resolve("veriler alındı");
    reject("veriler hatalı geldi");
});

//promise1.then(value => console.log(value));
//promise1.catch(e => console.log(e));

promise1.then(value => {
    console.log(value);
}).catch(e => {
    console.log(e);
});
