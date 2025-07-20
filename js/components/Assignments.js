// Level 1
import AssignmentList from './AssignmentList.js'
import AssignmentCreate from './AssignmentCreate.js'
export default {
    components: {
        AssignmentList,
        AssignmentCreate
    },
    template: `
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

    <!-- Tasks Lists: قوائم المهام -->
    <div class="space-y-6">
        <AssignmentList :assignments="filters.inProgress" title="قيد التنفيذ" />
        <AssignmentList :assignments="filters.completed" title="مكتملة" />
    </div>

    <AssignmentCreate @AddAssignmentEmitChild="addAssignment"> </AssignmentCreate>
    `,

data() {
    return {
    AssignmentA: [
        { name: 'إنهاء المشروع', completed: false,id: 1 },
        { name: 'قراءة الفصل الرابع', completed: false,id: 2 },
        { name: 'تسليم الواجب', completed: false,id: 3 },

    ],


    };
},
methods: {
    addAssignment(name){
        this.AssignmentA.push({
            name: name,
            completed: false,
            id: this.AssignmentA.length + 1
        });
    }

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
