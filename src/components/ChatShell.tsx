import type { ChatMessage } from '../types/message'

type ChatShellProps = {
  messages?: ChatMessage[]
}

const sampleMessages: ChatMessage[] = [
  { id: 'robot-1', sender: 'robot', text: 'Hello! I am ready to help.' },
  { id: 'user-1', sender: 'user', text: 'Hi there.' },
]

export function ChatShell({ messages = sampleMessages }: ChatShellProps) {
  const isUserMode = true
  const isRobotMode = false

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-6 text-slate-800">
      <div className="mx-auto flex w-full max-w-md flex-col">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)]">
          <header className="border-b border-slate-200 bg-white px-5 py-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-600">
              Offline Chat
            </p>
            <h1 className="mt-1 text-xl font-semibold text-slate-900">Assistant</h1>
          </header>

          <main className="bg-stone-50">
            <div className="flex min-h-[420px] flex-col gap-3 p-4">
              {messages.map((message) => {
                const isUser = message.sender === 'user'

                return (
                  <div
                    key={message.id}
                    className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-6 shadow-sm ${
                        isUser
                          ? 'bg-violet-600 text-white'
                          : 'border border-slate-200 bg-white text-slate-700'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-slate-200 bg-[#f9f7f4] p-4">
              <div className="rounded-2xl border border-violet-900 bg-[#f8f7f5] p-3 shadow-inner">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-slate-700">Send as</span>

                  <div className="inline-flex rounded-full bg-stone-200 p-1">
                    <button
                      type="button"
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        isUserMode ? 'bg-white text-slate-800 shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      User
                    </button>
                    <button
                      type="button"
                      className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
                        isRobotMode ? 'bg-violet-900 text-white shadow-sm' : 'text-slate-600'
                      }`}
                    >
                      Robot
                    </button>
                  </div>
                </div>

                <div className="mt-3 flex items-end gap-2">
                  <textarea
                    aria-label="Message input"
                    rows={1}
                    placeholder="Type a message"
                    value=""
                    className="min-h-[44px] flex-1 resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                    readOnly
                  />

                  <button
                    type="button"
                    disabled
                    className="h-11 shrink-0 rounded-xl bg-slate-300 px-4 text-sm font-medium text-slate-500"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
