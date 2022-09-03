function isPrime(num:number):boolean{
    let isprime = false;
    if(num == 2){
        isprime = true;
        return isprime
    }
    for(let i = 2; i < num/2; i++){
        if(num % i == 0){
            isprime = false;
            break;
        }
    }
    return isprime;
}