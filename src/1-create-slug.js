// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  let lowered = title.toLowerCase()
  let replaced = lowered.replaceAll(' ', '-')
  let banned = "!, #, ?"
   for (let i = 0; i < lowered[i]; i++){
    let char = lowered[i]
    if (banned.includes(char)){
      return null
    } 
  }
  return replaced
};

module.exports = {
  createSlug,
};

console.log(createSlug("Hello World")); //
console.log(createSlug("JavaScript Is #AWESOME!?"));