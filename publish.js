var emails = [
    'mitao666666@gmail.com'
];
var newestUrls = [
    'http://www.mtzx1.xyz/',
    'http://www.mtzx2.xyz/',
    'http://www.mtzx3.xyz/'
];
var otherUrls = [
    'https://mitao666666.github.io/mitao/index.html',
    'http://mitao666666.com/'
];
var foreverUrls = [
    'http://mitao666666.com/'
];
var notices = [
    '* 我们推荐电脑以及Andriod手机用户使用Chrome(谷歌)浏览器浏览本站，iPhone手机我们建议使用手机自带的Safria浏览器访问本站。',
    '* 为了防止域名劫持而无法访问，请设置手机和电脑的的DNS，我们推荐使用8.8.8.8和1.1.1.1。',
    '* 大陆地区用户我们建议您可以使用VPN和代理的方式来访问我们的永久地址。',
];

function createFieldElem(option) {
    var title = option.title;
    var items = option.items;
    var plainText = option.plainText;
    var classStr = option.classStr;
    var text = option.text;

    var fieldElem = document.createElement('div');
    var fieldClass = ['field', classStr].join(' ');
    fieldElem.setAttribute('class', fieldClass);

    var titleElem = document.createElement('h4');
    titleElem.setAttribute('class', 'title');
    titleElem.innerHTML = title;
    fieldElem.appendChild(titleElem);

    var ulElem = document.createElement('ul');
    var htmlStr = ''
    for (var i = 0; i < items.length; i++) {
        if (plainText) {
            htmlStr = htmlStr + '<li>' + items[i] + '</li>';
        } else {
            htmlStr = htmlStr + '<li><a href="' + items[i] + '" target="_blank">' + items[i] + '</a></li>';
        }
    }

    // For text
    if (text) {
        htmlStr = htmlStr + '<li class="text">' + text + '</li>';
    }

    ulElem.innerHTML = htmlStr;
    fieldElem.appendChild(ulElem);
    return fieldElem;
}

window.onload = function () {
    var mainElem = document.getElementById('main');
    // append logo
    var logoElem = document.createElement('div');
    logoElem.setAttribute('class', 'brand');
    logoElem.setAttribute('id', 'logo');
    logoElem.innerHTML = '<div class="brand" id="logo" style="float:  right;/* padding-right: 200px; */"><span class="flag" style="margin-right: 100;">返回</span> </div>qisev <span>.top</span><span class="flag">蜜桃在线</span>'
    mainElem.appendChild(logoElem);
    // newest urls
    var newestFieldElem = createFieldElem({title: '最新地址', items: newestUrls});
    mainElem.appendChild(newestFieldElem);

    // other urls
    var otherFieldElem = createFieldElem({title: '收藏地址发布页', items: otherUrls});
    mainElem.appendChild(otherFieldElem);

    // email
    var mailFieldElem = createFieldElem({title: '发送邮件获取', items: emails, plainText: true});
    mainElem.appendChild(mailFieldElem);

    // forever urls
    var foreverFieldElem = createFieldElem({title: '永久地址', items: foreverUrls});
    mainElem.appendChild(foreverFieldElem);

    // Description
    var noticeFieldElem = createFieldElem({title: '注意事项', items: notices, plainText: true, classStr: 'desc'});
    mainElem.appendChild(noticeFieldElem);
}
