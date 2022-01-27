for(let i = 1; i<=3; i++) {
    creatBlock()
}

function creatBlock() {
    const  box = document.querySelector('.box')
    const newBlock = document.createElement('div')
    newBlock.classList = ('mini')
    box.append(newBlock)
}

















// for(let i = 0; i<=10; i++) {
//     console.log(i)
// }

// for(let i = 2; i<=10; i=i+2) {       //i+=3
//     console.log(i)
// }



// a=+prompt('введите число', 'a<b')
// b=+prompt('введите число', 'a<b')
// for(let i = a; i<=b; i++) {
//     console.log(i)
// }