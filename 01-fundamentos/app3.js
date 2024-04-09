const fs = require('fs');
const content = fs.readFileSync('README.md', 'utf-8');
const words = content.split(' ');
const reactWordCount = words.filter((word) => word.toLowerCase() === 'react').length;
const reactWordCount2 = words.filter((word) => word.toLowerCase().includes('react')).length;

const reactWordCount3 = content.match(/react/gi ?? []).length

console.log('Palabras: ', words.length);
console.log('Palabras React: ', reactWordCount);
console.log('Palabras React: ', reactWordCount2);
console.log('Palabras React: ', reactWordCount3);