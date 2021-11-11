# example 

```js
const pagination = require('./pagination');

const items = ["el1", "el2", "el3", "el4", "el5", "el6", "el7", "el8", "el9", "el10", "el11", "el12", "el13", "el14", "el15", "el16"];
const itemsPerPage = 6;

const page = new pagination.Pagination(items, itemsPerPage);

console.log(page.getPage(1)); // return => [ 'el1', 'el2', 'el3', 'el4', 'el5', 'el6' ]
console.log(page.getPage(2)); // return => [ 'el7', 'el8', 'el9', 'el10', 'el11', 'el12' ]
```
