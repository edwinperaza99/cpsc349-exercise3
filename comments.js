// https://jsonplaceholder.typicode.com/guide/

async function downloadPosts (page = 1) {
  const postsURL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`
  const response = await fetch(postsURL)
  const articles = await response.json()
  return articles
}

async function downloadComments (postId) {
  const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  const response = await fetch(commentsURL)
  const comments = await response.json()
  return comments
}

async function getUserName (userId) {
  const userURL = `https://jsonplaceholder.typicode.com/users/${userId}`
  const response = await fetch(userURL)
  const user = await response.json()
  return user.name
}

function getArticleId (comments) {
  const article = comments.previousElementSibling
  const data = article.dataset
  return data.postId
}

const details = document.getElementsByTagName('details')
for (const detail of details) {
  detail.addEventListener('toggle', async event => {
    if (detail.open) {
      const asides = detail.getElementsByTagName('aside')
      const commentsWereDownloaded = asides.length > 0
      if (!commentsWereDownloaded) {
        const articleId = getArticleId(detail)
        const comments = await downloadComments(articleId)
        console.log(comments)
      }
    }
  })
}

const posts = await downloadPosts()
console.log(posts)

// doing some testing
const art = document.createElem('article')
art.data-post-id = 
main.appendChild(art)

const head = document.createElem('h2')
head.textContent = 
art.appendChild(head)

const as = document.createElem ('aside')
const spa = document.createElem('span')
spa.textContent = 
as.textContent = by 
art.appendChild(as)

const para = document.createElem('p')
para.textContent = 
art.appendChild(para)

const det = document.createElem('details')
main.appendChild(det)
// attempting to add toggle attribute
det.toggleAttribute('hiden')

const sum = document.createElem('summary')
sum.textContent = "See what our readers had to say..."
det.appendChild(sum)

const sect = document.createElem('section')
det.appendChild(sect)

const headsect = document.createElem('header')
det.appendChild(headsect)

const header3 = document.createElem('h3')
header3.textContent = 
headset.appendChild(header3)

// const asides = documet.createElem('aside')
// const para1 = document.createElem('p')
// asides.appendChild(para1)
// const para2 = document.createElem('p')
// asides.appendChild(para2)
