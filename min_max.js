'use strict'

function makeBuffer() {
    let bufferValue = '';
    return {
        add: function (insertedValue) {    
            return bufferValue += insertedValue+' ';
        },
        print: function(){
        return console.log(bufferValue);
        },
        clear: function(){
            return bufferValue = '';
        } 
    }
}
 let buffer = makeBuffer();

buffer.add('Three');
buffer.add('words');
buffer.add('text');
buffer.print();

buffer.clear();

buffer.add('I');
buffer.add('love');
buffer.add('JavaScript');
buffer.print();

