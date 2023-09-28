/* console.log("1.görev");
console.log("2.görev");
console.log("3.görev");
console.log("4.görev"); */

/* function func1(){
    console.log("func 1 tamamlandı");
}
function func2(){
    console.log("func 2 tamamlandı");
}

//invoke etme
func1();
func2(); */
let x = 5;

console.log(x);

async function increase(){
    setTimeout(() =>{
        x = x + 5;
    }, 3000)
}
//yukardan aşağıya devam ederken setTimeout 3sn beklerken alttaki işlemler devam ediyor

await increase();
console.log(x);
x = x + 5;
console.log(x);

const books = [
    {name: "Kitap 1", author: "Yazar 1"},
    {name: "Kitap 2", author: "Yazar 2"},
    {name: "Kitap 3", author: "Yazar 3"},
];

const listBooks = () => {
    books.map(book => {
        console.log(book.name);
    })
}
const addBook = (newBook, callback)=>{
    books.push(newBook);
    callback();
}

addBook({name: "Kitap 4", author: "Yazar 4"}, listBooks);


