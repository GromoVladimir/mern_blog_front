import React, { useEffect } from 'react';
import { PostItem } from '../components/PostItem';
import { PopularPosts } from '../components/PopularPosts';
import {useDispatch, useSelector} from 'react-redux';
import { getAllPosts, getPopularPosts } from '../redux/features/post/postSlice';


export const MainPage = () => {

  // const samplePost = {
  //   id: 1,
  //   username: 'Author',
  //   createdAt: '2022-01-01',
  //   title: 'Test',
  //   text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent aliquam, justo convallis luctus rutrum, erat nulla fermentum diam, at nonummy quam ante ac quam. Maecenas urna purus, fermentum id, molestie in, commodo porttitor, felis. Nam blandit quam ut lacus. Quisque ornare risus quis ligula. Phasellus tristique purus a augue condimentum adipiscing. Aenean sagittis. Etiam leo pede, rhoncus venenatis, tristique in, vulputate at, odio. Donec et ipsum et sapien vehicula nonummy. Suspendisse potenti. Fusce varius urna id quam. Sed neque mi, varius eget, tincidunt nec, suscipit id, libero. In eget purus. Vestibulum ut nisl. Donec eu mi sed turpis feugiat feugiat. Integer turpis arcu, pellentesque eget, cursus et, fermentum ut, sapien. F.',
  //   viewsCount: 100,
  //   likesCount: 50,
  //   imageUrl: 'https://s9.travelask.ru/uploads/post/000/028/617/main_image/full-5ed39700ed1b362b299744986b61078c.jpg',
  //   comments: [{ id: 1, text: 'Comment 1' }, { id: 2, text: 'Comment 2' }, {id:3, text: 'Очень интересно', username: 'Виктория Ли'}],
  // };
  
  // const postsArray = Array.from({ length: 5 }, (_, index) => ({
  //   ...samplePost,
  //   id: index + 1,
  // }));

  const dispatch = useDispatch();
  const {posts, popularPosts} = useSelector(state => state.post);

  useEffect(()=> {
    dispatch(getAllPosts())
    dispatch(getPopularPosts())
  },[])

  // if(!posts.length)
  // {
  //   return (
  //     <div className='text-xl text-center text-white py-10'>Постов не существует</div>
  //   )
  // }

// console.log(posts);
// console.log(posts.items);

  return (
    <div className='max-w-[900px] mx-auto py-10'>
        <div className='flex justify-between gap-8'>
            <div className='flex flex-col gap-10 basis-4/5'>
                {posts.items.map((post, idx) => (
                    <PostItem key={idx} post={post} />
                ))}
            </div>
            <div className='basis-1/5'>
                <div className='text-xs uppercase text-white'>
                    Популярное:
                </div>
                {popularPosts?.items.map((post, idx) => (
                    <PopularPosts key={idx} post={post} />
                ))}
            </div>
        </div>
    </div>
)
}