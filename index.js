// get elements
let amount_p = document.querySelectorAll("p.price");
let days = document.querySelectorAll(".day")
let spans = document.querySelectorAll("li span")
let balance = document.querySelector(".balance")

// fetch the data and work with it
fetch("/data.json").then(res => {
    if (res.ok) {
        return res.json()
    } else {
        throw console.error("cannot find the object");
    }
})
    .then(alldata => {
        return alldata
    }).then(data => {
        let som = 0
        for (let i = 0; i < amount_p.length; i++) {
            amount_p[i].innerHTML = `$${data[i].amount}`
            days[i].innerHTML = `${data[i].day}`
            som += data[i].amount
        }
        balance.innerHTML = `$${som * 4}`
    });

// adding and removing classes and styles
spans.forEach(span => {
        span.onmouseover = () => {
            span.previousElementSibling.classList.add("amount")
            span.previousElementSibling.style.opacity = '1'
        }
        span.onmouseout = () => { 
            span.previousElementSibling.classList.remove("amount")
            span.previousElementSibling.style.opacity = '0'
        }
    })