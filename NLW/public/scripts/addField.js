document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);   //em js vamos usar 'node' para nos referir a elementos html //cloneNode =  Returns a copy of node. If deep is true, the copy also includes the node's descendants. || parâmetro = valor bolean 

    const fields = newFieldContainer.querySelectorAll('input'); //All pega todos os inputs ali dentro, gerando um "array de node" Nodelist

    // fields[0].value = "";
    // fields[1].value = "";

    fields.forEach(function(fieldMomento){ // fields é um array, para cada um, ele vai realizar a função que recebe como parâmentro o fields[atual], quem realiza isso de deixar como parâmentro o num de array do momento é a função forEach
        fieldMomento.value = "";
    });

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}