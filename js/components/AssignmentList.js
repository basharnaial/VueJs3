// Level 2 
import SingleAssignment from './Assignment.js'
export default {
    components: {
        SingleAssignment
    },
    template: `
    <!-- Task List Section: قسم قائمة المهام -->
    <section v-if="assignments.length > 0" class="bg-white rounded-lg shadow-md p-6">
        <!-- Header with icon and title -->
        <div class="flex items-center mb-4">
            <div class="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                 :class="title === 'قيد التنفيذ' ? 'bg-yellow-100 text-yellow-600' : 'bg-green-100 text-green-600'">
                <span class="text-lg">
                    {{ title === 'قيد التنفيذ' ? '⏳' : '✅' }}
                </span>
            </div>
            <h2 class="text-xl font-bold text-gray-800">{{ title }}</h2>
            <span class="ml-auto bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-sm">
                {{ assignments.length }}
            </span>
        </div>

        <!-- Tasks List -->
        <ul class="space-y-2">
            <SingleAssignment 
                v-for="assignment in assignments" 
                :key="assignment.id" 
                :assignment="assignment" 
            />
        </ul>
    </section>
    `,
    props: {
        assignments: Array,
        title: String
    }
}
