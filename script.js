document.getElementById('yes').addEventListener('click', function() {
    // صفحه اول مخفی می‌شود و صفحه دوم نمایش داده می‌شود
    document.getElementById('home').style.display = 'none';
    document.getElementById('secondPage').style.display = 'block';
    
    // تغییر متن در صفحه دوم
    document.getElementById('noteContent').innerText = 'آریانا، نینی قشنگ چیکاش، این اولین ولنتاینیه که دیگه تنها نیستیم. من خوش شانس بودم که تونستم فرشته‌ای مثل تورو تو همچین روزی کنار خودم داشته باشم...';
});

document.getElementById('no').addEventListener('click', function() {
    alert('وااا غلط کردی تو مال خودمییی!');
});
