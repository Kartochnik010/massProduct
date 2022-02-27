({
    "plugins": ["jsdom-quokka-plugin"],
    "jsdom": {"file": "index.html"}
})

    // function multiply(num1, num2){
    //     return num1 * num2
    // }
    // function multiply(num1, num2){
    //     document.getElementById('answer').innerHTML = num1 * num2;
    // }
    // function divide(num1, num2){
    //     document.getElementById('answer').innerHTML = num1 / num2;
    // }

    const date = new Date();

    function dayIntToDayString(day) {
        let dayOfTheWeek = "";
        if(day == 1){dayOfTheWeek = "Monday"; return dayOfTheWeek}
        if(day == 2){dayOfTheWeek = "Tuesday"; return dayOfTheWeek}
        if(day == 3){dayOfTheWeek = "Wednesday"; return dayOfTheWeek}
        if(day == 4){dayOfTheWeek = "Thursday"; return dayOfTheWeek}
        if(day == 5){dayOfTheWeek = "friday"; return dayOfTheWeek}
        if(day == 6){dayOfTheWeek = "Saturday"; return dayOfTheWeek}
        if(day == 7){dayOfTheWeek = "Sunday"; return dayOfTheWeek}

        return "Something is wrong"
    }

    

    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    document.querySelector("#multiply").innerHTML =

    document.getElementById("year").innerHTML = date.getFullYear();
    document.getElementById("dayOfTheWeek").innerHTML = dayIntToDayString(date.getDay());
    document.getElementById("date").innerHTML = date.getDate();
    document.getElementById("month").innerHTML = date.getMonth();
    document.getElementById("hours").innerHTML = date.getHours();
    document.getElementById("minutes").innerHTML = date.getMinutes();
    document.getElementById("secs").innerHTML = date.getSeconds();

    document.getElementById("name").innerHTML = "Alizhan";
    document.getElementById("surname").innerHTML = "Kalniyazov";
    document.getElementById("group").innerHTML = "CS-2120";

    const lastDay = new Date("July 1, 2024 00:00:00");
    document.getElementById("daysLeft").innerHTML = (((lastDay - date)/1000)/60/60/24).toFixed(); 