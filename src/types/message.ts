export type Sender = 'user' | 'robot'

export type ChatMessage = {
  id: string
  sender: Sender
  text: string
  createdAt?: string
}
