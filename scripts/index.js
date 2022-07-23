function myFunction() {
    document.getElementById("view_more").value="View Less";
    // Create an "div" node:
    const node = document.createElement("div");
    
    // Create a text node:
    const textnode = document.innerHTML("added");
    
    
    // Append the text node to the "li" node:
    node.appendChild(textnode);
    
    // Append the "li" node to the list:
    document.getElementById("city_cards1").appendChild(node);
    }

    function my_Function1() {
        document.getElementById("login").value="LOGOUT";
    }