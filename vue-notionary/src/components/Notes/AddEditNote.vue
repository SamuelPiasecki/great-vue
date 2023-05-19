<!-- eslint-disable vue/no-mutating-props -->
<template>
    <div 
        class="card p-4 mb-5"
        :class="`${bgColor}`"
    >
        <label v-if="label" class="label has-text-white">{{ label }}</label>
        <div class="field">
            <div class="control">
                <!-- eslint-disable-next-line vue/no-mutating-props -->
                <textarea 
                    v-bind:value="modelValue"
                    v-on:input="$emit('update:modelValue', $event.target.value)"
                    class="textarea" 
                    :placeholder="placeholder" 
                    ref="textareaRef"
                    maxlength="100"
                    v-autofocus
                />
            </div>
        </div>
        <div class="field is-grouped is-grouped-right">
            <div class="control">
                <slot name="buttons"/>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    bgColor: {
        type: String,
        default: 'bg-textarea'
    },
    placeholder: {
        type: String,
        default: 'Type something...'
    },
    label: {
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const textareaRef = ref(null)

const focusTextarea = () => {
    textareaRef.value.focus()
}

defineExpose({
    focusTextarea
})

</script>

<style scoped>
.bg-textarea {
    background: #0A4D68;
}
.bg-textarea-edit{
    background: #088395;
}
</style>