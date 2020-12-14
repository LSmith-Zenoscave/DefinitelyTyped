import mailgun from 'mailgun.js';
const mg = mailgun.client({
    username: 'api',
    key: 'key-yourkeyhere',
});

mg.domains.create({ name: 'foobar.example.com' });
mg.domains.getTracking('foobar.example.com');
mg.domains.updateTracking('foobar.example.com', 'open', { active: true });
mg.domains.updateTracking('foobar.example.com', 'click', { active: true });
mg.domains.updateTracking('foobar.example.com', 'unsubscribe', {
    active: true,
    html_footer: '\n<br>\n<p><a href="%unsubscribe_url%">unsubscribe</a></p>\n',
    text_footer: '\n\nTo unsubscribe click: <%unsubscribe_url%>\n\n',
});
mg.domains.destroy('foobar.example.com');

mg.events.get('foobar.example.com', { page: 'mypageid' });

// mg.stats.getDomain('foobar.example.com', { event: ['delivered', 'accepted', 'failed', 'complained'] });
// mg.stats.getAccount('foobar.example.com', { event: ['delivered', 'accepted', 'failed', 'complained'] });

// mg.suppressions.list('foobar.example.com', 'bounces');
// mg.suppressions.list('foobar.example.com', 'unsubscribes');
// mg.suppressions.list('foobar.example.com', 'complaints');

// mg.suppressions.get('foobar.example.com', 'bounces', 'address@example.com');
// mg.suppressions.get('foobar.example.com', 'unsubscribes', 'address@example.com');
// mg.suppressions.get('foobar.example.com', 'complaints', 'address@example.com');

// mg.suppressions.create('foobar.example.com', 'bounces', [{ address: 'bob@example.com' }]);
// mg.suppressions.create('foobar.example.com', 'unsubscribes', [{ address: 'bob@example.com' }]);
// mg.suppressions.create('foobar.example.com', 'complaints', [{ address: 'bob@example.com' }]);

// mg.webhooks.list('foobar.example.com');
// mg.webhooks.get('foobar.example.com', 'open');
// mg.webhooks.create('foobar.example.com', 'open', 'http://requestb.in');
// mg.webhooks.get('foobar.example.com', 'open', 'http://requestb.in', true);
// mg.webhooks.update('foobar.example.com', 'open', 'http://requestb.in');
// mg.webhooks.update('foobar.example.com', 'open');

// mg.routes.list();
// mg.routes.get('562da483125730608a7d1719');
// mg.routes.create({
//     priority: 0,
//     description: 'sample',
//     expression: 'match_recipient(".*@example.org")',
//     action: ['forward("http://myhost.com/messages/")', 'stop()'],
// });

// mg.messages.create('sandbox-123.mailgun.org', {
//     from: 'Excited User <mailgun@sandbox-123.mailgun.org>',
//     to: ['test@example.com'],
//     subject: 'Hello',
//     text: 'Testing some Mailgun awesomness!',
//     html: '<h1>Testing some Mailgun awesomness!</h1>',
// });
