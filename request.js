function consultarPokemon(nome){
  
  var request = new XMLHttpRequest();
  var nome = document.getElementById("nome-pokemon").value;
  var url = 'https://pokeapi.co/api/v2/pokemon/'+ nome;
  
  if(nome == "") 
  url = "https://pokeapi.co/api/v2/pokemon/ditto";
  
  request.open("GET",url,true);
  
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let response = JSON.parse(this.responseText);

      let abilities = "<p> Habilidades: </p> <ul>"
      let sprite = "<img src="+response.sprites.front_default+">";
      let name = "<p> Nome: "+response.name+"</p>";
      let id = "<p> ID: "+response.id+"</p>";
      response.abilities.forEach(element => {
        abilities += "<li>"+element.ability.name+"</li>";
      });
      abilities += "</ul>";
      let height = "<p> Altura: "+response.height+"</p>";
      let weight = "<p> Peso: "+response.weight+"</p>";

      document.getElementById("resultado").innerHTML = sprite + name + id + abilities + height + weight;
    }
  };
  request.send();
}