(function () {
  'use strict';
  Polymer({

    is: 'webcomponents-page',

    properties: {
      categories: {
        type: Array,
        value: function() {
          return [];
        },
      },
      components: {
        type: Array,
        value: function() {
          return [];
        }
      },
      selected: {
        type: String
      },
      hideCategories: {
        type: Boolean,
        value: false
      },
      categoryColor: {
        type: String
      }
    },
    attached: function() {
      this.components = this.categories[0].webcomponents;
      this.categoryColor = this.categories[0].categoryColor;
      this.selected = this.categories[0].categoryName;
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
