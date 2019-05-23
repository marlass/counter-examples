import Component from '@ember/component';

export default Component.extend({
  count: 0,
  actions: {
    increment() {
      this.set('count', this.get('count') + 1);
    },
    decrement () {
      this.set('count', this.get('count') - 1);
    }
  }
});
