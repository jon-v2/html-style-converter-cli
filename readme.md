# HTML Style Converter CLI

The HTML Style Converter CLI is a command-line tool that incorporates the functionality of the [HTML Style Converter npm package](https://www.npmjs.com/package/html-style-converter), allowing you to perform bulk conversions of HTML files. It provides a convenient way to convert inline styles to CSS classes and vice versa in multiple HTML documents simultaneously.

## Installation

You can install the HTML Style Converter CLI globally using npm:

```shell
npm install -g html-style-converter-cli
```

## Usage

To use the HTML Style Converter CLI, run the following command:

```shell
html-style-converter `<command>` [options]
```

### Commands

- `toclass`: Converts inline styles to CSS classes in HTML files.
- `toinline`: Converts CSS classes to inline styles in HTML files.

### Options

- `-i, --input <directory or file path>`: Specifies the input directory containing the HTML files to be converted.
- `-o, --output <directory>`: Specifies the output directory where the converted HTML files will be saved. (Optional: If not provided, the converted files will overwrite the original files.)
- `-h, --help`: Displays the help information for the CLI.

### Examples

Convert inline styles to CSS classes in HTML files within a directory:

```shell
html-style-converter toclass -i ./input-directory -o ./output-directory
```

Convert CSS classes to inline styles in HTML files within a directory:

```shell
html-style-converter toinline -i ./input-directory -o ./output-directory
```

The CLI tool also allows for HTML file path instead of input directory:

```shell
html-style-converter toinline -i ./input-directory/example.html -o ./output-directory
```

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt).