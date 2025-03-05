const bells = document.getElementById('bells');
const bell = document.getElementById('bell');
bell.style.display = 'flex';
let countX = 0;

function send() {
    const text = document.getElementById('text').value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${text}`;
    
    const container = document.getElementById('container');
    const sentDiv = document.createElement('div');
    sentDiv.classList.add('senter');

    const speech = document.createElement('button');
    speech.classList.add('sen');
    speech.innerHTML = '<i class="fas fa-microphone"></i>';
    speech.addEventListener('click', () => {
        const spee = new SpeechSynthesisUtterance();
        spee.text = text;
        spee.rate = 0.8;
        const synth = window.speechSynthesis;
        synth.speak(spee);
    });

    const copy = document.createElement('button');
    copy.classList.add('sen');
    copy.innerHTML = '<i class="fas fa-copy"></i>';
    copy.addEventListener('click', () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                copy.innerHTML = '<i class="fas fa-clipboard"></i>';
                copy.style.border = 'none';
                const cpy = new SpeechSynthesisUtterance();
                cpy.text = 'Copied';
                cpy.rate = 0.9;
                const syn = window.speechSynthesis;
                syn.speak(cpy);
                copy.disabled = true;
            })
            .catch(err => {
                console.error('Clipboard copy failed: ', err);
                alert('Failed to copy text.');
            });
    });

    const textNode = document.createTextNode(text);
    sentDiv.appendChild(textNode);
    sentDiv.appendChild(copy);
    sentDiv.appendChild(speech);
    container.appendChild(sentDiv);

    const reciever = document.createElement('div');
    reciever.classList.add('recieve');

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            const speec = document.createElement('button');
            speec.classList.add('senn');
            speec.innerHTML = '<i class="fas fa-microphone"></i>';
            speec.addEventListener('click', () => {
                const speek = new SpeechSynthesisUtterance();
                speek.text = rec.textContent;
                speek.rate = 0.8;
                const synt = window.speechSynthesis;
                synt.speak(speek);
            });

            const copy = document.createElement('button');
            copy.classList.add('sen');
            copy.textContent = 'Copy';
            copy.addEventListener('click', () => {
                navigator.clipboard.writeText(rec.textContent)
                    .then(() => {
                        copy.textContent = 'Copied';
                        copy.style.border = 'none';
                        copy.style.color = 'black';
                        copy.disabled = true;
                    })
                    .catch(err => {
                        console.error('Clipboard copy failed: ', err);
                        alert('Failed to copy definition.');
                    });
            });

            const rec = document.createTextNode(data[0].meanings[0].definitions[0].definition);
            reciever.appendChild(rec);
            reciever.appendChild(copy);
            reciever.appendChild(speec);
            container.appendChild(reciever);
            countX++;

            const msc = document.getElementById('sen');
            if (msc) msc.play();
            bell.innerHTML = countX;

            try {
                localStorage.setItem('message', rec.textContent);
            } catch (e) {
                console.error('Failed to store message in localStorage: ', e);
            }
        })
        .catch(err => {
            console.error('Error fetching data: ', err);
            alert('Failed to retrieve definition. Please try again later.');
        });
}

                                                                                                                                                                                                                                                                                                                                     function show(){
                                                                                                                                                                                                                                                                                                                                         const stored = document.getElementById('store');
                                                                                                                                                                                                                                                                                                                                             const str = document.getElementById('message');
                                                                                                                                                                                                                                                                                                                                                 countX--;
                                                                                                                                                                                                                                                                                                                                                     bell.innerHTML=countX
                                                                                                                                                                                                                                                                                                                                                         const storText = document.createTextNode(localStorage.getItem('message'))
                                                                                                                                                                                                                                                                                                                                                             stored.appendChild(storText)
                                                                                                                                                                                                                                                                                                                                                                 str.appendChild(stored)
                                                                                                                                                                                                                                                                                                                                                                     stored.style.display='block';
                                                                                                                                                                                                                                                                                                                                                                         
                                                                                                                                                                                                                                                                                                                                                                           }
                                                                                                                                                                                                                                                      
                                                                                                                                                                                                                                                                                                                                                                           function dark() {
                                                                                                                                                                                                                                                                                                                                                                            // Get the button and check if it's in dark mode already
                                                                                                                                                                                                                                                                                                                                                                            const darkModeButton = document.getElementById('darkMode');
                                                                                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                                                                            // Check if the body already has a dark background
                                                                                                                                                                                                                                                                                                                                                                            if (document.body.style.background === "rgb(0, 0, 0)") {
                                                                                                                                                                                                                                                                                                                                                                                // If it's dark mode, switch back to light mode
                                                                                                                                                                                                                                                                                                                                                                                document.body.style.background = "radial-gradient( circle farthest-corner at 10% 20%,  rgba(221,7,7,1) 0%, rgba(246,231,82,1) 90% )";  // Light background
                                                                                                                                                                                                                                                                                                                                                                                document.getElementById('span').style.color = "#002a79";  // Dark text color
                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                                                                                                                                // If it's light mode, switch to dark mode
                                                                                                                                                                                                                                                                                                                                                                                document.body.style.background = "#000";  // Dark background
                                                                                                                                                                                                                                                                                                                                                                                document.getElementById('span').style.color = "#fff";  // Light text color
                                                                                                                                                                                                                                                                                                                                                                                 
                                                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                                                                                        