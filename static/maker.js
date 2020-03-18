const addThis = () => {
  let content = document.getElementById('content').value
  let content_type = document.getElementById('content_type').value
  let returnValue = makeHTML( content, content_type)
  document.getElementById('myPage').value += returnValue
  document.getElementById('content').value = ''

}

const makeHTML = (content, type) => {
  let toReturn = ''
  switch (type) {
    case 'paragraph':
      toReturn = '<p>' + content + '</p>'
      break;
    case 'console':
      toReturn = "<div class='consoleText'>" + content + "</div>"
      break;
    case 'bordered':
      toReturn = "<div class='bordered'>" + content + "</div>"
      break;
    default:
      toReturn = content
  }
  return toReturn
}