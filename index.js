function los(min, max) {
  min = parseInt(min, 10);
  max = parseInt(max, 10);

  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(los(10, 50));

function losuj(ile, min, max) {
  wynik = [];
  for (i = 0; i < ile; i++) {
    wynik.push(los(min, max));
  }

  return wynik;
}

console.log(losuj(6, 1, 100));

// funkcji(10) dlugosc wyrazu male,duze litery i cyfry
