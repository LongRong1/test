const cuoc = document.getElementById('cuoc')
const aaa = document.getElementById('aaa')
const dat = document.getElementById('dat')
const ab = document.getElementById('ab')
const a1k = document.getElementById('1k')
//const a1k1 = a1k.getAttribute('value')
const a5k = document.getElementById('5k');
//const a5k1 = a5k.getAttribute('value');
const a10k = document.getElementById('10k');
//const a10k1 = a10k.getAttribute('value');
const a100k = document.getElementById('100k');
const a500k = document.getElementById('500k');
let ip = document.getElementById('ip');
//let ip1 = ip.getAttribute('value');


cuoc.addEventListener('click',()=>{
    aaa.style.display = 'flex'
    ab.style.display = 'flex'
    cuoc.style.display = 'none'
    ip.style.display = 'flex'
    // a1k.addEventListener('click',()=>{
    //     cuoc.innerText = a1k.value;
    // })
})
let b = 0
a1k.addEventListener('click',()=>{
    // console.log(typeof (+a1k))
    // b = b + (+a1k)
    // b = Number(b.replace(/[^0-9.-]+/g,""))
    //b = b.toFixed(3)
    b += 1000
    //b = b.toFixed(0)
    //b = b.toLocaleString('vi')
    //b = Number(b.replace(/[^0-9.-]+/g,""))
    ip.value = b;
    //b = Number(b.replace(/[^0-9.-]+/g,""))
})

a5k.addEventListener('click',()=>{
    b += 5000
    ip.value = b;
})

a10k.addEventListener('click',()=>{
    b += 10000
    ip.value = b;
})

a100k.addEventListener('click',()=>{
    b += 100000
    ip.value = b;
})

a500k.addEventListener('click',()=>{
    b += 500000
    ip.value = b;
})
dat.addEventListener('click',()=>{
    aaa.style.display = ''
    ab.style.display = ''
    cuoc.style.display = 'flex'
    let a = b
    b = 0
    ip.value = ''
    console.log(a,b)
})
