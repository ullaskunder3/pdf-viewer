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
    console.log("clicked");
    preview.src = "about:blank"
    container.style.display = "block"
    container.style.alignItems = "center";
    container.style.display = "flex";
    container.style.justifyContent = "center";
}