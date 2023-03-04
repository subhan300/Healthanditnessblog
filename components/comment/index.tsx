import CommentForm from './form'
import CommentList from './list'
import useComments from '../../hooks/useComment'

export default function Comment({title}) {
  console.log("titl",title)
  const { text, setText, comments, onSubmit, onDelete,data } = useComments(title)

  return (
    <div className="mt-20">
      <CommentForm   onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList data={data} comments={comments} onDelete={onDelete} />
    </div>
  )
}
