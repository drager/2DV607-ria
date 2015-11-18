/**
 * Created by dav on 2015-11-16.
 */
export default {
    login() {
        return {
            type : 'login'
        }
    },
    logout(){
        return {
            type: 'logout'
        }
    }
}