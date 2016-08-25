// a place to put the pokemon
var pokemans = [];


// a way to listen for an add pokemon button press
// <button id="add">Add Pokemon</button>
$("#add").click(function () {
  // a way to check to see if the pokemon is valid
  var pokeName = $("#pokemon_name").val();
  var pokeType1 = $("#pokemon_type1").val();
  var pokeType2 = $("#pokemon_type2").val();

  var pokemon = {
    name: pokeName,
    type1: pokeType1,
    type2: pokeType2
  }
  if (pokeName.length === 0 || pokeType1.length === 0 || pokeType2.length === 0) {
    alert("🔥");
  } else {
    // add the pokemon to the list
    pokemans.push(pokemon);
    var newPokeRow = $("<tr>");
    newPokeRow.append($("<td>" + pokemon.name + "</td>"))
    newPokeRow.append($("<td>" + pokemon.type1 + "</td>"))
    newPokeRow.append($("<td>" + pokemon.type2 + "</td>"))
    $("#pokelist").append(newPokeRow);

    // make an API request to populate the pokemon's image
    //http://pokeapi.co/api/v2/pokemon/{id or name}
    $.ajax({
      url : "http://pokeapi.co/api/v2/pokemon/" + pokemon.name.toLowerCase(),
      success : function (data) {
        var pokeImg = $('<img src="' + data.sprites.front_default + '">');
        var imgTD = $("<td>");
        imgTD.append(pokeImg);
        newPokeRow.append(imgTD);
      }
    })



  }
})
