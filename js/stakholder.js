document.addEventListener("DOMContentLoaded", getWebhook());

function getWebhook() {
    const url = 'http://localhost:5678/webhook/webhook-test';
    fetch(url)
        .then(function (response) { return response.text(); })
        .then(function (text) {
            showCounter(text)

        })
        .catch(function (err) {
            document.getElementById('counter').textContent = 'Error: ';
        });
};

setInterval(getWebhook, 2000);

function showCounter(count) {
    if (count) {
        document.getElementById('board-img').src = '../assets/icons/create-request.png';
        document.getElementById('counter-text-mobile').classList.remove('warning');
        document.getElementById('counter-text').classList.remove('warning');
        document.getElementById('counter').textContent = count;
        document.getElementById('counter-mobile').textContent = count;
        document.getElementById('heading').textContent = 'Easily create a ticket by sending an email — no extra steps needed.';
        document.getElementById('desc-text').textContent = `On this platform, you can submit your feature requests via email.
                        Our AI
                        system will automatically
                        generate a ticket with a deadline and priority level.
                        A total of 10 requests can be created per day. After this limit, emails can still be sent, but
                        they
                        will
                        be manually reviewed by our team instead of generating AI tickets.`;
    } else {
        document.getElementById('board-img').src = '../assets/icons/create-request.png';
        document.getElementById('counter-text-mobile').classList.remove('warning');
        document.getElementById('counter-text').classList.remove('warning');
        document.getElementById('counter').textContent = '0';
        document.getElementById('counter-mobile').textContent = '0';
        document.getElementById('heading').textContent = 'Easily create a ticket by sending an email — no extra steps needed.';
        document.getElementById('desc-text').textContent = `On this platform, you can submit your feature requests via email.
                        Our AI
                        system will automatically
                        generate a ticket with a deadline and priority level.
                        A total of 10 requests can be created per day. After this limit, emails can still be sent, but
                        they
                        will
                        be manually reviewed by our team instead of generating AI tickets.`;
    };
    if (count >= 10) {
        document.getElementById('counter').textContent = '10';
        document.getElementById('board-img').src = '../assets/icons/limit-request.png';
        document.getElementById('counter-mobile').textContent = '10';
        document.getElementById('counter-text').classList.add('warning');
        document.getElementById('counter-text-mobile').classList.add('warning');
        document.getElementById('heading').textContent = 'The daily 10-request limit has been reached!';
        document.getElementById('desc-text').textContent = 'Need more? No worries — you can still send emails, but our team will review them manually instead of using AI to create tickets.';
    };
};