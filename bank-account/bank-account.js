var account = {
  balance: 0
};


//  deposit(account, amount)
function deposit(account, amount){
  account.balance = account.balance + amount;
  // account.balance += amount; same as above
}


//  withdraw(account, amount)
function withdraw(account, amount ){
  account.balance -= amount;
}


//  getBalance(account)
function getBalance(account){
  return account.balance;
}

deposit(account, 1000);

console.log(getBalance(account));

withdraw(account, 300);

console.log(getBalance(account));
