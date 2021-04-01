/*
This is another task queue which is processed after each task(message) is processed in event loop (for each Event loop iteration).
MicroTasks are enqueued by Promise() or queueMicrotask(func)
*/

(function () {

    console.log('this is the start');

    setTimeout(function cb() {
        console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0

    console.log('this is just a message');

    setTimeout(function cb1() {
        console.log('Callback 2: this is a msg from call back');
    }, 0);


    queueMicrotask(() => {
        console.log("micro task")
    });

    console.log('this is the end');

})();

/*
this is the start
this is just a message
this is the end
micro task
Callback 1: this is a msg from call back
Callback 2: this is a msg from call back
*/


let callback = () => log("Regular timeout callback has run");

let urgentCallback = () => log("*** Oh noes! An urgent callback has run!");

log("Main program started");
setTimeout(callback, 0);
queueMicrotask(urgentCallback);
log("Main program exiting");


/*
Main program started
Main program exiting
*** Oh noes! An urgent callback has run!
Regular timeout callback has run
*/