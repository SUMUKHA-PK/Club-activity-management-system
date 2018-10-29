const student = document.getElementById('Student');

student.addEventListener('click', function(e) {
  console.log('Student was recorded');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Student was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

const customer = document.getElementById('Customer');

customer.addEventListener('click', function(e) {
  console.log('Customer was recorded');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Customer was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

const events = document.getElementById('Events');

events.addEventListener('click', function(e) {
  console.log('Events was recorded');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Events was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

const projects = document.getElementById('Projects');

projects.addEventListener('click', function(e) {
  console.log('Project was recorded');

  fetch('/clicked', {method: 'POST'})
    .then(function(response) {
      if(response.ok) {
        console.log('Project was recorded');
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    });
});

