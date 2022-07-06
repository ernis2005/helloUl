

///ajax api
function printCountry([Country]) {

    let Country_name = $('<div>').addClass('title-new').html(Country.name);
    $('.info2').html(Country_name)
    console.log(Country_name);
    let Country_flag = $('<img>').addClass('img-img').attr('src', Country.flag)
    $('.img_').html(Country_flag);
    //  $('.header').html(ernis_flag,ernis_name)
};

$('.form').on('submit', function (e) {
    e.preventDefault();
    let countryNmae = $('.input').val();
    $('.button').click(function () {
        $('.class').remove();
    });
    $.ajax({
        url: 'https://restcountries.com/v2/name/' + countryNmae,
    }).done(printCountry)
})
let ajax = $.ajax({
    url: 'https://restcountries.com/v2/all?fields=name,flag',
}).done((hello) => {
    let options = {
        data: hello,
        getValue: 'name',
        list: {
            match: {
                enabled: true
            }
        },
        template: {
            type: "iconLeft",
            fields: {
                iconSrc: 'flag',
            }
        }
    }
    $('.input').easyAutocomplete(options);
})
///fetch
let url = `https://restcountries.com/v2/all`
console.log(url);
let getUsers = async (url) => {
    try {
        let response = await fetch(url)
        let res = await response.json();
        let i = 0
        res.map((item) => {
            i++
            let country = $(`<li class="message" id=${i}></li>`)
            if (i == 10) {
                console.log(l2усссс);
            };
            let flags_fetch = $('<img>', { src: item.flags.png }).addClass('o_img')
            $('.add').append(country, flags_fetch)
            country.append(item.name)
            country, flags_fetch.on('click', function () {
                let img = $('<img>', {
                    src: item.flags.png
                })
                let a = $(`<button class="name">${item.name}</button>`)
                let name = $('<div>').addClass('name');
                name.append(img, a);
                $('.contener').prepend(name)
                setTimeout(() => {
                    name.remove()
                }, 6000);
            }
            )
        })
    } catch (error) {
        $('.h').append('error')
    }
}

getUsers(url)

