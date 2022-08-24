document.getElementById('btn-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend');
    for (const friend of friends) {
        friend.style.backgroundColor = "lightblue";
        // friend.style.padding = "20px";
    }
})

document.getElementById('center-third').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center';
})

document.getElementById('add-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');
    friend.innerHTML = `
    <h3 class="friend-name">New Friend</h3>
    <p>Added new Friend</p>
    `;
    friendContainer.appendChild(friend);

})