var article={
    article_search:function(options){
        $.ajax({
            url: ARTICLE_SEARCH,
            success: options.callback
        })
    },
    article_add:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_ADD,
            data: {
                name: name1,
                slug: name2
            },
            success: options.callback
        })
    },
    article_edlt:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_EDIT,
            data: options.data,
            success:options.callback
        })
    },
    article_del:function(options){
        $.ajax({
            type: 'post',
            url: ARTICLE_DEL,
            data: options.data,
            success: options.callback
        })
    },
    article_xuan:function(options){
        $.ajax({
            url:  ARTICLE_XUAN,
            data:options.data,
            success: options.callback
        })
    },
    article_delete:function(options){
        $.ajax({
            url: ARTICLE_DELETE,
            data:options.data,
            success:options.callback
        })
    }
}