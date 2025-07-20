// Level 2 
import SingleAssignment from './Assignment.js'
export default {
    components: {
        SingleAssignment
    },
    template: `
      <section v-if="assignments.length > 0">
        <h2 class="font-bold mb-2">{{title}}</h2>


        <ul>
        <SingleAssignment v-for="assignment in assignments" :key="assignment.id" :assignment="assignment" />
        </ul>
    </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
