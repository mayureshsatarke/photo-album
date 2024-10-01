function openModal(imageId) {
    var modal = document.getElementById('photoModal');
    var modalImg = document.getElementById('modalImage');
    var img = document.querySelector(`.photo-item img[src*="${imageId}"]`);
    modal.style.display = 'flex';
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById('photoModal');
    modal.style.display = 'none';
}
