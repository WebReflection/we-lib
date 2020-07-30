# we-lib

A `customElements` indirection to have _wickedElements_ library a part, without needing to bundle it within components.

```js
// vanilla
customElements.whenDefined('we-lib').then(() => {
  const {define} = customElements.get('we-lib');
  define('.my-component', {
    init() {
      console.log('my-component is ready');
    }
  });
});

// with helper
import when from 'once-defined';
when('we-lib').then(({define}) => {
  define('.another-component', {
    init() {
      console.log('another-component is ready');
    }
  });
});
```

### Previous Work

  * [uce](https://github.com/WebReflection/uce#how-to-avoid-bundling-%C2%B5ce-per-each-component) provides this idea already
  * the idea has been described in [this blog post](https://medium.com/@WebReflection/some-web-components-hint-75dce339ac6b)

