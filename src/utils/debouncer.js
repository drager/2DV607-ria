import R from 'ramda';

const debounce = R.curry((immediate, wait, callback) => {
  var timeout;
  return (e) => {
    // later is passed as a callback to the setTimeout.
    let later = () => {
      // reset timeout with id.
      timeout = null;
      if (!immediate) {
        callback(e);
      };
    };

    let callImmediately = immediate && !timeout;

    // clear last timeout each click
    clearTimeout(timeout);

    // create new timeout.
    timeout = setTimeout(later, wait);

    if (callImmediately) {
      callback(e);
    };
  };
});

export const immediateDebounce = debounce(true);
export const delayedDebounce = debounce(false);
