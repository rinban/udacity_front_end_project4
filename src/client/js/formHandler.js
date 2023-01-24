export async function handleSubmit(event) {
    event.preventDefault();

    // clear previous result
    document.getElementById('ScoreTag').innerHTML = '';
    document.getElementById('confidence').innerHTML = '';
    document.getElementById('irony').innerHTML = '';
    document.getElementById('subjectivity').innerHTML = ''; 

    // get url that user submitted
    const formurl = document.getElementById('name').value;

    if(formurl.length == 0){
        document.getElementById('errormsg').innerHTML = 'Please enter an URL';
        return;
    }
    else{document.getElementById('errormsg').innerHTML = '';}

    let data = await analyzeText ('/postResult', formurl)
        .then(data => data.json())
        .then(function (res) {
            Client.updateUI(res)
        })
}

export async function analyzeText(url,formurl) {

    let response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ inputUrl: formurl })
    })

    return response
}

