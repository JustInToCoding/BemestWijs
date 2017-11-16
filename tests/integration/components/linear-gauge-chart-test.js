import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('linear-gauge-chart', 'Integration | Component | linear gauge chart', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{linear-gauge-chart}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#linear-gauge-chart}}
      template block text
    {{/linear-gauge-chart}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
