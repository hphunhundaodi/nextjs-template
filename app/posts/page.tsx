'use client'
import Link from 'next/link'
import { Types } from 'types'
import { Button } from 'components/ui/button'
import PostCard from './_components/PostCard'
import useFetch, { useGET } from 'http-react'
import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Posts() {
  const [data, setData] = useState(null)
  const getMongodb = async () => {
    try {
      const res = await fetch('/api/posts', {
        method: "GET"
      })
      console.log('getMongodb', res);
      const list = await res?.json()
      console.log('getMongodb', list);
      setData(list)
    } catch (error) {
      console.log(error);
    }
  }
  const postMongodb = async () => {
    try {
      const res = await fetch('/api/posts', {
        method: "POST",
        body: JSON.stringify({
          title: '666',
          content: 'huangguapi',
          date: new Date(),
        })
      })
      console.log('postMongodb', res);
      // const list = await res?.json()
      // console.log(list);
      // setData(list)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getMongodb()
    // postMongodb()
  }, [])
  // fetch('/api/posts')
  //   .then((response) => {
  //     console.log(response);
  //     const getdata = response
  // const data = getdata.data
  // const loadingFirst = getdata.loadingFirst
  // const error = getdata.error
  // })
  // const getdata = useFetch('/posts')
  // console.log('getdata', getdata);
  return (
    <div>{JSON.stringify(data)}</div>
  )
  // const postdata = useFetch<Types.Post[]>('/posts', {
  //   default: [],
  //   method: 'POST',
  //   body: {
  //     title: 'first prisma',
  //     content: 'la 呱皮.4!!',
  //     date: new Date().getDate()
  //   }
  // })
  // console.log('postdata', postdata);


  // if (loadingFirst)
  //   return <p className='text-2xl font-semibold py-4'>Loading posts...</p>

  // if (error)
  //   return <p className='text-2xl text-red-400 py-4'>Failed to fetch posts</p>

  // return (
  //   <section>
  //     <Link href='/' className='flex gap-1 items-center '>
  //       <ArrowLeft size={18} />
  //       Back
  //     </Link>
  //     <header className='flex items-center justify-between my-4 md:my-8'>
  //       <h1 className='font-bold text-2xl'>All Posts</h1>
  //       <Link href='/posts/create'>
  //         <Button size='sm' variant='outline'>
  //           Create Post
  //         </Button>
  //       </Link>
  //     </header>
  //     <div className='py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2 rounded-md'>
  //       {data.map(post => (
  //         <PostCard post={post} key={post.id} />
  //       ))}
  //     </div>
  //   </section>
  // )
}
