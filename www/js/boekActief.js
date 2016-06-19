function swapContent(boek) {
    
    // update de titel1
    var titelBox1 = $('#titel1');
    titelBox1.html(boeken[boek].titel);
    
    // update de titel2
    var titelBox2 = $('#titel2');
    titelBox2.html(boeken[boek].titel);
    
    // update de auteur
    var auteurBox = $('#auteur');
    auteurBox.html(boeken[boek].auteur);
    
    // update de samenvatting
    var samenvattingMarkup = '';

    for (var i = 0, l = boeken[boek].summary.length; i < l;i++){
        samenvattingMarkup += '<p>';
        samenvattingMarkup += boeken[boek].summary[i];
        samenvattingMarkup += '</p>';
    }
    
    var summaryBox = $('#samenvatting');
    
    summaryBox.html(samenvattingMarkup);
    
    // update de recensies
    var recensieMarkup = '';
    
    for (var i = 0, l = boeken[boek].recensie.length; i < l;i++){
        recensieMarkup += '<p>';
        recensieMarkup += boeken[boek].recensie[i];
        recensieMarkup += '</p>';
    }
    
    var recensieBox = $('#recensie');
    
    recensieBox.html(recensieMarkup);
    
    // update de prijs
    var prijsBox = $('#prijs');
    prijsBox.html(boeken[boek].prijs);
    
    // update de prijs mobiel
    var prijsBox = $('#prijsM');
    prijsBox.html(boeken[boek].prijs);
    
    // update het plaatje
    var plaatje = $('#cover');
    var link = relativePathToRoot + boeken.imagePath + boeken[boek].image;
    plaatje.attr('src', link);
    
    // update het plaatje mobiel
    var plaatje = $('#coverM');
    var link = relativePathToRoot + boeken.imagePath + boeken[boek].image;
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

swapContent($_GET['boek'])

