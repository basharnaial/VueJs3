export default{
    template: `<button class="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed" :disabled="processing">
        <slot></slot>
        </button>`,
    mounted() {
        // alert('hello');
    },
    data() {
        return {
            processing: true
        }
    }
}