window.addEventListener('DOMContentLoaded', () => {
  // =============== 피드 & 상세 모달 로직 ===============
  const userName = document.querySelector('.user_name h2')?.textContent.trim() || '익명';
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  const postingPage = document.querySelector('.posting_page');

  // 상세 모달 요소
  const modal            = document.getElementById('postModal');
  const modalContent     = modal.querySelector('.modal-content');
  const closeBtn         = modal.querySelector('.modal-close');
  const modalImg         = document.getElementById('modalImg');
  const modalAuthor      = document.getElementById('modalAuthor');
  const modalCaption     = document.getElementById('modalCaption');
  const modalLikeBtn     = document.getElementById('modalLikeBtn');
  const modalLikeCount   = document.getElementById('modalLikeCount');
  const modalCommentList = document.getElementById('modalCommentList');
  const modalCommentForm = document.getElementById('modalCommentForm');
  const modalCommentInput= document.getElementById('modalCommentInput');

  if (!modal) return console.error('postModal이 없습니다.');

  let currentIndex = 0;

  function renderComments(post) {
    modalCommentList.innerHTML = '';
    post.comments.forEach((cmt, i) => {
      const li = document.createElement('li');
      const text = document.createElement('span');
      text.innerHTML = `<strong>${cmt.author}</strong> ${cmt.text}`;
      const grp = document.createElement('div');

      const bLike = document.createElement('button');
      bLike.textContent = cmt.liked ? '♥' : '♡';
      Object.assign(bLike.style, {background:'none',border:'none',cursor:'pointer',color:cmt.liked?'#e0245e':'#000'});
      bLike.addEventListener('click', () => {
        cmt.liked = !cmt.liked;
        posts[currentIndex] = post;
        localStorage.setItem('posts', JSON.stringify(posts));
        showModal(currentIndex);
      });

      const bEdit = document.createElement('button');
      bEdit.textContent = '수정';
      Object.assign(bEdit.style, {background:'none',border:'none',cursor:'pointer',color:'#09c'});
      bEdit.addEventListener('click', () => {
        const nv = prompt('댓글을 수정하세요.', cmt.text);
        if (nv !== null) {
          cmt.text = nv;
          posts[currentIndex] = post;
          localStorage.setItem('posts', JSON.stringify(posts));
          showModal(currentIndex);
        }
      });

      const bDel = document.createElement('button');
      bDel.textContent = '삭제';
      Object.assign(bDel.style, {background:'none',border:'none',cursor:'pointer',color:'#c00'});
      bDel.addEventListener('click', () => {
        if (confirm('댓글을 삭제하시겠습니까?')) {
          post.comments.splice(i,1);
          posts[currentIndex] = post;
          localStorage.setItem('posts', JSON.stringify(posts));
          showModal(currentIndex);
        }
      });

      grp.append(bLike, bEdit, bDel);
      li.append(text, grp);
      modalCommentList.appendChild(li);
    });
  }

  function showModal(idx) {
    const post = posts[idx];
    currentIndex = idx;
    post.likes    = post.likes    || 0;
    post.liked    = post.liked    || false;
    post.comments = post.comments || [];
    post.author   = post.author   || userName;

    modalImg.src              = post.imageURL;
    modalAuthor.textContent   = post.author;
    modalCaption.textContent  = post.caption;
    modalLikeBtn.textContent  = post.liked ? '♥' : '♡';
    modalLikeCount.textContent= `좋아요 ${post.likes}개`;

    modalLikeBtn.onclick = () => {
      post.liked = !post.liked;
      post.likes += post.liked ? 1 : -1;
      posts[idx] = post;
      localStorage.setItem('posts', JSON.stringify(posts));
      showModal(idx);
    };

    modalCommentForm.onsubmit = e => {
      e.preventDefault();
      const txt = modalCommentInput.value.trim();
      if (!txt) return;
      post.comments.push({ author:userName, text:txt, liked:false });
      posts[idx] = post;
      localStorage.setItem('posts', JSON.stringify(posts));
      modalCommentInput.value = '';
      renderComments(post);
    };

    renderComments(post);
    modal.style.display = 'flex';
  }

  closeBtn.onclick = () => modal.style.display = 'none';
  modal.onclick = e => { if (e.target === modal) modal.style.display = 'none'; };

  const prev = document.createElement('div'), next = document.createElement('div');
  prev.className = 'modal-nav modal-prev'; prev.textContent = '<';
  next.className = 'modal-nav modal-next'; next.textContent = '>';
  modalContent.append(prev, next);
  prev.onclick = () => showModal((currentIndex - 1 + posts.length) % posts.length);
  next.onclick = () => showModal((currentIndex + 1) % posts.length);

  posts.slice().reverse().forEach((p, revIdx) => {
    const idx = posts.length - 1 - revIdx;
    const box = document.createElement('div');
    box.className = 'posting_box';
    box.innerHTML = `<img class="posting_img" src="${p.imageURL}" alt="">`;
    box.onclick = () => showModal(idx);
    postingPage.prepend(box);
  });

  // =============== 글쓰기 모달 로직 ===============
  const writeModal = document.getElementById('writeModal');
  const openWrite  = document.getElementById('openWrite');
  const writeClose = document.getElementById('writeClose');
  const fileInput  = document.getElementById('writeImageInput');
  const previewImg = document.getElementById('writePreview');
  const captionIn  = document.getElementById('writeCaption');
  const shareBtn   = document.getElementById('shareBtn');

  if (writeModal && openWrite && writeClose) {
    // 열기
    openWrite.addEventListener('click', e => {
      e.preventDefault();
      writeModal.style.display = 'flex';
    });
    // 닫기
    writeClose.addEventListener('click', () => writeModal.style.display = 'none');
    writeModal.addEventListener('click', e => {
      if (e.target === writeModal) writeModal.style.display = 'none';
    });

    // 이미지 선택
    fileInput.addEventListener('change', e => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = evt => {
        previewImg.src           = evt.target.result;
        previewImg.style.display = 'block';
        shareBtn.disabled        = false;
        shareBtn.classList.add('enabled');
      };
      reader.readAsDataURL(file);
    });

    // 공유하기
    shareBtn.addEventListener('click', () => {
      if (shareBtn.disabled) return;
      const arr = JSON.parse(localStorage.getItem('posts') || '[]');
      arr.unshift({
        imageURL: previewImg.src,
        caption:  captionIn.value.trim(),
        likes:    0,
        comments: []
      });
      localStorage.setItem('posts', JSON.stringify(arr));
      writeModal.style.display = 'none';
      window.location.href = 'user_page.html';
    });
  }
});
