/**
 * Created by dav on 2015-12-01.
 */
export default {
    startSpinner() {
            dispatch({type: 'START_SPINNER'});
        },
    stopSpinner() {
        dispatch({type: 'STOP_SPINNER'});
    }
}