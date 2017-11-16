import Component from '@ember/component';

export default Component.extend({
  didInsertElement() {
    this._super(...arguments);
    const position = this.get('percentage') / 100 * 600;
    this.$('.arrow-up').css('left', `${position}px`);
  }
});
