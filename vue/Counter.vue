<template>
    <div>
        <h1>Counter: {{ count }}</h1>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        increment() {
            this.count += 1;
        },
        decrement() {
            this.count -= 1;
        }
    }
}
</script>
