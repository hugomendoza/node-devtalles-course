import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

console.log(yarg)
const { b:base, l:limit, s:showTable } = yarg

let outputMessage = '';
const headerMessage = `
==========================
    Tabla del ${base}
==========================\n
`
for (let i = 0; i <= limit; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;
showTable && console.log(outputMessage);