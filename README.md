# DROPZONE - Simple drag and drop that works.
Angular directive for simple drag and drop functionality.

## Install
`$> bower install angular-ui-dropzone`

## Usage
Two attributes are all ya need.

### Attribute `dropzone`
Designates the element as a "droppable zone". Any `droppable` element can be dropped here.

### Attribute `ng-model` (optional)
Add this to a `dropzone` element in which to track the items. Various models will remain in sync, no worries there

### ATTRIBUTE `droppable`
**Must be a `dropzone` descendant** - a draggable element that can be dropped into a `dropzone`


```html
<div class="col" ng-repeat="col in columns" ng-model="col" dropzone>
    <div ng-repeat="item in col" droppable>
        <h4>{{item.name}}</h4>
    </div>
</div>
```

## TODO
- More layout controls (reduce immediate child node dependencies)
