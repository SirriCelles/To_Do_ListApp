
module.exports = class ListArray {

    constructor() {
        this.lists = [
            {
                description: 'Wash dishes',
                index: 1,
                completed: false
            },
            {
                description: 'Complete To Do List project',
                index: 2,
                completed: false
            }
        ];
    }

    getList() {
        this.lists = this.loadList() ? this.loadList() : this.lists;
    }

    loadList() {
        return localStorage.getItem('list');
    }
}