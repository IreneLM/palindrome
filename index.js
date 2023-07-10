// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Adds `blank` to all strings. Returns true if empty string or whitespace.
String.prototype.blank = function(){
  return !!(this.match(/^\s*$/g));
}

// Adds `last` to all Arrays. Returns last element of an array.
Array.prototype.last = function(){
  return this.slice(-1);
}

// Defines a Phrase object.
function Phrase(content){
  this.content = content;

  this.processor = function processor(string){
    return string.toLowerCase();
  }

  //Returns lowercase content ready for palindrome testing.
  this.processedContent = function processedContent(){
    return this.processor(this.content);
  }

  // Returns the phrase in ALL CAPS.
  this.louder = function louder() {
    return this.content.toUpperCase();
  }

  // Returns true for a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
}

// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
  this.content = content;
  this.translation = translation;

  // Returns translation processed for palindrome testing.
  this.processedContent = function processedContent() {
    return this.processor(this.translation);
  }
}

TranslatedPhrase.prototype = new Phrase();
