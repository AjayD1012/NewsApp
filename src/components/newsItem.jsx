import image from '../assets/news.webp'

 const NewsItem = ({title, description, src, url}) => {
  return (

    <div class="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
  <img src={src?src:image} class="card-img-top" style={{height:"200px", width:"324px"}} alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{title.slice(0,51)}</h5>
    <p class="card-text">{description?description.slice(0,130):"News is provided according to the incident so the incident happend on the spot"}</p>
    <a href={url} class="btn btn-info"> Read more</a>
  </div>
</div>
  )
}
export default NewsItem;