export function convertToSeconds(timeString) {
    let parts = timeString.split(':');
    if(parts.length != 2) {
        throw new Error("Invalid time format. Expected 'MM:SS'.");
    }
    let minutes = parseInt(parts[0], 10);
    let seconds = parseInt(parts[1], 10);

    return minutes * 60 + seconds;

}

