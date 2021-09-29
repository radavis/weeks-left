# weeks-left

## todo

* display number of weeks left over image
* modal/sidebar for birthdate and expected lifetime
  - add input fields to index.html for birthdate and expected lifetime
  - call `weeksLeft()` with values from form
  - set birthdate, expectedLifetimeInDays to URL on form submission
  - retrieve birthdate, expectedLifetimeInDays from URL on `DOMContentLoaded` event


## what are the ideas that arise when creating this?

* would a templating system like handlebars be helpful?
* would WeeksLeft, Background components be a useful abstraction?
* simple build and test scripts would be helpful.
* javascript code splitting, separation of concerns


## what are the concerns i'm dealing with?

* how should this piece of UI look? how does it fit into the whole of the page?
* I'm mananging page structure and what it looks like.
* how to I achieve a goal state with this project? -> design
* what can I do to ensure the output is correct? -> test
* feature branches, code review, releasing
* what can I do to ensure myself or someone else can improve upon this?
  - stuffing all my code into three files, `{index.html,style.css,script.js}`, isn't sustainable as the codebase grows.
