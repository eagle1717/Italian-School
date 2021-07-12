import Vue from "vue";

Vue.directive("tooltip", {
  inserted: function(el, binding) {
    let tooltipElem;

    el.onmouseover = function() {
      tooltipElem = document.createElement("div");
      tooltipElem.className = "c-tooltip";
      tooltipElem.innerHTML = binding.value.text;
      document.body.append(tooltipElem);

      let coords = el.getBoundingClientRect();

      let left =
        coords.left + el.offsetWidth / 2 - tooltipElem.offsetWidth / 2 - 3;
      if (left < 0) left = 0;

      let top = coords.top - tooltipElem.offsetHeight - 10;
      if (top < 0) {
        top = coords.top + el.offsetHeight + 10;
      }

      tooltipElem.style.left = parseInt(left) + "px";
      tooltipElem.style.top = parseInt(top) + "px";
    };

    const remove = () => {
      if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
      }
    };

    el.onmouseout = remove;
    el.onclick = remove;
  }
});
