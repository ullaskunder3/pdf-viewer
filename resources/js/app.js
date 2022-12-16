let box = document.getElementsByClassName('dock');
const preview = document.querySelector('iframe');
const loadingEle = document.getElementById('loading');
const container = document.querySelector('.container');
document.getElementById('triggerGetFile').addEventListener('click', () => {
    document.getElementById('getFile').click()
})
function fetchFile() {
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
    var filename = file.name;

    reader.addEventListener("load", function () {
        // loadingEle.style.display = 'block';
        preview.style.opacity = 1;
        preview.src = reader.result;
        document.onkeydown = keyPress;
    }, false);

    if (!(filename.length == 0)) {
        container.style.display = "none"
        loadingEle.style.display = 'none';
    }
    container.style.display = "none"
    if (file) {
        reader.readAsDataURL(file);
    }
}
function closeIframe() {
    preview.src = "about:blank"
    container.style.display = "block"
    container.style.alignItems = "center";
    container.style.display = "flex";
    container.style.justifyContent = "center";
}
const keyPress = (e) => {
    let eventObj = window.event ? event : e
    if (eventObj.keyCode == 191 && eventObj.ctrlKey) {
        console.log("class List",box[0].classList);
        if (box[0].classList.contains('hidden')) {
            box[0].classList.remove('hidden');
            box[0].classList.remove('visuallyhidden');
        } else {
            box[0].classList.add('visuallyhidden');
            box[0].classList.add('hidden');
        }
    }
}
document.onkeydown = keyPress;