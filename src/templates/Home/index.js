// * React
import React, { useEffect, useState } from 'react';
// * Components
import { loadPosts } from '../../utils/load-posts';
import { Posts } from '../../components/Posts';

import './styles.css';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

function Home() {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((posts) => {
        return posts.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  useEffect(() => {
    loadPosts().then((posts) => {
      setPosts(posts.slice(page, postPerPage));
      setAllPosts(posts);
    });
  }, []);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  const loadMorePosts = () => {
    let nextPage = page + postPerPage;
    let nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    let posts_aux = posts;
    posts_aux.push(...nextPosts);
    // console.log(posts_aux);
    setPosts(posts_aux);
    setPage(nextPage);
  };

  return (
    <section className="container">
      <div className="search-container">
        {searchValue && <h1>Search value: {searchValue}</h1>}
        <TextInput inputValue={searchValue} actionFn={handleChange} />
      </div>

      {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
      {filteredPosts.length === 0 && <p>Não existem posts =(</p>}

      <div className="button-container">
        {!searchValue && (
          <Button
            disabled={noMorePosts}
            onClick={loadMorePosts}
            text="Load more posts"
          />
        )}
      </div>
    </section>
  );
}

export default Home;
