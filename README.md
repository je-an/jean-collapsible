## Description

Provides a collapsible control 

## Support
Supports both CommonJS and AMD eco system. If there is no loader, Collapsible is registered as a browser variable.

## Code Example
- Use it as browser variable
```js
var obj = new Collapsible({
    isCollapsed: true
});
```
- Use it with require.js
```js
require(["path/to/Collapsible"], function(Collapsible){
    // Work with Collapsible
});
```
## Installation

`npm install jean-collapsible --save --legacy-bundling`

## API Reference

**Options**

- **isCollapsed**: `Boolean` - `optional` - True if collapsible is collapsed, false otherwise

### Collapsible.add(id, name) 

Adds an element to the collapsible

**Parameters**
- **id**: `String` - id of the element
- **element**: `HTMLElement` - the html element which shall be added

**Returns**
- `Boolean` - True, if the element is added, exception otherwise

### Collapsible.remove(id) 

Removes an element from the collapsible

**Parameters**
- **id**: `String` - id of the element to be removed

**Returns**
- `Boolean` - True, if the element is removed, false otherwise

## Tests

- Open spec/spec-runner.html in browser to see the test cases.

## License

MIT