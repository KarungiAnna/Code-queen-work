// Create an UL element
// Add two List items of our daily routine

// Pseudocode

// - Create a ui item
// - Create the first list item
// - Add routine text inside our first list item
// - Create the second list Item
// - Add routine text inside our second list item

// - Append item1 to the ui element
// - Append item2 to the ui element

// - Find the main div
// Append the ul to the main div

const todos = [
    "Take a showers",
    "Have breakfast",
    "Go to work",
    "Go to the Gym",
    "Go dancing",
    "Play soccer",
    "Attend music class",
  ];
  
  const list = document.createElement("ul");
  
  for (let todo of todos) {
    const item = document.createElement("li");
    item.innerHTML = todo;
    list.appendChild(item);
  }
  const mainDiv = document.getElementById("main");
  mainDiv.appendChild(list);
  
  // Pseudocode for adding a new todo
  
  // - Find the input element
  // - Get the value of the input element
  // - Push the item to the array
  
  const input = document.getElementById("todo-text");
  
  const saveBtn = document.getElementById("save-btn");
  saveBtn.addEventListener("click", () => {
    const inputText = input.value;
    todos.push(inputText);
    console.log(todos)
    //the code below is new
    const newLi = document.createElement("li");
    const liContent = document.createTextNode(input.value);
    newLi.appendChild(liContent);
    list.appendChild(newLi);
  });
  