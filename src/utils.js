export const counterUtils = {
  add: (currentNumber, increment) => {
    return currentNumber + increment;
  },

  subtract: (currentNumber) => {
    return currentNumber > 0 ? currentNumber - 1 : currentNumber;
  },

  reset: () => {
    return { number: 0, increment: 1 };
  },

  parseIncrement: (inputValue) => {
    const parsed = parseInt(inputValue);
    return isNaN(parsed) ? 1 : parsed;
  },

  clearInput: (inputId) => {
    const element = document.getElementById(inputId);
    if (element) {
      element.value = '';
    }
  },
};

export const resetAll = () => {
  counterUtils.clearInput('increment');
  counterUtils.clearInput('number');
  counterUtils.reset();
};
