let yesBtnSize = 1;

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    
    // Di chuyển nút "Không" đến vị trí ngẫu nhiên
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    
    noBtn.style.position = 'absolute';
    noBtn.style.left = Math.random() * maxX + 'px';
    noBtn.style.top = Math.random() * maxY + 'px';
    
    // Tăng kích thước nút "Có"
    yesBtnSize += yesBtnSize * 0.5;
    yesBtn.style.transform = `scale(${yesBtnSize})`;
    
}
function createHeartAnimation() {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 30 + 20 + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => heart.remove(), 3000);
}

function showLove() {
    document.querySelector('.buttons').style.display = 'none';
    document.getElementById('loveMessage').style.display = 'block';
    
    // Tạo hiệu ứng tim bay
    for(let i = 0; i < 50; i++) {
        setTimeout(() => createHeartAnimation(), i * 100);
    }
}