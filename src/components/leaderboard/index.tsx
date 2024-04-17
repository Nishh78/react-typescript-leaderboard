import React, { forwardRef, useEffect, useState } from 'react';
import { userData } from '../../mockData';
import AnimateRows from '../animateRows';
import { updateScores } from '../../helpers/shuffleArray';
import { getAvatarString } from '../../helpers/stringAvatar';
import styles from './styles'

const {
    Leaderboard,
    LeaderboardStreamerContainer,
    Streamer,
    StreamerName,
    StreamerPicture,
    Avatar,
    StreamerScore
} = styles

interface IStreamerProp {
    userID: string;
    displayName: string;
    picture?: string;
    score: number;
}

const StreamerLayoout = forwardRef<HTMLDivElement, IStreamerProp>(({ userID, displayName, picture, score }, ref) => (
    <Streamer ref={ref}>
        {picture ? <StreamerPicture src={picture} alt={displayName}>  </StreamerPicture> : <Avatar >{getAvatarString(displayName)}</Avatar>}
        <StreamerName>
            {displayName}
        </StreamerName>
        <StreamerScore>
            {score}
        </StreamerScore>
    </Streamer>
));

const LeaderboardLayout: React.FC = () => {

    const [streamers, setStreamers] = useState<IStreamerProp[]>(userData);
    useEffect(() => {
        const interval = setInterval(() => {
            setStreamers((prevStreamers) => updateScores(prevStreamers));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const sortedStreamers = [...streamers].sort((a, b) => b.score - a.score);

    return (
        <Leaderboard>
            <LeaderboardStreamerContainer>
                <AnimateRows>
                    {sortedStreamers.map((user) => (
                        <StreamerLayoout
                            key={user.userID}
                            userID={user.userID}
                            displayName={user.displayName}
                            picture={user.picture}
                            score={user.score}
                            ref={React.createRef()} />
                    ))}
                </AnimateRows>
            </LeaderboardStreamerContainer>
        </Leaderboard>
    )

}

export default LeaderboardLayout;