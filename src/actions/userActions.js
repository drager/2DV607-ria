/**
 * Created by dav on 2015-11-19.
 */
import auth from '../utils/auth'
export default {
    submitUser(user) {
        if(auth(user)){
            return {
                type: 'successValidation'
            }
        }
        return {
            type : 'failedValidation'
        }

    }
}