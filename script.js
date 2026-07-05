// 你可以在这里自由修改或增加想要循环播放的句子
const words = [
    "这里会分享一些有趣的东西...", 
    "技术、游戏、以及生活的零碎。", 
];

let i = 0;
let timer;

// 打字效果逻辑
function typingEffect() {
    let word = words[i].split("");
    var loopTyping = function() {
        if (word.length > 0) {
            document.getElementById('typewriter-text').innerHTML += word.shift();
        } else {
            setTimeout(deletingEffect, 2000); // 输完字后停留 2 秒
            return false;
        }
        timer = setTimeout(loopTyping, 150); // 打字速度（毫秒）
    };
    loopTyping();
}

// 删字效果逻辑
function deletingEffect() {
    let word = words[i].split("");
    var loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.getElementById('typewriter-text').innerHTML = word.join("");
        } else {
            if (words.length > (i + 1)) {
                i++;
            } else {
                i = 0;
            }
            setTimeout(typingEffect, 500); // 删完后停留 0.5 秒开始下一句
            return false;
        }
        timer = setTimeout(loopDeleting, 50); // 删字速度
    };
    loopDeleting();
}

// 当网页完全加载后，启动打字机特效
document.addEventListener('DOMContentLoaded', typingEffect);
