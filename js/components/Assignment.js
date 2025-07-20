// Level 3
export default {
    template: `
    <!-- Single Task Item: عنصر مهمة واحد -->
    <li class="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
        <!-- Custom Checkbox -->
        <label class="flex items-center cursor-pointer flex-1">
            <div class="relative">
                <input 
                    type="checkbox" 
                    v-model="assignment.completed"
                    class="sr-only"
                >
                <!-- Custom checkbox design -->
                <div class="w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200"
                     :class="assignment.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-gray-400'">
                    <svg v-if="assignment.completed" class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                </div>
            </div>
            
            <!-- Task name with styling -->
            <span class="ml-3 text-gray-700 transition-all duration-200"
                  :class="assignment.completed ? 'line-through text-gray-500' : ''">
                {{ assignment.name }}
            </span>
        </label>
        
        <!-- Status indicator -->
        <div class="ml-2">
            <span class="text-xs px-2 py-1 rounded-full"
                  :class="assignment.completed ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'">
                {{ assignment.completed ? 'مكتملة' : 'قيد التنفيذ' }}
            </span>
        </div>
    </li>
    `,
props: {
    assignment: Object
}
}