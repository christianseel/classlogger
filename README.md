# logger
a `console.log()` wrapper for ES6 modules

## Usage
```
import Logger from './_logger';

class ExampleClass {

    constructor(){
        let self = this;
        self.debug = true;
        self.logger = Logger(self);
    }

    init() {
        let self = this;
        self.logger.log('This is a log line');
    }
}
```
