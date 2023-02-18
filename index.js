const clock = document.getElementById('center');

const setTime=()=>{
    clock.innerHTML = null;
    const time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let secs = time.getSeconds();
    let timestring = document.createElement('h1');
    timestring.innerText = `${hour}:${min}:${secs}`;
    clock.append(timestring);
}

setInterval(setTime,1000);

setTime();