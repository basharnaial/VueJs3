// Level 2 
import SingleAssignment from './Assignment.js'
import AssignmentTags from './AssignmentTags.js'
export default {
    components: {
        SingleAssignment,
        AssignmentTags
    },
    template: /*html*/`

    
    <!-- Kanban Column: عمود كانبان -->
    
    <section v-if="assignments.length > 0" class="bg-white rounded-lg shadow-md h-96 flex flex-col">
        <!-- Column Header: رأس العمود -->

    <div class="flex items-center p-4 border-b border-gray-200 justify-between items-start">

            <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                 :class="title === 'قيد التنفيذ' ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'">
                <span class="text-lg">
                    {{ title === 'قيد التنفيذ' ? '⏳' : '✅' }}
                </span>
            </div>
            <h2 class="text-lg font-bold text-gray-800 flex-1">{{ title }}</h2>
            <span class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                {{ assignments.length }}
            </span>

            <button v-show="canToggle" @click="$emit('toggle')"> &times; </button>
        </div>

        <!-- Tags Filter -->
        <div class="px-4 py-2 border-b border-gray-100">
            <AssignmentTags 
            :inital-tags="assignments.map(a => a.tag)"
            v-model:currentTag="currentTag"
            />
        </div>

        <!-- Tasks List with Scroll: قائمة المهام مع التمرير -->
        <div class="flex-1 overflow-y-auto p-4">
            <ul class="space-y-2">
                <SingleAssignment 
                    v-for="assignment in FilteredAssignments" 
                    :key="assignment.id" 
                    :assignment="assignment" 
                />
            </ul>
            
            <!-- Empty State -->
            <div v-if="FilteredAssignments.length === 0" class="text-center py-8 text-gray-500">
                <div class="text-4xl mb-2">📝</div>
                <p>لا توجد مهام</p>
            </div>
        </div>

        <slot></slot>
    </section>
    `,
    props: {
        assignments: Array,
        title: String,
        canToggle: {type: Boolean, default: false}
    },
    data(){
        return {
            currentTag: 'All',
            show: true
        }
    }, 
    computed: {
        FilteredAssignments(){
            if(this.currentTag === 'All'){
                return this.assignments;
            }
            return this.assignments.filter(a => this.currentTag === '' || a.tag === this.currentTag);
            
        },
    
    }   
}
