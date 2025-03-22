function startslider() {
    const imgPaths = ["imgs/cae73ca4d0a568b6f5f311eda67afe55.webp", "imgs/520015bccb572315045d1de483e381a6.webp", "imgs/406189053ea99d037bf5b00bd489eac8.webp", "imgs/c6bf2941acff1b5fab19ac98e60acf8f.webp", "imgs/fdf20800875ad67c160fac8e4a0ca7a7.webp"];
    const counter = document.getElementById("image_count");
    const slider = document.getElementById("image_slider_image");
    let currImg = 0;

    setInterval(() => {
        if (++currImg == imgPaths.length) {
            currImg = 0;
        }
        counter.innerHTML = currImg + 1 + "/" + imgPaths.length;
        slider.src =  imgPaths[currImg];
    }, 5000);
}