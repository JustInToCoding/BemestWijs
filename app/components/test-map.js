import Component from '@ember/component';

export default Component.extend({
  zoom: 15,
  didReceiveAttrs() {
    this._super(...arguments);
    this.set('lat', this.get('percelen')[1][0].lat);
    this.set('lng', this.get('percelen')[1][0].lng);
  }
});
