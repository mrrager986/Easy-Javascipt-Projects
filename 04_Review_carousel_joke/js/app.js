// members - kennie, alan, mato, samo
const reviews = [
  {
    id: 1,
    name: 'peter pidany',
    job: 'caustic',
    img: 'img/peter.jpg',
    text: "kyjkooooooooooooo",
  },
  {
    id: 2,
    name: 'alan grnja',
    job: 'distance lover',
    img: 'img/alan.jpg',
    text: 'sedym na hotely a je my zle',
  },
  {
    id: 3,
    name: 'martin mikuška',
    job: 'external adapter',
    img: 'img/mato.jpg',
    text: 'Ňíbrž, poněváč nevertheless worthless bumčiky',
  },
  {
    id: 4,
    name: 'samuel duleba',
    job: 'the boss',
    img: 'img/samo.jpg',
    text: 'musis viac cvicit... 140 eur',
  }, //, kili, jano, conky, rado, kyjo
  {
    id: 5,
    name: 'tomáš kilian',
    job: 'a sexual predator',
    img: 'img/kili.jpg',
    text: 'tyvole 15 eur pýtať to si sa snáď s koňom zrazil ne? To je tak 30 cigoriek a 7 pív...',
  },
  {
    id: 6,
    name: 'ján vedej',
    job: 'najbohatší (nikto to nikdy nevidel)',
    img: 'img/jano.jpg',
    text: 'Nenavidim ťa ty vyjebena skurvena piča ty kokot odporna hnusna ty kokot vychodniarska stopadesat centimetrova skurvena pica ty kokot pojebana co sa nechala jebat ty kokot negrom ty kokot hnusna skurvena pica ty kokot mna si nechala tu ty kokot skapat normalne v dazdi a nemam kam ist lebo nemam kluce nic a teraz budem spat vonku ty vyjebana skurvena pica skap ty kokot skap ty kokot schap v tom vyjebanom mezonete normalne ze dojdi o vsetko co mas ty kokot ty vyjebana skurvena pica nikdy v zivote ta uz nechcem vidiet nenavidim ta ty kokot nenavidim ta ty skurvena pica vyjebana skareda hnusna ryšava ty kokot fejkova ty kokot kurva nenavidim ta nenavidim ta',
  },
  {
    id: 7,
    name: 'matúš conka',
    job: 'diss grafik',
    img: 'img/conky.jpg',
    text: 'feet',
  },
  {
    id: 8,
    name: 'radovan kočík',
    job: 'Crypto magnat',
    img: 'img/rado.jpg',
    text: 'ani ty seidi ani ja nevieme kde lezi pravda, to vie iba hrstka vyvolenych a media nam klamu ',
  },
  {
    id: 9,
    name: 'martin kyjovský',
    job: 'Betwixt thy {$randomEnglishWord}',
    img: 'img/kyjo.jpg',
    text: '"Mna najebalo hlavne to dopici ze nemas iphone si automaticky chudobny aj ked je to zo srandy je to picovina ... sorry jako aj keby neviem kto tu bol jak chudobny ze nema ani centa ta si z neho ani picu robit nebudem myslim to seriozne lebo sme tu vsetci proste kamosi a mame sa radi takych jaki sme a ne na zaklade toho ze aha ta on nema love aha on nema na iphone a podobne picoviny ma vedia vytocit do nepricetnosti aj keby ja neviem trepnem killi alebo erik alebo neviem kto tu nema proste love nebudem si z toho robit picu ... ja si priznam ze nezarabam tolko kolko vy alebo niekto tu mozno ani voebc nezaraba, niekto tu ma mozno aj pozdlznosti ved kto kedy nemal ale to neznamena ze sme chudobni dopici ... na tu pointu som chcel poukazat lebo niektori si tu nedaju povedat ... aj keby kenny alebo erik alebo aj alan picuje na niekoho ineho a robi si picu ze "haha chudobny bo nema iphone tak ma to najebe lebo dopici sa tu vsetci pozname aj IRL ... a pre mna za mna si robte dalej picu ... toto som napisal seriozne .. mam vas rad vsetkych ale su iste hranice doboha ... vsetko co som chcel povedat"',
   }, // erik s., igor, wevo, erik g., pato h.
  {
    id: 10,
    name: 'erik seidenglanz',
    job: 'the boss',
    img: 'img/erikSeidenglanz.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  {
    id: 11,
    name: 'igor maximilián tvaroška',
    job: 'the boss',
    img: 'img/igor.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  {
    id: 12,
    name: 'martin tomáš',
    job: 'the boss',
    img: 'img/wevo.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  {
    id: 13,
    name: 'erik gladič',
    job: 'the boss',
    img: 'img/erikGladic.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  {
    id: 14,
    name: 'patrik heltko',
    job: 'the boss',
    img: 'img/patoHeltko.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  //bobo, richie, jojo, sabi,
  {
    id: 15,
    name: 'Boris Al Kalagi',
    job: 'the boss',
    img: 'img/boris.jpg',
    text: 'musis viac cvicit... 140 eur',
  },  {
    id: 16,
    name: 'Richard Muller',
    job: 'the boss',
    img: 'img/richie.jpg',
    text: 'musis viac cvicit... 140 eur',
  },
  {
    id: 17,
    name: 'jozef ronto',
    job: 'the boss',
    img: 'img/jozo.jpg',
    text: 'musis viac cvicit... 140 eur',
  },{
    id: 18,
    name: 'radoslav sabol',
    job: 'the boss',
    img: 'img/sabi.jpg',
    text: 'musis viac cvicit... 140 eur',
  }, //tomas, ja, spuco,pato s., beny
  {
    id: 19,
    name: 'tomáš gladič',
    job: 'the boss',
    img: 'img/tomasGladic.jpg',
    text: 'musis viac cvicit... 140 eur',
  },{
    id: 20,
    name: 'patrik špak',
    job: 'the boss',
    img: 'img/spuco.jpg',
    text: 'musis viac cvicit... 140 eur',
  },{
    id: 21,
    name: 'patrik sabo',
    job: 'the boss',
    img: 'img/patoSabo.jpg',
    text: 'musis viac cvicit... 140 eur',
  },{
    id: 22,
    name: 'benjamín šafárik',
    job: 'the boss',
    img: 'img/beny.jpg',
    text: 'musis viac cvicit... 140 eur',
  },{
    id: 23,
    name: 'jakub dupej',
    job: 'the boss',
    img: 'img/dupi.jpg',
    text: 'musis viac cvicit... 140 eur',
  },
];
// url link
// Create a new hyperlink element
var link = document.createElement('a');

// Set the href attribute (URL)
link.setAttribute('href', 'https://img.huffingtonpost.com/asset/643518912400001a00ea6a22.png?ops=scalefit_720_noupscale');


// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 1;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on item 

function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
};

// show next person

nextBtn.addEventListener('click', function (){
  currentItem++;
  if(currentItem > reviews.length -1){
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener('click', function (){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length -1;
  }
  showPerson();
});

// show random person

randomBtn.addEventListener('click', function(){
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem)
  showPerson();
});


// function to handle keydown event
function handleKeyDown(event) {
  if (event.key === 'ArrowRight') {
    // right arrow key pressed
    nextBtn.click();
  } else if (event.key === 'ArrowLeft') {
    // left arrow key pressed
    prevBtn.click();
  } else if (event.key === 'ArrowUp') {
    // left arrow key pressed
    randomBtn.click();
  }
}

// add event listener for keydown event
document.addEventListener('keydown', handleKeyDown);