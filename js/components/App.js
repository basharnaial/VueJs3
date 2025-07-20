// Level 0 where level means the level of the component and the lower is the start of the component
import Assignments from './Assignments.js'
export default {
    components: {
        Assignments
    },
    template: `
    <!-- Container: يجعل المحتوى في المنتصف مع padding -->
    <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <!-- Header: عنوان التطبيق مع تصميم جميل -->
        <header class="max-w-4xl mx-auto mb-8">
            <h1 class="text-3xl font-bold text-gray-800 text-center mb-2">
                📝 قائمة المهام
            </h1>
            <p class="text-gray-600 text-center">
                تطبيق Vue.js لإدارة المهام اليومية
            </p>
        </header>
        
        <!-- Main Content: المحتوى الرئيسي -->
        <main class="max-w-4xl mx-auto">
            <assignments></assignments>
        </main>
    </div>
    `,

    // components: {
    //     'component-app-button': AppButton
    //     },
        
       
    };