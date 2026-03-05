let customers = [
    {
        id:1,
        name:"Jhon",
        balance: 5000,
        transactions : []
    },
    {
        id:2,
        name:"Any",
        balance : 6000,
        transactions : []
        
    },
    {
        id :3,
        name:"Suresh",
        balance :7000,
        transactions:[]
    }
]
function deposit(customers,id,amount){
    if(amount<1){
        console.log("Invalid Amount");

    }
    else{
        p1 = customers.find((customer)=>customer.id==id)
        let updatedbalance=p1.balance+amount;
        console.log(`Updated balance for ${p1.name}: ${updatedbalance} `);
    }
    p1.transactions = [...p1.transactions,{type:"Credit",amount:amount,Date:new Date}]

}
function withdraw(customers,id,amount){
    p1 = customers.find((customer)=>customer.id==id)

    if(amount>p1.balance){
        console.log("Insufficient Balance");
    }
    else{
        let updatedbalance=p1.balance-amount;
        console.log(`${amount} withdrawn successfully`);
        console.log(`Updated balance of the ${p1.name} is ${updatedbalance}`);
    }
    p1.transactions = [...p1.transactions,{type:"Debit",amount:amount,Date:new Date}]

}
function checkbalance(customers,id){
    p1 = customers.find((customer)=>customer.id==id)
    console.log(`Balance for ${p1.name} is ${p1.balance}`);
   
}
function showTransaction(customers,id){
    p1 = customers.find((customer)=>customer.id==id) 
    console.log(p1.transactions);
   
}

deposit(customers,1,500)
withdraw(customers,1,200)
withdraw(customers,2,1000)
checkbalance(customers,3)
showTransaction(customers,1)
showTransaction(customers,2)