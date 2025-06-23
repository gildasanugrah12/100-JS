let kata = prompt("Masukkan kata:");
let balik = kata.split('').reverse().join('');
alert(kata === balik ? "Palindrome!" : "Bukan palindrome");
