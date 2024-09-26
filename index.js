const debounce = (cb, t) => {
  let timer;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, t);
  };
};
//debounce method always runs after a gap of certain time in the consecutive events. Generally used in search bar , scrolling
//Search Input:When making API calls based on user input, debounce can be used to wait until the user has stopped typing before making the call.
//Example: Making a search request only after the user has stopped typing for 300ms.

//Form Validation: To validate form fields only after the user has finished typing, reducing unnecessary validations.
// Example: Validating an email address only when the user has stopped typing.

//Resize Events: If you only want to execute a function once after the window has been resized (not during resizing).
//Example: Updating a complex layout only after the user has stopped resizing the window.

const button = document.getElementById("click");

const throttle = (cb, d) => {
  let last = 0;
  return function (...args) {
    let now = new Date().getTime();
    if (now - last < d) return;
    last = now;
    return cb(...args);
  };
};

//Scrolling Events: When you want to execute a function at regular intervals while a user is scrolling, such as updating a progress bar or infinite scrolling. Example: Checking the scroll position to load more content only once every 300ms.

//Button Clicks or Form Submissions:To prevent rapid consecutive clicks or submissions that could lead to performance issues or unintended behavior.
const throttleFunction = throttle(() => {
  console.log("Clicked");
}, 2000);

const debounceFunction = debounce(() => {
  console.log("Function triggered");
}, 2000);

button.addEventListener("click", throttleFunction);
