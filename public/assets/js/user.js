$(function() {
  $('#userForm').on('submit',function(){
    // alert(1);
    var formData = $(this).serialize()
    console.log(formData);
    $.ajax({
      type:'post',
      url :'/users',
      data:formData,
      success:function() {
        location.reload()
      },
      error:function() {
        alert('登录失败')

      }
    })
    return false
  })
})