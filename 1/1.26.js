function primeNumber(limit){
for (let i  = 2; i<=limit; i++){

 let primes = true;
  
 for(let factor = 2; factor< i; factor++){
    if(i%factor===0){
        primes = false;
        break;
    }
}
    if(primes) console.log(i); 
    }
}
primeNumber(5);