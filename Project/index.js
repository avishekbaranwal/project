
const con = document.querySelector('#con')
const contact = document.querySelector('#contact')
contact.addEventListener('click', async function (e) {
    var res = await axios.get('https://api.agify.io/?name=avishek')
    var data = res.data;
    con.innerHTML = data.name + " " + "kumar\n" + "9656565656"



})