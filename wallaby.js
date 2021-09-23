/***
 ** In VS Code, must execute Ctrl+Shift+P -> Wallaby.js: Select Configuration -> wallaby.js for it to start using this file **
 ***/

export default function () {
  return {
    testFramework: 'mocha',
    files: ['package.json', 'src/**/*.js', '!src/**/*.test.js'],
    tests: ['src/**/*.test.js'],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        runner: '--experimental-vm-modules',
      },
    },
  };
}
