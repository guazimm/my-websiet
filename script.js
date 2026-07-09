
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let blobs = [{x: 100, y: 100, r: 200, color: '#3b82f6'}, {x: 400, y: 300, r: 300, color: '#8b5cf6'}];

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.filter = 'blur(80px)'; // 这是产生“液态融合”效果的核心

    blobs.forEach(b => {
        b.x += Math.sin(Date.now() / 2000) * 2;
        b.y += Math.cos(Date.now() / 2000) * 2;
        ctx.fillStyle = b.color;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
    });

    requestAnimationFrame(animate);
}

animate();
