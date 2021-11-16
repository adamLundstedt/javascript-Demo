// Add an event listener on keyup in the input field
$('input').keyup(search);

async function search() {
  let search = $('input').val();
  let result = await (await fetch('/perons/namesearch/' + search)).json();
  displaySearchResult(result);
}

async function displaySearchResult(persons) {

  for (person of persons) {
    $('.result').append(`
    <div class="person">
    <h3>${person.firstName} ${person.lastName}</h3>
    </div>
    `);
  }
}