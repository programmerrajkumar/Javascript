//ability to watch for changes being made to the DOM tree

// Select the node that will be observed for mutations
const targetNode = document.getElementById('txtAddress');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

/*   childList
     attributes
     characterData
     subtree 
     attributeOldValue
     characterDataOldValue
     sequence<DOMString> attributeFilter; */

// Callback function to execute when mutations are observed
function callback(mutationList, observer) {
    mutationList.forEach( (mutation) => {
      switch(mutation.type) {
        case 'childList':
          /* One or more children have been added to and/or removed
             from the tree.
             (See mutation.addedNodes and mutation.removedNodes.) */
          break;
        case 'attributes':
          /* An attribute value changed on the element in
             mutation.target.
             The attribute name is in mutation.attributeName, and
             its previous value is in mutation.oldValue. */
          break;
      }
    });
  }

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

//to get DOM changes that have been detected but not yet processed by the observer's callback function 
//make the queue empty after this
let mutations = observer.takeRecords();


// Later, you can stop observing
observer.disconnect();