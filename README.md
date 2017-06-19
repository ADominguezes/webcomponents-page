# \<webcomponents-page\>

webcomponents page is a page for ADominguez page

__Example__

```html
<webcomponents-page categories="[[categories]]"></webcomponents-page>
```

It´s possible hide the initial categories using the property `hideCategories`. this show only the components

```html
<webcomponents-page categories="[[categories]]" hide-categories></webcomponents-page>
```

__Data Json__

```json
[{
  "categoryName": "Polymer 1",
  "categoryImgUrl": "http://lorempixel.com/200/200/abstract/1/",
  "categoryColor": "#f8688a",
  "categoryDescription": "Componentes para aplicaciones realizados en polymer",
  "webcomponents": [{
    "componentName": "adom-media",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/1/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-card",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/2/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-header",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/3/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-images-panel",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/4/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  }]

},
{
  "categoryName": "Polymer 2",
  "categoryImgUrl": "http://lorempixel.com/200/200/abstract/2/",
  "categoryColor": "#66aeed",
  "categoryDescription": "Componentes para aplicaciones realizados en polymer 2",
  "webcomponents": [{
    "componentName": "adom-media",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/5/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-header",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/6/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  }]
},
{
  "categoryName": "Angular",
  "categoryImgUrl": "http://lorempixel.com/200/200/abstract/3/",
  "categoryColor": "#e44e4a",
  "categoryDescription": "Componentes para aplicaciones realizados en polymer 2",
  "webcomponents": [{
    "componentName": "adom-media",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/7/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-card",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/8/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  },
  {
    "componentName": "adom-header",
    "componentDescription": "Component description",
    "componentImage": "http://lorempixel.com/600/200/technics/9/",
    "componentgithub": "https://github.com/ADominguezes",
    "componentdemo": "https://github.com/ADominguezes"
  }]
}]
```

## Serving your Application

You can serve your application with:

    $ gulp serve

## Building Your Application

The application goes building while you build your application, you can check your application in `dist` folder.
