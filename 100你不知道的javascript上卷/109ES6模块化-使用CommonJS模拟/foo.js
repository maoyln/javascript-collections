const bar = require('./bar.js');

const hungry = 'hungry';
const awesome = () => {
  // console.log(bar(hungry).toUpperCase());
  return bar(hungry).toUpperCase()
}

module.exports = { awesome };