new Vue({
    el: '#app',
    data: {
        tasks: [],
        taskText: '',


    },
    methods: {
        addTask: function() {
            this.tasks.push({ words: this.taskText, done: false });
            this.taskText = "";
        },
        deletTask: function(index) {
            this.tasks.splice(index, 1);
        },
        deleteAll: function() {
            this.tasks = [];
        }
    }



})