function fibonacci() {
  let num = prompt("Introduce un número:");
  
  while (isNaN(num) || num <= 0) {
    num = prompt("Introduce un número válido:");
  }
  
  let a = 0, b = 1;
  let arr = [a, b];
  
  for (let i = 2; i < num; i++) {
    let c = a + b;
    arr.push(c);
    a = b;
    b = c;
  }
  
  console.log("Serie de Fibonacci es: " + arr.join(", "));
}

fibonacci();