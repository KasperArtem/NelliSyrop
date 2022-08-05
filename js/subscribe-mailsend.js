


document.addEventListener('DOMContentLoaded', function () {

    // Form for sending emails
    const form = document.getElementById('mail-subscribe');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formDate = new FormData(form);

        if (error === 0) {
            form.classList.add('_sending');
            let response = await fetch('subscribe-mailsend.php', {
                method: 'POST',
                body: formDate
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Помилка");
                form.classList.remove('_sending');
            }
        } else {
            alert('Напишіть свою пошту.');
        }
    }

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++){
            const input = formReq[index];
            formRemoveError(input);

            if(input.classList.contains('_email')){
                if(emailTest(input)){
                    formAddError(input);
                    error++;
                }
            }
             else{
                 if(input.value === ''){
                     formAddError(input);
                     error++;
                 }
             }
        }
        return error;
    }
    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
});
