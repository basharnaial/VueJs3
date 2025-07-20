// Level 1
import AssignmentList from './AssignmentList.js'
export default {
    components: {
        AssignmentList,
    },
    template: `
    <section class="space-y-6    ">
    <AssignmentList :assignments="filters.inProgress" title="In Progress" />
    <AssignmentList :assignments="filters.completed" title="Completed" />
    </section>
    `,

data() {
    return {
    AssignmentA: [
        { name: 'Finish Project', completed: false,id: 1 },
        { name: 'read ch 4', completed: false,id: 2 },
        { name: 'turn in homework', completed: false,id: 3 },

    ]

    };
},
methods: {

},

// computed property its sort of method that can be cached
computed:{

    filters(){
        return{
            inProgress: this.AssignmentA.filter(a => !a.completed),
            completed:  this.AssignmentA.filter(a => a.completed)

        }
    }
}

 }
