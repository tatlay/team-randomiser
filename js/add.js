(d => {
    // get the various elements we'll need
    let players = d.getElementById("players");
    let add = d.getElementById("add");
    let display = d.getElementById("display");
    let list1 = d.getElementById("teamList1");
    let list2 = d.getElementById("teamList2");
    let randomiser = d.getElementById("randomiser");
    let reset = d.getElementById("reset");
    let vs = d.getElementById("vs");
    //empty array that keeps track of things
    let store = [];    
//let store = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

// when enter is pressed
    players.addEventListener("keyup", function(e){
        //add to the array
        if (e.keyCode === 13) {
           
            store.push(players.value);
            // set the input to be blank
            players.value = "";
            // focus the input
            players.focus();

            let fragment = d.createDocumentFragment();
            // empty the list in HTML
            list1.textContent = "";
            list2.textContent = "";

            // for each stored string
            store.forEach(string => {
                // create a list item
                let li = d.createElement("li");
                // set its text to the current string
                li.textContent = string;
                // append it to the fragment
                fragment.appendChild(li);
            });
            // append the fragment to the list
            list1.appendChild(fragment);
            vs.textContent = "";
            }  
    });


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
        list1.textContent = "";
        list2.textContent = "";

        // for each stored string
        store.forEach(string => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = string;
            // append it to the fragment
            fragment.appendChild(li);
        });
        // append the fragment to the list
        list1.appendChild(fragment);
        vs.textContent = "";
    
    });
    //randomiser button 
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
        list1.textContent = "";
        list2.textContent = "";

        let team2 = store.slice(0,5);
        let team1 = store.slice(5,10);

        // for each stored string
        team1.forEach(t1 => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = t1;
            // set its class
            li.classList.add("team1");
            // append it to the fragment
            fragment.appendChild(li);
        });

        // append the fragment to the list
        list1.appendChild(fragment);

            // for each stored string
        team2.forEach(t2 => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = t2;
            // set its class
            li.classList.add("team2");
            // append it to the fragment
            fragment.appendChild(li);
        });

        // append the fragment to the list
        list2.appendChild(fragment);
        //adds the vs text
        vs.textContent = "vs";
        
        
    
    });
    //reset button
    reset.addEventListener("click", () => {
        //sets the array to 0
        store = [];
        players.value = "";
        // focus the input
        players.focus();

        let fragment = d.createDocumentFragment();
        // empty the list in HTML
        list1.textContent = "";
        list2.textContent = "";

        // for each stored string
        store.forEach(string => {
            // create a list item
            let li = d.createElement("li");
            // set its text to the current string
            li.textContent = string;
            // append it to the fragment
            fragment.appendChild(li);
        });
        // append the fragment to the list
        list1.appendChild(fragment);
        vs.textContent = "";
    
    });

})(document);
