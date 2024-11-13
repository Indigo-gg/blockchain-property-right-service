const showTip = (that, option) => {
  const type = option.type || 'success'
  that.$notification[type]({
    message: option.title || '操作提示',
    description: option.text
  })
}

export default showTip
