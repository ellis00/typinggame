// Interactive typing game script
document.getElementById('typingInput').addEventListener('input', function(e) {
    const input = e.target.value.toLowerCase();
    const noteElement = document.getElementById('note');

    switch(input) {
        case 'love':
            noteElement.innerHTML = "<p><strong>:</strong>  I'm really happy I asked you that day, despite how cringey and panicked the whole thing was. I love you so much and promise to make it up and a lot more romantical for you:3 .</p>";
            break;
        case 'sweetheart':
            noteElement.innerHTML = "<p><strong>:</strong> That's also you! I always love the petnames you give me, so I want to return the favour and give you a bunch. This is by far my favourite though so I'm going to overuse it :p</p>";
            break;
        case 'scarlett':
            noteElement.innerHTML = "<p><strong>:</strong> That's you! I'm very glad that it was you that I met and asked</p>";
            break;
        case '22 september':
            noteElement.innerHTML = "<p><strong>:</strong> 22nd September 2023, the day we got together. Now I get a bunch of gifts around the same time as my birthday is right after :p</p>";
            break;
        case 'pink':
            noteElement.innerHTML = "<p><strong>:</strong> Pink. Both of our favorite colours, hence why every gift you got today has an ongoing colour theme..</p>";
            break;
         case 'ellis':
            noteElement.innerHTML = "<p><strong>:</strong> me? don't put my name, these gifts are meant to be about u .. .·°՞(≧□≦)՞°·.</p>";
            break;
        default:
            noteElement.innerHTML = ""; // Clear the message if no recognized word
    }
});
