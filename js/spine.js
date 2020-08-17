// side bar
let isOpen = false;

function showSideBar() {
    document.querySelector('#navbarSupportedContent').style.display = isOpen ? "none" : "block"
    isOpen = !isOpen

}

new Vue({
    el: '#app',
    data: {
        formMessage: "Welcome,",
        formDetail: "fill the form to sign up",
        show_sign_up_form: true,
        show_login_form: false,
        show_sign_up_button: true,
        show_log_in_button: false
    },
    methods: {
        switch_to_login: function () {
            if (this.show_sign_up_form = !true) {
                this.formMessage = "Hi,"
                this.formDetail = "login to order today"
                this.show_sign_up_form = "!true"
                this.show_sign_up_button = "!true"
                this.show_login_button = "true"
            }
        }
    }
})