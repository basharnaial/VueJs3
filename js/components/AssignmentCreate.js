export default {
    template: `

    <form @submit.prevent="addAssignment"  class="bg-white rounded-lg shadow-md p-4" >
    <div class=" mt-2">
  <input v-model="newAssignment" type="text"  placeholder="إضافة مهمة جديدة">
        <button type="submit">إضافة</button>
      </div> 
    </form>

    `,
    data(){
        return {
            newAssignment: ''
        }
    },
    // props is used to pass data from parent to child 
    // so now we need in the parent to pass something to child in this component of child tag
    // props: {
    //     AssignmentA: Array
    // },  
    methods: {
        addAssignment(){
            this.$emit('AddAssignmentEmitChild', this.newAssignment);
            // props is used to pass data from parent to child 
            // this.AssignmentA.push({
            //     name: this.newAssignment,
            //     completed: false,
            //     id: this.AssignmentA.length + 1
            // });
            this.newAssignment = '';
        }
    }
}