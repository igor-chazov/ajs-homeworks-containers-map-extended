import Settings from '../app';

test('должна устанавливать пользовательские настройки', () => {
  class TestSettings {
    constructor() {
      this.setting = new Map();
      this.setting.set('default', { theme: 'dark', music: 'trance', difficulty: 'easy' });
      this.setting.set('user', { music: 'off', difficulty: 'hard' });
      this.theme = 'dark';
      this.music = 'off';
      this.difficulty = 'hard';
    }
  }
  const expected = new TestSettings();
  const received = new Settings();
  received.setting.set('user', { music: 'off', difficulty: 'hard' });
  received.getSettings('user');
  expect(received).toEqual(expected);
});
