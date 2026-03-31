"use client"
import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export function RotateWords({
  words = ["Word 1", "Word 2", "Word 3"],
}: {
  words: string[]
}) {
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 5000)
    // Clean up interval on unmount
    return () => clearInterval(interval)
  }, [words.length]);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index]}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.5 }}
        className="text-muted-foreground"
      >
        {words[index]}
      </motion.span>
    </AnimatePresence>
  )
}