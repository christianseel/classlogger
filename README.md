# classlogger
a `console.log()` wrapper for ES6 modules

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
