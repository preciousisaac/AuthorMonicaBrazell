{/* <JavaScript to handle form submission without redirect  */}

  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('form-success');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        successMessage.style.display = 'block';
      } else {
        alert('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Oops! Network error. Please try again later.');
    }
  });

