import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | conversions', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:conversions');
    assert.ok(route);
  });
});
