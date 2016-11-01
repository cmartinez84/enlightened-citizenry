import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('subcommittee-results', 'Integration | Component | subcommittee results', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{subcommittee-results}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#subcommittee-results}}
      template block text
    {{/subcommittee-results}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
