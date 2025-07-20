export default{
    // use v-bind to bind the type of the button to the button لربط
    template: `<button :class="{
        'px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed': true,
        'bg-blue-500 text-white': type === 'primary',
        'bg-red-500 text-white': type === 'danger',
        'bg-green-500 text-white': type === 'success',
        'bg-yellow-500 text-white': type === 'warning',
        'bg-gray-500 text-white': type === 'secondary',
        'bg-purple-500 text-white': type === 'info',
        'bg-orange-500 text-white': type === 'light',
        'bg-black text-white': type === 'dark',
        'is-loading': processing
}
    " :disabled="processing">
        <slot></slot>
        </button>`,
    mounted() {
        // alert('hello');
    },

    // Props are used to pass data from parent to child component 
    // example imagine you have a parent component that has a button and you want to pass the type of the button to the child component 
    // in this example we are passing the type of the button to the child component and the child component can use the type of the button to style the button
    props: {
        // Name of the prop
        type: {
            // Type of the prop
            type: String,
            // Default value of the prop
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },

}