# DROPZONE - Simple drag and drop that works.
Angular directive for simple drag and drop functionality.

## Install
`$> bower install angular-ui-dropzone`

## Usage
Two attributes are all ya need.

---
**ATTRIBUTE** `droppable` - a draggable element that can be dropped into a
`dropzone`

**ATTRIBUTE** `dropzone` - an element in which `droppable` elements can be placed (by dragging).


```html
<div class="col-sm-4" dropzone>
    <div droppable>
        Draggable Item 1
    </div>
</div>

<div class="col-sm-4" dropzone>
    <div droppable>
        Draggable Item 2
    </div>
    <div droppable>
        Draggable Item 4
    </div>
</div>

<div class="col-sm-4" dropzone>
    <div droppable>
        Draggable Item 5
    </div>
    <div droppable>
        Draggable Item 6
    </div>
</div>
```
