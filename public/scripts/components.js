var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement(
        'div',
        { className: 'commentBox' },
        'Hello world! Behold. I am the comment box!',
        React.createElement('h1', null, 'Comments'),
        React.createElement(CommentList, null),
        React.createElement(CommentForm, null)
      )
    );
  }
});

var CommentList = React.createClass({
  displayName: 'CommentList',
  render: function() {
    return (
      React.createElement(
        'div',
        { className: 'commentList' },
        'Hola Mundo yo soy un comment list!'
      )
    );
  }
});

var CommentForm = React.createClass({
  displayName: 'CommentForm',
  render: function() {
    return (
      React.createElement(
        'div',
        { className: 'commentForm' },
        'Shazam. I am the comment form!'
      )
    );
  }
});

React.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);
