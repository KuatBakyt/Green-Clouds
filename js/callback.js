function sendwhatsapp() {
    let phonenumber = "+77476202879";

    let name = document.querySelector(".name").value;
    let address = document.querySelector(".address").value;
    let tel = document.querySelector(".tel").value;

    let url = "https://wa.me/" + phonenumber + "?text="
        + "*Имя :* " + name + "%0a"
        + "*Адрес :* " + address + "%0a"
        + "*Номер телефона :* " + tel
        + "%0a%0a"
        + "Отправлена с офицального сайта";

    window.open(url, '_blank').focus();

}