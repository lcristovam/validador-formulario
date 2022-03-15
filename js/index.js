
let formValidator = {

    handleSubmit:(event)=>{

        event.preventDefault();

        let send= true;

        let inputs= form.querySelectorAll('input');

        formValidator.clearErrors();

        for( let i=0; i< inputs.length; i++){

            let input = inputs[i];
            let check = formValidator.checkInput(input);

            if(check !== true){
                send = false;
                formValidator.showError(input, check);
            }

        }
        if(send){
            form.submit();
        }
    },

    checkInput:(input) =>{
        let rules = input.getAttribute('data-rules');

        if (rules !==null){
            rules = rules.split('|')
            for(let k in rules){
                rDetails = rules[k].split('=')

                switch(rDetails[0]){
                    case'required':
                        if(input.value == ''){
                            return 'O Campo não pode ficar vazio'
                        }
                    break;
                    
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return 'O Campo deve ter pelo menos ' +rDetails[1]+' Caracteres'

                        }
                    break;
                    case 'email':
                        if(input.value.length != ''){

                             
                        }

                }
            }
        }
        return true;
    },

    showError:(input, error)=>{
        input.style.borderColor = 'rgb(226, 57, 57)';

        let errorElement = document.createElement('div');
        errorElement.classList.add('error');

        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling);

    },
    clearErrors:()=>{

        let inputs = form.querySelectorAll('input');

        for(let i=0; i< inputs.length;i++){

            inputs[i].style ='';
        }

        let errorElements = document.querySelectorAll('.error');

        for(i=0; i< errorElements.length;i++){

            errorElements[i].remove();      
          }
    }
};


let form = document.querySelector('.form-X');
form.addEventListener('submit', formValidator.handleSubmit);