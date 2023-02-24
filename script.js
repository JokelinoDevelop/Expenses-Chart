let data = [
  {
    "day": "sun",
    "amount": 25.48
  },
  {
    "day": "mon",
    "amount": 17.45
  },
  {
    "day": "tue",
    "amount": 34.91
  },
  {
    "day": "wed",
    "amount": 52.36
  },
  {
    "day": "thu",
    "amount": 31.07
  },
  {
    "day": "fri",
    "amount": 23.39
  },
  {
    "day": "sat",
    "amount": 43.28
  }
]

function changeAll(day,amount){
    let element = document.getElementById(`${day}`);
    let parentElement = element.parentElement;
    let price = parentElement.querySelector('.price');
    price.innerText = `${amount}$`
    element.addEventListener("mouseover", () => {
      price.style.opacity = 1;
    })

    element.addEventListener("mouseout", () => {
      price.style.opacity = 0;
    })
    element.style.height = `${(amount * 250)/100}px`    
}

for(let object of data){
    changeAll(object.day,object.amount)
}


let bars = document.querySelectorAll('.container .bars ul li div');

const days = ['sun','mon','tue', 'wed', 'thu', 'fri', 'sat'];

let date = new Date();
let day = date.getDay();

let todayBar = document.getElementById(`${days[day]}`);
todayBar.style.backgroundColor = "var(--cyan)";

