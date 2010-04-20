exports.wsgi = {
    host : null,
    port : 80,
    root : 'index.htm',
    url  : [
        [/^\/rad*$/, '/rad.js'],
        [/^\/[a-z]+$/, '/controller.js'],
        [/^\/$/, '/controller.js'],
        [/^\/.*?/, '/static/']
    ]
};

exports.sidekick = {
    host  : null, // Leave 'null' to listen on all hosts.
    port  : 8010, // access your server from this port.
    fetch : {     // point to your web server.
        host : 'localhost',
        port : 80
    }
};

exports.seeker = {
    host    : null,
    port    : 8002,
    delay   : 10,
    wait    : 1800,
    touch   : true, // allow file touch to push updates.
    browser : { // !!! features don't exist yet.
        navigate : false, // keep all browsers on the same page.
        scroll   : {
            lkp   : 'yes', // scroll to last know position for each page.
            sync  : 'no',  // keep multiple browser scroll positions in sync.
            speed : 300    // delay sync updates and last update in ms.
        },
    },
    ignore  : [
        /git$/,
        /svn$/,
        /cvs$/,
        /swp$/,
        /~$/
    ]
};
