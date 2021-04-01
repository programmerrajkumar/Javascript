//https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop


/*

agents 
  a main thread(agents thread)
  Agent's Execution Context
  execution context stack(func stack)
  additional threads(for Task Queue(Event Loop),Micro Task queue and worker)
  
  Types
    1.Window Event Loop
    2.Worker Event Loop
    3.Worklet Event Loop
*/

//JavaScript is single-threaded
//Event loop
//Never blocks UI

while (queue.waitForMessage()) { //EventLoop()
    queue.processNextMessage() //calls corresponding func (calling a function creates a new  frame(execution context) in stack for that function's use)

    while (queue.waitForMicroTask()) {
        queue.processNextMicroTask()
    }
    RenderingandPaintingDOM();
}

/* 
 message(code to be executed i.e function) can be pushed to queue. Event loop will iterate this queue and executes the message
 Each message is processed completely before any other message is processed (until function stack is empty for current func call)
 The processing of functions continues until the stack is once again empty. Then, the event loop will process the next message in the queue (if there is one).
     messages are added through 
           events occurance,
           setTimeout,
           SetInterval
         setTimeout (message,minimumwaittime)  time value represents the (minimum) delay after which the message will actually be pushed into the queue
*/

(function () {

    console.log('this is the start');

    setTimeout(function cb() {
        console.log('Callback 1: this is a msg from call back');
    }); // has a default time value of 0. Adds new message to queue after 0 ms

    console.log('this is just a message');

    setTimeout(function cb1() {
        console.log('Callback 2: this is a msg from call back');
    }, 10);// Adds new message to queue after 10 ms

    console.log('this is the end');

})();

/*   "this is the start"
  "this is just a message"
  "this is the end"
  "Callback 1: this is a msg from call back" //invoked from queue after function call ends i.e stack is empty
  "Callback 2: this is a msg from call back" */

/*
<div id="progress"></div>

<script>

  function count() {
    for (let i = 0; i < 1e6; i++) {
      i++;
      progress.innerHTML = i;
    }
  } //once the function call is complted(processed the current messgae) the RenderingandPaintingDOM() is invoked
    //so progress update reflect in UI only once. so step by step value increse is not observed

  count();
</script>
*/

//use setTimeout() to create new message in queue

/*<div id="progress"></div>

<script>
  let i = 0;

  function count() {

    // do a piece of the heavy job (*)
    do {
      i++;
      progress.innerHTML = i;
    } while (i % 1e3 != 0);

    if (i < 1e7) {
      setTimeout(count);
    }
  } //UI update done at end of each function call

  count();
</script>
*/