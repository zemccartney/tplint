const cp = require('child_process');

// TODO What are possible args?
// TODO Accept more args to lint
// TODO Pass args input to tplint down to
const lint = cp.spawn('npm', ['run', 'lint']);

// TODO Necessary?
process.stdout.setEncoding('utf8');

// TODO Actually do something smart here?
lint.on('error', (e) => {
    console.log('BLEW UP', e);
});

lint.stdout.on('data', (chunk) => {
    process.stdout.write(chunk)
});

lint.on('close', (exitCode) => {

    if (exitCode > 0) {
        // WE NEED TO FORMAT RESULTS
        // TODO WHY DOES FORMATTING DISAPPEAR?
        // TODO Just return results as if you ran eslint directly
    }

    console.log(TOPPY_APPROVED);
});

//https://www.kirupa.com/html5/emoji.htm
//https://unicode.org/emoji/charts/emoji-list.html
const tophat = String.fromCodePoint(0x1F3A9);
const HAT_BAND = '\x1b[43m            \x1b[0m';

const TOPPY_APPROVED =
`
      🎩🎩🎩🎩🎩🎩
      🎩🎩🎩🎩🎩🎩
      🎩🎩🎩🎩🎩🎩
      🎩🎩🎩🎩🎩🎩
      🎩🎩🎩🎩🎩🎩
      ${HAT_BAND}
    🎩🎩🎩🎩🎩🎩🎩🎩
🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔🔔
That code is TP-GREAT!!!!
`;

/**
TODOS
1. packageify (do the fuck you want license)
2. set as bin
3. ADD TOP HAT AND FLAVOR TEXT
4. Clean up a bit, try to figure out formatting
5. publish
6. test in MBM
**/

/**
https://scotch.io/tutorials/build-an-interactive-command-line-application-with-nodejs
https://developer.atlassian.com/blog/2015/11/scripting-with-node/
https://gist.github.com/XVilka/8346728
https://flaviocopes.com/javascript-unicode/
http://2ality.com/2018/05/child-process-streams.html
https://shapeshed.com/command-line-utilities-with-nodejs/
https://medium.freecodecamp.org/node-js-child-processes-everything-you-need-to-know-e69498fe970a
https://github.com/nodejs/node/issues/3675
https://medium.freecodecamp.org/understanding-node-js-event-driven-architecture-223292fcbc2d
https://medium.freecodecamp.org/node-js-streams-everything-you-need-to-know-c9141306be93
http://thecodebarbarian.com/3-neat-tricks-with-npm-run
**/
