
module.exports = async (body, callback) => {
    const {WebClient} = require('@slack/client');
    const web = new WebClient( process.env.SLACK_TOKEN );

    const channel = body.event.channel;

    if ( body.event.type === 'member_left_channel' ) {
        await web.chat.postMessage( {
           channel,
           text: 'And now his watch is ended...',
        } );
        callback( null, {statusCode: 200, body: {}, data: {}} );
    } else if ( body.event.type === 'team_join') {
        await web.chat.postMessage({
            channel: 'C3U613NSV',
            text: 'A new foe has appeared!',
         });
         callback(null, {statusCode: 200, body: {}, data: {}} );
    }
};
