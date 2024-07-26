class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
      const countS = this.counter(s)
      const countT = this.counter(t)
      const longestWord = 

      console.log(countS, countT)

      for(const key in countS){
          let valueS  = countS[key]
          let valueT = countT[key]
          if(valueS !== valueT) return false
      }

      return true;
  }

  counter(str){
      const counter = {}
      for(const ltr of str){
          counter[ltr] = counter[ltr] + 1 || 1;
      }

      return counter
  }
}

