var count = 0
function increment() {
    count += 1
}

function decrement() {
    count -= 1
}
var Counter = {
    view: function() {
        return m("div", [
            m("h1", "Counter: " + count),
            m("button", {onclick: increment}, '+'),
            m("button", {onclick: decrement}, '-'),
        ])
    }
}
