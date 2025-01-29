const  sanitizeInput = (input)=>{
    // Convert input to string in case it's not
    const safeInput = String(input);
  
    // Replace special HTML characters with their safe equivalents
    return safeInput
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#x27;")
      .replace(/\//g, "&#x2F;");
  }

 
  
  export default sanitizeInput