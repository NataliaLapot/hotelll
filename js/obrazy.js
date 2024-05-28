var ImgNo = 0;
var Tab_Img = [
{ src: "zdjęcia/gość1.jpg", size: "size1" },
{ src: "zdjęcia/gość2.jpg", size: "size2" },
{ src: "zdjęcia/gość3.jpg", size: "size3" },
{ src: "zdjęcia/gość4.3.jpg", size: "size4" },
{ src: "zdjęcia/gość5.jpg", size: "size1" },
{ src: "zdjęcia/gość6.jpg", size: "size2" },
{ src: "zdjęcia/gość7.jpg", size: "size3" }
];

function Start() {
    document.getElementById("img_browser").style.visibility = "hidden";
    document.addEventListener("keydown", function (event) {
        if (document.getElementById("img_browser").style.visibility == "visible") {
            switch (event.key) {
                case "ArrowRight":
                    Next();
                    break;
                case "ArrowLeft":
                    Prev();
                    break;
                case "Home":
                    First();
                    break;
                case "End":
                    Last();
                    break;
            }
        }
    });
}

function ShowHide() {
    var Img_Brow = document.getElementById("img_browser");
    var Btn = document.getElementById("toggleButton");
    if (Img_Brow.style.visibility == "hidden") {
        Img_Brow.style.visibility = "visible";
        Btn.value = "Kliknij tutaj, żeby ukryć zdjęcia gości";
    } else {
        Img_Brow.style.visibility = "hidden";
        Btn.value = "Kliknij tutaj, żeby zobaczyć zdjęcia gości";
        ImgNo = 0;
        updateImage();
    }
}

function Next() {
    if (ImgNo < Tab_Img.length - 1) {
        ImgNo += 1;
        updateImage();
    }
}

function Prev() {
    if (ImgNo > 0) {
        ImgNo -= 1;
        updateImage();
    }
}

function First() {
    ImgNo = 0;
    updateImage();
}

function Last() {
    ImgNo = Tab_Img.length - 1;
    updateImage();
}

function updateImage() {
    var imageElement = document.getElementById("image");
    imageElement.src = Tab_Img[ImgNo].src;
    imageElement.className = Tab_Img[ImgNo].size;
}

window.onload = function () {
    Start();
};