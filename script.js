let dataList = document.getElementById('json-datalist');
let input = document.getElementById('ajax');

let xhr = new XMLHttpRequest();

// Handle state changes for the request.
xhr.onreadystatechange = response => {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {

            let jsonOptions = JSON.parse(xhr.responseText);

            jsonOptions.forEach(item => {
                // Create a new <option> element.
                let option = document.createElement('option');
                // Set the value using the item in the JSON array.
                option.value = item;
                // Add the <option> element to the <datalist>.
                dataList.appendChild(option);
            });

            // Update the placeholder text.
            input.placeholder = "e.g. datalist";
        } else {
            // An error occured :(
            input.placeholder = "Couldn't load datalist options";
        }
    }
};

// Update the placeholder text.
input.placeholder = "Loading options...";

// Set up and make the request.
xhr.open('GET', 'programming-languages.json');
xhr.send();