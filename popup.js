const likeCommentMap = {
  "1269661": "You consistently demonstrate excellent teaching and make complex topics engaging.",
  "1269663": "Your teaching is clear and effective. I appreciate your effort.",
  "1269664": "The teaching is satisfactory, but there’s room for improvement in engagement.",
  "1269667": "The lessons need to be more engaging and structured.",
  "1269668": "The teaching was hard to follow and needs significant improvement."
};

const dislikeCommentMap = {
  "1269661": "Nothing to dislike — everything was excellent.",
  "1269663": "Occasionally the pace was fast, but overall very good.",
  "1269664": "Engagement could be improved.",
  "1269667": "Concepts were unclear and not explained well.",
  "1269668": "The teaching lacked clarity and organization."
};

document.addEventListener('DOMContentLoaded', () => {
  const optionSelect = document.getElementById('optionValue');
  const goodComment = document.getElementById('goodComment');
  const badComment = document.getElementById('badComment');

  // Set initial values
  const initVal = optionSelect.value;
  goodComment.value = likeCommentMap[initVal];
  badComment.value = dislikeCommentMap[initVal];

  optionSelect.addEventListener('change', () => {
    const selected = optionSelect.value;
    goodComment.value = likeCommentMap[selected];
    badComment.value = dislikeCommentMap[selected];
  });

  document.getElementById('fillForm').addEventListener('click', async () => {
    const selectedValue = optionSelect.value;
    const good = goodComment.value;
    const bad = badComment.value;

    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: fillFormOnPage,
      args: [selectedValue, good, bad]
    });
  });
});

function fillFormOnPage(optionValue, goodComment, badComment) {
  const selects = document.querySelectorAll('select[name^="answerValueId"]');
  selects.forEach(select => {
    const options = select.querySelectorAll('option');
    options.forEach(option => {
      option.selected = option.value === optionValue;
    });
    select.dispatchEvent(new Event('change', { bubbles: true }));
  });

  const likeField = document.getElementById('comment');
  const dislikeField = document.getElementById('negativeComment');

  if (likeField) likeField.value = goodComment;
  if (dislikeField) dislikeField.value = badComment;
}
