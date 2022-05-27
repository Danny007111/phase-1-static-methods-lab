class Formatter {
  //add static methods here
  static capitalize(letter){
    return letter.charAt(0).toUpperCase() + letter.slice(1);
  };
  static sanitize(string){
    return string.replace(/[^a-zA-Z0-9-' ]/gi, "");
  };
  static titleize(sente){
   
    let exept = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    let newArr = sente.split(" ");

    return newArr.map((word , i)=>{
      // if "true" returns word that includes sente in exept  /and/ it is not the first value of word
      if( exept.includes(word) && i != 0) {
       
        return word;
      }else{
        return word[0].toUpperCase() + word.slice(1);
      }
    }).join(" ");

    // sepAll.forEach(element => {
    //   for(let i = 0; i < exept.length; i++){
    //       if(element === exept[i]){
    //         return newArr.push(element);
    //       }else if(exept[i] === exept[0]){
    //         return newArr.push(element[0].toUpperCase() + element.slice(1));
    //       }; 
    //     };
    //   }
    // );

    // return newArr.join(" ");
    
    //////////////////////////////////////////////
    
    // return allCap.replace(/the|a|an|but|of|and|for|at|by|from/gi, function (x) {
    //   return x.toLowerCase();
    // });
    }
  }