

const taomNomi = document.getElementById("taom-nomi")
const taomNarxi = document.getElementById("taom-narhi")
const taomLink = document.getElementById("taom-link")
const taomOshpazi = document.getElementById("taom-oshpazi")
const taomTayorlangan = document.getElementById("taom-tayorlangan")
const btn = document.querySelector(".btn")
const taomlarContainer = document.querySelector(".taomlar")



const data = [

]

btn.addEventListener("click", (e)=>{
    e.preventDefault()
    data.push({name: taomNomi.value, narhi: taomNarxi.value, link: taomLink.value, oshpazi: taomOshpazi.value, tayorlangan: taomTayorlangan.value })

    for(let i = 0; i<data.length; i++ ){
            taomlarContainer.innerHTML = `
            <div class="taom-noma">
            <img class="box-img" src="${data[i].link}" alt="">
            <ul class="order">
                <li>Taom nome: <span>${data[i].name}</span> 
                </li>
                <li>Taom narxi: <span>${data[i].narhi}</span> 
                </li>
                <li>Taom oshpazi: <span>${data[i].oshpazi} </span> 
                </li>
                <li>Taom restarni: <span>${data[i].taomTayorlangan}</span> 
                </li>
            </ul>
        </div>
            `
    }

})


