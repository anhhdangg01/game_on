// /script/forumData.ts
// user name: Tester

export const CURRENT_USER_ID = 'Tester'

export interface ForumPost {
  id: string
  userId: string
  author: string
  message: string
  time: string
  location: string
  sport: string
  needed: string
}

export let forumData: ForumPost[] = [
  {
    id: '1',
    userId: 'abc1',
    author: 'HoopDreams227',
    message: 'Basketball @3PM Wednesday, need 4 more!',
    time: '3:00PM Today',
    location: 'Anteater Recreation Center',
    sport: 'Basketball',
    needed: '4 more',
  },
  {
    id: '2',
    userId: 'abcd',
    author: 'FloofyBall123',
    message: "Please teach me I\'m new!",
    time: '7:20PM June 9',
    location: 'Anteater Recreation Center',
    sport: 'Tennis',
    needed: 'all welcome',
  },
  {
    id: '3',
    userId: 'abcd',
    author: 'ArcticReptilian1',
    message: 'Singles player looking to duo for a change',
    time: '4:23PM June 15',
    location: 'University Community Park',
    sport: 'Pickleball',
    needed: '3 more',
  },
  {
    id: '4',
    userId: 'abcd',
    author: 'XxAngelofSoulsxX',
    message: 'MIDDLE EARTH BASKETBALL TOURNAMENT',
    time: '6:30PM June 30',
    location: 'Middle Earth Basketball Court',
    sport: 'Basketball',
    needed: 'all welcome',
  },
  {
    id: '5',
    userId: 'abcd',
    author: 'casualcapybara',
    message: 'Intermediate player looking for singles to play with',
    time: '7:55PM July 1',
    location: 'University Community Park',
    sport: 'Tennis',
    needed: '1 more',
  },
]

export function addPost(post: Omit<ForumPost, 'userId'>) {
  forumData.unshift({ ...post, userId: CURRENT_USER_ID })
}

export function deletePost(id: string) {
  forumData = forumData.filter((item) => item.id !== id)
}

export function updatePost(updated: ForumPost) {
  forumData = forumData.map((item) => (item.id === updated.id ? updated : item))
}
