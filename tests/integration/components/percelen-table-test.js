import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('percelen-table', 'Integration | Component | percelen table', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{percelen-table}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#percelen-table}}
      template block text
    {{/percelen-table}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
