import Component from '@ember/component';

export default Component.extend({
  counter: 0,
  actions: {
    increment() {
      this.set('counter', this.get('counter') + 1);
    },
    decrement () {
      this.set('counter', this.get('counter') - 1);
    }
  }
});
