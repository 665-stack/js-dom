console.log('hello from js file');

const blogs = document.getElementsByTagName('p');
console.log(blogs)
for (const blog of blogs) {
    console.log(blog)
    blog.style.backgroundColor = 'steelblue';
    blog.style.color = 'white'
    blog.style.borderRadius = '10px';
    blog.style.padding = '5px'

}
const specialLorem = document.getElementById('special-blog');
// specialLorem.innerText = 'This is special blog in my code.';
specialLorem.innerHTML = `
    <h4>Special inner Html</h4>
    <p> this is special because of thier code</p>
`
//akhane 5 number list item ta ke remove fela hoyce
const friends = document.getElementById('friends');
console.log(friends.children)
const fifth = friends.children[4];
console.log(fifth)
friends.removeChild(fifth);

//create element
const friend = document.createElement('li');
friend.innerText = 'friend - 11';
friends.appendChild(friend)
