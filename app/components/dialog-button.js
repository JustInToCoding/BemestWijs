import Component from '@ember/component';

export default Component.extend({
  showDialog: false,

  didInsertElement() {
    this.set('dialogOrigin', this.$());
  },

  actions: {
    openDialog() {
      console.log(1234);
      this.set('showDialog', !this.get('showDialog'))
    }
  }
});
