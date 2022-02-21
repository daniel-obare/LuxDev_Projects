// JavaScript function that when you inputs a number the function you have created checks whether the number 
// belongs to the Fibonacci sequence or not. 

function isFibonacci(num, a = 0, b = 1) {
    if(num === 0 || num === 1) {
      return true;
    }
  
    let nextNumber = a+b;
  
    if(nextNumber === num) {
      return true;
    }
    else if(nextNumber > num) {
      return false;
    }
  
   return isFibonacci(num, b, nextNumber);
  }