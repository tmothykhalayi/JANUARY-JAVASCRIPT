let cards = [ "A", "B" ,"C" ,"D" ,"E" ,"1", "2" ,"3"];
shuffle(cards);
cards.forEach(card => console.log(card));
function shuffle(array){
    let currentIndex =array.length;
    while(currentIndex !=0){
        let randomIndex = Math.floor(Math.random())*array.length;
        currentIndex-=1;
        let temp =array[currentIndex];
        array[currentIndex]=array[randomIndex];
        array[randomIndex] =temp;
    }
}