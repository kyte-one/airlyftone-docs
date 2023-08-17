# Ranked Random Raffle

This is an automatic winner selection strategy that means that the winners will be chosen without any intervention from the community host.

The ranked random strategy works as following:
1. Sort all participants as per the amount of Fuel they have scored in the particular campaign
2. Select winners from top to bottom
3. If the no. of people who have scored the same fuel are greater than number of winners left to select, then Randomly select the remaining winners.

## Example 1
- **No. of Participants:** 200 
- **No. of Winners:** 50
- **Fuel Scoring:** 
    - 20 fuel is the max fuel that can be scored.
    - 100 Participants scored 20 Fuel
    - Others scored different numbers but less than 20 Fuel
- **Result:** 50 winners will be randomly chosen from the 100 participants who have 20 fuel

## Example 2
- **No. of Participants:** 200
- **No. of Winners:** 50
- **Fuel Scoring:**
    - 20 fuel is the max fuel that can be scored.
    - 20 top participants scored 20 Fuel
    - 80 participants scored 19 Fuel
    - Remaining 100 participants scored less than 19 fuel
- **Result:** 
    - 20 top winners who scored 20 Fuel will be chosen
    - Then, 30 winners will be randomly chosen from the 80 participants who have 19 fuel

## Example 3
- **No. of Participants:** 200
- **No. of Winners:** 50
- **Fuel Scoring:**
    - 20 fuel is the max fuel that can be scored.
    - 10 participants scored 20 Fuel
    - 30 participants scored 19 Fuel
    - 60 participants scored 18 Fuel
    - Remaining 90 participants scored less than 18 fuel
- **Result:** 
    - 10 winners who scored 20 Fuel will be chosen
    - 30 winners who scored 19 Fuel will be chosed
    - Then, 10 winners will be randomly chosen from the 60 participants who have 18 fuel