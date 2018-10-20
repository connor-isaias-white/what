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
                x = x.replace(/ /gi, '').replace(/,/gi, '');
                var answers = [];
                var text = '';
                var cbChecked = document.querySelector('[name="type"]:checked');
                if(cbChecked.value =="Subword"){
                    for(i in allText){
                        if(allText[i].length >= 3 && x.includes(allText[i]) && allText[i] != x){
                            answers.push(allText[i]);
                        }
                    }
                    var y;
                    for(y = 0; y < answers.length; y++){
                        text += "You can't spell "+x+" without " + answers[y] + "<br>";
                    }
                }
                else{
                    for(i in allText){
                        var testing = true;
                        for(y in allText[i]){
                            if(x.includes(allText[i][y]) == false){
                                testing= false;
                                break;
                            }
                        }
                        if(testing && allText[i].length > 2){
                            answers.push(allText[i]);
                        }
                    }
                    var y;
                    for(y = 0; y < answers.length; y++){
                        text += "With "+x+" you can spell " + answers[y] + "<br>";
                    }
                }
                document.getElementById("answer").innerHTML = text;
            }
        }
    }
    rawFile.send(null);
}
