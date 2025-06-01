// js/user_write.js
document.addEventListener('DOMContentLoaded', () => {
  const backBtn      = document.getElementById('backBtn');
  const shareBtn     = document.getElementById('writeShareBtn');
  const imageInput   = document.getElementById('imageInput');
  const previewImg   = document.getElementById('preview');
  const captionInput = document.getElementById('caption');

  // 뒤로 가기
  backBtn.addEventListener('click', () => {
    window.location.href = 'user_page.html';
  });

  // 이미지 선택 → 미리보기 + 공유 활성화
  imageInput.addEventListener('change', () => {
    const file = imageInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = e => {
      previewImg.src           = e.target.result;
      previewImg.style.display = 'block';
      shareBtn.disabled        = false;
      shareBtn.classList.add('enabled');
    };
    reader.readAsDataURL(file);
  });

  // 공유하기 클릭
  shareBtn.addEventListener('click', () => {
    if (shareBtn.disabled) return;

    // 기존 posts 배열 로드
    const posts = JSON.parse(localStorage.getItem('posts') || '[]');

    // 새 포스트 추가
    posts.unshift({
      imageURL: previewImg.src,
      caption:  captionInput.value.trim(),
      likes:    0,
      comments: []
    });

    // 저장
    localStorage.setItem('posts', JSON.stringify(posts));

    // 프로필 페이지로 이동
    window.location.href = 'user_page.html';
  });
});
