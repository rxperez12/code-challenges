
/**
 * Problem: https://leetcode.com/problems/time-needed-to-buy-tickets/
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let time = 0;
  const ticketsAtK = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      time += (ticketsAtK >= tickets[i]) ? tickets[i] : ticketsAtK;
    } else {
      time += (ticketsAtK - 1 >= tickets[i]) ? tickets[i] : ticketsAtK - 1;
    }
  }

  return time;
};

/**
 Need to buy number of tickets at specific location
 i.e. that value needs to be 0
 rest of the values can have that that value subtracted but must be in order
 Numbers infront of k can be subtracted tickets at k index
 Numbers after k can be subtracted k index tickets - 1

 Find tickets at k
 Starting at the beginning, add either k tickets to time or ticket number if number is less than k tickets
 For numbers after index k, do the same but instead with tickets k - 1
 return answer to user
 */


console.log(timeRequiredToBuy([2, 3, 2], 2));
console.log(timeRequiredToBuy([5, 1, 1, 1], 0));

