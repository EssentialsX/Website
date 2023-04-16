<script setup lang="ts">
import { reactive, ref } from 'vue';
import data from '../data/commands.json'
import Fuse from 'fuse.js'

const state = reactive({
    inputText: ref(""),
    outputCount: ref(0),
    outputEntries: ref([]),
    rawData: ref([])
})

const fuseOpts = {
    includeScore: true,
//    keys: ["base", "aliases", "description"]
    keys: [
        {
            name: "base",
            weight: 6
        },
        {
            name: "aliases",
            weight: 3
        },
        {
            name: "description",
            weight: 1
        }
    ],
    ignoreLocation: true
}
const fuse = new Fuse(data.commands, fuseOpts)

function search() {
    const text = state.inputText

    if (text.length <= 0) {
        return
    }

    const search = fuse.search(text)
    state.rawData = search
    state.outputEntries = search.sort((a, b) => a.score < b.score ? -1 : 1).map(entry => entry.item)
    state.outputCount = search.length
}
</script>

<template>
    <div>
        <input type="search" name="inputBox" id="inputBox" v-model="state.inputText">
        <button @click="search">go</button>

        <table>
            <tbody>
                <tr v-for="entry in state.outputEntries" :key="entry.base">
                    <td>{{ entry.module }}</td>
                    <td>{{ entry.base }}</td>
                    <td>{{ entry.description }}</td>
                    <td>{{ entry.usage }}</td>
                    <td>{{ entry.aliases }}</td>
                </tr>
            </tbody>
        </table>

        <details>
            <summary>Raw search data</summary>
            <code>
                <pre>
                    {{ state.rawData }}
                </pre>
            </code>
        </details>
    </div>
</template>