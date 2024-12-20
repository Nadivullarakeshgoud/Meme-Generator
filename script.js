const generateBtn=document.querySelector('.generate-button')
const memeTitle=document.querySelector('.meme-title')
const memeImage=document.querySelector('.meme-image')
const authorOutput=document.querySelector('.author')

function getMeme(){
    fetch('https://meme-api.com/gimme/wholesomememes')
.then(res=>res.json())
.then((data)=>{
    //object destructing
    const {title,url,author}=data
    memeTitle.innerText=title
    memeImage.src=url
    authorOutput.innerText=`Meme by: ${author}`

})
}

getMeme()

generateBtn.addEventListener('click',()=>{
    getMeme() 
})