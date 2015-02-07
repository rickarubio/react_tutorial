var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
        Hello world! Behold. I am the comment box. Hear me ROAR!
      </div>
    );
  }
});
React.render(
  <CommentBox />,
  document.getElementById('content')
);
