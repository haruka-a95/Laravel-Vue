<template>
    <div class="page">
        <h1>アクセスOK</h1>
        <p>ボタンをクリックした回数：{{ counter }}</p>
        <button class="btn btn-primary" @click="counter += 1">
            click!
        </button>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            counter: 0,
        }
    },
}
</script>
