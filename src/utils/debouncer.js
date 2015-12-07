import R from 'ramda';

const debounce = R.curry((immediate, wait, callback) => {
  let timeout; // remembered by the returned function via the closure.
  return (refs) => {
    // later is passed as a callback to the setTimeout.
    const later = () => {
      timeout = null;
      if (!immediate) {
        callback(refs);
      };
    };

    // Alt 1 (immediate: true): If clicked once timeout is FALSE and immediate is TRUE (constant), hence callImmediately is TRUE.
    // Alt 2 (immediate: false): If clicked once timeout is FALSE and immediate is FALSE (konstant), hence callImmediately is FALSE.
    const callImmediately = immediate && !timeout;

    clearTimeout(timeout);

    // create new timeout.
    // Alt 1 - step 1: SetTimeout runs the later function but later will never run the callback since the immediate is FALSE. timeout is reset to null but only
    // after (wait) ms.
    // Alt 1 - step 2: Since callImediately validated to true, the callback runs immediately
    // Alt 1 - step 3: A sequence of clicks within the timeframe (wait) ms after the first click will result in callImediately validating
    // to FALSE and previous timeout is cleared and a new timeout fires but the callback does not fire since immediate is FALSE.
    // timeout runs but the callback does not fire. Hence immediateDebounce.

    // Alt 2 - immediate validates to FALSE and callImmeately if statement will never run. set timeout will fire each time and later function will invoke
    // callback after (wiat) ms.
    // Alt 2 - A sequence of clicks within the timeframe (wait) ms after the first click will will cause callImmediately to validate to FALSE and clear
    // Alt 2 - the previous timeout and then set a new timeout that will fire the callback in another (wait) ms. The time for callback to fire is now
    // delayed with 1 * (wait) ms.
    // Alt 2 - if the sequence of clicks continue to stream on the previous timeout will be cleared and new timeout set all until the user stop clicking and
    // the later function invokes callback after another (wait) ms. Hence delayedDebounce
    timeout = setTimeout(later, wait);

    if (callImmediately) {
      callback(refs);
    };
  };
});

export const immediateDebounce = debounce(true);
export const delayedDebounce = debounce(false);
