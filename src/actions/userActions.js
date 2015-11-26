/**
 * Created by dav on 2015-11-19.
 */
import auth from '../utils/auth'
export default {
    async submitUser(user) {
        if(await auth(user)){
            return {
                type: 'successValidation'
            }
        } else {
            return {
                type : 'failedValidation'
            }
        }

    }
}