import'./home.css'
import maskgroup33 from '../assets/Mask group33.png'
import maskgroup44 from '../assets/Mask group44.png'
import maskgroup55 from '../assets/Mask group55.png'

function Blog() {
  return (
    <div className="blog" id='blog'>
      <div className="top_blog">
        <h2>Recent Blog</h2>
        <button>View All Posts</button>
      </div>
      <div className="bottom_blog">
        <div className="left">
            <img src={maskgroup33} alt="error" />
            <h5>First Time Home Owner Ideas</h5>
            <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
        <div className="center">
            <img src={maskgroup44} alt="error" />
            <h5>First Time Home Owner Ideas</h5>
            <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
        <div className="right">
            <img src={maskgroup55} alt="error" />
            <h5>First Time Home Owner Ideas</h5>
            <p>by Nana Ama on Nov 18th, 2022</p>
        </div>
      </div>
    </div>
  )
}

export default Blog
