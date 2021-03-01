function solve() {
  const [postsSection, createPostSection, archivePostSection] = Array.from(document.querySelectorAll('.site-content section'))
  const archive = []

  document.querySelector('.site').addEventListener('click', (ev) => {
    ev.preventDefault()

    if (ev.target.tagName === 'BUTTON') {
      const button = ev.target.textContent;
      if (button === 'Create') {
        const [authorInput, titleInput, categoryInput] = createPostSection.querySelectorAll('input')
        const contentTextArea = document.getElementById('content')
        if (isValid(authorInput.value, titleInput.value,
          categoryInput.value, contentTextArea.value)) {
          createArticle(authorInput.value, titleInput.value,
            categoryInput.value, contentTextArea.value)

          authorInput.value = ''
          titleInput.value = ''
          categoryInput.value = ''
          contentTextArea.value = ''
        }

      } else if (button === 'Delete') {
        ev.target.parentNode.parentNode.parentNode.removeChild(ev.target.parentNode.parentNode)

      } else if (button === 'Archive') {
        const article = ev.target.parentNode.parentNode
        const title = article.querySelector('h1').textContent

        archiveArticles(title, article)
      }
    }
  })

  function createArticle(author, title, category, content) {
    const h1 = createElement('h1', title)
    const pCategory = createElement('p', 'Category: ', createElement('strong', category))
    const pAuthor = createElement('p', 'Creator: ', createElement('strong', author))
    const pContent = createElement('p', content)

    const btnDelete = createElement('button', 'Delete')
    btnDelete.className = 'btn delete'
    const btnArchive = createElement('button', 'Archive')
    btnArchive.className = 'btn archive'
    const divButtons = createElement('div', btnDelete, btnArchive)
    divButtons.className = 'buttons'

    const article = createElement('article', h1, pCategory, pAuthor, pContent, divButtons)
    postsSection.appendChild(article)
  }

  function archiveArticles(title, article) {
    const li = createElement('li', title)

    archive.push({li, title})

    article.parentNode.removeChild(article)

    const ol = archivePostSection.querySelector('ol')

    archive.sort((a, b) => a.title.localeCompare(b.title)).forEach(el => ol.appendChild(el.li))
  }

  function createElement(type, ...content) {
    const result = document.createElement(type)
    content.forEach(element => {
      if (typeof element === 'string') {
        const node = document.createTextNode(element)
        result.appendChild(node)
      } else {
        result.appendChild(element)
      }
    })
    return result
  }

  function isValid(author, title, category, content) {
    return author !== '' && title !== '' && category !== '' && content !== '';
  }
}