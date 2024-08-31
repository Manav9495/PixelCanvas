document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const file = document.getElementById('file').files[0];

    if (title && file) {
        // Handle the file upload process here
        console.log(`Title: ${title}`);
        console.log(`File: ${file.name}`);

        // Example: You can use FormData and fetch to send the file to the server
        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        fetch('/upload', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
              console.log('Success:', data);
              // Handle successful upload
          })
          .catch(error => {
              console.error('Error:', error);
              // Handle error
          });
    } else {
        alert('Please fill in all fields.');
    }
});
