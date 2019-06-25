---
layout: page
---

# hello

how's it goin {{ bob }}

<input v-model="bob">

<script>
export default {
    data() {
        return {
            bob: "bob"
        }
    }
}
</script>
