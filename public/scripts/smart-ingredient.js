function addIngredientsRow(textarea){
    var button = $(`
        <div class="col-md-2">
            <button type="button" class="btn btn-danger btn-block">
                <span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span>
            </button>
        </div>
    `);
    button.on("click", function(){
        $(this).closest(".smart-ingredient").remove();
    })

    var amount = $(`
      <div class="col-md-3">
            <input class="form-control smart-ingredient-amount" value="1csipet" type="text">
      </div>
    `);

    var name = $(`
        <div class="col-md-7">
            <input class="form-control smart-ingredient-name" value="só" type="text">
        </div>
    `);

    var row = $(`
        <div class="form-group smart-ingredient "></div>
    `).append(amount).append(name).append(button);

    row.insertBefore(textarea);
}




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
        addIngredientsRow(ingredientsTextarea);
    })
    .insertAfter(ingredientsTextarea);
$('#btnSendRecipe').on('click', function(e){
    console.log("mentés");
    e.preventDefault();

    var ingredients = $('form-group smart-ingredient');
    $.each(ingredients, function(){
        console.log($('smart-ingredient-name'));
    })
});