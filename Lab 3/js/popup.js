const btn = document.getElementById("button__form")
btn.addEventListener('click', () => {
    // Swal.fire({
    //     position: 'center',
    //     icon: 'success',
    //     title: 'Спасибо за заявку!',
    //     showConfirmButton: false,
    //     timer: 2000}
    //   )
    Swal.fire({
      title: 'Наш менеджер бежит к телефону, чтобы вам перезвонить',
      width: 600,
      padding: '3em',
      color: '#fff',
      confirmButtonText: 'Хорошо',
      confirmButtonColor: '#CBC257',
      background: '#E7A540',
      backdrop: `
        rgba(255,198,24,0.2)
        url("https://sweetalert2.github.io/images/nyan-cat.gif")
        left top
        no-repeat
      `
    })
})