// window.location.reload(true);
if(document.getElementById("blog_delete_form")){
    // window.location.reload(true);
    document.getElementById("blog_delete_form").addEventListener('submit', function(e) {
        e.preventDefault();
        let form = e.target;
        console.log(form);
        let data = new URLSearchParams();
        [...form.elements].filter(elm => elm.name)
        .forEach(input => data.append(input.name, input.value));
        

        // Perform the form submission using AJAX/fetch
        fetch('/delete', {        
            method: 'POST',
            body: data 
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
}
    

if(document.getElementById("blog_edited_form"))
    document.getElementById("blog_edited_form").addEventListener('submit', function(e) {
        alert("submited");
        e.preventDefault();
        let form = e.target;
        console.log(form);
        let data = new URLSearchParams();
        [...form.elements].filter(elm => elm.name)
        .forEach(input => data.append(input.name, input.value));
        
        // Perform the form submission using AJAX/fetch
        fetch('/edited', {        
            method: 'POST',
            body: data 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            // Handle the redirect by reloading the page
            
            window.history.back();
            // window.location.replace(document.referrer);
            // window.history.back();
            // window.location.reload(true);
            // if ('referrer' in document) {
            //     window.location = document.referrer;
            //     /* OR */
            //     // location.replace(document.referrer);
            // } else {
            //     window.history.back();
            // }
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle errors
        });
    });