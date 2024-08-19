## Description

Character Profile Sheet for Cyberpunk Red

<!-- [Link to deployed site]() -->

## Table of Contents

- [Description](#description)

- [Table of Contents](#table-of-contents)

- [Installation](#installation)

- [Usage](#usage)

- [Testing](#testing)

- [Contributing](#contributing)

- [Credits](#credits)

- [License](#license)

## Installation

Clone the repo
Install vite with `npm install vite`
install vite plugin commonjs - needed to use require() - `npm install vite-plugin-commonjs`
install vitest with `npm install -D vitest`
install the jsdom library with `npm install jsdom`
install testing libraries
`npm install --save-dev @testing-library/jest-dom @testing-library/react @testing-library/user-event`
run using `npm run dev`

## Usage

- Set your Character name by typing in the name box
- Select you from the dropdown list
- Find out more about what each Stat is used for by expanding the description box with the (+) button by each stat
- Assign your stats - The maximum is 8 and the minimum is 2.
  This will automatically calculate your derived statistics (some day)

## Testing

This app uses Vitest
run the command `npm run test` to run the tests

to run only one test file run `npm run test path/to/file.test.tsx`
e.g. `npm run test src/components/Profile.test.tsx`

To run only one test in the file, run `????`

## Contributing

- Daisy (https://github.com/DaisyEverard/)

Contributors welcome, send a request

## Credits

## License

![MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) license.
