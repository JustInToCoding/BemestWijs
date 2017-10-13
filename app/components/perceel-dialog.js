import Component from '@ember/component';

export default Component.extend({
  actions: {
    closeDialog() {
      this.set( 'isShowing', false);
    }
  }
});
