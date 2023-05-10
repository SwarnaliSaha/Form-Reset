const form = document.querySelector('form');

form.onsubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    for(let [name,value] of formData){
        console.log(`${name} = ${value}`);
    }
    
    const item = document.getElementById("formElem");
    item.reset();
}