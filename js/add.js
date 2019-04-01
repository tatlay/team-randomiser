(d => {
    // get the various elements we'll need
    let players = d.getElementById("players");
    let add = d.getElementById("add");
    let display = d.getElementById("display");
    let list = d.getElementById("list");
    let randomiser = d.getElementById("randomiser");
    let reset = d.getElementById("reset");
    //empty array that keeps track of things
    let store = [];

    // when add is clicked
    add.addEventListener("click", () => {
        //add to the array
        store.push(players.value);
        // set the input to be blank
        players.value = "";
        // focus the input
        players.focus();

        let fragment = d.createDocumentFragment();
        // empty the list in HTML
        list.textContent = "";

        // for each stored string
        store.forEach(string => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = string;
            // set its class
            li.classList.add("newPlayer");
            // append it to the fragment
            fragment.appendChild(li);
        });
        // append the fragment to the list
        list.appendChild(fragment);
    });
 
    randomiser.addEventListener("click", () => {
        function randomFunc(shuffleArr) {      
        let l = shuffleArr.length, temp, index;  
        while (l > 0) {  
           index = Math.floor(Math.random() * l);  
           l--;  
           temp = shuffleArr[l];          
           shuffleArr[l] = shuffleArr[index];          
           shuffleArr[index] = temp;      
        }    
        return shuffleArr;    
        }        
        randomFunc(store); 

        // create a fragment
        let fragment = d.createDocumentFragment();
        // empty the list HTML
        list.textContent = "";

        // for each stored string
        store.forEach(string => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = string;
            // set its class
            li.classList.add("list-group-item");
            // append it to the fragment
            fragment.appendChild(li);
        });

        // append the fragment to the list
        list.appendChild(fragment);
    
    });
})(document);
