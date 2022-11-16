// https://jsonplaceholder.typicode.com/guide/

async function downloadPosts(page = 1) {
	const postsURL = `https://jsonplaceholder.typicode.com/posts?_page=${page}`;
	const response = await fetch(postsURL);
	const articles = await response.json();
	return articles;
}

async function downloadComments(postId) {
	const commentsURL = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;
	const response = await fetch(commentsURL);
	const comments = await response.json();
	return comments;
}

async function getUserName(userId) {
	const userURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
	const response = await fetch(userURL);
	const user = await response.json();
	return user.name;
}

function getArticleId(comments) {
	const article = comments.previousElementSibling;
	const data = article.dataset;
	return data.postId;
}

const details = document.getElementsByTagName("details");
for (const detail of details) {
	detail.addEventListener("toggle", async (event) => {
		if (detail.open) {
			const asides = detail.getElementsByTagName("aside");
			const commentsWereDownloaded = asides.length > 0;
			if (!commentsWereDownloaded) {
				const articleId = getArticleId(detail);
				const comments = await downloadComments(articleId);
				console.log(comments);
			}
		}
	});
}

const posts = await downloadPosts();
console.log(posts);

// function to replace new lines with br
function newLine(para) {
	para = para.replace(/(?:\n)/g, "<br>");
	return para;
}

// actual code
async function fillElements(obj) {
	const objects = obj;
	for (const objective of objects) {
		const myMain = document.querySelector("main");
		const art = document.createElement("article");
		art.setAttribute("data-post-id", objective.id);
		myMain.appendChild(art);
		const myH2 = document.createElement("h2");
		myH2.textContent = objective.title;
		art.appendChild(myH2);
		const myAside = document.createElement("aside");
		// add span for the author name
		const mySpan = document.createElement("span");
		mySpan.setAttribute("class", "author");
		mySpan.textContent = await getUserName(objective.userId);
		myAside.textContent = `by `;
		myAside.appendChild(mySpan);
		art.appendChild(myAside);
		// create paragraph
		const myPara = document.createElement("p");
		let myBody = objective.body;
		myPara.innerHTML = newLine(myBody);
		art.appendChild(myPara);
		// add detail section
		const det = document.createElement("details");
		myMain.appendChild(det);
		const mySum = document.createElement("summary");
		mySum.textContent = "See what our readers had to say...";
		det.appendChild(mySum);
		const mySec = document.createElement("section");
		det.appendChild(mySec);
		const myHeader = document.createElement("header");
		mySec.appendChild(myHeader);
		const myH3 = document.createElement("h3");
		myH3.textContent = "Comments";
		myHeader.appendChild(myH3);

		// add event listener
		det.addEventListener("toggle", async (event) => {
			if (det.open) {
				const asides = det.getElementsByTagName("aside");
				const commentsWereDownloaded = asides.length > 0;
				if (!commentsWereDownloaded) {
					const articleId = getArticleId(det);
					const comments = await downloadComments(articleId);
					console.log(comments);
				}
			}
		});
	}
}
fillElements(posts);
