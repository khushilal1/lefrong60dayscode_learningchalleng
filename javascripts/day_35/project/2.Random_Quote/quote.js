function quote() {


    var quotes = [
         `If you don't have time to read, you don't have the time (or the tools) to write. Simple as that."
    --Stephen King`, `I can shake off everything as I write; my sorrows disappear, my courage is reborn."
    --Anne Frank`,`"A writer is someone for whom writing is more difficult than it is for other people."
    --Thomas Mann, Essays of Three Decades`,`"Let me live, love, and say it well in good sentences."
    --Sylvia Plath, The Unabridged Journals of Sylvia Plath`,`"Let me live, love, and say it well in good sentences."
    --Sylvia Plath, The Unabridged Journals of Sylvia Plath`,`"Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion. Rather, follow your most intense obsessions mercilessly."
    --Franz Kafka`,`"I kept always two books in my pocket, one to read, one to write in."
    --Robert Louis Stevenson`,`"You should write because you love the shape of stories and sentences and the creation of different words on a page. Writing comes from reading, and reading is the finest teacher of how to write."
    --Annie Proulx`,`"Writing is like sex. First you do it for love, then you do it for your friends, and then you do it for money."
    --Virginia Woolf`,`"To survive, you must tell stories."
    --Umberto Eco, The Island of the Day Before
    `,`"A good writer possesses not only his own spirit but also the spirit of his friends."
    ― Friedrich Nietzsche`
    ]
    random=Math.floor(Math.random()*quotes.length)
    
        console.log(`${[random]}`);

    document.getElementById("paragraph").innerHTML =`${quotes[random]}`

    
 

}