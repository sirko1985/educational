// 4.1.1
function camelize(str) {
   return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice).join('');
}