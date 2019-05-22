<script>
	let counter = 0;

	function increment() {
		counter += 1;
	}

	function decrement() {
		counter -= 1;
	}
</script>

<h1>Counter: {counter}</h1>
<button on:click={increment}>+</button>
<button on:click={decrement}>-</button>
