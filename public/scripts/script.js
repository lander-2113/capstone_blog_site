document.getElementById("task_form").addEventListener('submit', function(e) {
    e.preventDefault();
    let form = e.target;
    let data = new URLSearchParams();
    [...form.elements].filter(elm => elm.name)
    .forEach(input => data.append(input.name, input.value));
    

    // Perform the form submission using AJAX/fetch
    fetch('/task', {        
        method: 'POST',
        body: data // Assuming you want to submit form data
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Handle the redirect by reloading the page
        window.location.reload(true);
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors
    });
});