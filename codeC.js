
    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }

    let triggers = document.querySelectorAll('ul.selector a');
    let targets = document.querySelectorAll('.content');
    let selected = null;
    let visible = null;
    
    for (const trigger of triggers) {
      let target_id = trigger.getAttribute('data-target');
      let target = document.getElementById(target_id);
      
      trigger.onclick = function() {
        if (trigger === selected) { 
          return; 
        }
        
        if (selected !== null) {
          selected.classList.remove('selected');
        }
        
        trigger.classList.add('selected');
        selected = trigger;
        
        if (visible !== null) {
          visible.style['display'] = "none";
        }
        
        target.style['display'] = "block";
        visible = target;
      }
    }