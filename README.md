# ClassLogger
a `console.log()` wrapper for ES6 modules

## Installation
```
yarn add github:christianseel/classlogger
```
```
npm install github:christianseel/classlogger
```

## Usage
```
import ClassLogger from 'ClassLogger';

class ExampleClass {

    constructor(){
        let self = this;
        self.logger = ClassLogger(self, true); // set second parameter to false to disable logging
    }

    init() {
        let self = this;
        self.logger.log('This is a log line');
    }
}
```
