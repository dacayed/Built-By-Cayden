const card = document.querySelectorAll('.card')

card.forEach(card => {
    const media = card.querySelector('.projectImg');
    const normalimgWidth = media.style.width;
    const normalimgHeight = media.style.height;

        card.addEventListener('mouseover', () => {
            let width, height;
            const textContainer = card.querySelector('.textContainer');

            if(media.tagName === 'VIDEO'){
                width = media.videoWidth;
                height = media.videoHeight;
            }
            if(media.tagName === 'IMG'){
                width = media.naturalWidth;
                height = media.naturalHeight;
            }

            const aspectRatio = width / height;
            width = 500 * aspectRatio;
            height = 500;

            const textheight = textContainer.offsetHeight;

            card.style.width = width + 'px';
            card.style.height = height + textheight + 'px';
            media.style.width = width + 'px';
            media.style.height = height + 'px';
        });
        card.addEventListener('mouseout', () => {

            card.style.width = normalimgWidth;
            card.style.height = normalimgHeight;
            media.style.width = normalimgWidth;
            media.style.height = normalimgHeight;
        });
});
