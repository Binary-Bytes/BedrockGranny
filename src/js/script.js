// Navbar Stuff {

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((item) => item.addEventListener('click', activeLink));

// }
// ---------------------------------------
// Animation Stuff {

const navbar = document.querySelector('.navigation');

navbar.addEventListener('animationend', () => {
    navbar.classList.remove('animate__zoomInUp');
    navbar.classList.add('animate__tada');
});

// }
// ---------------------------------------
// Main Body {

const homeBTN = document.getElementById('homeBTN');
const aboutMeBTN = document.getElementById('aboutBTN');
const profilesBTN = document.getElementById('profilesBTN');
const gamingBTN = document.getElementById('gamingBTN');
const contactMeBTN = document.getElementById('contactBTN');

let topText = document.querySelector('.topText');
let bottomText = document.querySelector('.bottomText');

const banner = document.querySelector('.banner');

homeBTN.addEventListener('click', function() {
    banner.classList.add('animate__animated');
    banner.classList.add('animate__zoomOutLeft');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__zoomOutLeft');

        topText.innerHTML = 'Meet Me, <span class="blurple">BedrockGranny</span>';
        bottomText.innerHTML = 'I\'m a Full Stack Web, App, Game, Discord Bot Developer & Kind of Gamer';

        banner.classList.add('animate__zoomInRight');
    });
});

aboutMeBTN.addEventListener('click', function() {
    banner.classList.add('animate__animated');
    banner.classList.add('animate__zoomOutLeft');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__zoomOutLeft');

        topText.innerHTML = '<span class="blurple">About Me</span>';
        bottomText.innerHTML = 'Hi, I\'m a Full Stack Web, App, Game, Discord Bot Developer & Kind of Gamer. I Am <span class="blurple">**</span> Years Old. My Hobbies Are Programming, Playing Minecraft Bedrock, Cycling and Skating. I Love Playing Minecraft Bedrock Edition. You Can View All My Projects on <a href="https://github.com/Binary-Bytes"><span class="blurple">Github</span></a>.';

        banner.classList.add('animate__zoomInRight');
    });
});

profilesBTN.addEventListener('click', function() {
    banner.classList.add('animate__animated');
    banner.classList.add('animate__zoomOutLeft');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__zoomOutLeft');

        topText.innerHTML = '<span class="blurple">My Profiles</span>';
        bottomText.innerHTML = 'My Profile Names On Different Platforms :<br><br><i class="fab fa-github"></i> <span class="blurple">Github</span> : Binary-Bytes<br><i class="fab fa-xbox"></i> <span class="blurple">Xbox</span> : BedrockGranny<br><i class="fab fa-discord"></i> <span class="blurple">Discord</span> : BedrockGranny#1000<br><i class="fab fa-youtube"></i> <span class="blurple">Youtube</span> : Binary Bytes<br><i class="fas fa-envelope"></i> <span class="blurple">Gmail</span> : bedrockgranny@gmail.com';

        banner.classList.add('animate__zoomInRight');
    });
});

gamingBTN.addEventListener('click', function() {
    banner.classList.add('animate__animated');
    banner.classList.add('animate__zoomOutLeft');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__zoomOutLeft');

        topText.innerHTML = '<span class="blurple">Gaming</span>';
        bottomText.innerHTML = 'I Usually Only Play <span class="blurple">Minecraft Bedrock Edition</span> But Sometimes I Like To Play <span class="blurple">Karlson</span>. If You Want To Play Minecraft With Me, My Gamertag Is <span class="blurple">BedrockGranny</span> & I Love To Play With People. I\'m Pretty Good At <span class="blurple">PVP</span> & <span class="blurple">Game Progression</span> And I\'m Best At Games : <span class="blurple">Bridges</span>, <span class="blurple">Skywars</span>, <span class="blurple">Capture The Flag (CTF)</span>. I Mainly Play On <span class="blurple">Cubecraft</span>, <span class="blurple">HIVE</span> & <span class="blurple">Ectary</span> Servers. If You Ever Want To Play With Me, DM Me on Discord.';

        banner.classList.add('animate__zoomInRight');
    });
});

contactMeBTN.addEventListener('click', function() {
    banner.classList.add('animate__animated');
    banner.classList.add('animate__zoomOutLeft');

    banner.addEventListener('animationend', () => {
        banner.classList.remove('animate__zoomOutLeft');

        topText.innerHTML = '<span class="blurple">Contact Me</span>';
        bottomText.innerHTML = 'You Can Contact Me Using The Below Methods However I Prefer Using <span class="blurple">Discord</span> As I Am The Most Active There.<br><br><span class="blurple">Gmail</span> : bedrockgranny@gmail.com <span class="blurple">(I May Take Time To Respond)</span><br><span class="blurple">Discord</span> : BedrockGranny#1000<br><br>You Should Also Join My Discord Server. I Host A Lot Of Giveaways & Events And Overall We Are A Nice & Family-Friendly Community :<br><br><iframe src="https://discord.com/widget?id=902796938217402390&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>';

        banner.classList.add('animate__zoomInRight');
    });
});

// }