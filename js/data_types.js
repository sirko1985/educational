// 4.1.1
function camelize(str) {
   return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice).join('');
};

function filterRange(arr, a, b) {
   return arr.filter(item => (a <= item && item <= b));
}