interface Streamer {
    userID: string;
    displayName: string;
    picture?: string;
    score: number;
}

// Function to simulate random score updates
function updateScores(streamers: Streamer[]): Streamer[] {
    return streamers.map((streamer) => ({
        ...streamer,
        score: streamer.score + Math.floor(Math.random() * 10),
    }));
}

export {
    updateScores
}