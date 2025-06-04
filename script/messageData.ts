// /script/messageData.ts

export interface Message {
  id: string
  sender: string
  preview: string
}

export let messagesData: Message[] = [
  {
    id: '1',
    sender: 'Tennislover123',
    preview: 'Hey, want to hit the court tomorrow?',
  },
  {
    id: '2',
    sender: 'SoccerStar89',
    preview: 'Got extra gear if you need it.',
  },
  {
    id: '3',
    sender: 'HoopDreams227',
    preview: 'Game at 5 PM today—are you coming?',
  },
  {
    id: '4',
    sender: 'BadmintonQueen',
    preview: 'Up for a friendly match this weekend?',
  },
  {
    id: '5',
    sender: 'PicklePro',
    preview: 'Found a new court near campus.',
  },
  {
    id: '6',
    sender: 'VolleyballVibe',
    preview: 'Need one more player for tonight’s game.',
  },
  {
    id: '7',
    sender: 'RunFastJim',
    preview: 'Let’s do an early morning jog tomorrow.',
  },
  {
    id: '8',
    sender: 'YogaYara',
    preview: 'Join my yoga session at 8 AM?',
  },
]

export function addMessage(msg: Message) {
  messagesData.unshift(msg)
}

export function deleteMessage(id: string) {
  messagesData = messagesData.filter((m) => m.id !== id)
}

export function updateMessage(updated: Message) {
  messagesData = messagesData.map((m) => (m.id === updated.id ? updated : m))
}
