function ajaxDelete(id) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url: `/ajax/recipe/${id}/delete`,
      method: 'DELETE',
      dataType: 'json',
      headers
    })
  ).then(function(data){
      window.location.assign('/recipe')
  })
  .catch(function(error){
      $('.help-block').html('Hiba: ' + error.statusText);
      console.log(error);
  });
}

function showModal(str){
    var modal = $('.modal-dialog');
     modal.show()
}

$('#deleteRecipe').on('click', function(e){
    e.preventDefault()
    console.log("Törlésre ítélve")
    var recipeId = $('#recipeId').val()

    ajaxDelete(recipeId)
})

