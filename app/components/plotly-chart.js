import Component from '@ember/component';
//import plotly from 'plotly.js';

export default Component.extend({
  didInsertElement() {
    Plotly.plot( this.$('#plotlyContainer')[0], [{
      x: [1, 2, 3, 4, 5],
      y: [1, 2, 4, 8, 16] }], {
      margin: { t: 0 } } );
  }
});
