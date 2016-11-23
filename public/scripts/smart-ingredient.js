console.log("betőtve");

var ingredientsTextarea = $('#inputIngredients');


//Altgr+7 `` kell!
var addButton = $(`
    <button type="button" class="btn btn-success btn-block">
        <span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span>
    </button>
`);


addButton
    .on('click', () => {

    })
    .insertAfter(ingredientsTextarea);