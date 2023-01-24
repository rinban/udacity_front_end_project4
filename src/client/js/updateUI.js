function updateUI(content) {

        document.getElementById('ScoreTag').innerHTML = `Score tag: ${content.score_tag}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${content.confidence}`;
        document.getElementById('irony').innerHTML = `Irony: ${content.irony}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${content.subjectivity}`; 

    }

export { updateUI };