const videosList = [
    {
        "video": "images/Beauty.mp4",
        "title": "Happy Birthday to the reigning beauty queen of our hearts! 👑🎉💖"
    },
    {
        "video": "images/Birthday.mp4",
        "title": "Happy Birthday! 🎂🎈✨"
    },
    {
        "video": "images/BLog.mp4",
        "title": "When your bestie turns everyday life into a hilarious vlog! 😂🎥"
    },
    {
        "video": "images/Brain.mp4",
        "title": "Yeh kya hua, kaise hua? 🤣📹"
    },
    {
        "video": "images/Chai.mp4",
        "title": "Throwback to our jungle escapades—where every moment was an adventure and every laugh was priceless! 🌲😂 "
    },
    {
        "video": "images/Cook.mp4",
        "title": "Ankhoon mein teri ajab si aadaein hai, ki is chutiye ko bas video banana hi kaam hai! 😄📹"
    },
    {
        "video": "images/Cooking.mp4",
        "title": "While my bestie cooks up a storm, I’m here adding a sprinkle of comedy to our kitchen chaos! 🍳😂🎥"
    },
    {
        "video": "images/Dance.mp4",
        "title": "When your bestie’s dance moves are hotter than the summer sun! ☀️💃🔥"
    },
    {
        "video": "images/Last.mp4",
        "title": "Cheers to another year of laughter, memories, and endless friendship! 🎉✨"
    },
    {
        "video": "images/Memories.mp4",
        "title": "When the roast is on and the laughter is endless! 😂🔥"
    },
    {
        "video": "images/Miss.mp4",
        "title": "Chef mode: activated! 🍳👩‍🍳 My bestie’s cooking up something amazing!"
    },
    {
        "video": "images/Padhuka.mp4",
        "title": "Bestie’s in full-on bookworm mode—send snacks and silence! 😂📖"
    },
    {
        "video": "images/Pasandida.mp4",
        "title": "When your boyfriend’s photography skills match his love for you! 📸❤️"
    },
    {
        "video": "images/Phone.mp4",
        "title": "When your bestie’s phone is glued to her hand—because life’s just more fun with memes and texts! 😂📱"
    },
    {
        "video": "images/Pinkey.mp4",
        "title": "Caught my bestie and her best friend having a walk 😂😂"
    },
    {
        "video": "images/Smile.mp4",
        "title": "Sliding into fun while my bestie's laugh makes everything better! 😄🎢"
    },
    {
        "video": "images/Waiter.mp4",
        "title": "Bestie ne khana serve kiya aur humne ‘Maa ke haath ka khana’ ka experience enjoy kiya! 😆🍴"
    },
    {
        "video": "images/River.mp4",
        "title": "Fun aur dosti ki ultimate combo: riverside aur humari crazy antics! 😎🔥"
    },
    {
        "video": "images/Same.mp4",
        "title": "Portrait aur tum: Same style, same smile! 😁🖼️"
    },
    {
        "video": "images/Walk.mp4",
        "title": "Caught on camera: The epic struggle of synchronizing steps with your partner. 😂👫"
    },
    {
        "video": "images/SaurabhWalk.mp4",
        "title": "Phone ko ground pe rakh ke, aur yeh walk: Ek hi question hai, kaun karta hai yeh sab? 😂📱🤳"
    },
    {
        "video": "images/Sharmati.mp4",
        "title": "Face chhupane ki strategy, kyunki camera se bachne ka koi chance nahi! 😄📸"
    },
    {
        "video": "images/Sleeping.mp4",
        "title": "Sote hue bhi top karne ka plan hai! 😂🛌"
    },
    {
        "video": "images/Swing.mp4",
        "title": "Seesaw pe bestie ka weight aur hasi ka balance—ek hi taraf! 😜😄"
    }
]


const categories = [...new Set(videosList.map((item) => { return item }))]
document.getElementById('videosList').innerHTML = categories.map((item) => {
	var { video, title } = item;
	return (
		`<div class="list active">
		<video src=${video} class="list-video"></video>
		<h3 class="list-title">${title}</h3>
		</div>`
		)
}).join('')

let videoList = document.querySelectorAll('.video-list-container .list');
videoList.forEach(remove => { remove.classList.remove('active') });
videoList.forEach(vid => {
	vid.onclick = () => {
		videoList.forEach(remove => { remove.classList.remove('active') });
		vid.classList.add('active');
		let src = vid.querySelector('.list-video').src;
		let title = vid.querySelector('.list-title').innerHTML;
		document.querySelector('.main-video-container .main-video').src = src;
		document.querySelector('.main-video-container .main-video').play();
		document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
	};
});