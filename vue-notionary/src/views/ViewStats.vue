<template>
    <div class="stats">
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>Stat</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Number of notes</td>
                    <td>{{ storeNotes.totalNotesCount }}</td>
                </tr>
                <tr>
                    <td>Number of characters</td>
                    <td>{{ storeNotes.totalCharactersCount }}</td>
                </tr>
            </tbody>
        </table>
        <input v-model="loveNotionary" class="input" type="text" placeholder="Do you love Notionary" v-autofocus/>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStoreNotes } from '../stores/storeNotes';
import { useWatchCharacters } from '@/use/useWatchCharacters'

const storeNotes = useStoreNotes()

const loveNotionary = ref('')
useWatchCharacters(loveNotionary, 50)


</script>