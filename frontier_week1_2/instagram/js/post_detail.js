// js/post_detail.js

document.addEventListener('DOMContentLoaded', () => {
  // 1) idx 파라미터 가져오기
  const idx = parseInt(new URLSearchParams(window.location.search).get('idx'), 10);
  const posts = JSON.parse(localStorage.getItem('posts') || '[]');
  if (isNaN(idx) || idx < 0 || idx >= posts.length) {
    alert('잘못된 게시물입니다.');
    window.close();
    return;
  }
  const post = posts[idx];
  post.likes    = post.likes    || 0;
  post.liked    = post.liked    || false;
  post.comments = post.comments || [];

  // 2) 유저명
  const userName = document.querySelector('.user_name h2')?.textContent.trim() || '익명';

  // 3) DOM 참조
  const detailImg     = document.getElementById('detailImg');
  const detailCaption = document.getElementById('detailCaption');
  const likeBtn       = document.getElementById('likeBtn');
  const likeCount     = document.getElementById('likeCount');
  const editBtn       = document.getElementById('editBtn');
  const deleteBtn     = document.getElementById('deleteBtn');
  const commentList   = document.getElementById('commentList');
  const commentForm   = document.getElementById('commentForm');
  const commentInput  = document.getElementById('commentInput');

  // 4) 렌더 함수
  function render() {
    // 게시물 정보
    detailImg.src             = post.imageURL;
    detailCaption.textContent = post.caption;
    likeCount.textContent     = post.likes;
    likeBtn.textContent       = (post.liked ? '♥' : '♡') + ' 좋아요';

    // 댓글 목록
    commentList.innerHTML = '';
    post.comments.forEach((c, i) => {
      const li = document.createElement('li');
      // **여기 추가: 세로 정렬**
      li.style.display       = 'flex';
      li.style.flexDirection = 'column';
      li.style.alignItems    = 'flex-start';
      li.style.padding       = '0.5rem 0';
      li.style.borderBottom  = '1px solid #eee';

      // ① 댓글 텍스트
      const txt = document.createElement('div');
      txt.className = 'cmt-text';
      txt.innerHTML = `<strong>${c.author}</strong> ${c.text}`;
      li.append(txt);

      // ② 댓글 좋아요(하트)
      const heartWr = document.createElement('div');
      heartWr.className = 'cmt-heart';
      heartWr.style.marginBottom = '0.5rem';
      const btnLike = document.createElement('button');
      btnLike.className = 'btn like';
      btnLike.textContent = c.liked ? '♥' : '♡';
      btnLike.style.color = c.liked ? '#e0245e' : '#000';
      btnLike.addEventListener('click', () => {
        c.liked = !c.liked;
        posts[idx] = post;
        localStorage.setItem('posts', JSON.stringify(posts));
        render();
      });
      heartWr.append(btnLike);
      li.append(heartWr);

      // ③ 수정·삭제
      const actWr = document.createElement('div');
      actWr.className = 'cmt-actions';
      actWr.style.display = 'flex';
      actWr.style.gap = '0.5rem';

      const btnEdit = document.createElement('button');
      btnEdit.className = 'btn edit';
      btnEdit.textContent = '수정';
      btnEdit.style.color = '#09c';
      btnEdit.addEventListener('click', () => {
        const nv = prompt('댓글을 수정하세요.', c.text);
        if (nv !== null) {
          c.text = nv;
          posts[idx] = post;
          localStorage.setItem('posts', JSON.stringify(posts));
          render();
        }
      });

      const btnDel = document.createElement('button');
      btnDel.className = 'btn delete';
      btnDel.textContent = '삭제';
      btnDel.style.color = '#c00';
      btnDel.addEventListener('click', () => {
        if (confirm('댓글을 삭제하시겠습니까?')) {
          post.comments.splice(i, 1);
          posts[idx] = post;
          localStorage.setItem('posts', JSON.stringify(posts));
          render();
        }
      });

      actWr.append(btnEdit, btnDel);
      li.append(actWr);

      commentList.appendChild(li);
    });
  }

  // 5) 초기 렌더
  render();

  // 게시물 좋아요
  likeBtn.addEventListener('click', () => {
    post.liked = !post.liked;
    post.likes += post.liked ? 1 : -1;
    posts[idx] = post;
    localStorage.setItem('posts', JSON.stringify(posts));
    render();
  });

  // 게시물 수정
  editBtn.addEventListener('click', () => {
    const nv = prompt('캡션을 수정하세요.', post.caption);
    if (nv !== null) {
      post.caption = nv;
      posts[idx] = post;
      localStorage.setItem('posts', JSON.stringify(posts));
      render();
    }
  });

  // 게시물 삭제
  deleteBtn.addEventListener('click', () => {
    if (confirm('게시물을 삭제하시겠습니까?')) {
      posts.splice(idx, 1);
      localStorage.setItem('posts', JSON.stringify(posts));
      alert('삭제되었습니다.');
      window.close();
    }
  });

  // 댓글 등록
  commentForm.addEventListener('submit', e => {
    e.preventDefault();
    const txt = commentInput.value.trim();
    if (!txt) return;
    post.comments.push({ author: userName, text: txt, liked: false });
    posts[idx] = post;
    localStorage.setItem('posts', JSON.stringify(posts));
    commentInput.value = '';
    render();
  });
});
