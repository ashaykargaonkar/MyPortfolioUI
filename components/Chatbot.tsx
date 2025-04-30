'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Message {
  content: string
  role: 'user' | 'assistant'
}

interface ChatbotProps {
  onOpenChange: (isOpen: boolean) => void
}

const Chatbot: React.FC<ChatbotProps> = ({ onOpenChange }) => {
  const chatRef = useRef<HTMLDivElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)
  const [rightPanelOpen, setRightPanelOpen] = useState(true)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)
  const [hasShownWelcome, setHasShownWelcome] = useState(false)

  useEffect(() => {
    if (messagesRef.current) {
      // Scroll to the bottom of the container
      messagesRef.current.scrollTo({
        top: messagesRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        if (isOpen) {
          setIsOpen(false)
          onOpenChange(false)
        }
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onOpenChange])

  const toggleChat = () => {
    const newIsOpen = !isOpen
    setIsOpen(newIsOpen)
    onOpenChange(newIsOpen)
    if (newIsOpen) {
      // Add welcome message only once
      if (!hasShownWelcome) {
        setMessages(prev => [...prev, { 
          content: 'Hi there! I\'m AshayTalks — ask me anything about my work, projects, or skills. I\'m here to make exploring my journey easy.', 
          role: 'assistant' 
        }])
        setHasShownWelcome(true)
      }
    } else {
      // Clear messages when closing
      setMessages([])
    }
  }

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    setIsSending(true);
    
    // Add user message
    setMessages(prev => [...prev, { content: trimmedInput, role: 'user' }]);
    setInput('');

    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
      
      // Fetch JSON data
      const response = await fetch('/AshayTalksData.json');
      if (!response.ok) throw new Error("JSON file not found");
      const jsonData = await response.text();

      // Construct prompt
      const prompt = `Here is some information about Ashay Kargaonkar: ${jsonData}\n\nUser Query: ${trimmedInput}` +
          ". Don't make any assumptions about me and don't talk any nonsense or bad things at all. " +
          "Just answer the questions asked, and their answers will be in the given data for sure.";

      // Create request body for OpenAI API
      const requestBody = {
        model: "gpt-4o-mini",
        max_tokens: 500,
        messages: [{ role: "user", content: prompt }]
      };

      const openAiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestBody)
      });

      if (!openAiResponse.ok) throw new Error(`OpenAI API Error: ${openAiResponse.status}`);
      const responseData = await openAiResponse.json();

      // Extract response
      const chatGptMessage = responseData?.choices?.[0]?.message?.content || "No content found in response.";
      setMessages(prev => [...prev, { content: chatGptMessage, role: 'assistant' }]);
      messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
    } catch (error) {
      console.error("Error in fetching response:", error);
      setMessages(prev => [...prev, { content: `Error: ${error.message}`, role: 'assistant' }]);
      messagesRef.current?.scrollTo(0, messagesRef.current.scrollHeight);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="fixed bottom-12 right-12 bg-blue-500 text-white rounded-xl p-4 px-6 shadow-lg hover:bg-blue-600 transition-colors z-50"
      >
        AshayTalks
      </motion.button>

      {isOpen && (
        <motion.div
          ref={chatRef}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed bottom-4 right-4 bg-gray-900 text-white rounded-lg w-96 h-[80vh] overflow-hidden shadow-xl z-50 flex flex-col"
        >
          <div className="bg-blue-500 p-4 flex items-center justify-between">
            <h3 className="font-semibold">AshayTalks</h3>
            <button
              onClick={toggleChat}
              className="text-white hover:text-gray-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={messagesRef} className="h-[calc(100%-12rem)] overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 ${message.role === 'user' ? 'text-right' : 'text-left'}`}
                role={message.role}
              >
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-700'
                  } max-w-[80%]`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-gray-700">
            <form onSubmit={handleSend} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && input.trim()) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                placeholder="Type your message..."
                className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                disabled={!input.trim() || isSending}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {isSending ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </motion.div>
      )}
    </>
  )
}



export default Chatbot
