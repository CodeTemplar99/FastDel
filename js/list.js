new Vue({
    el: '#list',
    data: {
        show_list_view: true,
        show_action_view: false,
        show_account_view: false,
    },
    methods: {
        display_list_view: function () {
            this.show_list_view = true
            this.show_action_view = false
            this.show_account_view = false
        },
        display_action_view: function () {
            this.show_list_view = false
            this.show_action_view = true
            this.show_account_view = false
        },
        display_account_view: function () {
            this.show_list_view = false
            this.show_action_view = false
            this.show_account_view = true
        }
    }
})