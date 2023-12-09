const searchInput = document.querySelector('#searchInput')
const productItems = document.querySelector('#productItems')
const product = document.querySelectorAll('.product')
// const pname = document.getElementsByTagName('h2')

const showingResults = () => {

    for(let key of product){
        const searchText = searchInput.value.trim().toLocaleUpperCase();
        const match = key.getElementsByTagName('h2')[0].innerText.toLocaleUpperCase() || key.getElementsByTagName('h2')[0].innerHTML.toLocaleUpperCase();
        // console.log(match)
        if(searchText){
            if(match.includes(searchText)){
                key.classList.remove('hidden')
            }
            else{
                key.classList.add('hidden')
            }
        }
        else{
            key.classList.remove('hidden')
        }
    }
    

}
// searchInput.addEventListener('input',showingResults)



