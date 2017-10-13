'use strict';

define('bemest-wijs/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('components/dialog-button.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/dialog-button.js should pass ESLint\n\n12:7 - Unexpected console statement. (no-console)');
  });

  QUnit.test('components/gauge-chart.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/gauge-chart.js should pass ESLint\n\n98:5 - \'Plotly\' is not defined. (no-undef)');
  });

  QUnit.test('components/material-stepper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/material-stepper.js should pass ESLint\n\n');
  });

  QUnit.test('components/paper-step.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/paper-step.js should pass ESLint\n\n');
  });

  QUnit.test('components/perceel-dialog.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/perceel-dialog.js should pass ESLint\n\n');
  });

  QUnit.test('components/percelen-table.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/percelen-table.js should pass ESLint\n\n');
  });

  QUnit.test('components/percelen-wrapper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/percelen-wrapper.js should pass ESLint\n\n');
  });

  QUnit.test('components/plotly-chart.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/plotly-chart.js should pass ESLint\n\n6:5 - \'Plotly\' is not defined. (no-undef)');
  });

  QUnit.test('components/test-map.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/test-map.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/test-page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/test-page.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/test-page.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/test-page.js should pass ESLint\n\n');
  });
});
define('bemest-wijs/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('bemest-wijs/tests/helpers/ember-basic-dropdown', ['exports', 'ember-basic-dropdown/test-support/helpers', 'ember-native-dom-helpers'], function (exports, _helpers, _emberNativeDomHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.nativeClick = exports.fireKeydown = exports.tapTrigger = exports.clickTrigger = exports.nativeTap = undefined;
  Object.defineProperty(exports, 'nativeTap', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTap;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'tapTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.tapTrigger;
    }
  });
  Object.defineProperty(exports, 'fireKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.fireKeydown;
    }
  });
  exports.default = _helpers.default;
  var nativeClick = exports.nativeClick = _emberNativeDomHelpers.click;
});
define('bemest-wijs/tests/helpers/ember-power-select', ['exports', 'ember-power-select/test-support/helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.selectChoose = exports.touchTrigger = exports.nativeTouch = exports.clickTrigger = exports.typeInSearch = exports.triggerKeydown = exports.nativeMouseUp = exports.nativeMouseDown = exports.findContains = undefined;
  Object.defineProperty(exports, 'findContains', {
    enumerable: true,
    get: function () {
      return _helpers.findContains;
    }
  });
  Object.defineProperty(exports, 'nativeMouseDown', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseDown;
    }
  });
  Object.defineProperty(exports, 'nativeMouseUp', {
    enumerable: true,
    get: function () {
      return _helpers.nativeMouseUp;
    }
  });
  Object.defineProperty(exports, 'triggerKeydown', {
    enumerable: true,
    get: function () {
      return _helpers.triggerKeydown;
    }
  });
  Object.defineProperty(exports, 'typeInSearch', {
    enumerable: true,
    get: function () {
      return _helpers.typeInSearch;
    }
  });
  Object.defineProperty(exports, 'clickTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.clickTrigger;
    }
  });
  Object.defineProperty(exports, 'nativeTouch', {
    enumerable: true,
    get: function () {
      return _helpers.nativeTouch;
    }
  });
  Object.defineProperty(exports, 'touchTrigger', {
    enumerable: true,
    get: function () {
      return _helpers.touchTrigger;
    }
  });
  Object.defineProperty(exports, 'selectChoose', {
    enumerable: true,
    get: function () {
      return _helpers.selectChoose;
    }
  });
  exports.default = _helpers.default;
});
define('bemest-wijs/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'bemest-wijs/tests/helpers/start-app', 'bemest-wijs/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('bemest-wijs/tests/helpers/resolver', ['exports', 'bemest-wijs/resolver', 'bemest-wijs/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('bemest-wijs/tests/helpers/start-app', ['exports', 'bemest-wijs/app', 'bemest-wijs/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('bemest-wijs/tests/integration/components/dialog-button-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('dialog-button', 'Integration | Component | dialog button', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "QEZ6zOr6",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"dialog-button\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "r128kMe7",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"dialog-button\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/gauge-chart-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('gauge-chart', 'Integration | Component | gauge chart', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Ek8K8t54",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"gauge-chart\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "XGvWMLfl",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"gauge-chart\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/material-stepper-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('material-stepper', 'Integration | Component | material stepper', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "XlgjQVqE",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"material-stepper\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "dtvCAQm/",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"material-stepper\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/perceel-dialog-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('perceel-dialog', 'Integration | Component | perceel dialog', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "eqjs1jfK",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"perceel-dialog\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "z8iXWswe",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"perceel-dialog\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/percelen-table-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('percelen-table', 'Integration | Component | percelen table', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "2cf4FdtG",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"percelen-table\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "g0anVmBU",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"percelen-table\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/percelen-wrapper-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('percelen-wrapper', 'Integration | Component | percelen wrapper', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "+kdD3zBP",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"percelen-wrapper\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "bZi/7Ee9",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"percelen-wrapper\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/plotly-chart-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('plotly-chart', 'Integration | Component | plotly chart', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "gtb8y1ES",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"plotly-chart\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "BJf+at5N",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"plotly-chart\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/integration/components/test-map-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('test-map', 'Integration | Component | test map', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "Xz8/RFjO",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"test-map\"],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');

    // Template block usage:
    this.render(Ember.HTMLBars.template({
      "id": "nekW3p8n",
      "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"test-map\",null,null,{\"statements\":[[0,\"      template block text\\n\"]],\"parameters\":[]},null],[0,\"  \"]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), 'template block text');
  });
});
define('bemest-wijs/tests/test-helper', ['bemest-wijs/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('bemest-wijs/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/dialog-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/dialog-button-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/gauge-chart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/gauge-chart-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/material-stepper-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/material-stepper-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/perceel-dialog-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/perceel-dialog-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/percelen-table-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/percelen-table-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/percelen-wrapper-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/percelen-wrapper-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/plotly-chart-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/plotly-chart-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/test-map-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/test-map-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/test-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/test-page-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/test-page-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/test-page-test.js should pass ESLint\n\n');
  });
});
define('bemest-wijs/tests/unit/controllers/test-page-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('controller:test-page', 'Unit | Controller | test page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  // Replace this with your real tests.
  (0, _emberQunit.test)('it exists', function (assert) {
    var controller = this.subject();
    assert.ok(controller);
  });
});
define('bemest-wijs/tests/unit/routes/test-page-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleFor)('route:test-page', 'Unit | Route | test page', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
require('bemest-wijs/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
