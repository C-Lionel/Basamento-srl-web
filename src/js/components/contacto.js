


$(document).ready(function () {

    const sentEmail = () => {
        const params = {
            from_name: document.getElementById('nombre').value,
            from_apel: document.getElementById('apellido').value,
            subject: document.getElementById('asunto').value,
            from_email: document.getElementById('email').value,
            message: document.getElementById('mensaje').value
        }
        console.log(params);
    
    
        swal({
            title: "Confirmar",
            text: "¿ Desea enviar el formulario de contacto ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    emailjs.send('service_kz0d3aw', 'template_aiy5hiy', params, 'user_2RPTKiCh5z5QXxWtnqR0w')
                    swal('Formulario enviado exitosamente','El Formulario ha sido enviado de forma exitosa', 'success');
                } else {
                    swal("Ha cancelado la acción", "El formulario no ha sido enviado", "error");
                }
            });
    
            document.getElementById('nombre').value = "",
            document.getElementById('apellido').value = "",
            document.getElementById('asunto').value = "",
            document.getElementById('email').value = "",
            document.getElementById('mensaje').value = ""
    
    }
    
    document.getElementById('form').addEventListener('submit', (e) => {
        e.preventDefault()
        sentEmail()
    });


});




