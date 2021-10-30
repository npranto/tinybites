(() => {
  // ==================== ELEMENTS =========================
  const decrementBtn = document.querySelector('#decrement-btn');
  const incrementBtn = document.querySelector('#increment-btn');
  const resetBtn = document.querySelector('#reset-btn');
  const stepInput = document.querySelector('#step-input');
  const counter = document.querySelector('#counter');

  // ==================== FUNCTIONALITIES =========================
  function Counter (startAt = 0, stepBy = 1) {
    const state =  {
      count: startAt,
      step: stepBy,
    };

    return () => {
      return {
        reset: () => {
          state.count = 0;
        },
        increment: () => {
          state.count = state.count + state.step;
        },
        decrement: () => {
          state.count = state.count - state.step;
        },
        setStep: (newStep) => {
          state.step = parseInt(newStep);
        },
        getCount: () => {
          return state.count;
        },
        getStep: () => {
          return state.step;
        }
      }
    };
  }

  function renderCounter(count) {
    counter.innerHTML = count;
  }

  function renderStep(step) {
    stepInput.value = step;
  }

  // ==================== EVENTS =========================
  window !== null && window
    .addEventListener('DOMContentLoaded', () => {
      renderCounter(TB_COUNTER.getCount());
      renderStep(TB_COUNTER.getStep());
    });

  incrementBtn !== null && incrementBtn
    .addEventListener('click', () => {
      TB_COUNTER.increment();
      renderCounter(TB_COUNTER.getCount());
    });

  decrementBtn !== null && decrementBtn
    .addEventListener('click', () => {
      TB_COUNTER.decrement();
      renderCounter(TB_COUNTER.getCount());
    });

  resetBtn
    .addEventListener('click', () => {
      TB_COUNTER.reset();
      renderCounter(TB_COUNTER.getCount());
    });

  stepInput
    .addEventListener('change', (e) => {
      const { target: { value } = {} } = e || {};
      if (value) {
        TB_COUNTER.setStep(parseInt(value));
      }
    });

  // ==================== EXEC =========================
  const TB_COUNTER = Counter(0, 1)();
})();