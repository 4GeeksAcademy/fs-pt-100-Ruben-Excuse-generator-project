window.onload = function (){
  const boton = document.querySelector(".btn");
  const excuseCrtl = document.querySelector(".generator");
  const phrase = {
    who: ['Harry Potter ', 'Hermione Granger ', 'Ron Weasley ', 'Draco Malfoy ', 'Dobby ', 'Luna Lovegood ', 'Neville Longbotton ', 'Albus Dumbledore ', 'Lord Voldemort '],
    action: ['ate ', 'peed ', 'crushed ', 'broke ', 'shit ', 'stole '],
    what: ['my homework ', 'my wand ', 'the Weasley car ', 'my broom ', 'my Marauder´s Map ', 'my chemistry book '],
    when: ['before the journey ', 'when I was in my potions class ', 'while flying ', 'during my training ', 'while I was studying ', 'when i was in the battle. ', 'while i was fighting '],
  }
  console.log(phrase["who"][0])
  
  const whoDidWhat = arr => arr[Math.floor(Math.random() * (arr.length))];
  const rndm = () => {
    const subject = whoDidWhat(phrase["who"]);
    const verb = whoDidWhat(phrase["action"]);
    const atributte = whoDidWhat(phrase["what"]);
    const place = whoDidWhat(phrase["when"]);
    return `${subject} ${verb} ${atributte} ${place}`
  }

  let currentExcuse;
  const conectHtml = () => {
    excuseCrtl.classList.remove("hidden");
    document.getElementById("excuse").innerHTML = rndm();
    currentExcuse = document.getElementById("excuse").innerHTML;
    return currentExcuse;
  }

  boton.addEventListener("click", conectHtml) // btn.onclick = conectHtml // Son dos formass de ejecitar el elemento del boton (click) en JS
 

}