class Vampire {
  constructor(name, yearConverted) {
    this.name = name;
    this.yearConverted = yearConverted;
    this.offspring = [];
    this.creator = null;
  }

  /** Simple tree methods **/

  // Adds the vampire as an offspring of this vampire
  addOffspring(vampire) {
    this.offspring.push(vampire);
    vampire.creator = this;
  }

  // Returns the total number of vampires created by that vampire
  get numberOfOffspring() {
    return this.offspring.length;
  }

  // Returns the number of vampires away from the original vampire this vampire is
  get numberOfVampiresFromOriginal() {
    let countVamps = 0;
    let currentUser = this;
    if (currentUser.name === 'root') {
      return 0;
    } else {
      return countVamps += 1 + currentUser.creator.numberOfVampiresFromOriginal;
    }
    
  }

  // Returns true if this vampire is more senior than the other vampire. (Who is closer to the original vampire)
  isMoreSeniorThan(vampire) {
    if (this.numberOfVampiresFromOriginal < vampire.numberOfVampiresFromOriginal) {
      return true;
    } else {
      return false;
    }
  }

  /** Tree traversal methods **/

  // Returns the vampire object with that name, or null if no vampire exists with that name
  vampireWithName(name) {
    if (this.name === name) {
      return this;
    }
    
    for (const child of this.offspring) {
      // Passes the value up if there is a value returned.
      // The null clause protects against null bubbling up from the bottom nodes
      if (child.vampireWithName(name) !== undefined && child.vampireWithName(name) !== null) {
        return child.vampireWithName(name);
      }
    }
    // Returns null if not found
    return null;
  }

  // Returns the total number of vampires that exist
  get totalDescendents() {
    let total = 0;
    if (this.offspring.length === 0) {
      return 0;
    }
    for (const child of this.offspring) {
      total += child.totalDescendents + 1;
    }
    return total;
  }

  // Returns an array of all the vampires that were converted after 1980
  get allMillennialVampires() {
    let arrayOfVamps = [];
    // If the vamp was infected after 1980, add the array wrapped object
    if (this.yearConverted > 1980) {
      arrayOfVamps.push(this);
      
    }

    if (this.offspring.length === 0) {
      return arrayOfVamps;
    }

    for (const child of this.offspring) {
      if (child.allMillennialVampires !== undefined) {
        arrayOfVamps = arrayOfVamps.concat(child.allMillennialVampires);
      }
    }

    return arrayOfVamps;
    
  }

  /** Stretch **/

  // Returns the closest common ancestor of two vampires.
  // The closest common anscestor should be the more senior vampire if a direct ancestor is used.
  // For example:
  // * when comparing Ansel and Sarah, Ansel is the closest common anscestor.
  // * when comparing Ansel and Andrew, Ansel is the closest common anscestor.
  closestCommonAncestor(vampire) {

    if (vampire.name === this.name) {
      return this;
    } else if (this.isMoreSeniorThan(vampire)) {
      return vampire.creator.closestCommonAncestor(this);
    } else if (vampire.name !== 'root' && this.creator.name === vampire.creator.name) {
      return this.creator;
    } else {
      return this.creator.closestCommonAncestor(vampire);
    }
  }
}

module.exports = Vampire;

