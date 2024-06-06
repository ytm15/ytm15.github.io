function renderSearchSuggestions(parent, value, sbInput) {
const xhttpr = new XMLHttpRequest();
xhttpr.open('GET', 'https://inv.tux.pizza/api/v1/search/suggestions?q=' + value, true);
 
xhttpr.send();
 
xhttpr.onload = function() {
  if (xhttpr.status === 200) {
      const data = JSON.parse(xhttpr.response);
      
      parent.innerHTML = "";
data.suggestions.forEach(function(item) {
const li = document.createElement("li");
li.classList.add("sbdd-siggestion-item")
li.innerHTML = `<a href="#/results?query=${encodeURIComponent(item)}" class="sbdd-suggestion-link has-ripple"><div class="sbdd-item-text-cont"><div>${item}</div></div><div class="sbdd-item-icon has-ripple"><ytm15-icon class="arrow-top-left-icon"><svg viewBox="0 0 24 24" fill=""><path d="M19,17.59L17.59,19L7,8.41V15H5V5H15V7H8.41L19,17.59Z" style="display: none;"></path><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" style="transform: rotate(45deg)translate(5px, -12px);"></path></svg></ytm15-icon></div></a>`;
li.role = "presentation";
li.querySelector(".sbdd-item-icon").onclick = function(){
  sbInput.click();
  sbInput.value = li.querySelector(".sbdd-item-text-cont>div").innerHTML;
  setTimeout(function() {
  sbInput.focus();
  }, 0);
  return false;
}
li.onmouseover = function(){
li.classList.add("sbdd-selected");
}
li.onmouseout = function(){
li.classList.remove("sbdd-selected");
}
parent.appendChild(li);

/* Original list navigation code below was taken from: https://stackoverflow.com/a/45984973 */
var ul = parent;
var liSelected;
var index = 0;

if (document.querySelector('[data-mode="searching"]')) {
document.querySelector('[data-mode="searching"]').addEventListener('keyup', function(event) {
    var len = ul.getElementsByTagName('li').length-0;
    
    // DOWN ARROW 
    if(event.which === 40) {
        index++;

        if (liSelected) {
            removeClass(liSelected, 'sbdd-selected');
            next = ul.getElementsByTagName('li')[index];

            if(typeof next !== undefined && index <= len) {
                liSelected = next;
            }
            else {
                index = 0;
                liSelected = ul.getElementsByTagName('li')[0];
            }

            addClass(liSelected, 'sbdd-selected');
            /* console.log(index); */
            sbInput.value = next.innerText;
        }
        else {
            index = 0;
            liSelected = ul.getElementsByTagName('li')[0];
            addClass(liSelected, 'sbdd-selected');
        }
    }
    // UP ARROW
    else if (event.which === 38) {
        if (liSelected) {
            removeClass(liSelected, 'sbdd-selected');
            index--;
            next = ul.getElementsByTagName('li')[index];

            if(typeof next !== undefined && index >= 0) {
                liSelected = next;
            }
            else {
                index = len;
                liSelected = ul.getElementsByTagName('li')[len];
            }

            addClass(liSelected, 'sbdd-selected');
            sbInput.value = next.innerText;
        }
        else {
            index = 0;
            liSelected = ul.getElementsByTagName('li')[len];
            addClass(liSelected, 'sbdd-selected');
        }
    }
}, false);

function removeClass(el, className) {
    if(el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
};

function addClass(el, className) {
    if(el.classList) {
        el.classList.add(className);
    } else {
        el.className += ' ' + className;
    }
};
}

});
  } else {
      console.error("An error occured with the server (" + xhttpr.status + ")");
  }
};
}

function searchSuggestList(parent, sbInput) {
const listCont = document.createElement("div");
var listClassName = "sbdd-list-cont";
listCont.classList.add(listClassName);
sbInput.onblur = function(){
setTimeout(function() {
  listCont.style.display = "none";
}, 01);
}
sbInput.onfocus = function(){
setTimeout(function() {
  listCont.style.display = "";
}, 01);
}
listCont.onmousedown = function(){
setTimeout(function() {
  sbInput.focus();
}, 0);
}
listCont.onmouseup = function(){
setTimeout(function() {
  sbInput.blur();
}, 0);
}
if (parent.hasChildNodes(listCont)) {
parent.querySelector("." + listClassName).remove();
}
parent.appendChild(listCont);
const ul = document.createElement("ul");
ul.classList.add("sbdd-list");
ul.role = "listbox";
listCont.appendChild(ul);

renderSearchSuggestions(ul, sbInput.value);
sbInput.onclick = function() {
setTimeout(function() {
renderSearchSuggestions(ul, sbInput.value, sbInput);
}, 01);
}
sbInput.onkeydown = function(event){
/* Down arrow */
if(event.which === 40) {
return false;
}
/* Up arrow */
else if(event.which === 38) {
return false;
}
this.onclick();
};

const sbdbStyle = document.createElement("style");
sbdbStyle.type = "text/css";
sbdbStyle.innerHTML = `
.sbdd-list-cont ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
.sbdd-list-cont li {
    text-align: left;
}
.sbdd-list-cont li.sbdd-selected {
    background-color: rgba(0,0,0,0.06);
}
.sbdd-list-cont {
    background-color: transparent;
    font-size: 1.6rem;
    color: #707070;
    position: relative;
    z-index: 10;
}
a.sbdd-suggestion-link {
    display: flex;
}
.sbdd-item-icon {
    padding: 15px 12px;
    display: flex;
    color: rgba(0, 0, 0, 0.5);
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
.sbdd-item-text-cont {
    padding: 18px 12px 18px 46px;
    flex-grow: 1;
}
`;
document.head.appendChild(sbdbStyle);
}