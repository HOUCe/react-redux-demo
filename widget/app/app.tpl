<div class="demo-app-mount-dom"></div>
{%script%}
require.async(['demo:widget/app/app.jsx'], function(app) {
    app.init({
        userInfo: '%json_encode($UserInfo)%',
        likedList: '%json_encode($likedList)%', 
        selectList: '%json_encode($selectList)%'
    })
});
{%/script%}