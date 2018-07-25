window.onload = () => {
    document.querySelector('#md-editor').addEventListener('keyup', translateMD2Html );
    document.querySelector('#md-editor').addEventListener('focusout', translateMD2Html );

    document.querySelector('#btnLoadMdFile').addEventListener('click', loadMdFile );
}

function translateMD2Html() {
    marked.setOptions({
        breaks: true,
    });

    const mdString = document.querySelector('#md-editor').value;
    document.querySelector('#viewer').innerHTML = marked(mdString);
}

function loadMdFile( e ) {
    const mdPath = document.querySelector('#mdPath').value;

    axios.post('load_md_file', {
        'md_path': mdPath
    })
        .then( response => {
            document.querySelector('#md-editor').value = response.data;
            translateMD2Html();
        } )
        .catch( err => {
            console.dir(err);
            alert(`load fail. reason(${err})`);
        } );
}