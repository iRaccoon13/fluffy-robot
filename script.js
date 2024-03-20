function fib(x) {
  if (x <= 0) return 0;
  if (x == 1) return 1;
  return fib(x-1) + fib(x-2);
}

function sqrt(number, maxDecimal) {
    var cDecimal  = -1;
    var cNumber   = 0;
    var direction = -1;

    while(cNumber * cNumber !== number && cDecimal < maxDecimal) {
        direction = -direction;
        cDecimal++;

        while((cNumber * cNumber - number) / Math.abs(cNumber * cNumber - number) === direction) cNumber += direction * Math.pow(10, -cDecimal);
    }

    return Math.abs(cNumber);
}
i = 0
while (true) {
    i++
    fib(sqrt(i, 3));
    
}