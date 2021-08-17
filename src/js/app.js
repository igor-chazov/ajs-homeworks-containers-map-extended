export default class Settings {
  constructor() {
    this.setting = new Map();
    this.setting.set('default', { theme: 'dark', music: 'trance', difficulty: 'easy' });
    this.theme = this.setting.get('default').theme;
    this.music = this.setting.get('default').music;
    this.difficulty = this.setting.get('default').difficulty;
  }

  getSettings(config) {
    for (const key of Object.entries(this.setting.get('default'))) {
      this[key[0]] = this.setting.get(this.setting.get(config)[key[0]] ? config : 'default')[key[0]];
    }
  }
}
