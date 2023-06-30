

import { Command } from 'commander';

const program = new Command();

program
    .version('1.0.0')
    .description('HTML Style Converter CLI');

program
    .command('inline2class')
    .description('Converts inline styles to CSS classes in HTML files')
    .option('-i, --input <directory>', 'Input directory containing HTML files')
    .option('-o, --output <directory>', 'Output directory to save converted HTML files')
    .action((options) => {
        // Perform inline to class conversion logic
        console.log('Converting inline styles to CSS classes...');
        console.log(`Input directory: ${options.input}`);
        console.log(`Output directory: ${options.output}`);
    });

program
    .command('class2inline')
    .description('Converts CSS classes to inline styles in HTML files')
    .option('-i, --input <directory>', 'Input directory containing HTML files')
    .option('-o, --output <directory>', 'Output directory to save converted HTML files')
    .action((options) => {
        // Perform class to inline conversion logic
        console.log('Converting CSS classes to inline styles...');
        console.log(`Input directory: ${options.input}`);
        console.log(`Output directory: ${options.output}`);
    });

export default program;