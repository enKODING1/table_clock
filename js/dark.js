var btn = document.querySelector('.dark');
let mode = 'white'
//다크모드 옵션
const night_background = [
    {
        elem: "body",
        color: "#2f2f2f"
    }, {
        elem: ".clock-wrap",
        color: "#474c52"
    }
];
const night_font = [
    {
        elem: ".darknight",
        color: "black"
    }
];
//라이트 모드 옵션
const light_background = [
    {
        elem: "body",
        color: "white"
    }, {
        elem: ".clock-wrap",
        color: "black"
    }
];

const light_font = [
    {
        elem: ".darknight",
        color: "black"
    }
];





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

function NightMode(night_background, night_font) {
    // 백그라운드 색 변경
    night_background.map((night_bg) => {
        `${Background(night_bg.elem, night_bg.color)}`
    });
    //font 색 변경
    night_font.map((night_ft) => {
        `${FontColor(night_ft.elem, night_ft.color)}`
    });
}

function LightMode(light_background, light_font) {
    // 백그라운드 색 변경
    light_background.map((light_bg) => {
        `${Background(light_bg.elem, light_bg.color)}`
    });
    //font 색 변경
    light_font.map((light_ft) => {
        `${FontColor(light_ft.elem, light_ft.color)}`
    });
}




btn.addEventListener('click', () => {
    if (mode === 'white') {

        LightMode(light_background, light_font);
        mode = "black";

    } else if (mode === 'black') {

        NightMode(night_background, night_font);
        mode = "white";

    }
})
