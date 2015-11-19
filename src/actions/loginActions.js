/**
 * Created by dav on 2015-11-19.
 */
export default {
    login() {
        return {
            type: 'login'
        }
    },
    logout(){
        return {
            type: 'logout'
        }
    }
}