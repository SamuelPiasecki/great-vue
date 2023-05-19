import { watch } from 'vue'

export function useWatchCharacters(valuetoWatch, maxChars = 100) {
    watch(valuetoWatch, (newValue) => {
        if(newValue.length === maxChars){
            alert(`Only ${maxChars} characters`)
        }
    })
}