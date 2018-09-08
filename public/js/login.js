/**
 * Created by janghunlee on 2018. 9. 4..
 */

let login_btn = document.getElementById('login-btn');

login_btn.addEventListener('click',()=>{
    "use strict";
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;

    if(id != null && password != null){
        $.ajax({
            method:'POST',
            url:'/auth/login',
            data:{
                id:id,
                password:password
            },
            success:function (data) {
                if(data.status == 200){
                    if(data.data.auth_type == 'ward'){
                        location.href = '/main/ward'
                    }
                    else if(data.data.auth_type == 'guardian'){
                        location.href = '/main/guardian'
                    }
                }
            },
            error:function (err) {
                console.log(err);
            }
        })
    }
});