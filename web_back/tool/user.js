var user={
    login:function(options){
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data: options.data,
            success:options.callback
            // success:function(res){
            //     options.callback()
            // }
          })
    },
    logout:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGOUT,
            success:options.callback
        })
    },
    getuser:function(options){
        $.ajax({
            url:USER_PIC,
            success:options.callback
            
        })
    },
    dataget:function(options){
        $.ajax({
            url: USER_GET,
            success:options.callback
        })
    }
}