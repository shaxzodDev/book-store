import React, {useEffect} from "react";

import style from '../sevi/posts/posts.scss';
import BookRepository from "../repo/BookRepository";
import PostRepository from "../repo/PostRepository";

const PostsComponent = (props) => {

    const [posts, setPosts] = React.useState({
        posts: []
    })

    useEffect(() => PostRepository.fetchPosts().then(r => {
        setPosts(r.data)
    }), [])

    return(<>
            <div style={{display: 'flex', justifyContent: "center", alignItems: "center", flexWrap: "wrap", marginTop: '6%'}}>
                <div className="site__wrapper">
                    {posts?.length > 0 ? posts.map(post =>
                        <div className="grid">
                            <div className="card" style={{border: 'none'}}>
                                <div className="card__image"  style={{height:'550px'}}>
                                    <div className="card__overlay">
                                        <div style={{padding: '20px', color: 'black'}}><p style={{fontSize: '1.6em', letterSpacing: '1px'}}>{post.content}</p></div>
                                        <div className="card__overlay-content">
                                            {/*<ul className="card__meta">*/}
                                            {/*    <li><a href="#0"><i className="fa fa-tag"></i> UI/UX</a></li>*/}
                                            {/*    <li><a href="#0"><i className="fa fa-clock-o"></i> 2 days ago</a></li>*/}
                                            {/*</ul>*/}

                                            <ul className="card__meta card__meta--last" >
                                                <li><p style={{color: "black"}}>{post?.authorFullName}</p></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : ''}
                </div>
            </div>
        </>
    )
}

export default PostsComponent;