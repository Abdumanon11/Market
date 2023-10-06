let products = [
    
    {   
        name: "milk",
        type: "milk",
        price: 16000
    },
    {   
        name: "cheese",
        type: "milk",
        price: 25999
    },
    {   
        name: "tvorog",
        type: "milk",
        price: 12000
    },
    {   
        name: "govyadina",
        type: "meat",
        price: 90000
    },
    {   
        name: "baranina",
        type: "meat",
        price: 94000
    },
    {   
        name: "kuryatina",
        type: "meat",
        price: 45000
    },
    {   
        name: "vodka",
        type: "alcohol",
        price: 20000
    },
    {   
        name: "tekila",
        type: "alcohol",
        price: 50000
    },
    {   
        name: "pivo",
        type: "alcohol",
        price: 17000
    },
    {   
        name: "champain",
        type: "alcohol",
        price: 100000
    },
]


let total = products.reduce((a,b) =>  {
return a + b.price
}, 0) 



    
   
 
console.log(total  ,products.length ,total / products.length);







