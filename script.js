fetch('https://dog.ceo/api/breeds/image/random ')
.then(res=> res.json())
.then(msg=>console.log(msg.message))


