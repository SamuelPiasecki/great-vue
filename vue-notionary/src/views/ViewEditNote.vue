<template>
    <div class="edit-note">
        <AddEditNote
            v-model="noteContent"
            bgColor="bg-textarea-edit"
            ref="addEditNoteRef"
            label="Edit Note"
            placeholder="Edit note"
        >
            <template #buttons>
                <button
                    @click="$router.back()"
                    class="button is-link is-light "
                >
                    Cancel
                </button>
                <button 
                    class="button is-link has-background-success ml-1"
                    :disabled="!noteContent"
                    @click="handleSaveClicked"
                >
                    Save Note
                </button>

            </template>
        </AddEditNote>
    </div>
</template>

<script setup>

import AddEditNote from '@/components/Notes/AddEditNote.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import { useStoreNotes } from '@/stores/storeNotes'

const route = useRoute()
const router = useRouter()

const storeNotes = useStoreNotes()

const noteContent = ref('')

noteContent.value = storeNotes.getNoteContent(route.params.id)

const handleSaveClicked = () => {
    storeNotes.updateNote(route.params.id, noteContent.value)
    router.push('/')
}

</script>

