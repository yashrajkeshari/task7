function userinput() {
    let start = document.getElementById(`start`);
    let box2 = document.getElementById(`box2`);
    let box1 = document.getElementById(`box1`);
    let timer = document.getElementById(`timer`);
    start.addEventListener(`click`, function input() {
        box1.style.display = `none`;
        box2.style.display = `block`;
        timer.style.display = `block`;
    });
}
function reset() {
    let box1 = document.getElementById(`box1`);
    let reset = document.getElementById(`reset`);
    let box2 = document.getElementById(`box2`);
    let timer = document.getElementById(`timer`);
    
    reset.addEventListener(`click`, function display() {
        box1.style.display = `block`;
        box2.style.display = `none`;
        timer.style.display = `none`;
    });
}
function timer() {

    let start = document.getElementById(`start`);
    // let timer = document.getElementById(`timer`);

    start.addEventListener(`click`, function timerdisplay() {
        let duration = prompt("enter time in hh:mm:ss format");
        let hour = duration.substring(0, 2);
        let minute = duration.substring(3, 5);
        let second = duration.substring(6, 8);
        hour = parseInt(hour);
        minute = parseInt(minute);
        second = parseInt(second);


        let timepass = Math.floor(hour * 3600 * 1000 + minute * 60 * 1000 + second * 1000);

        let targettime = new Date().setMilliseconds(timepass);
        
        setInterval(() => {
        let timenow = new Date().getTime();
        
        var timerem = targettime - timenow;
        console.log(timerem);

            let hoursrem = Math.floor((timerem % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutesrem = Math.floor((timerem % (1000 * 60 * 60)) / (1000 * 60));
            let secondsrem = Math.floor((timerem % (1000 * 60)) / 1000);
            document.getElementById("timer").innerHTML = hoursrem + "h "
                + minutesrem + "m " + secondsrem + "s ";

                if (timerem < 0){
                    document.getElementById("timer").innerHTML = "TimeUp!!!";
                }
        }, 1000);
       


       

    });
}



