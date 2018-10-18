function words(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText.split("\n");
                var x = document.getElementById('letters').value;
                x = x.replace(" ", '').replace(',', '')
                var answers = [];
                var text = ''
                for(i in allText){
                    if(allText[i].length >= 3 && x.includes(allText[i]) && allText[i] != x){
                        answers.push(allText[i]);
                    }
                }
                var y;
                for(y = 0; y < answers.length; y++){
                    text += "You can't spell "+x+" without " + answers[y] + "<br>";
                }
                document.getElementById("answer").innerHTML = text;
            }
        }
    }
    rawFile.send(null);
}
