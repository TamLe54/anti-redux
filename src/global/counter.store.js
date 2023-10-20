import { initStore } from './store'

export const configureCounterStore = () => {
  const actions = {
    ADD: (state, amount) => ({ counter: state.counter + amount }),
    SUB: (state, amount) => ({ counter: state.counter - amount }),
  }

  initStore(actions, { counter: 0 })
}
