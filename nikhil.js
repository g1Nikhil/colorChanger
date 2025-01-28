let buttons = document.querySelectorAll('.button');
let body = document.querySelector('body');

buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'grey' ||e.target.id === 'yellow' || e.target.id === 'pink' || e.target.id === 'lightblue' || e.target.id === 'white')
        {
            body.style.backgroundColor = e.target.id;
        }

    });

});