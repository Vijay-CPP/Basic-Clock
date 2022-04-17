function change(num) {
    if (num < 10)
        num = "0" + num
    return num
}


t = document.getElementById("time")
dt = document.getElementById("date")

let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thurday", "Friday", "Saturday"]
let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

setInterval(() => {
    let time = new Date()
    hrs = time.getHours()
    let notation = " AM"
    
    if (hrs >= 12)
        notation = " PM"
    
    if (hrs > 12)
        hrs = hrs - 12;
    
    secs = time.getSeconds()


    mins = time.getMinutes()
    secs = time.getSeconds()

    hrs = change(hrs)
    mins = change(mins)
    secs = change(secs)


    t.innerText = hrs + " : " + mins + " : " + secs + notation;


    d = time.getDate()
    day = dayArray[time.getDay()]
    month = monthArray[time.getMonth()]
    year = time.getFullYear()

    dt.innerText = d + " " + month + " , " + year + " - " + day

}, 100)
