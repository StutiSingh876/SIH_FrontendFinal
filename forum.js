document.addEventListener('DOMContentLoaded', () => {
    const newDiscussionBtn = document.getElementById('new-discussion-btn');

    if (newDiscussionBtn) {
        newDiscussionBtn.addEventListener('click', () => {
            alert('The feature to start a new discussion is coming soon!');
            // In a real application, this would open a new page or a modal form.
        });
    }
});