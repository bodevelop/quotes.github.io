//quotes list
let quotes =[
  {"text":"Wer ein Warum zum Leben hat, erträgt fast jedes Wie.", "author":"Friedrich Nietzsche"},
  {"text":"Verstehen kann man das Leben rückwärts; leben muss man es aber vorwärts.", "author":"Søren Kierkegaard"},
  {"text":"Das Leben ist eine Komödie für den Denkenden und eine Tragödie für die, welche fühlen.", "author":"Hippokrates"},
  {"text":"Es gibt ein erfülltes Leben trotz vieler unerfüllter Wünsche.", "author":"Dietrich Bonhoeffer"},
  {"text":"Was wäre das Leben, hätten wir nicht den Mut, etwas zu riskieren?", "author":"Vincent van Gogh"},
  {"text":"Vielleicht gibt es schönere Zeiten; aber diese ist die unsere.", "author":"Jean-Paul Sartre"},
  {"text":"Wir denken selten an das, was wir haben, aber immer an das, was uns fehlt.", "author":"Arthur Schopenhauer"},
  {"text":"Ein Kluger bemerkt alles, ein Dummer macht über alles eine Bemerkung.", "author":"Heinrich Heine"},
  {"text":"Die Welt ist eine Bühne, aber das Stück ist schlecht besetzt.", "author":"Oscar Wilde"},
  {"text":"Man braucht nichts im Leben zu fürchten, man muss nur alles verstehen.", "author":"Marie Curie"},
  {"text":"Die Zeit vergeht nicht schneller als früher, aber wir laufen eiliger an ihr vorbei.", "author":"George Orwell"},
  {"text":"Und wenn du den Eindruck hast, dass das Leben ein Theater ist, dann such dir eine Rolle aus, die dir so richtig Spaß macht.", "author":"William Shakespeare"},
  {"text":"Wer nicht mehr liebt und nicht mehr irrt, der lasse sich begraben.", "author":"Johann Wolfgang von Goethe"},
  {"text":"Selbst wenn ich wüsste, dass morgen die Welt unterginge, würde ich heute noch ein Apfelbäumchen pflanzen.", "author":"Martin Luther"},
  {"text":"Die einzigen wirklichen Feinde eines Menschen sind seine negativen Gedanken.", "author":"Albert Einstein"},
  {"text":"Wo Liebe wächst, gedeiht das Leben. Wo Hass aufkommt droht Untergang.", "author":"Mahatma Gandhi"},
  {"text":"Glück ist Liebe, nichts anderes. Wer lieben kann, ist glücklich.", "author":"Hermann Hesse"},
  {"text":"Unser Leben kann nicht immer voller Freude, aber immer voller Liebe sein.", "author":"Thomas von Aquin"},
  {"text":"Zeit mag alle Wunden heilen, aber sie ist eine miserable Kosmetikerin.", "author":"Mark Twain"},
  {"text":"Trau dich, sei mutig! Kein Übel ist so schlimm wie die Angst davor.", "author":"Seneca"},
  {"text":"Man kann nicht jeden Tag etwas Großes tun, aber gewiss etwas Gutes.", "author":"Friedrich Schleiermacher"},
  {"text":"Wir leben alle unter dem gleichen Himmel, aber wir haben nicht alle den gleichen Horizont.", "author":"Konrad Adenauer"},
  {"text":"Der größte Feind des Wissens ist nicht die Unwissenheit, sondern die Illusion des Wissens.", "author":"Stephen Hawking"},
  {"text":"Wenn wir nur Menschen beurteilen, die wir kennen, begrenzen wir uns selbst in unserer eigenen Welt.", "author":"Paulo Coelho"},
  {"text":"Der Weg zur Freiheit ist nicht einfach; es gibt Stolpersteine entlang des Weges, und manchmal stolpern wir und fallen.", "author":"Nelson Mandela"},
  {"text":"Wer das Ziel kennt, kann entscheiden. Wer entscheidet, findet Ruhe. Wer Ruhe findet, ist sicher. Wer sicher ist, kann überlegen. Wer überlegt, kann verbessern.", "author":"Konfuzius"},
  {"text":"Man sollte immer ein bisschen verrückt sein, sonst hat man keinen Spaß im Leben.", "author":"Julia Roberts"},
  {"text":"Die Liebe besteht nicht darin, dass man einander anschaut, sondern dass man gemeinsam in dieselbe Richtung blickt.", "author":"Antoine de Saint-Exupéry"},
  {"text":"In der Familie beginnt die Liebe und in der Liebe beginnt das Leben.", "author":"Mutter Teresa"},
  {"text":"Ich habe noch nie einen Mann getroffen, der so unwissend war, dass ich von ihm nicht lernen konnte.", "author":"Galileo Galilei"},
  ];
  
//color list
let colors = ["#820a0a","#485c07","#033e2d","#51043f", "#a95122", "#d41bac"];

//jQuery
$(document).ready(function(){
  
  // function to random text
  let randomQuote = function(id, randomColor){

  $("#text, #author").fadeOut(700, function(){
    $("#text").css("color", randomColor).fadeIn(1500).html('<i class="fa fa-text-left" aria-hidden="true"></i> '+quotes[id].text+' <i class="fa fa-text-right" aria-hidden="true"></i>');
    
    //author actions
    $("#author").css("color", randomColor).fadeIn(1500).html("- <em>"+quotes[id].author+"</em>");
    
    //twitter share
    $("#twitter").css("color", randomColor).fadeIn(1500).html('<a class="twitter-share-button" href="https://twitter.com/intent/tweet?text='+quotes[id].text+" - "+quotes[id].author+'" data-size="large" target="_blank"><i class="fa fa-twitter-square pull-left" aria-hidden="true"></i></a>');
    
    //change link color in every color random
    $("a").animate({
      color: randomColor
    });
    
    // animate from jQuery UI
    $("body").animate({
      backgroundColor: randomColor
    });
    
   });
 };
  
// random
let randomColor =  colors[Math.floor(Math.random() * colors.length)];
let id = Math.floor(Math.random() * quotes.length);
randomQuote(id, randomColor);
  
// click new quote
$("#new-quote").click(function(){
  randomColor =  colors[Math.floor(Math.random() * colors.length)];
  console.log("out:"+ randomColor);
  id = Math.floor(Math.random() * quotes.length);
  randomQuote(id, randomColor);
  });
  
});