$(document).ready(function() {
    const audioElement = document.getElementById('backgroundMusic');

    // Intenta reproducir el audio cuando se haga clic en cualquier parte de la página
    $(document).on('click', function() {
        audioElement.play().catch((error) => {
            console.log("Error reproduciendo el audio: ", error);
        });
    });

    // Resto de tu código...
    $('.frame').click(function() {
        $('.top').addClass('open');
        $('.message').addClass('pull');
    });

    // Código para el modal
    var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
        modal.style.display = "block";
    };

    span.onclick = function() {
        modal.style.display = "none";
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
