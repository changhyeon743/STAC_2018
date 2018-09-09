/**
 * Created by janghunlee on 2018. 9. 9..
 */
let humidity_data = document.getElementById('humidity-data');
let temperature_data = document.getElementById('temperature-data');
let status_data = document.getElementById('status-data');

let book_health_time_line = document.getElementById('time-line');

window.onload = ()=>{
    "use strict";
    $.ajax({
        method:'GET',
        url:'/data/flowerpot',
        success:function (data) {
            if(data.status == 401){
                location.href = '/'
            }
            else if(data.status == 200){
                humidity_data.innerHTML = data.data.flowerpot_humidity.text;
                temperature_data.innerHTML = data.data.temperature.text;
                status_data.innerHTML = data.data.overall;
            }
        },
        error:function (err) {
            console.log(err);
        }
    });

    $.ajax({
        method:'GET',
        url:'/books',
        success:function (data) {
            let bookData = data.data;

            for(let i = 0; i<10; i++){
                let html = '<div class="book"> <div class="book-data"><div class="title">'
                html += '<h4>'+bookData[i].title.substring(0,10).replace(/<b>/gi,'').replace(/<\/b>/gi,'')+'...'+'</h4>'
                html += '<p>'+bookData[i].author.replace(/<b>/gi,'').replace(/<\/b>/gi,'')+'</p>'
                html += '<div class="star-box"><img src="/img/star.svg" style="width: 20px; height: 20px;"><img src="/img/star.svg" style="width: 20px; height: 20px;"><img src="/img/star.svg" style="width: 20px; height: 20px;"><img src="/img/star.svg" style="width: 20px; height: 20px;"><img src="/img/star.svg" style="width: 20px; height: 20px;"></div>'
                html += '<p class="star-user">72,512명이 좋아합니다.</p>'
                html += '</div>'
                html += '<div class="img">'
                html += '<img src="'+bookData[i].image+'">'
                html += '</div></div>'
                html += '<div class="book-description"><h4>책소개</h4><div>'
                html += bookData[i].description.substring(0,130).replace(/<b>/gi,'').replace(/<\/b>/gi,'')+'...'
                html += '</div></div></div>'

                book_health_time_line.innerHTML = book_health_time_line.innerHTML + html;
            }

            book_health_time_line.innerHTML = book_health_time_line.innerHTML + '<div class="null"></div>'

        },
        error:function (err) {
            console.log(err);
        }
    });
}

function get_guardian() {
    $.ajax({
        method:'GET',
        url:'/data/guardian',
        success:function (data) {
            if(data.status == 200){
                location.href = '/show/guardian'
            }
            else if(data.status == 401){
                location.href = '/';
            }
            else if(data.status == 404){
                Toast('아직 보호자가 등록되지 않았습니다');
            }
        },
        error:function (err) {

        }
    });
}

function logout() {
    $.ajax({
        method:'POST',
        url:'/auth/logout',
        success:function (data) {
            console.log(data)
            if(data.status == 200){
                location.href = '/'
            }
        },
        error:function (err) {
            console.log(err);
        }
    })
}