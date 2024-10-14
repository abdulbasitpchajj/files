function showInstructions() {
  const customAlert = document.getElementById('customAlert');
  customAlert.style.display = 'block';  
  
  
  setTimeout(function() {
    customAlert.style.display = 'none';  
  }, 2000);
}



const textArea = document.getElementById('textArea')
//const english = document.getElementById('english')
const search = document.getElementById('search')
const surahName = document.getElementById('surahName')
const Ayah = document.getElementById('Ayah')
const Arabic = document.getElementById('arabic')
const audio1 = document.getElementById('audio1')
const audioSource = document.getElementById('audioSource')
const BASE_POINT = 'https://quranapi.pages.dev/api/'
const BASE_POINTAudio = 'https://quranaudio.pages.dev/'
const END_POINT = '.json'
const END_POINTAudio = '.mp3'


search.addEventListener('click', getQuranAPI)

function getQuranAPI() {
  let textAreaValue = textArea.value.split(' ') // .split('') not putting a space in the "''" caused alot of prb
  console.log(textAreaValue)

  //  textAreaValue = textAreaValue.filter(element => element.trim().length > 0)
  let audioSourc = textAreaValue[0]
  let Surah = textAreaValue[1]
  let Ayah1 = textAreaValue[2]

  // textArea.filter(element)
  // console.log(`${BASE_POINT}${Surah}/${Ayah}${END_POINT}`);

  fetch(`${BASE_POINT}${Surah}/${Ayah1}${END_POINT}`)
    .then(function (res) {
      //  console.log(`${BASE_POINT}${Surah}/${Ayah}${END_POINT}`)
      return res.json()
    })
    .then(function (res) {
      console.log(res)
      surahName.innerHTML = res.surahName;
      Ayah.innerHTML = res.english;
      Arabic.innerHTML = res.arabic1;

    })

  const url = `${BASE_POINTAudio}${audioSourc}/${Surah}_${Ayah1}${END_POINTAudio}`;
  audioSource.src = url;
   audio1.load();
    audio1.play();
  console.log(audioSource);

}

