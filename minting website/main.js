// connect to Moralis server
const serverUrl = "https://pj6gy5sxjwhn.usemoralis.com:2053/server";
const appId = "cV4cFcdFGnbanFPOV1Z8cLJRBSDw1pCWEH9pGMIJ";
Moralis.start({ serverUrl, appId });

// add Metamask
async function login() {
    let user = Moralis.User.current();
    if (!user) {
        user = await Moralis.authenticate();
    }
    console.log("logged in user:", user);
}
document.getElementById("btn-login").onclick = login;


// increase and decrease function
const value = document.getElementById('value');
const price = document.getElementById('price');
let p = 1.1;

document.getElementById('increase').addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt(value.innerHTML) < 5) {
        let num = parseInt(value.innerHTML);
        value.innerHTML = num + 1;
        price.innerHTML = p * value.innerHTML;
    }
});

document.getElementById('decrease').addEventListener("click", (e) => {
    e.preventDefault();
    if (parseInt(value.innerHTML) > 1) {
        let num = parseInt(value.innerHTML);
        value.innerHTML = num - 1;
        price.innerHTML = p * value.innerHTML;
    }
});

// menu mobile display
const menu = document.getElementById('mobile-menu');
const navUl = document.getElementById('login');

menu.addEventListener('click', () => {
    navUl.classList.toggle('show');
});