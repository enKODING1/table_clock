let control_mode = window.matchMedia && window
    .matchMedia('(prefers-color-scheme: dark)')
    .matches;

var btn = document.querySelector('.dark');


let mode = 'white'


//다크 모드 배경색 폰트색
const night = {
    background: [
        {
            elem: "body",
            color: "#2f2f2f"
        }, {
            elem: ".clock-wrap",
            color: "#474c52"
        }
    ],
    font: [
        {
            //yy mm dd
            elem: "#NightnLight",
            color: "aliceblue"
        }, {
            //hh:mm:ss
            elem: "body",
            color: "aliceblue"
        }
    ]
};

//라이트 모드 배경색 폰트색
const light = {
    background: [
        {
            elem: "body",
            color: "#fff"
        }, {
            elem: ".clock-wrap",
            color: "#e6e7e7"
        }
    ],
    font: [
        {
            //yy mm dd
            elem: "#NightnLight",
            color: "#717171"
        }, {
            //hh:mm:ss
            elem: "body",
            color: "#717171"
        }
    ]
};

function Background(dom, color) {
    return document
        .querySelector(dom)
        .style
        .backgroundColor = color;
}

function FontColor(dom, color) {
    return document
        .querySelector(dom)
        .style
        .color = color;
}

let themeHandler = (bg_handler, ft_handler) => {
    //배경화면 변경
    bg_handler.map((mode) => {
        `${Background(mode.elem, mode.color)}`
    });
    //폰트 변경
    ft_handler.map((mode) => {
        `${FontColor(mode.elem, mode.color)}`
    });
}


function updateBtnStatus(btn_status){
    var btn_val = btn.innerHTML= btn_status
}

btn.addEventListener('click', () => {
    if (mode === 'white') {

        themeHandler(light.background, light.font);
        mode = "black";
        updateBtnStatus('light mode(test button)');
    
    } else if (mode === 'black') {

        themeHandler(night.background, night.font);
        mode = "white";
        updateBtnStatus('dark mode(test button)');

    }
})

if (control_mode === true) {
    themeHandler(night.background, night.font);
    mode = "white";
    updateBtnStatus('dark mode(test button)');
} else {
    themeHandler(light.background, light.font);
    mode = "black";
    updateBtnStatus('light mode(test button)');
}





//os 테마모드 감지
window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
        let control_mode = window.matchMedia && window
    .matchMedia('(prefers-color-scheme: dark)')
    .matches;

       if(control_mode === true){
        themeHandler(night.background, night.font);
        mode = "white";
        updateBtnStatus('dark mode(test button)');
       }else{
        themeHandler(light.background, light.font);
        mode = "black";
        updateBtnStatus('light mode(test button)');
       }
    })

