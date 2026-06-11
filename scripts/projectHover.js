const card = document.querySelectorAll('.card')

card.forEach(card => {
    const media = card.querySelector('.projectImg');
    const normalimgWidth = media.style.width;
    const normalimgHeight = media.style.height;
    const textContainer = card.querySelector('.textContainer');
    const normaltextHeight = textContainer.style.height;
    const originalcardzindex = card.style.zIndex;

        card.addEventListener('mouseover', () => {
            let width, height;

            if(media.tagName === 'VIDEO'){
                width = media.videoWidth;
                height = media.videoHeight;
            }
            if(media.tagName === 'IMG'){
                width = media.naturalWidth;
                height = media.naturalHeight;
            }

            const aspectRatio = width / height;
            width = 375 * aspectRatio;
            height = 375;

            textheight = textContainer.querySelector('h3').offsetHeight + textContainer.querySelector('p').offsetHeight + 20;

            card.style.width = width + 'px';
            card.style.height = height + textheight + 'px';
            media.style.width = width + 'px';
            media.style.height = height + 'px';

            textContainer.style.height = textheight + 'px';

            card.style.zIndex = '999';
        });
        card.addEventListener('mouseout', () => {

            card.style.width = normalimgWidth;
            card.style.height = normalimgHeight;
            media.style.width = normalimgWidth;
            media.style.height = normalimgHeight;

            textContainer.style.height = normaltextHeight;
            
            card.style.zIndex = originalcardzindex;
        });
});
