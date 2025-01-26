const profile = {
    username: "Jacob",
  playTime: 300,
  changeUsername(newName) {
    this.username = newName;
  },
  updatePlayTime(hours) {
    this.playTime += hours;
  }
  getInfo() {
    return `${this.Username} has ${this.amount} active hours!`
  }
};
