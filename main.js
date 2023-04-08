const fiyat=document.getElementById("fiyat")
const harcama=document.getElementById("harcama")
const buton=document.getElementById("btn")
const liste=document.querySelector(".liste")
const odeme=document.getElementById("odeme")
const toplamSpan=document.getElementById("toplam")

buton.addEventListener("click",ekleme)

liste.addEventListener("click",handleClick)

let seri=[]

function updateToplam(){
    var toplam = seri.reduce((toplam,fiyat)=> toplam + fiyat,0);
    toplamSpan.innerText = toplam;
}

console.log(toplam)

function ekleme(){

    if(!harcama.value || !fiyat.value){
        alert("boşlukları doldurun")
        return
    }






    console.log(harcama.value,fiyat.value);
    const itemBox=document.createElement("div");
    itemBox.classList.add("item")

    if(odeme.checked){
        itemBox.classList.add("odendi")
    }




    itemBox.innerHTML = 
    `
       <h1>
           ${harcama.value}
       </h1>
       <h2>
           ${fiyat.value}
       </h2>
       <div class="buttons"> 
           <img id="edit" src="/images/pay.png" alt="">
           <img id="delete" src="/images/delete.png" alt="">
       </div>
  `;
  liste.appendChild(itemBox)

  if(!odeme.checked){
    seri.push(Number(fiyat.value));
  }
  updateToplam()

  fiyat.value=""
  harcama.value=""

}



function handleClick(e){
    const element = e.target

    if(e.target.id == "delete"){
      const harcama = element.parentElement.parentElement;
      harcama.remove();
      const cikarilacak = harcama.querySelector('h2').innerText;
      console.log
      seri.push(-Number(cikarilacak));
      updateToplam()
    }
}