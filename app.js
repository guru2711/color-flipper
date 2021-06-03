const colors =["green","red","orange","pink"]
const btn = document.getElementById('btn')
const color = document.querySelector(".color")
btn.addEventListener('click', function(){
    console.log(document.body)
    const randomNumber = getrandomnumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})
function getrandomnumber(){
    return Math.floor(Math.random()*colors.length)
}