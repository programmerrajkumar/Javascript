//A Promise is an object representing the eventual completion or failure of an asynchronous operation.
//   to which you attach callbacks, instead of passing callbacks into a async function.
// concept like : $.ajax() success & failure callback function

//Old school style
function createAudioFileAsync(audioSettings, successCallback, failureCallback) {

}

function successCallback(result) {
    console.log("Audio file ready at URL: " + result);
}

function failureCallback(error) {
    console.error("Error generating audio file: " + error);
}

createAudioFileAsync(audioSettings, successCallback, failureCallback);

//Promise Style

createAudioFileAsync(audioSettings).then(successCallback, failureCallback);


//Chaining

const promise1 = doSomething();
const promise2 = promise1.then(successCallback, failureCallback); //then() returns a new promise,different from the original(promise1)

//promise2 represents completion of promise1 & its callbacks i.e doSomething() & successCallback() or failureCallback()

doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log('Got the final result: ' + finalResult);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);

//Creating Promise

//new Promise(executor)
// Executor is another function.Inoked automatically
//      Executor:function(resolved, rejected){some asynchronous operation.}
//          functions resolved(valobj),rejected(errorobj) are generted internally, both returns Promise obj
//          The executor has no meaningful return value. instead it will update Promise state by calling resolved() or rejected()


const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(function () {
        try {
            var returnValue = "";
            resolve(returnValue);
        } catch (error) {
            reject(error);
        }

    }, 3000);
});



new Promise((resolve, reject) => {
    console.log('Initial');

    resolve();
})
    .then(function (result) { //result is value returned from doSomething()
        return doSomethingElse(result);
    }, function (result) {
        return doSomethingElse_Error(result);
    })
    .then(newResult => doThirdThing(newResult)) //newResult is value returned from doSomethingElse() or doSomethingElse_Error()
    .then(finalResult => {//finalResult is value returned from doThirdThing()
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback)// or then(null, failureCallback). will be executed if any error in previous chain, not if error after this(like try catch) 
    .then(() => {
        console.log('Do this, no matter what happened before');
    });
//if value is 


//Promise Rejection Event
//Whenever a promise is rejected, one of two events is sent to the global scope(window or worker scope)
//   rejectionhandled - raised after reject() function
//   unhandledrejection - raised after unhandled error

process.on("unhandledRejection", (reason, promise) => {
    /* You might start here by adding code to examine the
     * "promise" and "reason" values. */
});