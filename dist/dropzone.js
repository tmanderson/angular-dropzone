angular.module('ui.dropzone', [])
  .value('utils', {
    closest: function closest(el, selector) {
      if(!el) return null;

      var target = el;
      var i;

      while(target.parentNode && !target.matches(selector)) {
        target = target.parentNode;
      }

      if(target.parentNode) {
        return target;
      }
      else {
        return false;
      }
    }
  })
  .run([ 'utils', function(utils) {
    var closest = utils.closest;
    var zone, dragged, displaced, displacedRect;

    document.addEventListener('drag', function(e) {
      if(!displaced) return;

      //  If we're dragging on the lower half of a draggable, then the drop will
      //  go after the current displaced
      if(displacedRect.top + displacedRect.height/2 < e.pageY) {
        displaced.classList.remove('dropzone-displaced');
        if(displaced.nextElementSibling === dragged) return;
        displaced = displaced.nextElementSibling || null;
        displacedRect = displaced && displaced.getBoundingClientRect() || null;
        return displaced && displaced.classList.add('dropzone-displaced');
      }
      //  If we're within the top half of displaced, nothing changes
      else {
        displaced.classList.add('dropzone-displaced');
      }
    });

    document.addEventListener('dragstart', function(e) {
      dragged = e.target;
    });

    document.addEventListener('dragend', function(e) {
      
    });

    document.addEventListener('dragover', function(e) {
      e.preventDefault();
    });

    document.addEventListener('dragenter', function(e) {
      var target = closest(e.target, '[dropzone]');
      if(!target) return;
      var droppables = target.querySelectorAll('[droppable]');
      var listEl, rect, i;

      if(displaced && !target.contains(displaced)) {
        displaced.classList.remove('dropzone-displaced');
        displaced = displacedRect = null;
      }

      for(i = 0; i < droppables.length; i++) {
        listEl = droppables[i];
        if(listEl === dragged) continue;

        rect = listEl.getBoundingClientRect();

        //  items will only be displaced "down" (as in we're dropping before)
        if(rect.bottom > e.pageY) {
          displaced = listEl;
          displacedRect = listEl.getBoundingClientRect();
          displaced.classList.add('dropzone-displaced');
          break;
        }
        else {
          displaced = null;
        }
      }

      zone = target;
    });

    document.addEventListener('dragleave', function(e) {
      var zone = closest(e.target, '[dropzone]');
      if(!zone) return;
      var droppables = zone.querySelectorAll('[droppable]');
      for(var i = 0; i < droppables.length; i++) {
        droppables[i].classList.remove('dropzone-displaced');
      }
    });

    document.addEventListener('drop', function(e) {
      if(displaced) {
        displaced.parentNode.insertBefore(dragged, displaced);
        displaced.classList.remove('dropzone-displaced');
      }
      //  if no displaced, append
      else {
        zone.appendChild(dragged);
      }

      zone = displaced = displacedRect = dragged = null;
    });
  }])
  .directive('droppable', ['utils', function(utils) {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var el = element[0];
        element.attr('draggable', true);
        element[0]._dropzone = utils.closest(element[0], '[dropzone]');
      }
    };
  }])
  .directive('dropzone', ['utils', function() {
    return {
      restrict: 'A',
      link: function(scope, element) {
        var el = element[0];
      }
    };
  }]);