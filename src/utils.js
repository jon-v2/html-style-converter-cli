import { inlineToClass, classToInline } from 'html-style-converter';
import fs from 'fs';
import path from 'path';

export const convert = (input, output, type) => new Promise(async (resolve, reject) => {
    try {
        const isDirectory = fs.lstatSync(input).isDirectory();
        const isHtml = isDirectory ? false : path.extname(input) === '.html' || path.extname(input) === '.htm';
        const convertFiles = type === 'inlineToClass' ? (html) => inlineToClass(html) : (html) => classToInline(html);

        if (isDirectory) {
            const files = fs.readdirSync(input);
            await Promise.all(files.map(async (file) => {
                const filePath = path.join(input, file);
                const html = fs.readFileSync(filePath, 'utf8');
                const convertedHtml = convertFiles(html);
                const outputFilePath = path.join(output, file);
                await fs.promises.writeFile(outputFilePath, convertedHtml);
                console.log('\x1b[32m%s\x1b[0m', `✓ ${file}`);
            }));
        } else if (isHtml) {
            const html = await fs.promises.readFile(input, 'utf8');
            const convertedHtml = convertFiles(html);
            await fs.promises.writeFile(output, convertedHtml);
            console.log('\x1b[32m%s\x1b[0m', `✓ ${file}`);
        }

        resolve();
    } catch (error) {
        reject(error.message);
    }
});
