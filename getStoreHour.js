const openingUTCHour = new Date( 1516255200 * 1000 );

function getUTCTime( date ) {
    return {
        hour: new Date( date ).getUTCHours( ),
        minutes: new Date( date ).getUTCMinutes( )
    }
}

function addHourOffset( time,  hourOffset = 0 ) {
    const offsettedHour = time + hourOffset;
    if ( offsettedHour >= 24 ) {
        return offsettedHour - 24;
    }
    if ( offsettedHour < 0 ) {
        return ( 24 + offsettedHour );
    }
    return offsettedHour;
}


function createTimeObject( date, hourOffset ) {
    const utcTime = getUTCTime( date );

    return timeObject = {
        hour: addHourOffset( utcTime.hour, 1 ),
        minutes: utcTime.minutes
    }
}

function formatTime( time ) {
    const hour = ( `0${ time.hour }` ).slice( -2 );
    const minute = ( `0${ time.minutes }` ).slice( -2 );
    return `${ hour }:${ minute }`;
}

const openingHour = formatTime( createTimeObject( openingUTCHour, 1 ) );

console.log( "openingHour ", openingHour );