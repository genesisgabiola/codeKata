function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
   * followed by one or more letters.
   */
  const re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
  // const re = new RegExp("((Mr\\.)|(Mrs\\.)|(Ms\\.)|(Dr\\.)|(Er\\.))[a-zA-Z]+$");

  /*
   * Do not remove the return statement
   */
  return re;
}

// const regexVar = () => /^(Mr|Mrs|Ms|Dr|Er)(\.)[a-z]+$/gi;