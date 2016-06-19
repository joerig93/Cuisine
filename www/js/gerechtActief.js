function swapContent(recept) {
    
    // update de titel1
    var titelBox1 = $('#titel1');
    titelBox1.html(gerechten[recept].day);
    
    // update de titel2
    var titelBox2 = $('#titel2');
    titelBox2.html(gerechten[recept].name);
    
    // update de ingrediënten
    var ingredientenMarkup = '';

    for (var i = 0, l = gerechten[recept].ingredienten.length; i < l;i++){
        ingredientenMarkup += '<li>';
        ingredientenMarkup += gerechten[recept].ingredienten[i];
        ingredientenMarkup += '</li>';
    }
    
    var ingredientenBox = $('#ingredienten');
    ingredientenBox.html(ingredientenMarkup);
    
    // update de bereidingswijze
    var bereidingMarkup = '';
    
    for (var i = 0, l = gerechten[recept].bereiding.length; i < l;i++){
        bereidingMarkup += '<p>';
        bereidingMarkup += gerechten[recept].bereiding[i];
        bereidingMarkup += '</p>';
    }
    
    var bereidingBox = $('#bereiding');
    bereidingBox.html(bereidingMarkup);
    
    // update het plaatje
    var plaatje = $('#cover');
    var link = relativePathToRoot + gerechten.imagePath + gerechten[recept].image;
    plaatje.attr('src', link);
    
	
}

var $_GET = {};
if(document.location.toString().indexOf('?') !== -1) {
    var query = document.location
                   .toString()
                   // get the query string
                   .replace(/^.*?\?/, '')
                   // and remove any existing hash string (thanks, @vrijdenker)
                   .replace(/#.*$/, '')
                   .split('&');

    for(var i=0, l=query.length; i<l; i++) {
       var aux = decodeURIComponent(query[i]).split('=');
       $_GET[aux[0]] = aux[1];
    }
}
//get the 'index' query parameter

swapContent($_GET['recept'])

