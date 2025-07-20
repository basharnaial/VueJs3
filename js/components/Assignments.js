// Level 1
import AssignmentList from './AssignmentList.js'
export default {
    components: {
        AssignmentList,
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

    <!-- Add Assignment Form -->

    <form @submit.prevent="addAssignment"  class="bg-white rounded-lg shadow-md p-4" >
    <div class=" mt-2">
  <input v-model="newAssignment" type="text"  placeholder="إضافة مهمة جديدة">
        <button type="submit">إضافة</button>
      </div> 
    </form>
    `,

data() {
    return {
    AssignmentA: [
        { name: 'إنهاء المشروع', completed: false,id: 1 },
        { name: 'قراءة الفصل الرابع', completed: false,id: 2 },
        { name: 'تسليم الواجب', completed: false,id: 3 },

    ],
    newAssignment: ''

    };
},
methods: {
    addAssignment(){
        this.AssignmentA.push({
            name: this.newAssignment,
            completed: false,
            id: this.AssignmentA.length + 1
        });
        this.newAssignment = '';
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
