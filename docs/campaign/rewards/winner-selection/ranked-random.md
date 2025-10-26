# Ranked Random Raffle (End)

This is an automatic winner selection strategy that means that the winners will be chosen without any intervention from the community host.

The ranked random strategy works as following:
1. Sort all participants as per the amount of XP they have scored **in the particular campaign.** 
2. Select winners from top to bottom
3. If the no. of people who have scored the same XP are greater than number of winners left to select, then Randomly select the remaining winners.
4. The rewards are distributed when the campaign ends.

*Please Note:  The community leaderboard ranking is based on the XP you have earned across all campaigns in a community but the Ranked Random Raffle will only consider the XP that you have earned within the campaign. In case you want to show the users their ranks before hand then enable a Campaign Leaderboard*

## Example 1
- **No. of Participants:** 200 
- **No. of Winners:** 50
- **XP Scoring:** 
    - 20 XP is the max XP that can be scored.
    - 100 Participants scored 20 XP
    - Others scored different numbers but less than 20 XP
- **Result:** 50 winners will be randomly chosen from the 100 participants who have 20 XP

## Example 2
- **No. of Participants:** 200
- **No. of Winners:** 50
- **XP Scoring:**
    - 20 XP is the max XP that can be scored.
    - 20 top participants scored 20 XP
    - 80 participants scored 19 XP
    - Remaining 100 participants scored less than 19 XP
- **Result:** 
    - 20 top winners who scored 20 XP will be chosen
    - Then, 30 winners will be randomly chosen from the 80 participants who have 19 XP

## Example 3
- **No. of Participants:** 200
- **No. of Winners:** 50
- **XP Scoring:**
    - 20 XP is the max XP that can be scored.
    - 10 participants scored 20 XP
    - 30 participants scored 19 XP
    - 60 participants scored 18 XP
    - Remaining 90 participants scored less than 18 XP
- **Result:** 
    - 10 winners who scored 20 XP will be chosen
    - 30 winners who scored 19 XP will be chosed
    - Then, 10 winners will be randomly chosen from the 60 participants who have 18 XP