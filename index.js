function draw(min, max) {
  min = parseInt(min, 10);
  max = parseInt(max, 10);

  if (min > max) {
    var tmp = min;
    min = max;
    max = tmp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(draw(10, 50));

function drawArray(length, min, max) {
  wynik = [];
  for (i = 0; i < length; i++) {
    wynik.push(draw(min, max));
  }

  return result;
}

console.log(drawArray(6, 1, 100));

function generatePassword(length) {
  let text = "";
  let possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()/";

  for (var i = 0; i < length; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

console.log(generatePassword(8));
console.log(generatePassword(15));
console.log(generatePassword(5));