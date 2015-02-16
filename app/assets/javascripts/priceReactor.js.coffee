books = [
  {name: "Hitchhiker's Guide to the Galaxy"}
  {name: "1984"}
  {name: "Dune"}
  {name: "Fahrenheit 451"}
]

BooksListItem = React.createClass
  render: ->
    React.DOM.li({}, @props.book.name)

BooksList = React.createClass
#Component's API method
  getInitialState: ->
    search: ''

  setSearch: (event) ->
    @setState search: event.target.value

  books: ->
    @props.books.filter(
      (book) => book.name.indexOf(@state.search) > -1
    )

  searchInput: ->
    React.DOM.input({
      name: 'search'
      onChange: @setSearch
      placeholder: 'Search...'
    })

  booksList: ->
    React.DOM.ul({}, [
      for book in @books()
        BooksListItem({book: book})
    ])

  render: ->
    # Wrapper that contains another components
    React.DOM.div({},
      @searchInput()
      @booksList()
    )

appNode = document.getElementById('priceReactor')
React.renderComponent(BooksList(books: books), appNode)