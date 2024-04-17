import styled from 'styled-components'

const Leaderboard = styled.main`
max-width: 490px;
  width: 100%;
  border-radius: 12px;
`

const LeaderboardStreamerContainer = styled.div`
background-color: #fff;
border-radius: 0 0 12px 12px;
padding: 15px 15px 15px;
display: grid;
row-gap: 8px;
`

const Streamer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr 1fr;
align-items: center;
padding: 10px 30px 7px 10px;
overflow: hidden;
border-radius: 10px;
box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
cursor: pointer;
background-color: #fff;
`

const StreamerName = styled.span`
color: #979cb0;
font-weight: 600;
font-size: 20px;
letter-spacing: 0.64px;
margin-left: 12px;
`

const StreamerPicture = styled.img`
max-width: 100%;
width: 60px;
border-radius: 50%;
`

const Avatar = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props => props.color || 'teal'};
text-align: center;
font-size: 26px;
`

const StreamerScore = styled.span`
color: #35d8ac;
font-weight: 700;
font-size: 34px;
text-align: right;
animation: 0.5s alternate infinite;
`
export default {
    Leaderboard,
    LeaderboardStreamerContainer,
    Streamer,
    StreamerName,
    StreamerPicture,
    Avatar,
    StreamerScore
}