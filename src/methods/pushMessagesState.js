export default function (response, title = '更新成功') {
  if (response.data.success) {
    this.$store.dispatch('pushMessages', {
      style: 'success',
      title: title
    })
  } else {
    // 沒寫入訊息的情況 會被上方帶入更新成功
    if (title === '更新成功') {
      title = '更新失敗'
    }
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    this.$store.dispatch('pushMessages', {
      style: 'danger',
      title: title,
      content: message.join('、')
    })
  }
}
