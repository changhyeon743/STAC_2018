/**
 * Created by janghunlee on 2018. 9. 4..
 */
let register_btn = document.getElementById('register-btn');

register_btn.addEventListener('click',()=>{
    "use strict";
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let password_check = document.getElementById('password-check').value;
    let name = document.getElementById('name').value;
    let gender = document.getElementById('gender').value;


    if(id != '' || password != '' || name != '' || gender != ''){

        if(password == password_check){
            $.ajax({
                method:'POST',
                url:'/auth/register',
                data:{
                    id:id,
                    password:password,
                    name:name,
                    gender:gender,
                    auth_type:'ward'
                },
                success:function (data) {
                    console.log(data);
                    if(data.status == 200){
                        location.href='/pairing/code'
                    }
                    else if(data.status == 401){
                        Toast('이미 회원가입한 계정입니다');
                    }
                },
                error:function (err) {
                    console.log(err);
                }
            })
        }
        else{
            Toast('비밀번호 확인란을 제대로 입력해주세요');
        }
    }
    else{
        Toast('모든 정보를 입력해주세요');
    }
});