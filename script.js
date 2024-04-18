
document.addEventListener('DOMContentLoaded', function() {
    // FAQ 항목들에 대한 이벤트 리스너 추가
    const faqItems = document.querySelectorAll('.faq-item h3');
  
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        // 클릭된 항목의 다음 요소 (즉, 답변 부분)의 표시 여부를 토글
        const answer = item.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      });
    });
  });
  
  
  