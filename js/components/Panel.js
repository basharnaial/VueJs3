export default {
    template: `
        <div :class="{
            'p-4 border rounded-lg bg-white rounded-lg shadow-md h-96 flex flex-col': true,
            'bg-white border-gray-300 text-white' : theme == 'light',
            'bg-gray-700 border-gray-600 text-white' : theme == 'dark',
        }">
            <h2 v-if="$slots.heading" class="text-white font-bold mb-2">
                <slot name="heading" /> 
            </h2> 
            
            <slot />
            
            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-sm">
                <slot name="footer"></slot> 
            </footer>
        </div> 
    `,

    props: {
        theme: { type: String, default: 'dark' }
    }
}