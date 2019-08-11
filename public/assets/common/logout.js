$(function () {
  var logout = $('#logout');
  logout.on('click', function () {
    var isConfirm = confirm('您确认退出码');
    if (isConfirm) {
      $.ajax({
        type: 'post',
        url: '/logout',
        success: function (responce) {
          location.href = 'login.html';
        },
        error:function() {
          alert('退出失败');

        }
      })
    }
  })
})
