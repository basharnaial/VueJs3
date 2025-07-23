// Level 1
import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: /*html*/`
    <!-- Stats Section: إحصائيات المهام -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <!-- Total Tasks -->
        <div class="bg-white rounded-lg shadow-md p-4 text-center">
            <div class="text-2xl font-bold text-blue-600">{{ AssignmentA.length }}</div>
            <div class="text-gray-600">إجمالي المهام</div>
        </div>
        
        <!-- In Progress -->
        <div class="bg-white rounded-lg shadow-md p-4 text-center">
            <div class="text-2xl font-bold text-yellow-600">{{ filters.inProgress.length }}</div>
            <div class="text-gray-600">قيد التنفيذ</div>
        </div>
        
        <!-- Completed -->
        <div class="bg-white rounded-lg shadow-md p-4 text-center">
            <div class="text-2xl font-bold text-green-600">{{ filters.completed.length }}</div>
            <div class="text-gray-600">مكتملة</div>
        </div>
    </div>

    <!-- Kanban Board: لوحة كانبان -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <AssignmentList @clicked="handleClick"  :assignments="filters.inProgress" title="قيد التنفيذ"> 
        
        <!-- Create component or any data of slot -->
         <AssignmentCreate @AddAssignmentEmitChild="addAssignment"> </AssignmentCreate>

        </AssignmentList>


        <AssignmentList :assignments="filters.completed" 
        v-if="showCompleted"
        title="مكتملة" canToggle 
        @toggle="showCompleted = !showCompleted"
         />
    </div>

    `,

    data() {
        return {
            AssignmentA: [


            ],
            showCompleted: true


        };
    },


    // we have axios library or fetch which is native ,  promise its like a man owes you money and you are waiting for him to pay you , its just promise one second, day or month 
    created() {
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                // console.log(data);
                this.AssignmentA = assignments;
            });
    },
    // mounted() {
    //     console.log('Component mounted on the page!');
    //   },
    //   updated() {
    //     console.log('Component updated after data change!');
    //   },
    methods: {
        addAssignment(name) {
            this.AssignmentA.push({
                name: name,
                completed: false,
                id: this.AssignmentA.length + 1
            });
        },
        handleClick() {
            alert('الزر في الابن تم الضغط عليه');
          }

    },

    // computed property its sort of method that can be cached
    computed: {

        filters() {
            return {
                inProgress: this.AssignmentA.filter(a => !a.completed),
                completed: this.AssignmentA.filter(a => a.completed)

            }
        }
    }

}
