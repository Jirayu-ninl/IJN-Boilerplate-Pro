import create from 'zustand'

const store = (set) => ({
  dark: true,
  toggleDark: (state) => set(() => ({ dark: !state.dark })),
})

const store_UI = create(store)

export default store_UI
