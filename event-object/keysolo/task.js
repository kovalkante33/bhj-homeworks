class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.timeElement = container.querySelector('.status__time'); // Инициализация элемента времени

    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    /*
      TODO:
      Написать обработчик события, который откликается
      на каждый введённый символ.
      В случае правильного ввода символа вызываем this.success()
      При неправильном вводе символа - this.fail();
      DOM-элемент текущего символа находится в свойстве this.currentSymbol.
     */
    document.addEventListener('keyup', (event) => {
      const enteredChar = event.key.toLowerCase(); // Получаем введённый символ и приводим к нижнему регистру
      const currentChar = this.currentSymbol.textContent.toLowerCase(); // Получаем текущий символ и приводим к нижнему регистру

      if (enteredChar === currentChar) {
        this.success(); // Если символы совпадают, вызываем success
      } else {
        this.fail(); // Если символы не совпадают, вызываем fail
      }
    });
  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();

  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    this.stopTimer();
    this.setNewWord();

  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    this.startTimer(word.length);
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
  startTimer(wordLength) {
    this.timeLeft = wordLength;
    this.timeElement.textContent = this.timeLeft;

    this.timer = setInterval(() => {
      this.timeLeft--;
      this.timeElement.textContent = this.timeLeft;

      if (this.timeLeft <= 0) {
        this.fail();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.timer);
  }
}

new Game(document.getElementById('game'))

