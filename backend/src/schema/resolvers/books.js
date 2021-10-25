const resolver = {
  Book: {
    title: () => {
      return 'book'
    },
    author: () => {
      // make database call to get author name
    },
  },
}
