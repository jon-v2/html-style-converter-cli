

import { Command } from 'commander';
import { convert } from './utils.js';

const program = new Command();

program
    .version('1.0.0')
    .description('HTML Style Converter CLI');

program
    .command('inlineToClass')
    .description('Converts inline styles to CSS classes in HTML files')
    .option('-i, --input <directory>', 'Input directory containing HTML files')
    .option('-o, --output <directory>', 'Output directory to save converted HTML files')
    .action(async (options) => {
        console.log('\x1b[34m%s\x1b[0m', 'Converting inline styles to CSS classes...');
        console.log('\x1b[34m%s\x1b[0m', `Input directory: ${options.input}`);
        console.log('\x1b[34m%s\x1b[0m', `Output directory: ${options.output}`);

        await convert(options.input, options.output, 'inlineToClass').then(() => {
            console.log('\x1b[32m%s\x1b[0m', '\u{1F600} Complete!!!');
        }).catch((error) => {
            console.log('\x1b[31m%s\x1b[0m', '\u{1F614} Conversion failed!');
            console.error('\x1b[31m%s\x1b[0m', `Error: "${error}"`);
        });
    });

program
    .command('classToInline')
    .description('Converts CSS classes to inline styles in HTML files')
    .option('-i, --input <directory>', 'Input directory containing HTML files')
    .option('-o, --output <directory>', 'Output directory to save converted HTML files')
    .action(async (options) => {
        console.log('\x1b[34m%s\x1b[0m', 'Converting CSS classes to inline styles...');
        console.log('\x1b[34m%s\x1b[0m', `Input directory: ${options.input}`);
        console.log('\x1b[34m%s\x1b[0m', `Output directory: ${options.output}`);

        await convert(options.input, options.output, 'classToInline').then(() => {
            console.log('\x1b[32m%s\x1b[0m', '\u{1F600} Complete!!!');
        }).catch((error) => {
            console.log('\x1b[31m%s\x1b[0m', '\u{1F614} Conversion failed!');
            console.error('\x1b[31m%s\x1b[0m', `Error: "${error}"`);
        });
    });

export default program;