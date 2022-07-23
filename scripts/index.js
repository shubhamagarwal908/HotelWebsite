function myFunction() {

    // Create an "div" node:
    const node = document.createElement("div");
    
    // Create a text node:
    const textnode = document.innerHTML("added");
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("city_cards1").appendChild(node);
    }