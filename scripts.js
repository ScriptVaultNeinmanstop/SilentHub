function copyText(id){
    const el = document.getElementById(id);
    if (!el) return;

    const text = el.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const notif = document.createElement('div');
        notif.innerText = "Copied!";
        notif.style.position = 'fixed';
        notif.style.top = '20px';
        notif.style.right = '20px';
        notif.style.background = '#a855f7';
        notif.style.color = 'black';
        notif.style.padding = '10px 18px';
        notif.style.borderRadius = '10px';
        notif.style.fontWeight = 'bold';
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.3s, transform 0.3s';
        document.body.appendChild(notif);

        requestAnimationFrame(() => {
            notif.style.opacity = '1';
            notif.style.transform = 'translateY(-10px)';
        });

        setTimeout(() => {
            notif.style.opacity = '0';
            notif.style.transform = 'translateY(-30px)';
            setTimeout(()=> document.body.removeChild(notif),300);
        },1000);
    }).catch(err => {
        alert("Failed to copy! " + err);
    });
}
