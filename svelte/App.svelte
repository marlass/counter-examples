<script>
	let count = 0;

	function increment() {
		count += 1;
	}

	function decrement() {
		count -= 1;
	}
</script>

<h1>Counter: {count}</h1>
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
