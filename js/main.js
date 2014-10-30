
const SELECTIONS_PER_ROW = 12;
      const RING_RADIUS = 50;

      function setup_selections (row)
      {
        var selectionAngle = 360 / SELECTIONS_PER_ROW;
        for (var i = 0; i < SELECTIONS_PER_ROW; i ++) {
          var selection = document.createElement('div');
          selection.className = 'selection';
          // compute and assign the transform for this selection
          var transform = 'rotateY(' + (selectionAngle * i) + 'deg) translateZ(' + RING_RADIUS + 'px)';
          selection.style.webkitTransform = transform;
       
        }

      }

      function init ()
      {
        setup_selections(document.getElementById('ring'));
    
      }

      // call init once the document is fully loaded
      window.addEventListener('load', init, false);
