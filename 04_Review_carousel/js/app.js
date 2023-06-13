// members - kennie, alan, mato, samo
const reviews = [
  {
    id: 1,
    name: 'Hideo Kojima',
    job: 'Metal Gear Solid, Death Stranding, Policenauts... ',
    img: 'img/hideoKojima.jpg',
    text: "Games shouldn't only be fun. They should teach or spark an interest in other things.",
  },
  {
    id: 2,
    name: 'Hidetaka Miyazaki',
    job: 'Elden Ring, Dark Souls, Bloodborne..',
    img: 'img/hidetakaMiyazaki.webp',
    text: 'Dont give up. Obstacles can be overcome through strategy and learning',
  },
  {
    id: 3,
    name: 'Yoshinori Kitase',
    job: 'Final Fantasy VII: Advent Children (2005), Final Fantasy VII (1997) and Final Fantasy VII Remake (2020)',
    img: 'img/yoshinoriKitase.jpg',
    text: 'The new story of Final Fantasy VII has only just begun',
  },
  {
    id: 4,
    name: 'Katsuhiro Harada',
    job: 'Tekken, Soulcalibur',
    img: 'img/katsuhiroHarada.webp',
    text: '格ゲー“暗黒の10年”は、『鉄拳』を世界一売れる格闘ゲームへと鍛え上げた──世界市場に活路を拓いた戦略を訊く【バンダイナムコ原田勝弘インタビュー／西田宗千佳連載】',
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