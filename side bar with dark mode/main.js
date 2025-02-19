const body = document.querySelector("body"),
    sidebar = body.querySelector('.side-bar'),
    toggle = body.querySelector('.toggle'),
    searchBtn = body.querySelector('.search-box'),
    modeSwitch = body.querySelector('.toggle-switch'),
    modeText = body.querySelector('.mode-text'),
    logoName = body.querySelector('.name'),
    logoSlogan = body.querySelector('.slogan'),
    arrow = body.querySelector('.bx-chevron-right');

    toggle.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    });

    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove('close');
        });

    modeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');

        if(body.classList.contains('dark')){
            modeText.innerText = 'Light Mode';
        }
        else{
            modeText.innerText = 'Dark Mode';
        }
        if(body.classList.contains('dark')){
            logoName.style.color = 'white';
            logoSlogan.style.color = 'white';
            arrow.style.color = 'white';
        }
        else{
            logoName.style.color = 'black';
            logoSlogan.style.color = 'black';
        }
    });
