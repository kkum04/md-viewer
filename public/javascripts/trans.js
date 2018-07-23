window.onload = () => {
    document.querySelector('#md-editor').addEventListener('keyup', translateMD2Html );
    document.querySelector('#md-editor').addEventListener('focusout', translateMD2Html )
}

function translateMD2Html( event ) {
    const mdString = this.value;

    document.querySelector('#viewer').innerHTML =
        marked(mdString).replace(/\n/g, "<br />");
}