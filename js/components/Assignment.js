// Level 3
export default {
    template: `
    <!-- Kanban Card: بطاقة كانبان -->
    <li class="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition-shadow duration-200 cursor-pointer">
        <!-- Card Content -->
        <div class="flex items-start justify-between">
            <!-- Task Info -->
            <div class="flex-1 min-w-0">
                <div class="flex items-center mb-2">
                    <!-- Custom Checkbox -->
                    <label class="flex items-center cursor-pointer">
                        <div class="relative">
                            <input 
                                type="checkbox" 
                                v-model="assignment.completed"
                                class="sr-only"
                            >
                            <!-- Custom checkbox design -->
                            <div class="w-4 h-4 border-2 rounded flex items-center justify-center transition-all duration-200"
                                 :class="assignment.completed ? 'bg-green-500 border-green-500' : 'border-gray-300 hover:border-gray-400'">
                                <svg v-if="assignment.completed" class="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </div>
                        </div>
                    </label>
                </div>
                
                <!-- Task Name -->
                <h3 class="text-sm font-medium text-gray-800 mb-2 leading-tight"
                    :class="assignment.completed ? 'line-through text-gray-500' : ''">
                    {{ assignment.name }}
                </h3>
                
                <!-- Task Tag (if exists) -->
                <div v-if="assignment.tag" class="mb-2">
                    <span class="inline-block px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
                        {{ assignment.tag }}
                    </span>
                </div>
            </div>
        </div>
        
        <!-- Card Footer -->
        <div class="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
            <span class="text-xs px-2 py-1 rounded-full"
                  :class="assignment.completed ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'">
                {{ assignment.completed ? 'مكتملة' : 'جارية' }}
            </span>
            
            <!-- Task ID -->
            <span class="text-xs text-gray-400">
                #{{ assignment.id }}
            </span>
        </div>
    </li>
    `,
props: {
    assignment: Object
}
}