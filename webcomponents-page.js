(function () {
  'use strict';
  Polymer({

    is: 'webcomponents-page',

    properties: {
      /**
       * Json for categories
       */
      categories: {
        type: Array,
        value: function() {
          return [];
        },
      },
      /**
       * Json for components
       */
      components: {
        type: Array,
        value: function() {
          return [];
        }
      },
      /**
       * show the name of selected category
       */
      selected: {
        type: String
      },
      /**
       * Hide the initial categories, only show the components
       */
      hideCategories: {
        type: Boolean,
        value: false
      },
      /**
       * this is the category color selected
       */
      categoryColor: {
        type: String
      }
    },
    _setWebcomponents: function(e) {
      var model = e.model.item;
      this.$.components.hidden = false;
      this.categoryColor = e.model.item.categoryColor;
      this.components = e.model.item.webcomponents;
      this.fire('select-category', e.model.item);
    },
    _computeNumberOfComponents: function(category) {
      return category.length;
    }

  });
}());
