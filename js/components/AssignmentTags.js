export default {
    template: `
    <div class="flex gap-2">

        <!-- emit the tag to the parent component line 7 -->
        <button v-for="tag in tags"
        @click="$emit('update:currentTag', tag)"
        class="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs mt-6 mb-5"
            :class="{
                'bg-green-100 text-green-600 border-green-600': currentTag === tag,
                'bg-red-100 text-red-600 border-red-600': tag !== currentTag
            }"
        >  {{ tag }}  </button>  
    </div>
    `,

    props: {
        initalTags: Array,
        currentTag: String
    },
    data(){
        return {
            // currentTag: 'All'
        }
    },
    computed: {
        tags(){
            return ['All', ...new Set(this.initalTags)];
        }
    }

}